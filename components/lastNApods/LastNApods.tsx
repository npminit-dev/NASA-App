import { ScrollView, StyleSheet, Text, View } from "react-native";
import useApods, { ApodData } from '../../tools/useApods';
import uuid from 'react-native-uuid'
import ApodPreview from "./ApodPreview";

type props = {
  nApods: number
}

export default function LastNApods({ nApods }: props) {

  const apods = useApods(nApods);

  return (
    <View style={styles.lastNApodsbox}>
      <Text style={styles.title}>Last { nApods } Days</Text>
      <ScrollView style={styles.scrollbox}>
      {
        apods && Array.isArray(apods) ? 
        <View>
        { 
        apods.reverse().map((apod: ApodData) => {
          return <ApodPreview
            title={apod.title}
            copyright={apod.copyright}
            url={apod.url}
            date={apod.date}
            explanation={apod.explanation}
            key={uuid.v4() as string}
          ></ApodPreview>
        })
        }
        </View> 
        : <Text>Loading...</Text>
      }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  lastNApodsbox: {
    width: '100%',
    height: '25%',
    borderWidth: 1,
    borderRadius: 9,
    borderColor: '#f5f5f5',
    backgroundColor: '#056CA8',
    overflow: 'hidden'
  },

  title: {
    fontFamily: 'Nasa',
    color: '#f5f5f5',
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
    paddingTop: 2,
    borderBottomColor: '#058E9E',
    borderBottomWidth: 1
  },

  scrollbox: {
    width: '100%',
    height: '20%',
  }
})