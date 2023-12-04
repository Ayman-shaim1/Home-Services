import React from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CategoryItem, Heading } from "../components";

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
    name:'Kiné',
    icon:require("../assets/massage.png"),
  },
  {
    id:6,
    name:'Coach',
    icon:require("../assets/sport.png"),
  },
  {
    id:7,
    name:'jardinier',
    icon:require("../assets/gardening.png"),
  },
  
];


export default function CategoriesContainer (){
    return (
        <View>
          <Heading text="Categories" as="heading5"/>
          <Heading 
            style={styles.headingText}
            text="Qu'est-ce que vous voulez comme service à domicile ?" 
            as="heading6" 
            color="gray"/>
          <View style={styles.container}>
              <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CategoryItem category={item} />}
                numColumns={3}
                scrollEnabled={false}
              />
          </View>
        </View>
    )
}


const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    marginVertical:15,
  },
  headingText:{
    marginTop:-10,
    marginBottom:0,
  }
});