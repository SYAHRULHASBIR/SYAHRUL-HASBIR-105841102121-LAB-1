import { StyleSheet, Text, View, Image, Button } from 'react-native';
const ButtonCustom = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center', //kolom
      alignItems: 'flex-end', //baris
      flexDirection: 'row',
      marginBottom: 100,
    }}>
      <ButtonComponent backgroundColor='green' text='Register' />
      <ButtonComponent backgroundColor='blue' text='sembarang' />
    </View>
  )
}

const ButtonComponent = ({ backgroundColor, text }) => {
    return (
      <View style={{
        backgroundColor: backgroundColor,
        width: 150,
        height: 70,
        borderRadius: 10,
        marginLeft: 10
      }}>
        <Text style={{
          color: 'white',
          textAlign: 'center',
          lineHeight: 70,
          fontSize: 25,
          fontWeight: 'bold',
        }}>
          {text}
        </Text>
      </View>
    )
  }
