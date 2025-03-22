import { useAuth } from "@/context/authProvider";
import { Redirect, Stack, Tabs } from "expo-router";
import { House } from "lucide-react-native";

const MainTabs = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
};

export default function MainLayout() {
  const { authInfo } = useAuth();

  if (!authInfo.token) {
    return <Redirect href={"/(auth)/login"} />;
  }

  return <MainTabs />;
}
