import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Modalize } from "react-native-modalize";
import faker from "faker";

import { Button } from "../button/Button";

export class SnappingList extends React.PureComponent {

  modal = React.createRef();

  state = {opened: false}

  carrinho = [""];

  renderHeader = () => (
    <View
      style={{
        paddingLeft: 20,
        paddingRight: 20,
        padding: 10,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Text
        style={{
          marginBottom: 2,
          fontSize: 16,
          fontWeight: "600",
          color: "#ccc",
        }}
      >
        Carrinho
      </Text>

      {this.carrinho.length > 0 ? (
        <Text
          style={{
            marginBottom: 2,
            fontSize: 22,
            fontWeight: "600",
            color: "#333",
          }}
        >
          Seu carrinho possui {this.carrinho.length} items
        </Text>
      ) : (
        <Text
          style={{
            marginBottom: 2,
            fontSize: 22,
            fontWeight: "600",
            color: "#333",
          }}
        >
          Seu carrinho está vazio
        </Text>
      )}
    </View>
  );

  renderContent = () => (
    <>
      <ScrollView style={s.content}>
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <View style={s.content__row} key={i}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={s.content__avatar}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={{ uri: faker.image.avatar() }}
                  />
                </View>

                <Text
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    color: "#333",
                    fontWeight: "bold",
                  }}
                >
                  {faker.name.findName()}
                </Text>
                <Text
                  style={{
                    marginTop: 10,
                    marginBottom: 10,
                    color: "#333",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  (2)
                </Text>
              </View>
              <Text>R$99,99</Text>
            </View>
          ))}
      </ScrollView>
      <View style={{ width: '100%', height: 'auto', paddingVertical: 10, paddingHorizontal: 20, display: 'flex', flexDirection: 'column' }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 16 }}>Taxa de serviço</Text>
        <Text style={{ fontSize: 16 }}>R$5</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 16 }}>Taxa de entrega</Text>
        <Text style={{ fontSize: 16 }}>R$10</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Total</Text>
        <Text style={{ fontSize: 16 }}>R$100</Text>
      </View>
      </View>
      {this.carrinho.length > 0 ? (
        <TouchableOpacity
        style={{
          marginBottom: 10,
          width: "90%",
          backgroundColor: "#333",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          margin: "5%",
          height: 50,
        }}
      >
        <Text style={{ color: "#fff" }}>Concluir pedido!</Text>
      </TouchableOpacity>
      ) : (
        <TouchableOpacity
          disabled={true}
          onPress={() => Alert.alert('Seu carrinho está vazio')}
          style={{
            marginTop: "auto",
            marginBottom: 50,
            width: "90%",
            backgroundColor: "#333",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            margin: "5%",
            height: 50,
          }}
        >
          <Text style={{ color: "#fff" }}>Seu carrinho está vazio!</Text>
        </TouchableOpacity>
      )}
    </>
  );

  openModal = () => {
    if (this.modal.current) {
      this.modal.current.open();
    }
  };

  scrollToTop = () => {
    if (this.modal.current) {
      this.modal.current.scrollTo({
        y: 0,
        animated: true,
      });
    }
  };

  render() {

    const { state } = this;
    const setState = state => this.setState(state);

    return (
      <Modalize
        onOpened={this.setState(state)}
        panGestureEnabled={this.carrinho.length > 0 ? true : false}
        ref={this.modal}
        modalHeight={400}
        handlePosition="inside"
        HeaderComponent={this.renderHeader}
      >
        {this.renderContent()}
      </Modalize>
    );
  }
}

const s = StyleSheet.create({
  modal__header: {
    paddingVertical: 15,
    marginHorizontal: 15,

    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },

  modal__headerText: {
    fontSize: 15,
    fontWeight: "200",
  },

  content: {
    paddingHorizontal: 15,
  },

  content__row: {
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-between",

    paddingVertical: 15,

    borderBottomColor: "#f9f9f9",
    borderBottomWidth: 1,
  },

  content__avatar: {
    width: 38,
    height: 38,

    marginRight: 15,

    overflow: "hidden",

    backgroundColor: "#eee",
    borderRadius: 19,
  },

  content__name: {
    fontSize: 16,
  },

  content__button: {
    alignItems: "center",
    justifyContent: "center",

    marginVertical: 20,
  },
});
