import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 172,
    height: 89,
    resizeMode: "contain",
    marginTop: 40,
    marginBottom: 100
  },
  inputView:{
    flexDirection: 'row',
    width: 279,
    height: 55,
    backgroundColor: '#4E504F26',
    borderRadius: 10,
    alignContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  input:{
    width: '100%',
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    color: '#fff'
  },
  svg: {
    width: 30,
    height: 30,
  },
  text:{
    color: 'white',
    width: 279,
    marginTop: 30,
    fontFamily: 'Poppins_300Light'
  }, 
  btn:{
    width: 279,
    height: 49, 
    borderRadius: 10,
    marginTop: 133,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#40DD67',
  },
  textBtn:{
    color: 'white',
    fontSize: 20, 
    fontFamily: 'Poppins_700Bold'
   }
})

export default styles;