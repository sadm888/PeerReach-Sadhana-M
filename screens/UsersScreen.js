import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const users = [
  { id:"1", name:"A" },
  { id:"2", name:"B" },
  { id:"3", name:"C" },
];

export default function UsersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Nearby Users</Text>

      <FlatList
        data={users}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
          <View style={styles.userBox}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20 },
  heading:{ fontSize:22, fontWeight:"bold", marginBottom:15 },
  userBox:{ paddingVertical:12, borderBottomWidth:1, borderColor:"#eee" },
  name:{ fontSize:18 }
});