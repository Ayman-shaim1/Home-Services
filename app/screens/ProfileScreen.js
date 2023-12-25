import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, Heading, Image, Label, Screen } from "../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function ProfileScreen() {
  return (
    <Screen widthPadding safeArea scrollEnabled={false}>
      <View style={styles.info}>
        <Image source={require("../assets/emp1.jpeg")} size="lg" />
        <View style={styles.text}>
          <Heading as="heading4" text={"Jhon Doe"} />
        </View>
        <TouchableOpacity style={styles.settingsButton}>
          <MaterialCommunityIcons name="cog" size={30} color={colors.gray} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.profileItem, { backgroundColor: colors.lightGray }]}
      >
        <View style={styles.profileItemContent}>
          <View
            style={[styles.iconContainer, { backgroundColor: colors.success }]}
          >
            <MaterialCommunityIcons
              name="account-cog"
              size={20}
              color={colors.white}
            />
          </View>
          <Text style={styles.profileItemText}>Modifier profile</Text>
        </View>

        <MaterialCommunityIcons
          name="arrow-right"
          size={22}
          color={colors.black}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.profileItem, { backgroundColor: colors.lightGray }]}
      >
        <View style={styles.profileItemContent}>
          <View
            style={[styles.iconContainer, { backgroundColor: colors.warning }]}
          >
            <MaterialCommunityIcons
              name="bell"
              size={20}
              color={colors.white}
            />
          </View>
          <Text style={styles.profileItemText}>Modifier notifications</Text>
        </View>

        <MaterialCommunityIcons
          name="arrow-right"
          size={22}
          color={colors.black}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.profileItem, { backgroundColor: colors.lightGray }]}
      >
        <View style={styles.profileItemContent}>
          <View
            style={[styles.iconContainer, { backgroundColor: colors.danger }]}
          >
            <MaterialCommunityIcons
              name="lock"
              size={20}
              color={colors.white}
            />
          </View>
          <Text style={styles.profileItemText}>Modifier le mot de passe</Text>
        </View>

        <MaterialCommunityIcons
          name="arrow-right"
          size={22}
          color={colors.black}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  info: {
    flexDirection: "row",
    marginBottom: 40,
    alignItems: "center",
    position: "relative",
    marginTop: 30,
  },
  text: {
    marginLeft: 10,
  },
  settingsButton: {
    position: "absolute",
    right: "5%",
    top: "30%",
  },
  profileItem: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 7,
    marginBottom: 10,
    position: "relative",
  },
  profileItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileItemText: {
    marginLeft: 10,
    color: colors.black,
    fontFamily: "LatoRegular",
    fontSize: 15,
  },
  arrowIcon: {
    position: "absolute",
    right: "5%",
    top: "50%",
  },
  iconContainer: {
    borderRadius: 5,
    padding: 5,
  },
});
