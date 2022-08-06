import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Home() {
  return (
    <View style={styles.contentsBox}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    contentsBox: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Home;
