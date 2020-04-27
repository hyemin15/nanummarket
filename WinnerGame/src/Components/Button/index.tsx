import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity``;
const Icon = Styled.Image``;

interface Props {
    iconName: 'go'  | 'undo';
    onPress?: () => void;
}

const Button = ({ iconName, onPress }: Props) => {
    return (
        <Container onPress={onPress}>
            <Icon
                source={
                    iconName === 'go'
                    ? require('~/Assets/Images/go.png')
                    : require('~/Assets/Images/undo.png')
                }
            />
        </Container>
    );
};
export default Button;