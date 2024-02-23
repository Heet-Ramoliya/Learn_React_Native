import {View, Button} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';

const Videotask = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <View style={{flex: 1}}>
      <Video
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        }}
        style={{flex: 1}}
        controls={false}
        paused={!isPlaying}
        resizeMode="contain"
      />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Button
          title={isPlaying ? 'Pause Video' : 'Play Video'}
          onPress={() => setIsPlaying(!isPlaying)}
        />
      </View>
    </View>
  );
};

export default Videotask;
