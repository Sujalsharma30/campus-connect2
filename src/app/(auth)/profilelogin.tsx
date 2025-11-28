import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next'; // Import Hook

export default function ProfileLogin() {
  const router = useRouter();
  const { t } = useTranslation(); // Init Hook
  const [role, setRole] = useState('student'); // 'student' or 'faculty'

  // Helper to determine active tab style safely
  // This approach prevents the "Navigation Context" crash by avoiding 
  // complex conditional classNames during re-renders
  const getTabStyle = (activeRole: string) => {
    const isActive = role === activeRole;
    return {
      backgroundColor: isActive ? '#FFFFFF' : 'transparent',
      elevation: isActive ? 2 : 0, // Shadow for Android
      shadowColor: '#000',         // Shadow for iOS
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: isActive ? 0.1 : 0,
      shadowRadius: 2,
    };
  };

  return (
    <View className="flex-1 bg-[#f9fafb]">
      <View className="flex-1 flex-col justify-between">
        <View className="flex flex-col px-6 pt-8">
          
          {/* Header with Dynamic Title */}
          <View className="flex flex-row items-center justify-between mb-6">
            <Text className="text-xl font-bold text-[#111827]">
              {role === 'student' ? t('student_login', 'Student Login') : t('faculty_portal', 'Faculty Portal')}
            </Text>
            {/* <Pressable className="text-[#111827]">
              <MaterialIcons name="volume-up" size={32} color="#a7a214ff" />
            </Pressable> */}
          </View>

          {/* Switchable Role Toggle */}
          <View className="flex-row bg-gray-200 rounded-xl p-1 mb-8">
            <TouchableOpacity 
              onPress={() => setRole('student')}
              style={getTabStyle('student')}
              className="flex-1 flex-row items-center justify-center py-3 rounded-lg gap-2"
              activeOpacity={0.7}
            >
              <FontAwesome5 name="user-graduate" size={16} color={role === 'student' ? '#f59e0b' : '#6b7280'} />
              <Text className={`font-bold ${role === 'student' ? 'text-gray-900' : 'text-gray-500'}`}>
                {t('student', 'Student')}
              </Text>
            </TouchableOpacity>
            
            {/* <TouchableOpacity 
              onPress={() => setRole('faculty')}
              style={getTabStyle('faculty')}
              className="flex-1 flex-row items-center justify-center py-3 rounded-lg gap-2"
              activeOpacity={0.7}
            >
              <FontAwesome5 name="chalkboard-teacher" size={16} color={role === 'faculty' ? '#f59e0b' : '#6b7280'} />
              <Text className={`font-bold ${role === 'faculty' ? 'text-gray-900' : 'text-gray-500'}`}>
                {t('faculty', 'Faculty')}
              </Text>
            </TouchableOpacity> */}
          </View>

          {/* Dynamic Form Fields based on Role */}
          <View className="flex-col gap-6">
            {/* ID Input */}
            <View className="relative">
              <Text className="absolute -top-2 left-4 bg-[#f9fafb] px-1 text-xs font-medium text-[#6b7280] z-10">
                {role === 'student' ? t('student_id_label', 'Enrollment / Student ID') : t('faculty_id_label', 'Employee / Faculty ID')}
              </Text>
              <TextInput
                className="w-full rounded-xl border border-gray-300 bg-transparent p-4 text-[#111827] focus:border-amber-500 focus:ring-0"
                placeholder={role === 'student' ? t('student_placeholder', 'e.g. 0827CS...') : t('faculty_placeholder', 'e.g. FAC-CS...')}
                placeholderTextColor="#9ca3af"
                autoCapitalize="none"
              />
            </View>

            {/* Password Input */}
            <View className="relative">
              <Text className="absolute -top-2 left-4 bg-[#f9fafb] px-1 text-xs font-medium text-[#6b7280] z-10">
                {t('password', 'Password')}
              </Text>
              <TextInput
                className="w-full rounded-xl border border-gray-300 bg-transparent p-4 text-[#111827] focus:border-amber-500 focus:ring-0"
                placeholder={t('enter_password', 'Enter your password')}
                placeholderTextColor="#9ca3af"
                secureTextEntry={true}
              />
            </View>

            {/* Extra Field only for Faculty (Conditional Rendering) */}
            {role === 'faculty' && (
               <View className="flex-row items-center gap-2 px-1">
                 <MaterialIcons name="security" size={14} color="#6b7280" />
                 <Text className="text-xs text-gray-500">{t('faculty_2fa', 'Faculty access requires 2FA verification.')}</Text>
               </View>
            )}
          </View>

          <View className="mt-4">
            <Text className="text-sm text-blue-800">
               {/* Forgot Password? Link can go here */}
            </Text>
          </View>
        </View>

        {/* Footer Buttons */}
        <View className="px-6 pb-8">
          <View className="flex-row items-center gap-4 mx-auto">
            <Pressable
              onPress={() => router.back()}
              className="flex w-1/2 items-center justify-center h-12 px-6 rounded-xl text-base font-bold bg-gray-900 text-white"
            >
              <Text className="text-white font-semibold">{t('back', 'Back')}</Text>
            </Pressable>
            
            {/* Redirects to Home (Protected Routes) */}
            <Pressable 
              className={`flex w-1/2 items-center justify-center h-12 px-6 rounded-xl text-base font-bold shadow-md ${role === 'student' ? 'bg-amber-500 shadow-amber-200' : 'bg-indigo-600 shadow-indigo-200'}`}
              onPress={() => router.replace("/(protected)/(tabs)/home")}
            >
              <Text className="truncate text-white font-bold">
                {role === 'student' ? t('login', 'Login') : t('access_portal', 'Access Portal')}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}