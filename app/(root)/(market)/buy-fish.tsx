// import { View, Text, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
// import { Ionicons, MaterialIcons } from '@expo/vector-icons';
// import { useState } from 'react';
// import icons from "@/constants/icons";
//
// const featuredListings = [
//     { id: 1, species: 'Yellowfin Tuna', price: 'Rs. 1200/kg', image: icons.sunny },
//     { id: 2, species: 'Mackerel', price: 'Rs. 850/kg', image: icons.sunny },
// ];
//
// const categories = [
//     { name: 'Tuna', icon: icons.boat },
//     { name: 'Crab', icon: icons.boat },
//     { name: 'Shrimp', icon: icons.boat },
//     { name: 'Lobster', icon: icons.boat },
// ];
//
// const sellers = [
//     { id: 1, name: 'Kasun S.', rating: 4.8, species: 'Mackerel', price: 'Rs. 850/kg', quantity: '50 kg', location: 'Colombo', distance: '5km', image: icons.sunny },
//     { id: 2, name: 'Dilshan T.', rating: 4.5, species: 'Yellowfin Tuna', price: 'Rs. 1200/kg', quantity: '30 kg', location: 'Negombo', distance: '20km', image: icons.sunny },
// ];
//
// export default function BuyFishScreen() {
//     const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
//
//     return (
//         <ScrollView className="flex-1 bg-white px-5 py-4">
//
//             {/* Search Bar */}
//             <View className="flex-row bg-primary-50 p-3 rounded-full items-center mb-6 shadow-md">
//                 <Ionicons name="search-outline" size={20} color="#9ca3af" />
//                 <TextInput placeholder="Search fish species..." className="flex-1 ml-2 text-black-200" />
//             </View>
//
//             {/* Featured Listings Carousel */}
//             <View className="mb-6">
//                 <Text className="text-xl font-bold text-primary-300 mb-3">Featured</Text>
//                 <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-4">
//                     {featuredListings.map((item) => (
//                         <View key={item.id} className="bg-primary-50 rounded-2xl shadow-md overflow-hidden w-48">
//                             <Image source={item.image} className="h-32 w-full" resizeMode="cover" />
//                             <View className="p-3">
//                                 <Text className="text-black-300 font-bold">{item.species}</Text>
//                                 <Text className="text-primary-300">{item.price}</Text>
//                             </View>
//                         </View>
//                     ))}
//                 </ScrollView>
//             </View>
//
//             {/* Browse by Categories */}
//             <View className="mb-6">
//                 <Text className="text-xl font-bold text-primary-300 mb-3">Browse by Category</Text>
//                 <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-4">
//                     {categories.map((categories, index) => (
//                         <TouchableOpacity key={index} className="bg-primary-50 p-4 rounded-2xl items-center w-24 shadow-md">
//                             <MaterialIcons name={categories.icon} size={30} color="#2563eb" />
//                             <Text className="text-black-300 mt-2 text-center">{categories.name}</Text>
//                         </TouchableOpacity>
//                     ))}
//                 </ScrollView>
//             </View>
//
//             {/* Toggle Map/List View */}
//             <TouchableOpacity
//                 onPress={() => setViewMode(viewMode === 'list' ? 'map' : 'list')}
//                 className="bg-primary-300 p-3 rounded-full flex-row items-center justify-center mb-6"
//             >
//                 <Ionicons name={viewMode === 'list' ? 'map-outline' : 'list-outline'} size={20} color="#fff" />
//                 <Text className="text-white font-bold ml-2">{viewMode === 'list' ? 'Map View' : 'List View'}</Text>
//             </TouchableOpacity>
//
//             {/* Seller Listings */}
//             {viewMode === 'list' && (
//                 <View className="flex-col gap-5 mb-20">
//                     {sellers.map((seller) => (
//                         <View key={seller.id} className="bg-primary-50 rounded-2xl shadow-md overflow-hidden">
//                             <Image source={seller.image} className="h-40 w-full" resizeMode="cover" />
//                             <View className="p-4">
//                                 <View className="flex-row justify-between items-center mb-2">
//                                     <Text className="text-black-300 font-bold text-lg">{seller.species}</Text>
//                                     <Text className="text-primary-300">{seller.price}</Text>
//                                 </View>
//                                 <Text className="text-black-100 mb-1">{seller.quantity} available</Text>
//                                 <Text className="text-black-100 mb-1">{seller.location} • {seller.distance} away</Text>
//                                 <View className="flex-row gap-2 mt-2">
//                                     <TouchableOpacity className="bg-white px-4 py-2 rounded-full shadow">
//                                         <Text className="text-primary-300 font-bold">Contact Seller</Text>
//                                     </TouchableOpacity>
//                                     <TouchableOpacity className="bg-primary-300 px-4 py-2 rounded-full shadow">
//                                         <Text className="text-white font-bold">Place Order</Text>
//                                     </TouchableOpacity>
//                                 </View>
//                             </View>
//                         </View>
//                     ))}
//                 </View>
//             )}
//
//             {/* Map View (Dummy for now) */}
//             {viewMode === 'map' && (
//                 <View className="h-96 bg-primary-50 rounded-2xl flex items-center justify-center">
//                     <Ionicons name="map" size={100} color="#93c5fd" />
//                     <Text className="text-primary-300 mt-4">Map View Coming Soon!</Text>
//                 </View>
//             )}
//         </ScrollView>
//     );
// }


import {View, Text} from 'react-native'
import React from 'react'

const BuyFish = () => {
    return (
        <View>
            <Text>BuyFish</Text>
        </View>
    )
}
export default BuyFish

