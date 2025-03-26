import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CreateFreelancerProfile from '../CreateFreelancerProfile';
import CreateCustomerProfile from '../CreateCustomerProfile';

export default function CreateProfile() {
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.auth.userInfo);

    console.log(userInfo);

    return (
        <>
            {userAuth?.isFreelancer ? <CreateFreelancerProfile /> : <CreateCustomerProfile />}
        </>
    )
}
