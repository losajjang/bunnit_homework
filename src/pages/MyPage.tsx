import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function MyPage() {
  return (
    <View style={styles.contentsBox}>
      <Text>MyPage</Text>
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

export default MyPage;
