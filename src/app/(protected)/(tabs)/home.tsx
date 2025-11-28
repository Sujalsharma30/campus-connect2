import React from 'react';
import { View, Text, ScrollView, Pressable, Image, FlatList } from 'react-native';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// --- Mock Data ---
const QUICK_ACTIONS = [
  { id: '1', icon: 'book', label: 'Library', color: '#3b82f6', route: '/library' },
  { id: '2', icon: 'bus', label: 'Transport', color: '#f59e0b', route: '/transport' },
  { id: '3', icon: 'calendar-alt', label: 'Timetable', color: '#10b981', route: '/calendar' },
  { id: '4', icon: 'trophy', label: 'Results', color: '#8b5cf6', route: '/results' },
  // Added more items to demonstrate scrolling
  { id: '5', icon: 'clipboard', label: 'Notice', color: '#ef4444', route: '/notice' },
  { id: '6', icon: 'school', label: 'Exam', color: '#6366f1', route: '/map' },
  { id: '7', icon: 'poll', label: 'Marks', color: '#6366f1', route: '/map' },
];

const COURSES = [
  { id: '1', code: 'CS-101', name: 'Data Structures', progress: 0.75, color: 'bg-blue-100', iconColor: '#2563eb' },
  { id: '2', code: 'CS-102', name: 'Web Engineering', progress: 0.45, color: 'bg-orange-100', iconColor: '#ea580c' },
  { id: '3', code: 'CS-103', name: 'DBMS', progress: 0.90, color: 'bg-teal-100', iconColor: '#0d9488' },
];

const NOTICES = [
  { id: '1', title: 'Hackathon Registration Open', date: 'Today, 10:00 AM', type: 'Event' },
  { id: '2', title: 'Library closed for maintenance', date: 'Tomorrow', type: 'Alert' },
  { id: '3', title: 'Mid-Sem Results Declared', date: 'Yesterday', type: 'Academic' },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-slate-50">
      {/* Top Bar with Profile & Search */}
      {/* <View className="px-5 pt-12 pb-4 flex-row justify-between items-center bg-white border-b border-slate-100">
        <View className="flex-row items-center gap-3">
          <View className="h-10 w-10 bg-amber-100 rounded-full items-center justify-center border border-amber-200">
            <Text className="text-amber-700 font-bold text-lg">R</Text>
          </View>
          <View>
            <Text className="text-xs text-slate-500 font-medium">Welcome Back,</Text>
            <Text className="text-lg font-bold text-slate-900">Riya!</Text>
          </View>
        </View>
        <View className="flex-row gap-3">
          <Pressable className="p-2 bg-slate-50 rounded-full border border-slate-200">
             <Ionicons name="search" size={20} color="#64748b" />
          </Pressable>
          <Pressable className="p-2 bg-slate-50 rounded-full border border-slate-200 relative">
             <Ionicons name="notifications" size={20} color="#64748b" />
             <View className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full" />
          </Pressable>
        </View>
      </View> */}

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        
        {/* 1. "Up Next" Card - Immediate Context */}
        <View className="px-5 mt-5">
           <View className="bg-slate-900 rounded-2xl p-5 shadow-sm relative overflow-hidden">
              {/* decorative circles */}
              <View className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full" />
              <View className="absolute -right-8 top-12 w-20 h-20 bg-white/5 rounded-full" />
              
              <View className="flex-row justify-between items-start">
                <View>
                   <Text className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Up Next • 10:00 AM</Text>
                   <Text className="text-white text-xl font-bold">Operating Systems</Text>
                   <Text className="text-slate-300 text-sm mt-1">Lab 301 • Dr. Sharma</Text>
                </View>
                <View className="bg-amber-500 px-3 py-1 rounded-full">
                   <Text className="text-white text-xs font-bold">15 min left</Text>
                </View>
              </View>
           </View>
        </View>

        {/* 2. Quick Actions Grid - Horizontal Scrollable */}
        <View className="mt-6">
          <View className="px-5 mb-3 flex-row justify-between items-center">
            <Text className="text-slate-900 font-bold text-lg">Quick Access</Text>
            {/* Optional "See All" if list gets very long */}
            {/* <Text className="text-amber-600 font-semibold text-xs">See All</Text> */}
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20, gap: 16 }}
          >
            {QUICK_ACTIONS.map((action) => (
              <Pressable key={action.id} className="items-center gap-2 w-[70px]">
                <View className="w-14 h-14 bg-white rounded-2xl items-center justify-center shadow-sm border border-slate-100">
                  <FontAwesome5 name={action.icon} size={20} color={action.color} />
                </View>
                <Text className="text-xs font-medium text-slate-600 text-center" numberOfLines={1}>{action.label}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* 3. My Courses Carousel */}
        <View className="mt-6">
           <View className="px-5 flex-row justify-between items-center mb-3">
              <Text className="text-slate-900 font-bold text-lg">My Courses</Text>
              <Text className="text-amber-600 font-semibold text-xs">See All</Text>
           </View>
           
           <FlatList 
             horizontal
             data={COURSES}
             showsHorizontalScrollIndicator={false}
             contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}
             keyExtractor={item => item.id}
             renderItem={({ item }) => (
               <Pressable className="bg-white p-4 rounded-2xl w-40 border border-slate-100 shadow-sm mr-1">
                  <View className={`w-10 h-10 ${item.color} rounded-full items-center justify-center mb-3`}>
                    <MaterialIcons name="menu-book" size={20} color={item.iconColor} />
                  </View>
                  <Text className="text-slate-900 font-bold text-base mb-1" numberOfLines={1}>{item.name}</Text>
                  <Text className="text-slate-400 text-xs font-medium mb-3">{item.code}</Text>
                  
                  {/* Progress Bar */}
                  <View className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                     <View className="h-full bg-green-500 rounded-full" style={{ width: `${item.progress * 100}%` }} />
                  </View>
                  <Text className="text-xs text-slate-400 mt-1 text-right">{Math.round(item.progress * 100)}%</Text>
               </Pressable>
             )}
           />
        </View>

        {/* 4. Campus Feed / Notices */}
        <View className="px-5 mt-6 mb-10">
           <Text className="text-slate-900 font-bold text-lg mb-3">Campus Updates</Text>
           <View className="bg-white rounded-2xl border border-slate-100 shadow-sm p-2">
              {NOTICES.map((notice, index) => (
                <View key={notice.id} className={`flex-row p-3 items-center gap-3 ${index !== NOTICES.length - 1 ? 'border-b border-slate-50' : ''}`}>
                   <View className={`w-10 h-10 rounded-xl items-center justify-center ${
                      notice.type === 'Alert' ? 'bg-red-50' : 'bg-blue-50'
                   }`}>
                      <Ionicons 
                        name={notice.type === 'Alert' ? 'warning' : 'newspaper'} 
                        size={20} 
                        color={notice.type === 'Alert' ? '#ef4444' : '#3b82f6'} 
                      />
                   </View>
                   <View className="flex-1">
                      <Text className="text-slate-800 font-semibold text-sm">{notice.title}</Text>
                      <Text className="text-slate-400 text-xs mt-0.5">{notice.date}</Text>
                   </View>
                   <MaterialIcons name="chevron-right" size={20} color="#cbd5e1" />
                </View>
              ))}
           </View>
        </View>

      </ScrollView>
    </View>
  );
}