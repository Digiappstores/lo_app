import React from 'react'
import CustomTabs from '../../components/customTabs'
import { UnAuthLayout } from './layout/UnAuthLayout'
import LoginPage from './LoginPage'
import SignUp from './SignUp'

export const LoginSignTabGroup = () => {
    const tabArr = [
        { label: "Login", component: <LoginPage /> },
        { label: "Signup", component: <SignUp /> },
    ]

    return <UnAuthLayout>
        <CustomTabs
            tabArr={tabArr}
            label="auth"
            type="2"
            indicatorColor="red"
            textColor="white"
            scrollButtons="auto"
            activeIndex={1}
        />
    </UnAuthLayout>
}
