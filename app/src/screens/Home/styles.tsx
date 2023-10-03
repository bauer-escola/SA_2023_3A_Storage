import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  main:{
    alignItems:'center',
    marginTop: 100,
  },
  card:{
    borderRadius: 10,
    marginBottom: 30,
  },

  image:{
    borderRadius: 10,
    overflow: 'hidden',
    width: 300,
    height: 120,
    position: 'relative'
  },
  blackOpacity:{
    opacity: 0.7,
    backgroundColor: '#0C0C0C',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 40,
    position: 'absolute',
    bottom: 0,
  },
  cardTitle:{
    color: '#fff',
    fontSize: 20, 
    fontWeight: 'bold'
  },
  
})

export default styles;