import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
        <Link href="/welcome" className="text-3xl text-blue-500 font-rubik-bold">WELCOME</Link>
        <Link href="/sign-in" className="text-3xl text-blue-500 font-rubik-bold">SIGNIN</Link>
        <Link href="/register" className="text-3xl text-blue-500 font-rubik-bold">REGISTER</Link>
        <Link href="/help" className="text-3xl text-blue-500 font-rubik-bold">HELP</Link>
        <Link href="/notifications" className="text-3xl text-blue-500 font-rubik-bold">NOTIFICATIONS</Link>
        <Link href="/profile" className="text-3xl text-blue-500 font-rubik-bold">PROFILE</Link>
    </View>
  );
}
