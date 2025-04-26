import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs';
import { MessageSquare, Phone, Mail } from 'lucide-react-native';
import icons from "@/constants/icons";

const users = {
    fishermen: [
        { id: 1, name: 'Kasun Silva', role: 'Deep Sea Fisherman', distance: '5km', avatar: icons.person },
        { id: 2, name: 'Ravi Perera', role: 'Coastal Fisherman', distance: '8km', avatar: icons.person },
    ],
    buyers: [
        { id: 3, name: 'Ocean Fresh Co.', role: 'Buyer/Processor', distance: '15km', avatar: icons.person },
    ],
    providers: [
        { id: 4, name: 'Marine Services Ltd.', role: 'Boat Repair Services', distance: '10km', avatar: icons.person },
    ],
    officials: [
        { id: 5, name: 'Saman Wijesinghe', role: 'Fisheries Officer', distance: '2km', avatar: icons.person },
    ],
};

export default function ConnectScreen() {
    const [search, setSearch] = useState('');

    const filteredUsers = (category: any) =>
        users[category].filter((user : any ) =>
            user.name.toLowerCase().includes(search.toLowerCase())
        );

    return (
        <View className="flex-1 bg-white">
            {/* Search Bar */}
            <View className="p-4">
                <TextInput
                    placeholder="Search by name or role..."
                    className="bg-gray-100 p-3 rounded-xl text-black"
                    value={search}
                    onChangeText={setSearch}
                />
            </View>

            {/* Tabs */}
            <Tabs defaultValue="fishermen" className="flex-1">
                <TabsList className="flex-row justify-around p-2 bg-gray-100">
                    <TabsTrigger value="fishermen" className="p-2">
                        🎣 Fishermen
                    </TabsTrigger>
                    <TabsTrigger value="buyers" className="p-2">
                        🏪 Buyers
                    </TabsTrigger>
                    <TabsTrigger value="providers" className="p-2">
                        🔧 Services
                    </TabsTrigger>
                    <TabsTrigger value="officials" className="p-2">
                        🛡️ Officials
                    </TabsTrigger>
                </TabsList>

                {/* Fishermen */}
                <TabsContent value="fishermen">
                    <ScrollView className="p-4 space-y-4">
                        {filteredUsers('fishermen').map((user : any) => (
                            <ContactCard key={user.id} user={user} />
                        ))}
                    </ScrollView>
                </TabsContent>

                {/* Buyers */}
                <TabsContent value="buyers">
                    <ScrollView className="p-4 space-y-4">
                        {filteredUsers('buyers').map((user : any) => (
                            <ContactCard key={user.id} user={user} />
                        ))}
                    </ScrollView>
                </TabsContent>

                {/* Providers */}
                <TabsContent value="providers">
                    <ScrollView className="p-4 space-y-4">
                        {filteredUsers('providers').map((user : any) => (
                            <ContactCard key={user.id} user={user} />
                        ))}
                    </ScrollView>
                </TabsContent>

                {/* Officials */}
                <TabsContent value="officials">
                    <ScrollView className="p-4 space-y-4">
                        {filteredUsers('officials').map((user : any) => (
                            <ContactCard key={user.id} user={user} />
                        ))}
                    </ScrollView>
                </TabsContent>
            </Tabs>
        </View>
    );
}

function ContactCard({ user } : any ) {
    return (
        <View className="bg-white rounded-2xl shadow-md p-4 flex-row items-center">
            <Image source={user.avatar} style={{ width: 60, height: 60, borderRadius: 30 }} />
            <View className="flex-1 ml-4">
                <Text className="font-bold text-lg text-black">{user.name}</Text>
                <Text className="text-gray-500">{user.role}</Text>
                <Text className="text-gray-400">{user.distance} away</Text>
            </View>
            <View className="flex-row space-x-3">
                <TouchableOpacity className="bg-primary-100 p-2 rounded-full">
                    <Phone size={20} color="#2563eb" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-primary-100 p-2 rounded-full">
                    <Mail size={20} color="#2563eb" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-primary-500 p-2 rounded-full">
                    <MessageSquare size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
