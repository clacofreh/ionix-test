import {Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import useMemesPaginated from '../hooks/useMemesPaginated';

const HomeScreen = () => {
  const {simpleMeme, isLoading, loadMemes} = useMemesPaginated();
  /*  simpleMeme.map(({id, author, image, title, score, num_comments}) =>
    console.log(author, id),
  ); */
  return (
    <SafeAreaView>
      {/* PERMISSIONS ENGINE ICON ZONE */}
      {/* SEARCH INPUT ZONE */}
      {/* RESULTS */}
      <Text>id</Text>
      <FlatList
        data={simpleMeme}
        keyExtractor={meme => meme.id}
        renderItem={({item}) => <Text>{item.title}</Text>}
        onEndReached={loadMemes}
        onEndReachedThreshold={0.4}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
