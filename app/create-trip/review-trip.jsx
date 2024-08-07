import { useNavigation } from 'expo-router'
import React, { useContext, useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Colors } from '../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CreateTripContext } from '../../context/CreateTripContext';
import Fontisto from '@expo/vector-icons/Fontisto';
import moment from 'moment';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';




export default function ReviewTrip(){

    const navigation=useNavigation();
    const {tripData,setTripData}=useContext(CreateTripContext);

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:'',
    })
    },[])
    return (
      <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.White,
        height:'100%'
      }}>
        <Text style={{
            fontFamily:'ExtraBold',
            fontSize:42,
            marginTop:20
        }}> Review your trip </Text>

        <View style={{
            marginTop:20
        }}>
            <Text style={{
                fontFamily:'Bold',
                fontSize:20
            }}>Before generating your trip, please review your selection.</Text>


            <View style={{
                marginTop:40,
                display:'flex',
                flexDirection:'row',
                gap:20
            }}>
                <Ionicons name="location-sharp" size={34} color="red" />
                <View>
                    <Text style={{
                        fontFamily:'Medium',
                        fontSize:20,
                        color:Colors.Gray
                    }}>Destination</Text>
                    <Text style={{
                        fontFamily:'Medium',
                        fontSize:20

                    }}>{tripData?.locationInfo?.name}</Text>
                </View>
            </View>

            <View style={{
                marginTop:25,
                display:'flex',
                flexDirection:'row',
                gap:20
            }}>
                <Fontisto name="date" size={24} color="blue" />
                <View>
                    <Text style={{
                        fontFamily:'Medium',
                        fontSize:20,
                        color:Colors.Gray
                    }}>Travel date</Text>
                    <Text style={{
                        fontFamily:'Medium',
                        fontSize:20

                    }}>{moment (tripData?.startDate).format('DD MMM YY')+'  to  '+ moment(tripData.endDate).format('DD MMM YYYY')+'  '}({tripData?.totalNoOfDays} days)</Text>
                </View>
            </View>

            <View style={{
                marginTop:25,
                display:'flex',
                flexDirection:'row',
                gap:20
            }}>
                <FontAwesome5 name="bus" size={24} color="green" />
                <View>
                    <Text style={{
                        fontFamily:'Medium',
                        fontSize:20,
                        color:Colors.Gray
                    }}>Travellers</Text>
                    <Text style={{
                        fontFamily:'Medium',
                        fontSize:20

                    }}>{tripData?.traveler?.title}</Text>
                </View>
            </View>

            <View style={{
                marginTop:25,
                display:'flex',
                flexDirection:'row',
                gap:20
            }}>
                <FontAwesome5 name="coins" size={24} color="gold" />   
                <View>
                    <Text style={{
                        fontFamily:'Medium',
                        fontSize:20,
                        color:Colors.Gray
                    }}>Budget</Text>
                    <Text style={{
                        fontFamily:'Medium',
                        fontSize:20

                    }}>{tripData?.budget}</Text>
                </View>
            </View>
        </View>

        <TouchableOpacity
            onPress={()=>onClickContinue()}
            style={{
                padding:25,
                backgroundColor:Colors.Primary,
                borderRadius:15,
                marginTop:40
            }}>

                <Text style={{
                    textAlign:'center',
                    color:Colors.White,
                    fontFamily:'Medium',
                    fontSize:20

                }}>Build my trip</Text>


            </TouchableOpacity>
      </View>
    )
}