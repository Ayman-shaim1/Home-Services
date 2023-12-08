import React, { useState } from "react";
import { StyleSheet, View,  FlatList, Text } from "react-native";
import { BottomModal, Button,  Dropdown,  EmployeItem,  Heading,  Label,  TextInput } from "../components";
import Slider from '@react-native-community/slider';
import colors from "../config/colors";

const EMPLOYES = [
    {
        id:1,
        name:'Jhon Doe',
        price:100.50,
        rating:4.5,
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


export default function EmployeListScreen(){
    const [showFilterModal,setShowFilterModal] = useState(false);

    return(
        <View style={styles.container}>
            <Heading as="heading3" text={"Service"} style={{ marginBottom:-10 }}/>
            <Heading as="heading5" text={"Jardinage"} color="gray"/>
            <TextInput value={'xxx avenue xxx rue xxx'} icon={'map-marker'}/>
            <Button text={'filtrer'} icon={'filter'} color="primary" onPress={() =>  setShowFilterModal(true)}/>
            <BottomModal visible={showFilterModal} onClose={() => setShowFilterModal(false)}>
                <Heading as="heading5" text={'Chercher avec filtre'}/>
                <Label text={"Filtrer par prix :"} />
                <Slider
                    style={{ width: '100%' }}
                    minimumValue={0}
                    maximumValue={100}
                    thumbTintColor={colors.primary}
                    minimumTrackTintColor={colors.primary}
                    maximumTrackTintColor={colors.secondary}
                />
                <Dropdown/>
            </BottomModal>  
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
   
})