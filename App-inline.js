import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View 
      style={{
        flex: 1,

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "pink",  
      }}
    
>
  <Text style={{
    fontSize: 50,
    fontWeight: "bold",
    color: "white",
  }} 
  >
    INDMO

    </Text>

  <Text style={{
      paddingTop: 20,
      fontSize: 30,
      color: "yellow",

  }}
  
>
    HELLO WORLD!
    
    </Text>
</View>
  )
}
