import {
  Viro3DObject,
  ViroAmbientLight,
  ViroAnimations,
  ViroARImageMarker,
  ViroARScene,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
  ViroBox,
  ViroText,
  ViroTrackingReason,
  ViroTrackingStateConstants,
} from "@viro-community/react-viro";
import { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Stack, Link, router } from "expo-router";
import React from "react";

export default function BookScreen() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (!visible)
      setTimeout(() => {
        setVisible(true);
      }, 300);
  }, [visible]);
  console.log(visible);
  return (
    <View className="flex-1 bg-black">
      {visible && (
        <ViroARSceneNavigator
          autofocus={true}
          shadowsEnabled={true}
          hdrEnabled={true}
          initialScene={{
            scene: FruitSceneAR,
          }}
        />
      )}

      <View className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
        <Pressable
          onPress={() => {
            setVisible((pre) => !pre);
          }}
        >
          <Image
            className="w-[15vw] h-[15vw] mb-4 bg-white rounded-full"
            source={require("@/assets/icons/reload.png")}
            resizeMode="contain"
          />
        </Pressable>
      </View>
    </View>
  );
}

const FruitSceneAR = (props) => {
  const [activeAnim, setActiveAnim] = useState(false);

  ViroAnimations.registerAnimations({
    scaleUp: {
      properties: { scaleX: 0.09, scaleY: 0.09, scaleZ: 0.09 },
      duration: 500,
      easing: "bounce",
    },
    scaleDown: {
      properties: { scaleX: 0, scaleY: 0, scaleZ: 0 },
      duration: 500,
      easing: "bounce",
    },
  });

  ViroARTrackingTargets.createTargets({
    kiwano: {
      source: require("@/assets/targets/kiwano.png"),
      orientation: "Up",
      physicalWidth: 0.5,
    },
    dragon_fruit: {
      source: require("@/assets/targets/dragon-fruit.png"),
      orientation: "Up",
      physicalWidth: 0.07,
    },
    lychee: {
      source: require("@/assets/targets/lychee.png"),
      orientation: "Up",
      physicalWidth: 0.2,
    },
    mango: {
      source: require("@/assets/targets/mango.png"),
      orientation: "Up",
      physicalWidth: 0.1,
    },
    papaya: {
      source: require("@/assets/targets/papaya.png"),
      orientation: "Up",
      physicalWidth: 40,
    },
    strawberry: {
      source: require("@/assets/targets/strawberry.png"),
      orientation: "Up",
      physicalWidth: 0.1,
    },
    grape: {
      source: require("@/assets/targets/grape.png"),
      orientation: "Up",
      physicalWidth: 3,
    },
    durian: {
      source: require("@/assets/targets/durian.png"),
      orientation: "Up",
      physicalWidth: 0.15,
    },
    banana: {
      source: require("@/assets/targets/bananas.png"),
      orientation: "Up",
      physicalWidth: 0.1,
    },
    apple: {
      source: require("@/assets/targets/apple.png"),
      orientation: "Up",
      physicalWidth: 1.5,
    },
    salak: {
      source: require("@/assets/targets/salak.png"),
      orientation: "Up",
      physicalWidth: 0.3,
    },
    pineapple: {
      source: require("@/assets/targets/pineapple.png"),
      orientation: "Up",
      physicalWidth: 0.01,
    },
  });
  _onAnchorFound = () => {
    setActiveAnim(true);
  };

  return (
    <ViroARScene>
      <ViroAmbientLight color={"#fff"} />
      <ViroARImageMarker target={"dragon_fruit"} onAnchorFound={_onAnchorFound}>
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/dragon_fruit.glb")}
          scale={[0, 0, 0]}
          rotation={[0, 0, 0]}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker target={"lychee"} onAnchorFound={_onAnchorFound}>
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/lychees.glb")}
          scale={[0, 0, 0]}
          rotation={[0, 0, 0]}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker target={"kiwano"} onAnchorFound={_onAnchorFound}>
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/kiwano.glb")}
          scale={[0, 0, 0]}
          rotation={[0, 0, 0]}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker target={"mango"} onAnchorFound={_onAnchorFound}>
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/mango.glb")}
          scale={[0, 0, 0]}
          rotation={[0, 90, 0]}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker target={"papaya"} onAnchorFound={_onAnchorFound}>
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/papaya.glb")}
          scale={[0, 0, 0]}
          rotation={[0, 0, 0]}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker target={"strawberry"} onAnchorFound={_onAnchorFound}>
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/strawberry.glb")}
          scale={[0, 0, 0]}
          rotation={[0, 0, 0]}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker target={"grape"} onAnchorFound={_onAnchorFound}>
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/grape.glb")}
          scale={[0, 0, 0]}
          rotation={[0, 0, 0]}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker target={"durian"} onAnchorFound={_onAnchorFound}>
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/durian.glb")}
          scale={[0, 0, 0]}
          rotation={[0, 0, 0]}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker target={"banana"} onAnchorFound={_onAnchorFound}>
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/bananas.glb")}
          scale={[0, 0, 0]}
          rotation={[0, 0, 0]}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker target={"apple"} onAnchorFound={_onAnchorFound}>
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/apple.glb")}
          scale={[0, 0, 0]}
          rotation={[0, 0, 0]}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker target={"salak"} onAnchorFound={_onAnchorFound}>
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/salak.glb")}
          scale={[0, 0, 0]}
          rotation={[0, 0, 0]}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker target={"pineapple"} onAnchorFound={_onAnchorFound}>
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/pineapple.glb")}
          scale={[0, 0, 0]}
          rotation={[0, 0, 0]}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
    </ViroARScene>
  );
};
