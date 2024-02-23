import React, {useRef} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import SignatureCapture from 'react-native-signature-capture';

const SignaturePad = () => {
  const signatureRef = useRef(null);

  const onSaveEvent = result => {
    console.log(result);
  };

  const clearSignature = () => {
    if (signatureRef.current) {
      signatureRef.current.clearSignature();
    }
  };

  return (
    <View style={styles.container}>
      <SignatureCapture
        ref={signatureRef}
        style={styles.signature}
        onSaveEvent={onSaveEvent}
        saveImageFileInExtStorage={false}
        showNativeButtons={false}
        showTitleLabel={false}
        backgroundColor="white"
        strokeColor="black"
        minStrokeWidth={4}
        maxStrokeWidth={4}
      />
      <Button title="Clear" onPress={clearSignature} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  signature: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderColor: 'yellow',
    borderWidth: 1,
  },
});

export default SignaturePad;
