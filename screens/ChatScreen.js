import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const messages = [
  { id:1, text:"Hey!", sent:false },
  { id:2, text:"Hello bro!", sent:true },
  { id:3, text:"Working on PeerReach?", sent:false },
];

export default function ChatScreen({ route, navigation }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Text style={styles.back}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Chat with {user}</Text>

      {messages.map(m=>(
        <View key={m.id} style={[styles.bubble, m.sent?styles.sent:styles.received]}>
          <Text>{m.text}</Text>
        </View>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20 },
  back:{ fontSize:16, color:"#007AFF", marginBottom:10 },
  title:{ fontSize:18, fontWeight:"bold", textAlign:"center", marginBottom:20 },
  bubble:{
    padding:10, borderRadius:8, marginVertical:5, borderWidth:1, maxWidth:"70%"
  },
  received:{ backgroundColor:"#fff", alignSelf:"flex-start" },
  sent:{ backgroundColor:"#e0e0e0", alignSelf:"flex-end" },
});