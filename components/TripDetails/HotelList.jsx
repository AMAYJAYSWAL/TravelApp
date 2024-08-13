import React from 'react'
import { FlatList, Text, View,Image } from 'react-native'

export default function HotelList({hotelList}){
    return (
      <View style={{
        marginTop:20,
      }}>
        <Text style={{
            fontFamily:'Bold',
            fontSize:25
        }}>🏨 Hotel Recommendation-</Text>

        <View style={{
            marginTop:8,
            display:'flex',
            flexDirection:'row',
            gap:20
        }}>
            <Text style={{
                fontFamily:'Medium',
                fontSize:20
            }}>{hotelList?.name}</Text>

                <Text style={{
                    fontFamily:'Medium',
                    fontSize:20
                }}>⭐{hotelList?.rating}</Text>

                <Text style={{
                    fontFamily:'Medium',
                    fontSize:20
                }}>💰{hotelList?.price}</Text>
        </View>

        <View>
        <Image source={require('./../../assets/images/Picture_2_Travel-800x430.jpeg')}
                style={{
                    width:'100%',
                    height:150,
                    borderRadius:15,
                    marginTop:8,
                    

                }}
            />
        </View>
    </View>
    
    )
}
