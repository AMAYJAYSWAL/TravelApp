import { useLocalSearchParams, useNavigation } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Text, View,Image, ScrollView } from 'react-native'
import { Colors } from '../../constants/Colors';
import moment from 'moment';
import FlightInfo from '../../components/TripDetails/FlightInfo';
import HotelList from '../../components/TripDetails/HotelList';
import PlannedTrip from '../../components/TripDetails/PlannedTrip';

export default function TripDetails(){

    const navigation=useNavigation();
    const {trip}=useLocalSearchParams();
    const [tripDetails, setTripDetails]=useState({});
    const formatData = (data) => {
        if (data) {
          try {
            return JSON.parse(data);
          } catch (error) {
            console.error('Error parsing JSON:', error);
            return null;
          }
        } else {
          console.warn('No data to parse');
          return null;
        }
      };

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
        setTripDetails(JSON.parse(trip))
    },[])
    return tripDetails&&(
      <ScrollView>
        <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+formatData(tripDetails?.tripData)?.locationInfo?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
                style={{
                    width:'100%',
                    height:330,

                }}
        />

        <View style={{
            padding:15,
            backgroundColor:Colors.White,
            height:'100%',
            marginTop:-30,
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
        }}>
            <Text style={{
                fontSize:25,
                fontFamily:'Bold'
            }}>{tripDetails?.tripPlan?.trip.destination}</Text>

            <View style={{
                display:'flex',
                flexDirection:'row',
                gap:5,
                marginTop:5
            }}>
            <Text style={{
                fontFamily:'Regular',
                fontSize:17,
                color:Colors.Gray
            }}>{moment(formatData(tripDetails?.tripData)?.startDate).format('DD MMMM YYYY')}</Text>

            <Text style={{
                fontFamily:'Regular',
                fontSize:17,
                color:Colors.Gray
            }}>- {moment(formatData(tripDetails?.tripData)?.endDate).format('DD MMMM YYYY')}</Text>
            </View>

            <Text style={{
                    fontFamily:'Regular',
                    fontSize:17,
                    color:Colors.Gray,
                }}>{tripDetails?.tripPlan?.trip?.travelers}</Text>


                <FlightInfo flightData={tripDetails?.tripPlan?.flights?.options[0]}/>

                <HotelList hotelList={tripDetails?.tripPlan?.hotels?.options[0]}/>

                <PlannedTrip details={tripDetails?.tripPlan?.day_plan[0]}/>
                    
                
        </View>
      </ScrollView>
    )
}