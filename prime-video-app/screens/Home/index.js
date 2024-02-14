import { StyleSheet, Text, View, ScrollView  } from 'react-native';

import Header from './Header';
import Navigation from './Navigation';
import Poster from './Poster';
import Watched from './Watched';
import Films from './Films';
import Series from './Series';
import {  } from 'react-native-web';

export default function Home() {
  return (
    <View style={styles.container}>
        <Header/>
        <Navigation/>
        <ScrollView style={styles.container} vertical={true} showsHorizontalScrollIndicator={false}>
          <Poster/>
          <Watched/>
          <Films/>
          <Series/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242C38',
  },
});
