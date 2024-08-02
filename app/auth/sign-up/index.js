import { useNavigation } from 'expo-router'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export default function SignUn(){
    const navigation=useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])
    return(
        <View style={{
            padding:25,
            paddingTop:50,
        }}>
            <Text>Create New Account</Text>
        </View>
    )
}