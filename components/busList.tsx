import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";

interface busListProps {
  ETA: string;
  nextStop: string;
  route: string;
  busNumber: string;
  lastStop: string;
}

const BusList: React.FC<busListProps> = ({
  ETA,
  nextStop,
  route,
  busNumber,
  lastStop,
}) => {
  const router = useRouter();

  const navigation : any = useNavigation();

  const handleMapTouch = () => {
    navigation.navigate("MapScreen");
  };

  return (
    <View style={styles.listContainer}>
      {/* left */}
      <View style={styles.left}>
        {/* map component */}
        <View
          style={[styles.map]}
          onTouchStart={handleMapTouch}
        >
          <MapView
            style={styles.mapbox}
            initialRegion={{
              latitude: 26.7605545,
              longitude: 83.3731675,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
        <View style={[styles.eta, styles.contentBox]}>
          <Text style={styles.heading}>Time to reach</Text>
          <Text style={styles.content}>{ETA}</Text>
        </View>
        <View style={[styles.busNo, styles.contentBox]}>
          <Text style={styles.heading}>Bus Number</Text>
          <Text style={styles.content}>{busNumber}</Text>
        </View>
      </View>

      {/* right */}
      <View style={styles.right}>
        <View style={[styles.route, styles.contentBox]}>
          <Text style={styles.heading}>Route</Text>
          <Text style={styles.content}>{route}</Text>
        </View>

        <View style={[styles.lastStop, styles.contentBox]}>
          <Text style={styles.heading}>Last Stop</Text>
          <Text style={styles.content}>{lastStop}</Text>
        </View>

        <View style={[styles.nextStop, styles.contentBox]}>
          <Text style={styles.heading}>Next Stop</Text>
          <Text style={styles.content}>{nextStop}</Text>
        </View>

        <TouchableOpacity
          style={[styles.trackBtn]}
          onPress={handleMapTouch}
        >
          <FontAwesome6
            name="location-arrow"
            size={24}
            color="#7abd23"
          />
          <Text
            style={{
              fontFamily: "Poppins_600",
              fontSize: 14,
              color: "#58841e",
            }}
          >
            Track Live Location
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BusList;

const styles = StyleSheet.create({
  listContainer: {
    width: Dimensions.get("screen").width - 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: Dimensions.get("screen").height / 3,
    backgroundColor: "#36363620",
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },

  mapbox: {
    width: "100%",
    height: "100%",
  },

  left: {
    flex: 1,
    gap: 5,
  },

  right: {
    flex: 1,
    gap: 5,
  },

  contentBox: {
    backgroundColor: "#f0f0f0",
    fontFamily: "Poppins_500",
    borderRadius: 5,
    maxHeight: 60,
    padding: 10,
    justifyContent: "center",
  },

  heading: {
    fontFamily: "Poppins_500",
    fontSize: 12,
    color: "#00000090",
    lineHeight: 16,
  },

  content: {
    color: "#000000",
    fontFamily: "Poppins_600",
    fontSize: 14,
    lineHeight: 18,
  },

  map: {
    flex: 4,
    backgroundColor: "#363636",
    borderRadius: 5,
  },

  eta: {
    flex: 1,
  },

  busNo: {
    flex: 1,
  },

  route: {
    flex: 1,
  },

  lastStop: {
    flex: 1,
  },

  nextStop: {
    flex: 1,
  },

  trackBtn: {
    flex: 1.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#a5ff3080",
  },
});