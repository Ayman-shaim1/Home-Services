import { Text ,StyleSheet} from "react-native";
import colors from "../config/colors";


export default function Heading({ text, as="heading1", color="black",style }){
    return <Text style={[styles[as],styles.heading,{color:colors[color]},style]}>{text}</Text>
}


const styles = StyleSheet.create({
    heading:{
        marginVertical:5,
        fontFamily:'Lato-Black',
    },
    heading1: {
      fontSize: 55,
      fontWeight: 'bold',
    },
    heading2: {
      fontSize:45,
      fontWeight: 'bold',
    },
    heading3: {
      fontSize: 39,
      fontWeight: 'bold',
    },
    heading4: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    heading5: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    heading6: {
        fontSize: 18,
        fontWeight: 'bold',
    },
  });