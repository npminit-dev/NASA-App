import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { LastNApodScreenProps } from "../../App";
import { ApodData } from "../../tools/useApods";

type LastNApodRouteProp = RouteProp<LastNApodScreenProps>

export default function LastNApod(): JSX.Element {

  const { params } = useRoute<LastNApodRouteProp>() as any;
  const lastNNavigation = useNavigation<LastNApodScreenProps>() as any

  const handlePress = () => {
    lastNNavigation.navigate('Home')
  }

  return (
    <View>
    {
      params ? 
      <View style={styles.box}>
        <View style={styles.titlebox}>
          <Text style={styles.titletext}>{ params.data.title }</Text>
        </View>
        <View style={styles.databox}>
          <Text style={styles.databox_copyright}>{ params.data.copyright || 'NASA' }</Text>
          <Text style={styles.databox_date}>{ params.data.date }</Text>
        </View>
        <View style={styles.imgbox}>
          <ScrollView centerContent={true}>
            <ScrollView 
              centerContent={true}
              horizontal={true}
              style={styles.imgbox_scroll} 
              maximumZoomScale={2}
            >
              <Image 
                style={styles.imgbox_img} 
                source={{ uri: params.data.url }}
                resizeMode="stretch"
              ></Image>
            </ScrollView>
          </ScrollView>
        </View>
        <ScrollView style={styles.explbox}>
          <Text style={styles.explbox_text}>
            { params.data.explanation }
          </Text>
        </ScrollView>
        <View style={styles.backbox}>
          <Text style={styles.backbox_text}
            onPress={handlePress}
          > Go Back</Text>
        </View>
      </View> : 
      <Text>Loading...</Text>
    }
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    height: '99%',
    width: '100%',
    padding: 5,
    backgroundColor: '#1E059E',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#f5f5f5',
  },

  titlebox: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },

  titletext: {
    fontSize: 20,
    color: '#f5f5f5',
    textAlign: 'center',
    fontFamily: 'Nasa'
  },

  databox: {
    width: '100%',
    height: 75,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },

  databox_date: {
    width: 'auto',
    color: '#f5f5f5',
    fontSize: 14,
    fontStyle: 'italic'
  },

  databox_copyright: {
    width: 'auto',
    color: '#f5f5f5',
    fontSize: 16,
  },

  imgbox: {
    width: '100%',
    height: '60%',
    overflow: 'hidden',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderColor: 'grey',
    borderWidth: 1,
  },

  imgbox_scroll: {
    width: '100%',
    height: '100%',
  },

  imgbox_img: {
    height: 500,
    width: 500,
    borderRadius: 5
  },

  explbox: {
    width: '100%',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopWidth: 0,
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 5,
    backgroundColor: '#0B3D91',
  },

  explbox_text: {
    color: '#f5f5f5',
    marginBottom: 20
  },

  backbox: {
    height: 30,
    width: '100%',
    alignItems: "center",
    justifyContent: 'center',
  },

  backbox_text: {
    color: '#f5f5f5',
    fontSize: 18,
  }
})