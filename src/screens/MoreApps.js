import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default function MoreAppsScreen() {
  return (
    <View style={styles.container} >
      <Text>More Apps </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})