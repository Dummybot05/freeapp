import { Pressable, Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function Home() {
    const router = useRouter();

    return (
        <View style={styles.linker}>
            <Pressable  onPress={() => { router.push('/welcome') }}>
                <Text style={styles.link}>Welcome Screen</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    linker: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    link : {
        fontSize: 40,
        color: "blue"
    }
});