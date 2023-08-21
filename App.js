import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Alert,
  View,
} from "react-native";

export default function App() {
  const introductions = () => {
    Alert.alert(
      "Todos os campos deverão sem preenchidos sem espaços desnecessário, uso de números inexistentes e outras considerações."
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar >
        <View>
          <Text style={styles.title}>Empresa XPTO</Text>
        </View>
      </StatusBar>
      <ScrollView>
        <View>
          <Image style={styles.img} source={logo}></Image>
          <Text
            style={styles.label}
            aria-label="Label for Username"
            nativeID="labelUsername"
          >
            Cadastramento de Clientes
          </Text>
        </View>
        <View>
          <Button title="Exiba as instruções: " onPress={introductions}/>
        </View>
        <View style={styles.formGroup}>
          <Text>Matricula</Text>
          <TextInput
            style={styles.input}
            aria-label="input"
            aria-labelledby="matricula"
          />
        </View>
        <View style={styles.formGroup}>
          <Text>Nome</Text>
          <TextInput
            style={styles.input}
            aria-label="input"
            aria-labelledby="nome"
          />
        </View>
        <View style={styles.formGroup}>
          <Text>Logradouro</Text>
          <TextInput
            style={styles.input}
            aria-label="input"
            aria-labelledby="logadouro"
          />
        </View>
        <View style={styles.formGroup}>
          <Text>Número</Text>
          <TextInput
            style={styles.input}
            aria-label="input"
            aria-labelledby="numero"
          />
        </View>
        <View style={styles.formGroup}>
          <Text>Bairro</Text>
          <TextInput
            style={styles.input}
            aria-label="input"
            aria-labelledby="bairro"
          />
        </View>
        <View style={styles.formGroup}>
          <Text>Cep</Text>
          <TextInput
            style={styles.input}
            aria-label="input"
            aria-labelledby="cep"
          />
        </View>
        <View style={styles.formGroup}>
          <Text>Cidade</Text>
          <TextInput
            style={styles.input}
            aria-label="input"
            aria-labelledby="cidade"
          />
        </View>
        <View style={styles.formGroup}>
          <Text>Uf</Text>
          <TextInput
            style={styles.input}
            aria-label="input"
            aria-labelledby="uf"
          />
        </View>
        <ScrollView style={styles.footer}>
          <Text>Nome: Igor Fernandes Barreto</Text>
          <Text>Matricula: 202002054239</Text>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const logo = {
  uri: "https://pr1.nicelocal.br.com/USGO09dP6gmiBb9VwrwkLQ/2400x1348,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2fxrvT8vYCWd22TVmcFOJ1WHM1qaD6P5nKKLzh_Mc2yg_VZr1BAUhr_GRW7sFyTCnA",
  width: 100,
  height: 100,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },  
  title: {
    textAlign: "center",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "rgb(33, 150, 243)",
    color: "#fff"
  },
  img: {
    alignSelf: "center",
    objectFit: "contain",
  },
  label: {
    paddingLeft: "1%",
    marginBottom: "5%",
  },
  formGroup: {
    padding: "1%",
    margin: "3%",
    borderColor: "#000",
    borderWidth: "1px",
  },
  input: {
    padding: "2%",
    borderBottomColor: "#000",
    borderBottomWidth: 2,
  },
  footer: {
    padding: "5%",
  },
});
