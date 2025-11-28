import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function QuizFloatingButton() {
  return (
    <TouchableOpacity className="absolute bottom-24 right-4 bg-white p-3 rounded-full shadow-lg ">
      <MaterialIcons name="apps" size={24} color="#ea2a2a" />
    </TouchableOpacity>
  );
}