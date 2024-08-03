import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "../../constants/Colors";

export default function StartNewTripCard(){
    return(
        <View style={{
            padding:20,
            marginTop:50,
            display:'flex',
            alignItems:'center',
            gap:25
        }}>
            <Ionicons name="location-sharp" size={30} color="black" />
            <Text style={{
                fontSize:27,
                fontFamily:'Medium',
            }}>No trips planned yet</Text>

            <Text style={{
                fontSize:22,
                fontFamily:'Regular',
                textAlign:'center',
                color:Colors.Gray
            }}>It's time to plan a new travel experience! Get started below.</Text>

            <TouchableOpacity style={{
                padding:10,
                backgroundColor:Colors.Primary,
                borderRadius:15,
                paddingHorizontal:30
            }}>
                <Text style={{
                    color:Colors.White,
                    fontFamily:'Medium',
                    fontSize:17
                }}>Start your trip here</Text>
            </TouchableOpacity>
        </View>
    )
}