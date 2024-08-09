import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../../configs/FirebaseConfig';

export default function MyTrip(){

    const [userTrips,setUserTrips]=useState([]);
    const user=auth.currentUser;

    useEffect(()=>{
      user&&GetMyTrips()
    },[user])
    const GetMyTrips=async()=>{
      const q=query(collection(db,'UserTrip2'),where('userEmail','==',user?.email));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    }

    return (
      <View style = {{
        padding:25,
        paddingTop:55,
        backgroundColor:Colors.White,
        height:'100%'
      }}>
        <View style={{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between'
        }}>
          <Text style={{
            fontFamily:'ExtraBold',
            fontSize:35
          }}> My Trips </Text>
          <Ionicons name="add-circle" size={50} color="black" />
        </View>

        {userTrips?.length==0?
          <StartNewTripCard/>:null
        }
      </View>
    )
  }