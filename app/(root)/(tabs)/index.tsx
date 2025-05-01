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
import { ScrollView } from 'react-native-gesture-handler';
import icons from '@/constants/icons';
import WeatherCard from '@/components/WeatherCard';
import NewsTicker from '@/components/NewsTicker';
import ProcurementCard from '@/components/ProcurementCard';
import QuickAction from '@/components/QuickAction';
import MarketCard from '@/components/MarketCard';
import {Link} from "expo-router";
import images from "@/constants/images";
import StatusBadge from "@/components/utils/StatusBadge";
import WaterSafetyBand from "@/components/dashboard/WaterSafetyBand";
import GlassCard from "@/components/common/GlassCard";
import CompassWindWidget from "@/components/dashboard/CompassWindWidget";
import StormAlertWidget from "@/components/dashboard/StormAlertWidget";
import AIBotTip from "@/components/dashboard/AIBotTip";
import SectionTitle from "@/components/utils/SectionTitle";
import AIFishermanBot from "@/components/dashboard/AIFishermanBot";
import QuickActionsGrid from "@/components/dashboard/QuickActionsGrid";

const Home = () => {
    const loading = false;

    const user = { name: 'Thimira', avatar: images.favicon };

    const dummyMarketData = new Array(5).fill(null).map((_, index) => ({ id: index.toString() }));

    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView showsVerticalScrollIndicator = {false} >

                    <View className="px-5 mb-24">
                        {/* --- Profile Header --- */}
                        <View className="flex-row justify-between items-center mt-5">
                            <View className="flex-row items-center">
                                {/*<Image source={{ uri: user.avatar }} className="size-12 rounded-full" />*/}
                                <Image source={user.avatar} className="size-12 rounded-full" />
                                <View className="ml-2">
                                    <Text className="text-xs text-black-100">Good Morning</Text>
                                    <Text className="text-base font-rubik-semibold text-black-300">{user.name}</Text>
                                </View>
                            </View>

                            <View className="flex-row gap-5 justify-between items-center mr-4">
                                <View className="items-center">
                                    <Text className="text-black-300 font-rubik-bold text-2xl">Colombo Coast</Text>
                                    <Text className="text-black-200 font-rubik-medium text-md">Apr 27 | 10:45 AM</Text>
                                </View>
                                <View>
                                    <StatusBadge status="Safe" />
                                </View>
                            </View>

                            <Image source={icons.bell} className="size-6" />
                        </View>

                        <WaterSafetyBand status="Safe" />

                        {/* --- Weather Card --- */}
                        <GlassCard>
                            <View className="flex-row justify-around items-center">
                                <View>
                                    <Text className="text-base font-rubik-semibold text-black-200 mb-2">Temperature:</Text>
                                    <Text className="text-5xl font-rubik-extrabold text-primary-300">28°C</Text>
                                </View>

                                <View>
                                    <Text className="text-base font-rubik-semibold text-black-200">Wind:</Text>
                                    <CompassWindWidget direction="NE" speed="14" />
                                </View>
                            </View>

                            <View className="items-center">
                                <StormAlertWidget level={3} message="Caution: Storm approaching East Bay" />
                            </View>

                            <AIBotTip tip="🐟 Best time to fish today is 4AM - 7AM near coastal reefs." />
                        </GlassCard>

                        {/* --- News Ticker --- */}
                        <View className="mt-6">
                            <NewsTicker />
                        </View>

                        {/* --- Market Prices --- */}
                        <View>
                            <SectionTitle title="Market Prices" />

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

                        {/* --- Procurement --- */}
                        <View className="gap-3">
                            <SectionTitle title="Procurement" />
                            <ProcurementCard />
                            <ProcurementCard />
                            <ProcurementCard />
                            <ProcurementCard />
                            <ProcurementCard />
                        </View>

                        <View className="w-full h-fit mt-6">
                            <Text className="text-lg font-rubik-bold text-black-300">Fishermen Assistant</Text>
                            <AIFishermanBot />
                        </View>

                        <View className="flex-1 justify-center items-center">
                            <Link href="/welcome" className="text-3xl text-blue-500 font-rubik-bold">WELCOME</Link>
                            <Link href="/sign-in" className="text-3xl text-blue-500 font-rubik-bold">SIGNIN</Link>
                            <Link href="/register" className="text-3xl text-blue-500 font-rubik-bold">REGISTER</Link>
                            <Link href="/help" className="text-3xl text-blue-500 font-rubik-bold">HELP</Link>
                            <Link href="/notifications" className="text-3xl text-blue-500 font-rubik-bold">NOTIFICATIONS</Link>
                            <Link href="/profile" className="text-3xl text-blue-500 font-rubik-bold">PROFILE</Link>
                            <Link href="/settings" className="text-3xl text-blue-500 font-rubik-bold">SETTINGS</Link>
                        </View>

                        <View className="mt-6">
                            <Text className="text-lg font-rubik-bold text-black-300">Quick Actions</Text>
                            <QuickActionsGrid />
                        </View>

                    </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;



