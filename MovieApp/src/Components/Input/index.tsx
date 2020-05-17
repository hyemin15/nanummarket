import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  width: 100%;
  height: 40px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 4px;
  background-color: #333333;
`;
const InputField = Styled.TextInput`
  flex: 1;
  color: #FFFFFF;
`;

interface Props {
  placeholder?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  secureTextEntry?: boolean;
  style?: Object;
  clearMode?: boolean;
  onChangeText?: (text: string) => void;
}

const Input = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  style,
  clearMode,
  onChangeText,
}: Props) => {
  return (
    <Container style={style}>
      <InputField
        selectionColor="#FFFFFF" /* 입력필드에 내용 복사 or 붙여넣기 위해 사용하는 selection 색상 결정 */
        secureTextEntry={secureTextEntry} /* 비밀번호 같이 입력 내용을 숨길지 여부 결정 */
        keyboardType={keyboardType ? keyboardType : 'default'} /* 키보드 타입 결정 */
        autoCapitalize="none" /* 첫 문자를 대문자로 자동 변환할 것인가 */
        autoCorrect={false} /* 오타 자동 수정 여부 결정 */
        allowFontScaling={false}
        placeholderTextColor="#FFFFFF"
        placeholder={placeholder}
        clearButtonMode={clearMode ? 'while-editing' : 'never'}
        onChangeText={onChangeText}
      />
    </Container>
  );
};

export default Input;