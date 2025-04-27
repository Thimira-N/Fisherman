// import React from 'react';
// import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
// import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
// import { MotiView } from 'moti';
// import icons from "@/constants/icons";
//
// const storms = [
//     { name: 'Cyclone Madi', category: 'Category 3', distance: '120 km', eta: '3h', maxWind: '150 km/h' },
//     { name: 'Tropical Storm Nisha', category: 'Category 1', distance: '350 km', eta: '9h', maxWind: '95 km/h' },
// ];
//
// const StormTrackerScreen = () => {
//     return (
//         <ScrollView className="px-5 py-4 bg-accent-100 flex-1">
//             {/* Map Section */}
//             <MotiView
//                 from={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ type: 'spring', duration: 800 }}
//                 className="bg-primary-50 rounded-2xl shadow-md p-4 mb-8"
//             >
//                 <Text className="text-2xl font-extrabold text-primary-300 mb-4">🗺️ Storm Map</Text>
//
//                 <View className="h-60 rounded-2xl overflow-hidden">
//                     <MapView
//                         provider={PROVIDER_GOOGLE}
//                         style={{ flex: 1 }}
//                         initialRegion={{
//                             latitude: 7.8731,
//                             longitude: 80.7718,
//                             latitudeDelta: 1.0,
//                             longitudeDelta: 2.0,
//                         }}
//                         showsCompass
//                         loadingEnabled
//                         showsMyLocationButton
//                         zoomControlEnabled
//                     >
//                         <Marker
//                             coordinate={{ latitude: 8.0, longitude: 81.0 }}
//                             title="Storm Center"
//                             description="Tropical storm ETA: 48 hrs"
//                             pinColor="#f97316"
//                         />
//                     </MapView>
//
//                     {/* Boat Icon */}
//                     <View className="absolute top-[50%] left-[45%] items-center">
//                         <Image source={icons.boat} className="size-8" tintColor="#F32013" />
//                         <Text className="text-xs text-black-100">You</Text>
//                     </View>
//
//                     {/* Storm Icons */}
//                     <View className="absolute top-[30%] left-[20%] items-center">
//                         <Image source={icons.storm} className="size-8" />
//                         <Text className="text-[10px] text-red-500">Madi</Text>
//                     </View>
//
//                     <View className="absolute top-[70%] left-[70%] items-center">
//                         <Image source={icons.storm} className="size-8" />
//                         <Text className="text-[10px] text-yellow-500">Nisha</Text>
//                     </View>
//                 </View>
//             </MotiView>
//
//             {/* Active Storms List */}
//             <MotiView
//                 from={{ opacity: 0, translateY: 20 }}
//                 animate={{ opacity: 1, translateY: 0 }}
//                 transition={{ type: 'timing', delay: 300, duration: 700 }}
//                 className="mb-10"
//             >
//                 <Text className="text-2xl font-extrabold text-primary-300 mb-4">🌪️ Active Storms</Text>
//
//                 <View className="flex-col gap-4">
//                     {storms.map((storm, index) => (
//                         <MotiView
//                             key={index}
//                             from={{ opacity: 0, translateX: -30 }}
//                             animate={{ opacity: 1, translateX: 0 }}
//                             transition={{ type: 'spring', delay: 500 + index * 200 }}
//                             className="bg-white p-4 rounded-2xl shadow-md"
//                         >
//                             <View className="flex-row justify-between items-center mb-2">
//                                 <Text className="text-lg font-semibold text-black-300">{storm.name}</Text>
//                                 <Text className="text-sm text-white bg-red-500 px-2 py-1 rounded-lg">
//                                     {storm.category}
//                                 </Text>
//                             </View>
//                             <View className="flex-row justify-between">
//                                 <Text className="text-black-100">Distance: {storm.distance}</Text>
//                                 <Text className="text-black-100">ETA: {storm.eta}</Text>
//                                 <Text className="text-black-100">Max Wind: {storm.maxWind}</Text>
//                             </View>
//                         </MotiView>
//                     ))}
//                 </View>
//             </MotiView>
//
//             {/* Alert Settings Button */}
//             <MotiView
//                 from={{ opacity: 0, translateY: 30 }}
//                 animate={{ opacity: 1, translateY: 0 }}
//                 transition={{ type: 'spring', delay: 1000 }}
//                 className="mb-20"
//             >
//                 <TouchableOpacity className="bg-primary-300 py-4 rounded-2xl items-center shadow-lg">
//                     <Text className="text-white font-bold text-lg">⚙️ Configure Storm Alerts</Text>
//                 </TouchableOpacity>
//             </MotiView>
//         </ScrollView>
//     );
// };
//
// export default StormTrackerScreen;



import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import { MotiView } from 'moti';
import { AnimatePresence, MotiText } from 'moti';
import icons from "@/constants/icons";

const storms = [
    { name: 'Cyclone Madi', category: 'Category 3', distance: 120, eta: '3h', maxWind: '150 km/h', progress: 75 },
    { name: 'Tropical Storm Nisha', category: 'Category 1', distance: 350, eta: '9h', maxWind: '95 km/h', progress: 40 },
];

const StormTrackerScreen = () => {
    // Check if any storm is nearby
    const stormNearby = storms.some(storm => storm.distance <= 150);

    return (
        <ScrollView className="px-5 py-4 bg-accent-100 flex-1">

            {/* 🚨 Danger Banner */}
            <AnimatePresence>
                {stormNearby && (
                    <MotiView
                        from={{ opacity: 0, translateY: -20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        exit={{ opacity: 0, translateY: -20 }}
                        transition={{ type: 'timing', duration: 500 }}
                        className="bg-red-500 py-3 mb-5 rounded-xl shadow-md"
                    >
                        <Text className="text-white text-center font-bold text-lg">⚠️ Storm Nearby! Stay Alert!</Text>
                    </MotiView>
                )}
            </AnimatePresence>

            {/* Map Section */}
            <MotiView
                from={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', duration: 800 }}
                className="bg-primary-50 rounded-2xl shadow-md p-4 mb-8"
            >
                <Text className="text-2xl font-extrabold text-primary-300 mb-4">🗺️ Storm Map</Text>

                <View className="h-64 rounded-2xl overflow-hidden">
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{ flex: 1 }}
                        initialRegion={{
                            latitude: 7.8731,
                            longitude: 80.7718,
                            latitudeDelta: 2.0,
                            longitudeDelta: 3.0,
                        }}
                        showsCompass
                        loadingEnabled
                        showsMyLocationButton
                        zoomControlEnabled
                    >
                        {/* Storm Markers */}
                        <Marker coordinate={{ latitude: 8.0, longitude: 81.0 }} title="Madi" pinColor="#EF4444">
                            <MotiView
                                from={{ scale: 1 }}
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ loop: true, type: 'timing', duration: 2000 }}
                                className="bg-red-500 rounded-full w-4 h-4 opacity-50"
                            />
                        </Marker>

                        <Marker coordinate={{ latitude: 7.5, longitude: 80.0 }} title="Nisha" pinColor="#FBBF24">
                            <MotiView
                                from={{ scale: 1 }}
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ loop: true, type: 'timing', duration: 2500 }}
                                className="bg-yellow-400 rounded-full w-4 h-4 opacity-50"
                            />
                        </Marker>

                        {/* Example Storm Path (Polyline) */}
                        <Polyline
                            coordinates={[
                                { latitude: 7.5, longitude: 80.0 },
                                { latitude: 7.7, longitude: 80.5 },
                                { latitude: 8.0, longitude: 81.0 },
                            ]}
                            strokeColor="#60A5FA"
                            strokeWidth={3}
                            lineDashPattern={[5, 5]}
                        />
                    </MapView>
                </View>
            </MotiView>

            {/* Active Storms List */}
            <MotiView
                from={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'timing', delay: 300, duration: 700 }}
                className="mb-10"
            >
                <Text className="text-2xl font-extrabold text-primary-300 mb-4">🌪️ Active Storms</Text>

                <View className="flex-col gap-4">
                    {storms.map((storm, index) => (
                        <MotiView
                            key={index}
                            from={{ opacity: 0, translateX: -30 }}
                            animate={{ opacity: 1, translateX: 0 }}
                            transition={{ type: 'spring', delay: 500 + index * 200 }}
                            className="bg-white p-5 rounded-2xl shadow-md"
                        >
                            <View className="flex-row justify-between items-center mb-2">
                                <Text className="text-lg font-bold text-black-300">{storm.name}</Text>
                                <Text className="text-sm bg-red-500 text-white px-2 py-1 rounded-full">
                                    {storm.category}
                                </Text>
                            </View>

                            <View className="flex-row justify-between mb-3">
                                <Text className="text-black-100">Distance: {storm.distance} km</Text>
                                <Text className="text-black-100">ETA: {storm.eta}</Text>
                                <Text className="text-black-100">Max Wind: {storm.maxWind}</Text>
                            </View>

                            {/* 🌀 Progress Meter */}
                            <View className="h-3 w-full bg-primary-100 rounded-full overflow-hidden">
                                <View
                                    className="h-3 bg-primary-300"
                                    style={{ width: `${storm.progress}%` }}
                                />
                            </View>

                            <Text className="text-xs text-black-100 mt-1">{storm.progress}% Impact Probability</Text>
                        </MotiView>
                    ))}
                </View>
            </MotiView>

            {/* Alert Settings Button */}
            <MotiView
                from={{ opacity: 0, translateY: 30 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', delay: 1000 }}
                className="mb-20"
            >
                <TouchableOpacity className="bg-primary-300 py-4 rounded-2xl items-center shadow-lg">
                    <Text className="text-white font-bold text-lg">⚙️ Configure Storm Alerts</Text>
                </TouchableOpacity>
            </MotiView>

        </ScrollView>
    );
};

export default StormTrackerScreen;
