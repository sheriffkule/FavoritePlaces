import React from 'react';
import {FlatList} from 'react-native';

function PlaesList({places}) {
  return (
    <FlatList
      data={places}
      keyExtractor={item => item.id}
      renderItem={places}
    />
  );
}

export default PlaesList;
