import React from 'react';
import { useState } from 'react';

function ForgotPw({Forgot, error}) {
    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Forgot(details);
    }
    return (
        <form onSubmit={submitHandler}> 
                <div className='login-background'>
                    <div className='login-container'>
                    <div className='form-group'>
                    <label className='email' htmlFor='email'>Tên đăng nhập: <br/></label>
                    <input className='IPemail' type="email" name='email' id='email'  onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                    </div>
                    <div className='form-group'>
                    <label className='xacthuc' htmlFor='xacthuc'>Mã xác thực: <br/></label>
                    <input className='input-second' type="xacthuc" name='xacthuc' id='xacthuc' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <div>
                    <a href='#' className='Forgot-password'>Quay lại trang chủ</a>
                    <input className='btn-dangnhap' type="submit" value="Đăng nhập" />
                    </div>
                    </div>
                </div>
        </form>
    )
}

export default ForgotPw