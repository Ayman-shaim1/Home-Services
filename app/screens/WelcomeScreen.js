import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button } from "../components";

export default function WelcomeScreen({ navigation }){
    return (
        <ImageBackground
            blurRadius={3}
            style={styles.background}
            source={require("../assets/background.jpg")}>
            <View style={styles.textContainer}>
                <Image style={styles.logo} source={require("../assets/service.png")} />
                <Text style={styles.tagline}>Welcome</Text>
                <Text style={styles.tagline}>To Home Services</Text>
            </View>
           
            <View style={styles.buttonsContainer}>
                <Button text={"login"}  onPress={() => navigation.navigate('login')} />
                <Button text={"register"} color="secondary" onPress={()=> navigation.navigate('register')}/>
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      },
      logo: {
        width: 100,
        height: 100,
        marginBottom: 30,
        backgroundColor:'#fff',
        borderRadius:10,
      },
      textContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
      },
      tagline: {
        fontSize: 30,
        fontWeight: "bold",
      },

      buttonsContainer: {
        padding: 20,
        width: "100%",
        marginBottom: 20,
      },
})

