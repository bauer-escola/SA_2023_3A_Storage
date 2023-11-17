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
        fontWeight: 'bold'
    },

    pesquisa:{
        borderRadius: 20,
        backgroundColor: '#2B2B2B',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 40, 
        marginRight: 40,
        padding: 10,
        marginTop: 20,
        marginBottom: 50,
    },

    input:{
       color: '#0C0C0C', 
       fontSize: 18,
    },

    pesquisaImagem:{
        width: 20,
        height: 20,
    },

    Button:{
        backgroundColor: '#0C0C0C',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginLeft: 40, 
        marginRight: 40,
        marginTop: 20,
        color: '#9E9D9D'
    },

    textButton:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default styles;