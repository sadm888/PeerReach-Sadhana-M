import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const chats = [
  { id:"1", name:"A", message:"Hello!" },
  { id:"2", name:"B", message:"How are you?" },
  { id:"3", name:"C", message:"See you soon!" },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recent Chats</Text>

      <FlatList
        data={chats}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
          <TouchableOpacity
            style={styles.chatBox}
            onPress={()=>navigation.navigate("Chat",{ user:item.name })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.msg}>{item.message}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20 },
  heading:{ fontSize:22, fontWeight:"bold", marginBottom:15 },
  chatBox:{ paddingVertical:12, borderBottomWidth:1, borderColor:"#eee" },
  name:{ fontSize:18, fontWeight:"600" },
  msg:{ color:"gray" }
});
