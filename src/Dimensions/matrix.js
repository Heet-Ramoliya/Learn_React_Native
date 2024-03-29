import {Dimensions} from 'react-native/types';

const {height, width} = Dimensions.get('window');

const guidelineBaseWidth = width;
const guidelineBaseHeight = height;

const horizontalScale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export {horizontalScale, verticalScale, moderateScale};
