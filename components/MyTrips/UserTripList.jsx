import React from 'react'
import { Text, View,Image, TouchableOpacity } from 'react-native'
import moment from 'moment'
import { Colors } from '../../constants/Colors'
import UserTripCard from './UserTripCard'
import { useRoute } from '@react-navigation/native'
import { useRouter } from 'expo-router'


export default function UserTripList({userTrips}){
    const LatestTrip=JSON.parse(userTrips[0].tripData)
    const router=useRouter();


    return userTrips&&(
      <View>
        <View style={{
            marginTop:20,
        }}>
            {LatestTrip?.locationInfo?.photoRef?
            <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+LatestTrip.locationInfo?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
                style={{
                    width:'100%',
                    height:250,
                    objectFit:'cover',
                    borderRadius:15
                }}
            />
            :
            
            <Image source={require('./../../assets/images/Picture_2_Travel-800x430.jpeg')}
                style={{
                    width:'100%',
                    height:250,
                    objectFit:'cover',
                    borderRadius:15
                }}
            ></Image>}

            <View style={{
                marginTop:10,
            }}>
                <Text style={{
                    fontFamily:'Medium',
                    fontSize:20,
                }}>{userTrips[0]?.tripPlan?.trip?.destination}</Text>

            <View style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                marginTop:5
            }}>
                <Text style={{
                    fontFamily:'Regular',
                    fontSize:17,
                    color:Colors.Gray,
                }}>{ moment(LatestTrip.startDate).format('DD MMMM YYYY')}
                
                </Text>

                <Text style={{
                    fontFamily:'Regular',
                    fontSize:17,
                    color:Colors.Gray,
                }}>{userTrips[0]?.tripPlan?.trip?.travelers}</Text>
            </View>
            <TouchableOpacity 
            onPress={()=>
                router.push({pathname:'/trip-details',params:{
                    trip:JSON.stringify(userTrips[0])
                }})
            }
            style={{
                backgroundColor:Colors.Primary,
                padding:15,
                borderRadius:15,
                marginTop:10,
            }}>
                <Text style={{
                    color:Colors.White,
                    textAlign:'center',
                    fontFamily:'Medium',
                    fontSize:15,
                }}>See your plan</Text>
            </TouchableOpacity>

            </View>

            {userTrips.map((trip,index)=>(
                <UserTripCard trip={trip} key={index}/>
            ))}
        </View>
      </View>
    )
}