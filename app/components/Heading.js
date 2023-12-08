import { Text ,StyleSheet} from "react-native";
import colors from "../config/colors";


export default function Heading({ text, as="heading1", color="black",style }){
    return <Text style={[styles[as],styles.heading,{color:colors[color]},style]}>{text}</Text>
}


const styles = StyleSheet.create({
    heading:{
        marginVertical:10,
    },
    heading1: {
      fontSize: 50,
      fontWeight: 'bold',
    },
    heading2: {
      fontSize:42,
      fontWeight: 'bold',
    },
    heading3: {
      fontSize: 36,
      fontWeight: 'bold',
    },
    heading4: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    heading5: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    heading6: {
        fontSize: 16,
        fontWeight: 'bold',
    },
  });