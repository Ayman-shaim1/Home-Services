import React from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import {
  Heading,
  IconButton,
  Screen,
  EmployeJobHistoryItem,
} from "../components";
import colors from "../config/colors";
import { FlatList } from "react-native-gesture-handler";

const JOBHISTORIES = [
  {
    id: 1,
    employeName: "Jane Doe",
    dateJob: new Date(),
    image: require("../assets/emp3.jpeg"),
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

const DashboardScreen = ({ navigation }) => {
  const dataLine = {
    labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mai"],
    datasets: [
      {
        data: [20, 45, 28, 40, 46, 43],
        color: () => colors.primaryRgba,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <Screen widthPadding safeArea>
      <Heading as="heading6" text={"Travaux effectués ces 5 derniers mois."} />
      <View style={styles.chartContainer}>
        <LineChart
          data={dataLine}
          width={Dimensions.get("window").width}
          height={180}
          chartConfig={{
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: () => colors.blackRgba,
            strokeWidth: 2,
          }}
          style={styles.chart}
        />
      </View>
      <Heading as="heading6" text={"Nombre total d'emplois et gains totaux "} />
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}
      >
        <View style={[styles.dshCard, { backgroundColor: colors.primary }]}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.dshCardText}>200</Text>
            <Text style={styles.dshCardText}>Demandes</Text>
          </View>
        </View>
        <View style={[styles.dshCard, { backgroundColor: colors.secondary }]}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.dshCardText}>20.000</Text>
            <Text style={styles.dshCardText}>MAD</Text>
          </View>
        </View>
      </View>
      <View style={styles.inLine}>
        <Heading as="heading6" text={"Les derniers travaux effectués"} />
        <IconButton icon={"format-list-bulleted-square"} />
      </View>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chart: {
    borderRadius: 16,
    marginLeft: -10,
  },
  chartContainer: {
    marginVertical: 30,
  },
  inLine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dshCard: {
    width: "45%",
    padding: 10,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 10,
  },
  dshCardText: {
    fontFamily: "LatoBlack",
    fontSize: 25,
    color: colors.white,
  },
});

export default DashboardScreen;
