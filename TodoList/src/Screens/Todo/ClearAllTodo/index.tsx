import React, { useContext,useState } from 'react'; 
import Styled from 'styled-components/native';
import ClearAllButton from './ClearAllButton';
import Dialog from 'react-native-dialog';

import { TodoListContext } from '~/Context/TodoListContext';


interface Props {}

const ClearAllTodo = ({ }: Props) => {
    const { clearTodoList } = useContext<ITodoListContext>(TodoListContext);
    const [ dialogVisible, setDialogVisible ] = useState<boolean>(false);
    
    return (
        <>
            <ClearAllButton onPress={() => setDialogVisible(true)} />
            <Dialog.Container visible={dialogVisible}>
                <Dialog.Title>전체 삭제</Dialog.Title>
                <Dialog.Description>정말로 삭제를 원하시나요?</Dialog.Description>
                <Dialog.Button label="아니요" onPress={() => {setDialogVisible(false)}} />
                <Dialog.Button label="네" onPress={() => {setDialogVisible(false); clearTodoList();}} />
            </Dialog.Container>
        </>
    );
};

export default ClearAllTodo;