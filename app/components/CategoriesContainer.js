import React from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CategoryItem } from "../components";

const CATEGORIES = [
  {
    id:1,
    name:'Menage',
    icon:require("../assets/cleaning.png"),
  },
  {
    id:2,
    name:'Coiffeur',
    icon:require("../assets/salon-de-coiffure.png"),
  },
  {
    id:3,
    name:'Plombier',
    icon:require("../assets/plombier.png"),
  },
  {
    id:4,
    name:'Cuisinier',
    icon:require("../assets/chef.png"),
  },
  {
    id:5,
    name:'Menage',
    icon:require("../assets/cleaning.png"),
  },
  {
    id:6,
    name:'Coiffeur',
    icon:require("../assets/salon-de-coiffure.png"),
  },
  {
    id:7,
    name:'Plombier',
    icon:require("../assets/plombier.png"),
  },
  {
    id:8,
    name:'Cuisinier',
    icon:require("../assets/chef.png"),
  }
];


export default function CategoriesContainer (){
    return (
        <View>
          <Text style={styles.text}>Categories</Text>
          <View style={styles.container}>
              <FlatList
              data={CATEGORIES}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <CategoryItem category={item} />}
              numColumns={3}
            />
          </View>
        </View>
    )
}


const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    marginVertical:10,
  },
  text:{
    fontSize:30,
    fontWeight:'bold',
  }
})