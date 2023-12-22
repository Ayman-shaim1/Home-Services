import { Image, StyleSheet, Text, View } from "react-native";
import {
  BottomModal,
  Button,
  GoBackButton,
  Heading,
  Label,
  Map,
  Rating,
  RatingPicker,
  Screen,
  TextInput,
} from "../components";
import colors from "../config/colors";
import { useState } from "react";

export default function JobHistoryDetails({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [ratingNumber, setRatingNumber] = useState(1);

  return (
    <Screen widthPadding safeArea>
      <GoBackButton navigation={navigation} />
      <View style={styles.center}>
        <Image source={require("../assets/emp3.jpeg")} style={styles.image} />
      </View>
      <View style={styles.center}>
        <Heading text={"Maria Jhonson"} as="heading4" />
      </View>
      <View style={styles.center}>
        <View style={styles.status}>
          <Text style={styles.statusText}>en cours</Text>
        </View>
      </View>
      <View style={[styles.center, { marginTop: 20 }]}>
        <Map
          position={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0099,
            longitudeDelta: 0.0099,
          }}
        />
      </View>

      <View style={[styles.center, { marginTop: 20 }]}>
        <Label text={"200 MAD par heure"} />
      </View>

      {/* <View style={[styles.center, { marginTop: 20 }]}>
        <Rating number={5} />
        <Label text={"Hello world"} />
      </View> */}
      <Button icon={"minus-network"} text="fermer" onPress={() => setShowModal(true)} />
      <BottomModal visible={showModal} onClose={() => setShowModal(false)}>
        <RatingPicker
          label={"nombre des etoiles"}
          number={ratingNumber}
          setNumber={setRatingNumber}
        />
        <TextInput
          label={"commentaire"}
          placeholder={"veuillez entrer un commentaire"}
        />
        <Button text="valider" icon={"comment-check"} onPress={() => setShowModal(true)} />
      </BottomModal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 15,
    resizeMode: "cover",
  },
  status: {
    paddingVertical: 10,
    paddingHorizontal: 7,
    backgroundColor: colors.warningSubtle,
    borderRadius: 7,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  statusText: {
    color: colors.warning,
    fontSize: 14,
    fontFamily: "LatoRegular",
  },
});
