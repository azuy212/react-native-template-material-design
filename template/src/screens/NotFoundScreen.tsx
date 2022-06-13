import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, TouchableNativeFeedback, View } from 'react-native';

import { RootStackParamList } from '@/navigation/types';
import { FlexStyles } from '@/styles';
import { TypographyStyles } from '@/styles/typography';

export default function NotFoundScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <View style={[FlexStyles.flexBase, FlexStyles.flexCenter]}>
      <Text style={TypographyStyles.h3}>This screen does not exist.</Text>
      <TouchableNativeFeedback
        onPress={() => navigation.replace('Root')}
        useForeground
      >
        <View>
          <Text>Go to home screen!</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
