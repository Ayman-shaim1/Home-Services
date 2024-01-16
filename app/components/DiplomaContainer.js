import { FlatList, StyleSheet, View } from "react-native";
import DiplomaItem from "./DiplomaItem";
import Heading from "./Heading";

const DIPLOMAS = [
  {
    id: 1,
    title: "hello world 1",
    startyear: 2020,
    endyear: 2021,
  },
  {
    id: 2,
    title: "hello world 2",
    startyear: 2020,
    endyear: 2021,
  },
  {
    id: 3,
    title: "hello world 3",
    startyear: 2020,
    endyear: 2021,
  },
];

export default function DiplomaContainer() {
  return (
    <View style={styles.container}>
      <Heading as="heading6" text={"Diplomes"} />
      <FlatList
        data={DIPLOMAS}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <DiplomaItem diploma={item} index={index} />
        )}
        numColumns={1}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});
