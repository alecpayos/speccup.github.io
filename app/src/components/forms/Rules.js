const rules = {
  basicInformation: [
    [{ required: true, message: 'First name is required' }],
    [{ required: true, message: 'Last name is required' }],
    [{ required: true, message: 'Age is required' }],
    [{ required: true, message: 'Mobile number is required' }],
    [{ required: true, message: 'Birthdate is required' }]
  ],

  accountInformation: [
    [{ required: true, message: 'Username is required' }],
    [{ required: true, message: 'Email address is required' }],
    [{ required: true, message: 'Password is required' }],
  ],

  subscriptionInformation: [
    [{ required: true, message: 'Card holder\'s name is required' }],
    [{ required: true, message: 'Card number is required' }],
    [{ required: true, message: 'Expiry is required' }],
    [{ required: true,message: 'CVC is required' }]
  ],

  confirmPassword: (password) => {
    const confirmValidator = (fieldValue) => ({
      validator(_, value) {
        if (!value || fieldValue === value) {
          return Promise.resolve()
        }
        return Promise.reject(new Error('Passwords do not match!'))
      },
    })

    return [
      { required: true, message: 'Please confirm your password!' },
      confirmValidator(password)
    ]
  }
}



export default rules