import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import p from "../assets/images/product-1.jpg";

const images = [
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const ImageSlider = () => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setImgIndex((prev) => {
        return prev === images.length - 1 ? 0 : prev + 1;
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  });
  return (
    <View className="bg-[#e4eef8] p-1 rounded-xl items-center">
      <Image
        source={{
          uri: Image.resolveAssetSource(p).uri,
        }}
        className="w-full h-52 rounded-lg"
        resizeMode="cover"
      />
    </View>
  );
};

export default ImageSlider;
