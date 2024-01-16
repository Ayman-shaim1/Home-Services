import { StyleSheet, View } from "react-native";
import GoBackButton from "./GoBackButton";
import Heading from "./Heading";

export default function Header({ navigation, text }) {
  return (
    <View style={styles.header}>
      {navigation && <GoBackButton navigation={navigation} />}
      {text && (
        <Heading as="heading6" style={styles.text} text={text} color="black" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center" },
  text: { marginBottom: 15, marginLeft: 10 },
});
