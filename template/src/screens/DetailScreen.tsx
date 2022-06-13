import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { HomeStackParamList } from '@/navigation/types';
import { FlexStyles } from '@/styles';

function DetailScreen({
  navigation,
}: NativeStackScreenProps<HomeStackParamList, 'Detail'>) {
  return (
    <View style={[FlexStyles.flexBase, FlexStyles.flexCenter]}>
      <Text>DetailScreen</Text>
      <Button mode="contained" onPress={() => navigation.navigate('List')}>
        Go to List
      </Button>
    </View>
  );
}

export default DetailScreen;
