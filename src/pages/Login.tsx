import LoginImg from "../assets/images/LoginImg.jpg";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { LoginFormProps } from "../types/UserType"

const Login = () => {
    const intialValues = {
        email: "",
        password: ""
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email address").max(15, "Must be 25 characters or less").required("Email is required"),
        password: Yup.string().required("Password is required")
    })

    const onSubmit: LoginFormProps["onSubmit"] = async (values, { setSubmitting }) => {
        try {
            const user = {email: values.email, password: values.password}
            console.log(user);
            const response = await axios.post("http://localhost:5173/api/user/login", user);
            const token = response.headers["x-auth-token"];
            localStorage.setItem("token", token)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Welcome! You have successfully logged in",
                showConfirmButton: false,
                timer: 1500
            });

        } catch (err) {
            console.log(err);
        }
        finally {
            setSubmitting(false)
        }
    }
    return (
        <div className="w-screen h-screen bg-no-repeat bg-cover relative" style={{ backgroundImage: `url(${LoginImg})`}}>
            <div className="w-screen h-screen absloute inset-0 bg-[rgba(0,0,0,0.5)]">
                <div className=" h-screen flex items-center justify-center">
                    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                        <h2 className="text-2xl font-semibold mb-6">Login</h2>
                        <Formik initialValues={intialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                            <Form>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                    <Field type="email" name="email" className="w-full p-2 border rounded-md" placeholder="john@example.com" />
                                    <ErrorMessage name="email" component="div" className="error text-red-600"/>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                    <Field type="password" name="password" className="w-full p-2 border rounded-md" placeholder="********" />
                                    <ErrorMessage name="password" component="div" className="error text-red-600"/>
                                </div>

                                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                                    Login
                                </button>
                            </Form>
                        </Formik>
                        <div className="mt-4">
                            <p className="text-sm text-gray-600">Forget your Password <Link to="" className="text-blue-500 hover:underline"></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login