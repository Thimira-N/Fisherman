import { View, Text, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';

export default function SellFishScreen() {
    const [activeTab, setActiveTab] = useState<'active' | 'pending' | 'sold'>('active');
    const [addingNew, setAddingNew] = useState(false);

    const sampleListings = [
        { id: 1, species: 'Mackerel', quantity: '50 kg', price: 'Rs. 850/kg', status: 'active' },
        { id: 2, species: 'Yellowfin Tuna', quantity: '30 kg', price: 'Rs. 1200/kg', status: 'pending' },
    ];

    return (
        <ScrollView className="flex-1 bg-white px-5 py-4">
            {/* Add New Listing Button */}
            {!addingNew && (
                <TouchableOpacity
                    onPress={() => setAddingNew(true)}
                    className="bg-primary-300 p-4 rounded-full flex-row items-center justify-center mb-6 shadow-lg"
                >
                    <Ionicons name="add-circle-outline" size={24} color="#fff" />
                    <Text className="text-white font-bold text-lg ml-2">Add New Listing</Text>
                </TouchableOpacity>
            )}

            {/* Add New Listing Form */}
            {addingNew && (
                <View className="bg-primary-50 p-4 rounded-2xl shadow-lg mb-6">
                    <Text className="text-primary-300 font-bold text-xl mb-4">New Fish Listing</Text>

                    {/* Species Selection */}
                    <TextInput placeholder="Species (e.g., Tuna)" className="bg-white p-3 rounded-xl mb-3 text-black-200" />

                    {/* Quantity Input */}
                    <TextInput placeholder="Quantity (kg)" keyboardType="numeric" className="bg-white p-3 rounded-xl mb-3 text-black-200" />

                    {/* Price Input */}
                    <TextInput placeholder="Price per kg (Rs.)" keyboardType="numeric" className="bg-white p-3 rounded-xl mb-3 text-black-200" />

                    {/* Quality/Freshness Rating */}
                    <View className="flex-row items-center gap-2 mb-3">
                        <Text className="text-black-300">Freshness:</Text>
                        <MaterialCommunityIcons name="fish" size={24} color="#60a5fa" />
                        <MaterialCommunityIcons name="fish" size={24} color="#60a5fa" />
                        <MaterialCommunityIcons name="fish" size={24} color="#d1d5db" />
                    </View>

                    {/* Catch Date Picker (Dummy now) */}
                    <TouchableOpacity className="bg-white p-3 rounded-xl mb-3">
                        <Text className="text-black-200">Select Catch Date</Text>
                    </TouchableOpacity>

                    {/* Location Picker (Dummy now) */}
                    <TouchableOpacity className="bg-white p-3 rounded-xl mb-3">
                        <Text className="text-black-200">Select Location</Text>
                    </TouchableOpacity>

                    {/* Upload Photo Section */}
                    <TouchableOpacity className="bg-white border-2 border-dashed border-primary-300 p-6 rounded-xl items-center justify-center mb-4">
                        <Ionicons name="camera-outline" size={32} color="#60a5fa" />
                        <Text className="text-primary-300 mt-2">Upload Photo</Text>
                    </TouchableOpacity>

                    {/* Submit Button */}
                    <TouchableOpacity className="bg-primary-300 p-3 rounded-full items-center">
                        <Text className="text-white font-bold text-lg">Submit Listing</Text>
                    </TouchableOpacity>

                    {/* Cancel */}
                    <TouchableOpacity onPress={() => setAddingNew(false)} className="mt-3 items-center">
                        <Text className="text-primary-300 font-bold">Cancel</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Status Tabs */}
            <View className="flex-row justify-around mb-5">
                {['active', 'pending', 'sold'].map((status) => (
                    <TouchableOpacity key={status} onPress={() => setActiveTab(status as any)}>
                        <Text className={activeTab === status ? 'text-primary-300 font-bold' : 'text-black-200'}>{status.toUpperCase()}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Listings Cards */}
            <View className="flex-col gap-4">
                {sampleListings
                    .filter((item) => item.status === activeTab)
                    .map((listing) => (
                        <View key={listing.id} className="bg-primary-50 p-4 rounded-2xl flex-row justify-between items-center shadow-md">
                            <View className="flex-col">
                                <Text className="font-bold text-primary-300">{listing.species}</Text>
                                <Text className="text-black-300">{listing.quantity}</Text>
                                <Text className="text-black-100">{listing.price}</Text>
                            </View>
                            <View className="flex-row gap-3">
                                <TouchableOpacity className="bg-white p-2 rounded-full shadow">
                                    <Ionicons name="pencil" size={20} color="#2563eb" />
                                </TouchableOpacity>
                                <TouchableOpacity className="bg-white p-2 rounded-full shadow">
                                    <Ionicons name="trash" size={20} color="#ef4444" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
            </View>
        </ScrollView>
    );
}
