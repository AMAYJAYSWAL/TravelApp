import { useNavigation, useRouter } from 'expo-router'
import React, { useEffect,useState,useContext } from 'react'
import { Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../constants/Colors';
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment';
import {CreateTripContext} from './../../context/CreateTripContext'


export default function SelectDates(){

    const navigation=useNavigation();
    const [startDate,setStartDate]=useState();
    const [endDate,SetEndDate]=useState();
    const {tripData, setTripData}=useContext(CreateTripContext);
    const router = useRouter();


    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:'',
        })
    },[])

    const onDateChange=(date,type)=>{
        console.log(date,type);
        if(type=='START_DATE'){
            setStartDate(moment(date))
        }else{
            SetEndDate(moment(date))
        }
    }
    const OnDateSelectionContinue=()=>{

        if(!startDate&&!endDate){
            ToastAndroid.show('Please the Start and End dates',ToastAndroid.LONG)
            return;
        }
        const totalNoOfDays = endDate.diff(startDate,'days');
        console.log(totalNoOfDays+1);

        setTripData({
            ...tripData,
            startDate:startDate,
            endDate:endDate,
            totalNoOfDays:totalNoOfDays+1
        });

        router.push('/create-trip/select-budget')
    }

    return (
      <View style={{
        padding:25,
        paddingTop:80,
        backgroundColor:Colors.White,
        height:'100%',
      }}>
        <Text style={{
            fontFamily:'Bold',
            fontSize:35,
            marginTop:20
        }}> Travel Dates </Text>

        <View style={{
            marginTop:30
        }}>
        <CalendarPicker onDateChange={onDateChange}
            allowRangeSelection={true}
            minDate={new Date()}
            selectedRangeStyle={{
                backgroundColor:Colors.Primary
            }}
            selectedDayTextStyle={{
                color:Colors.White
            }}
        />
        </View>

        <TouchableOpacity
        onPress={OnDateSelectionContinue}
            style={{
                padding:25,
                backgroundColor:Colors.Primary,
                borderRadius:15,
                marginTop:100
            }}>
                {/*<Link href={''}
                style={{
                    width:'100%',
                    textAlign:'center'
                }}>*/}
                <Text style={{
                    textAlign:'center',
                    color:Colors.White,
                    fontFamily:'Medium',
                    fontSize:20

                }}>Continue</Text>

                {/*</Link>*/}
            </TouchableOpacity>

      </View>
    )
}