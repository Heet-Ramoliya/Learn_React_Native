import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Switch_task from '../components/Switch';
import MySlider from '../components/Slider';
import ActivityIndicator_task1 from '../components/ActivityIndicator';
import FlatList_task from '../components/FlatList';
import Image_task from '../components/Image';
import BackgroundImage from '../components/BackgroundImage';
import KeyboardAvoidingComponent from '../components/KeyboardAvoidingview';
import Modal_task from '../components/Modal';
import Pressable_task from '../components/Pressable';
import RefreshControl_task from '../components/RefreshControler';
import ScrollViewExample from '../components/ScrollViewExample';
import SectionList_task from '../components/SectionList';
import StatusBar_task from '../components/StatusBar';
import TouchableHeighlight_task from '../components/TouchableHeighlight';
import TochableWithOutFeedback_task from '../components/TochableWithOutFeedback';
import ImagePickerTask from '../components/ImagePicker';
import AxiosTask from '../components/Axios';
import DropdownComponent from '../components/DynamicDropDown';
import RadioButton from '../components/RadioButton';
import TabNavigator from './TabNavigator';
import DateTimePicker from '../components/DateTimePicker';
import SignaturePad from '../components/SignaturePad';
import ScreenDimensions from '../components/ScreenDimensions';
import ChangeFont from '../components/ChangeFont';
import AsyncStorages from '../components/AsyncStorages';
import ToastMessage from '../components/ToastAndroid';
import AnimatedExample from '../components/Animation';
import Audio from '../components/Audio';
import Videotask from '../components/Video';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

const DrawerNavigators = ({navigation}) => {
  const signout = () => {
    navigation.navigate('LoginPage');
  };
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          headerRight: () => (
            <>
              <TouchableOpacity onPress={signout}>
                <Icon
                  name="sign-out"
                  size={30}
                  color="black"
                  style={{padding: 12}}
                />
              </TouchableOpacity>
            </>
          ),
        }}
      />
      <Drawer.Screen
        name="ActivityIndicator_task1"
        component={ActivityIndicator_task1}
      />
      <Drawer.Screen name="FlatList" component={FlatList_task} />
      <Drawer.Screen name="Image" component={Image_task} />
      <Drawer.Screen name="BackgroundImage" component={BackgroundImage} />
      <Drawer.Screen
        name="KeyboardAvoidingComponent"
        component={KeyboardAvoidingComponent}
      />
      <Drawer.Screen name="Modal_task" component={Modal_task} />
      <Drawer.Screen name="Pressable_task" component={Pressable_task} />
      <Drawer.Screen
        name="RefreshControl_task"
        component={RefreshControl_task}
      />
      <Drawer.Screen name="ScrollViewExample" component={ScrollViewExample} />
      <Drawer.Screen name="SectionList_task" component={SectionList_task} />
      <Drawer.Screen name="StatusBar_task" component={StatusBar_task} />
      <Drawer.Screen name="Switch" component={Switch_task} />
      <Drawer.Screen
        name="TouchableHeighlight_task"
        component={TouchableHeighlight_task}
      />
      <Drawer.Screen
        name="TochableWithOutFeedback_task"
        component={TochableWithOutFeedback_task}
      />
      <Drawer.Screen name="ImagePickerTask" component={ImagePickerTask} />
      <Drawer.Screen name="Slider" component={MySlider} />
      <Drawer.Screen name="AxiosTask" component={AxiosTask} />
      <Drawer.Screen name="DropdownComponent" component={DropdownComponent} />
      <Drawer.Screen name="RadioButton" component={RadioButton} />
      <Drawer.Screen name="DateTimePicker" component={DateTimePicker} />
      <Drawer.Screen name="SignaturePad" component={SignaturePad} />
      <Drawer.Screen name="ScreenDimensions" component={ScreenDimensions} />
      <Drawer.Screen name="ChangeFont" component={ChangeFont} />
      <Drawer.Screen name="AsyncStorages" component={AsyncStorages} />
      <Drawer.Screen name="ToastMessage" component={ToastMessage} />
      <Drawer.Screen name="AnimatedExample" component={AnimatedExample} />
      <Drawer.Screen name="Audio" component={Audio} />
      <Drawer.Screen name="Videotask" component={Videotask} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigators;