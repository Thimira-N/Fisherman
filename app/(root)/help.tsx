import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View, Text, TouchableOpacity, Linking, Image } from "react-native";
import icons from "@/constants/icons";

export default function HelpScreen() {
    const helpOptions = [
        { title: "FAQ", link: "https://yourwebsite.com/faq", icon: icons.faq },
        { title: "Contact Support", link: "mailto:thimiranavodana@gmail.com", icon: icons.support },
        { title: "Report a Problem", link: "mailto:thimiranavodana@gmail.com", icon: icons.report },
        { title: "Terms & Conditions", link: "https://yourwebsite.com/terms", icon: icons.terms },
        { title: "Privacy Policy", link: "https://yourwebsite.com/privacy", icon: icons.privacy },
    ];

    return (
        <SafeAreaView className="flex-1 bg-gradient-to-r from-primary-100 to-primary-200 px-6">
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text className="text-2xl font-rubik-bold text-gray-900 mb-6 mt-6">Help & Support</Text>

                {/* Help Options */}
                {helpOptions.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => Linking.openURL(item.link)}
                        className="py-5 px-4 mb-3 rounded-xl bg-white shadow-md flex-row items-center justify-between"
                    >
                        <View className="flex-row items-center gap-3">
                            <Image source={item.icon} className="size-10" />
                            <Text className="text-lg font-rubik-medium text-gray-800">{item.title}</Text>
                        </View>

                        <Image source={icons.rightArrow} className="w-4 h-4 text-gray-600" />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
