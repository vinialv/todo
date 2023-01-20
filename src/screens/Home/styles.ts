import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex :1,
        backgroundColor:'#191919',
    },
    header:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 200,
        backgroundColor:'#0D0D0D'
    },
    logoImagem:{
        width: 132,
        height: 38,
    },
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