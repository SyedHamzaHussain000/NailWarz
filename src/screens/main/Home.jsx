import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppText from '../../components/AppTextComps/AppText';
import AppColors from '../../utils/AppColors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/Responsive_Dimensions';
import BackgroundScreen from '../../components/AppTextComps/BackgroundScreen';
import AppTextInput from '../../components/AppTextInput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import APPImages from '../../assets/APPImages';
import LinearGradient from 'react-native-linear-gradient';
const Home = () => {
  return (
    <BackgroundScreen>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <EvilIcons
            name={'location'}
            color={AppColors.BLUE}
            size={responsiveFontSize(5)}
          />
          <View>
            <AppText title="Location" textSize={2} />
            <AppText title="Lakewood, California" textSize={2} textFontWeight />
          </View>
        </View>

        <Ionicons
          name={'notifications-outline'}
          size={responsiveFontSize(3)}
          color={AppColors.BLACK}
        />
      </View>

      <AppTextInput
        containerBg={AppColors.INPUTBG}
        inputPlaceHolder={'Enter address or city name'}
        logo={
          <AntDesign
            name={'search1'}
            size={responsiveFontSize(2)}
            color={AppColors.BLACK}
          />
        }
      />

      <ImageBackground
        source={APPImages.DISCOUNT}
        style={{
          width: responsiveWidth(90),
          height: responsiveHeight(20),
          borderRadius: 15,
          overflow: 'hidden',
          padding: 20,
        }}>
        <LinearGradient
          colors={[
            AppColors.WHITE,
            AppColors.BLUE,
            AppColors.BLUE,
            AppColors.BLUE,
          ]}
          end={{x: 0, y: 1}}
          style={{
            position: 'absolute',
            zIndex: 1,
            width: responsiveWidth(90),
            height: responsiveHeight(20),
            opacity: 0.5,
          }}></LinearGradient>
        <View style={{position: 'absolute', zIndex: 2, padding: 20}}>
          <AppText
            title="Morning Special!"
            textSize={2}
            textFontWeight
            textColor={AppColors.WHITE}
          />
          <AppText
            title="Get 20% Off"
            textSize={3}
            textFontWeight
            textColor={AppColors.WHITE}
          />
          <AppText
            title="on All Nail Service Between 9-10 AM."
            textSize={1.5}
            textColor={AppColors.WHITE}
          />
          <TouchableOpacity
            style={{
              backgroundColor: AppColors.WHITE,
              alignSelf: 'flex-start',
              padding: 10,
              borderRadius: 10,
              marginTop: 10,
            }}>
            <AppText
              title="Book Now"
              textColor={AppColors.BLACK}
              textSize={2}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={{marginTop: 10}}>
        <AppText
          title="Services"
          textColor={AppColors.BLACK}
          textSize={3}
          textFontWeight
        />
      </View>
    </BackgroundScreen>
  );
};

export default Home;
