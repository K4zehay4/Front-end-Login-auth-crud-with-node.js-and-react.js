import React,{useEffect} from 'react'
import Layout from './Layout'
import FormAddSantri from '../component/FormAddSantri';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from '../features/authSlice';

const AddSantri = () => {
  
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const { isError,user } = useSelector((state) => state.auth);

 useEffect(() => {
   dispatch(getMe());
 }, [dispatch]);

 useEffect(() => {
  if (isError) {
    navigate("/");
  }
  if (user && user.role !== "admin") {
    navigate("/dashboard");
  }
}, [isError, user, navigate]);
  return (
    <Layout>
        <FormAddSantri  />
    </Layout>
  )
}

export default AddSantri