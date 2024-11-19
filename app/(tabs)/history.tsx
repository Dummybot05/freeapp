import { StyleSheet, ScrollView, View, Image, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function History() {

  function His({ name, date, money, status, image }: any) {
    return (
      <View style={styles.stepContainer}>
        <Image source={{ uri: "https://picsum.photos/100" }}
          style={styles.logo}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={[styles.amount, { color: 'green' }]}>{money}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>
    )
  }
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#ff3456'} barStyle="light-content" />
      <Text style={styles.headTitle}>History</Text>
      <ScrollView>
      
        <View style={styles.container}>
          
          <His name="Dummy name" date="20 May 2024 11:54" money="$ 200.89" status="Credited" />
          <His name="Dummy name" date="20 May 2024 11:54" money="$ 200.89" status="Credited" />
          <His name="Dummy name" date="20 May 2024 11:54" money="$ 200.89" status="Credited" />
          <His name="Dummy name" date="20 May 2024 11:54" money="$ 200.89" status="Credited" />
          <His name="Dummy name" date="20 May 2024 11:54" money="$ 200.89" status="Credited" />
          <His name="Dummy name" date="20 May 2024 11:54" money="$ 200.89" status="Credited" />
          <His name="Dummy name" date="20 May 2024 11:54" money="$ 200.89" status="Credited" />
          <His name="Dummy name" date="20 May 2024 11:54" money="$ 200.89" status="Credited" />
          <His name="Dummy name" date="20 May 2024 11:54" money="$ 200.89" status="Credited" />
          <His name="Dummy name" date="20 May 2024 11:54" money="$ 200.89" status="Credited" />
          <His name="Dummy name" date="20 May 2024 11:54" money="$ 200.89" status="Credited" />
          <His name="Dummy name" date="20 May 2024 11:54" money="$ 200.89" status="Credited" />
          <His name="Dummy name" date="20 May 2024 11:54" money="$ 200.89" status="Credited" />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headTitle: {
    fontSize: 22,
    padding: 10,
    backgroundColor: "#ff3456",
    color: "#fff",
    width: '100%',
    paddingLeft: 20,
    position: 'sticky',
    top: 0,
    zIndex: 1
  },
  stepContainer: {
    width: "94%",
    height: 80,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#cdcdcd",
    marginTop: 5,
    marginBottom: 5,
    position: 'relative',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 60,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  name: {
    fontSize: 20,
    color: '#ff3456',
    position: 'absolute',
    top: 10,
    left: 80,
  },
  date: {
    fontSize: 14,
    color: "#898989",
    position: 'absolute',
    bottom: 20,
    left: 80,
    fontStyle: 'italic',
  },
  amount: {
    fontSize: 20,
    color: "#454545",
    position: 'absolute',
    top: 10,
    right: 10,
  },
  status: {
    fontSize: 12,
    color: "#898989",
    position: 'absolute',
    bottom: 20,
    right: 10,
  },
})