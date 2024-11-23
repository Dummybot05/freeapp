import { StyleSheet, ScrollView, View, Image, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function History() {

  function Trans({ name, date, money, status, image }: any) {
    return (
      <View style={styles.stepContainer}>
        <Image source={{ uri: "https://picsum.photos/100" }}
          style={styles.logo}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
        {status ? <Text style={[styles.amount, { color: '#00c000' }]}>+ {money}</Text>
                :  <Text style={[styles.amount, { color: '#ff3456' }]}>- {money}</Text> }
        <Text style={styles.status}>{status ? 'Credited' : 'Debited'}</Text>
      </View>
    )
  }

  return (
      <ScrollView>      
      <StatusBar backgroundColor={'#ff3456'} barStyle="light-content" />
        <View style={styles.container}>
          <Trans name="Satish Dama" date="20 Nov 2024 09:13" money="7,975.44" status={true} />
          <Trans name="Samantha Ruth" date="20 Nov 2024 09:13" money="453.60" status={false} />
          <Trans name="Krithi Suresh" date="20 Nov 2024 09:13" money="3,551.00" status={true} />
          <Trans name="Satish Dama" date="20 Nov 2024 09:13" money="7,975.44" status={true} />
          <Trans name="Amurtha Pelzo" date="20 Nov 2024 09:13" money="1,228.22" status={false} />

          <Trans name="Satish Dama" date="20 Nov 2024 09:13" money="7,975.44" status={true} />
          <Trans name="Samantha Ruth" date="20 Nov 2024 09:13" money="453.60" status={false} />
          <Trans name="Satish Dama" date="20 Nov 2024 09:13" money="7,975.44" status={true} />
          <Trans name="Satish Dama" date="20 Nov 2024 09:13" money="7,975.44" status={true} />

        </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  stepContainer: {
    width: "94%",
    height: 80,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#cdcdcd",
    marginTop: 10,
    position: 'relative',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 60,
    position: 'absolute',
    top: 15,
    left: 15,
  },
  name: {
    fontSize: 20,
    position: 'absolute',
    fontWeight: 'bold',
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
    fontWeight: 'bold',
  },
  status: {
    fontSize: 12,
    color: "#898989",
    position: 'absolute',
    bottom: 20,
    right: 10,
  },
})
