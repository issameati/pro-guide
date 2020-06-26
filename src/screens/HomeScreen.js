import React,{useState,useEffect,useContext} from 'react'
import {View,Image,Text,StyleSheet, TouchableOpacity} from 'react-native'

import Card from '../components/Card'

import GuideContext from '../hooks/GuideContext'

const guide = require('../../assets/guide.png')
const tips = require('../../assets/tips.png')
const trick = require('../../assets/trickst.png')
const moreApps = require('../../assets/moreapps.png')
const share = require('../../assets/share.png')

export default function HomeScreen({navigation}) {

  const {data, getGuide,getTips,getTricks} = useContext(GuideContext);

  // useEffect(()=>{
    
  // },[])

  return (
    <View style={styles.container}> 
      <View style={styles.row}>
        <TouchableOpacity onPress={()=>{ getGuide(()=>{ navigation.navigate('List')} ) }} >
          <Card title='Guide' imgSrc={guide} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{ getTips(()=>{ navigation.navigate('List')} ) }} >
          <Card title='Tips' imgSrc={tips} />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={()=>{ getTricks(()=>{ navigation.navigate('List')} ) }} >
          <Card title='Tricks' imgSrc={trick} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('MoreApps')}}>
          <Card title='More Apps' imgSrc={moreApps} />
        </TouchableOpacity>
      </View>
      <View style={styles.bannerAds}>
          <Text>ads</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:30,
    marginHorizontal:10
  },
  row:{
    flexDirection:'row',
    justifyContent:"space-around",
    marginBottom:20,
    height:'36%',
    width:'100%'

  },
  bannerAds:{
    backgroundColor:'#fff',
    borderWidth:0.2,
    height:'10%',
    marginBottom:5,
    position:'absolute',
    bottom:0,
    right:0,
    left:0,
    }
})