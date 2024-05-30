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
import { Audio, AVPlaybackSource } from "expo-av";
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
  const [rotate, setRotate] = useState([0, 0, 0]);

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

  const rotateObject = (rotateState, rotationFactor, source) => {
    console.log(rotateState, rotationFactor);
    if (rotateState === 1) return;
    let newRotate = [rotate[0], rotate[1] - rotationFactor, rotate[2]];
    setRotate(newRotate);
  };

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
      physicalWidth: 0.001,
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
  async function playSound(soundFile, shouldPlay = true) {
    // 1. Load the sound asset
    const { sound } = await Audio.Sound.createAsync(
      soundFile,
      { isLooping: false } // Set looping to false by default
    );

    // 2. Check the condition before playing
    if (shouldPlay) {
      // 3. Play the sound
      await sound.setStatusAsync({ shouldPlay: true });
    }

    return sound;
  }
  _onAnchorFound = (fruit) => {
    setActiveAnim(true);
  };
  _onAppleAnchorFound = () => {
    playSound(require("@/assets/sounds/apple.mp3"));
    setActiveAnim(true);
  };
  _onBananaAnchorFound = () => {
    playSound(require("@/assets/sounds/banana.mp3"));
    setActiveAnim(true);
  };
  _onDragonFruitAnchorFound = () => {
    playSound(require("@/assets/sounds/dragon_fruit.mp3"));
    setActiveAnim(true);
  };
  _onDurianAnchorFound = () => {
    playSound(require("@/assets/sounds/durian.mp3"));
    setActiveAnim(true);
  };
  _onGrapeAnchorFound = () => {
    playSound(require("@/assets/sounds/grape.mp3"));
    setActiveAnim(true);
  };
  _onKiwanoAnchorFound = () => {
    playSound(require("@/assets/sounds/kiwano.mp3"));
    setActiveAnim(true);
  };
  _onLycheeAnchorFound = () => {
    playSound(require("@/assets/sounds/lychee.mp3"));
    setActiveAnim(true);
  };
  _onMangoAnchorFound = () => {
    playSound(require("@/assets/sounds/mango.mp3"));
    setActiveAnim(true);
  };
  _onPapayaAnchorFound = () => {
    playSound(require("@/assets/sounds/papaya.mp3"));
    setActiveAnim(true);
  };
  _onPineappleAnchorFound = () => {
    playSound(require("@/assets/sounds/pineapple.mp3"));
    setActiveAnim(true);
  };
  _onSalakAnchorFound = () => {
    playSound(require("@/assets/sounds/salak.mp3"));
    setActiveAnim(true);
  };
  _onStrawberryAnchorFound = () => {
    playSound(require("@/assets/sounds/strawberry.mp3"));
    setActiveAnim(true);
  };

  return (
    <ViroARScene>
      <ViroAmbientLight color={"#fff"} />
      <ViroARImageMarker
        target={"dragon_fruit"}
        onAnchorFound={_onDragonFruitAnchorFound}
      >
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/dragon_fruit.glb")}
          scale={[0, 0, 0]}
          rotation={rotate}
          onRotate={rotateObject}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker target={"lychee"} onAnchorFound={_onLycheeAnchorFound}>
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/lychees.glb")}
          rotation={rotate}
          onRotate={rotateObject}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker target={"kiwano"} onAnchorFound={_onKiwanoAnchorFound}>
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/kiwano.glb")}
          scale={[0, 0, 0]}
          rotation={rotate}
          onRotate={rotateObject}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker target={"mango"} onAnchorFound={_onMangoAnchorFound}>
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/mango.glb")}
          scale={[0, 0, 0]}
          rotation={rotate}
          onRotate={rotateObject}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker target={"papaya"} onAnchorFound={_onPapayaAnchorFound}>
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/papaya.glb")}
          scale={[0, 0, 0]}
          rotation={rotate}
          onRotate={rotateObject}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker
        target={"strawberry"}
        onAnchorFound={_onStrawberryAnchorFound}
      >
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/strawberry.glb")}
          scale={[0, 0, 0]}
          rotation={rotate}
          onRotate={rotateObject}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker target={"grape"} onAnchorFound={_onGrapeAnchorFound}>
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/grape.glb")}
          scale={[0, 0, 0]}
          rotation={rotate}
          onRotate={rotateObject}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker target={"durian"} onAnchorFound={_onDurianAnchorFound}>
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/durian.glb")}
          scale={[0, 0, 0]}
          rotation={rotate}
          onRotate={rotateObject}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker target={"banana"} onAnchorFound={_onBananaAnchorFound}>
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/bananas.glb")}
          scale={[0, 0, 0]}
          rotation={rotate}
          onRotate={rotateObject}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker target={"apple"} onAnchorFound={_onAppleAnchorFound}>
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/apple.glb")}
          scale={[0, 0, 0]}
          rotation={rotate}
          onRotate={rotateObject}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker target={"salak"} onAnchorFound={_onSalakAnchorFound}>
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/salak.glb")}
          scale={[0, 0, 0]}
          rotation={rotate}
          onRotate={rotateObject}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
      <ViroARImageMarker
        target={"pineapple"}
        onAnchorFound={_onPineappleAnchorFound}
      >
        <Viro3DObject
          type={"GLB"}
          source={require("@/assets/models/pineapple.glb")}
          scale={[0, 0, 0]}
          rotation={rotate}
          onRotate={rotateObject}
          animation={{
            name: "scaleUp",
            run: activeAnim,
          }}
        />
      </ViroARImageMarker>
    </ViroARScene>
  );
};
