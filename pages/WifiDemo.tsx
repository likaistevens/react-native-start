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

const b = {
  cancelBubble: false,
  event: {
    preventDefault: null,
    stopImmediatePropagation: null,
    stopPropagation: null,
    zrX: 117,
    zrY: 292.5,
  },
  gestureEvent: undefined,
  offsetX: 117,
  offsetY: 292.5,
  pinchScale: undefined,
  pinchX: undefined,
  pinchY: undefined,
  stop: null,
  target: {
    __dirty: 3,
    __ec_inner_22: {id: 'series20', isNew: true, option: {}, type: 'rect'},
    __ec_inner_28: {
      componentIndex: 0,
      componentMainType: 'graphic',
      eventData: {},
      tooltipConfig: {},
    },
    __ec_inner_30: {userDuring: undefined},
    __svgPathBuilder: {
      _d: {},
      _p: 10000,
      _start: true,
      _str: 'M-30 -8l60 0l0 16l-60 0Z',
    },
    __svgPathStrokePercent: 1,
    __svgPathVersion: 1,
    __zr: {
      __ec_inner_20: {},
      __ec_inner_21: {},
      _backgroundColor: 'transparent',
      _darkMode: false,
      _needsRefresh: true,
      _needsRefreshHover: false,
      _sleepAfterStill: 10,
      _stillFrameAccum: 0,
      animation: {},
      dom: {},
      handler: {},
      id: 36089,
      painter: {},
      storage: {},
    },
    _rect: {height: 16, width: 60, x: -30, y: -8},
    animators: [],
    currentStates: [],
    draggable: 'vertical',
    dragging: true,
    id: 'series20',
    invTransform: [1, -0, -0, 1, -120, -294.4],
    ondrag: {},
    ondragend: {},
    originX: 0,
    originY: 0,
    parent: {
      __dirty: 0,
      __ecComponentInfo: {},
      __ec_inner_22: {},
      __zr: {},
      _children: {},
      animators: {},
      currentStates: {},
      id: 36209,
      isGroup: true,
      states: {},
    },
    path: {
      _len: 5,
      _version: 1,
      _x0: 0,
      _xi: 0,
      _y0: 0,
      _yi: 0,
      data: {},
      dpr: 1,
    },
    rotation: -0,
    scaleX: 1,
    scaleY: 1,
    shape: {height: 16, width: 60, x: -30, y: -8},
    skewX: 0,
    skewY: 0,
    states: {},
    style: {fill: 'red'},
    textConfig: {},
    transform: [1, 0, 0, 1, 120, 292.9],
    x: 120,
    y: 292.9,
    z: 3,
  },
  topTarget: {
    __dirty: 3,
    __ec_inner_22: {id: 'series20', isNew: true, option: {}, type: 'rect'},
    __ec_inner_28: {
      componentIndex: 0,
      componentMainType: 'graphic',
      eventData: {},
      tooltipConfig: {},
    },
    __ec_inner_30: {userDuring: undefined},
    __svgPathBuilder: {
      _d: {},
      _p: 10000,
      _start: true,
      _str: 'M-30 -8l60 0l0 16l-60 0Z',
    },
    __svgPathStrokePercent: 1,
    __svgPathVersion: 1,
    __zr: {
      __ec_inner_20: {},
      __ec_inner_21: {},
      _backgroundColor: 'transparent',
      _darkMode: false,
      _needsRefresh: true,
      _needsRefreshHover: false,
      _sleepAfterStill: 10,
      _stillFrameAccum: 0,
      animation: {},
      dom: {},
      handler: {},
      id: 36089,
      painter: {},
      storage: {},
    },
    _rect: {height: 16, width: 60, x: -30, y: -8},
    animators: [],
    currentStates: [],
    draggable: 'vertical',
    dragging: true,
    id: 'series20',
    invTransform: [1, -0, -0, 1, -120, -294.4],
    ondrag: {},
    ondragend: {},
    originX: 0,
    originY: 0,
    parent: {
      __dirty: 0,
      __ecComponentInfo: {},
      __ec_inner_22: {},
      __zr: {},
      _children: {},
      animators: {},
      currentStates: {},
      id: 36209,
      isGroup: true,
      states: {},
    },
    path: {
      _len: 5,
      _version: 1,
      _x0: 0,
      _xi: 0,
      _y0: 0,
      _yi: 0,
      data: {},
      dpr: 1,
    },
    rotation: -0,
    scaleX: 1,
    scaleY: 1,
    shape: {height: 16, width: 60, x: -30, y: -8},
    skewX: 0,
    skewY: 0,
    states: {},
    style: {fill: 'red'},
    textConfig: {},
    transform: [1, 0, 0, 1, 120, 292.9],
    x: 120,
    y: 292.9,
    z: 3,
  },
  type: 'drag',
  wheelDelta: undefined,
  which: undefined,
  zrByTouch: undefined,
};
