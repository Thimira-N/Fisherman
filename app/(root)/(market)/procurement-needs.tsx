import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
    return (
        <ScrollView className="flex-1 bg-white px-5 py-4">

            {/* Heading */}
            <Text className="text-xl font-bold text-primary-300 mb-4">Procurement Requests</Text>

            {/* Procurement Cards */}
            <View className="flex-col gap-5 mb-20">
                {procurementRequests.map((req) => (
                    <View key={req.id} className="bg-primary-50 rounded-2xl p-4 shadow-md">
                        {/* Buyer Info */}
                        <View className="flex-row items-center mb-4">
                            <Image source={req.profileImage} className="w-12 h-12 rounded-full" />
                            <View className="ml-3">
                                <Text className="text-black-300 font-bold">{req.buyerName}</Text>
                                <Text className="text-black-100 text-xs">{req.location}</Text>
                            </View>
                        </View>

                        {/* Species Details */}
                        <View className="mb-2">
                            <Text className="text-primary-300 font-bold text-lg">{req.species}</Text>
                            <Text className="text-black-200">{req.quantity} needed {req.timeframe}</Text>
                        </View>

                        {/* Price Offer */}
                        <View className="mb-2">
                            <Text className="text-black-100">Offered Price: <Text className="text-primary-300 font-bold">{req.priceOffer}</Text></Text>
                            <Text className="text-black-100">Market Rate: <Text className="text-black-300">{req.marketRate}</Text></Text>
                        </View>

                        {/* Quality Specs */}
                        <View className="mb-4">
                            <Text className="text-black-100">Quality Requirements: <Text className="text-black-300">{req.quality}</Text></Text>
                        </View>

                        {/* Mini Map View (Placeholder) */}
                        <View className="bg-primary-100 h-32 rounded-2xl mb-4 flex items-center justify-center">
                            <Ionicons name="map" size={50} color="#60a5fa" />
                            <Text className="text-primary-300 mt-2">Location Map</Text>
                        </View>

                        {/* Fulfill Request Button */}
                        <TouchableOpacity className="bg-primary-300 p-3 rounded-full flex-row items-center justify-center shadow">
                            <Ionicons name="checkmark-circle-outline" size={20} color="#fff" />
                            <Text className="text-white font-bold ml-2">Fulfill Request</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>

        </ScrollView>
    );
}
