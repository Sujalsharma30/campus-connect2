import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const videoWidth = width - 32; // Screen width minus padding (16px on each side)
const videoHeight = videoWidth * (9 / 16); // 16:9 aspect ratio

const VideoPlayer = () => {
  return (
    <View className="p-4 bg-red-400">
      <View
        className="relative overflow-hidden rounded-xl bg-slate-200 shadow-lg"
        style={{ width: videoWidth, height: videoHeight }} // Explicitly setting dimensions
      >
        <Image
          source={{ uri: 'https://placehold.co/600x400' }}
          className="h-full w-full"
          resizeMode="cover"
        />
        {/* Play Button Overlay */}
        <View className="absolute inset-0 flex items-center justify-center bg-black/30">
          <TouchableOpacity className="h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <MaterialIcons name="play-arrow" size={40} color="white" />
          </TouchableOpacity>
        </View>

        {/* Download and Captions Buttons */}
        <View className="absolute bottom-2 right-2 flex-row gap-2">
          <TouchableOpacity className="flex-row items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-sm">
            <MaterialIcons name="download" size={14} color="white" />
            <Text className="text-xs font-medium text-white">Download</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-sm">
            <MaterialIcons name="closed-caption" size={14} color="white" />
            <Text className="text-xs font-medium text-white">Captions</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VideoPlayer;