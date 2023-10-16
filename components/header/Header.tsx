import { Image, StyleSheet, Text, View } from "react-native";

export default function Header(): JSX.Element {
  return (
    <View style={styles.headerbox}>
      <Image 
        source={require('../../assets/imgs/nasalogo2.png')}
        style={styles.image}
      ></Image>
      <Text 
        style={styles.text}
      >NASA</Text>
      <Image 
        source={require('../../assets/imgs/nasalogo.png')}
        style={styles.image}
      ></Image>
    </View>
  )
}


const styles = StyleSheet.create({
  headerbox: {
    height: 'auto',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#056CA8',
    borderColor: '#f5f5f5',
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#FC3D21',
    elevation: 50
  },

  image: {
    height: 75,
    width: 75,
  },

  text: {
    fontFamily: 'Nasa',
    color: '#f5f5f5',
    fontSize: 40,
    letterSpacing: 2
  }
});