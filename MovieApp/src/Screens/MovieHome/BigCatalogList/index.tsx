import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';

import BigCatalog from '~/Components/BigCatalog';

const Container = Styled.View`
    height: 300px;
    margin-bottom: 8px;
`;

interface Props {
  url: string;
  onPress: (id: number) => void;
}

const BigCatalogList = ({ url, onPress }: Props) => {
  const [data, setData] = useState<Array<IMovie>>([]);

  useEffect(() => { /* fetch API를 통해 영화 리스트 데이터를 가져와, 이 State에 값을 채우도록 설정 */
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setData(json.data.movies);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <FlatList
        horizontal={true} /* 가로로 스크롤이 되도록 설정 */
        pagingEnabled={true} /* 가로로 스크롤 할 때, 한 리스트 아이템이 한 화면에 보이도록 설정 */
        data={data}
        keyExtractor={(item, index) => {
          return `bigScreen-${index}`;
        }}
        renderItem={({ item, index }) => (
          <BigCatalog
            id={(item as IMovie).id}
            image={(item as IMovie).large_cover_image}
            year={(item as IMovie).year}
            title={(item as IMovie).title}
            genres={(item as IMovie).genres}
            onPress={onPress}
          />
        )}
      />
    </Container>
  );
};

export default BigCatalogList;