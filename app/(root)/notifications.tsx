import { View, Text, TouchableOpacity, Image, ScrollView, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Swipeable } from "react-native-gesture-handler";
import { MotiView, AnimatePresence } from "moti";
import { LinearGradient } from 'expo-linear-gradient';
import icons from "@/constants/icons";

const dummyNotifications = [
    {
        id: 1,
        title: "Sale Completed! 🎉",
        description:
            "Your Fresh Tuna listing sold for LKR 1,200/kg. Congratulations! Please arrange pickup with the buyer via chat and update your inventory.",
        time: "2h ago",
        icon: icons.message,
        read: false,
    },
    {
        id: 2,
        title: "Promotion Success 🚀",
        description:
            "Your Premium Mackerel listing hit 500+ views in 24h. Featured items get 3× more inquiries—consider boosting another listing today!",
        time: "5h ago",
        icon: icons.message,
        read: true,
    },
    {
        id: 3,
        title: "New Message from Buyer 💬",
        description:
            "Buyer Kasun Perera is asking for more photos of your Crab listing. Tap to view and reply in the chat to secure the sale!",
        time: "1d ago",
        icon: icons.message,
        read: false,
    },
    {
        id: 4,
        title: "Price Alert: Sardine 📈",
        description:
            "Sardine prices jumped to LKR 550/kg (+10%). You can update your listing to match market rates or lock in your lower price for quick turnover.",
        time: "1d ago",
        icon: icons.message,
        read: true,
    },
    {
        id: 5,
        title: "Weather Warning ⚠️",
        description:
            "A tropical storm is forecast in Trincomalee with 80 km/h winds. Check the Weather tab now and stay safe before heading out.",
        time: "2d ago",
        icon: icons.message,
        read: false,
    },
    {
        id: 6,
        title: "New Fishing Tip 🐟",
        description:
            "Tip of the Day: Use live bait around drop-offs at dawn for better success. Share your own tips in the Community section!",
        time: "3d ago",
        icon: icons.message,
        read: true,
    },
    {
        id: 7,
        title: "App Update Available 📲",
        description:
            "Version 1.3.0 brings offline map caching, faster load times, and a redesigned dashboard. Update now to unlock the improvements!",
        time: "4d ago",
        icon: icons.message,
        read: true,
    },
    {
        id: 8,
        title: "System Maintenance 🔧",
        description:
            "Scheduled maintenance on May 5 from 02:00–04:00 AM. The app may be briefly unavailable—please plan your activities accordingly.",
        time: "5d ago",
        icon: icons.message,
        read: true,
    },
    {
        id: 9,
        title: "Order Shipped 🛳️",
        description:
            "Your buyer confirmed pickup—order #12345 has been marked as shipped. Track its status in your Orders tab.",
        time: "6d ago",
        icon: icons.message,
        read: false,
    },
    {
        id: 10,
        title: "Payment Received 💵",
        description:
            "You’ve received LKR 60,000 for your recent Tuna sale. Funds are now available in your Wallet section.",
        time: "1w ago",
        icon: icons.message,
        read: true,
    },
    {
        id: 11,
        title: "Feedback Received ⭐",
        description:
            "Buyer ‘Ishara’ left you a 5-star review: “Great quality and fast delivery!” Keep up the excellent work.",
        time: "1w ago",
        icon: icons.message,
        read: false,
    },
    {
        id: 12,
        title: "Reminder: Renew License 📅",
        description:
            "Your fishing license expires on June 30. Renew now to avoid downtime—visit the Credentials section to update.",
        time: "2w ago",
        icon: icons.message,
        read: true,
    },
];


const NotificationItem = ({ item, isExpanded, onPress, onDelete }: { item: any; isExpanded: boolean; onPress: () => void; onDelete: () => void }) => {
    return (
        <Swipeable
            renderRightActions={() => (
                <View className="flex justify-center items-center bg-danger rounded-3xl px-4 my-2">
                    <Text className="text-white font-rubik-bold">Delete</Text>
                </View>
            )}
            onSwipeableRightOpen={onDelete}

            renderLeftActions={() => (
                <View className="flex justify-center items-center bg-primary-300 rounded-full px-4 my-2">
                    <Text className="text-white font-rubik-bold">{item.time}</Text>
                </View>
            )}

        >
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.9}
                className="bg-white/70 border border-primary-200 rounded-2xl p-5 mb-3 shadow-xl backdrop-blur-md"
                style={{
                    elevation: 4,
                    shadowColor: "#0061FF1A",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.1,
                    shadowRadius: 8,
                }}
            >
                <View className="flex flex-row items-center gap-4">
                    <View className="bg-blue-100 rounded-full p-2">
                        <Image source={item.icon} className="size-8" resizeMode="contain" />
                    </View>
                    <View className="flex-1">
                        <View className="flex flex-row justify-between items-center">
                            <Text className={`text-lg ${item.read ? "font-rubik" : "font-rubik-bold"} text-gray-900`}>
                                {item.title}
                            </Text>
                            <Text className="text-lg font-rubik text-gray-400">{item.time}</Text>
                        </View>
                        <AnimatePresence>
                            {isExpanded && (
                                <MotiView
                                    from={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ type: "timing", duration: 200 }}
                                >
                                    <Text className="text-2xl text-gray-600 mt-4 leading-relaxed font-rubik">
                                        {item.description}
                                    </Text>
                                </MotiView>
                            )}
                        </AnimatePresence>
                    </View>

                    {/* 🔴 RED "NEW" BADGE for unread ones */}
                    {!item.read && (
                        <View className="relative top-2 right-1 bg-danger px-2 py-0.5 rounded-full">
                            <Text className="text-white text-[10px] font-rubik-bold">NEW</Text>
                        </View>
                    )}

                </View>
            </TouchableOpacity>
        </Swipeable>
    );
};

const Notifications = () => {
    const [notifications, setNotifications] = useState(dummyNotifications);
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const handleToggle = (id: number) => {
        setExpandedId(prev => (prev === id ? null : id));
        setNotifications(prev => prev.map(notif => notif.id === id ? { ...notif, read: true } : notif));
    };

    const handleDelete = (id: number) => {
        setNotifications(prev => prev.filter(notif => notif.id !== id));
    };

    return (
        <LinearGradient
            colors={['#0061FF0A', '#0061FF1A']}
            className="flex-1"
        >
        <SafeAreaView className="flex-1 mb-20">
            <View className="px-6 pt-5">
                <Text className="text-2xl font-rubik-bold text-gray-900 mb-6">Notifications</Text>

                <ScrollView showsVerticalScrollIndicator={false} className="space-y-2">
                    {notifications.length > 0 ? (
                        notifications.map((item) => (
                            <NotificationItem
                                key={item.id}
                                item={item}
                                isExpanded={expandedId === item.id}
                                onPress={() => handleToggle(item.id)}
                                onDelete={() => handleDelete(item.id)}
                            />
                        ))
                    ) : (
                        <Text className="text-center text-2xl text-gray-400 mt-20 font-rubik">No notifications 📭</Text>
                    )}
                </ScrollView>




            </View>
        </SafeAreaView>
        </LinearGradient>
    );
};

export default Notifications;
