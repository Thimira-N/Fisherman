import { View, Text, TextInput, Image, TouchableOpacity, FlatList, Animated } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import icons from "@/constants/icons";

const featuredListings = [
    { id: 1, species: 'Yellowfin Tuna', price: 'Rs. 1200/kg', image: icons.sunny },
    { id: 2, species: 'Mackerel', price: 'Rs. 850/kg', image: icons.sunny },
    { id: 3, species: 'Swordfish', price: 'Rs. 1400/kg', image: icons.sunny },
];

const categories = [
    { name: 'Tuna', icon: 'fish' },
    { name: 'Crab', icon: 'fish' },
    { name: 'Shrimp', icon: 'fish' },
    { name: 'Lobster', icon: 'fish' },
];

const sellers = [
    { id: 1, name: 'Kasun S.', rating: 4.8, species: 'Mackerel', price: 'Rs. 850/kg', quantity: '50 kg', location: 'Colombo', distance: '5km', image: icons.sunny },
    { id: 2, name: 'Dilshan T.', rating: 4.5, species: 'Yellowfin Tuna', price: 'Rs. 1200/kg', quantity: '30 kg', location: 'Negombo', distance: '20km', image: icons.sunny },
];

export default function BuyFishScreen() {
    const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
    const featuredRef = useRef<FlatList>(null);
    const scrollX = useRef(new Animated.Value(0)).current;

    // 🔥 Auto-scroll effect
    useEffect(() => {
        let position = 0;
        const interval = setInterval(() => {
            position = (position + 1) % featuredListings.length;
            featuredRef.current?.scrollToIndex({ index: position, animated: true });
        }, 3000); // scroll every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const renderHeader = () => (
        <View className="bg-white px-5 py-4">

            {/* Search Bar */}
            <View className="flex-row bg-primary-50 p-3 rounded-full items-center mb-6 shadow-md">
                <Ionicons name="search-outline" size={20} color="#9ca3af" />
                <TextInput placeholder="Search fish species..." className="flex-1 ml-2 text-black-200" />
            </View>

            {/* Featured Listings */}
            <View className="mb-6">
                <Text className="text-xl font-bold text-primary-300 mb-3">Featured</Text>
                <FlatList
                    data={featuredListings}
                    ref={featuredRef}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View className="bg-primary-50 rounded-2xl shadow-md overflow-hidden w-72 mr-4">
                            <Image source={item.image} className="h-40 w-full" resizeMode="cover" />
                            <View className="p-4">
                                <Text className="text-black-300 font-bold text-lg">{item.species}</Text>
                                <Text className="text-primary-300">{item.price}</Text>
                            </View>
                        </View>
                    )}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={16}
                />
            </View>

            {/* Categories */}
            <View className="mb-6">
                <Text className="text-xl font-bold text-primary-300 mb-3">Browse by Category</Text>
                <FlatList
                    data={categories}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item: cat }) => (
                        <TouchableOpacity className="bg-primary-50 p-4 rounded-2xl items-center w-24 mr-4 shadow-md">
                            <MaterialCommunityIcons name={cat.icon} size={30} color="#2563eb" />
                            <Text className="text-black-300 text-center mt-2">{cat.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            {/* Toggle View */}
            <TouchableOpacity
                onPress={() => setViewMode(viewMode === 'list' ? 'map' : 'list')}
                className="bg-primary-300 p-3 rounded-full flex-row items-center justify-center mb-6"
            >
                <Ionicons name={viewMode === 'list' ? 'map-outline' : 'list-outline'} size={20} color="#fff" />
                <Text className="text-white font-bold ml-2">{viewMode === 'list' ? 'Map View' : 'List View'}</Text>
            </TouchableOpacity>
        </View>
    );

    const renderSeller = ({ item: seller } : any ) => (
        <View className="bg-primary-50 rounded-2xl shadow-md overflow-hidden mx-5 mb-5">
            <Image source={seller.image} className="h-40 w-full" resizeMode="cover" />
            <View className="p-4">
                <View className="flex-row justify-between items-center mb-2">
                    <Text className="text-black-300 font-bold text-lg">{seller.species}</Text>
                    <Text className="text-primary-300">{seller.price}</Text>
                </View>
                <Text className="text-black-100 mb-1">{seller.quantity} available</Text>
                <Text className="text-black-100 mb-1">{seller.location} • {seller.distance} away</Text>
                <View className="flex-row gap-2 mt-2">
                    <TouchableOpacity className="bg-white px-4 py-2 rounded-full shadow">
                        <Text className="text-primary-300 font-bold">Contact Seller</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-primary-300 px-4 py-2 rounded-full shadow">
                        <Text className="text-white font-bold">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        viewMode === 'list' ? (
            <FlatList
                data={sellers}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={renderHeader}
                renderItem={renderSeller}
                contentContainerStyle={{ paddingBottom: 80 }}
                showsVerticalScrollIndicator={false}
            />
        ) : (
            <View className="flex-1 bg-white items-center justify-center">
                <Ionicons name="map" size={100} color="#93c5fd" />
                <Text className="text-primary-300 mt-4">Map View Coming Soon!</Text>
            </View>
        )
    );
}
