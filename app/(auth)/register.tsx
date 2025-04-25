import { View, Text, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import { Eye, EyeOff } from "lucide-react-native";
import { useRouter } from 'expo-router';
import images from '@/constants/images';

const Register = () => {
    const [showRegisterFields, setShowRegisterFields] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const handleShowForm = () => setShowRegisterFields(true);
    const handleHideForm = () => setShowRegisterFields(false);

    const router = useRouter();

    const handleSignIn = () => {
        router.push('/sign-in');
    }

    return (
        <SafeAreaView className="bg-white h-full">
            <ImageBackground
                source={images.image5}
                resizeMode="cover"
                blurRadius={3}
                className="flex-1 px-10 justify-between"
            >
                {!showRegisterFields && (
                    <Animated.View
                        entering={FadeInUp}
                        exiting={FadeOutUp}
                        className="flex-1 justify-center items-center"
                    >
                        <View className="bg-black/30 p-6 rounded-xl">
                            <Text className="text-base text-center uppercase font-rubik text-white">
                                Join the Fisherman Community
                            </Text>
                            <Text className="text-3xl font-rubik-bold text-white text-center mt-2">
                                Cast Your Line into {"\n"}
                                <Text className="text-primary-300">a Better Tomorrow</Text>
                            </Text>
                        </View>
                    </Animated.View>
                )}

                {!showRegisterFields && (
                    <Animated.View
                        entering={FadeInUp.delay(100)}
                        exiting={FadeOutUp}
                        className="pb-10"
                    >
                        <Text className="text-lg font-rubik text-black-200 text-center mt-12">
                            Register to Fisherman
                        </Text>

                        <TouchableOpacity
                            onPress={handleShowForm}
                            className="bg-white shadow-lg shadow-zinc-400 rounded-full w-full py-4 mt-5"
                        >
                            <Text className="text-lg font-rubik-medium text-black-300 text-center">
                                Register
                            </Text>
                        </TouchableOpacity>
                    </Animated.View>
                )}

                {showRegisterFields && (
                    <Animated.View
                        entering={FadeInUp.duration(500)}
                        exiting={FadeOutUp.duration(500)}
                        className="flex-1 justify-center"
                    >
                        <View className="bg-white/80 p-6 rounded-xl">
                            <TouchableOpacity onPress={handleHideForm} className="mb-4">
                                <Text className="text-primary-300 font-rubik-medium">← Back</Text>
                            </TouchableOpacity>

                            <Text className="text-xl font-rubik-bold text-center text-black-400 mb-4">
                                Create Your Account
                            </Text>

                            <TextInput
                                placeholder="Full Name"
                                className="border border-gray-300 p-4 rounded-lg mb-4 bg-white"
                                placeholderTextColor="#999"
                            />

                            <TextInput
                                placeholder="Email Address"
                                className="border border-gray-300 p-4 rounded-lg mb-4 bg-white"
                                placeholderTextColor="#999"
                            />

                            <View className="relative mb-4">
                                <TextInput
                                    placeholder="Password"
                                    secureTextEntry={!passwordVisible}
                                    className="border border-gray-300 p-4 rounded-lg bg-white"
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

                            <View className="relative mb-4">
                                <TextInput
                                    placeholder="Confirm Password"
                                    secureTextEntry={!confirmPasswordVisible}
                                    className="border border-gray-300 p-4 rounded-lg bg-white"
                                    placeholderTextColor="#999"
                                />
                                <TouchableOpacity
                                    onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                                    className="absolute right-4 top-4"
                                >
                                    {confirmPasswordVisible ? (
                                        <EyeOff size={20} color="#666" />
                                    ) : (
                                        <Eye size={20} color="#666" />
                                    )}
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity className="bg-primary-300 p-4 rounded-full mt-2">
                                <Text className="text-center text-white font-rubik-bold text-lg">
                                    Register
                                </Text>
                            </TouchableOpacity>

                            <Text className="text-lg font-rubik text-black-200 text-center mt-6">
                                Already have an account?{" "}
                                <Text onPress={handleSignIn} className="text-primary-300">Sign In</Text>
                            </Text>
                        </View>
                    </Animated.View>
                )}
            </ImageBackground>
        </SafeAreaView>
    );
};

export default Register;
