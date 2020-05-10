import React, { useEffect, useState, isValidElement } from 'react';
import { FlatList, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service'; /* 위치 정보 사용하기 위한 라이브러리 */

import Styled from 'styled-components/native';

const Container = Styled.SafeAreaView`
    flex: 1;
    background-color: #EEE;
`;

const WeatherContainer = Styled(FlatList)``; /* FlatList의 당겨서 갱신하기 기능을 사용하기 위해서 사용 */

const LoadingView = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Loading = Styled.ActivityIndicator`
    margin-bottom: 16px;
`;

const LoadingLabel = Styled.Text`
    font-size: 16px;
`;

const WeatherItemContainer = Styled.View`
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const Weather = Styled.Text`
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: bold;
`;

const Temperature = Styled.Text`
    font-size: 16px;
`;

interface Props {}

const API_KEY = '8125a0f955f75f8f106cd6b47bde5fc8';

/* 타입스크립트 사용하여 컴포넌트에서 사용한 정보 정의 */
interface IWeather {
    temperature?: number;
    weather?: string;
    isLoading?: boolean;
}

const WeatherView =({ }: Props) => {
    const [weatherInfo, setWeatherInfo] = useState<IWeather>({
        temperature: undefined,
        weather: undefined,
        isLoading: false,
    });

    /* 위치 정보 습득하여 해당 위치의 날씨 정보 가져오기 위한 함수(getCurrentWeather) 정의 */
    const getCurrentWeather = () => {
        setWeatherInfo({
            isLoading: false,
        });
        Geolocation.getCurrentPosition( /* 현재 위치의 위, 경도 가져와라 */
            position => {
                const { latitude, longitude } = position.coords;
                fetch(
                    `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
                )
                .then(response => response.json())
                .then(json => { /* 정상처리 :setWeatherInfo를 통해 State에 설정 */
                    setWeatherInfo({
                        temperature: json.main.temp,
                        weather: json.weather[0].main,
                        isLoading: true,
                    });
                })
                .catch(error => { /* 에러처리 */
                    setWeatherInfo({
                        isLoading: true,
                    });
                    showError('날씨 정보를 가져오는데 실패하였다.');
                });
            },
            error => { /* 위치정보 습득에 실패하면 showError 함수를 통해 실패 메시지를 화면에 표시해라 */
                setWeatherInfo({
                    isLoading: true,
                });
                showError('위치 정보를 가져오는데 실패하였다.')
            }
            );
    };
    const showError = (message: string): void => {  /* 실패 메시지 표시할 때 사용하는 함수 */
        setTimeout(() => {
            Alert.alert(message);
        }, 500);
    };

    useEffect(() => { 
        getCurrentWeather(); /* WeatherView 컴포넌트가 화면에 표시된 후, 날씨 데이터 가져와라 */
    }, []);                  /* 두번째 인수[] : Props, State가 변경되어 화면이 업데이트 될 때에는 호출하지 않도록 */

    let data = [];
    const { isLoading, weather, temperature } = weatherInfo;
    if (weather && temperature) {
        data.push(weatherInfo);
    }

    return (
        <Container>
            <WeatherContainer onRefresh={() => getCurrentWeather()} /* 당겨서 갱신하기 기능 => 호출할 함수 정의 */
            refreshing={!isLoading}
            data={data}
            keyExtractor={(item, index) => {
                return `Weather-${index}`;
            }}
            ListEmptyComponent={
                <LoadingView>
                    <Loading size="large" color='#1976D2' />
                    <LoadingLabel>Loading...</LoadingLabel>
                </LoadingView>
            }
            renderItem={({item, index}) => (
                <WeatherItemContainer>
                    <Weather>{(item as IWeather).weather}</Weather>
                    <Temperature>({(item as IWeather).temperature}C)</Temperature>
                </WeatherItemContainer>
            )}
            contentContainerStyle={{ flex: 1 }}
            />
        </Container>
    );
};

export default WeatherView;

