import React from 'react'
import { Text, View } from 'react-native'
import { Tabs } from 'expo-router'

export default function TabLayout(){
    return (
      <Tabs>
            <Tabs.Screen name='mytrip'/>
            <Tabs.Screen name='discover'/>
            <Tabs.Screen name='profile'/>


      </Tabs>
    )
  }

