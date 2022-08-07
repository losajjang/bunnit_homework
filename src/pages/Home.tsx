import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, useColorScheme, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Section: React.FC<
  PropsWithChildren<{
    title?: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

function Home() {
  return (
    <View>
      <ScrollView>
        <Section title="인사의 말">
          <Text>
            안녕하세요. 입사지원자 <Text style={styles.highlight}>박재민</Text>
            입니다. {'\n'}
            이렇게 사전과제를 시작할 수 있는 기회를 주셔서 정말 감사드립니다.
            {'\n'}
            저는 20년 넘게 격투기 코치, 서킷 트레이닝, 웨이트 트레이닝등 여러
            운동을 해왔고 운동을 굉장히 좋아합니다.{'\n'}
            개발의 길에 들어서게 된 것은 웨이트트레이닝 루틴 공유 커뮤니티의
            부재였습니다.{'\n'}제 마음에 들어오는 루틴 공유만을 위한 커뮤니티는
            없었고 지인의 추천으로 공부를 시작하며 지금까지 오게 되었습니다.
          </Text>
        </Section>
        <Section title="첫 시도">
          <Text>
            저는 React와 Ionic-React를 사용하며 사이드 프로젝트를
            진행중이었습니다.{'\n'}
            Ionic-React를 사용하며 모바일앱 개발에 대해 흥미를 느꼈고 저에게
            익숙한 React 기반인 React-Native가 있다는 것을 알았습니다.{'\n'}
            하지만 이미 Ionic-React를 이용해 사이드프로젝트를 진행하고 있었고,
            중간에 라이브러리를 바꿀 수가 없었습니다.{'\n'}
            새로운 것을 배우고 싶은 목마름이 있었고 때마침 버닛에서
            React-Native를 이용한 입사 사전과제를 받게 되었습니다.{'\n'}
            너무도 즐거운 경험이었습니다.
          </Text>
        </Section>
        <Section title="후기">
          <Text>
            아쉬움이 많았지만 재미있는 경험이었습니다.{'\n'}
            제시해 주신 level 1부터 level 3까지의 단계중 level 1과 level 2까지만
            마무리를 했지만 새로운 배움의 기회였습니다.{'\n'}
            React와 비슷하지만 오묘하게 다른 React-Native를 사용해보며
            '만만하지는 않지만 사용자 접근성을 위하면서도 동시에 재미있게 개발할
            수 있는 도구구나.' 라는 생각을 했습니다.{'\n'}
            귀중하고 뜻 깊은 시간이었습니다.
          </Text>
        </Section>
        <Section title="감사합니다!">
          <Text style={styles.highlight}>
            제가 좋아하는 운동과 제가 재미있어 하는 개발, 이 두가지를 모두
            충족하는 버닛은 너무도 즐겁게 일할 수 있는 공간이 될 것 같습니다.
            {'\n'}
            일할 수 있는 기회가 된다면 저에게는 한 없이 큰 기회이고 영광이 될
            것입니다.{'\n'}
            읽어 주셔서 감사합니다.
          </Text>
        </Section>
        <Section title="번외: 저의 모습" />
        <View style={{paddingRight: 16, paddingLeft: 16}}>
          <Text style={styles.sectionDescription}>
            주짓수를 하며 즐거운 한 때
          </Text>
          <Image
            source={require(`../assets/images/juijitsu.jpeg`)}
            style={styles.image}
          />
          <Text style={[styles.sectionDescription, {marginTop: 24}]}>
            제 집 한 켠에 마련된 작은 체육관
          </Text>
          <Image
            source={require(`../assets/images/fit.jpeg`)}
            style={styles.image}
          />
          <Text style={[styles.sectionDescription, {marginTop: 24}]}>
            빡세게 써킷트레이닝 {'\n'}(사실은 체육관 홍보용 사진 만드는 중)
          </Text>
          <Image
            source={require(`../assets/images/circuit.jpeg`)}
            style={styles.image}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    fontSize: 20,
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
});

export default Home;
