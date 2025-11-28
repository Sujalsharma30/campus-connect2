// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';

// type QuizCardProps = {
//   id: string;
//   title: string;
//   subject: string;
//   subjectIcon: keyof typeof MaterialIcons.glyphMap;
//   status: string;
//   score?: number;
//   questionCount: number;
//   onPress: () => void;
// };

// export default function QuizCard({
//   title,
//   subject,
//   subjectIcon,
//   status,
//   score,
//   questionCount,
//   onPress,
// }: QuizCardProps) {
//   const isCompleted = status === 'Completed';
//   const statusColor = isCompleted ? 'text-green-600' : 'text-orange-500';
//   const buttonBgColor = isCompleted ? 'bg-white border border-gray-300' : 'bg-red-600';
//   const buttonTextColor = isCompleted ? 'text-gray-700' : 'text-white';
//   const buttonText = isCompleted ? 'Review' : 'Start';

//   return (
//     <View className="w-full rounded-md bg-white p-4 shadow-sm border border-zinc-200">
//       <View className="flex-row items-start justify-between gap-4">
//         <View className="flex-col gap-2">
//           <Text className="text-base font-semibold text-gray-800">{title}</Text>
//           <View className="flex-row items-center text-sm text-gray-500">
//             <MaterialIcons name={subjectIcon} size={18} color="#6B7280" style={{ marginRight: 6 }} />
//             <Text>{subject}</Text>
//           </View>
//           <Text className={`text-sm ${statusColor}`}>
//             <Text className="font-medium">
//               {status}
//               {isCompleted && score ? ` - Score: ${score}%` : ''}
//             </Text>
//             <Text>, {questionCount} Questions</Text>
//           </Text>
//         </View>
//         <TouchableOpacity
//           onPress={onPress}
//           className={`flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm ${buttonBgColor}`}
//         >
//           <Text className={buttonTextColor}>{buttonText}</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type QuizCardProps = {
  quiz: {
    title: string;
    subject: string;
    status: "Pending" | "Completed";
    questions: number;
    score?: number;
  };
  onStartPress: () => void;
};

// Map subjects to MaterialIcons names
const subjectIcons: { [key: string]: string } = {
  Mathematics: "functions",
  Science: "science",
  English: "translate",
  "Social Studies": "public",
};

export default function QuizCard({ quiz, onStartPress }: QuizCardProps) {
  const isCompleted = quiz.status === "Completed";

  return (
    <View className="w-full rounded-md bg-white p-4 shadow-sm border border-zinc-200">
      <View className="flex-row items-start justify-between gap-4">
        <View className="flex-col gap-2">
          <Text className="text-base font-semibold text-gray-800">
            {quiz.title}
          </Text>
          <View className="flex-row items-center text-sm text-gray-500">
            {subjectIcons[quiz.subject] && (
              <MaterialIcons
                name={subjectIcons[quiz.subject] as any}
                size={16}
                color="#6B7280"
                style={{ marginRight: 6 }}
              />
            )}
            <Text>{quiz.subject}</Text>
          </View>
          <View
            className={`text-sm ${isCompleted ? "text-green-600" : "text-orange-500"}`}
          >
            <Text className="font-medium">
              {isCompleted ? `Completed - Score: ${quiz.score}%` : "Pending"}
            </Text>
            <Text>, {quiz.questions} Questions</Text>
          </View>
        </View>
        <TouchableOpacity
          className={`flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm ${
            isCompleted
              ? "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              : "bg-red-500 text-white hover:bg-red-700"
          }`}
          onPress={onStartPress}
        >
          <Text
            className={`text-sm font-medium ${isCompleted ? "text-gray-700" : "text-white"}`}
          >
            {isCompleted ? "Review" : "Start"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
