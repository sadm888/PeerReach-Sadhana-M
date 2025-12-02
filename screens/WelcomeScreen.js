import React, {useState} from 'react';
import { View,Text,TextInput,TouchableOpacity,StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function WelcomeScreen({ navigation }) {
  const [name,setName] = useState('');
  const [status,setStatus] = useState('');

  const saveUser = async () => {
    if (!name.trim()) return alert("Enter your name!");
    await AsyncStorage.setItem("userName", name);
    await AsyncStorage.setItem("userStatus", status || "Hey there! I'm using PeerReach");
    navigation.replace("Tabs");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PeerReach</Text>
      <TextInput
        style={styles.input}
        placeholder="Your name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Your status"
        value={status}
        onChangeText={setStatus}
      />
      <TouchableOpacity style={styles.button} onPress={saveUser}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:"center", padding:20 },
  title:{ fontSize:32, fontWeight:"bold", textAlign:"center", marginBottom:40 },
  input:{
    borderWidth:1, borderColor:"#ccc", padding:12, borderRadius:8,
    marginBottom:15, backgroundColor:"white"
  },
  button:{ backgroundColor:"black", padding:15, borderRadius:8 },
  buttonText:{ color:"white", textAlign:"center", fontSize:16 }
});