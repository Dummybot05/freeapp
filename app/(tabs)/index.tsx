import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, ScrollView, Text, View, Pressable, Image, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { router } from 'expo-router';

export default function HomeScreen() {
  function Temp() {
    return (
      <View style={styles.actions}>
        <Pressable style={styles.actionBtn}>
          <Image source={{ uri: "https://picsum.photos/100" }} style={{ width: 60, height: 60, borderRadius: 60 }} />
          <Text>Prema</Text>
        </Pressable>
        <Pressable style={styles.actionBtn}>
          <Image source={{ uri: "https://picsum.photos/100" }} style={{ width: 60, height: 60, borderRadius: 60 }} />
          <Text>Prema</Text>
        </Pressable>
        <Pressable style={styles.actionBtn}>
          <Image source={{ uri: "https://picsum.photos/100" }} style={{ width: 60, height: 60, borderRadius: 60 }} />
          <Text>Prema</Text>
        </Pressable>
        <Pressable style={styles.actionBtn}>
          <Image source={{ uri: "https://picsum.photos/100" }} style={{ width: 60, height: 60, borderRadius: 60 }} />
          <Text>Prema</Text>
        </Pressable>
      </View>
    )
  }
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#ff3456'} barStyle="light-content" />
      <Text style={styles.headTitle}>Home</Text>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.stepContainer}>
            <Text style={styles.name}>Hello Satish</Text>
            <Text style={styles.balance}>Balance</Text>
            <Text style={styles.crn}>CID 21288822</Text>
            <Text style={styles.money}>$ 5,998.68</Text>
          </View>
          <Text style={{ width: '90%', fontSize: 20, }}>Actions</Text>
          <View style={styles.actions2}>
            <Pressable style={styles.actionBtn2} onPress={() => { router.push('/profile')}}>
              <MaterialIcons name="person" size={24} color="#fff" />
            </Pressable>
            <Pressable style={styles.actionBtn2}>
              <MaterialCommunityIcons name="qrcode-scan" size={24} color="#fff" />
            </Pressable>
            <Pressable style={styles.actionBtn2}>
              <AntDesign name="qrcode" size={24} color="#fff" />
            </Pressable>
            <Pressable style={styles.actionBtn2}>
              <FontAwesome6 name="arrow-right-arrow-left" size={24} color="#fff" />
            </Pressable>
          </View>
          <Text style={{ width: '90%', fontSize: 20, }}>Friends</Text>
          <View style={styles.actions}>
            <Pressable style={styles.actionBtn}>
              <Image source={{ uri: "https://picsum.photos/100" }} style={{ width: 60, height: 60, borderRadius: 60 }} />
              <Text>Prema</Text>
            </Pressable>
            <Pressable style={styles.actionBtn}>
              <Image source={{ uri: "https://picsum.photos/100" }} style={{ width: 60, height: 60, borderRadius: 60 }} />
              <Text>Prema</Text>
            </Pressable>
            <Pressable style={styles.actionBtn}>
              <Image source={{ uri: "https://picsum.photos/100" }} style={{ width: 60, height: 60, borderRadius: 60 }} />
              <Text>Prema</Text>
            </Pressable>
            <Pressable style={styles.actionBtn}>
              <Image source={{ uri: "https://picsum.photos/100" }} style={{ width: 60, height: 60, borderRadius: 60 }} />
              <Text>Prema</Text>
            </Pressable>
          </View>
          <View style={styles.actions}>
            <Pressable style={styles.actionBtn}>
              <Image source={{ uri: "https://picsum.photos/100" }} style={{ width: 60, height: 60, borderRadius: 60 }} />
              <Text>Prema</Text>
            </Pressable>
            <Pressable style={styles.actionBtn}>
              <Image source={{ uri: "https://picsum.photos/100" }} style={{ width: 60, height: 60, borderRadius: 60 }} />
              <Text>Prema</Text>
            </Pressable>
            <Pressable style={styles.actionBtn}>
              <Image source={{ uri: "https://picsum.photos/100" }} style={{ width: 60, height: 60, borderRadius: 60 }} />
              <Text>Prema</Text>
            </Pressable>
            <Pressable style={styles.actionBtn}>
              <Image source={{ uri: "https://picsum.photos/100" }} style={{ width: 60, height: 60, borderRadius: 60 }} />
              <Text>Prema</Text>
            </Pressable>
          </View>
          <View style={styles.actions}>
            <Pressable style={styles.actionBtn}>
              <Image source={{ uri: "https://picsum.photos/100" }} style={{ width: 60, height: 60, borderRadius: 60 }} />
              <Text>Prema</Text>
            </Pressable>
            <Pressable style={styles.actionBtn}>
              <Image source={{ uri: "https://picsum.photos/100" }} style={{ width: 60, height: 60, borderRadius: 60 }} />
              <Text>Prema</Text>
            </Pressable>
            <Pressable style={styles.actionBtn}>
              <Image source={{ uri: "https://picsum.photos/100" }} style={{ width: 60, height: 60, borderRadius: 60 }} />
              <Text>Prema</Text>
            </Pressable>
            <Pressable style={styles.actionBtn}>
              <Image source={{ uri: "https://picsum.photos/100" }} style={{ width: 60, height: 60, borderRadius: 60 }} />
              <Text>Premam</Text>
            </Pressable>
          </View>
          <Temp />
          <Temp />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepContainer: {
    width: '90%',
    height: 120,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#898989",
    borderRadius: 10,
    margin: 10,
    position: 'relative',
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
  name: {
    fontSize: 24,
    color: '#ff3456',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  balance: {
    fontSize: 14,
    color: "#898989",
    position: 'absolute',
    top: 40,
    left: 10,
  },
  crn: {
    fontSize: 20,
    color: "#454545",
    position: 'absolute',
    top: 10,
    right: 10,
  },
  money: {
    fontSize: 20,
    color: "#454545",
    position: 'absolute',
    bottom: 20,
    right: 10,
  },
  actions: {
    width: '90%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#898989",
    borderRadius: 10,
    margin: 5,
  },
  actionBtn: {
    width: 60,
    height: 60,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actions2: {
    width: '90%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#898989",
    borderRadius: 10,
    margin: 10,
  },
  actionBtn2: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "#ff3456",
    alignItems: 'center',
    justifyContent: 'center',
  }

});
