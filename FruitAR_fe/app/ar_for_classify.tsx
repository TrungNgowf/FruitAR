import {
  ViroAmbientLight,
  ViroAnimations,
  ViroARScene,
  ViroARSceneNavigator,
  ViroNode,
} from "@viro-community/react-viro";
import { useEffect, useState } from "react";
import { View, Image, Pressable } from "react-native";

import { useGlobalSearchParams } from "expo-router";
import React from "react";
import FRUIT_MODELS from "@/utils/FruitModels";

export default function ARForClassify() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (!visible)
      setTimeout(() => {
        setVisible(true);
      }, 300);
  }, [visible]);
  return (
    <View className="flex-1">
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

const FruitSceneAR = () => {
  const { fruit } = useGlobalSearchParams();

  ViroAnimations.registerAnimations({});

  return (
    <ViroARScene>
      <ViroAmbientLight color={"#fff"} />
      <FRUIT_MODELS model={fruit} />
    </ViroARScene>
  );
};
