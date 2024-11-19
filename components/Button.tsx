import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Button({ placeIt, navigate }: any) {
    const router = useRouter();
    return (
        <Pressable style={styles.btn} onPress={() => router.push(navigate)}>
            <Text style={styles.btnText}>{placeIt}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
   btn: {
    backgroundColor: '#ff3456',
    padding: 15,
    width: '90%',
    marginTop: 10,
    borderRadius: 60,
    
   },
   btnText: {
    color: "#fff",
    fontSize: 20,
    textAlign: 'center',
   }
})