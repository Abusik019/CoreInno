import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserAuth } from '../../redux/slices/userSlice';
import CreateFreelancerProfile from '../CreateFreelancerProfile';
import CreateCustomerProfile from '../CreateCustomerProfile';

export default function CreateProfile() {
    const dispatch = useDispatch();
    const userAuth = useSelector((state) => state.user.userAuth);

    useEffect(() => {
        dispatch(fetchUserAuth());
    }, [])

    console.log(userAuth);

    return (
        <>
            {userAuth?.isFreelancer ? <CreateFreelancerProfile /> : <CreateCustomerProfile />}
        </>
    )
}
