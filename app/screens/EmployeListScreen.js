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


const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

export default function EmployeListScreen(){
    const [ showFilterModal,setShowFilterModal ] = useState(false);
    const [ note, setNote ] = useState(false);
    const [maxprix,setMaxprix] = useState(100)
    return(
        <View style={styles.container}>
            <Heading as="heading3" text={"Service"} style={{ marginBottom:-10 }}/>
            <Heading as="heading5" text={"Jardinage"} color="gray"/>
            <TextInput value={'xxx avenue xxx rue xxx'} icon={'map-marker'} />
            <Button text={'filtrer'} icon={'filter'} color="primary" onPress={() =>  setShowFilterModal(true)}/>
            <BottomModal visible={showFilterModal} onClose={() => setShowFilterModal(false)}>
                <Heading as="heading5" text={'Chercher avec filtre'}/>
                <Label text={"Filtrer par prix :"} />
                <Slider
                    style={{ width: '100%' }}
                    minimumValue={100}
                    maximumValue={1000}
                    thumbTintColor={colors.primary}
                    minimumTrackTintColor={colors.primary}
                    value={maxprix}
                    onValueChange={(value) => setMaxprix(value)}
                />
                <Text style={{marginBottom:20}}>prix max :{maxprix.toFixed(0)}</Text>
                <Dropdown maxHeight={150} label={"Filtrer par note :"} data={data} value={note} setValue={setNote}/>
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