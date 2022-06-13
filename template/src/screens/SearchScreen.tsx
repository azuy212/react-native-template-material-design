import React from 'react';

import { View } from 'react-native';
import { Text } from 'react-native-paper';

import { FlexStyles } from '@/styles';

function SearchScreen() {
  return (
    <View style={[FlexStyles.flexBase, FlexStyles.flexCenter]}>
      <Text>SearchScreen</Text>
    </View>
  );
}

export default SearchScreen;
