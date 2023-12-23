import { GoBackButton, NotificationItem, Screen } from "../components";

export default function NotificationsScreen({ navigation }){
    return (
        <Screen widthPadding safeArea>
           <GoBackButton navigation={navigation}/>
           <NotificationItem/>
        </Screen>
    );
}