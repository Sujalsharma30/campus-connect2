import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, FlatList, StatusBar } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useColorScheme } from "nativewind"; 
import { useTranslation } from "react-i18next"; 

// Mock Data
const ALL_DATA = [
  { id: '1', type: 'Course', title: 'Data Structures', subtitle: 'CS-101 • Dr. Gupta' },
  { id: '2', type: 'Event', title: 'Tech Hackathon 2025', subtitle: 'Auditorium • Oct 28' },
  { id: '3', type: 'Resource', title: 'Main Library', subtitle: 'Open until 8 PM' },
  { id: '4', type: 'Faculty', title: 'Dr. Aditi Verma', subtitle: 'HOD Computer Science' },
  { id: '5', type: 'Course', title: 'Web Engineering', subtitle: 'CS-102 • Lab 3' },
  { id: '6', type: 'Event', title: 'Freshers Party', subtitle: 'Sports Ground • Nov 1' },
  { id: '7', type: 'Transport', title: 'Route 5 Bus', subtitle: 'Departs 4:10 PM' },
];

export default function SearchScreen() {
  const router = useRouter();
  const { colorScheme } = useColorScheme();
  const { t } = useTranslation(); 
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  // We could also translate filters if needed using keys
  const filters = ['All', 'Course', 'Event', 'Faculty', 'Resource'];

  const filteredData = ALL_DATA.filter(item => {
    const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = activeFilter === 'All' || item.type === activeFilter;
    return matchesQuery && matchesFilter;
  });

  const renderItem = ({ item }: { item: typeof ALL_DATA[0] }) => {
    // Dynamic styles
    const getIconStyle = (type: string) => {
      switch (type) {
        case 'Course': return 'bg-blue-100 dark:bg-blue-900/30';
        case 'Event': return 'bg-amber-100 dark:bg-amber-900/30';
        case 'Faculty': return 'bg-purple-100 dark:bg-purple-900/30';
        default: return 'bg-teal-100 dark:bg-teal-900/30';
      }
    };

    const getIconName = (type: string) => {
        switch (type) {
          case 'Course': return 'book';
          case 'Event': return 'event';
          case 'Faculty': return 'person';
          default: return 'library-books';
        }
    };

    const getIconColor = (type: string) => {
        switch (type) {
          case 'Course': return colorScheme === 'dark' ? '#60a5fa' : '#2563eb';
          case 'Event': return colorScheme === 'dark' ? '#fbbf24' : '#d97706';
          case 'Faculty': return colorScheme === 'dark' ? '#c084fc' : '#9333ea';
          default: return colorScheme === 'dark' ? '#2dd4bf' : '#0d9488';
        }
    };

    return (
      <Pressable className="flex-row items-center p-4 bg-white dark:bg-slate-900 mb-3 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm active:bg-slate-50 dark:active:bg-slate-800">
        <View className={`p-3 rounded-full mr-4 ${getIconStyle(item.type)}`}>
          <MaterialIcons 
            name={getIconName(item.type) as any} 
            size={24} 
            color={getIconColor(item.type)} 
          />
        </View>
        <View className="flex-1">
          <Text className="text-base font-semibold text-slate-800 dark:text-white">{item.title}</Text>
          <Text className="text-xs text-slate-500 dark:text-slate-400">{item.subtitle}</Text>
        </View>
        <MaterialIcons name="chevron-right" size={24} color={colorScheme === 'dark' ? '#475569' : '#cbd5e1'} />
      </Pressable>
    );
  };

  return (
    <View className="flex-1 bg-slate-50 dark:bg-slate-950 px-4 pt-12">
      <StatusBar 
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"} 
        backgroundColor={colorScheme === "dark" ? "#020617" : "#f8fafc"} 
      />

      {/* Header */}
      <View className="flex-row items-center mb-6 gap-3">
        <Pressable 
          onPress={() => router.back()} 
          className="p-2 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800"
        >
           <MaterialIcons name="arrow-back" size={24} color={colorScheme === 'dark' ? 'white' : '#334155'} />
        </Pressable>
        <Text className="text-2xl font-bold text-slate-900 dark:text-white">{t('search_header')}</Text>
      </View>

      {/* Search Input Field */}
      <View className="flex-row items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 mb-6 shadow-sm focus:border-amber-500 dark:focus:border-amber-500">
        <Ionicons name="search" size={20} color={colorScheme === 'dark' ? '#94a3b8' : '#94a3b8'} />
        <TextInput 
          className="flex-1 ml-3 text-slate-700 dark:text-white font-medium h-full"
          placeholder={t('search_placeholder_full')} 
          placeholderTextColor={colorScheme === 'dark' ? '#64748b' : '#94a3b8'}
          value={query}
          onChangeText={setQuery}
          autoFocus={false}
        />
        {query.length > 0 && (
          <Pressable onPress={() => setQuery('')}>
            <Ionicons name="close-circle" size={20} color={colorScheme === 'dark' ? '#64748b' : '#94a3b8'} />
          </Pressable>
        )}
      </View>

      {/* Horizontal Filter Chips */}
      <View className="mb-6 h-10">
        <FlatList 
          horizontal 
          data={filters}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Pressable 
              onPress={() => setActiveFilter(item)}
              className={`px-5 py-2 rounded-full mr-2 border ${
                activeFilter === item 
                ? 'bg-slate-900 dark:bg-blue-600 border-slate-900 dark:border-blue-600' 
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
              }`}
            >
              <Text className={`font-semibold text-sm ${activeFilter === item ? 'text-white' : 'text-slate-600 dark:text-slate-300'}`}>
                {item}
              </Text>
            </Pressable>
          )}
        />
      </View>

      {/* Results List */}
      <Text className="text-xs font-bold text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-wider pl-1">
        {query ? t('search_results') : t('recent_searches')}
      </Text>
      
      <FlatList 
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="items-center justify-center mt-10">
            <MaterialIcons name="search-off" size={64} color={colorScheme === 'dark' ? '#334155' : '#cbd5e1'} />
            <Text className="text-slate-400 dark:text-slate-500 mt-4 font-medium">{t('no_results')} "{query}"</Text>
          </View>
        }
      />
    </View>
  );
}