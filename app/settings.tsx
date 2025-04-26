import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constants/icons';
// import { useGlobalContext } from '@/lib/global-provider';
// import { logout } from '@/lib/appwrite';

interface SettingsItemProps {
    icon: any;
    title: string;
    description?: string;
    onPress?: () => void;
    showArrow?: boolean;
}

const SettingsItem = ({ icon, title, description, onPress, showArrow = true }: SettingsItemProps) => (
    <TouchableOpacity onPress={onPress} className="flex flex-row items-center justify-between py-4">
        <View className="flex flex-row items-center gap-3">
            <Image source={icon} className="size-6" />
            <View>
                <Text className="text-lg font-rubik-bold text-black-300">{title}</Text>
                {description && (
                    <Text className="text-sm text-gray-400">{description}</Text>
                )}
            </View>
        </View>
        {showArrow && <Image source={icons.rightArrow} className="size-5" />}
    </TouchableOpacity>
);

const Settings = () => {
    // const { refetch } = useGlobalContext();

    // const handleLogout = async () => {
    //     const result = await logout();
    //     if (result) {
    //         Alert.alert('Logged out', 'You have been logged out successfully.');
    //         refetch();
    //     } else {
    //         Alert.alert('Error', 'Failed to log out.');
    //     }
    // };

    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName="pb-32 px-7">
                <View className="mt-5 mb-7">
                    <Text className="text-2xl font-rubik-bold">Settings</Text>
                </View>

                {/* Account Settings */}
                <View className="mb-5">
                    <Text className="text-base font-rubik-medium text-gray-500 mb-3">Account Settings</Text>
                    <SettingsItem icon={icons.password} title="Change Password" description="Improve your account security" />
                    <SettingsItem icon={icons.privacy} title="Privacy Settings" description="Manage your privacy permissions" />
                    <SettingsItem icon={icons.language} title="Language" description="Select your language" />
                </View>

                {/* App Preferences */}
                <View className="mb-5 border-t border-primary-200 pt-5">
                    <Text className="text-base font-rubik-medium text-gray-500 mb-3">App Preferences</Text>
                    <SettingsItem icon={icons.theme} title="Theme" description="Light, Dark, or High Contrast" />
                    <SettingsItem icon={icons.fontSize} title="Font Size" description="Adjust text size" />
                    <SettingsItem icon={icons.dataUsage} title="Data Usage" description="Optimize mobile data" />
                </View>

                {/* Notification Settings */}
                <View className="mb-5 border-t border-primary-200 pt-5">
                    <Text className="text-base font-rubik-medium text-gray-500 mb-3">Notifications</Text>
                    <SettingsItem icon={icons.weather} title="Weather Alerts" description="Manage severe weather updates" />
                    <SettingsItem icon={icons.marketPrice} title="Market Price Alerts" description="Get notified about price changes" />
                    <SettingsItem icon={icons.message} title="Messages" description="New inquiry notifications" />
                    <SettingsItem icon={icons.newsUpdate} title="News Updates" description="Select categories to follow" />
                </View>

                {/* Offline Mode */}
                <View className="mb-5 border-t border-primary-200 pt-5">
                    <Text className="text-base font-rubik-medium text-gray-500 mb-3">Offline Mode</Text>
                    <SettingsItem icon={icons.contentCaching} title="Content Caching" description="Save important data offline" />
                    <SettingsItem icon={icons.storageUsage} title="Storage Usage" description="Manage app storage" />
                    <SettingsItem icon={icons.clearCache} title="Clear Cache" description="Free up space" />
                </View>

                {/* Battery Optimization */}
                <View className="mb-5 border-t border-primary-200 pt-5">
                    <Text className="text-base font-rubik-medium text-gray-500 mb-3">Battery Optimization</Text>
                    <SettingsItem icon={icons.backgroundActivity} title="Background Activity" description="Manage app refresh frequency" />
                    <SettingsItem icon={icons.locationSettings} title="Location Settings" description="Adjust location tracking" />
                    <SettingsItem icon={icons.sync} title="Sync Schedule" description="Optimize background sync" />
                </View>

                {/* Logout */}
                <View className="border-t border-primary-200 pt-5 mt-5">
                    <SettingsItem
                        icon={icons.logout}
                        title="Logout"
                        // onPress={handleLogout}
                        showArrow={false}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Settings;
