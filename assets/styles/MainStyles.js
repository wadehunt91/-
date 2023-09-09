import { StyleSheet } from "react-native";

const MainStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4F5D75',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonStyle: {
      width : 300,
      height: 30,
      backgroundColor: '#7261A3',
      alignContent : "center",
      margin: 5,
      borderRadius: 10,
    },
    buttonText: {
      textAlign : "center",
      color: "white",
      fontSize: 22,
      fontWeight: 'bold',
    },
    headerText: {
      fontSize: 24,
      color: 'white',
      letterSpacing: 4,
      textTransform: 'uppercase',
    }
  });

  export default MainStyles;