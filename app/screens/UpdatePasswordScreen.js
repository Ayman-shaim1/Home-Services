import { Button, Header, Screen, TextInput } from "../components";
import { Toast } from "../services";
export default function UpdatePasswordScreen({ navigation }) {
  return (
    <Screen widthPadding safeArea>
      <Header navigation={navigation} text={"Modifier le mot de passe"} />
      <TextInput
        icon="lock"
        label="mot de passe"
        placeholder="entrer les mot de passe"
        type="password"
        secure={true}
      />

      <TextInput
        icon="lock-check"
        label="confirmer le mot de passe"
        placeholder="entrer le mot de passe de confirmation"
        type="password"
        secure={true}
      />
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
