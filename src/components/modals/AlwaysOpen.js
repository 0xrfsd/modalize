import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Modalize } from "react-native-modalize";
import faker from "faker";

import { Button } from "../button/Button";

export class AlwaysOpen extends React.PureComponent {

  carrinho = ["", ""];

  modal = React.createRef();

  closeModal = (dest) => {
    if (this.modal.current) {
      this.modal.current.close(dest);
    }
  };

  renderContent = () => (
    <View
      style={{
        justifyContent: "center",
        display: 'flex',
        height: '100%',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <View style={{ display: 'flex', flexDirection: 'column'}}>
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
      <View style={{ height: 'auto', backgroundColor: '#333', width: '100%' }}></View>
        <View  style={{ width: '90%', margin: '5%', marginTop: '0%', overflow: 'hidden', backgroundColor: '#333', borderRadius: 5, height: 50, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={this.closeModal} style={{ fontWeight: 'bold', color: '#333' }}>
          <Text style={{ color: '#fff' }}>
          Concluir pedido!
          </Text>
        </TouchableOpacity>
        </View>
      {/* <Button
        name="Close to initial position"
        onPress={() => this.closeModal("alwaysOpen")}
      />
      <Button
        style={{ display: "flex", marginTop: "auto" }}
        name="Close completely"
        onPress={this.closeModal}
      /> */}
    </View>
  );

  render() {
    return (
      <Modalize
        ref={this.modal}
        modalStyle={s.content__modal}
        alwaysOpen={160}
      >
        {this.renderContent()}
      </Modalize>
    );
  }
}

const s = StyleSheet.create({
  content: {
    padding: 20,
  },

  content__modal: {
    marginTop: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: 16,
  },

  content__subheading: {
    marginBottom: 2,

    fontSize: 16,
    fontWeight: "600",
    color: "#ccc",
  },

  content__heading: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
  },

  content__description: {
    paddingTop: 10,
    paddingBottom: 10,

    fontSize: 15,
    fontWeight: "200",
    lineHeight: 22,
    color: "#666",
  },
});
