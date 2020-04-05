/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from 'react';
import Styled from 'styled-components/native';
import Counter from './Screens/Counter';

const Container = Styled.View`
    flex: 1;
    background-color: #EEE;    
`

const App = () => {
    return (
        <Container>
            <Counter title="This is a Counter App +_+" initValue={5} />
        </Container>
    );
};


export default App;