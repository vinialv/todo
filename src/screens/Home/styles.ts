import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex :1,
        backgroundColor:'#191919',
    },
    totalToDo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 26,
    },  
    totalCreated:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    totalConcluded:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },  
    textTotalCreated:{
        color: '#4EA8DE',
        fontWeight: '700',
        fontSize: 16,
    },  
    textTotalConcluded:{
        color: '#8284FA',
        fontWeight: '700',
        fontSize: 16,
    },
    textCounter:{
        backgroundColor: '#333333',
        color: '#FFF',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 16,
        paddingHorizontal: 12,
        paddingVertical: 2,
        fontWeight: '700',
        marginLeft: 8,
        fontSize: 16       
    },
    todo:{
        paddingHorizontal: 24,
    },
})