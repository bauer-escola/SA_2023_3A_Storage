import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        position: 'relative'
    },

    headerText:{
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },

    Button:{
        backgroundColor: '#0C0C0C',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        width: '100%',
        marginTop: 30,
        color: '#9E9D9D',
    },

    textButton:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
})

export default styles;