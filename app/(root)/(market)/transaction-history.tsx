// import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import { Ionicons } from '@expo/vector-icons';
// import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
//
// const transactions = [
//     {
//         id: 1,
//         date: '2025-04-22',
//         type: 'Sale',
//         species: 'Shrimp',
//         quantity: '50 kg',
//         total: 'Rs. 55,000',
//         buyer: 'Nuwan Perera',
//         paymentStatus: 'Paid',
//     },
//     {
//         id: 2,
//         date: '2025-04-24',
//         type: 'Purchase',
//         species: 'Yellowfin Tuna',
//         quantity: '20 kg',
//         total: 'Rs. 26,000',
//         buyer: 'Ishara Jayasuriya',
//         paymentStatus: 'Pending',
//     },
// ];
//
// export default function TransactionHistoryScreen() {
//     return (
//         <ScrollView className="flex-1 bg-white px-5 py-4">
//
//             {/* Calendar */}
//             <View className="mb-5">
//                 <Text className="text-xl font-bold text-primary-300 mb-3">Select Date Range</Text>
//                 <Calendar
//                     theme={{
//                         selectedDayBackgroundColor: '#3b82f6',
//                         todayTextColor: '#3b82f6',
//                     }}
//                     markingType={'period'}
//                     markedDates={{
//                         '2025-04-22': { startingDay: true, color: '#3b82f6', textColor: 'white' },
//                         '2025-04-24': { endingDay: true, color: '#3b82f6', textColor: 'white' },
//                     }}
//                 />
//             </View>
//
//             {/* Summary Statistics */}
//             <View className="bg-primary-50 rounded-2xl p-5 mb-6 shadow-md">
//                 <Text className="text-lg font-bold text-primary-300 mb-2">Summary</Text>
//                 <Text className="text-black-300">Total Sales: <Text className="font-bold text-primary-300">Rs. 55,000</Text></Text>
//                 <Text className="text-black-300">Total Purchases: <Text className="font-bold text-primary-300">Rs. 26,000</Text></Text>
//                 <Text className="text-black-300">Top Species: <Text className="font-bold text-primary-300">Shrimp</Text></Text>
//             </View>
//
//             {/* Transactions List */}
//             <View className="mb-6">
//                 <Text className="text-xl font-bold text-primary-300 mb-3">Transactions</Text>
//                 {transactions.map((tx) => (
//                     <View key={tx.id} className="bg-primary-50 rounded-2xl p-4 mb-4 shadow-md">
//                         <View className="flex-row justify-between mb-2">
//                             <Text className="text-black-300 font-bold">{tx.species}</Text>
//                             <Text className={`text-sm ${tx.paymentStatus === 'Paid' ? 'text-green-500' : 'text-yellow-500'}`}>
//                                 {tx.paymentStatus}
//                             </Text>
//                         </View>
//                         <Text className="text-black-100">{tx.type} - {tx.quantity}</Text>
//                         <Text className="text-black-100">Buyer: {tx.buyer}</Text>
//                         <Text className="text-black-200 mt-1 font-bold">{tx.total}</Text>
//                     </View>
//                 ))}
//             </View>
//
//             {/* Earnings Trend */}
//             <View className="mb-6">
//                 <Text className="text-xl font-bold text-primary-300 mb-3">Earnings Trend</Text>
//                 <VictoryChart
//                     theme={VictoryTheme.material}
//                     domainPadding={20}
//                 >
//                     <VictoryBar
//                         data={[
//                             { day: 'Mon', earnings: 8000 },
//                             { day: 'Tue', earnings: 15000 },
//                             { day: 'Wed', earnings: 12000 },
//                             { day: 'Thu', earnings: 10000 },
//                             { day: 'Fri', earnings: 17000 },
//                         ]}
//                         x="day"
//                         y="earnings"
//                         style={{
//                             data: { fill: "#3b82f6", borderRadius: 8 }
//                         }}
//                     />
//                 </VictoryChart>
//             </View>
//
//             {/* Export Data Buttons */}
//             <View className="flex-row justify-center gap-4 mb-20">
//                 <TouchableOpacity className="bg-primary-300 p-3 px-6 rounded-full flex-row items-center shadow">
//                     <Ionicons name="download-outline" size={20} color="#fff" />
//                     <Text className="text-white font-bold ml-2">Export PDF</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity className="bg-primary-300 p-3 px-6 rounded-full flex-row items-center shadow">
//                     <Ionicons name="document-text-outline" size={20} color="#fff" />
//                     <Text className="text-white font-bold ml-2">Export CSV</Text>
//                 </TouchableOpacity>
//             </View>
//
//         </ScrollView>
//     );
// }


import {View, Text} from 'react-native'
import React from 'react'

const TransactionHistory = () => {
    return (
        <View>
            <Text>TransactionHistory</Text>
        </View>
    )
}
export default TransactionHistory
