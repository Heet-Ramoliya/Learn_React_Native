import {useState} from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';

const Modal_task = () => {
  const [display, setDisplay] = useState(false);

  const showModal = () => {
    setDisplay(true);
  };
  return (
    <View>
      <Button title="press me" onPress={showModal} />
      <View>
        <Modal transparent={true} visible={display}>
          <Text style={{color: 'black'}}>Learn React</Text>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 10,
  },
});

export default Modal_task;
