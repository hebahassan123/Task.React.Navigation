import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Box from './Box';

export default function App() {
  return (
    <SafeAreaView>
    <View style={styles.colors}>
    <Text style={styles.text}>Heba Hassan</Text>
      <Text style={[styles.text,{color:'black'}]}> some boxes with color</Text>
      <Box title={"Cyan"} bgColor={"#2aa198"}></Box>
      <Box title={"Blue"} bgColor={"#268bd2"}></Box>
      <Box title={"Magenta"} bgColor={"#d33682"}></Box>
      <Box title={"Orange"} bgColor={"#cb4b16"}></Box>
      <Box title={"Black"} bgColor={"black"}></Box>

      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
   fontSize:20,
    color: '#d33682',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:12,
    textAlign:'center'
  },
  colors:{
    paddingTop:82,
    padding:18
  }
});
