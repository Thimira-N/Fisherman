import { View, Text, ScrollView, Image, TouchableOpacity, Switch } from 'react-native';
import { useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { MapPinIcon, AlertTriangleIcon } from 'lucide-react-native';
import icons from "@/constants/icons";

const hotspots = [
    { id: 1, name: 'Golden Bay', species: 'Tuna', distance: '12km', bestSeason: 'May - August', successRate: 4, coordinate: { latitude: 37.78825, longitude: -122.4324 } },
    { id: 2, name: 'Silver Shore', species: 'Salmon', distance: '8km', bestSeason: 'March - June', successRate: 5, coordinate: { latitude: 37.78925, longitude: -122.4354 } },
];

export default function LocationsScreen() {
    const [showWeather, setShowWeather] = useState(false);

    return (
        <View className="flex-1">
            {/* Map Section */}
            <MapView
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {/* User Boat Icon */}
                <Marker
                    coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                    title="You"
                    description="Current Location"
                    pinColor="#2563eb"
                />

                {/* Hotspots */}
                {hotspots.map((spot) => (
                    <Marker
                        key={spot.id}
                        coordinate={spot.coordinate}
                        title={spot.name}
                        description={`Species: ${spot.species}`}
                    >
                        <MapPinIcon color="#16a34a" size={30} />
                    </Marker>
                ))}

                {/* Restricted Zone Example */}
                <Marker
                    coordinate={{ latitude: 37.78725, longitude: -122.4314 }}
                    title="Restricted Area"
                    description="No Fishing Zone"
                >
                    <AlertTriangleIcon color="#f43f5e" size={30} />
                </Marker>
            </MapView>

            {/* Overlay - Weather toggle */}
            <View className="absolute top-5 right-5 bg-white p-2 rounded-xl shadow-md flex-row items-center">
                <Text className="text-sm mr-2 text-black-400">Weather</Text>
                <Switch
                    value={showWeather}
                    onValueChange={(val) => setShowWeather(val)}
                    thumbColor={showWeather ? "#2563eb" : "#9ca3af"}
                    trackColor={{ true: "#bfdbfe" }}
                />
            </View>

            {/* List View */}
            <View className="absolute bottom-0 left-0 right-0 p-4">
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="space-x-4">
                    {hotspots.map((spot) => (
                        <TouchableOpacity
                            key={spot.id}
                            className="bg-white w-60 rounded-2xl p-4 shadow-lg"
                        >
                            <Text className="text-lg font-bold text-primary-500 mb-1">{spot.name}</Text>
                            <Text className="text-black-300 mb-1">Species: {spot.species}</Text>
                            <Text className="text-black-300 mb-1">Distance: {spot.distance}</Text>
                            <Text className="text-black-300 mb-2">Best Season: {spot.bestSeason}</Text>
                            <View className="flex-row">
                                {Array.from({ length: spot.successRate }).map((_, idx) => (
                                    <Image
                                        key={idx}
                                        // source={require('@/assets/star.png')}
                                        source={icons.info}
                                        style={{ width: 16, height: 16, marginRight: 2 }}
                                    />
                                ))}
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Add New Hotspot */}
                <TouchableOpacity className="bg-primary-500 p-4 mt-4 rounded-full items-center shadow-lg">
                    <Text className="text-white font-bold">+ Add New Hotspot</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
