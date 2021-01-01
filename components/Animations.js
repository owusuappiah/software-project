import React from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import Loty from "./Loty"
import DefaultCss, { Colors } from '../css/DefaultsCss';

export function ScannerInitialAnimation() {

  return (
    <Loty style={styles.scanner} speed={3} source={require('../assets/lottie/scanner.json')} />
  );
}

export function ScannedAnimation() {
  return (
    <Loty style={styles.scanned} speed={3} source={require('../assets/lottie/scanned.json')} />
  );
}

export function CheckedAnimation() {
  return (
    <Loty style={styles.checked} loop={false} speed={1.5} source={require('../assets/lottie/checked.json')} />
  );
}

export function MasterWelcomeAnimation() {
  return (
    <Loty style={styles.welcome} speed={1} source={require('../assets/lottie/master-welcome.json')} />
  );
}

export function Spinner({ label, show }) {
  return (
    <Modal transparent={true} visible={show} animated={true} animationType="fade">
      <View style={[DefaultCss.modal]}>
        <View style={[DefaultCss.modalContent, { width: 200, height: 180 }]}>
          <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
            <Loty style={[styles.scanner, { height: 60 }]} speed={1} source={require('../assets/lottie/spinner.json')} />
            <Text>{label ? label : "Please wait"}</Text>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export function SpinnerOnly({show}) {
  if(!show){
    return null
  }
  return (
    <View style={styles.only}>
      <Loty style={[styles.scanner, { height: 40 }]} speed={1} source={require('../assets/lottie/spinner.json')} />
    </View>
  )
}


const styles = StyleSheet.create({
  scanner: {
    height: 300,
    // backgroundColor: 'transparent',
    // backgroundColor: Colors.rgba({transparency: "0.2"}),
  },
  scanned: {
    height: 300,
  },
  welcome: {
    width: "100%",
    maxWidth: 400,
  },
  checked: {
    height: 200
  },
  only: {
    flexDirection: "row",
    justifyContent: "center"
  }
});
