import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    form:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 24,
        marginTop: -30,
        marginBottom: 8,        
    },
    input:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        height: 60,
        marginRight: 8,
        padding: 16,
        borderRadius: 6,
        borderWidth: 1,
        backgroundColor: '#262626',
        color: '#FFF',
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 6,
        backgroundColor: '#4EA8DE',
    },
    buttonImagem:{
        width: 20,
        height: 20,
    },
});