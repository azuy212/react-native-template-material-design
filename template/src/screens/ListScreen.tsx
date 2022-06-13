import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { HomeStackParamList } from '@/navigation/types';
import { FlexStyles } from '@/styles';

function ListScreen({
  navigation,
}: NativeStackScreenProps<HomeStackParamList, 'List'>) {
  return (
    <View style={[FlexStyles.flexBase, FlexStyles.flexCenter]}>
      <Text>ListScreen</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Detail')}>
        Go to Details
      </Button>
    </View>
  );
}

export default ListScreen;
