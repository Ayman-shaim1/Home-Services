import { FlatList, StyleSheet } from "react-native";
import { Header, NotificationItem, Screen } from "../components";
import { useState } from "react";
import { Toast } from "../services";

export default function NotificationsScreen({ navigation }) {

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia, nulla sit amet eleifend venenatis,",
      user: "Jhon Doe",
      date: "2023-12-20",
      seen: true,
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia, nulla sit amet eleifend venenatis,",
      user: "Steve Smith",
      date: "2023-12-20",
    },
    {
      id: 3,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: "Maria Johanson",
      date: "2023-12-20",
    },
    {
      id: 4,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: "Maria Johanson",
      date: "2023-12-20",
    },
    {
      id: 5,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: "Maria Johanson",
      date: "2023-12-20",
    },
    {
      id: 6,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: "Maria Johanson",
      date: "2023-12-20",
    },
    {
      id: 7,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: "Maria Johanson",
      date: "2023-12-20",
    },
    {
      id: 8,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: "Maria Johanson",
      date: "2023-12-20",
    },
    {
      id: 9,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: "Maria Johanson",
      date: "2023-12-20",
    },
  ]);

  const deleteHandler = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
    Toast.open({
      message: "Notification supprimer",
    });
  };

  return (
    <Screen widthPadding safeArea>
      <Header navigation={navigation} text={"Notifications"} />
      <FlatList
        style={{ marginBottom: 100 }}
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationItem
            notification={item}
            onDelete={() => deleteHandler(item.id)}
          />
        )}
        scrollEnabled={false}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginBottom: 15,
    marginLeft: 10,
  },
});
