import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`
    position : absolute;
    bottom : 10px;
    align-self : flex-end;
    justify-content : flex-end;
    opacity: 0.5;
`;

const ButtonContainer = Styled.TouchableOpacity`
    box-shadow:4px 4px 8px #999;
`;
const Icon = Styled.Image``;

interface Props {
    onPress?:()=>void 
}

const ClearAllButton = ({onPress}:Props)=>{
    return(
        <Container>
            <ButtonContainer onPress={onPress}>
                <Icon source={require('~/Assets/Images/clear.png')} />
            </ButtonContainer>
        </Container> 
    );
};

export default ClearAllButton;