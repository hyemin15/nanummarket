import React, { useContext } from 'react'; 
import Styled from 'styled-components/native';

import { TodoListContext } from '~/Context/TodoListContext';


const Input = Styled.TextInput`
    width: 100%;
    height: 40px;
    background-color: #FFF;
    padding: 0px 8px;
`;

interface Props {
    hideTodoInput: () => void;
}

//useContext를 사용하여 Context를 사용하도록 설정
const TextInput = ({ hideTodoInput }: Props) => {
    const { addTodoList } = useContext<ITodoListContext>(TodoListContext);  
    //useContext 초기값으로 우리가 만든 TodoListContext 를 전달하고, 전역 데이터인 할 일 리스트에 데이터를 추가하기 위해 addTodoList 함수를 할당 받음

    return (
        <Input 
        autoFocus={true}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="할 일을 입력한다"
        returnKeyType="done"
        onSubmitEditing={({ nativeEvent }) => { //할당받은 addTodoList 함수는 TextInput 의 onSubmitEditing 함수와 연결 (완료 버튼 누르면 호출됨)
            //context에 데이터 저장하고, todoinput 컴포넌트 숨기도록 hideTodoInput 함수 호출
            addTodoList(nativeEvent.text);
            hideTodoInput();
        }}
        />
    );
};

export default TextInput;

