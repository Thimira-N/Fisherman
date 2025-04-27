import React, { useState, useCallback } from 'react';
import { View, Text, Image, ScrollView, RefreshControl } from 'react-native';
import { MotiView } from 'moti'; // 👈 for smooth animations
import icons from "@/constants/icons";

const CurrentWeatherScreen = () => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1500); // Mock refresh
    }, []);

    return (
        <ScrollView
            className="px-5 py-4 bg-accent-100 flex-1"
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={["#4F46E5"]} />
            }
        >
            {/* Weather Animation / Static Image */}
            <MotiView
                from={{ opacity: 0, translateY: -20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: "timing", duration: 800 }}
                className="items-center mb-6"
            >
                <Image
                    source={icons.sunny}
                    className="h-48 w-48"
                    resizeMode="contain"
                />
            </MotiView>

            {/* Temperature Display */}
            <MotiView
                from={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", damping: 10, mass: 1 }}
                className="items-center mb-8"
            >
                <Text className="text-6xl font-extrabold text-primary-300 mb-2">32°C</Text>
                <Text className="text-lg text-black-200">Feels like 35°C</Text>
            </MotiView>

            {/* Divider */}
            <View className="border-t border-primary-100 mb-6" />

            {/* Wind / Humidity / Pressure */}
            <MotiView
                from={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: "timing", delay: 300 }}
                className="flex-row justify-around mb-8"
            >
                {[
                    { label: "Wind", value: "12 km/h NE" },
                    { label: "Humidity", value: "68%" },
                    { label: "Pressure", value: "1012 hPa" }
                ].map((item, index) => (
                    <View key={index} className="items-center">
                        <Text className="text-primary-300 font-bold text-base mb-1">{item.label}</Text>
                        <Text className="text-black-200 text-sm">{item.value}</Text>
                    </View>
                ))}
            </MotiView>

            {/* Info Cards */}
            {[
                {
                    title: "Sunrise & Sunset",
                    content: (
                        <View className="flex-row justify-between">
                            <View>
                                <Text className="text-black-300 font-semibold mb-1">Sunrise</Text>
                                <Text className="text-black-200">5:45 AM</Text>
                            </View>
                            <View>
                                <Text className="text-black-300 font-semibold mb-1">Sunset</Text>
                                <Text className="text-black-200">6:15 PM</Text>
                            </View>
                        </View>
                    )
                },
                {
                    title: "Tide Times",
                    content: (
                        <View className="flex-row justify-between">
                            <View>
                                <Text className="text-black-300 font-semibold mb-1">High Tide</Text>
                                <Text className="text-black-200">4:00 PM</Text>
                            </View>
                            <View>
                                <Text className="text-black-300 font-semibold mb-1">Low Tide</Text>
                                <Text className="text-black-200">10:30 PM</Text>
                            </View>
                        </View>
                    )
                },
                {
                    title: "Safe for Fishing",
                    content: (
                        <>
                            <Text className="text-black-200 mt-2 text-base">Conditions are favorable today.</Text>
                        </>
                    ),
                    cardClass: "bg-green-100",
                    titleClass: "text-green-700"
                }
            ].map((section, idx) => (
                <MotiView
                    key={idx}
                    from={{ opacity: 0, translateY: 30 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ delay: 400 + idx * 200, type: "timing" }}
                    className={`p-5 rounded-3xl shadow-md mb-6 ${section.cardClass || 'bg-white'}`}
                >
                    <Text className={`font-extrabold text-xl mb-4 ${section.titleClass || 'text-primary-300'}`}>{section.title}</Text>
                    {section.content}
                </MotiView>
            ))}

            {/* Location Info */}
            <MotiView
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1100, type: "timing" }}
                className="mb-10"
            >
                <Text className="text-center text-primary-300 text-base">🌍 Change Location (Coming Soon)</Text>
            </MotiView>
        </ScrollView>
    );
};

export default CurrentWeatherScreen;
