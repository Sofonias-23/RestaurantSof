import React from 'react'
import { StyleSheet,Text,ScrollView,Image} from 'react-native'




export default function UserGuest() {
    return (
     <ScrollView 
     centerContent
     style={styles.viewBody}
     
     >
      <Image
     source={require("../../../assets/nuevoLog.png")}
      resizeMode="contain"
      style={styles.image}
      />  
       <Text style={styles.title}>Consulta tu perfil </Text>
       <Text style={styles.description}>
           xxxxxxxxxxxxxxxxxxxxxxxxxx 
       </Text>
       
     </ScrollView>

    )
}

const styles = StyleSheet.create({
viewBody:{
    marginHorizontal: 30

},
image: {
    height:200,
    width: "100%",
    marginBottom: 10,
    textAlign: "center"
},
title:{
    height:30,
    fontSize:"bold",
    fontSize: 19,
    marginVertical:10,
    textAlign:"center",
      
},
description:{
    textAlign:"justify",
    marginBottom :20,
    color:"#b4b4b4"
}

})
