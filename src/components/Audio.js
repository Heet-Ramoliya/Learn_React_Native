import {View, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import Sound from 'react-native-sound';

const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    Sound.setCategory('Playback');
    return () => {
      if (sound) {
        sound.stop();
        sound.release();
      }
    };
  }, [sound]);

  const playSound = () => {
    const soundObject = new Sound(
      'https://file-examples.com/storage/fe34a88a9a65cf545955ccb/2017/11/file_example_MP3_700KB.mp3',
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('failed to load song', error);
          return;
        }
        setSound(soundObject);
        soundObject.play(() => {
          soundObject.release(); // Release the sound object once playback finishes
          setIsPlaying(false);
        });
        setIsPlaying(true);
      },
    );
  };

  const stopSound = () => {
    if (sound) {
      sound.stop(() => {
        setIsPlaying(false);
      });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <Button title="Start Sound" onPress={playSound} disabled={isPlaying} />
      <Button title="Stop Sound" onPress={stopSound} disabled={!isPlaying} />
    </View>
  );
};

export default Audio;
