import { View, Text, ScrollView, Image, TouchableOpacity, Switch } from 'react-native';
import { useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { MapPinIcon, AlertTriangleIcon } from 'lucide-react-native';
import icons from "@/constants/icons";

const hotspots = [
    {
        id: 1,
        name: 'Negombo Lagoon',
        species: 'Tuna, Mackerel',
        distance: '10km',
        bestSeason: 'March - June',
        successRate: 4,
        coordinate: { latitude: 7.2092, longitude: 79.9750 }
    },
    {
        id: 2,
        name: 'Mirissa Beach',
        species: 'Blue Marlin, Sailfish',
        distance: '15km',
        bestSeason: 'November - April',
        successRate: 5,
        coordinate: { latitude: 5.9492, longitude: 80.4330 }
    },
    {
        id: 3,
        name: 'Kalpitiya',
        species: 'Tuna, Grouper, Snapper',
        distance: '20km',
        bestSeason: 'October - April',
        successRate: 4,
        coordinate: { latitude: 9.5921, longitude: 79.9681 }
    },
    {
        id: 4,
        name: 'Hikkaduwa Coral Reef',
        species: 'Barracuda, Snapper, Grouper',
        distance: '12km',
        bestSeason: 'January - March',
        successRate: 4,
        coordinate: { latitude: 6.1420, longitude: 80.1055 }
    },
    {
        id: 5,
        name: 'Trincomalee Bay',
        species: 'Sailfish, Yellowfin Tuna',
        distance: '25km',
        bestSeason: 'March - July',
        successRate: 5,
        coordinate: { latitude: 8.5743, longitude: 81.2276 }
    },
    {
        id: 6,
        name: 'Galle Harbor',
        species: 'Snapper, Tuna, Marlin',
        distance: '7km',
        bestSeason: 'December - March',
        successRate: 4,
        coordinate: { latitude: 6.0531, longitude: 80.2205 }
    },
    {
        id: 7,
        name: 'Jaffna Lagoon',
        species: 'Mullet, Catfish, Shrimp',
        distance: '30km',
        bestSeason: 'April - June',
        successRate: 3,
        coordinate: { latitude: 9.6652, longitude: 80.0363 }
    },
    {
        id: 8,
        name: 'Batticaloa Lagoon',
        species: 'Snapper, Grouper, Mackerel',
        distance: '18km',
        bestSeason: 'October - February',
        successRate: 4,
        coordinate: { latitude: 7.7107, longitude: 81.7015 }
    },
    {
        id: 9,
        name: 'Puttalam Lagoon',
        species: 'Mullet, Grouper, Snapper',
        distance: '10km',
        bestSeason: 'January - April',
        successRate: 4,
        coordinate: { latitude: 8.0331, longitude: 79.8042 }
    },
    {
        id: 10,
        name: 'Weligama Bay',
        species: 'Tuna, Marlin, Barracuda',
        distance: '13km',
        bestSeason: 'November - March',
        successRate: 5,
        coordinate: { latitude: 5.9787, longitude: 80.2162 }
    }
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
                    latitude: 7.8731,  // Latitude for Sri Lanka
                    longitude: 80.7718, // Longitude for Sri Lanka
                    latitudeDelta: 0.0922, // Adjust delta for zoom level
                    longitudeDelta: 0.0421, // Adjust delta for zoom level
                }}
            >
                {/* User Boat Icon */}
                <Marker
                    coordinate={{ latitude: 7.8731, longitude: 80.7718 }} // Example coordinates for Sri Lanka
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
                    coordinate={{ latitude: 6.9271, longitude: 79.8612 }} // Coordinates for a potential restricted area in Sri Lanka (e.g., Colombo area)
                    title="Restricted Area"
                    description="No Fishing Zone - Protecting Marine Life"
                    pinColor="#ff0000" // Red pin to indicate a restricted area
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
