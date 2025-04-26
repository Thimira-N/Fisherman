import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { listingsData } from '@/constants/data';
import icons from '@/constants/icons';

interface TabItemProps {
    title: string;
    active: boolean;
    onPress: () => void;
    badgeCount?: number;
}

const TabItem = ({ title, active, onPress, badgeCount }: TabItemProps) => (
    <TouchableOpacity onPress={onPress} className={`px-4 py-2 ${active ? 'border-b-2 border-primary-300' : ''}`}>
        <View className="flex flex-row items-center gap-1">
            <Text className={`text-base font-rubik-bold ${active ? 'text-primary-300' : 'text-gray-400'}`}>
                {title}
            </Text>
            {badgeCount !== undefined && badgeCount > 0 && (
                <View className="bg-primary-300 rounded-full px-2">
                    <Text className="text-xs text-white">{badgeCount}</Text>
                </View>
            )}
        </View>
    </TouchableOpacity>
);

const ListingCard = ({ item }: { item: any }) => (
    <View className="bg-white rounded-2xl p-4 shadow-md mb-4">
        <View className="flex flex-row gap-4">
            <Image source={{ uri: item.image }} className="w-24 h-24 rounded-lg" />

            <View className="flex-1 flex flex-col justify-between">
                <View>
                    <Text className="text-lg font-rubik-bold">{item.species}</Text>
                    <Text className="text-sm text-gray-500">{item.quantity} Available</Text>
                    <Text className="text-base font-rubik-medium text-primary-300 mt-1">
                        ${item.price} (Market: ${item.marketPrice})
                    </Text>
                </View>

                <View className="flex flex-row justify-between items-center mt-3">
                    <Text className="text-xs text-gray-400">{item.postingDate}</Text>
                    <Text className="text-xs text-danger">{item.expiryCountdown}</Text>
                </View>
            </View>
        </View>

        {/* Quick Actions */}
        <View className="flex flex-row justify-between mt-4">
            <TouchableOpacity className="flex flex-row items-center gap-1">
                <Image source={icons.edit} className="size-5" />
                <Text className="text-sm font-rubik-bold text-primary-300">Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex flex-row items-center gap-1">
                <Image source={icons.check} className="size-5" />
                <Text className="text-sm font-rubik-bold text-green-500">Mark Sold</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex flex-row items-center gap-1">
                <Image source={icons.promote} className="size-5" />
                <Text className="text-sm font-rubik-bold text-orange-400">Promote</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex flex-row items-center gap-1">
                <Image source={icons.trash} className="size-5" />
                <Text className="text-sm font-rubik-bold text-danger">Remove</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const Sales = () => {
    const [activeTab, setActiveTab] = useState('Active');

    const tabs = [
        { title: 'Active', badgeCount: 4 },
        { title: 'Pending', badgeCount: 2 },
        { title: 'Completed', badgeCount: 10 },
        { title: 'Drafts', badgeCount: 1 },
    ];

    const filteredListings = listingsData.filter(item => item.status === activeTab);

    return (
        <SafeAreaView className="h-full bg-white">
            <View className="px-7 pt-5">
                <Text className="text-xl font-rubik-bold mb-5">My Listings</Text>

                {/* Tabs */}
                <View className="flex flex-row justify-around mb-5 border-b border-gray-200">
                    {tabs.map(tab => (
                        <TabItem
                            key={tab.title}
                            title={tab.title}
                            active={activeTab === tab.title}
                            badgeCount={tab.badgeCount}
                            onPress={() => setActiveTab(tab.title)}
                        />
                    ))}
                </View>

                {/* Listings */}
                <ScrollView showsVerticalScrollIndicator={false} className="h-full">
                    {filteredListings.map((item, index) => (
                        <ListingCard key={index} item={item} />
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default Sales;
