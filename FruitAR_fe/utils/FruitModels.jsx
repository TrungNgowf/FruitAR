import {
  Viro3DObject,
  ViroAnimations,
  ViroARScene,
  ViroRotateStateTypes,
  ViroText,
  ViroARTrackingTargets,
} from "@viro-community/react-viro";
import React from "react";
import { useState } from "react";
import { ImageSourcePropType, StyleSheet } from "react-native";

export const FRUIT = {
  KIWANO: "Kiwano",
  STRAWBERRY: "Strawberry",
  PAPAYA: "Papaya",
  MANGO: "Mango",
  LYCHEE: "Lychee",
  GRAPE: "Grape",
  DURIAN: "Durian",
  DRAGON_FRUIT: "DragonFruit",
  BANANA: "Banana",
  APPLE: "Apple",
  SALAK: "Salak",
  PINEAPPLE: "Pineapple",
};

export const FRUIT_LIST = [
  FRUIT.KIWANO,
  FRUIT.STRAWBERRY,
  FRUIT.PAPAYA,
  FRUIT.MANGO,
  FRUIT.LYCHEE,
  FRUIT.GRAPE,
  FRUIT.DURIAN,
  FRUIT.DRAGON_FRUIT,
  FRUIT.BANANA,
  FRUIT.APPLE,
  FRUIT.SALAK,
  FRUIT.PINEAPPLE,
];

export default function FRUIT_MODELS({ model }) {
  const [rotate, setRotate] = useState([0, 0, 0]);
  const [pineappleScale, setPineappleScale] = useState([4, 4, 4]);
  const [appleScale, setAppleScale] = useState([0.06, 0.06, 0.06]);
  const [bananaScale, setBananaScale] = useState([0.8, 0.8, 0.8]);
  const [durianScale, setDurianScale] = useState([2, 2, 2]);
  const [grapeScale, setGrapeScale] = useState([0.1, 0.1, 0.1]);
  const [kiwanoScale, setKiwanoScale] = useState([0.5, 0.5, 0.5]);
  const [lycheeScale, setLycheeScale] = useState([20, 20, 20]);
  const [mangoScale, setMangoScale] = useState([0.5, 0.5, 0.5]);
  const [papayaScale, setPapayaScale] = useState([0.02, 0.02, 0.02]);
  const [salakScale, setSalakScale] = useState([0.3, 0.3, 0.3]);
  const [strawberryScale, setStrawberryScale] = useState([1, 1, 1]);
  const [dragonFruitScale, setDragonFruitScale] = useState([0.8, 0.8, 0.8]);

  const moveObject = (position) => {};

  const rotateObject = (rotateState, rotationFactor, source) => {
    console.log(rotateState, rotationFactor);
    if (rotateState === 1) return;
    let newRotate = [rotate[0], rotate[1] + rotationFactor, rotate[2]];
    setRotate(newRotate);
  };

  const pinchPineapple = (pinchState, scaleFactor, source) => {
    if (pinchState === 1) return;
    if (scaleFactor < 0.6) return;
    if (scaleFactor > 1.2) return;
    let crtScale = pineappleScale[0];
    let newScale = crtScale * scaleFactor;
    setPineappleScale([newScale, newScale, newScale]);
  };

  const pinchApple = (pinchState, scaleFactor, source) => {
    if (pinchState === 1) return;
    if (scaleFactor < 0.6) return;
    if (scaleFactor > 1.2) return;
    let crtScale = appleScale[0];
    let newScale = crtScale * scaleFactor;
    setAppleScale([newScale, newScale, newScale]);
  };

  const pinchBanana = (pinchState, scaleFactor, source) => {
    if (pinchState === 1) return;
    if (scaleFactor < 0.6) return;
    if (scaleFactor > 1.2) return;
    let crtScale = bananaScale[0];
    let newScale = crtScale * scaleFactor;
    setBananaScale([newScale, newScale, newScale]);
  };

  const pinchDurian = (pinchState, scaleFactor, source) => {
    if (pinchState === 1) return;
    if (scaleFactor < 0.6) return;
    if (scaleFactor > 1.2) return;
    let crtScale = durianScale[0];
    let newScale = crtScale * scaleFactor;
    setDurianScale([newScale, newScale, newScale]);
  };

  const pinchGrape = (pinchState, scaleFactor, source) => {
    if (pinchState === 1) return;
    if (scaleFactor < 0.6) return;
    if (scaleFactor > 1.2) return;
    let crtScale = grapeScale[0];
    let newScale = crtScale * scaleFactor;
    setGrapeScale([newScale, newScale, newScale]);
  };

  const pinchKiwano = (pinchState, scaleFactor, source) => {
    if (pinchState === 1) return;
    if (scaleFactor < 0.6) return;
    if (scaleFactor > 1.2) return;
    let crtScale = kiwanoScale[0];
    let newScale = crtScale * scaleFactor;
    setKiwanoScale([newScale, newScale, newScale]);
  };

  const pinchLychee = (pinchState, scaleFactor, source) => {
    if (pinchState === 1) return;
    if (scaleFactor < 0.6) return;
    if (scaleFactor > 1.2) return;
    let crtScale = lycheeScale[0];
    let newScale = crtScale * scaleFactor;
    setLycheeScale([newScale, newScale, newScale]);
  };

  const pinchMango = (pinchState, scaleFactor, source) => {
    if (pinchState === 1) return;
    if (scaleFactor < 0.6) return;
    if (scaleFactor > 1.2) return;
    let crtScale = mangoScale[0];
    let newScale = crtScale * scaleFactor;
    setMangoScale([newScale, newScale, newScale]);
  };

  const pinchPapaya = (pinchState, scaleFactor, source) => {
    if (pinchState === 1) return;
    if (scaleFactor < 0.6) return;
    if (scaleFactor > 1.2) return;
    let crtScale = papayaScale[0];
    let newScale = crtScale * scaleFactor;
    setPapayaScale([newScale, newScale, newScale]);
  };

  const pinchSalak = (pinchState, scaleFactor, source) => {
    if (pinchState === 1) return;
    if (scaleFactor < 0.6) return;
    if (scaleFactor > 1.2) return;
    let crtScale = salakScale[0];
    let newScale = crtScale * scaleFactor;
    setSalakScale([newScale, newScale, newScale]);
  };

  const pinchStrawberry = (pinchState, scaleFactor, source) => {
    if (pinchState === 1) return;
    if (scaleFactor < 0.6) return;
    if (scaleFactor > 1.2) return;
    let crtScale = strawberryScale[0];
    let newScale = crtScale * scaleFactor;
    setStrawberryScale([newScale, newScale, newScale]);
  };

  const pinchDragonFruit = (pinchState, scaleFactor, source) => {
    if (pinchState === 1) return;
    if (scaleFactor < 0.6) return;
    if (scaleFactor > 1.2) return;
    let crtScale = dragonFruitScale[0];
    let newScale = crtScale * scaleFactor;
    setDragonFruitScale([newScale, newScale, newScale]);
  };

  switch (model) {
    case FRUIT.KIWANO: {
      return (
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/kiwano.glb")}
          position={[0, 0, -1]}
          scale={kiwanoScale}
          rotation={rotate}
          onPinch={pinchKiwano}
          onDrag={moveObject}
          onRotate={rotateObject}
          onLoadEnd={this._onLoadEnd}
          onLoadStart={this._onLoadStart}
          onError={this._onError}
        />
      );
    }
    case FRUIT.STRAWBERRY: {
      return (
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/strawberry.glb")}
          position={[0, 0, -1]}
          scale={strawberryScale}
          rotation={rotate}
          onPinch={pinchStrawberry}
          onRotate={rotateObject}
          onDrag={moveObject}
          onLoadEnd={this._onLoadEnd}
          onLoadStart={this._onLoadStart}
          onError={this._onError}
        />
      );
    }
    case FRUIT.PAPAYA: {
      return (
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/papaya.glb")}
          position={[0, -10, -30]}
          scale={papayaScale}
          rotation={rotate}
          onRotate={rotateObject}
          onPinch={pinchPapaya}
          onDrag={moveObject}
          onLoadEnd={this._onLoadEnd}
          onLoadStart={this._onLoadStart}
          onError={this._onError}
        />
      );
    }
    case FRUIT.MANGO: {
      return (
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/mango.glb")}
          position={[0, 0, -1]}
          scale={mangoScale}
          rotation={rotate}
          onPinch={pinchMango}
          onRotate={rotateObject}
          onDrag={moveObject}
          onLoadEnd={this._onLoadEnd}
          onLoadStart={this._onLoadStart}
          onError={this._onError}
        />
      );
    }
    case FRUIT.LYCHEE: {
      return (
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/lychees.glb")}
          position={[0, 0, -1]}
          scale={lycheeScale}
          rotation={rotate}
          onPinch={pinchLychee}
          onRotate={rotateObject}
          onDrag={moveObject}
          onLoadEnd={this._onLoadEnd}
          onLoadStart={this._onLoadStart}
          onError={this._onError}
        />
      );
    }
    case FRUIT.GRAPE: {
      return (
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/grape.glb")}
          position={[0, 0, -5]}
          scale={grapeScale}
          rotation={rotate}
          onPinch={pinchGrape}
          onRotate={rotateObject}
          onDrag={moveObject}
          onLoadEnd={this._onLoadEnd}
          onLoadStart={this._onLoadStart}
          onError={this._onError}
        />
      );
    }
    case FRUIT.DURIAN: {
      return (
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/durian.glb")}
          position={[0, 0, -5]}
          scale={durianScale}
          rotation={rotate}
          onPinch={pinchDurian}
          onRotate={rotateObject}
          onDrag={moveObject}
          onLoadEnd={this._onLoadEnd}
          onLoadStart={this._onLoadStart}
          onError={this._onError}
        />
      );
    }
    case FRUIT.DRAGON_FRUIT: {
      return (
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/dragon_fruit.glb")}
          position={[0, -1, -1]}
          scale={dragonFruitScale}
          rotation={rotate}
          onPinch={pinchDragonFruit}
          onRotate={rotateObject}
          onDrag={moveObject}
          onLoadEnd={this._onLoadEnd}
          onLoadStart={this._onLoadStart}
          onError={this._onError}
        />
      );
    }
    case FRUIT.BANANA: {
      return (
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/bananas.glb")}
          position={[0, -1, -1]}
          scale={bananaScale}
          rotation={rotate}
          onPinch={pinchBanana}
          onRotate={rotateObject}
          onDrag={moveObject}
          onLoadEnd={this._onLoadEnd}
          onLoadStart={this._onLoadStart}
          onError={this._onError}
        />
      );
    }
    case FRUIT.APPLE: {
      return (
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/apple.glb")}
          position={[0, 0, -2]}
          scale={appleScale}
          rotation={rotate}
          onPinch={pinchApple}
          onRotate={rotateObject}
          onDrag={moveObject}
          onLoadEnd={this._onLoadEnd}
          onLoadStart={this._onLoadStart}
          onError={this._onError}
        />
      );
    }
    case FRUIT.SALAK: {
      return (
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/salak.glb")}
          position={[0, 0, -1]}
          scale={salakScale}
          rotation={rotate}
          onPinch={pinchSalak}
          onRotate={rotateObject}
          onDrag={moveObject}
          onLoadEnd={this._onLoadEnd}
          onLoadStart={this._onLoadStart}
          onError={this._onError}
        />
      );
    }
    case FRUIT.PINEAPPLE: {
      return (
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/pineapple.glb")}
          position={[0, 0, -1]}
          rotation={rotate}
          scale={pineappleScale}
          onDrag={moveObject}
          onRotate={rotateObject}
          onPinch={pinchPineapple}
          onLoadEnd={this._onLoadEnd}
          onLoadStart={this._onLoadStart}
          onError={this._onError}
        />
      );
    }
    default: {
      return (
        <ViroText
          text="No model selected"
          width={2}
          height={2}
          position={[0, 0, -2]}
          style={styles.helloWorldTextStyle}
        />
      );
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Poppins",
    fontSize: 30,
    color: "#2925d0",
    fontWeight: "bold",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
