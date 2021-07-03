import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import { ListItem } from 'react-native-elements';
import xml2js from "react-native-xml2js"


export const HomeScreen = ( {navigation} ) => {
  const [rssList, setRssList] = useState();
  const fetchRss = async () => {
    await fetch('https://www.osarutominibuta.com/feed/')
      .then(res => res.text())
      .then((xml) => {
          const parser = xml2js.Parser();
          parser.parseString(xml, (err, result) => {
            setRssList(result.rss.channel[0].item)
          })
      })
  }

  useEffect(() => {
    fetchRss()
    // console.log(rssList)
  },[])

 return (
   <View style={ styles.container }>
     <FlatList 
      data={ rssList } 
      renderItem={({item}) => (
        <ListItem>
          <TouchableOpacity  onPress ={() => {
            navigation.navigate('Details', {item: item})
          }}>
            <View>
              <Text >{ item.title[0]}</Text>
            </View>
          </TouchableOpacity>
        </ListItem>
      )}
      // keyExtractor={ item => item.link[0]}
      />
   </View>
 );
}

const styles = StyleSheet.create({
  base: {
    padding: 0,
  },
  body: {
    backgroundColor: '#fff',
  },
  header: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  row: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    color: '#000',
    fontSize: 16,
  },
  link: {
    color: '#db7093',
    fontSize: 12,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  }
})