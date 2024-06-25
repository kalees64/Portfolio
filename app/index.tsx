import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/EvilIcons";

export default function Home() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>THANNICAN</Text>
        </View>
        <View style={{ paddingLeft: 20 }}>
          <Text style={{ justifyContent: "flex-start" }}>
            <Icon1 name="arrow-left" size={45} color="black" />
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/images/slide_4.png")} />
        </View>
        <View
          style={{
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontWeight: "bold", fontSize: 30, textAlign: "center" }}
          >
            Quick and responsive delivery
          </Text>
          <Text
            style={{
              paddingHorizontal: 45,
              fontSize: 18,
              paddingTop: 5,
              textAlign: "center",
            }}
          >
            If We're Late, Your Next Delivery is Free (Just Kiddind)
          </Text>
        </View>
        <View style={{ width: "100%", padding: 20 }}>
          <Text
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <Icon name="circle-o" size={20} color="black" />
            <Icon name="circle-o" size={20} color="black" />
            <Icon name="circle" size={20} color="black" />
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              backgroundColor: "#3fbdf1",
              paddingHorizontal: 140,
              paddingVertical: 15,
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
              borderRadius: 10,
            }}
          >
            Get Started
          </Text>
        </View>
        {/* <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]}>
        <Text>Sign in with Facebook</Text>
      </LinearGradient> */}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
    width: "100%",
    height: "100%",
  },
});
