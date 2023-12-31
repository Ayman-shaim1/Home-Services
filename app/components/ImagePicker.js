import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import colors from "../config/colors";
import { Camera } from "expo-camera";
import * as ExpoImagePicker from "expo-image-picker";
import CloseButton from "./CloseButton";
import Label from "./Label";

export default function ImagePicker({
  label,
  image,
  setImage,
  source,
  setSource,
}) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    try {
      const { status } =
        await ExpoImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        Alert("Media library permission denied");
        return;
      }

      const result = await ExpoImagePicker.launchImageLibraryAsync({
        mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking an image:", error);
    }
  };

  const closeHandler = () => {
    setSource(null);
    setImage(null);
  };

  return (
    <View>
      {label && <Label text={label} />}
      <View style={styles.container}>
        {source ? (
          <View style={styles.imageContainer}>
            <CloseButton
              onPress={closeHandler}
              style={styles.btnClose}
              color={colors.white}
            />
            <Image source={source} style={styles.image} />
          </View>
        ) : image ? (
          <View style={styles.imageContainer}>
            <CloseButton
              onPress={closeHandler}
              style={styles.btnClose}
              color={colors.white}
            />
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        ) : (
          <TouchableOpacity style={styles.clickContainer} onPress={pickImage}>
            <Text style={styles.text}>choisire une image</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    backgroundColor: colors.lightGray,
    alignItems: "center",
    justifyContent: "center",
    padding: 1,
  },
  clickContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  btnClose: {
    position: "absolute",
    right: "1%",
    top: "2%",
    zIndex: 1000,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  text: {
    fontSize: 12,
    fontFamily: "LatoRegular",
    color: colors.gray,
    zIndex: 1000,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
