import { View, Text } from 'react-native'
import React from 'react'
import AppColors from '../../utils/AppColors'
import { responsiveFontSize, responsiveWidth } from '../../utils/Responsive_Dimensions'

type textProps = {
    title?: string
    textSize?: Number,
    textColor?: any,
    textFontWeight?: boolean,
    textAlignment?: String,
    textwidth?: number 
}

const AppText = ({title, textSize, textColor, textFontWeight,textAlignment,textwidth} : textProps) => {
  return (
      <Text style={{width: textwidth ? responsiveWidth(textwidth) : null , fontSize: textSize ? responsiveFontSize(textSize) : responsiveFontSize(1.4), fontWeight: textFontWeight ? "bold" : "regular", color: textColor ? textColor :  AppColors.BLACK, textAlign: textAlignment ?  textAlignment : null,  alignSelf:textAlignment ?textAlignment: null }}>{title}</Text>
  )
}

export default AppText