import React from "react";
import { StyleSheet,  FlatList } from "react-native";
import {  EmployeItem,   Screen,  Searchbar,   } from "../components";


const EMPLOYES = [
    {
        id:1,
        name:'Jhon Doe',
        price:100.50,
        rating:4,
        image:require('../assets/emp1.jpeg')
    },
    {
        id:2,
        name:'Steve Smith',
        price:200.50, 
        rating:5,
        image:require('../assets/emp2.jpeg')
    },
    {
        id:3,
        name:'Jane Doe',
        price:99,
        rating:4,
        image:require('../assets/emp3.jpeg')
    },
    {
        id:4,
        name:'Maria Jhonson',
        price:230,
        rating:5,
        image:require('../assets/emp4.jpeg')
    }
];

export default function EmployeListScreen({ navigation }){
    return(
        <> 
           <Searchbar showFilterBtn showGoBackBtn navigation={navigation}/>
            <Screen>
                <FlatList
                    style={{ marginTop:20 }}
                    data={EMPLOYES}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item,index }) => <EmployeItem navigation={navigation} employe={item} index={index}/>}
                    scrollEnabled={false}
                />
            </Screen>
        </>
    )
}

const styles = StyleSheet.create({
   
})