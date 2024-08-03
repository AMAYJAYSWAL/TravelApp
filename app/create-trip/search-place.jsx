import { useNavigation } from 'expo-router'
import { useEffect,useContext } from 'react';
import React from 'react'
import { Text, View } from 'react-native'
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {CreateTripContext} from './../../context/CreateTripContext'


export default function SearchPlace(){

    const navigation=useNavigation();
    const {tripData, setTripData}=useContext(CreateTripContext)
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:'Search'
        })
    },[]);

    useEffect(()=>{
        console.log(tripData);
    }),[tripData]
    return (
      <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.White,
        height:'100%',
        margin:15
      }}>

    
    <GooglePlacesAutocomplete 
        placeholder='Search Place'
        fetchDetails={true}
        onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        
        setTripData({
            locationInfo:{
                name:data.description,
                coordinates:details?.geometry.location,
                photoRef:details?.photos[0]?.photo_reference,
                url:details?.url
            }
        })
        }}
        query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
        }}

        styles={{
            textInputContainer:{
                borderWidth:2,
                borderRadius:5,
                marginTop:30,
            }
        }}
    />

      </View>
    )
}