import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import icons from "@/constants/icons";
import { MotiView } from 'moti';

const dummyFishData = [
    { name: 'Yellowfin Tuna', price: 1200, trend: 'up', supply: 'high', image: icons.sunny },
    { name: 'Mackerel', price: 800, trend: 'down', supply: 'medium', image: icons.sunny },
    { name: 'Sardine', price: 450, trend: 'up', supply: 'low', image: icons.sunny },
];

export default function PriceDashboardScreen() {
    const [viewType, setViewType] = useState<'list' | 'grid'>('list');

    return (
        <ScrollView className="flex-1 bg-white px-5 py-4">

            {/* Search Bar with Smooth Animation */}
            <MotiView
                from={{ opacity: 0, translateY: -20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: "timing", duration: 800 }}
                className="flex-row items-center bg-gray-100 rounded-full px-4 py-2 mb-4"
            >
                <Ionicons name="search" size={20} color="#6b7280" />
                <TextInput placeholder="Search fish species..." className="flex-1 ml-2 text-gray-700" />
                <MaterialIcons name="filter-list" size={24} color="#6b7280" />
            </MotiView>

            {/* View Toggle with Smooth Transition */}
            <MotiView
                from={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 300, type: "timing", duration: 600 }}
                className="flex-row justify-end mb-4"
            >
                <TouchableOpacity onPress={() => setViewType('list')}>
                    <Ionicons name="list" size={24} color={viewType === 'list' ? '#2563eb' : '#9ca3af'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setViewType('grid')} className="ml-4">
                    <Ionicons name="grid" size={24} color={viewType === 'grid' ? '#2563eb' : '#9ca3af'} />
                </TouchableOpacity>
            </MotiView>

            {/* Fish List/Grid with Spicy Cards */}
            <View className={viewType === 'list' ? 'flex-col gap-4' : 'flex-row flex-wrap gap-4'}>
                {dummyFishData.map((fish, idx) => (
                    <MotiView
                        key={idx}
                        from={{ opacity: 0, translateY: 30 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ delay: 400 + idx * 200, type: 'timing' }}
                        className="p-5 rounded-3xl shadow-md mb-6 bg-white"
                        style={{ width: viewType === 'list' ? '100%' : '47%' }}
                    >
                        <View className="flex-row items-center gap-4">
                            <MotiView
                                from={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', damping: 10 }}
                                className="bg-primary-100 p-3 rounded-full"
                            >
                                <Image source={fish.image} className="w-12 h-12" resizeMode="contain" />
                            </MotiView>
                            <View className="flex-1">
                                <Text className="font-extrabold text-primary-300">{fish.name}</Text>
                                <Text className="text-black-300 text-sm">Avg: Rs. {fish.price}/kg</Text>
                            </View>
                            <View className="items-center">
                                {fish.trend === 'up' ? (
                                    <Ionicons name="arrow-up" size={20} color="green" />
                                ) : (
                                    <Ionicons name="arrow-down" size={20} color="red" />
                                )}
                                <Text className="text-xs text-black-100">{fish.supply}</Text>
                            </View>
                        </View>
                    </MotiView>
                ))}
            </View>

            {/* Future: Price History and Market Comparison Section */}
        </ScrollView>
    );
}
