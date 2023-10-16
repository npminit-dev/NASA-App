import { Button, Image, StyleSheet, Text, View } from "react-native";
import { ApodData } from "../../tools/useApods";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenProps } from "../../App";

export default function ApodPreview({ title, copyright, url, date, explanation }: ApodData): JSX.Element {
  
  const screennav = useNavigation<HomeScreenProps>()
  
  const handlePress = () => {  
    screennav.navigate('LastNApod', {  data: {
      title, copyright, url, date, explanation
    }})
  }

  return (
    <View style={styles.apodpreviewbox}>
      <View style={styles.previwedatabox}>
        <View style={styles.previewtext}>
          <Text style={styles.text_left}>{ title }</Text>
          <Text style={styles.text_right}>{ copyright || 'NASA' }</Text>
        </View>
      </View>
      <View style={styles.viewbox}>
        <Text style={styles.text_center}
          onPress={handlePress}
        >View
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  apodpreviewbox: {
    height: 90,
    width: '100%',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    justifyContent: 'space-around',
    paddingBottom: 5
  },

  previwedatabox: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  previewtext: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5
  },

  text_left: {
    width: '45%',
    color: '#f5f5f5',
    fontFamily: 'Nunito Sans Italic',
    textAlign: 'left',
  },

  text_right: {
    width: '45%',
    color: '#f5f5f5',
    fontFamily: 'Quicksand',
    textAlign: 'right',
    fontStyle: 'italic'
  },

  text_center: {
    height: '100%',
    width: '35%',
    textAlign: 'center',
    color: '#f5f5f5',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    fontWeight: '800',
    backgroundColor: '#0B3D91',
  },

  viewbox: {
    width: '100%',
    height: 23,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

})