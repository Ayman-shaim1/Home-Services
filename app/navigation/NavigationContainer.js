import { NavigationContainer as RNNavigationContainer } from '@react-navigation/native';


export default function  NavigationContainer ({children}){
    return (
        <RNNavigationContainer >
            {children}
        </RNNavigationContainer>
    )
}