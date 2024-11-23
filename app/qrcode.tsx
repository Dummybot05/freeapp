import { Text, Image, StyleSheet, View } from 'react-native';

export default function Qrcode() {
   return (
     <View style={styles.container}>
     <View style={styles.stepContainer}>
<Text style={styles.txt}>Scan and Pay Here</Text>  
    <Image source={{ uri: "https://picsum.photos/300" }} style={styles.img} />
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
    alignItems: 'center',
   },
   img: {
    width: 300,
    height: 300,

    margin:20,
   },
   txt: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
   }
})
