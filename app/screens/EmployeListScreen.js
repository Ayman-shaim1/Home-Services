import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  BottomModal,
  Button,
  EmployeItem,
  GoBackButton,
  Header,
  Heading,
  Label,
  PositionPicker,
  RatingPicker,
  Screen,
} from "../components";
import Slider from "@react-native-community/slider";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const EMPLOYES = [
  {
    id: 1,
    name: "Jhon Doe",
    price: 100.5,
    rating: 4,
    image: require("../assets/emp1.jpeg"),
  },
  {
    id: 2,
    name: "Steve Smith",
    price: 200.5,
    rating: 5,
    image: require("../assets/emp2.jpeg"),
  },
  {
    id: 3,
    name: "Jane Doe",
    price: 99,
    rating: 4,
    image: require("../assets/emp3.jpeg"),
  },
  {
    id: 4,
    name: "Maria Jhonson",
    price: 230,
    rating: 5,
    image: require("../assets/emp4.jpeg"),
  },
];

export default function EmployeListScreen({ navigation }) {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [maxprix, setMaxprix] = useState(400);
  const [startNumber, setStartNumber] = useState(1);

  return (
    <Screen widthPadding safeArea style={styles.container}>
      <Header navigation={navigation} text={"Jardinage"} />
      <View style={styles.header}>
        <PositionPicker />
        <TouchableOpacity
          style={styles.btnShowModalFilter}
          onPress={() => setShowFilterModal(true)}
        >
          <MaterialCommunityIcons
            name="tune-vertical"
            size={16}
            color={colors.white}
          />
        </TouchableOpacity>
      </View>

      <BottomModal
        visible={showFilterModal}
        onClose={() => setShowFilterModal(false)}
      >
        <Heading as="heading5" text={"Chercher avec filtre"} />
        <Label text={"Filtrer par prix :"} />
        <Slider
          style={{ width: "100%" }}
          minimumValue={100}
          maximumValue={1000}
          thumbTintColor={colors.primary}
          minimumTrackTintColor={colors.primary}
          value={maxprix}
          onValueChange={(value) => setMaxprix(value)}
        />
        <Text
          style={{
            marginBottom: 20,
            fontFamily: "LatoRegular",
          }}
        >
          prix max :{maxprix.toFixed(0)}
        </Text>
        <RatingPicker
          number={startNumber}
          setNumber={setStartNumber}
          label={"Filtrer par etoile :"}
        />
        <Text style={{ fontFamily: "LatoRegular" }}>
          nombre d'etoile choisie: {startNumber}
        </Text>
        <Button
          text="confirmer"
          style={{ marginTop: 40 }}
          color="primary"
          icon={"filter-check"}
          onPress={() => setShowFilterModal(false)}
        />
        <Button
          text="annuler le filtre"
          color="gray"
          icon={"filter-remove"}
          onPress={() => setShowFilterModal(false)}
        />
      </BottomModal>

      <FlatList
        style={{ marginTop: 20 }}
        data={EMPLOYES}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <EmployeItem navigation={navigation} employe={item} index={index} />
        )}
        scrollEnabled={false}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnShowModalFilter: {
    padding: 12,
    backgroundColor: colors.secondary,
    borderRadius: 10,
  },
});
