import { View , Text, StyleSheet } from "react-native";
import React from "react";

export default function SignUpScreen() {
  return(
    <View>
      <Text>
        Sign Up screen! 
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