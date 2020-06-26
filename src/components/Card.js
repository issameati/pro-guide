import React from 'react'
import {View,TouchableOpacity,Image,Text,StyleSheet,Dimensions} from 'react-native'

export default function Card({imgSrc,title}) {
  const { width, height } = Dimensions.get('window')

  return (
          <View style={styles.col}>
            <Image style={{width:100,height:100}} source={imgSrc} />
            <Text style={styles.title}>{title}</Text>
          </View>
  )
}

const styles =  StyleSheet.create({
  col:{
    width:160,
    height:'100%',
    backgroundColor:'#fff',
    borderRadius:5,
    alignItems:'center',
    padding:5,
    justifyContent:"center"
  },
  title:{
    fontWeight:'bold',
    fontSize:28,
    color:'#f4511e'
  }
})