import { StyleSheet } from "react-native";
import { LineGraph, GraphPoint } from "react-native-graph";

export default function App() {
  const points: GraphPoint[] = [
    {
      date: new Date(2024, 1, 1),
      value: 10,
    },
    {
      date: new Date(2024, 2, 1),
      value: 100,
    },
  ];

  const goodRange = {
    x: {
      min: new Date(2024, 1, 1),
      max: new Date(2025, 1, 1),
    },
  };

  const badRange = {
    x: {
      min: new Date(2024, 1, 1),
      max: new Date(2070, 2, 1),
    },
  };

  return (
    <LineGraph
      points={points}
      range={badRange}
      animated={false}
      color="#4484B2"
      style={styles.graph}
    />
  );
}

const styles = StyleSheet.create({
  graph: {
    width: "100%",
    aspectRatio: 1,
    marginTop: 100,
  },
});
