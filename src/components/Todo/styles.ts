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
        paddingHorizontal: 10,
        height: 28,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    trash:{
        width: 18,
        height: 20,
    },
    taskChecked:{
        flex: 1,
        width: 28,
        heiht: 28,
        borderRadius: 20,
        backgroundColor: '#8284FA',        
        justifyContent: 'center',
        alignItems: 'center',
    },
    taskUnchecked:{
        flex: 1,
        width: 28,
        heiht: 28,
        borderRadius: 20,
        borderColor: '#4EA8DE',
        borderWidth: 3,        
    },
    descriptionTextChecked:{
        textAlign: 'left',
        color: '#7F7F7F',
        textDecorationLine: 'line-through'
    }

});