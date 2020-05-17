import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import Styled from 'styled-components/native';

import BigCatalogList from './BigCatalogList';
import SubCatalogList from './SubCatalogList';

const Container = Styled.ScrollView`
  flex: 1;
  background-color: #141414;
`;

const StyleButton = Styled.TouchableOpacity`
  padding: 8px;
`;
const Icon = Styled.Image`
`;

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

const MovieHome = ({ navigation }: Props) => { 

  /* 로그아웃하면 AsyncStorage에 저장된 인증키 제거하고, 로그인 내비게이션으로 화면을 이동시킨다. */
  const _logout = () => {
    AsyncStorage.removeItem('key');
    navigation.navigate('LoginNavigator');
  };

  useEffect(() => { /* navigation에 매개변수 설정 */
    navigation.setParams({ 
      logout: _logout,
    });
  }, []);

  return (
    <Container>
      <BigCatalogList
        url="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5" /* like_count 내림차순 5개 */
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', { /* 클릭하면 상세 페이지 이동 */
            id,
          });
        }}
      />
      <SubCatalogList
        title="최신 등록순"
        url="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
      <SubCatalogList
        title="평점순"
        url="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
      <SubCatalogList
        title="다운로드순"
        url="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
    </Container>
  );
};

interface INaviProps {
  navigation: NavigationScreenProp<NavigationState>;
}

MovieHome.navigationOptions = ({ navigation }: INaviProps) => { /* 내비게이션 옵션 함수로 설정 */
  const logout = navigation.getParam('logout'); /* 위에서 설정한 로그아웃 함수 가져와 내비게이션 헤더 오른쪽 버튼과 연결 */
  return {
    title: 'MOVIEAPP',
    headerTintColor: '#E70915',
    headerStyle: {
      backgroundColor: '#141414',
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerBackTitle: null, /* 뒤로가기 버튼 제목 제거 */
    headerRight: (
      <StyleButton
        onPress={() => {
          if (logout && typeof logout === 'function') {
            logout();
          }
        }}>
        <Icon source={require('~/Assets/Images/ic_logout.png')} />
      </StyleButton>
    ),
  };
};

export default MovieHome;