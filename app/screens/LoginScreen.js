import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LogoImage from "../assets/service.png";
import {
  Button,
  Diviser,
  GoBackButton,
  Heading,
  Screen,
  TextInput,
} from "../components";
import colors from "../config/colors";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { GoogleSignIn } from "expo-google-sign-in";

let androidClientId = "1:803938796557:android:068f4d55f35c809d95c14";

export default function LoginScreen({ navigation }) {
  const handleGoogleLogin = async () => {
    try {
      await GoogleSignIn.initAsync({
        androidClientId: androidClientId,
        scopes: ["profile", "email"],
      });

      const { type, user } = await GoogleSignIn.signInAsync();

      if (type === "success") {
        const auth = getAuth();
        const credential = GoogleAuthProvider.credential(
          user.auth.idToken,
          user.auth.accessToken
        );
        await signInWithCredential(auth, credential);
      } else {
        console.log("Google Sign-In canceled or failed.");
      }

    } catch (e) {
      console.error("Error with Google Sign-In: ", e);
    }
  };

  return (
    <Screen widthPadding safeArea>
      <GoBackButton navigation={navigation} />

      <View style={styles.container}>
        <Image source={LogoImage} style={styles.logo} />
        <Heading text={"Login"} as="heading5" />
        <Heading
          style={styles.subText}
          text={"Veuillez connecter pour continue"}
          as={"heading6"}
          color={"gray"}
        />
      </View>

      <TextInput
        label="email"
        placeholder="entrer un email"
        icon="email"
        keyboardType="email-address"
      />

      <TextInput
        icon="lock"
        label="mot de passe"
        placeholder="enter le mot de passe"
        type="password"
        secure={true}
      />

      <View style={styles.forgetPasswordContainer}>
        <TouchableOpacity style={styles.forgetPassword}>
          <Text style={styles.forgetPasswordText}>forget password ?</Text>
        </TouchableOpacity>
      </View>

      <Button text={"Login"} icon={"login"} />

      <Diviser withOr />

      <Button
        text={"Login with gmail"}
        color="white"
        image={require("../assets/google.png")}
        onPress={handleGoogleLogin}
      />

      <View style={styles.signupTextContainer}>
        <Text style={styles.signupText}>new customer</Text>
        <TouchableOpacity onPress={() => navigation.navigate("register")}>
          <Text style={[styles.signupText, styles.signupTextBtn]}>sign up</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 7,
  },
  subText: {},
  logo: {
    marginTop: 10,
    width: 90,
    height: 90,
  },
  forgetPasswordContainer: {
    alignItems: "center",
  },
  forgetPassword: {
    margin: 10,
  },
  forgetPasswordText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  signupTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  signupText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  signupTextBtn: {
    marginLeft: 3,
    color: colors.secondary,
  },
});
