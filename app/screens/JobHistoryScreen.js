import { Heading, JobHistoryContainer, Label, Screen } from "../components";


export default function JobHistoryScreen(){
    return (
         <Screen widthPadding safeArea>
            <Heading text={"Historique de demandes"} as="heading6"/>
            <JobHistoryContainer/>
         </Screen>
    );
}