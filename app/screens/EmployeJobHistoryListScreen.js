import { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Heading,
  BottomModal,
  DatePicker,
  Screen,
  Picker,
  Button,
  EmployeJobHistoryItem
} from "../components";
import colors from "../config/colors";

const JOBHISTORIES = [
  {
    id: 1,
    employeName: "Jane Doe",
    dateJob: new Date(),
    image: require("../assets/emp3.jpeg"),
    isCurrent:true,
  },
  {
    id: 2,
    employeName: "Maria Jhonson",
    dateJob: new Date(),
    image: require("../assets/emp4.jpeg"),
  },
  {
    id: 3,
    employeName: "Maria Jhonson",
    dateJob: new Date(),
    image: require("../assets/emp4.jpeg"),
  },
  {
    id: 4,
    employeName: "Maria Jhonson",
    dateJob: new Date(),
    image: require("../assets/emp4.jpeg"),
  },
];


export default function EmployeJobHistoryListScreen({ navigation }) {

  const [showFilterModal, setShowFilterModal] = useState(false);
  const [status, setStatus] = useState(false);

  return (
    <Screen widthPadding safeArea>
      <View style={styles.header}>
        <Heading text={"Historique de demandes"} as="heading6" />

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
          <EmployeJobHistoryItem
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Platform.OS === "ios" ? 20 : 40,
  },
  btnShowModalFilter: {
    padding: 12,
    backgroundColor: colors.secondary,
    borderRadius: 10,
  },
  container: {
    paddingTop: 100,
  },
});
