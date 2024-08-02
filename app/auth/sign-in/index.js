import React from 'react'
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation, useRouter } from 'expo-router'
import { useEffect } from 'react';
import { Colors } from './../../../constants/Colors.ts'

export default function SignIn(){
    const navigation=useNavigation();
    const router=useRouter();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])
    return(
        <View style={{
            padding:25,
            paddingTop:80,
            height:'100%',
            backgroundColor:Colors.White
        }}>
            <Text style={{
                fontFamily:'Bold',
                fontSize:30,
            }}>Let's Sign You In</Text>

            <Text style={{
                fontFamily:'Bold',
                fontSize:30,
                color:Colors.Gray,
                marginTop:20,
            }}>Welcome Back</Text>

            <View style={{
                marginTop:50
            }}>
                <Text style={{
                    fontFamily:'Medium'
                }}>Email</Text>
                <TextInput
                style={styles.input} 
                    placeholder='Enter your Email'/>
            </View>

            <View style={{
                marginTop:20
            }}>
                <Text style={{
                    fontFamily:'Medium'
                }}>Password</Text>
                <TextInput
                secureTextEntry={true}
                style={styles.input} 
                    placeholder='Enter your Password'/>
            </View>

            <View style={{
                padding:20,
                backgroundColor:Colors.Primary,
                borderRadius:15,
                marginTop:50,
            }}>
                <Text style = {{
                    color:Colors.White,
                    textAlign:'center'
                }}>Sign In</Text>
            </View>

            <TouchableOpacity
                onPress={()=>router.replace('auth/sign-up')}
                style={{
                padding:20,
                backgroundColor:Colors.White,
                borderRadius:15,
                marginTop:20,
                borderWidth:2
            }}>
                <Text style = {{
                    color:Colors.Primary,
                    textAlign:'center'
                }}>Create Account</Text>
            </TouchableOpacity>

            
        </View>
    )
}

const styles= StyleSheet.create({
    input:{
        padding:15,
        borderWidth:1,
        borderRadius:15,
        borderColor:Colors.Gray,
        fontFamily:'Medium'
    }    
})
