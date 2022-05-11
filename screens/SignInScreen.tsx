import { View , Text, StyleSheet } from "react-native";
import React from "react";

export default function SignInScreen() {
  return(
    <View>
      <Text>
        Sign In screen! 
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center'
  }
});