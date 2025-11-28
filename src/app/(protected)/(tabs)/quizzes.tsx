// import React, { useState } from 'react';
// import { View, ScrollView, Text, Pressable } from 'react-native';
// import { useRouter } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';

// // Correct Relative Imports
// import QuizSummary from '../../../components/Quizz/QuizzSummary';
// import QuizList from '../../../components/Quizz/QuizzList';

// // --- Mock Data ---
// const DUMMY_QUIZZES = [
//   { id: '1', title: 'Mathematics Quiz #2', subject: 'Mathematics', status: 'Pending', questions: 10, date: 'Due Oct 24' },
//   { id: '2', title: 'Science Quiz #3', subject: 'Science', status: 'Pending', questions: 12, date: 'Due Oct 25' },
//   { id: '3', title: 'English Grammar Quiz #1', subject: 'English', status: 'Completed', questions: 15, score: 80, date: 'Submitted Oct 20' },
//   { id: '4', title: 'Social Studies Quiz #1', subject: 'Social Studies', status: 'Completed', questions: 10, score: 65, date: 'Submitted Oct 18' },
//   { id: '5', title: 'Algebra Basics', subject: 'Mathematics', status: 'Pending', questions: 10, date: 'Due Oct 30' },
// ];

// export default function QuizzesScreen() {
//   const router = useRouter();
//   const [filter, setFilter] = useState<'All' | 'Pending' | 'Completed'>('All');

//   const handleQuizPress = (quizId: string) => {
//     router.push(`/(protected)/quizzes/${quizId}`);
//   };

//   const filteredQuizzes = DUMMY_QUIZZES.filter((quiz) => {
//     if (filter === 'All') return true;
//     return quiz.status === filter;
//   });

//   const FilterTab = ({ label }: { label: typeof filter }) => (
//     <Pressable
//       onPress={() => setFilter(label)}
//       className={`px-4 py-2 rounded-full border ${
//         filter === label
//           ? 'bg-slate-900 border-slate-900'
//           : 'bg-white border-slate-200'
//       } mr-2`}
//     >
//       <Text className={`text-xs font-bold ${filter === label ? 'text-white' : 'text-slate-600'}`}>
//         {label}
//       </Text>
//     </Pressable>
//   );

//   return (
//     <View className="flex-1 bg-slate-50">
//       <StatusBar style="dark" />
      
//       <View className="pt-4 px-4 pb-2">
//         <Text className="text-2xl font-bold text-slate-900 mb-4">My Quizzes</Text>
//         <View className="flex-row mb-2">
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//             <FilterTab label="All" />
//             <FilterTab label="Pending" />
//             <FilterTab label="Completed" />
//           </ScrollView>
//         </View>
//       </View>

//       <View className="flex-1 relative">
//         <ScrollView 
//             className="flex-1 px-4" 
//             contentContainerStyle={{ paddingBottom: 100 }}
//             showsVerticalScrollIndicator={false}
//         >
//           <QuizList 
//             quizzes={filteredQuizzes} 
//             onQuizPress={handleQuizPress} 
//           />
//         </ScrollView>

//         {DUMMY_QUIZZES.length > 0 && (
//            <View className="absolute bottom-0 w-full px-4 pb-6">
//               <QuizSummary quizzes={DUMMY_QUIZZES} />
//            </View>
//         )}
//       </View>
//     </View>
//   );
// }