import React, { useContext } from 'react'; //함수형 컴포넌트에서 Context를 사용하기 위해서는 리액트 훅의 useContext 함수를 불러와야함
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';

import { TodoListContext } from '~/Context/TodoListContext';


import EmptyItem from './EmptyItem';
import TodoItem from './TodoItem';

const Container = Styled(FlatList)`
`;

interface Props {}

const TodoList = ({ }: Props) => {
    const { todoList, removeTodoList } = useContext<ITodoListContext>( //todoList, removeTodoList 불러와라~
        TodoListContext  //앞에서 만든 TodoListContext를 초기값으로 설정
    );
    return (
        <Container 
        data={todoList} // data: 리스트뷰에 표시할 데이터의 배열
        keyExtractor={(item, index) => {  // keyExtractor: FlatList에서 반복적으로 표시하는 Item에 키 값을 설정하기 위한 Props
            return `todo-${index}`;
        }}
        ListEmptyComponent={<EmptyItem />} // ListEmptyComponent: 주어진 배열에 데이터가 없을 경우, 표시되는 컴포넌트
        renderItem={({ item, index }) => ( //renderItem : 주어진 배열에 데이터를 사용하여 반복적으로 표시될 컴포넌트 
            <TodoItem
            text={item as string}
            onDelete={() => removeTodoList(index)}
            />
        )}
        contentContainerStyle={todoList.length === 0 && { flex: 1 }} //표시할 데이터가 없다면 -> ListEmptyComponent의 컴포넌트가 화면에 표시
                                                                    //그렇지만 이 컴포넌트도 하나의 리스트 아이템으로 표시되기 때문에, 전체 화면으로 표시되지 않음
                                                                    // 그래서 전체화면으로 표시하기 위해  flex: 1  설정
        />
    );
};

export default TodoList;

