import {useEffect} from 'react';
import {Text, View} from 'react-native';
import WifiManager from 'react-native-wifi-reborn';
import React, {useState} from 'react';

console.log('outer WifiManager', WifiManager);
// WifiManager.connectToProtectedSSID(ssid, password, isWep).then(
//   () => {
//     console.log('Connected successfully!');
//   },
//   () => {
//     console.log('Connection failed!');
//   },
// );

const WifiDemo = () => {
  useEffect(() => {
    console.log('WifiManager', WifiManager);
    WifiManager?.getCurrentWifiSSID().then(
      ssid => {
        console.log('Your current connected wifi SSID is ' + ssid);
      },
      e => {
        console.log('Cannot get current SSID!', e);
      },
    );
  }, []);
  return <Text>wifi demo</Text>;
};

export default WifiDemo;
