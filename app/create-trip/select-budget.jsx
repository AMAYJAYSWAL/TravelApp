import { useNavigation,Link, useRouter }from 'expo-router'
import React, { useEffect, useState, useContext } from 'react'
import { FlatList, Text, View, TouchableOpacity, ToastAndroid} from 'react-native'
import { SelectBudgetOptions } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { Colors } from '../../constants/Colors';
import {CreateTripContext} from './../../context/CreateTripContext'




export default function SelectBudget(){

    const navigation=useNavigation();
    const [selectedOption,setSelectedOption]=useState();
    const {tripData, setTripData}=useContext(CreateTripContext);
    const router=useRouter();


    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    })

    useEffect(()=>{
        setTripData({
            ...tripData,
            budget:selectedOption?.title
        })
    },[selectedOption])

    const onClickContinue=()=>{
        if(!selectedOption){
            ToastAndroid.show('Select your Budget',ToastAndroid.LONG)
            return;
        }

        router.push('');
    }
    return (
      <View style={{
        paddingTop:75,
        padding:25,
        height:'100%',
        backgroundColor:Colors.White


      }}>
        <Text style={{
            fontFamily:'Bold',
            fontSize:35,
            marginTop:20,
        }}> Budget </Text>

        <View style={{
            marginTop:20,

        }}>
            <Text style={{
                fontFamily:'Bold',
                fontSize:20
            }}>How much do you want to spend on the trip?</Text>

            <FlatList
                data={SelectBudgetOptions}
                renderItem={({item,index})=>(
                    <TouchableOpacity style={{
                        marginVertical:10,
                    }}
                        onPress={()=>setSelectedOption(item)}
                    >
                        <OptionCard option={item} selectedOption={selectedOption}/>
                    </TouchableOpacity>
                )}
            />
        </View>

        <TouchableOpacity
            onPress={()=>onClickContinue()}
            style={{
                padding:25,
                backgroundColor:Colors.Primary,
                borderRadius:15,
                marginTop:100
            }}>

                <Text style={{
                    textAlign:'center',
                    color:Colors.White,
                    fontFamily:'Medium',
                    fontSize:20

                }}>Continue</Text>


            </TouchableOpacity>
      </View>
    )
}