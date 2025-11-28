import React, { useState } from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Lesson = {
  title: string;
  size: string;
};

type SubjectItemProps = {
  iconName: keyof typeof MaterialIcons.glyphMap;
  iconBgColor: string;
  iconColor: string;
  title: string;
  size: string;
  lessons?: Lesson[];
};

const SubjectItem = ({
  iconName,
  iconBgColor,
  iconColor,
  title,
  size,
  lessons,
}: SubjectItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View className="rounded-xl border border-zinc-200 bg-white shadow-md">
      <Pressable onPress={() => setIsOpen(!isOpen)}>
        <View className="flex-row items-center justify-between p-4">
          <View className="flex-row items-center gap-3">
            <View
              className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBgColor}`}
            >
              <MaterialIcons name={iconName} size={24} color={iconColor} />
            </View>
            <View>
              <Text className="font-semibold text-gray-900">{title}</Text>
              <Text className="text-sm text-gray-500">{size}</Text>
            </View>
          </View>
          <MaterialIcons
            name="expand-more"
            size={24}
            color="#4B5563"
            style={{ transform: [{ rotate: isOpen ? "180deg" : "0deg" }] }}
          />
        </View>
      </Pressable>
      {lessons && lessons.length > 0 && isOpen && (
        <View className="border-t border-gray-100 p-2">
          {lessons.map((lesson, index) => (
            <Pressable
              key={index}
              className="flex-row items-center gap-4 rounded-lg px-4 py-2 active:bg-gray-50"
            >
              <Text className="flex-1 truncate font-medium">
                {lesson.title}
              </Text>
              <Text className="text-sm text-gray-500">{lesson.size}</Text>
              <TouchableOpacity className="flex h-8 w-8 items-center justify-center rounded-full active:bg-gray-100">
                <MaterialIcons name="delete" size={24} color="#6B7280" />
              </TouchableOpacity>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

export default function DownloadedContent() {
  return (
    <View className="flex-col gap-4">
      <Text className="text-lg font-semibold text-gray-900">
        Downloaded Content
      </Text>
      <View className="flex-col gap-3">
        <SubjectItem
          iconName="calculate"
          iconBgColor="bg-blue-100"
          iconColor="#3B82F6"
          title="Mathematics"
          size="120 MB"
          lessons={[
            { title: "Lesson 1: Numbers", size: "45 MB" },
            { title: "Lesson 2: Addition", size: "40 MB" },
            { title: "Lesson 3: Subtraction", size: "35 MB" },
          ]}
        />
        <SubjectItem
          iconName="science"
          iconBgColor="bg-purple-100"
          iconColor="#A855F7"
          title="Science"
          size="150 MB"
        />
        <SubjectItem
          iconName="translate"
          iconBgColor="bg-green-100"
          iconColor="#22C55E"
          title="English"
          size="80 MB"
        />
        <SubjectItem
          iconName="book"
          iconBgColor="bg-yellow-100"
          iconColor="#FBBF24"
          title="Punjabi"
          size="100 MB"
        />
      </View>
    </View>
  );
}
