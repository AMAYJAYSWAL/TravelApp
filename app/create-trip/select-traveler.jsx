import {View, Text, FlatList,TouchableOpacity} from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { useNavigation, Link } from 'expo-router'
import { Colors } from '../../constants/Colors';
import {SelectTravelerList} from '../../constants/Options'
import OptionCard from './../../components/CreateTrip/OptionCard'
import {CreateTripContext} from './../../context/CreateTripContext'


export default function SelectTraveler(){

    const navigation=useNavigation();
    const [SelectTraveler,setSelectTraveler]=useState();
    const {tripData, setTripData}=useContext(CreateTripContext);


    
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[])

    useEffect(()=>{
        setTripData({...tripData,
            traveler:SelectTraveler
    })
    },[SelectTraveler]);

    useEffect(()=>{
        console.log(tripData)
    },[tripData])
    return(
        <View style={{
            padding:25,
            paddingTop:75,
            backgroundColor:Colors.White,
            height:'100%',
        }}>
            <Text style={{
                fontSize:50,
                fontFamily:'ExtraBold',
                marginTop:20,
            }}>Who's Travelling?</Text>

            <View style={{
                marginTop:20
            }}>
                <Text style={{
                    fontFamily:'Bold',
                    fontSize:30,
                    marginBottom:20,
                }}>Choose your travel type :</Text>

            <FlatList
            data={SelectTravelerList}
            renderItem={({item,index})=>(
                <TouchableOpacity
                onPress={()=>setSelectTraveler(item)}
                style={{
                    marginVertical:10,
                }}>
                    <OptionCard option={item} selectedOption={SelectTraveler}/>
                </TouchableOpacity>
            )}/>
                
            </View>
            
            
            <TouchableOpacity
            style={{
                padding:25,
                backgroundColor:Colors.Primary,
                borderRadius:15,
                marginTop:100
            }}>
                <Link href={'/create-trip/select-dates'}
                style={{
                    width:'100%',
                    textAlign:'center'
                }}>
                <Text style={{
                    textAlign:'center',
                    color:Colors.White,
                    fontFamily:'Medium',
                    fontSize:20

                }}>Continue</Text>

                </Link>
            </TouchableOpacity>
        </View>
    )
}