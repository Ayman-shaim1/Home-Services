import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown as RNDropdown } from 'react-native-element-dropdown';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import Label from './Label';

// const data = [
//   { label: 'Item 1', value: '1' },
//   { label: 'Item 2', value: '2' },
//   { label: 'Item 3', value: '3' },
//   { label: 'Item 4', value: '4' },
//   { label: 'Item 5', value: '5' },
//   { label: 'Item 6', value: '6' },
//   { label: 'Item 7', value: '7' },
//   { label: 'Item 8', value: '8' },
// ];

const Dropdown = ({ icon, label ,value,setValue, data,maxHeight = 200,placeholder }) => {

  return (
    <View style={styles.container}>
        {label && <Label text={label}/>}
        <View style={styles.dropdownContainer}>
            {icon && <MaterialCommunityIcons  style={styles.icon} name={icon} size={18} color={colors.gray}/>}
            <RNDropdown
                style={[styles.dropdown, 
                    { 
                        borderColor: colors.gray,
                        paddingLeft:icon ? 40 :20
                    }]}
                placeholderStyle={{ 
                    paddingLeft:icon ? 40 :20
                }}
                data={data}
                maxHeight={maxHeight}
                labelField="label"
                valueField="value"
                placeholder={placeholder}
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
            />
        </View>

    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
    container:{
        marginTop:7,
    },
    dropdownContainer:{
        position:'relative',
        zIndex:100,
    },
    icon:{
       position:'absolute', 
       zIndex:1000,
       top:'35%',
       left:'4%'
    },
    label:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:5,
    },
    dropdown:{
        paddingVertical:12,
        paddingRight:24,
        backgroundColor:colors.lightGray,
        borderRadius:10,
        fontSize:16,
    }
});