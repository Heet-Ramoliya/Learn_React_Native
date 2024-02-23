import {View, Text, Image, StyleSheet} from 'react-native';

const Image_task = () => {
  return (
    <View>
      <Text style={styles.text}>Static Image</Text>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require('./img/photo_2023-09-28_14-07-51.jpg')}
        />
      </View>

      <Text style={styles.text}>Network Image</Text>

      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://cdn.create.vista.com/api/media/small/324649362/stock-photo-beautiful-view-of-a-bench-in-an-autumn-park-near-the-water',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  img: {
    height: 300,
    width: 300,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Image_task;
