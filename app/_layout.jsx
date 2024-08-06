import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import {Text,Image} from "react-native";
import {CreateTripContext} from '../context/CreateTripContext'
import { useState } from "react";

export default function RootLayout() {

  useFonts({
    'Regular':require('./../assets/fonts/Regular.ttf'),
    'Medium':require('./../assets/fonts/Medium.ttf'),
    'Bold':require('./../assets/fonts/Bold.ttf'),
    'ExtraBold':require('./../assets/fonts/ExtraBold.ttf'),
    'Light':require('./../assets/fonts/Light.ttf'),
    'ExtraLight':require('./../assets/fonts/ExtraLight.ttf'),




  })

  const [tripData, setTripData]= useState([]);
  return (

    <CreateTripContext.Provider value={{tripData,setTripData}}>

      <Stack screenOptions={{
        headerShown:false,
      }}>
        {/*<Stack.Screen name="index"  options={{
          headerShown:false
        }}/>*/}

        <Stack.Screen name="(tabs)"/>
      </Stack>
    
      </CreateTripContext.Provider>
  );
}
