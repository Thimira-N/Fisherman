import { View, Text, FlatList, Image, TouchableOpacity, Animated, Easing, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { Swipeable } from 'react-native-gesture-handler';
import { useRouter } from "expo-router";
import icons from "@/constants/icons";

const procurementRequests = [
    {
        id: 1,
        buyerName: 'Nuwan Perera',
        profileImage: icons.person,
        species: 'Shrimp',
        quantity: '100 kg',
        timeframe: 'within 7 days',
        priceOffer: 'Rs. 1100/kg',
        marketRate: 'Rs. 1000/kg',
        quality: 'Fresh, Size M',
        location: 'Galle',
    },
    {
        id: 2,
        buyerName: 'Ishara Jayasuriya',
        profileImage: icons.person,
        species: 'Yellowfin Tuna',
        quantity: '50 kg',
        timeframe: 'within 3 days',
        priceOffer: 'Rs. 1300/kg',
        marketRate: 'Rs. 1200/kg',
        quality: 'Grade A, Sashimi Quality',
        location: 'Negombo',
    },
];

export default function ProcurementNeedsScreen() {
    const router = useRouter();

    const animatedValue = useRef(new Animated.Value(0)).current;
    const [fulfillingId, setFulfillingId] = useState<number | null>(null);

    useEffect(() => {
        Animated.spring(animatedValue, {
            toValue: 1,
            useNativeDriver: true,
            friction: 6,
            tension: 100,
        }).start();
    }, []);

    const handleFulfill = (id: number) => {
        setFulfillingId(id);

        setTimeout(() => {
            setFulfillingId(null);
            router.push("/confirmation");
        }, 2000);
    };

    const renderRightActions = (id: number) => {
        return (
            <TouchableOpacity
                onPress={() => handleFulfill(id)}
                className="bg-primary-300 justify-center items-center w-28 h-full rounded-tr-3xl rounded-br-3xl"
            >
                <Ionicons name="checkmark-done-outline" size={28} color="#fff" />
                <Text className="text-white mt-2 font-bold">Fulfill</Text>
            </TouchableOpacity>
        );
    };

    const renderProcurementCard = ({ item: req }) => (
        <Swipeable
            renderRightActions={() => renderRightActions(req.id)}
            overshootRight={false}
        >
            <Animated.View
                style={{
                    transform: [{ scale: animatedValue }],
                }}
                className="bg-primary-50 rounded-3xl p-5 shadow-lg mb-6"
            >
                {/* Buyer Info */}
                <View className="flex-row items-center mb-4">
                    <Image source={req.profileImage} className="w-14 h-14 rounded-full" />
                    <View className="ml-4">
                        <Text className="text-black-300 font-bold text-base">{req.buyerName}</Text>
                        <Text className="text-black-100 text-xs">{req.location}</Text>
                    </View>
                </View>

                {/* Species Details */}
                <View className="mb-3">
                    <Text className="text-primary-300 font-extrabold text-lg">{req.species}</Text>
                    <Text className="text-black-200">{req.quantity} needed {req.timeframe}</Text>
                </View>

                {/* Price Offer */}
                <View className="flex-row justify-between mb-3">
                    <View>
                        <Text className="text-black-100">Offered Price</Text>
                        <Text className="text-primary-300 font-bold">{req.priceOffer}</Text>
                    </View>
                    <View>
                        <Text className="text-black-100">Market Rate</Text>
                        <Text className="text-black-300 font-bold">{req.marketRate}</Text>
                    </View>
                </View>

                {/* Quality Specs */}
                <View className="mb-4">
                    <Text className="text-black-100">Quality: <Text className="text-black-300">{req.quality}</Text></Text>
                </View>

                {/* Mini Map View */}
                <View className="bg-primary-100 h-32 rounded-2xl mb-5 flex items-center justify-center shadow-sm">
                    <Ionicons name="location-outline" size={40} color="#3b82f6" />
                    <Text className="text-primary-300 mt-2 text-xs">View on Map</Text>
                </View>

                {/* Fulfill Loading State */}
                {fulfillingId === req.id ? (
                    <View className="flex-row justify-center items-center">
                        <ActivityIndicator size="small" color="#60a5fa" />
                        <Text className="ml-2 text-primary-300 font-semibold">Processing...</Text>
                    </View>
                ) : null}
            </Animated.View>
        </Swipeable>
    );

    return (
        <View className="flex-1 bg-white px-5 pt-6">
            {/* Heading */}
            <Text className="text-2xl font-extrabold text-primary-300 mb-6">Procurement Requests</Text>

            {/* Procurement List */}
            <FlatList
                data={procurementRequests}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderProcurementCard}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
        </View>
    );
}
