import { Link } from "expo-router";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

const SignupScreen = () => {
  return (
    <View className={`flex-1 gap-7  bg-white p-5 py-20 `}>
      <View className="flex gap-3">
        <Text className={`text-4xl font-bold text-left`}>
          Create your account
        </Text>

        <Link href={"/login"} className={`text-blue-500 text-lg`}>
          Already have account? Login
        </Link>
      </View>

      <View className="flex gap-5">
        <View className={`w-full flex gap-2`}>
          <Text className={`text-gray-700 text-lg`}>Email</Text>
          <TextInput
            className={`border border-gray-300 rounded-md py-3 px-4 w-full text-lg`}
            placeholder="abc@gmail.com"
          />
        </View>

        <View className={`w-full flex gap-2`}>
          <Text className={`text-gray-700 text-lg`}>Password</Text>
          <TextInput
            className={`border border-gray-300 rounded-md py-3 px-4 w-full text-lg`}
            placeholder="Enter password"
            secureTextEntry={true}
          />
        </View>
      </View>

      <TouchableOpacity
        className={`bg-gray-800 rounded-md py-3 px-6 w-full mb-6 `}
      >
        <Text className={`text-white text-center font-semibold text-xl`}>
          Signup
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
