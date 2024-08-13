import React from 'react'
import { Text, View,Image } from 'react-native'
import moment from 'moment'
import { Colors } from '../../constants/Colors';

export default function UserTripCard({trip}){
    const formatData=(data)=>{
        return JSON.parse(data);
    }
    return (
      <View style={{
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center'
      }}>
        {/*<Image source={require('./../../assets/images/Picture_2_Travel-800x430.jpeg')}
            style={{
                width:100,
                height:100,
                borderRadius:15,
            }}
        />*/}

            <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+formatData(trip.tripData).locationInfo?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
                style={{
                    width:100,
                    height:100,
                    borderRadius:15,
                }}
            />
        <View style={{

        }}>
            <Text style={{
                fontFamily:'Medium',
                fontSize:20,
            }}>{trip.tripPlan?.trip?.destination}</Text>
            <Text style={{
                fontFamily:'Regular',
                fontSize:17,
                color:Colors.Gray
            }}>{moment(formatData(trip.tripData).startDate).format('DD MMMM YYYY')}</Text>
            <Text style={{
                fontFamily:'Regular',
                fontSize:17,
                color:Colors.Gray,
            }}>{formatData(trip.tripData).traveler.title}</Text>
        </View>
      </View>
    )
}