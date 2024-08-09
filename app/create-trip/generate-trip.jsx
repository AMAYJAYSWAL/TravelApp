import React, { useContext, useEffect, useState } from 'react'
import { Text, View,Image } from 'react-native'
import { Colors } from '../../constants/Colors'
import { CreateTripContext } from '../../context/CreateTripContext'
import { AI_PROMPT } from '../../constants/Options'
import { chatSession } from '../../configs/AImodel'
import { useRouter } from 'expo-router'
import { doc, getFirestore, setDoc } from "firebase/firestore";
import {auth,db} from './../../configs/FirebaseConfig'

export default function GenerateTrip(){

    const [loading,setLoading]=useState(false);

    const{tripData,setTripData}=useContext(CreateTripContext);

    const router=useRouter();

    const user=auth.currentUser;

    useEffect(()=>{
        GenerateAItrip()
    },[])
    const GenerateAItrip=async()=>{

        setLoading(true);
        const FINAL_PROMPT=AI_PROMPT.replace('{location}',tripData?.locationInfo?.name)
        .replace('{totalDays}',tripData.totalNoOfDays)
        .replace('{totalDays}',tripData.totalNoOfDays)
        .replace('{totalNight}',tripData.totalNoOfDays-1)
        .replace('{traveler}',tripData.traveler?.title)
        .replace('{budget}',tripData.budget)
        .replace('{totalNight}',tripData.totalNoOfDays-1)


        console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result.response.text());
    const tripResp=JSON.parse(result.response.text())


    setLoading(false);


    const docID=(Date.now()).toString();
    const result_=await setDoc(doc(db,"UserTrip2",docID),{
        userEmail:user.email,
        tripPlan:tripResp,
        tripData:JSON.stringify(tripData),
        docID:docID
        
    })

        router.push('(tabs)/mytrip');
    


    }
    return (
      <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.White,
        height:'100%'
      }}>
        <Text style={{
            fontFamily:'Bold',
            fontSize:35,
            textAlign:'center'
        }}> Please Wait... </Text>

        <Text style={{
            fontFamily:'Medium',
            fontSize:20,
            textAlign:'center',
            marginTop:40
        }}> We are working to generate best trip for you </Text>

        <Image source={require('./../../assets/images/plane2.gif')}
        style={{
            width:'100%',
            height:200,
            resizeMode:'contain'
        }}></Image>

        <Text style={{
            fontFamily:'Regular',
            color:Colors.Gray,
            fontSize:20,
            textAlign:'center'
        }}>Do not go back</Text>
      </View>
    )
}