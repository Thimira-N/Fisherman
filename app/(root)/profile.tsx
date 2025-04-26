import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGlobalContext } from '@/lib/global-provider';
import icons from '@/constants/icons';
import images from '@/constants/images';

interface InfoRowProps {
    label: string;
    value: string;
    onPress?: () => void;
}

const InfoRow = ({ label, value, onPress }: InfoRowProps) => (
    <View className="flex flex-row justify-between items-center py-3 border-b border-gray-200">
        <Text className="text-base text-gray-500">{label}</Text>
        <TouchableOpacity disabled={!onPress} onPress={onPress}>
            <Text className="text-base font-rubik-bold text-black">{value}</Text>
        </TouchableOpacity>
    </View>
);

const Profile = () => {
    const { user } = useGlobalContext();

    // const openMap = () => {
    //     const address = encodeURIComponent(user?.address || '');
    //     Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${address}`);
    // };

    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerClassName="pb-32 px-7"
            >
                {/* Header */}
                <View className="flex flex-row items-center justify-between mt-5">
                    <Text className="text-xl font-rubik-bold">My Profile</Text>
                    <Image source={icons.bell} className="size-5" />
                </View>

                {/* Profile Photo Section */}
                <View className="flex-row justify-center flex mt-5">
                    <View className="flex flex-col items-center relative mt-5">
                        <Image
                            source={{ uri: user?.avatar || images.defaultAvatar }}
                            className="size-44 rounded-full"
                        />
                        <TouchableOpacity className="absolute bottom-11 right-2">
                            <Image source={icons.edit} className="size-9" />
                        </TouchableOpacity>

                        <Text className="text-2xl font-rubik-bold mt-2">{user?.name || 'Thimira'}</Text>
                        <Text className="text-gray-500 font-rubik-medium text-sm">ID: {user?.idNumber || '0000 0000 0000'}</Text>

                        {/* Verification Badge */}
                        <View className="flex flex-row items-center gap-2 mt-1">
                            <Image source={icons.verified} className="size-4" />
                            <Text className="text-primary-300 font-rubik-bold text-sm">
                                {user?.verified ? 'Verified' : 'Pending Verification'}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Personal Information */}
                <View className="flex flex-col mt-10">
                    <Text className="text-lg font-rubik-bold mb-3">Personal Information</Text>

                    {/*<InfoRow label="Location" value={user?.address || "Add address"} onPress={openMap} />*/}
                    <InfoRow label="Location" value={user?.address || "Add address"} />
                    <InfoRow label="Phone" value={user?.phone || "Add phone"} />
                    <InfoRow label="Email" value={user?.email || "Add email"} />
                    <InfoRow label="Member Since" value={user?.memberSince || "N/A"} />
                    <InfoRow label="Activity Level" value={user?.activityLevel || "Inactive"} />
                </View>

                {/* Vessel & Credentials */}
                <View className="flex flex-col mt-10">
                    <Text className="text-lg font-rubik-bold mb-3">Vessel Information</Text>
                    <InfoRow label="Vessel Name" value={user?.vesselName || "Add vessel"} />
                    <InfoRow label="Registration Status" value={user?.vesselStatus || "Not Registered"} />
                </View>

                <View className="flex flex-col mt-10">
                    <Text className="text-lg font-rubik-bold mb-3">Credentials</Text>
                    <InfoRow label="License Expiry" value={user?.licenseExpiry || "No License"} />
                    <InfoRow label="Certifications" value={user?.certifications?.join(', ') || "None"} />
                    <InfoRow label="Training Completed" value={user?.trainingProgress || "0%"} />
                </View>

                {/* Statistics */}
                <View className="flex flex-col mt-10">
                    <Text className="text-lg font-rubik-bold mb-3">Statistics</Text>
                    <InfoRow label="Activity Level" value={user?.activityVisualization || "No Data"} />
                    <InfoRow label="Transactions" value={user?.transactionHighlights || "0"} />
                    <InfoRow label="Community Badges" value={user?.badges?.join(', ') || "None"} />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;
