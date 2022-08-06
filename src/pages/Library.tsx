import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Library() {
  return (
    <View style={styles.contentsBox}>
      <Text>Library</Text>
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

export default Library;
