import { Slot, Redirect } from "expo-router";
import { SessionProvider, useAuth } from "../context/authProvider";
import "../global.css";

export default function Root() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
