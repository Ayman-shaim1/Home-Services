import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import TextInput from "./TextInput";
import BottomModal from "./BottomModal";
import Heading from "./Heading";
import Label from "./Label";
import Slider from "@react-native-community/slider";
import RatingPicker from "./RatingPicker";
import Button from "./Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GoBackButton from "./GoBackButton";


export default function Searchbar ({ navigation,showFilterBtn = false, showGoBackBtn = false }){
    const [ showFilterModal,setShowFilterModal ] = useState(false);
    const [maxprix,setMaxprix] = useState(100);
    const [startNumber, setStartNumber] = useState(1);
    
    return (
        <>
            <View style={[styles.container,{
                   height: showFilterBtn ? 200 : 160,
            }]}>
                {showGoBackBtn && <GoBackButton color={'white'} navigation={navigation}/>}
               
                <View style={styles.wrapper}>
                    <TextInput 
                        icon="map-marker"
                        placeholder="saiasie votre position" 
                        style={[styles.textInput,{width:showFilterBtn?'82%':'100%'}]}
                        value={"xxx avenue xxx xxx"}
                        />
                        {showFilterBtn && (
                        <TouchableOpacity style={styles.btnShowModalFilter}  onPress={() => setShowFilterModal(true)}>
                            <MaterialCommunityIcons name="tune-vertical" size={24} color={colors.white}/>
                        </TouchableOpacity>
                        
                        )}

                </View>
            </View>
            <BottomModal visible={showFilterModal} onClose={() => setShowFilterModal(false)}>
                <Heading as="heading5" text={'Chercher avec filtre'}/>
                <Slider
                    style={{ width: '100%' }}
                    minimumValue={100}
                    maximumValue={1000}
                    thumbTintColor={colors.primary}
                    minimumTrackTintColor={colors.primary}
                    value={maxprix}
                    onValueChange={(value) => setMaxprix(value)}
                />
                <Text style={{ marginBottom:20 }}>prix max :{maxprix.toFixed(0)}</Text>
                <RatingPicker
                    number={startNumber} 
                    setNumber={setStartNumber}
                    label={"Filtrer par etoile :"} />
                 <Text>nombre d'etoile choisie: {startNumber}</Text>
                 <Button
                    text="confirmer" 
                    style={{ marginTop:40 }} 
                    color="primary"
                    icon={'filter-check'}
                    onPress={() => setShowFilterModal(false)}/>
            </BottomModal>  
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        paddingHorizontal:15,
        paddingTop:'8%',
        justifyContent:'center',
        borderBottomLeftRadius:16,
        borderBottomRightRadius:16,
    },
    wrapper:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
        top:-5
    },
    btnShowModalFilter:{
        padding:18,
        backgroundColor:colors.secondary,
        borderRadius:10,
    },
    textInput:{
        width:'82%',
    }
})