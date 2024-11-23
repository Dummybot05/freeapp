import { Text, Image, StyleSheet, View, TextInput, Pressable } from "react-native";
import Button from "@/components/Button";
import { router } from "expo-router";
import axios from 'axios';

export default function Welcome() {
function ff() {
axios.post('https://amrutha-api.onrender.com/create', {
  email: "ab1@ab.abe",
  password: "User@1234"
}).then((data) => {
  console.log(data.data.status)
}).catch(err => { console.log(err) })
}
    return (
        <View style={styles.container}>
            <View style={styles.stepContainer}>
                <Image source={require("../assets/images/logo.png")}
                    style={styles.logo}
                />
                <Text style={styles.title}>Pay Free</Text>
                <Text style={styles.subText}>Get started</Text>
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
                <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={true} />
                <Button navigate={'/(tabs)'} placeIt="Create Account" />
                <Text style={styles.haveAcc}>Already have account? <Pressable onPress={() => router.push('/login')}><Text style={{ color: "#ff4500" }}>Login</Text></Pressable></Text>
                <Pressable onPress={() => {

ff()

}}>
<Text>yudsuk</Text>
</Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    stepContainer: {
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#cdcdcd",
        paddingTop: 20,
        paddingBottom: 20,
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 150,
    },
    title: {
        fontSize: 40,
        color: "#ff4500",
        fontWeight: "600",
    },
    subText: {
        fontSize: 18,
        width: '80%',
        color: "#454545",
        marginTop: 40,
        textAlign: 'center',
    },
    input: {
        width: '90%',
        margin: 12,
        borderWidth: 0.2,
        borderRadius: 60,
        padding: 20,
        height: 60
    },
    haveAcc: {
        color: "#454545",
        marginTop: 5,
        textAlign: 'center',
    },
})
