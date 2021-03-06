const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF',
      paddingTop: 10,
      paddingBottom: 30
    },
    summary: {
        alignSelf: 'stretch',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 6,
        borderWidth: 1,
        borderColor: '#141D2B',
        borderRadius: 8,
        padding:  10,
        
    },
    itemRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15
    },
    itemDate:{
      width: 40,
      fontSize: 12,
      color: '#666',
      textAlign: 'center'
    },
    itemLabel: {
      flex: 1,
      marginHorizontal: 15,
    },
    itemTitle: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    itemDescription: {
        fontSize: 14,
        color: '#666'
    },
    itemAmount: {
      textAlign: 'right',
      fontWeight: 'bold'
    },
    positive: { 
        color: '#00E'
    },
    negative: { 
        color: '#900'
    },
    logo: {
        width: 200,
        height: 60,
        resizeMode: 'contain'
    },
    list: {
        alignSelf: 'stretch',
        padding: 20,
    }
  });

  export default styles;