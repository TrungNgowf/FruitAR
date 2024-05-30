import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { fetch, decodeJpeg } from "@tensorflow/tfjs-react-native";
import {
  convertBase64ToTensor,
  getModel,
  startPrediction,
} from "@/utils/tensor_helper";
import { cropPicture } from "@/utils/image_helper";
import * as ImagePicker from "expo-image-picker";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Audio, AVPlaybackSource } from "expo-av";

const PredictClasses = new Map<string, string>([
  ["Apple", "Táo"],
  ["Grape", "Nho"],
  ["Mango", "Xoài"],
  ["Strawberry", "Dâu"],
  ["Banana", "Chuối"],
  ["Kiwano", "Dưa gai"],
  ["DragonFruit", "Thanh long"],
  ["Durian", "Sầu riêng"],
  ["Lychee", "Vải"],
  ["Papaya", "Đu đủ"],
  ["Pineapple", "Dứa"],
  ["Salak", "Trái mây"],
]);
export default function ClassifyScreen() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState("back");
  const [modalVisible, setModalVisible] = useState(false);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const isFocused = useIsFocused();
  const cameraRef = useRef<CameraView>(null);

  // const processImagePrediction = async (base64Image: any) => {
  //   setIsProcessing(true);
  //   const croppedData = await cropPicture(base64Image, 300);
  //   const model = await getModel();
  //   const tensor = await convertBase64ToTensor(croppedData!.base64);

  //   const prediction = await startPrediction(model!, tensor);

  //   const highestPrediction = prediction.indexOf(
  //     Math.max.apply(null, prediction)
  //   );
  //   setResult(PredictClasses[highestPrediction]);
  //   setIsProcessing(false);
  //   console.log(PredictClasses[highestPrediction]);
  // };

  const processImagePrediction = async (base64Image: any) => {
    setIsProcessing(true);
    let result = await getPredictionFromServer(base64Image);
    setResult(result);
    setIsProcessing(false);
    console.log(result);
  };

  const getPredictionFromServer = async (image: any) => {
    const formData: any = new FormData();
    formData.append("image", {
      uri: image.uri,
      type: "image/**",
      name: "temp",
    });
    try {
      console.log(formData._parts);
      let res = await fetch("http://192.168.1.13:3000/classify", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const responseJson = await res.json();
      return responseJson.class;
    } catch (error) {
      setIsProcessing(false);
      setResult("Error during fetch");
      console.error("Error during fetch:", error);
    }
  };

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View className="flex-1 justify-center">
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }
  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({ base64: true });
      if (!photo) {
        return;
      }
      setModalVisible(true);
      setImageUri(photo.uri);
      processImagePrediction(photo);
    }
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      base64: true,
    });

    if (!result.canceled && result.assets?.length > 0) {
      setImageUri(result.assets![0].uri);
      setModalVisible(true);
      processImagePrediction(result.assets![0]);
    }
  };
  const closeModal = () => {
    setResult(null);
    setModalVisible(false);
    setImageUri(null);
  };

  async function playSound(soundFile: AVPlaybackSource, shouldPlay = true) {
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

  return (
    <View className="flex-col justify-start items-center w-[100%] h-[100%] bg-white">
      <View className="w-[90%] h-[75%] rounded-xl overflow-hidden m-4">
        {isFocused && (
          <CameraView
            style={styles.camera}
            facing={facing}
            ref={cameraRef}
          ></CameraView>
        )}
      </View>
      <View className="flex flex-row justify-around items-center w-[100%] mt-4">
        <TouchableOpacity onPress={toggleCameraFacing}>
          <Image
            source={require("@/assets/icons/flip-camera.png")}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={takePicture}>
          <Image
            source={require("@/assets/icons/camera.png")}
            style={{ width: 80, height: 80 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={require("@/assets/icons/gallery.png")}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
      </View>
      <Modal
        visible={modalVisible}
        onRequestClose={closeModal}
        animationType="slide"
      >
        <View className="flex-col bg-white justify-start items-center rounded-xl w-[90%] h-[70%] self-center mt-[8vh]">
          {imageUri != null ? (
            <View className="flex flex-col justify-start items-center">
              <Image
                className="rounded-lg"
                source={{ uri: imageUri }}
                width={300}
                height={450}
              />
              {!isProcessing && result ? (
                <View className="flex flex-col justify-start items-center">
                  <Text className="text-lg font-montserrat font-normal text-center mt-4">
                    Kết quả:{"\n"}
                    <Text className="font-bold, text-2xl">
                      {PredictClasses.get(result)}
                    </Text>
                  </Text>
                  <Link
                    replace
                    href={{
                      pathname: "ar_for_classify",
                      params: { fruit: result },
                    }}
                    asChild
                  >
                    <TouchableOpacity
                      onPress={() => {
                        switch (result) {
                          case "Apple":
                            playSound(require("@/assets/sounds/apple.mp3"));
                            break;
                          case "Grape":
                            playSound(require("@/assets/sounds/grape.mp3"));
                            break;
                          case "Mango":
                            playSound(require("@/assets/sounds/mango.mp3"));
                            break;
                          case "Strawberry":
                            playSound(
                              require("@/assets/sounds/strawberry.mp3")
                            );
                            break;
                          case "Banana":
                            playSound(require("@/assets/sounds/banana.mp3"));
                            break;
                          case "Kiwano":
                            playSound(require("@/assets/sounds/kiwano.mp3"));
                            break;
                          case "DragonFruit":
                            playSound(
                              require("@/assets/sounds/dragon_fruit.mp3")
                            );
                            break;
                          case "Durian":
                            playSound(require("@/assets/sounds/durian.mp3"));
                            break;
                          case "Lychee":
                            playSound(require("@/assets/sounds/lychee.mp3"));
                            break;
                          case "Papaya":
                            playSound(require("@/assets/sounds/papaya.mp3"));
                            break;
                          case "Pineapple":
                            playSound(require("@/assets/sounds/pineapple.mp3"));
                            break;
                          case "Salak":
                            playSound(require("@/assets/sounds/salak.mp3"));
                            break;
                          default:
                            break;
                        }
                      }}
                    >
                      <View className=" bg-emerald-500 rounded-md items-center justify-center flex mt-5 p-2">
                        <Text className=" text-white font-semibold text-center text-lg self-center">
                          Mô hình AR tương ứng ➜
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </Link>
                </View>
              ) : (
                <Text className="text-lg font-montserrat font-normal text-center mt-4">
                  Đang phân loại...
                </Text>
              )}
            </View>
          ) : (
            <View className="flex flex-col items-center justify-center rounded-xl w-[90%] h-[70%] border border-dashed border-black m-5">
              <Image
                source={require("@/assets/icons/placeholder.png")}
                resizeMode="contain"
                style={{ width: 50, height: 50 }}
              ></Image>
              <Text className="text-lg font-montserrat font-normal text-center m-2">
                Invalid Image
              </Text>
            </View>
          )}
          <Pressable onPress={closeModal}>
            <View className="w-[110] h-[40] bg-red-500 rounded-md items-center justify-center flex mt-5">
              <Text className=" text-white font-semibold text-center text-lg self-center">
                Quay lại
              </Text>
            </View>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}
import { StyleSheet } from "react-native";
import { Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";
import { Link } from "expo-router";
import { useIsFocused } from "@react-navigation/native";

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
