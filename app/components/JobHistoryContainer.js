import { StyleSheet, View, TouchableOpacity } from "react-native";
import JobHistoryItem from "./JobHistoryItem";
import DatePicker from "./DatePicker";
import TextInput from "./TextInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { useState } from "react";
import BottomModal from "./BottomModal";
import Heading from "./Heading";

export default function JobHistoryContainer() {
  const [showFilterModal, setShowFilterModal] = useState(false);
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Heading text={"Historique de demandes"} as="heading5" />

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
      top={30}
        visible={showFilterModal}
        onClose={() => setShowFilterModal(false)}
      >
        <DatePicker label={"date debut"} />
        <DatePicker label={"date fin"} />
      </BottomModal>

      <JobHistoryItem />
      <JobHistoryItem />
      <JobHistoryItem />
    </View>
  );
}

const styles = StyleSheet.create({
  btnShowModalFilter: {
    padding: 12,
    backgroundColor: colors.secondary,
    borderRadius: 10,
  },
});
