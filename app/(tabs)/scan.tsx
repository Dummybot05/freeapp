import { StyleSheet, ScrollView, View, Image, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PagerView from 'react-native-pager-view';

export default function History() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#ff3456'} />
      <Text style={styles.headTitle}>Scan and Pay</Text>
      <PagerView style={styles.pagerView} initialPage={0}>
        <View key="1" style={styles.viewers}>
          <Text style={styles.tcc}>Firs page</Text>
        </View>
        <View key="2" style={styles.viewers}>
          <Text style={styles.textData}>Scan and Pay Here</Text>
          <Image style={{width: 200, height: 200}} source={require('../../assets/images/logo.png')}
          />
        </View>
      </PagerView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pagerView: {
    height: '100%', 
  },
  textData: {
    fontSize: 24,
    textAlign: 'center',
    padding: 20
  },
  viewers: {
    display: 'flex',
    height: '90%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tcc: {

  },
  container: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  headTitle: {
    fontSize: 24,
    padding: 10,
    backgroundColor: "#ff3456",
    color: "#fff",
    width: '100%',
    paddingLeft: 20,
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