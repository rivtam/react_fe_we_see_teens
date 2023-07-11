import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useRecoilValue } from 'recoil';

import { authAtom } from '../state';
import { useUserActions } from '../actions';

export { Login };

const style = {
    // position: 'absolute',
    position: 'relative',
    top: '50%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    // p: 4,
  };

function Login({ history }) {
    const auth = useRecoilValue(authAtom);
    const userActions = useUserActions();

    useEffect(() => {

        // redirect to home if already logged in
        // if (auth) history.push('/');
        // console.log('auth', auth)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, setError, formState } = useForm(formOptions);
    const { errors, isSubmitting } = formState;

    function onSubmit({ username, password }) {
        return userActions.login(username, password)
            .catch(error => {
                setError('apiError', { message: error });
            });
    }

    return (
        <div style={style}>
            <div className="col-md-4 offset-md-3 mt-5 loginCard">
            {/* <div className="alert alert-info">
                Username: test<br />
                Password: test
            </div> */}
            <div className="card">
                <h4 className="card-header">Login</h4>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Username</label>
                            <input name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.username?.message}</div>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <button disabled={isSubmitting} className="btn btn-primary">
                            {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Login
                        </button>
                        {errors.apiError &&
                            <div className="alert alert-danger mt-3 mb-0">{errors.apiError?.message}</div>
                        }
                    </form>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Login;




// TODO: https://jasonwatmore.com/post/2021/09/07/react-recoil-jwt-authentication-tutorial-and-example#fetch-wrapper-js

// Login Component
// Path: /src/login/Login.jsx
// The login page contains a form built with the React Hook Form library that contains username and password fields for logging into the React + Recoil app.

// Form validation rules are defined with the Yup schema validation library and passed with the formOptions to the React Hook Form useForm() function, for more info on Yup see https://github.com/jquense/yup.

// The useForm() hook function returns an object with methods for working with a form including registering inputs, handling form submit, accessing form state, displaying errors and more, for a complete list see https://react-hook-form.com/api/useform.

// The onSubmit function gets called when the form is submitted and valid, and submits the user credentials to the api by calling userActions.login(). On successful authentication the user auth data is stored in Recoil shared state by the login method in user actions.

// The returned JSX template contains the markup for page including the form, input fields and validation messages. The form fields are registered with the React Hook Form by calling the register function with the field name from each input element (e.g. {...register('username')}). For more info on form validation with React Hook Form see React Hook Form 7 - Form Validation Example.