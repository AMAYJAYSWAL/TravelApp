import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import {Text,Image} from "react-native";

export default function RootLayout() {

  useFonts({
    'Regular':require('./../assets/fonts/Regular.ttf'),
    'Medium':require('./../assets/fonts/Medium.ttf'),
    'Bold':require('./../assets/fonts/Bold.ttf'),
    'ExtraBold':require('./../assets/fonts/ExtraBold.ttf'),
    'Light':require('./../assets/fonts/Light.ttf'),
    'ExtraLight':require('./../assets/fonts/ExtraLight.ttf'),




  })
  return (

      <Stack screenOptions={{
        headerShown:false
      }}>
        {/*<Stack.Screen name="index"  options={{
          headerShown:false
        }}/>*/}

        <Stack.Screen name="(tabs)"/>
      </Stack>

  );
}
