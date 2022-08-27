const colors = {
  primary: '#253DDA',
  secondary: '#faad14',
  textColor: {
    primary: '#096dd9',
    secondary: '#FFBF00',
    support: 'white' // Daybreak Blue-6
  }
}

const styles = {

  homeHeader: { 
    textAlign: 'center',
    font: "40px 'Roboto Mono', monospace",
    color: '#333333',
    margin: '64px 0'
  },

  heroMessage: {
    main: {
      color: colors.textColor.secondary,
      font: "800 80px 'Archivo', sans-serif",
    },
    support: { 
      color: colors.textColor.support,
      fontSize: '72px',
      fontWeight: 'bold',
      padding: '0',
      textAlign: 'center',
    }
  },

  offerContent: {
    packageName: {
      font: "40px 'Varela Round', sans-serif",
      color: '#333333',
      margin: '16px 0 16px 0'
    },
    packagePrice: {
      font: "48px 'Varela Round', sans-serif",
      color: '#333333',
      margin: '0'
    },
    packageDuration: {
      font: "20px 'Varela Round', sans-serif",
      color: '#333333',
      marginBottom: '32px'
    },
    cardHeaderColor: [
      '#FFBF00',
      '#3D9BF1',
      '#E8E9EA'
    ],

    cardHeader: (index) => {
      return {
        backgroundColor: styles.offerContent.cardHeaderColor[index],
        width: '100%',
        borderRadius: '5px 5px 0 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '32px'
      }
    },
    
    cardBody: {
      width: '100%', 
      color: '#333333',
      backgroundColor: 'white',
      textAlign: 'center',
      borderRadius: '0 0 5px 5px',
      padding: '16px 0'
    }
  },

  advantage: {
    name: {
      color: colors.textColor.support,
      font: "bold 28px 'Roboto Mono', monospace",
      margin: '0',
      paddingTop: '8px',
    },
    description: {
      font: "16px 'Roboto', sans-serif",
      color: colors.textColor.support,
      paddingTop: '8px',
    }
  },

  forgotPassword: {
    body: {
      color: '#333',
      textAlign: 'center',
      font: "18px 'Roboto', sans-serif",
      padding: '16px 0',
    }
  }

}

export { colors, styles };