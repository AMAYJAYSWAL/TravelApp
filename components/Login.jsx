import React from 'react'
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native'
import { Colors } from '@/constants/Colors.ts'
import { useRouter } from 'expo-router'


export default function Login() {
    const router=useRouter();
  return (
    <View>
        <Image source={require('./../assets/images/Login.jpg')}
            style={{
                width:'100%',
                height:520,
            }}
        />

        <View style={styles.container}>
            <Text style={{
                fontSize:35,
                fontFamily:'ExtraBold',
                textAlign:'center',
                marginTop:10,
            }}>Tra-well</Text>

            <Text style={{
                fontFamily:'Medium',
                fontSize:18,
                textAlign:'center',
                color:Colors.Gray,
                marginTop:20,
            }}>A journey of a thousand miles begins with a single step. In the end, we only regret the chances we didn't take. So travel smarter with us with some AI - driven insights.</Text>

                <TouchableOpacity style={styles.button} onPress={()=>router.push('auth/sign-in')}>
                    <Text style={{color:Colors.White, textAlign:'center', fontFamily:'Medium', fontSize:18}}>Get Started</Text>
                </TouchableOpacity>
           
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:Colors.White,
        marginTop:-20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        height:'100%',
        padding:25,

    },
    button:{
        padding:15,
        backgroundColor:'black',
        borderRadius:99,
        marginTop:'20%'
    }
})
