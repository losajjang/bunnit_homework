import {days, dateInEachMonth} from '../constants/consts';

export function generateMatrix(currentDate: Date) {
  // 비어있는 배열을 만든다. 타입은 숫자열이나, 문자열.
  let matrix: (number | string)[][] = [];

  // 상수로 준비되어 있는 요일명을 matrix 배열에 2차원배열의 형태로 넣어준다.
  matrix[0] = days;

  // 현재 연도를 할당한다.
  let year = currentDate.getFullYear();
  // 현재 월을 할당한다.
  let month = currentDate.getMonth();

  // 시작일자를 기준으로 날짜의 요일을 반환한다. 일요일(0)~토요일(6)
  let firstDay = new Date(year, month, 1).getDay();

  // 상수로 준비한 매 월의 마지막일자에서 현재 월에 해당하는 마지막 일자를 할당한다.
  let maxDays = dateInEachMonth[month];
  // 조건문으로 윤년을 구분한다.
  // month == 1인 경우는 2월이다.
  // month == 1인 경우에만 작동하는 조건문이고
  // 윤년이라면 maxDays에 1을 더한다.
  if (month === 1) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      maxDays += 1;
    }
  }

  // 초기값 1
  let counter = 1;
  // 일자가 만들어지는 구문.
  // 첫번째 반복문으로 6회 동안 빈배열을 만든다.
  for (let row = 1; row < 7; row++) {
    matrix[row] = [];
    // 일주일의 표현과
    // 비어있는 일자와 비어있지 않은 일자를 표현하기 위해
    // 7회를 6set 순회하여 총 42번의 -1을 만든다.
    for (let col = 0; col < 7; col++) {
      matrix[row][col] = -1;
      // 일자가 시작되는 행을 표현한다.
      // row인덱스가 1이고 col인덱스가 firstDay와 같거나 큰 경우를 조건으로 준다.
      // 2차원 배열이 되어 있는 matrix에서 해당되는 row인덱스의 col인덱스부터 카운터를 1씩 더한다.
      if (row === 1 && col >= firstDay) {
        matrix[row][col] = counter++;
      }
      // 일자가 시작되는 행을 표현했으니 그 이후의 행을 표현한다.
      // row인덱스가 1보다 크고 counter가 maxDays보다 작거나 같은 경우를 조건으로 준다.
      // 2차원 배열이 되어 있는 matrix에서 해당되는 row인덱스의 col인덱스부터 카운터를 1씩 더한다.
      else if (row > 1 && counter <= maxDays) {
        matrix[row][col] = counter++;
      }
    }
  }

  // matrix를 반환한다.
  return matrix;
}
