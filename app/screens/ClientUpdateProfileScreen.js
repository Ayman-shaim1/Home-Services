import { useState } from "react";
import { Button, Header, ImagePicker, Screen, TextInput } from "../components";
import { Toast } from "../services";

export default function EmployeUpdateProfileScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const [sourceImage, setSourceImage] = useState(
    require("../assets/emp1.jpeg")
  );
  return (
    <Screen widthPadding safeArea>
      <Header navigation={navigation} text={"Modifier le profile"} />
      <ImagePicker
        label={"image"}
        source={sourceImage}
        image={image}
        setImage={setImage}
        setSource={setSourceImage}
      />
      <TextInput
        label="nom"
        placeholder="entrer votre nom "
        icon="account"
        value={"Jhon Doe"}
      />

      <TextInput
        label="email"
        placeholder="entrer un email"
        icon="email"
        value={"j.doe@example.com"}
      />

      <TextInput
        label="Telephone"
        placeholder="entrer un numero de telephone"
        icon="phone"
        value={"+212 06-01020304"}
      />
      {/* <Button text={""}/> */}
      <Button
        text={"Modifier le mot de passe"}
        icon={"account-edit"}
        onPress={() =>
          Toast.open({
            type: "success",
            message: "modification effectuee avec success !",
          })
        }
      />
    </Screen>
  );
}
