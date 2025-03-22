import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Salad, ScanBarcode, Search } from "lucide-react-native";
import Avatar from "@/components/Avatar";
import ImageSlider from "@/components/ImageSlider";

const Dashboard = () => {
  return (
    <View className="flex-1 gap-5 bg-white p-5 py-2">
      {/* Header */}
      <View className="flex-row items-center justify-between h-[9%]">
        <View className="flex gap-2 flex-row items-center">
          <Avatar name="Rohan Sharma" />
          <Text className="text-black text-xl font-bold ml-2">
            Hello, Rohan
          </Text>
        </View>
        <Text className="bg-green-500 text-black px-3 py-1 rounded-full">
          Basic
        </Text>
      </View>

      {/* Banner */}
      <View className="bg-purple-700 p-4 h-[15%] rounded-xl flex justify-between flex-row">
        <View>
          <Text className="text-white text-xl font-bold">Join India's New</Text>
          <Text className="text-white text-2xl font-extrabold">
            Health Revolution!
          </Text>
        </View>
        <View>
          <Salad color="white" size={65} />
        </View>
      </View>

      {/* Search & Scan */}
      <View className="flex-row justify-between h-[30%]">
        <TouchableOpacity className="bg-[#e4eef8] p-4 pb-0 rounded-lg flex-1 mr-2 h-[100%] flex justify-between">
          <View>
            <Text className="text-black font-bold text-3xl">Search</Text>
            <Text>to Discover</Text>
          </View>
          <View className="self-end">
            <Search color="black" size={65} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#e4eef8] p-4 pb-0 rounded-lg flex-1 mr-2 h-[100%] flex justify-between">
          <View>
            <Text className="text-black font-bold text-3xl">Scan</Text>
            <Text>to Uncover</Text>
          </View>
          <View className="self-end">
            <ScanBarcode color="black" size={65} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Uploaded Products */}
      <View className="flex gap-2">
        <Text className="text-black text-xl font-bold">
          View expert choosen products
        </Text>

        <ImageSlider />
      </View>
    </View>
  );
};

export default Dashboard;
