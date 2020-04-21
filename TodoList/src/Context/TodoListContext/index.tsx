import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

/**/
interface Props {
    children: JSX.Element | Array<JSX.Element>;
}


/* createContext: context 생성(초기값 할당) */
const TodoListContext = createContext<ITodoListContext>({
    todoList: [], 
    addTodoList: (todo: string): void => {}, /* todoList에 데이터 추가하기 위한 함수 */
    removeTodoList: (index: number): void => {}, /* todoList에 데이터 삭제하기 위한 함수 */
    clearTodoList: (): void => {},
});


// 공통 컴포넌트 = TodoComponent
// TodoListContextProvider = TodoComponent의 부모 컴포넌트
const TodoListContextProvider = ({ children }: Props) => { /* 자식 컴포넌트를 children 매개변수를 통해 전달 받음 */
    const [todoList, setTodoList] = useState<Array<String>>([]); /* useState로 생성한 State를 Context 안에 저장 */
                                                                 /* useState로 만든 todoList는 불변값 */
    const addTodoList = (todo: string): void => { /* todoList에  todo 추가 */
        const list = [...todoList, todo]; 
        setTodoList(list);
        AsyncStorage.setItem('todoList', JSON.stringify(list)); /* list를 문자열로 변환 -> AsyncStorage.setItem으로 데이터를 물리적으로 저장 */
    };

    const removeTodoList = (index: number): void => { /* todoList에  todo 제거 */
        let list = [...todoList]; /* todoList 는 직접 변경이 불가능 → todoList 복사해서 새로운 배열 생성 */
        list.splice(index, 1);
        setTodoList(list); /* setTodoList로 State에 제거된 데이터 저장 */
        AsyncStorage.setItem('todoList', JSON.stringify(list)); /* 변경된 값 update */
    };
    
    const clearTodoList = (): void => {
        const list = Array<string>();
        setTodoList(list);
        AsyncStorage.setItem('todoList', JSON.stringify(list));
    };

    const initData = async () => { /* 앱이 시작될 때 AsyncStorage에 저장된 데이터 불러와, context의 값을 초기화하기 위한 함수 */
        try {
            const list = await AsyncStorage.getItem('todoList'); /* 값을 바로 초기화하기 위해 async-await 사용하여 동기화 처리를 했다 */
            if (list !== null) {
                setTodoList(JSON.parse(list)); /* 문자열 배열로 변경 */
            }
        } catch (e) {
            console.log(e);
        }
    };


    useEffect(() => { /* useEffect: 데이터 가져와서 설정하도록 */
        initData(); /* 첫번째 매개변수 : useEffect의 첫번 째 매개변수로 함수(데이터 초기화 함수) 전달 */
    }, []); /* 두번째 매개변수 : 빈 배열 */

    return(
        <TodoListContext.Provider
        value={{
            todoList, addTodoList, removeTodoList, clearTodoList,
        }}>
            {children}
        </TodoListContext.Provider>
    );
};

export { TodoListContextProvider, TodoListContext }; /* context 제공하기 위해 provider 컴포넌트와 context 내보내기 */
