/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from 'react';
import Styled from 'styled-components/native';
import Game from './Screens/Game';

const Container = Styled.View`
    flex: 1;
    background-color: #EEE;    
`

const App = () => {
    return (
        <Container>
            <Game title="폭탄돌리기"  />
        </Container>
    );
};


export default App;