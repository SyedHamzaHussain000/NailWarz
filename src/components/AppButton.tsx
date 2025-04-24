import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AppColors from '../utils/AppColors';
import AppText from './AppTextComps/AppText';

type props = {
  title?: any;
  bgColor?: any;
  handlePress?: () => void;
};
const AppButton = ({title, handlePress}: props) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: AppColors.BTNCOLOURS,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
      }}>
      <AppText
        textColor={AppColors.WHITE}
        textSize={2.5}
        title="Continue"
        textFontWeight
      />
    </TouchableOpacity>
  );
};

export default AppButton;
