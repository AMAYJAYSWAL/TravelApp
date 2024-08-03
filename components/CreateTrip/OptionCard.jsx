import React from 'react'
import { Text, View } from 'react-native'
import { Colors } from '../../constants/Colors'

export default function OptionCard({option,SelectTraveler}){
    return (
      <View style={[{
        padding:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:Colors.LightGray,
        borderRadius:15

      },SelectTraveler?.id==option.id && {borderWidth:3}]}>

        <View>
          <Text style={{
            fontSize:20,
            fontFamily:'Bold',

          }}>{option.title}</Text>

          <Text style={{
            fontSize:17,
            fontFamily:'Regular',
            color:Colors.Gray,
          }}>{option.desc}</Text>
        </View>

       
      </View>
    )
}