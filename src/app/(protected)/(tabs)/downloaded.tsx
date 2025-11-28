import DownloadList from '@/src/components/Downloads/DownloadList';
import StorageInfo from '@/src/components/Downloads/StorageInfo';
import React, { useState } from 'react';
import {  ScrollView, View, StatusBar } from 'react-native';


export default function App() {
  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" />
      <View className="relative flex-1">
        <ScrollView className="flex-1 px-4 pb-4">
          <DownloadList />
          <StorageInfo />
        </ScrollView>
      </View>
    </View>
  );
}