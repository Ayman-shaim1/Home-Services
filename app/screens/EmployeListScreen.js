import React, { useState } from "react";
import { StyleSheet, View,  FlatList, Modal, TouchableOpacity } from "react-native";
import { Button, Diviser,  EmployeItem,  Heading,  TextInput } from "../components";
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const EMPLOYES = [
    {
        id:1,
        name:'Jhon Doe',
        price:100,
        rating:4.5,
        image:require('../assets/emp1.jpeg')
    },
    {
        id:2,
        name:'Steve Smith',
        price:200,
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


export default function EmployeListScreen(){
    const [showFilterModal,setShowFilterModal] = useState(false);

    return(
        <View style={styles.container}>
            <Heading as="heading4" text={"Service"} style={{marginBottom:-10,}}/>
            <Heading as="heading6" text={"Jardinage"} color="gray"/>
            <TextInput value={'xxx avenue xxx rue xxx'} icon={'map-marker'}/>
            <Button text={'filtrer'} icon={'filter'} color="primary" onPress={() =>  setShowFilterModal(true)}/>
            <Button text={'annuler le filtrer'} icon={'filter-off'} color="gray"/>
            <Modal visible={showFilterModal} style={styles.modal}  animationType="slide" transparent={true}>
                <View style={styles.filterModal}>
                    <TouchableOpacity style={styles.closebutton} onPress={() => setShowFilterModal(false)}>
                        <MaterialCommunityIcons name="close" size={24}/>
                    </TouchableOpacity>
                </View>
            </Modal>
            {/* <Diviser/> */}
            <FlatList
                data={EMPLOYES}
                keyExtractor={(item) => item.id}
                renderItem={({ item,index }) => <EmployeItem employe={item} index={index}/>}
                scrollEnabled={false}
              />
        </View>
    )
}

const styles = StyleSheet.create({
    modal:{
        marginTop:'100%',
        
    },
    filterModal:{
        top:'50%',
        padding:15,
        height:'100%',
        backgroundColor:colors.white,
        borderRadius:20,
        // Shadow properties for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        // Elevation property for Android
        elevation: 20,
    },
    closebutton:{
        alignSelf:'flex-end'
    }
})