import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, FlatList } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// Mock Data for demonstration
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
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Course', 'Event', 'Faculty', 'Resource'];

  // Filter Logic
  const filteredData = ALL_DATA.filter(item => {
    const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = activeFilter === 'All' || item.type === activeFilter;
    return matchesQuery && matchesFilter;
  });

  // Render individual search result
  const renderItem = ({ item }: { item: typeof ALL_DATA[0] }) => (
    <Pressable className="flex-row items-center p-4 bg-white mb-3 rounded-xl border border-slate-100 shadow-sm active:bg-slate-50">
      {/* Icon Box */}
      <View className={`p-3 rounded-full mr-4 ${
        item.type === 'Course' ? 'bg-blue-100' :
        item.type === 'Event' ? 'bg-amber-100' :
        item.type === 'Faculty' ? 'bg-purple-100' : 'bg-teal-100'
      }`}>
        <MaterialIcons 
          name={
            item.type === 'Course' ? 'book' :
            item.type === 'Event' ? 'event' :
            item.type === 'Faculty' ? 'person' : 'library-books'
          } 
          size={24} 
          color={
            item.type === 'Course' ? '#2563eb' :
            item.type === 'Event' ? '#d97706' :
            item.type === 'Faculty' ? '#9333ea' : '#0d9488'
          } 
        />
      </View>
      
      {/* Text Info */}
      <View className="flex-1">
        <Text className="text-base font-semibold text-slate-800">{item.title}</Text>
        <Text className="text-xs text-slate-500">{item.subtitle}</Text>
      </View>
      
      {/* Arrow */}
      <MaterialIcons name="chevron-right" size={24} color="#cbd5e1" />
    </Pressable>
  );

  return (
    <View className="flex-1 bg-slate-50 px-4 pt-12">
      {/* Header */}
      <View className="flex-row items-center mb-6 gap-3">
        <Pressable 
          onPress={() => router.back()} 
          className="p-2 bg-white rounded-full border border-slate-200"
        >
           <MaterialIcons name="arrow-back" size={24} color="#334155" />
        </Pressable>
        <Text className="text-2xl font-bold text-slate-900">Search</Text>
      </View>

      {/* Search Input Field */}
      <View className="flex-row items-center bg-white border border-slate-200 rounded-xl px-4 py-3 mb-6 shadow-sm focus:border-amber-500">
        <Ionicons name="search" size={20} color="#94a3b8" />
        <TextInput 
          className="flex-1 ml-3 text-slate-700 font-medium h-full"
          placeholder="Search courses, events, people..."
          placeholderTextColor="#94a3b8"
          value={query}
          onChangeText={setQuery}
          autoFocus={true}
        />
        {query.length > 0 && (
          <Pressable onPress={() => setQuery('')}>
            <Ionicons name="close-circle" size={20} color="#94a3b8" />
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
                ? 'bg-slate-900 border-slate-900' 
                : 'bg-white border-slate-200'
              }`}
            >
              <Text className={`font-semibold text-sm ${activeFilter === item ? 'text-white' : 'text-slate-600'}`}>
                {item}
              </Text>
            </Pressable>
          )}
        />
      </View>

      {/* Results List */}
      <Text className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider pl-1">
        {query ? 'Results' : 'Recent Searches'}
      </Text>
      
      <FlatList 
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="items-center justify-center mt-10">
            <MaterialIcons name="search-off" size={64} color="#cbd5e1" />
            <Text className="text-slate-400 mt-4 font-medium">No results found for "{query}"</Text>
          </View>
        }
      />
    </View>
  );
}