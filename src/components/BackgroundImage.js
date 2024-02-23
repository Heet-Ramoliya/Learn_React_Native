import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const BackgroundImage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.img}
        source={require('../components/img/homePageImage.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BackgroundImage;
