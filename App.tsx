import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.NavHeader}>
        <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.naavTxt}>Production Path</Text>
      </View>
      <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.txtHeading}>
        Leadership Dashboard
      </Text>

      <View style={styles.btnRow}>
        <Button color="#b38507"
          title="On Track"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        <Button color="#b38507"
          title="At Risk"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        <Button color="#b38507"
          title="Delayed"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
        <Image style={styles.img} source={require('./assets/donut.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
backgroundColor:'#000000',
justifyContent: 'center',
  },
  NavHeader: {
    textAlign: 'center',
    backgroundColor: '#b38507',
    height: 50,
    marginTop: 30
  },
  naavTxt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    marginLeft: 120,
    width: 200,
  },
  txtHeading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    marginLeft: 120,
    width: 200,
  },
  btnRow: {
    borderWidth: 1,
    borderColor: '#b38507',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    margin: 10,
    top: -25,
    position: 'relative',
    marginTop: 40,
    borderRadius: 25
  },
  img: {
    width: 300,
    height: 300,
    marginLeft:70
  }
});
