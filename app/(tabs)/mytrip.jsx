import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../../configs/FirebaseConfig';
import UserTripList from '../../components/MyTrips/UserTripList';

export default function MyTrip(){

    const [userTrips,setUserTrips]=useState([]);
    const user=auth.currentUser;
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
      user&&GetMyTrips()
    },[user])
    const GetMyTrips=async()=>{
      setLoading(true);
      setUserTrips([]);
      const q=query(collection(db,'UserTrip2'),where('userEmail','==',user?.email));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setUserTrips(prev=>[...prev,doc.data()])
      });
      setLoading(false);
    }

    return (
      <ScrollView style = {{
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
        {loading&&<ActivityIndicator size={'large'} color={Colors.Primary}/>}

        {userTrips?.length==0?
          <StartNewTripCard/>:<UserTripList userTrips={userTrips}/>
        }
      </ScrollView>
    )
  }