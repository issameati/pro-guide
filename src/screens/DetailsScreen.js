import React from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native'

export default function DetailsScreen({route,navigation}) {
  const {details} = route.params
  return (
    <View style={styles.container} >
      <ScrollView>
        <Text style={styles.detais}>
          {details}
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal:10
  },
  detais:{
    fontSize:40
  }
})