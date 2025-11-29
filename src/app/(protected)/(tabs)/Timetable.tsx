import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  StatusBar,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind"; 

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const TIMETABLE = {
  Mon: [
    { 
      id: "1", time: "09:00 AM - 10:00 AM", subject: "DSA", room: "LH-101", type: "Lecture", 
      colorClass: "bg-sky-100 dark:bg-sky-900/30 border-sky-200 dark:border-sky-800" 
    },
    { 
      id: "2", time: "10:00 AM - 11:00 AM", subject: "Web Engg", room: "LH-102", type: "Lecture", 
      colorClass: "bg-orange-100 dark:bg-orange-900/30 border-orange-200 dark:border-orange-800" 
    },
    { 
      id: "3", time: "11:00 AM - 11:30 AM", subject: "Break", room: "Canteen", type: "Break", 
      colorClass: "bg-gray-100 dark:bg-slate-800 border-gray-200 dark:border-slate-700" 
    },
    { 
      id: "4", time: "11:30 AM - 01:30 PM", subject: "Python Lab", room: "LAB-3", type: "Lab", 
      colorClass: "bg-purple-100 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800" 
    },
  ],
  Tue: [
    { 
      id: "5", time: "09:00 AM - 10:00 AM", subject: "DBMS", room: "LH-101", type: "Lecture", 
      colorClass: "bg-teal-100 dark:bg-teal-900/30 border-teal-200 dark:border-teal-800" 
    },
  ],
  Wed: [],
  Thu: [],
  Fri: [],
  Sat: [],
};

export default function TimeTable() {
  const [selected, setSelected] = useState("Mon");
  const { colorScheme } = useColorScheme();

  const renderItem = ({ item }) => {
    const [start = "--", end = "--"] = item.time?.split(" - ") ?? [];

    return (
      <View className="flex-row mb-5">
        <View className="w-[70px] items-center mr-3 pt-1.5">
          <Text className="font-bold text-gray-900 dark:text-gray-100">{start}</Text>
          <Text className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">{end}</Text>
        </View>

        <View 
          className={`flex-1 p-4 rounded-[18px] border ${item.colorClass}`}
        >
          <Text className="font-bold text-base text-gray-900 dark:text-white">
            {item.subject}
          </Text>

          {item.type !== "Break" && (
            <View className="flex-row mt-2.5 items-center">
              <MaterialIcons 
                name="location-on" 
                size={14} 
                color={colorScheme === 'dark' ? '#94a3b8' : '#4b5563'} 
              />
              <Text className="ml-1 text-gray-600 dark:text-gray-300 text-sm">
                {item.room}
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-slate-50 dark:bg-slate-950">
      <StatusBar 
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"} 
        backgroundColor={colorScheme === "dark" ? "#0f172a" : "#ffffff"} 
      />

      <View className="pt-[60px] px-5 pb-5 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800">
        <Text className="text-[28px] font-bold text-gray-900 dark:text-white">
          Time Table
        </Text>

        <View className="mt-5">
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
          >
            {DAYS.map((day, i) => (
              <Pressable
                key={day}
                onPress={() => setSelected(day)}
                className={`items-center justify-center w-[60px] h-[60px] mr-2.5 rounded-2xl border ${
                  selected === day 
                    ? "bg-slate-900 dark:bg-blue-600 border-transparent" 
                    : "bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700"
                }`}
              >
                <Text
                  className={`font-semibold ${
                    selected === day 
                      ? "text-white" 
                      : "text-gray-900 dark:text-gray-300"
                  }`}
                >
                  {day}
                </Text>
                <Text 
                  className={`text-[10px] mt-0.5 ${
                    selected === day 
                      ? "text-gray-300" 
                      : "text-gray-500 dark:text-gray-500"
                  }`}
                >
                  {20 + i}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>

      {TIMETABLE[selected].length === 0 ? (
        <View className="flex-1 items-center justify-center opacity-60">
          <Ionicons 
            name="moon-outline" 
            size={60} 
            color={colorScheme === 'dark' ? '#475569' : '#CBD5E1'} 
          />
          <Text className="text-slate-400 dark:text-slate-500 mt-2.5 font-medium">
            No classes!
          </Text>
        </View>
      ) : (
        <FlatList
          data={TIMETABLE[selected]}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}