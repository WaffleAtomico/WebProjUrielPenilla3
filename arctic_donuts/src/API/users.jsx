import { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
        const [formData, setFormData] = useState( [] )
          // user_name: '',
            // user_lastname: '',
            // user_mail: '',
            // user_password: '',
            // user_creditcard: ''
    
        useEffect(() => {
            const FetchAllUsers = async () => {
                try {
                    const res = await axios.get("http://localhost:3001/users");
                    console.log(res);
                    setFormData(res.data)
                } catch (err) {
                    console.log(err);
                }
            }
            FetchAllUsers();
        }, []);
    
    
        return (
            <>
            <h1>User</h1>
            <div className="user">
                {formData.map(Data =>(
                    <div key={Data.user_mail}>
                        Mail 
                        <p> {Data.user_mail} </p> 
                        Name
                        <p> {Data.user_name} </p>
                        lastname
                        <p> {Data.user_lastname} </p>
                        Password
                        <p> {Data.user_password} </p>
                        creditcard
                        <p> {Data.user_creditcard} </p>
                        <p> _ </p>
                        <p> _ </p>
                        <p> _ </p>
                        <p> _ </p>
                    </div>
                ))}
            </div>
        </>
        )
} 
export default Users