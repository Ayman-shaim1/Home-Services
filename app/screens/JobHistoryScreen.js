import { useState } from "react";
import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Heading,
  BottomModal,
  DatePicker,
  JobHistoryItem,
  Screen,
  Picker,
  Button,
} from "../components";
import colors from "../config/colors";

const JOBHISTORIES = [
  {
    id: 1,
    employeName: "Jhon Doe",
    dateJob: new Date(),
  },
  {
    id: 2,
    employeName: "Steve Smith",
    dateJob: new Date(),
  },
];

export default function JobHistoryScreen({ navigation }) {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [status, setStatus] = useState(false);

  return (
    <Screen widthPadding safeArea>
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
        <DatePicker icon={"calendar-start"} label={"date debut"} />
        <DatePicker icon={"calendar-end"} label={"date fin"} />

        <Picker
          icon={"list-status"}
          items={["en cours", "accepte", "refuse"]}
          label={"status"}
          value={status}
          onChange={(status) => setStatus(status)}
          placeholder={"veuillez selectionner le status"}
        />

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
        data={JOBHISTORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <JobHistoryItem
            navigation={navigation}
            JobHistoryItem={item}
            index={index}
          />
        )}
        scrollEnabled={false}
      />

      
    </Screen>
  );
}

const styles = StyleSheet.create({
  btnShowModalFilter: {
    padding: 12,
    backgroundColor: colors.secondary,
    borderRadius: 10,
  },
});
