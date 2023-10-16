import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import useApods from "../../tools/useApods";
import { useEffect } from "react";

const API_KEY = 'n13ulodf7NargZ8SLNy8eie5Cttn40a1tvW01j6C'

export default function Apod(): JSX.Element {
  
  const apods = useApods(1)

  useEffect(() => {
    console.log(apods)
  }, [apods])

  return (
    <View style={styles.apodbox}>
      {
        apods && !Array.isArray(apods) ? 
        <>
          <Text style={styles.header}>APOD</Text>
          <View style={styles.copy_date_box}>
            <Text style={styles.copy_date_box__title}>{ apods.title }</Text>
            <Text style={styles.copy_date_box__date}>{ apods.date }</Text>
          </View>
          <View style={styles.imagebox}>
            <Image style={styles.imagebox__image} source={{ uri: apods.url }}></Image>
          </View>
          <ScrollView style={styles.expl_scroll}>
            <Text style={styles.expl_scroll__expl}>{ apods.explanation }</Text>
          </ScrollView>
          <Text style={styles.coypright}>by {apods.copyright || 'NASA'}</Text>
        </> :
        <Text
          style={styles.loading}
        >Loading...</Text>
      }

    </View>
  )
}

const styles = StyleSheet.create({
  apodbox: {
    height: '60%',
    width: '100%',
    backgroundColor: '#056CA8',
    borderWidth: 1,
    borderColor: '#f5f5f5',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    paddingBottom: 5,
    alignItems: 'center',
    overflow: 'hidden'
  },

  header: {
    color: '#f5f5f5',
    fontFamily: 'Nasa',
    fontSize: 25
  },

  copy_date_box: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  copy_date_box__title: {
    color: '#f5f5f5'
  },

  copy_date_box__date: {
    color: '#f5f5f5',
    fontStyle: 'italic',
  },

  imagebox: {
    height: '60%',
    width: '100%',
    borderWidth: 1,
    borderColor: '#f5f5f5',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomWidth: 0,
    overflow: 'hidden'
  },

  imagebox__image: {
    height: '100%',
    width: '100%',
  },

  expl_scroll: {
    height: '20%',
    width: '100%',
    backgroundColor: '#0B3D91',
    paddingHorizontal: 8,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#f5f5f5'
  },

  expl_scroll__expl: {
    color: '#f5f5f5',
    textAlign: 'center',
    marginBottom: 5
  },

  coypright: {
    height: 'auto',
    color: '#f5f5f5',
    fontStyle: 'italic',
    alignItems: 'center',
    justifyContent: 'center'
  },

  loading: {
    color: '#f5f5f5',
    fontSize: 30
  }

})