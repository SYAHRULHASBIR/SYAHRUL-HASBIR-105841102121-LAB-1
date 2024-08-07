import React from "react";
import { View, Text } from "react-native";
import { Button } from 'some-library';

const CostumButton = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center', //kolom
            alignItems: 'flex-end', //baris
            flexDirection: 'row',
            padding: 20,
            marginBottom: 80
          }}>
            <View style={{
              backgroundColor: 'red',
              width: 150,
              height: 80,
              borderRadius: 10,
              marginRight: 10
            }}>
              <Text style={{
                color: 'white',
                textAlign: 'center',
                lineHeight: 80,
                fontSize: 30,
                fontWeight: 'bold',
              }}>
                Login
              </Text>
            </View>
            <View style={{
              backgroundColor: 'blue',
              width: 150,
              height: 80,
              borderRadius: 10,
              marginLeft: 10
            }}>
              <Text style={{
                color: 'white',
                textAlign: 'center',
                lineHeight: 80,
                fontSize: 30,
                fontWeight: 'bold',
              }}>
                Register
              </Text>
            </View>
          </View >
        );
      }

      export default CostumButton;