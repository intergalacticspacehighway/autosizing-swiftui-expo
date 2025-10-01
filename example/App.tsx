import { AutoSizingView } from "auto-sizing-view";
import { StyleSheet, View } from "react-native";
import { Host } from "@expo/ui/swift-ui";

export default function App() {
  return (
    <View style={styles.container}>
      <Host matchContents style={{ backgroundColor: "red" }}>
        <AutoSizingView />
      </Host>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
