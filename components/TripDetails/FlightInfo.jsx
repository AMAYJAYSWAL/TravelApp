import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../constants/Colors'

export default function FlightInfo({flightData}){
    return (
      <View style={{
        marginTop:20,
        borderWidth:2,
        borderColor:Colors.LightGray,
        padding:10,
        borderRadius:15,
      }}>

        <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }}>
        
        <Text style={{
            fontFamily:'Bold',
            fontSize:25,
        }}>✈️ Flight- </Text>

        <TouchableOpacity style={{
            backgroundColor:Colors.Primary,
            padding:5,
            width:100,
            borderRadius:7,
            marginTop:7
        }}>
            <Text style={{
                textAlign:'center',
                color:Colors.White,
                fontFamily:'Regular',
            }}>Book Here</Text>
        </TouchableOpacity>
        </View>
        

        <Text style={{
            fontFamily:'Regular',
            fontSize:17,
        }}>Airline:{flightData?.airline}</Text>
        <Text style={{
            fontFamily:'Regular',
            fontSize:17,
        }}>Price:{flightData?.price}</Text>
        
      </View>
    )
}