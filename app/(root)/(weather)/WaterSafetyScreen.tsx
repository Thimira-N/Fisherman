import React, { useState, useCallback } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { MotiView } from 'moti';
import icons from '@/constants/icons';

const WaterSafetyScreen = () => {
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 1500);
    }, []);

    // example extra data
    const waveData = [
        { size: '0.5 m', period: '4 s' },
        { size: '1.2 m', period: '6 s' },
        { size: '2.5 m', period: '8 s' },
    ];
    const flowData = { direction: 'NE', degrees: 30, speed: '1.2 m/s' };
    const visibilityData = { distance: '6 km', clarity: 'Good', uvIndex: 3 };

    return (
        <ScrollView
            className="flex-1 bg-accent-100 px-5 pt-4 mb-24"
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#2563eb']} />}
        >
            {/* Wave Height */}
            <MotiView
                from={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 100, type: 'timing', duration: 600 }}
                className="bg-white p-5 rounded-3xl shadow-lg mb-6"
            >
                <Text className="text-2xl font-extrabold text-primary-300 mb-4">🌊 Wave Height</Text>
                <View className="flex-row justify-between">
                    {waveData.map((w, i) => (
                        <View key={i} className="items-center flex-1">
                            <MotiView
                                from={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 200 + i * 100, type: 'spring' }}
                                className="bg-primary-50 p-3 rounded-full mb-2"
                            >
                                <Image source={icons.wave} className="w-12 h-12" tintColor="#2563eb" />
                            </MotiView>
                            <Text className="font-bold text-black-300">{w.size}</Text>
                            <Text className="text-xs text-gray-500">Period: {w.period}</Text>
                        </View>
                    ))}
                </View>
            </MotiView>

            <View className="flex-row items-center justify-around">
                {/* Current Direction & Strength */}
                <MotiView
                    from={{ opacity: 0, translateX: -30 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ delay: 500, type: 'timing', duration: 600 }}
                    className="bg-white p-5 rounded-3xl shadow-lg mb-6 items-center"
                >
                    <Text className="text-2xl font-extrabold text-primary-300 mb-4">🧭 Current Flow</Text>
                    <MotiView
                        from={{ rotate: '0deg' }}
                        animate={{ rotate: `${flowData.degrees}deg` }}
                        transition={{ type: 'timing', duration: 800 }}
                        className="bg-primary-50 p-4 rounded-full mb-3"
                    >
                        <Image source={icons.compass} className="w-24 h-24" />
                    </MotiView>
                    <Text className="font-semibold text-black-300">Dir: {flowData.direction} ({flowData.degrees}°)</Text>
                    <Text className="text-gray-500 mt-1">Speed: {flowData.speed}</Text>
                </MotiView>

                {/* Visibility */}
                <MotiView
                    from={{ opacity: 0, translateX: 30 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ delay: 800, type: 'timing', duration: 600 }}
                    className="bg-white p-5 rounded-3xl shadow-lg mb-6 items-center"
                >
                    <Text className="text-2xl font-extrabold text-primary-300 mb-4">👁️ Visibility</Text>
                    <MotiView
                        from={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ loop: true, type: 'timing', duration: 1500 }}
                        className="bg-primary-50 p-4 rounded-full mb-3"
                    >
                        <Image source={icons.visibility} className="w-16 h-16" />
                    </MotiView>
                    <Text className="font-semibold text-black-300">{visibilityData.distance}</Text>
                    <Text className="text-gray-500 mt-1">Clarity: {visibilityData.clarity}</Text>
                    <Text className="text-gray-400 text-xs mt-1">UV Index: {visibilityData.uvIndex}</Text>
                </MotiView>
            </View>

            {/* Danger Zones Map */}
            <MotiView
                from={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 800, type: 'spring', duration: 700 }}
                className="bg-white p-5 rounded-3xl shadow-lg mb-6"
            >
                <Text className="text-2xl font-extrabold text-red-500 mb-4">⚠️ Danger Zones</Text>
                <View className="h-60 rounded-2xl overflow-hidden mb-2">
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{ flex: 1 }}
                        initialRegion={{
                            latitude: 7.8731,
                            longitude: 80.7718,
                            latitudeDelta: 1.0,
                            longitudeDelta: 2.0,
                        }}
                    >
                        <Marker coordinate={{ latitude: 8.0, longitude: 81.0 }} pinColor="#ef4444" />
                        <Marker coordinate={{ latitude: 7.5, longitude: 80.3 }} pinColor="#ef4444" />
                    </MapView>
                </View>
                <Text className="text-red-500 font-bold text-center">Marked danger areas on map</Text>
            </MotiView>

            {/* Emergency Contacts */}
            <MotiView
                from={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 1000, type: 'timing', duration: 600 }}
                className="bg-white p-5 rounded-3xl shadow-lg mb-6"
            >
                <Text className="text-2xl font-extrabold text-primary-300 mb-4">📞 Emergency Contacts</Text>
                <View className="flex-col gap-4">
                    <TouchableOpacity className="bg-red-500 py-4 rounded-2xl items-center shadow-md">
                        <Text className="text-white font-bold">Call Coast Guard</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-yellow-400 py-4 rounded-2xl items-center shadow-md">
                        <Text className="text-white font-bold">Call Fisheries Dept</Text>
                    </TouchableOpacity>
                </View>
            </MotiView>

            {/* Report Hazard */}
            <MotiView
                from={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1200, type: 'spring', damping: 10 }}
                className="mb-12"
            >
                <TouchableOpacity className="bg-primary-300 py-5 rounded-2xl items-center shadow-lg">
                    <Text className="text-white font-bold text-lg">⚓ Report Hazard</Text>
                </TouchableOpacity>
            </MotiView>
        </ScrollView>
    );
};

export default WaterSafetyScreen;
