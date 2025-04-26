import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constants/icons';
import WeatherCard from '@/components/WeatherCard';
import NewsTicker from '@/components/NewsTicker';
import ProcurementCard from '@/components/ProcurementCard';
import QuickAction from '@/components/QuickAction';
import MarketCard from '@/components/MarketCard';
import {Link} from "expo-router";

const Home = () => {
    const loading = false;

    const user = { name: 'Kasun', avatar: 'https://your-avatar-url.com' };

    // Just rendering placeholders instead of real data
    const dummyQuickActions = new Array(4).fill(null).map((_, index) => ({ id: index.toString() }));
    const dummyMarketData = new Array(5).fill(null).map((_, index) => ({ id: index.toString() }));

    return (
        <SafeAreaView className="bg-white h-full">
            <FlatList
                data={dummyQuickActions}
                keyExtractor={(item) => item.id}
                numColumns={4}
                contentContainerStyle={{ paddingBottom: 100 }}
                columnWrapperStyle={{ gap: 12, paddingHorizontal: 20 }}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View className="px-5">
                        {/* --- Profile Header --- */}
                        <View className="flex-row justify-between items-center mt-5">
                            <View className="flex-row items-center">
                                <Image source={{ uri: user.avatar }} className="size-12 rounded-full" />
                                <View className="ml-2">
                                    <Text className="text-xs text-black-100">Good Morning</Text>
                                    <Text className="text-base font-semibold text-black-300">{user.name}</Text>
                                </View>
                            </View>
                            <Image source={icons.bell} className="size-6" />
                        </View>

                        {/* --- Weather Card --- */}
                        <View className="mt-5">
                            <WeatherCard />
                        </View>

                        {/* --- Market Prices --- */}
                        <View className="mt-6">
                            <View className="flex-row justify-between items-center mb-2">
                                <Text className="text-xl font-bold text-black-300">Market Prices</Text>
                                <TouchableOpacity>
                                    <Text className="text-base font-bold text-primary-300">See All</Text>
                                </TouchableOpacity>
                            </View>

                            {loading ? (
                                <ActivityIndicator size="large" className="text-primary-300" />
                            ) : (
                                <FlatList
                                    data={dummyMarketData}
                                    renderItem={() => <MarketCard />}
                                    keyExtractor={(item) => item.id}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{ gap: 16 }}
                                />
                            )}
                        </View>

                        {/* --- News Ticker --- */}
                        <View className="mt-6">
                            <NewsTicker />
                        </View>

                        {/* --- Procurement --- */}
                        <View className="mt-6">
                            <Text className="text-xl font-bold text-black-300 mb-2">Procurement</Text>
                            <ProcurementCard />
                        </View>

                        {/* --- Quick Actions Title --- */}
                        <View className="mt-6 mb-2">
                            <Text className="text-xl font-bold text-black-300">Quick Actions</Text>
                        </View>

                        <View className="flex-1 justify-center items-center">
                            <Link href="/welcome" className="text-3xl text-blue-500 font-rubik-bold">WELCOME</Link>
                            <Link href="/sign-in" className="text-3xl text-blue-500 font-rubik-bold">SIGNIN</Link>
                            <Link href="/register" className="text-3xl text-blue-500 font-rubik-bold">REGISTER</Link>
                            <Link href="/help" className="text-3xl text-blue-500 font-rubik-bold">HELP</Link>
                            <Link href="/notifications" className="text-3xl text-blue-500 font-rubik-bold">NOTIFICATIONS</Link>
                            <Link href="/profile" className="text-3xl text-blue-500 font-rubik-bold">PROFILE</Link>
                        </View>
                    </View>
                }
                renderItem={() => <QuickAction />}
            />
        </SafeAreaView>
    );
};

export default Home;
