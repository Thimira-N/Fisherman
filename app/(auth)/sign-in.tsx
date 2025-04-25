import { View, Text, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import { Eye, EyeOff } from "lucide-react-native";
import images from '@/constants/images';
import icons from '@/constants/icons';

const SignIn = () => {
    const [showLoginFields, setShowLoginFields] = useState(false);

    const handleShowLoginForm = () => {
        setShowLoginFields(true);
    };

    const handleHideLoginForm = () => {
        setShowLoginFields(false);
    };

    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <SafeAreaView className="bg-white h-full">
            <ImageBackground
                source={images.signin}
                resizeMode="cover"
                blurRadius={3}
                className="flex-1 px-10 justify-between"
            >
                {!showLoginFields && (
                    <Animated.View
                        entering={FadeInUp}
                        exiting={FadeOutUp}
                        className="flex-1 justify-center items-center"
                    >
                        <View className="bg-black/30 p-6 rounded-xl">
                            <Text className="text-base text-center uppercase font-rubik text-white">
                                Welcome to Fisherman
                            </Text>

                            <Text className="text-3xl font-rubik-bold text-white text-center mt-2">
                                Empowering Coastal Lives {"\n"}
                                <Text className="text-primary-300">One Catch at a Time</Text>
                            </Text>
                        </View>
                    </Animated.View>
                )}

                {!showLoginFields && (
                    <Animated.View
                        entering={FadeInUp.delay(100)}
                        exiting={FadeOutUp}
                        className="pb-10"
                    >
                        <Text className="text-lg font-rubik text-black-200 text-center mt-12">
                            {/*Sign in to Fisherman with Google*/}
                            Sign in to Fisherman
                        </Text>

                        <TouchableOpacity
                            onPress={handleShowLoginForm}
                            className="bg-white shadow-lg shadow-zinc-400 rounded-full w-full py-4 mt-5"
                        >
                            <View className="flex flex-row items-center justify-center">
                                {/*<Image*/}
                                {/*    source={icons.google}*/}
                                {/*    className="w-5 h-5"*/}
                                {/*    resizeMode="contain"*/}
                                {/*/>*/}
                                <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                                    {/*Continue with Google*/}
                                    Sign In
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </Animated.View>
                )}

                {showLoginFields && (
                    <Animated.View
                        entering={FadeInUp.duration(500)}
                        exiting={FadeOutUp.duration(500)}
                        className="flex-1 justify-center"
                    >
                        <View className="bg-white/80 p-6 rounded-xl">

                            <TouchableOpacity onPress={handleHideLoginForm} className="mb-4">
                                <Text className="text-primary-300 font-rubik-medium">← Back</Text>
                            </TouchableOpacity>

                            <Text className="text-xl font-rubik-bold text-center text-black-400 mb-4">
                                Enter Your Details
                            </Text>

                            <TextInput
                                placeholder="Email Address"
                                className="border border-gray-300 p-4 rounded-lg mb-4 bg-white"
                                placeholderTextColor="#999"
                            />

                            <View className="relative">
                                <TextInput
                                    placeholder="Password"
                                    secureTextEntry={!passwordVisible}
                                    className="border border-gray-300 p-4 rounded-lg mb-6 bg-white"
                                    placeholderTextColor="#999"
                                />
                                <TouchableOpacity
                                    onPress={() => setPasswordVisible(!passwordVisible)}
                                    className="absolute right-4 top-4"
                                >
                                    {passwordVisible ? (
                                        <EyeOff size={20} color="#666" />
                                    ) : (
                                        <Eye size={20} color="#666" />
                                    )}
                                </TouchableOpacity>
                            </View>

                            <Text className="text-lg font-rubik text-black-200 text-center mt-6">
                                don't have an account? {"\t"}
                                <Text className="text-primary-300">Register</Text>
                            </Text>

                            <TouchableOpacity className="bg-primary-300 p-4 rounded-full mt-4">
                                <Text className="text-center text-white font-rubik-bold text-lg">
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>
                )}
            </ImageBackground>
        </SafeAreaView>
    );
};

export default SignIn;
