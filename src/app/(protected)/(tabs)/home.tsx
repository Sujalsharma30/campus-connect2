import React, { useEffect, useRef, useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  Pressable, 
  Animated, 
  FlatList, 
  RefreshControl,
  Dimensions
} from 'react-native';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient'; 
import { useColorScheme } from "nativewind"; 
import { useTranslation } from "react-i18next"; 

const { width } = Dimensions.get('window');

// Data structures with translation keys
const QUICK_ACTIONS = [
  { id: '1', icon: 'book', label: 'library', color: '#3b82f6', bg: 'bg-blue-50 dark:bg-blue-900/20', route: '/library' },
  { id: '2', icon: 'bus', label: 'transport', color: '#f59e0b', bg: 'bg-amber-50 dark:bg-amber-900/20', route: '/transport' },
  { id: '3', icon: 'calendar-alt', label: 'timetable', color: '#10b981', bg: 'bg-emerald-50 dark:bg-emerald-900/20', route: '/calendar' },
  { id: '4', icon: 'trophy', label: 'results', color: '#8b5cf6', bg: 'bg-violet-50 dark:bg-violet-900/20', route: '/results' },
  { id: '5', icon: 'clipboard-list', label: 'notice', color: '#ef4444', bg: 'bg-red-50 dark:bg-red-900/20', route: '/notices' },
  { id: '6', icon: 'utensils', label: 'canteen', color: '#ec4899', bg: 'bg-pink-50 dark:bg-pink-900/20', route: '/canteen' },
];

const COURSES = [
  { id: '1', code: 'CS-101', name: 'Data Structures', progress: 0.75, color: '#3b82f6', bg: 'bg-blue-50 dark:bg-blue-900/20' },
  { id: '2', code: 'CS-102', name: 'Web Engineering', progress: 0.45, color: '#f97316', bg: 'bg-orange-50 dark:bg-orange-900/20' },
  { id: '3', code: 'CS-103', name: 'DBMS', progress: 0.90, color: '#14b8a6', bg: 'bg-teal-50 dark:bg-teal-900/20' },
  { id: '4', code: 'CS-104', name: 'Cyber Security', progress: 0.30, color: '#ef4444', bg: 'bg-red-50 dark:bg-red-900/20' },
];

const NOTICES = [
  { id: '1', title: 'Hackathon Registration Open', date: 'Today, 10:00 AM', type: 'Event', icon: 'calendar-check', color: '#3b82f6' },
  { id: '2', title: 'Library closed for maintenance', date: 'Tomorrow', type: 'Alert', icon: 'exclamation-triangle', color: '#ef4444' },
  { id: '3', title: 'Mid-Sem Results Declared', date: 'Yesterday', type: 'Academic', icon: 'file-alt', color: '#10b981' },
];

// Bouncy Button Component
const BouncyBtn = ({ children, onPress, style }: any) => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const onPressIn = () => Animated.spring(scaleValue, { toValue: 0.95, useNativeDriver: true }).start();
  const onPressOut = () => Animated.spring(scaleValue, { toValue: 1, useNativeDriver: true }).start();

  return (
    <Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut} style={style}>
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        {children}
      </Animated.View>
    </Pressable>
  );
};

export default function HomeScreen() {
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const { t } = useTranslation(); 
  const [refreshing, setRefreshing] = useState(false);
  
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
      Animated.spring(slideAnim, { toValue: 0, friction: 6, useNativeDriver: true }),
    ]).start();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  return (
    <View className="flex-1 bg-[#f8fafc] dark:bg-slate-950">
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />

      {/* Header */}
      <View className="px-6 pt-14 pb-4 flex-row justify-between items-center bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-sm z-10">
        <View className="flex-row items-center gap-3">
          <View className="h-11 w-11 bg-amber-100 dark:bg-amber-900/30 rounded-full items-center justify-center border-2 border-white dark:border-slate-700 shadow-sm overflow-hidden">
            <Text className="text-amber-700 dark:text-amber-500 font-bold text-xl">S</Text>
          </View>
          <View>
            <Text className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">
              {t('welcome')}
            </Text>
            <Text className="text-xl font-extrabold text-slate-900 dark:text-white">Sujal!</Text>
          </View>
        </View>
        <View className="flex-row gap-3">
          <BouncyBtn onPress={() => router.push('/(protected)/search')}>
             <View className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
               <Ionicons name="search" size={22} color={colorScheme === 'dark' ? '#94a3b8' : '#64748b'} />
             </View>
          </BouncyBtn>
          <BouncyBtn>
             <View className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 relative">
               <Ionicons name="notifications-outline" size={22} color={colorScheme === 'dark' ? '#94a3b8' : '#64748b'} />
               <View className="absolute top-2.5 right-3 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-800" />
             </View>
          </BouncyBtn>
        </View>
      </View>

      <ScrollView 
        className="flex-1" 
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colorScheme === 'dark' ? '#f59e0b' : '#0f172a'} />}
      >
        <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
          
          {/* 1. Status & Up Next Card */}
          <View className="px-6 mt-6">
             <View className="flex-row justify-between items-center mb-4">
                <View className="flex-row items-center gap-2 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-full border border-slate-100 dark:border-slate-800 shadow-sm">
                   <View className="w-2 h-2 bg-green-500 rounded-full" />
                   <Text className="text-xs font-semibold text-slate-600 dark:text-slate-300">{t('on_campus')}</Text>
                </View>
                <Text className="text-xs font-bold text-amber-600 dark:text-amber-500 uppercase tracking-wide">{t('synced_today')}</Text>
             </View>

             <BouncyBtn>
               <LinearGradient
                 colors={['#1e293b', '#0f172a']}
                 start={{ x: 0, y: 0 }}
                 end={{ x: 1, y: 1 }}
                 style={{ borderRadius: 24, padding: 24, position: 'relative', overflow: 'hidden' }}
               >
                 <View className="absolute -right-12 -top-12 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
                 <View className="absolute -left-12 bottom-0 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl" />

                 <View className="flex-row justify-between items-start mb-6">
                   <View>
                      <Text className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">{t('up_next')} • 10:00 AM</Text>
                      <Text className="text-white text-3xl font-bold">Operating{'\n'}Systems</Text>
                   </View>
                   <View className="bg-amber-500 px-3 py-1.5 rounded-full shadow-lg shadow-amber-900/20">
                      <Text className="text-slate-900 text-xs font-extrabold">15 min</Text>
                   </View>
                 </View>
                 
                 <View className="flex-row items-center gap-2 bg-white/10 self-start px-3 py-1.5 rounded-lg border border-white/5">
                   <MaterialIcons name="location-on" size={14} color="#e2e8f0" />
                   <Text className="text-slate-200 text-xs font-semibold">Lab 301 • Dr. Sharma</Text>
                 </View>
               </LinearGradient>
             </BouncyBtn>
          </View>

          {/* 2. Quick Access */}
          <View className="mt-8">
            <Text className="px-6 text-slate-900 dark:text-white font-bold text-lg mb-4">{t('quick_access')}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}>
              {QUICK_ACTIONS.map((action) => (
                <BouncyBtn key={action.id} style={{ alignItems: 'center', width: 72 }}>
                  <View className={`w-16 h-16 ${action.bg} rounded-2xl items-center justify-center border border-slate-100 dark:border-slate-800 shadow-sm mb-2`}>
                    <FontAwesome5 name={action.icon} size={22} color={action.color} />
                  </View>
                  <Text className="text-[11px] font-medium text-slate-600 dark:text-slate-400 text-center" numberOfLines={1}>
                    {t(action.label)}
                  </Text>
                </BouncyBtn>
              ))}
            </ScrollView>
          </View>

          {/* 3. My Courses */}
          <View className="mt-8">
             <View className="px-6 flex-row justify-between items-center mb-4">
                <Text className="text-slate-900 dark:text-white font-bold text-lg">{t('my_courses')}</Text>
                <Pressable><Text className="text-amber-600 dark:text-amber-500 font-bold text-xs">{t('see_all')}</Text></Pressable>
             </View>
             
             <FlatList 
               horizontal
               data={COURSES}
               showsHorizontalScrollIndicator={false}
               snapToInterval={180} 
               decelerationRate="fast"
               contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
               keyExtractor={item => item.id}
               renderItem={({ item }) => (
                 <BouncyBtn>
                   <View className="bg-white dark:bg-slate-900 p-5 rounded-[24px] w-[164px] border border-slate-100 dark:border-slate-800 shadow-sm h-[190px] justify-between">
                     <View>
                       <View className={`w-12 h-12 ${item.bg} rounded-full items-center justify-center mb-4`}>
                         <MaterialIcons name="menu-book" size={24} color={item.color} />
                       </View>
                       <Text className="text-slate-900 dark:text-white font-bold text-[15px] leading-tight mb-1" numberOfLines={2}>{item.name}</Text>
                       <Text className="text-slate-400 text-xs font-semibold">{item.code}</Text>
                     </View>
                     
                     <View>
                       <View className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-1.5">
                          <View className="h-full rounded-full" style={{ width: `${item.progress * 100}%`, backgroundColor: item.color }} />
                       </View>
                       <Text className="text-[10px] text-slate-400 font-medium text-right">{Math.round(item.progress * 100)}% Done</Text>
                     </View>
                   </View>
                 </BouncyBtn>
               )}
             />
          </View>

          {/* 4. Campus Feed */}
          <View className="px-6 mt-8 mb-24">
             <Text className="text-slate-900 dark:text-white font-bold text-lg mb-4">{t('campus_updates')}</Text>
             <View className="bg-white dark:bg-slate-900 rounded-[24px] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden p-1">
                {NOTICES.map((notice, index) => (
                  <Pressable 
                    key={notice.id} 
                    className={`flex-row p-4 items-center gap-4 active:bg-slate-50 dark:active:bg-slate-800 rounded-xl ${index !== NOTICES.length - 1 ? 'border-b border-slate-50 dark:border-slate-800' : ''}`}
                  >
                     <View className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-2xl items-center justify-center border border-slate-100 dark:border-slate-700">
                        <FontAwesome5 name={notice.icon} size={18} color={notice.color} />
                     </View>
                     <View className="flex-1">
                        <Text className="text-slate-800 dark:text-slate-100 font-bold text-sm mb-1 line-clamp-1">{notice.title}</Text>
                        <Text className="text-slate-400 dark:text-slate-500 text-xs font-medium">{notice.date} • {notice.type}</Text>
                     </View>
                     <MaterialIcons name="chevron-right" size={20} color={colorScheme === 'dark' ? '#475569' : '#cbd5e1'} />
                  </Pressable>
                ))}
             </View>
          </View>

        </Animated.View>
      </ScrollView>
    </View>
  );
}