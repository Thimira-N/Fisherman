import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import icons from "@/constants/icons";

const storms = [
    { name: 'Cyclone Madi', category: 'Category 3', distance: '120 km', eta: '3h', maxWind: '150 km/h' },
    { name: 'Tropical Storm Nisha', category: 'Category 1', distance: '350 km', eta: '9h', maxWind: '95 km/h' },
];

const StormTrackerScreen = () => {
    return (
        <ScrollView className="px-5 py-3">

            {/* Map Section */}
            <View className="bg-primary-50 rounded-2xl shadow-md p-4 mb-8">
                <Text className="text-xl font-bold text-primary-300 mb-4">Storm Map</Text>
                {/*<View className="bg-white h-60 rounded-2xl flex items-center justify-center relative">*/}
                    {/*/!* Mock Map *!/*/}
                {/*<Image source={icons.mapPlaceholder} className="w-full h-full rounded-2xl absolute" resizeMode="cover" />*/}
                <View className="h-60 rounded-2xl overflow-hidden">
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{ flex: 1 }}
                        initialRegion={{
                            // Centered over Sri Lanka (adjust as needed)
                            latitude: 7.8731,
                            longitude: 80.7718,
                            latitudeDelta: 1.0,
                            longitudeDelta: 2.0,
                        }}
                        showsCompass
                        loadingEnabled
                        showsMyLocationButton
                        zoomControlEnabled
                    >
                        {/* Example: place a marker for the storm's current position */}
                        <Marker
                            coordinate={{ latitude: 8.0, longitude: 81.0 }}
                            title="Storm Center"
                            description="Tropical storm ETA: 48 hrs"
                            pinColor="#f97316"
                        />
                        {/* You can map over your storm-tracker data here to add more markers or polylines */}
                    </MapView>

                    {/* Boat Icon */}
                    <View className="absolute top-[50%] left-[45%]">
                        <Image source={icons.boat} className="size-8" tintColor="#F32013" />
                        <Text className="text-xs text-black-100">You</Text>
                    </View>

                    {/* Storm Icons */}
                    <View className="absolute top-[30%] left-[20%]">
                        <Image source={icons.storm} className="size-8" />
                        <Text className="text-[10px] text-red-500">Madi</Text>
                    </View>

                    <View className="absolute top-[70%] left-[70%]">
                        <Image source={icons.storm} className="size-8" />
                        <Text className="text-[10px] text-yellow-500">Nisha</Text>
                    </View>
                </View>
            </View>

            {/* Active Storms List */}
            <View className="mb-20">
                <Text className="text-xl font-bold text-primary-300 mb-3">Active Storms</Text>
                <View className="flex-col gap-4">
                    {storms.map((storm, index) => (
                        <View key={index} className="bg-primary-50 p-4 rounded-2xl shadow-md">
                            <View className="flex-row justify-between items-center mb-2">
                                <Text className="text-lg font-semibold text-black-300">{storm.name}</Text>
                                <Text className="text-sm text-white bg-red-500 px-2 py-1 rounded-lg">{storm.category}</Text>
                            </View>
                            <View className="flex-row justify-between">
                                <Text className="text-black-100">Distance: {storm.distance}</Text>
                                <Text className="text-black-100">ETA: {storm.eta}</Text>
                                <Text className="text-black-100">Max Wind: {storm.maxWind}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>

            {/* Alert Settings Button */}
            <TouchableOpacity className="bg-primary-300 py-4 rounded-2xl items-center mb-10 shadow-lg">
                <Text className="text-white font-bold">Configure Storm Alerts</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

export default StormTrackerScreen;
