import { useNavigation } from 'expo-router'
import { useEffect } from 'react';
import React from 'react'
import { Text, View } from 'react-native'
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default function SearchPlace(){

    const navigation=useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:'Search'
        })
    },[])
    return (
      <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.White,
        height:'100%',
        margin:15
      }}>
    <GooglePlacesAutocomplete 
        placeholder='Search'
        fetchDetails={true}
        onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        }}
        query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
        }}
    />

      </View>
    )
}