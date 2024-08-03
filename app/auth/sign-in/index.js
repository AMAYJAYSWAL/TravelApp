import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import { useNavigation, useRouter } from 'expo-router'
import { useEffect } from 'react';
import { Colors } from './../../../constants/Colors.ts'
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../../configs/FirebaseConfig.js';

export default function SignIn(){
    const navigation=useNavigation();
    const router=useRouter();

    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

    const onSignIn=()=>{

        if(!email&&!password){
            ToastAndroid.show("Please enter Email and Password", ToastAndroid.LONG);
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;

        router.replace('/mytrip')
        console.log(user);
    // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage,errorCode);

        if(errorCode=='auth/invalid-credential'){
            ToastAndroid.show("Invalid credentials",ToastAndroid.LONG);
        }
    });
    }
    return(
        <View style={{
            padding:25,
            paddingTop:50,
            height:'100%',
            backgroundColor:Colors.White
        }}>
            <TouchableOpacity onPress={()=>router.back()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            <Text style={{
                fontFamily:'ExtraBold',
                fontSize:40,
                marginTop:30,
            }}>Let's Sign You In</Text>

            <Text style={{
                fontFamily:'Bold',
                fontSize:35,
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
                onChangeText={(value)=>setEmail(value)}
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
                onChangeText={(value)=>setPassword(value)}
                    placeholder='Enter your Password'/>
            </View>

            <TouchableOpacity onPress={onSignIn} style={{
                padding:20,
                backgroundColor:Colors.Primary,
                borderRadius:15,
                marginTop:50,
            }}>
                <Text style = {{
                    color:Colors.White,
                    textAlign:'center'
                }}>Sign In</Text>
            </TouchableOpacity>

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
