import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {DefaultTheme} from '../themes/theme';
import {months} from '../constants/consts';
import {generateMatrix} from '../utils/generateMatrix';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

function Calendar({date = new Date()}: {date: Date}) {
  const [activeDate, setActiveDate] = React.useState(date);

  // onPress 기능
  // 일자를 터치했을 때 하이라이트를 해준다.
  // 인자로 받은 item이 string인지 -1인지를 판단한 후
  // 해당 item을 setDate하고 newDate에 할당한다.
  // newDate를 setActiveDate한다.
  const _onPress = (item: number) => {
    if (typeof item !== 'string' && item != -1) {
      const newDate = new Date(activeDate.setDate(item));
      setActiveDate(newDate);
    }
  };

  //generateMatrix에 인자로 activeDate를 넘겨주고 만들어진 배열을 matrix에 할당한다.
  const matrix = generateMatrix(activeDate);

  // 빈 배열을 rows에 할당한다.
  let rows = [];

  // matrix를 map 메소드를 사용하는데 인자로 row, rowIndex를 사용한다.
  // row인자를 map 메소드를 사용하는데 인자로 item, colIndex 를 사용한다.
  // TouchableOpacity를 사용하여 터치효과를 주었고 하이라이트 기능을 넣어주었다.
  // 일자를 표현하기 위해 Text 태그를 사용하였다.
  // 각각의 row인자에서 item인자들을 map으로 돌아가며 일자들을 만들어 준다.
  // 각각의 row인자에서 0번째 colIndex는 빨간색으로 표현한다.
  // 하이라이트 된 일자는 두꺼운 폰트로 바꾸어준다.
  rows = matrix.map((row, rowIndex: number) => {
    let rowItems = row.map((item: any, colIndex: number) => {
      return (
        <TouchableOpacity
          key={colIndex}
          onPress={() => _onPress(item)}
          style={[
            styles.date,
            item == activeDate.getDate()
              ? styles.activeDate
              : styles.inActiveDate,
          ]}>
          <Text
            style={[
              styles.dateText,
              {
                color: colIndex == 0 ? DefaultTheme.error : DefaultTheme.text,
                fontWeight: item == activeDate.getDate() ? 'bold' : 'normal',
              },
            ]}>
            {item != -1 ? item : ''}
          </Text>
        </TouchableOpacity>
      );
    });
    return (
      <View key={rowIndex} style={styles.rowContainer}>
        {rowItems}
      </View>
    );
  });

  // 월 이동 기능
  // 인자로 n을 받는다
  // n은 +1, -1인 경우만 있다.
  const changeMonth = (n: number) => {
    const newDate = new Date(activeDate.setMonth(activeDate.getMonth() + n));
    setActiveDate(newDate);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.actionContainer}>
          {/* 여기부터 월 변경 터치버튼 */}
          <TouchableOpacity onPress={() => changeMonth(-1)}>
            <Ionicons name="chevron-back-outline" color="#55b8ed" size={25} />
          </TouchableOpacity>
          <Text style={styles.currentDate}>
            {`${months[activeDate.getMonth()]} ${activeDate.getFullYear()}`}
          </Text>
          <TouchableOpacity onPress={() => changeMonth(+1)}>
            <Ionicons
              name="chevron-forward-outline"
              color="#55b8ed"
              size={25}
            />
          </TouchableOpacity>
          {/* 여기까지 월 변경 터치버튼 */}
        </View>
        <View>{rows}</View>
      </View>
    </SafeAreaView>
  );
}

export default Calendar;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  date: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDate: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#447cc6',
    borderRadius: 20,
  },
  inActiveDate: {backgroundColor: '#fff'},
  dateText: {textAlign: 'center', fontSize: 14},
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginTop: 8,
  },
  currentDate: {fontWeight: '400', fontSize: 20, textAlign: 'center'},
});
