import { useState, useMemo, useEffect, memo } from 'react';
import { colors } from '../components/globals';
import countryList from 'react-select-country-list';
import { State, City } from 'country-state-city';

import { 
    Col, 
    Row, 
    Steps, 
    Typography, 
    Form, 
    Button, 
    DatePicker, 
    InputNumber, 
    Input, 
    Select 
    } from 'antd';

const { Option } = Select;
const { Title } = Typography;

const FormButton = ({ name, span, offset, type, handler }) => {
    const buttonStyles = {
        next: { 
            color: colors.textColor.support,
            backgroundColor: colors.secondary,
            borderColor: colors.secondary,
        },
        back: {
            borderColor: colors.secondary,
            color: colors.textColor.secondary
        }
    }
    return (
        <Col 
            span={span}
            offset={offset}
            style={{ 
                display: 'flex', 
                justifyContent: 'right'
            }}
        >
            <Form.Item>
                <Button 
                    htmlType={type} 
                    onClick={handler}
                    size='large'
                    style={
                        name === "Next"
                        ? buttonStyles.next
                        : buttonStyles.back
                    }
                >
                    {name}
                </Button>
            </Form.Item>
        </Col>
    )
}

const BasicInformation = ({ onChange, render, memory }) => {
    useEffect(() => {
        setBasicInformation(memory)
    }, [])

    const [ form ] = Form.useForm();
    const [ basicInformation, setBasicInformation ] = useState({
        firstName: null,
        lastName: null,
        age: null,
        mobileNumber: null,
        birthdate: null,
        gender: null
    })

    const handleSubmit = () => {
        onChange(basicInformation);
        render(1)
    }

    const handleFirstName = (e) => setBasicInformation({ ...basicInformation, firstName: e.target.value });
    const handleLastName = (e) => setBasicInformation({ ...basicInformation, lastName: e.target.value });
    const handleAge = (e) => setBasicInformation({ ...basicInformation, age: e });
    const handleMobileNumber = (e) => setBasicInformation({ ...basicInformation, mobileNumber: e.target.value });
    const handleBirthdate = (date) => setBasicInformation({ ...basicInformation, birthdate: date });

    const GenderField = () => {
        const [ genderValue, setGenderValue ] = useState(null)
        const handleGenderValue = (genderValue) => {
            setGenderValue(genderValue)
            setBasicInformation({ ...basicInformation, gender: genderValue })
        };
    
        const genderValues = [
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
            { value: "Rather not say", label: "Rather not say" },
            { value: "Lesbian", label: "Lesbian" },
            { value: "Gay", label: "Gay" },
            { value: "Bisexual", label: "Bisexual" },
            { value: "Transgender", label: "Transgender" },
            { value: "Gender Queer", label: "Gender Queer" },
            { value: "Alien", label: "Alien" },
            { value: "Other", label: "Other" }
        ]
    
        return (
            <Select
                allowClear
                showSearch
                onChange={handleGenderValue}
                size='large'
                value={basicInformation.gender}
                placeholder='Gender'
            >
                {genderValues.map((genders, index) => {
                    return (
                        <Option 
                        key={index} 
                        value={genders.value}
                        >
                            {genders.label}
                        </Option>
                    )
                })}
            </Select>
        )
    };

    return (
        <Col
            xs={{ span: 22, offset: 1 }}
            sm={{ span: 20, offset: 2 }}
            md={{ span: 16, offset: 4 }}
            lg={{ span: 12, offset: 6 }}
            xl={{ span: 8, offset: 8 }}
            xxl={{ span: 6, offset: 9 }}
        >
            <Form 
            form={form} 
            onFinish={handleSubmit}
            initialValues={{
                'First name': memory.firstName,
                'Last name': memory.lastName,
                'Age': memory.age,
                'Mobile number': memory.mobileNumber,
                'Birthdate': memory.birthdate
            }}>
                <Title style={{ color: colors.textColor.primary, padding: '32px 0 12px 0' }} level={3}>Basic Information</Title>
                <Row gutter={[16, 0]}>
    
                    <Col span={24}>
                        <Form.Item 
                            name='First name' 
                            rules={[ { 
                                required: true ,
                                message: 'First name is required'
                            } ]}>
                            <Input onChange={handleFirstName} placeholder='First name' size='large' />
                        </Form.Item>
                    </Col>
    
                    <Col span={24}>
                        <Form.Item 
                            name='Last name' 
                            rules={[ { 
                                required: true ,
                                message: 'Last name is required'
                            } ]}>
                            <Input onChange={handleLastName} placeholder='Last name' size='large' />
                        </Form.Item>
                    </Col>
    
                    <Col span={8}>
                        <Form.Item 
                            name='Age' 
                            rules={[ { 
                                required: true ,
                                message: 'Age is required'
                            } ]}>
                            <InputNumber onChange={handleAge} style={{ width: '100%' }} min={5} max={75} placeholder='Age' size='large' />
                        </Form.Item>
                    </Col>
    
                    <Col span={16}>
                        <Form.Item 
                            name='Mobile number' 
                            rules={[ { 
                                required: true ,
                                message: 'Mobile number is required'
                            } ]}>
                            <Input onChange={handleMobileNumber} size='large' placeholder='Mobile number' />    
                        </Form.Item> 
                    </Col>
                    
                    <Col span={12}>
                        <Form.Item 
                            name='Birthdate' 
                            rules={[ { 
                                required: true ,
                                message: 'Birthdate is required'
                            } ]}>
                            <DatePicker 
                            format='MM/DD/YYYY'
                            onChange={handleBirthdate}
                            picker='date' 
                            style={{ width: '100%' }} 
                            placeholder='Birthdate' 
                            size='large' />
                        </Form.Item>
                    </Col>
    
                    <Col span={12}>
                        <Form.Item 
                            name='Gender'
                        >
                            <GenderField />
                        </Form.Item>
                    </Col>

                    <FormButton 
                        name='Next' 
                        span={4} 
                        offset={20} 
                        type='submit'
                    />
                </Row>
            </Form>
        </Col>
    )
}

const AccountInformation = ({ onChange, render, memory }) => { 
    useEffect(() => {
        setAccountInformation(memory)
    }, [])

    const [ form ] = Form.useForm();
    const [ accountInformation, setAccountInformation ] = useState({
        userName: null,
        emailAddress: null,
        password: null
    })
    
    const handleUsername = e => setAccountInformation({ ...accountInformation, userName: e.target.value });
    const handleEmail = e => setAccountInformation({ ...accountInformation, emailAddress: e.target.value });
    const handlePassword = e => setAccountInformation({ ...accountInformation, password: e.target.value });

    const handleBack = () => render(0);
    const handleSubmit = () => {
        onChange(accountInformation)
        render(2)
    };

    return (
        <Col
        xs={{ span: 20, offset: 2 }}
        sm={{ span: 16, offset: 4 }}
        md={{ span: 12, offset: 6 }}
        lg={{ span: 10, offset: 7 }}
        xl={{ span: 8, offset: 8 }}
        xxl={{ span: 6, offset: 9 }}
        >
            <Form 
                form={form} 
                onFinish={handleSubmit} scrollToFirstError
                initialValues={{
                    'Username': memory.userName,
                    'Email address': memory.emailAddress,
                    'Password': memory.password
                }}
            >
                <Title style={{ color: colors.textColor.primary, padding: '32px 0 12px 0' }} level={3}>Account Information</Title>
                <Row gutter={[16, 0]}>

                    <Col span={24}>
                        <Form.Item 
                            name='Username' 
                            rules={[ { 
                                required: true,
                                message: 'Username is required'
                            } ]}>
                            <Input onChange={handleUsername} placeholder='Username' size='large' />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item 
                            name='Email address' 
                            rules={[ { 
                                required: true,
                                message: 'Email address is required'
                            } ]}>
                            <Input onChange={handleEmail} placeholder='Email address' size='large' />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item 
                            name='Password' 
                            rules={[ { 
                                required: true,
                                message: 'Password is required'
                            } ]}>
                            <Input.Password onChange={handlePassword} placeholder='Password' size='large' />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Form.Item
                            name="Confirm password"
                            dependencies={['Password']}
                            rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                if (!value || getFieldValue('Password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Passwords do not match!'));
                                },
                            }),
                            ]}
                        >
                            <Input.Password placeholder='Confirm password' size='large' />
                        </Form.Item>
                    </Col>

                    <FormButton 
                        name='Back' 
                        span={4} 
                        offset={16} 
                        type='button'
                        handler={handleBack}
                    />

                    <FormButton 
                        name='Next' 
                        span={4} 
                        type='submit'
                    />
                </Row>
            </Form>
        </Col>
    )
}

const SubscriptionInformation = ({ onChange, render, memory }) => {
    useEffect(() => {
        setSubscriptionInfo(memory)
    }, [])

    const countryOptions = useMemo(() => countryList().getData(), []);
    const [ form ] = Form.useForm();
    const [ subscriptionInfo, setSubscriptionInfo ] = useState({
        cardHolder: null,
        cardNumber: null,
        cardExpiry: null,
        cardCode: null,
        zipCode: null,
        street: null,
    })

    const handleCardHolder = e => setSubscriptionInfo({ ...subscriptionInfo, cardHolder: e.target.value});
    const handleCardNumber = e => setSubscriptionInfo({ ...subscriptionInfo, cardNumber: e.target.value});
    const handleCardExpiry = date => setSubscriptionInfo({ ...subscriptionInfo, cardExpiry: date });
    const handleCardCode = e => setSubscriptionInfo({ ...subscriptionInfo, cardCode: e.target.value});
    const handleZipCode = e => setSubscriptionInfo({ ...subscriptionInfo, zipCode: e.target.value });
    const handleStreet = e => setSubscriptionInfo({ ...subscriptionInfo, street: e.target.value });
    const handleBack = () => render(1);

    const handleSubmit = () => {
        onChange(subscriptionInfo)
        window.location('/register');
    }

    const addressValues = {
        country: '',
        state: ''
    }

    const [ address, setAddress ] = useState({
        'country': null,
        stateList: null,
        'state': null,
        cityList: null,
        'city': null
    });

    const AddressSelector = ({ component, componentValue,  cscList, placeholder }) => {
        const handleCountry = (e) => {
            setAddress({ 
                ...address,  
                [componentValue]: e, 
                state: null,
                city: null,
                stateList: State.getStatesOfCountry(e)
            })
        }

        const handleState = (e) => {
            setAddress({
                ...address,
                [componentValue]: e,
                cityList: City.getCitiesOfState(address.country, address.state)
            })
        }

        const handleCity = (e) => {
            setAddress({
                ...address,
                [componentValue]: e
            })
        }

        return (
            <Select
            allowClear
            showSearch
            size='large'
            value={[component]}
            onChange={(
                placeholder === "Country" ? handleCountry : null || 
                placeholder === "State" ? handleState : null ||
                placeholder === "City" ? handleCity : null

            )}
            optionFilterProp="children"
            placeholder={placeholder}
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }>
                {cscList && cscList.map((options, index) => {
                    const handleComponentValue = {
                        value() {
                            switch(placeholder) {
                                case "Country":
                                    addressValues.country = options.label
                                    return options.value
                                case "State":
                                    addressValues.state = options.name
                                    return options.isoCode
                                case "City":
                                    return options.name
                            }
                        },
                        label() {
                            switch(placeholder) {
                                case "Country":
                                    return options.label
                                case "State":
                                    return options.name
                                case "City":
                                    return options.name
                            }
                        }
                    }

                    return (
                        <Option 
                        key={index} 
                        value={handleComponentValue.value()}
                        >
                            {handleComponentValue.label()}
                        </Option>
                    )
                })}
            </Select>
        )
    };

    return (
        <Col
            xs={{ span: 22, offset: 1 }}
            sm={{ span: 20, offset: 2 }}
            md={{ span: 16, offset: 4 }}
            lg={{ span: 12, offset: 6 }}
            xl={{ span: 8, offset: 8 }}
            xxl={{ span: 6, offset: 9 }}
        >
            <Form 
                form={form} 
                onFinish={handleSubmit}
                initialValues={{
                    'Name on card': memory.cardHolder,
                    'Card number': memory.cardNumber,
                    'Expiry': memory.cardExpiry,
                    'CVC': memory.cardCode
                }}
            >

                <Title 
                    style={{ 
                        color: colors.textColor.primary, 
                        paddingTop: 24 
                    }} 
                    level={3}
                >
                    Subscription Information
                </Title>

                <Row gutter={[16, 0]}>
                    
                    <Col span={24}>
                        <Title 
                            level={5}
                            style={{
                                color: '#444'
                            }}
                        >
                            PAYMENT DETAILS
                        </Title>
                    </Col>

                    <Col span={24}>
                        <Form.Item 
                            name='Name on card'
                            rules={[ { 
                                required: true, 
                                message: 'Card holder\'s name is required' 
                            } ]}>
                            <Input onChange={handleCardHolder} size='large' placeholder='Name on card' />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item 
                            name='Card number' 
                            rules={[ { 
                                required: true,
                                message: 'Card number is required'
                            } ]}>
                            <Input onChange={handleCardNumber} size='large' placeholder='Card number' />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item 
                            name='Expiry'
                            rules={[ { 
                                required: true,
                                message: 'Expiry is required'
                            } ]}>
                            <DatePicker 
                            onChange={handleCardExpiry}
                            format='MM/DD'
                            picker='date' 
                            style={{ width: '100%' }} 
                            placeholder='Expiry' 
                            size='large' />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item 
                            name='CVC'
                            rules={[ { 
                                required: true,
                                message: 'CVC is required'
                            } ]}>
                            <Input onChange={handleCardCode} size='large' placeholder='CVC' />
                        </Form.Item>
                    </Col>

                    <Col span={24}>
                        <Title 
                            level={5} 
                            style={{ 
                                color: '#444' 
                            }}
                        >
                            BILLING ADDRESS
                        </Title>
                    </Col>

                    <Col span={12}>
                        <Form.Item 
                            name='Country'
                            // rules={[ { required: true, message: 'Country is required' } ]}
                        >
                            <AddressSelector component={address.country} componentValue={'country'} cscList={countryOptions} placeholder="Country" />
                        </Form.Item> 
                    </Col>
    
                    <Col span={12}>
                        <Form.Item 
                            name='State'
                            // rules={[ { required: true, message: 'State is required' } ]}
                        >
                            <AddressSelector component={address.state} componentValue={'state'} cscList={address.stateList} placeholder="State" />
                        </Form.Item> 
                    </Col>
    
                    <Col span={12}>
                        <Form.Item 
                            name='City'
                            // rules={[ { required: true, message: 'City is required' } ]}
                        >
                            <AddressSelector component={address.city} componentValue={'city'} cscList={address.cityList} placeholder="City" />
                        </Form.Item> 
                    </Col>
    
                    <Col span={12}>
                        <Form.Item 
                            name='Zip code'>
                            <Input onChange={handleZipCode} size='large' placeholder='Zip code' />    
                        </Form.Item> 
                    </Col>
    
                    <Col span={24}>
                        <Form.Item 
                            name='Street'>
                            <Input onChange={handleStreet} size='large' placeholder='Street' />    
                        </Form.Item> 
                    </Col>

                    <FormButton 
                        name='Back' 
                        span={4} 
                        offset={16} 
                        type='button'
                        handler={handleBack}
                    />

                    <FormButton 
                        name='Next' 
                        span={4} 
                        type='submit'
                    />
                </Row>
            </Form>
        </Col>
    )
}

export { BasicInformation, AccountInformation, SubscriptionInformation };