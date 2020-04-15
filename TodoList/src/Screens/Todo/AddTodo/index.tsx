import React, { useState } from 'react'; 

// AddTodo 컴포넌트는 할 일 데이터를 입력받는 TodoInput 컴포넌트와 이 컴포넌트를 표시하기 위한 AddButton 컴포넌트를 가지고 있다.
import AddButton from './AddButton';
import TodoInput from './TodoInput';


interface Props {}

const AddTodo = ({ }: Props) => {
    const [showInput, setShowInput] = useState<boolean>(false);  
    //useState 를 사용하여 AddButton 눌렀을 때, 할일 입력하는 TodoInput 를 화면에 표시하기 위해 showInput이라는 State 생성
    
    
    return (
        <>
        <AddButton onPress={() => setShowInput(true)} />
        { showInput && <TodoInput hideTodoInput={() => setShowInput(false)}/> }
        </> // State는 AddButton 눌렀을 때, TodoInput를 화면에 표시하고, 할일 입력을 완료하면 해당 컴포넌트를 숨기도록 해라(hideTodoInput)
    );
};

export default AddTodo;

