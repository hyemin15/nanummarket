import {
  createSwitchNavigator, /* 로그인 여부 판단, 로그인 여부에 따라 보여줄 화면 전환하기 위해 사용할 내비게이션 */
  createStackNavigator, /* 영화 리스트 화면에서 영화를 선택하면 영화의 상세 페이지를 보여주기 위해 사용 */
  createAppContainer, /* 내비게이션 다루기 위한 State, 링크 등 관리 */
} from 'react-navigation';

import CheckLogin from '~/Screens/CheckLogin'; /* 로그인 여부 체크 */
import Login from '~/Screens/Login'; /* 로그인 */
import MovieHome from '~/Screens/MovieHome'; /* 영화 리스트 */
import MovieDetail from '~/Screens/MovieDetail'; /* 영화 상세 정보 */

const LoginNavigator = createStackNavigator({ /* 회원가입 화면 추가 가능 */
  Login,
});

const MovieNavigator = createStackNavigator({
  MovieHome,
  MovieDetail,
});

const AppNavigator = createSwitchNavigator(
  {
    CheckLogin, 
    LoginNavigator, /* CheckLogin에서 로그인 여부 체크하여 로그인 하지 않았다면 LoginNavigator */
    MovieNavigator, /* 로그인 하였다면 MovieNavigator */
  },
  {
    initialRouteName: 'CheckLogin',
  }
);

export default createAppContainer(AppNavigator);
