import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { MotiView } from 'moti';

export default function SellFishScreen() {
    const [activeTab, setActiveTab] = useState<'active' | 'pending' | 'sold'>('active');
    const [addingNew, setAddingNew] = useState(false);

    const sampleListings = [
        { id: 1, species: 'Mackerel', quantity: '50 kg', price: 'Rs. 850/kg', status: 'active' },
        { id: 2, species: 'Yellowfin Tuna', quantity: '30 kg', price: 'Rs. 1200/kg', status: 'pending' },
    ];

    return (
        <ScrollView className="flex-1 bg-gray-50 px-5 py-4">

            {/* Add New Listing Button */}
            {!addingNew && (
                <TouchableOpacity
                    onPress={() => setAddingNew(true)}
                    className="bg-primary-300 p-4 rounded-full flex-row items-center justify-center mb-6 shadow-2xl"
                >
                    <Ionicons name="add-circle-outline" size={26} color="#fff" />
                    <Text className="text-white font-bold text-lg ml-2">Add New Listing</Text>
                </TouchableOpacity>
            )}

            {/* Add New Listing Form */}
            {addingNew && (
                <MotiView
                    from={{ opacity: 0, translateY: 20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ type: "timing", duration: 700 }}
                    className="bg-white p-6 rounded-3xl shadow-2xl mb-6"
                >
                    <Text className="text-primary-500 font-extrabold text-2xl mb-5">New Fish Listing</Text>

                    {/* Species */}
                    <TextInput
                        placeholder="Species (e.g., Tuna)"
                        className="bg-gray-100 p-4 rounded-xl mb-4 text-black"
                    />

                    {/* Quantity */}
                    <TextInput
                        placeholder="Quantity (kg)"
                        keyboardType="numeric"
                        className="bg-gray-100 p-4 rounded-xl mb-4 text-black"
                    />

                    {/* Price */}
                    <TextInput
                        placeholder="Price per kg (Rs.)"
                        keyboardType="numeric"
                        className="bg-gray-100 p-4 rounded-xl mb-4 text-black"
                    />

                    {/* Freshness */}
                    <View className="flex-row items-center gap-2 mb-4">
                        <Text className="text-gray-600">Freshness:</Text>
                        <MaterialCommunityIcons name="fish" size={24} color="#60a5fa" />
                        <MaterialCommunityIcons name="fish" size={24} color="#60a5fa" />
                        <MaterialCommunityIcons name="fish" size={24} color="#d1d5db" />
                    </View>

                    {/* Catch Date */}
                    <TouchableOpacity className="bg-gray-100 p-4 rounded-xl mb-4">
                        <Text className="text-gray-600">Select Catch Date</Text>
                    </TouchableOpacity>

                    {/* Location */}
                    <TouchableOpacity className="bg-gray-100 p-4 rounded-xl mb-4">
                        <Text className="text-gray-600">Select Location</Text>
                    </TouchableOpacity>

                    {/* Upload Photo */}
                    <TouchableOpacity className="bg-white border-2 border-dashed border-primary-500 p-6 rounded-xl items-center justify-center mb-5 shadow">
                        <Ionicons name="camera-outline" size={32} color="#60a5fa" />
                        <Text className="text-primary-500 mt-2 font-semibold">Upload Photo</Text>
                    </TouchableOpacity>

                    {/* Submit */}
                    <TouchableOpacity className="bg-primary-300 p-4 rounded-full items-center shadow-xl mb-3">
                        <Text className="text-white font-bold text-lg">Submit Listing</Text>
                    </TouchableOpacity>

                    {/* Cancel */}
                    <TouchableOpacity onPress={() => setAddingNew(false)} className="items-center">
                        <Text className="text-primary-300 font-rubik-bold">Cancel</Text>
                    </TouchableOpacity>
                </MotiView>
            )}

            {/* Tabs */}
            <View className="flex-row justify-around mb-6">
                {['active', 'pending', 'sold'].map((status) => (
                    <TouchableOpacity key={status} onPress={() => setActiveTab(status as any)}>
                        <Text className={activeTab === status ? 'text-primary-500 font-extrabold' : 'text-gray-500 font-semibold'}>
                            {status.toUpperCase()}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Listings */}
            <View className="flex-col gap-4">
                {sampleListings
                    .filter((item) => item.status === activeTab)
                    .map((listing, index) => (
                        <MotiView
                            key={listing.id}
                            from={{ opacity: 0, translateY: 15 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ delay: 300 + index * 200, type: 'timing' }}
                            className="bg-white p-5 rounded-2xl shadow-lg flex-row justify-between items-center"
                        >
                            <View>
                                <Text className="text-primary-500 font-bold text-lg">{listing.species}</Text>
                                <Text className="text-gray-700">{listing.quantity}</Text>
                                <Text className="text-gray-500">{listing.price}</Text>
                            </View>

                            <View className="flex-row gap-3">
                                <TouchableOpacity className="bg-gray-100 p-3 rounded-full shadow-md">
                                    <Ionicons name="pencil" size={20} color="#2563eb" />
                                </TouchableOpacity>
                                <TouchableOpacity className="bg-gray-100 p-3 rounded-full shadow-md">
                                    <Ionicons name="trash" size={20} color="#ef4444" />
                                </TouchableOpacity>
                            </View>
                        </MotiView>
                    ))}
            </View>

        </ScrollView>
    );
}
