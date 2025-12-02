import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen({ navigation }) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const loadUser = async () => {
    setName(await AsyncStorage.getItem("userName"));
    setStatus(await AsyncStorage.getItem("userStatus"));
  };

  useEffect(()=>{ loadUser(); }, []);

  const editProfile = () => navigation.replace("Welcome");

  const logout = async () => {
    await AsyncStorage.clear();
    navigation.replace("Welcome");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <Text style={styles.info}>Name: {name}</Text>
      <Text style={styles.info}>Status: {status}</Text>

      <TouchableOpacity style={styles.button} onPress={editProfile}>
        <Text style={styles.btnText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logout} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20 },
  title:{ fontSize:24, fontWeight:"bold", marginBottom:20 },
  info:{ fontSize:18, marginBottom:10 },

  button:{ backgroundColor:"black", padding:15, borderRadius:8, marginTop:20 },
  logout:{ backgroundColor:"#ff3b30", padding:15, borderRadius:8, marginTop:10 },

  btnText:{ color:"white", textAlign:"center", fontSize:16 },
  logoutText:{ color:"white", textAlign:"center", fontSize:16 }
});