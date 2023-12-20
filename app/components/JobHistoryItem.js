import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import Heading from "./Heading";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function JobHistoryItem() {
  return (
    <TouchableOpacity style={styles.jobItem}>
        <View style={styles.content}>
                <Image source={require("../assets/emp4.jpeg")} style={styles.image} />
                <View style={styles.textContent}>
                        <Heading text={"Jhon Doe"} as="heading6" />
                    <View style={styles.status}>
                        <Text style={styles.statusText}>en cours</Text>
                    </View>
                    
                </View>
        </View>
    <Text style={styles.textDate}>{new Date().toLocaleDateString()}</Text>
      <MaterialCommunityIcons size={30} name="arrow-right" color={colors.gray}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  jobItem: {
    backgroundColor: colors.lightGray,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderRadius: 20,
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'space-between',
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 20,
  },
  content:{
    flexDirection: "row",
    alignItems:'center'
  },
  textContent: {
    marginLeft: 15,
  },
  status: {
    paddingVertical: 10,
    paddingHorizontal: 7,
    backgroundColor: colors.successSubtle,
    borderRadius:7,
    justifyContent:'center',
    alignItems:'center',
},
  statusText: {
    color: colors.success,
    fontWeight: "700",
    fontSize:12,
  },
  textDate:{
    marginTop:10,
    color:colors.black,
    fontWeight:'700',
    
  }
});
