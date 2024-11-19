import { Text, Image, StyleSheet, View, TextInput, Pressable } from "react-native";
import Button from "@/components/Button";
import { router } from "expo-router";

export default function Welcome() {
    return (
        <View style={styles.container}>
            <View style={styles.stepContainer}>
                <Image source={require("../assets/images/logo.png")}
                    style={styles.logo}
                />
                <Text style={styles.title}>Pay Free</Text>
                <Text style={styles.subText}>Login</Text>
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
                <Pressable><Text style={styles.forPass}>Forgot Password</Text></Pressable>
                <Button navigate={'/(tabs)'} placeIt="Login" />
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
    forPass: {
        color: '#ff3456',
        marginTop: 5,
        marginBottom: 5,
        textAlign: 'center',
    },
})