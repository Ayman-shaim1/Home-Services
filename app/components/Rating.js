import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function Rating({ number, style }) {
  return (
    <View style={[{ flexDirection: "row" }, { ...style }]}>
      {number === 1 ? (
        <>
          <MaterialCommunityIcons
            color={colors.secondary}
            name="star"
            size={24}
          />
          <MaterialCommunityIcons
            color={colors.secondary}
            name="star-outline"
            size={24}
          />

          <MaterialCommunityIcons
            color={colors.secondary}
            name="star-outline"
            size={24}
          />
          <MaterialCommunityIcons
            color={colors.secondary}
            name="star-outline"
            size={24}
          />
          <MaterialCommunityIcons
            color={colors.secondary}
            name="star-outline"
            size={24}
          />
        </>
      ) : number === 2 ? (
        <>
          <MaterialCommunityIcons
            color={colors.secondary}
            name="star"
            size={24}
          />
          <MaterialCommunityIcons
            color={colors.secondary}
            name="star"
            size={24}
          />
          <MaterialCommunityIcons
            color={colors.secondary}
            name="star-outline"
            size={24}
          />
          <MaterialCommunityIcons
            color={colors.secondary}
            name="star-outline"
            size={24}
          />
          <MaterialCommunityIcons
            color={colors.secondary}
            name="star-outline"
            size={24}
          />
        </>
      ) : number === 3 ? (
        <>
          <MaterialCommunityIcons
            color={colors.secondary}
            name="star"
            size={24}
          />
          <MaterialCommunityIcons
            color={colors.secondary}
            name="star"
            size={24}
          />
          <MaterialCommunityIcons
            color={colors.secondary}
            name="star"
            size={24}
          />
          <MaterialCommunityIcons
            color={colors.secondary}
            name="star-outline"
            size={24}
          />
          <MaterialCommunityIcons
            color={colors.secondary}
            name="star-outline"
            size={24}
          />
        </>
      ) : number === 4 ? (
        <>
          <MaterialCommunityIcons
            color={colors.secondary}
            name="star"
            size={24}
          />
          <MaterialCommunityIcons
            color={colors.secondary}
            name="star"
            size={24}
          />
          <MaterialCommunityIcons
            color={colors.secondary}
            name="star"
            size={24}
          />
          <MaterialCommunityIcons
            color={colors.secondary}
            name="star"
            size={24}
          />
          <MaterialCommunityIcons
            color={colors.secondary}
            name="star-outline"
            size={24}
          />
        </>
      ) : (
        number === 5 && (
          <>
            <MaterialCommunityIcons
              color={colors.secondary}
              name="star"
              size={24}
            />
            <MaterialCommunityIcons
              color={colors.secondary}
              name="star"
              size={24}
            />
            <MaterialCommunityIcons
              color={colors.secondary}
              name="star"
              size={24}
            />
            <MaterialCommunityIcons
              color={colors.secondary}
              name="star"
              size={24}
            />
            <MaterialCommunityIcons
              color={colors.secondary}
              name="star"
              size={24}
            />
          </>
        )
      )}
    </View>
  );
}
