import React,{useContext,useEffect} from 'react'
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native'

import GuideItem from '../components/GuideItem'
import GuideContext from '../hooks/GuideContext'

export default function ListScreen({navigation}) {

  const {data, getGuide} = useContext(GuideContext);
  
  useEffect(()=>{
  },[])

  return (
    
    <View style={styles.container} >
      <FlatList 
        data={data} 
        keyExtractor={item => item._id}
        renderItem={({item})=>{
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Details',{details:item.details})} >
              <GuideItem title={item.title} details={item.details}/> 
            </TouchableOpacity>
          )
        }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal:10
  }
})