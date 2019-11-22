import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

interface IProps {
  onPress: () => void;
  style?: any;
}

const hocElementWithPress = (Icon: any) => {
  return (props: IProps) => {
    const { onPress, style } = props;
    return (
      <View style={[styles.container, style]}>
        <TouchableOpacity onPress={onPress}>
          <Icon />
        </TouchableOpacity>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default hocElementWithPress;
