import { useNavigation, useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import { Colors } from './../../../constants/Colors.ts'
import Ionicons from '@expo/vector-icons/Ionicons';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from'./../../../configs/FirebaseConfig.js'

export default function SignUn(){
    const navigation=useNavigation();
    const router=useRouter();

    const [email,setEmail]= useState();
    const [password,setPassword]= useState();
    const [Fullname,setFullname]= useState();



    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[]);

    const OnCreateAccount=()=>{

        if(!email&&!password&&!Fullname){
            ToastAndroid.show('Please enter all details', ToastAndroid.BOTTOM)
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    router.replace('/mytrip')

    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode);
    // ..
    });
    }
    return(
        <View style={{
            padding:25,
            paddingTop:50,
            color:Colors.White,
            height:'100%'
        }}>

            <TouchableOpacity onPress={()=>router.back()}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

            <Text style={{
                fontFamily:'Bold',
                fontSize:40,
                marginTop:30,
            }}>Create New Account</Text>

            <View style={{
                marginTop:50
            }}>
                <Text style={{
                    fontFamily:'Medium',
                    fontSize:20
                }}>User Fullname</Text>
                <TextInput
                    style={styles.input} 
                    placeholder='Enter your Fullname'
                    onChangeText={(value)=>setFullname(value)}
                    />
            </View>

            <View style={{
                marginTop:50
            }}>
                <Text style={{
                    fontFamily:'Medium',
                    fontSize:20,
                }}>Email</Text>
                <TextInput
                    style={styles.input} 
                    placeholder='Enter your Email'
                    onChangeText={(value)=>setEmail(value)}
                />
            </View>

            <View style={{
                marginTop:20
            }}>
                <Text style={{
                    fontFamily:'Medium',
                    fontSize:20,
                }}>Password</Text>
                <TextInput
                secureTextEntry={true}
                style={styles.input} 
                    placeholder='Enter your Password'
                    onChangeText={(value)=>setPassword(value)}
                />
            </View>

            <TouchableOpacity onPress={OnCreateAccount} style={{
                padding:20,
                backgroundColor:Colors.Primary,
                borderRadius:15,
                marginTop:50,
            }}>
                <Text style = {{
                    color:Colors.White,
                    textAlign:'center'
                }}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=>router.replace('auth/sign-in')}
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
                }}>Sign In</Text>
            </TouchableOpacity>


            
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        padding:15,
        borderWidth:1,
        borderRadius:15,
        borderColor:Colors.Gray,
        fontFamily:'Medium'
    }    
})