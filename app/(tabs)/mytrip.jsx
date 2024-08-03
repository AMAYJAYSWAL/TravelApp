import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';

export default function MyTrip(){

    const [userTrips,setUserTrips]=useState([]);

    return (
      <View style = {{
        padding:25,
        paddingTop:55,
        backgroundColor:Colors.White,
        height:'100%'
      }}>
        <View style={{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between'
        }}>
          <Text style={{
            fontFamily:'ExtraBold',
            fontSize:35
          }}> My Trips </Text>
          <Ionicons name="add-circle" size={50} color="black" />
        </View>

        {userTrips?.length==0?
          <StartNewTripCard/>:null
        }
      </View>
    )
  }