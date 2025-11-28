import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type DeleteConfirmationModalProps = {
  itemCount: number;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function DeleteConfirmationModal({
  itemCount,
  onConfirm,
  onCancel,
}: DeleteConfirmationModalProps) {
  return (
    <View className="absolute inset-0 flex h-full w-full flex-col justify-end bg-black/50">
      <View className="flex-col items-center rounded-t-2xl bg-white px-6 pb-8 pt-6 shadow-2xl">
        <View className="mb-4 h-1.5 w-10 rounded-full bg-gray-300"></View>
        <View className="w-full text-center">
          <Text className="text-2xl font-bold tracking-tight text-gray-900">
            Delete {itemCount} items?
          </Text>
          <Text className="mb-6 mt-2 text-base text-gray-600">
            This action is permanent. The content will be removed from your
            offline storage and you will need to download it again.
          </Text>
          <View className="flex-col gap-3">
            <TouchableOpacity
              onPress={onConfirm}
              className="flex h-14 w-full flex-row items-center justify-center rounded-xl bg-red-600 px-5 transition-colors active:bg-red-700"
            >
              <MaterialIcons name="delete" size={24} color="white" />
              <Text className="ml-2 text-lg font-bold text-white">
                Delete Permanently
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onCancel}
              className="flex h-14 w-full items-center justify-center rounded-xl bg-gray-200 px-5 transition-colors active:bg-gray-300"
            >
              <Text className="text-lg font-bold text-gray-800">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

// --- Example Usage ---

// import React, { useState } from "react";
// import { View, Text, Button } from "react-native";
// import DeleteConfirmationModal from "./DeleteConfirmationModal"; // Adjust the path

// export default function App() {
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const handleDeleteConfirm = () => {
//     // Logic to delete the items
//     console.log("Items deleted!");
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   return (
//     <View className="flex-1 items-center justify-center bg-gray-100">
//       <Text>Your Main App Content</Text>
//       <Button title="Show Delete Modal" onPress={() => setIsModalVisible(true)} />

//       {isModalVisible && (
//         <DeleteConfirmationModal
//           itemCount={3}
//           onConfirm={handleDeleteConfirm}
//           onCancel={handleCancel}
//         />
//       )}
//     </View>
//   );
// }