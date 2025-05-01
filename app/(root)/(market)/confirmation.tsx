import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

export default function ConfirmationScreen() {
    const router = useRouter();

    return (
        <Animated.View
            entering={FadeIn.duration(800)}
            exiting={FadeOut.duration(800)}
            className="flex-1 bg-white justify-center items-center p-6"
        >
            <View className="bg-primary-50 p-10 rounded-full shadow-lg mb-6">
                <Ionicons name="checkmark-circle" size={120} color="#34D399" />
            </View>

            <Text className="text-3xl font-extrabold text-primary-300 mb-2">Request Fulfilled!</Text>
            <Text className="text-black-200 text-center mb-10">
                You have successfully fulfilled the procurement request. Thank you!
            </Text>

            <TouchableOpacity
                onPress={() => router.push('/procurement-needs')}
                className="bg-primary-300 py-4 px-10 rounded-full"
            >
                <Text className="text-white font-bold text-lg">Back to Procurement</Text>
            </TouchableOpacity>
        </Animated.View>
    );
}
