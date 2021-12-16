import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
  ScrollView,
  FlatList,
  Alert,
  ToastAndroid,
  BackHandler,
} from "react-native";

export default function App() {
  const [header, setHeader] = useState("Home");
  const [value, setValue] = useState(true);
  const [username, setUsername] = useState("");
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [dataPembayaran, setDataPembayaran] = useState([
    {
      namaBarang: "apel",
      harga: 10000,
    },
    {
      namaBarang: "jeruk",
      harga: 15000,
    },
    {
      namaBarang: "wortel",
      harga: 20000,
    },
    {
      namaBarang: "pisang",
      harga: 20000,
    },
  ]);

  const backAction = () => {};

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#7b1fa2" />
      <View style={styles.header}>
        <Text style={styles.title}>{header}</Text>
      </View>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
        onPress={() =>
          Alert.alert("Penting", "anda menakan gambar", [
            {
              text: "Cancel",
              onPress: () => console.log("menekan cancel"),
              style: "cancel",
            },
            {
              text: "Ok",
              onPress: () => console.log("menekan ok"),
            },
          ])
        }
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1639422839168-ba0bd0d21d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <FlatList
        style={{ flex: 1, marginTop: 20 }}
        data={dataPembayaran}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.wrapperList}
            onPress={() =>
              ToastAndroid.show(
                `anda menekan ${item.namaBarang}`,
                ToastAndroid.SHORT
              )
            }
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>
              {item.namaBarang}
            </Text>
            <Text style={{ color: "#ffF" }}>{item.harga}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.namaBarang}
      />

      {/* <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Switch value={value} onValueChange={() => setValue(!value)} />
      </View>

      <TextInput
        value={username}
        style={styles.textInput}
        onChangeText={(value) => setUsername(value)}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 14 }}>
          Click Me
        </Text>
      </TouchableOpacity> */}
      {/* <TouchableOpacity style={styles.button}>
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 14 }}>
          Click Me
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 14 }}>
          Click Me
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 14 }}>
          Click Me
        </Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#9c27b0",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  title: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
  image: {
    width: 300,
    height: 300,
  },
  button: {
    backgroundColor: "#9c27b0",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 50,
    elevation: 3,
  },
  textInput: {
    borderWidth: 1,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginTop: 10,
    backgroundColor: "#9c27b0",
    borderColor: "#9c27b0",
    color: "#fff",
  },
  wrapperList: {
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: "#9c27b0",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 20,
  },
});
