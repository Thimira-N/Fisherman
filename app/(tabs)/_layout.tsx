import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from "expo-router";
import icons from '@/constants/icons'

const TabIcon = ({ focused, icon, boldicon, title }: { focused: boolean; icon: any; title: string }) => (
    <View className="flex-1 mt-3 flex flex-col items-center">
        <Image source={focused ? boldicon : icon} tintColor={focused ? '#0061ff' : '#666876'} resizeMode="contain" className="size-6" />
        <Text className={`${ focused ? 'text-primary-300 font-rubik-medium' : 'text-black-200 font-rubik' } text-xs w-full text-center mt-1`}>
            {title}
        </Text>
    </View>
)

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "white",
                    position: "absolute",
                    borderTopColor: "#0061FF",
                    borderTopWidth: 1,
                    minHeight: 70,

                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.home} boldicon={icons.homeb} focused={focused} title="Home"/>
                    )
                }}
            />

            <Tabs.Screen
                name="weather"
                options={{
                    title: "Weather",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.weather} boldicon={icons.weatherb} focused={focused} title="Weather"/>
                    )
                }}
            />

            <Tabs.Screen
                name="market"
                options={{
                    title: "Market",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.market} boldicon={icons.marketb} focused={focused} title="Market"/>
                    )
                }}
            />

            <Tabs.Screen
                name="fishing-tips"
                options={{
                    title: "Fishing-Tips",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.fishing} boldicon={icons.fishingb} focused={focused} title="Fishing-Tips"/>
                    )
                }}
            />

            <Tabs.Screen
                name="sales"
                options={{
                    title: "Sales",
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.sales} boldicon={icons.salesb} focused={focused} title="Sales"/>
                    )
                }}
            />
        </Tabs>
    )
}
export default TabsLayout