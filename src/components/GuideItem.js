import React from 'react'
import {View,StyleSheet, Image, Text} from 'react-native'

const icon = require('../../assets/icon.png')
export default function GuideItem({title, details}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={icon} />
      <Text style={styles.title} >{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    height:110,
    backgroundColor:'#fff',
    marginVertical:5,
    alignItems:'center',
    borderRadius:5
  },
  image:{
    width:100,
    height:100,
    marginHorizontal:10,
    borderWidth:0.5,
    borderColor:'gray',
    borderRadius:11
    
  },
  title:{
    fontSize:28,
    fontWeight:'bold',
    color:'#f4511e'
  }
})