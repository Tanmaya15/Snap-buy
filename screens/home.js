import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
  Linking,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { FlatList } from 'react-native-gesture-handler';

export default class Feed extends Component {
  render() {
    return (
      <View
          style={
           styles.containerLight
          }
        >
        
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require('../assets(1)/sb.png')}
                style={styles.iconImage}></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text
                style={
                 styles.appTitleText
                }
              >
              Snap Buy</Text>
            </View>
          </View>
          <View style={styles.applogo}>
            <View>
              <Text style={styles.logoText}>
                choose the app you want to shop from
              </Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
          <ScrollView>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.amazon.in')}>
              <Image
                source={require('../assets(1)/amazon.png')}
                style={styles.img}></Image>
               <Text style={{marginTop:0, }}>amazon</Text>
            </TouchableOpacity> 
            
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.flipkart.com/')}>
              <Image
                source={require('../assets(1)/flipkart.png')}
                style={styles.img}></Image>
                <Text>flipkart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.myntra.com/')}>
              <Image
                source={require('../assets(1)/myntra.png')}
                style={styles.img}></Image>
                <Text>Myntra</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.ajio.com/')}>
              <Image
                source={require('../assets(1)/ajio.png')}
                style={styles.img}></Image>
                <Text>Ajio</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.snapdeal.com/')}>
              <Image
                source={require('../assets(1)/snapdeal.png')}
                style={styles.img}></Image>
                <Text>Snapdeal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.maxfashion.com/')}>
              <Image
                source={require('../assets(1)/max.png')}
                style={styles.img}></Image>
                <Text>Max Fashion</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.purplle.com/')}>
              <Image
                source={require('../assets(1)/purple.jpg')}
                style={styles.img}></Image>
                <Text>Purple</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://mamaearth.in/')}>
              <Image
                source={require('../assets(1)/mamaearth.png')}
                style={styles.img}></Image>
                <Text>Mama Earth</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.nykaa.com/')}>
              <Image
                source={require('../assets(1)/nykaa.png')}
                style={styles.img}></Image>
                <Text>Nykaa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.tatacliq.com/')}>
              <Image
                source={require('../assets(1)/Tata-Cliq.png')}
                style={styles.img}></Image>
                <Text>Tata Cliq</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.zara.com/in/')}>
              <Image
                source={require('../assets(1)/zara.png')}
                style={styles.img}></Image>
                <Text>zara
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://meesho.com/')}>
              <Image
                source={require('../assets(1)/meesho.png')}
                style={styles.img}></Image>
                <Text>Meesho</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://paytmmall.com/')}>
              <Image
                source={require('../assets(1)/paytmmall.jpg')}
                style={styles.img}></Image>
                <Text>Paytm Mall</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://pharmeasy.in/')}>
              <Image
                source={{
            uri:
              'https://cms-contents.pharmeasy.in/offer/f99f81a36bd-1X1_Log_PE.png',
          }}
                style={styles.img}></Image>
                <Text>Pharmeasy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.bigbasket.com/')}>
              <Image
                 source={{
            uri:
              'https://images.indianexpress.com/2020/11/big-basket-new.jpg',
          }}
                style={styles.img}></Image>
                <Text>Big Basket</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.swiggy.com')}>
              <Image
                source={{uri:'https://cdn-images-1.medium.com/max/1200/1*v5SYqjYEdQMPIwNduRrnCw.png'}}
                style={styles.img}></Image>
                <Text>Swiggy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.zomato.com/')}>
              <Image
                source={{uri:'https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png'}}
                style={styles.img}></Image>
                <Text>Zomato</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.1mg.com/')}>
              <Image
                source={{uri:'https://alphafirms.in/wp-content/uploads/2020/10/1mg_logo.png'}}
                style={styles.img}></Image>
                <Text>1 Mg</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.thesouledstore.com')}>
              <Image
                source={{uri:'https://img.paisawapas.com/ovz3vew9pw/2021/07/08113044/TATA1MG.png'}}
                style={styles.img}></Image>
                <Text>The Souled Store</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.pepperfry.com/')}>
              <Image
                source={{uri:'https://upload.wikimedia.org/wikipedia/commons/6/6b/Pepperfry_logo_10614.png'}}
                style={styles.img}></Image>
                <Text>Pepperfry</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.decathlon.in/')}>
              <Image
                source={{uri:'https://e7.pngegg.com/pngimages/454/167/png-clipart-decathlon-logo-decathlon-logo-icons-logos-emojis-shop-logos.png'}}
                style={styles.img}></Image>
                <Text>Decalthon</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://indha.in')}>
              <Image
                source={{uri:'https://i.pinimg.com/280x280_RS/3e/85/6c/3e856c16eec2f7b60293d7c1bd18830b.jpg'}}
                style={styles.img}></Image>
                <Text>Indha</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.firstcry.com/')}>
              <Image
                source={{uri:'https://pbs.twimg.com/profile_images/1232546599206703104/IdVHvM1q_400x400.jpg'}}
                style={styles.img}></Image>
                <Text>First Cry</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.2gud.com/')}>
              <Image
                source={{uri:'https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/2gud_by_flipkart_logo_34e531.png'}}
                style={styles.img}></Image>
                <Text>2gud</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.urbancompany.com/delhi-ncr')}>
              <Image
                source={{uri:'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/03/03140113/UCYSE.jpg'}}
                style={styles.img}></Image>
                <Text>Urban Company</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.naturesbasket.co.in/')}>
              <Image
                source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78eN1rpM8dSkFAboF9_ImusE8nos8bjS5AEYvH1kmV2MeaF4rglHOPFvKhObuduv_Hg4&usqp=CAU'}}
                style={styles.img}></Image>
                <Text>Natures Basket</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://grofers.com')}>
              <Image
                source={{uri:'https://grofers.com/careers/sites/default/files/2021-05/press-kit.png'}}
                style={styles.img}></Image>
                <Text>Grofers</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.fabindia.com')}>
              <Image
                source={{uri:'https://www.fabindia.com/file/general/serving-india.png'}}
                style={styles.img}></Image>
                <Text>Fab India</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://himalayawellness.in')}>
              <Image
                source={{uri:'https://cdn.shopify.com/s/files/1/0272/4714/9155/files/logo-aboutus.png?1207'}}
                style={styles.img}></Image>
                <Text>Himalaya</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.shopclues.com')}>
              <Image
                source={{uri:'https://anblik.com/wp-content/uploads/2014/12/shopclues-logo-600x600.jpg'}}
                style={styles.img}></Image>
                <Text>Shop Clues</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.beardo.in')}>
              <Image
                source={{uri:'https://etimg.etb2bimg.com/photo/75623756.cms'}}
                style={styles.img}></Image>
                <Text>Beardo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.hm.com')}>
              <Image
                source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png'}}
                style={styles.img}></Image>
                <Text>H.M.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.themancompany.com')}>
              <Image
                source={{uri:'https://m.media-amazon.com/images/S/abs-image-upload-na/8/AmazonStores/A21TJRUUN4KGV/07a3ba412bdf9f84aec8a6c5eca315f2.w1667.h1667.png'}}
                style={styles.img}></Image>
                <Text>The Man Company</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.dominos.co.in/')}>
              <Image
                source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtdOxldLN21j6XLDWHo_6Sd0EC5ErNLlwUXbTZnwsLcATAyjrfdd34OYwizZBjwbAHpw&usqp=CAU'}}
                style={styles.img}></Image>
                <Text>Dominos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.lenovo.com')}>
              <Image
                source={{uri:'https://logos-download.com/wp-content/uploads/2016/03/Lenovo_Logo_2015.png'}}
                style={styles.img}></Image>
                <Text>Lenovo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.adidas.co.in')}>
              <Image
                source={{uri:'https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg'}}
                style={styles.img}></Image>
                <Text>Adidas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://in.puma.com/')}>
              <Image
                source={{uri:'https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2020/03/0085.png'}}
                style={styles.img}></Image>
                <Text>Puma</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.dell.com')}>
              <Image
                source={{uri:'https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo.png'}}
                style={styles.img}></Image>
                <Text>Dell</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.nike.com')}>
              <Image
                source={{uri:'https://thumbs.dreamstime.com/b/web-183282388.jpg'}}
                style={styles.img}></Image>
                <Text>Nike</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.samsung.com')}>
              <Image
                source={{uri:'https://images.samsung.com/is/image/samsung/assets/in/about-us/brand/logo/mo/360_197_1.png?$FB_TYPE_B_PNG$'}}
                style={styles.img}></Image>
                <Text>Samsung</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.lifestylestores.com')}>
              <Image
               source={{uri:'https://blog.lifestylestores.com/wp-content/uploads/2021/02/Lifestyle-Stores-Logo-1160x1739-1-800x1199.webp'}}
                style={styles.img}></Image>
                <Text>Lifestyle</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL('https://www.justherbs.in')}>
              <Image
                source={{uri:'https://www.dcmnetwork.com/wp-content/uploads/2019/10/justherbs-logo.png'}}
                style={styles.img}></Image>
                <Text>Just Herbs</Text>
            </TouchableOpacity>
               </ScrollView>
          </View>
     
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: "white"
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    radius: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '200%',
    height: '250%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'black',
    fontSize: RFValue(28),
    fontFamily: 'Bubblegum-Sans',
  },
  applogo: {
    marginTop: 30,
    flex: 0.07,
    flexDirection: 'row',
  },
  logoText: {
    color: 'grey',
    fontSize: RFValue(18),
    fontFamily: 'Bubblegum-Sans',
  },
  buttonContainer: {
    margin: 20,
  },
  button: {
    margin: 10,
    padding:5,
    width: RFValue(250),
    height: RFValue(56),
    justifyContent:'space-between',
    alignItems: 'center',
    borderRadius: RFValue(30),
    backgroundColor: 'white',
    border: 'black',
  },
  img: {
    width: '150%',
    height: '76%',
    resizeMode: 'contain',
  },
});
