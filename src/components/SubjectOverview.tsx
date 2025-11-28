import React from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// Define strict types for our data
type CourseData = {
  id: string;
  iconName: keyof typeof MaterialIcons.glyphMap;
  iconColor: string;
  title: string;
  progress: number;
  statusText: string;
  statusColor: string;
};

// University-level Mock Data (CS Curriculum)
const courses: CourseData[] = [
  {
    id: "cs-101",
    iconName: "dns",
    iconColor: "#0f766e", // Teal-700
    title: "Data Structures",
    progress: 75,
    statusText: "75% Completed",
    statusColor: "text-teal-700",
  },
  {
    id: "cs-102",
    iconName: "language",
    iconColor: "#ea580c", // Orange-600
    title: "Web Engineering",
    progress: 45,
    statusText: "Mid-Term Soon",
    statusColor: "text-orange-600",
  },
  {
    id: "cs-103",
    iconName: "storage",
    iconColor: "#2563eb", // Blue-600
    title: "DBMS",
    progress: 90,
    statusText: "Project Due",
    statusColor: "text-blue-600",
  },
  {
    id: "cs-104",
    iconName: "security",
    iconColor: "#dc2626", // Red-600
    title: "Cyber Security",
    progress: 20,
    statusText: "Download Syllabus",
    statusColor: "text-red-600",
  },
  {
    id: "cs-105",
    iconName: "code",
    iconColor: "#7c3aed", // Violet-600
    title: "Python Lab",
    progress: 100,
    statusText: "Completed",
    statusColor: "text-violet-600",
  },
  {
    id: "cs-106",
    iconName: "psychology",
    iconColor: "#db2777", // Pink-600
    title: "Soft Skills",
    progress: 60,
    statusText: "Attendance: 85%",
    statusColor: "text-pink-600",
  },
];

type SubjectCardProps = CourseData;

const SubjectCard = ({
  id,
  iconName,
  iconColor,
  title,
  progress,
  statusText,
  statusColor,
}: SubjectCardProps) => {
  const router = useRouter();

  // Helper to map text colors to background colors for the progress bar
  // Using explicit hex codes ensures the bar matches the text perfectly
  const getProgressColor = () => {
    switch (statusColor) {
      case "text-teal-700": return "#0f766e";
      case "text-orange-600": return "#ea580c";
      case "text-blue-600": return "#2563eb";
      case "text-red-600": return "#dc2626";
      case "text-violet-600": return "#7c3aed";
      case "text-pink-600": return "#db2777";
      default: return "#4b5563";
    }
  };

  return (
    <Pressable
      // Navigates to a specific course detail page
      onPress={() => router.push(`/(protected)/course/${id}`)}
      className="flex-col justify-between rounded-2xl border border-slate-100 bg-white p-4 shadow-sm w-[48%] mb-4 active:bg-slate-50"
      style={{ elevation: 2 }} // Adds subtle shadow on Android
    >
      <View className="flex-row justify-between items-start">
        <View className="p-2 rounded-xl bg-slate-50">
          <MaterialIcons name={iconName} size={28} color={iconColor} />
        </View>
        {progress === 100 && (
           <MaterialIcons name="check-circle" size={16} color="#22c55e" />
        )}
      </View>

      <View className="flex-col mt-3">
        <Text 
          className="font-bold text-slate-800 text-sm mb-2" 
          numberOfLines={1}
        >
          {title}
        </Text>
        
        {/* Progress Bar Container */}
        <View className="w-full bg-slate-100 rounded-full h-1.5 mb-2 overflow-hidden">
          <View
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              backgroundColor: getProgressColor(),
            }}
          />
        </View>
        
        <Text className={`text-[10px] font-medium ${statusColor}`}>
          {statusText}
        </Text>
      </View>
    </Pressable>
  );
};

export default function SubjectsOverview() {
  return (
    <View className="mb-6 px-1">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-bold text-slate-900">
          My Courses
        </Text>
        <Pressable>
            <Text className="text-amber-600 font-semibold text-sm">See All</Text>
        </Pressable>
      </View>
      
      <View className="flex flex-row flex-wrap justify-between">
        {courses.map((course) => (
          <SubjectCard key={course.id} {...course} />
        ))}
      </View>
    </View>
  );
}