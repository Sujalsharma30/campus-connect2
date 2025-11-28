import React from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

export default function ClearDataSection() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleDeleteConfirm = () => {
    // Logic to delete the items
    console.log("Items deleted!");
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <View className="rounded-xl border border-red-200 bg-red-50 p-4">
      <Text className="font-semibold text-red-800">Clear All Data</Text>
      <Text className="mt-1 text-sm text-red-700">
        This will remove all downloaded lessons, quizzes, and progress from your
        device. This action cannot be undone.
      </Text>
      <Pressable
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-red-500 px-4 py-2.5 active:bg-red-600"
        onPress={() => setIsModalVisible(true)}
      >
        <MaterialIcons name="delete-forever" size={16} color="white" />
        <Text className="text-sm font-bold text-white">
          Clear All Downloaded Data
        </Text>
      </Pressable>
      {isModalVisible && (
        <DeleteConfirmationModal
          itemCount={3}
          onConfirm={handleDeleteConfirm}
          onCancel={handleCancel}
        />
      )}
    </View>
  );
}
