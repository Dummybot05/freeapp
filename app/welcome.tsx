import { Text, Image, StyleSheet, View } from "react-native";
import Button from "@/components/Button";

export default function Welcome() {
    return (
        <View style={styles.container}>
            <View style={styles.stepContainer}>
                <Image source={require("../assets/images/logo.png")}
                    style={styles.logo}
                />
                <Text style={styles.title}>Pay Free</Text>
                <Text style={styles.subText}>Welcome to <Text style={{ color: "#ff4500" }}>PayFree</Text> payment app</Text>
                <Button navigate={'/signup'} placeIt="Get Started" />
                <Button navigate={'/login'} placeIt="Login" />
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
        fontSize: 20,
        color: "#454545",
        marginTop: 40,
    },
})