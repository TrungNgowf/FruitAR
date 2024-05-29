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
  const moveObject = (position) => {};
  const rotateObject = (rotateState, rotationFactor, source) => {
    console.log(rotateState, rotationFactor);
    if (rotateState === 1) return;
    let newRotate = [rotate[0], rotate[1] + rotationFactor, rotate[2]];
    setRotate(newRotate);
  };

  const _onPinch = (pinchState, scaleFactor, source) => {
    if (pinchState === 1) return;
    if (scaleFactor < 0) return;
    if (scaleFactor > 1.2) return;
    let crtScale = pineappleScale[0];
    let newScale = crtScale * scaleFactor;
    setPineappleScale([newScale, newScale, newScale]);
  };

  switch (model) {
    case FRUIT.KIWANO: {
      return (
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/kiwano.glb")}
          position={[0, 0, -1]}
          scale={[0.5, 0.5, 0.5]}
          rotation={rotate}
          onDrag={moveObject}
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
          scale={[1, 1, 1]}
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
          scale={[0.02, 0.02, 0.02]}
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
          scale={[0.5, 0.5, 0.5]}
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
          scale={[20, 20, 20]}
          rotation={[0, 0, 0]}
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
          scale={[0.1, 0.1, 0.1]}
          animation={{ name: "rotate", loop: true, run: true }}
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
          scale={[2, 2, 2]}
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
          scale={[0.8, 0.8, 0.8]}
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
          scale={[5, 5, 5]}
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
          scale={[0.06, 0.06, 0.06]}
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
          scale={[0.3, 0.3, 0.3]}
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
          onPinch={_onPinch}
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
