import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#333333',
        backgroundColor: '#262626',
        height: 64,
        marginBottom: 8,
    },
    check:{
        width: 25,
        height: 25,
    },
    description:{
        flex: 1,
        height: 64,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    descriptionText:{
        textAlign: 'left',
        color: '#FFF'
    },
    button:{
        width: 50,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

});