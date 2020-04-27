import React, { useState  } from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';


const Container = Styled.SafeAreaView`
    flex: 1;    
`;


const TitleContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TitleLabel = Styled.Text`
    font-size: 40px;
    font-weight: bold;
`;

const IconContainer = Styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
`;

const Icon = Styled.Image`
    width: 60px;
    height: 60px;
`
;

const CountContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const CountLabel = Styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: #e8702a;
   
`;

const ButtonContainer = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;




interface Props {
    title?: string;
}

const Game = ({title}: Props) => {
    const SampleNameArray = ["송석민", "안세진", "정다예", "조민구", "지영미", "최혜민",""];
    const [count, setCount] = useState<number>(0);

    return (
        <Container>
            {title && (
                <TitleContainer>
                    <TitleLabel>{title}</TitleLabel>
                </TitleContainer>
            )}
            <IconContainer>
                <Icon source={require('~/Assets/Images/money.png')} />
                <Icon source={require('~/Assets/Images/money.png')} />
                <Icon source={require('~/Assets/Images/money.png')} />
            </IconContainer>
            <CountContainer>
                <CountLabel>{SampleNameArray[Math.floor(Math.random() * 7)]}</CountLabel>
            </CountContainer>
            <ButtonContainer>
                <Button iconName="go" onPress={() => setCount(Math.floor(Math.random() * 7))} /> 
            </ButtonContainer>

            
        </Container>
    );
};
export default Game;

