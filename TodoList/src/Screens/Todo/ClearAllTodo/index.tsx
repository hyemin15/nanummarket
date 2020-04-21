import React, { useContext } from 'react'; 
import Styled from 'styled-components/native';
import ClearButton from './ClearAllButton';

import { TodoListContext } from '~/Context/TodoListContext';

interface Props {}

const ClearAllTodo = ({ }: Props) => {
    const { clearTodoList } = useContext<ITodoListContext>(TodoListContext);
    
    return (
        <>
        <ClearButton onPress={() => clearTodoList(true)} />
        </>
    );
};

export default ClearAllTodo;

