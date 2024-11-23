import { Pressable, Text, Image, StyleSheet, View } from 'react-native';
import axios from 'axios';
import { useState } from 'react'

export default function Profile() {
const [res, setRes] = useState('un');

function getData() {
  axios.get('https://amrutha-api.onrender.com/home', {
   headers: {
    'Content-Type': 'application/json'
  }
})
    .then(function (response) {
      console.log(response)
      setRes(response.data.user)
    })
    .catch(function (error) {
      console.log(error);
    });
}

getData();

   return (
     <View style={styles.container}>
     <View style={styles.stepContainer}>
     <Image source={{ uri: 'https://picsum.photos/100' }} style={styles.img} />
     <Text style={styles.headTxt}>Name</Text>
     <Text style={styles.valueTxt}>{res[0].username}</Text>
     <Text style={styles.headTxt}>Email</Text>
     <Text style={styles.valueTxt}>{res[0].email}</Text>
     <Text style={styles.headTxt}>Date of Birth</Text>
     <Text style={styles.valueTxt}>10/02/2003</Text>
     <Text style={styles.headTxt}>Gender</Text>
     <Text style={styles.valueTxt}>Male</Text>
     <Text style={styles.headTxt}>Region</Text>
     <Text style={styles.valueTxt}>Indian</Text>
     <Text style={styles.headTxt}>Bio</Text>
     <Text style={styles.valueTxt}>Life is hard, but you have to become strong</Text>
     </View>
     </View>
   );    
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   },
   stepContainer: {
    width: '90%',
    borderWidth: 1,
    borderColor: "#adadad",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
   },
   headTxt: {
    padding:5,
    paddingLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
   },
   valueTxt: {
    padding:5,
    paddingLeft: 15,
    fontSize: 20,
    paddingBottom:10,
    color: "#ff4500"

   },
   img: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 8,
   }
})
