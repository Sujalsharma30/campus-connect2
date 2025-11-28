import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import StyledText from './StyledText';

const ContentSection = () => {
  return (
    <View className="px-4 pb-24">
      <View className="prose max-w-none rounded-lg bg-white p-6 shadow-sm">
        <Text className="font-bold text-xl mb-4 text-[#0d141b]">What is an Equation?</Text>
        <Text className="text-slate-700 mb-4">
          An equation is a mathematical statement that asserts the equality of two expressions. It contains an equals sign (=) separating the left-hand side (LHS) and the right-hand side (RHS). For example: <StyledText>2x + 3 = 7</StyledText>
        </Text>
        <Text className="text-slate-700 mb-4">
          Here, <StyledText>2x + 3</StyledText> is the LHS and <StyledText>7</StyledText> is the RHS. The variable <StyledText>x</StyledText> represents an unknown value that we need to find.
        </Text>
        <Text className="font-semibold text-lg mt-6 mb-3 text-[#0d141b]">Components of an Equation</Text>
        <View className="mb-4 pl-5">
          <View className="flex-row items-center">
            <Text className="text-slate-700">• </Text>
            <Text className="text-slate-700">
              <Text className="font-bold">Variables:</Text> Symbols (usually letters like <StyledText>x, y, z</StyledText>) representing unknown values.
            </Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-slate-700">• </Text>
            <Text className="text-slate-700">
              <Text className="font-bold">Constants:</Text> Known numerical values (e.g., 2, 3, 7).
            </Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-slate-700">• </Text>
            <Text className="text-slate-700">
              <Text className="font-bold">Coefficients:</Text> Numbers multiplying variables (e.g., 2 in <StyledText>2x</StyledText>).
            </Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-slate-700">• </Text>
            <Text className="text-slate-700">
              <Text className="font-bold">Operations:</Text> Mathematical operations like addition (+), subtraction (-), multiplication (*), and division (/).
            </Text>
          </View>
        </View>
        <Text className="font-semibold text-lg mt-6 mb-3 text-[#0d141b]">Solving Simple Equations</Text>
        <Text className="text-slate-700 mb-4">
          To solve an equation, we aim to isolate the variable on one side. We do this by performing the same operations on both sides to maintain equality.
        </Text>
        <View className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <Text className="font-semibold text-slate-800">Example 1: Solve <StyledText>x + 5 = 12</StyledText></Text>
          <View className="mt-2 pl-5">
            <Text className="text-slate-600">1. Subtract 5 from both sides: <StyledText>x + 5 - 5 = 12 - 5</StyledText></Text>
            <Text className="text-slate-600">2. Simplify: <StyledText>x = 7</StyledText></Text>
          </View>
        </View>
        <View className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <Text className="font-semibold text-slate-800">Example 2: Solve <StyledText>3y - 4 = 8</StyledText></Text>
          <View className="mt-2 pl-5">
            <Text className="text-slate-600">1. Add 4 to both sides: <StyledText>3y - 4 + 4 = 8 + 4</StyledText></Text>
            <Text className="text-slate-600">2. Simplify: <StyledText>3y = 12</StyledText></Text>
            <Text className="text-slate-600">3. Divide both sides by 3: <StyledText>3y / 3 = 12 / 3</StyledText></Text>
            <Text className="text-slate-600">4. Simplify: <StyledText>y = 4</StyledText></Text>
          </View>
        </View>
        <Text className="font-semibold text-lg mt-6 mb-3 text-[#0d141b]">Practice Problems</Text>
        <View className="mb-4 pl-5">
          <Text className="text-slate-700">1. Solve <StyledText>a - 6 = 15</StyledText></Text>
          <Text className="text-slate-700">2. Solve <StyledText>2b + 7 = 21</StyledText></Text>
          <Text className="text-slate-700">3. Solve <StyledText>c / 4 - 3 = 5</StyledText></Text>
        </View>
        <Pressable className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-white border border-zinc-300 px-4 py-3 shadow-sm">
          <MaterialIcons name="description" size={20} color="#475569" />
          <Text className="text-sm font-bold text-slate-700">Download Notes</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ContentSection;