import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

export default function CameraScreen() {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View className="flex-1 flex justify-center gap-2 w-[75%]">
        <Text className="text-center pb-2 text-white">
          We need your permission to show the camera
        </Text>
        <TouchableOpacity onPress={requestPermission}>
          <View className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Text className="text-white">Grant Permission</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View className="flex-1 justify-center">
      <CameraView className="flex-1" facing={facing}>
        <View className="flex-1 flex-row bg-transparent mx-16 mb-16 justify-end">
          <TouchableOpacity
            className="flex-1 items-center self-end"
            onPress={toggleCameraFacing}
          >
            <Text className="text-2xl font-bold text-white">Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}
