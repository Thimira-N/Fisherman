import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import icons from "@/constants/icons";

const WaterSafetyScreen = () => {
    return (
        <ScrollView className="px-5 py-3">

            {/* Wave Height Section */}
            <View className="bg-primary-50 p-5 rounded-2xl shadow-md mb-6">
                <Text className="text-xl font-bold text-primary-300 mb-4">Wave Height</Text>
                <View className="flex-row items-center justify-around">
                    {/* Example of wave heights */}
                    <View className="items-center">
                        <Image source={icons.wave} className="w-12 h-12" />
                        <Text className="mt-2 text-black-300 font-semibold">0.5m</Text>
                    </View>
                    <View className="items-center">
                        <Image source={icons.wave} className="w-16 h-16" />
                        <Text className="mt-2 text-black-300 font-semibold">1.2m</Text>
                    </View>
                    <View className="items-center">
                        <Image source={icons.wave} className="w-20 h-20" />
                        <Text className="mt-2 text-black-300 font-semibold">2.5m</Text>
                    </View>
                </View>
            </View>

            {/* Current Direction & Strength */}
            <View className="bg-primary-50 p-5 rounded-2xl shadow-md mb-6">
                <Text className="text-xl font-bold text-primary-300 mb-4">Current Direction</Text>
                <View className="items-center">
                    <Image source={icons.compass} className="w-36 h-36" />
                    <Text className="mt-3 text-black-300 font-semibold">Flow: Northeast (30°)</Text>
                </View>
            </View>

            {/* Visibility Section */}
            <View className="bg-primary-50 p-5 rounded-2xl shadow-md mb-6">
                <Text className="text-xl font-bold text-primary-300 mb-4">Visibility</Text>
                <View className="flex items-center">
                    <Image source={icons.visibility} className="w-20 h-20" />
                    <Text className="mt-3 text-black-300 font-semibold">Visibility: 6 km</Text>
                </View>
            </View>

            {/* Danger Zones Map */}
            <View className="bg-primary-50 p-5 rounded-2xl shadow-md mb-6">
                <Text className="text-xl font-bold text-red-500 mb-4">Danger Zones</Text>
                <View className="bg-white h-48 rounded-2xl flex items-center justify-center relative">
                    <Image source={icons.mapPlaceholder} className="w-full h-full rounded-2xl absolute" resizeMode="cover" />
                    <Text className="text-red-500 font-bold">Danger Areas Marked</Text>
                </View>
            </View>

            {/* Emergency Contacts */}
            <View className="bg-primary-50 p-5 rounded-2xl shadow-md mb-6">
                <Text className="text-xl font-bold text-primary-300 mb-4">Emergency Contacts</Text>
                <View className="flex-col gap-4">
                    <TouchableOpacity className="bg-red-500 py-4 rounded-2xl items-center shadow-md">
                        <Text className="text-white font-bold">Call Coast Guard</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-yellow-400 py-4 rounded-2xl items-center shadow-md">
                        <Text className="text-white font-bold">Call Fisheries Dept</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Report Hazard */}
            <TouchableOpacity className="bg-primary-300 py-5 rounded-2xl items-center shadow-lg mb-10">
                <Text className="text-white font-bold">Report Hazard</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

export default WaterSafetyScreen;
