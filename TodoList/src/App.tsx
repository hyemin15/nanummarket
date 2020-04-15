//import React, { Fragment } from 'react';
//import { StatusBar, SafeAreaView } from 'react-native';

import React from 'react';
import Styled from 'styled-components/native';

import { TodoListContextProvider } from '~/Context/TodoListContext';

import Todo from './Screens/Todo';

const Container = Styled.View`
    flex: 1;
    background-color: #EEE;
`;

const App = () => {
    return (
        <TodoListContextProvider>
            <Container>
                <Todo />
            </Container>
        </TodoListContextProvider>
    );
};

export default App;

// import {
//     Header,
//     LearnMoreLinks,
//     Colors,
//     DebugInstructions,
//     ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen'


/* ScrollView의 배경색 지정*/
// const ScrollView = Styled.ScrollView`
//     background-color: ${Colors.lighter};  
// `;

// const Body = Styled.View`
//     background-color: ${Colors.white};
// `;

// const SectionContainer = Styled.View`
//     margin-top: 32px;
//     padding-horizontal: 24px;
// `;

// /* View와 Text의 차이?*/
// const SectionDescription = Styled.Text`
//     margin-top: 8px;
//     font-size: 18px;
//     font-weight: 400;
//     color: ${Colors.dark};
// `;

// const HighLight = Styled.Text`
//     font-weight: 700;
// `;




// interface Props {}

// const App = ({ }: Props) => {
//     return (
//         <Fragment>
//             <StatusBar barStyle="dark-content" /> 
//             <SafeAreaView>
//                 <ScrollView contentInsetAdjustmentBehavior = 'automatic'>
//                     <Header />
//                     <Body>
//                         <SectionContainer>
//                             <SectionDescription>Step One</SectionDescription>
//                             <SectionDescription>
//                                 Edit <HighLight>App.js</HighLight> to change this screen and then come back to see your edits.
//                             </SectionDescription>
//                         </SectionContainer>

//                         <SectionContainer>
//                             <SectionDescription>See Your Changes</SectionDescription>
//                             <SectionDescription>
//                                 <ReloadInstructions />
//                             </SectionDescription>
//                         </SectionContainer>

//                         <SectionContainer>
//                             <SectionDescription>Debug</SectionDescription>
//                             <SectionDescription>
//                                 <DebugInstructions />
//                             </SectionDescription>
//                         </SectionContainer>

//                         <SectionContainer>
//                             <SectionDescription>Learn More</SectionDescription>
//                             <SectionDescription>
//                                 Read the docs to discover what to do next:
//                             </SectionDescription>
//                         </SectionContainer>
//                         <LearnMoreLinks />
//                     </Body>
//                 </ScrollView>
//             </SafeAreaView>
//         </Fragment>

//     );
// };

// export default App;