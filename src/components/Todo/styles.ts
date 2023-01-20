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
        width: 24,
        height: 24,
        backgroundColor: 'transparent',
        borderWidth: 3,
        borderColor: '#4EA8DE',
        borderRadius: 20,
        marginHorizontal: 12,
        padding: 4
    },
    description:{
        flex: 1,
        height: 64,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    descriptionText:{
        textAlign: 'left',
    },
    button:{
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});