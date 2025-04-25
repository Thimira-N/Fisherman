import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import { useRouter } from 'expo-router';

const Welcome = () => {
    const router = useRouter();

    const handleGetStarted = () => {
        router.push('/sign-in');
    };

    return (
        <SafeAreaView className="bg-white h-full">
            <ImageBackground
                source={images.image3}
                resizeMode="cover"
                blurRadius={3}
                className="flex-1 px-10 justify-between"
            >
                <View className="flex-1 justify-center items-center">
                    <View className="bg-black/30 p-6 rounded-xl">
                        {/*<Text className="text-base text-center uppercase font-rubik text-white">*/}
                        {/*    Welcome to Fisherman*/}
                        {/*</Text>*/}
                        <Text className="text-3xl font-rubik-bold text-white text-center">
                            Welcome to Fisherman!
                            {/*<Text className="text-primary-300">One Catch at a Time</Text>*/}
                        </Text>
                    </View>
                </View>

                <View className="pb-10">
                    <TouchableOpacity
                        onPress={handleGetStarted}
                        className="bg-primary-300 py-4 rounded-full shadow-lg shadow-zinc-400"
                    >
                        <Text className="text-center text-white font-rubik-bold text-lg">
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default Welcome;
