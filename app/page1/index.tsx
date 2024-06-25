import { StyleSheet, ImageBackground } from "react-native";
import { View, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../../assets/images/bg.jpg")}
      style={styles.bgimg}
    >
      <View>
        <Text style={styles.tittle}>DWATER</Text>
        <FontAwesome name="play" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgimg: {
    height: "100%",
    width: "100%",
  },
  tittle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 680,
  },
});
