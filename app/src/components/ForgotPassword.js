import { Button, Col, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import { colors, styles } from "./globals";

const ForgotPassword = ({ modalVisibility, onCancel }) => {
    useEffect(() => {
        setIsModalVisible(modalVisibility);
    }, [modalVisibility]);
    
    const [ isModalVisible, setIsModalVisible ] = useState(modalVisibility);

    return (
        <Modal 
            visible={isModalVisible} 
            onCancel={onCancel}
            footer={[]}
        >
            <p style={{ ...styles.homeHeader, margin: '0'}}>Reset password</p>
            <p style={styles.forgotPassword.body}>Enter your email address</p>
            <Input style={{ width: '90%', marginLeft: '5%' }} size="large" placeholder="Enter email address" />
            <Button
                size="large"
                style={{
                    width: '90%',
                    margin: '24px 0 16px 5%',
                    color: colors.textColor.support,
                    font: "20px 'Roboto Mono', monospace",
                    border: 'none',
                    boxShadow: `0 0 2px 0 ${colors.textColor.secondary}`,
                    backgroundColor: colors.textColor.secondary
                }}
            >
                Continue
            </Button>
        </Modal>
    );
};

export default ForgotPassword;