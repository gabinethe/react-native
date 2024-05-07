import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={manu.container}>
      <Text style={manu.title}>BOM DIA CARALHO</Text>
      <Text style={manu.paragraph}>HELLO WORLD!</Text>
    </View>
  );
}

const manu = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "yellow",
  },
  paragraph: {
    fontSize: 50,
    fontWeight: "500",

    color: "white",
  },
});
