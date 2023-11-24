import { FormikHelpers } from 'formik';
import * as Yup from 'yup';

export interface LoginFormValues {
    name: string,
    email: string;
    password: string;
}

export const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

export interface LoginFormProps {
    initialValues: LoginFormValues;
    validationSchema: Yup.ObjectSchema<typeof validationSchema.fields>;
    onSubmit: (values: LoginFormValues, helpers: FormikHelpers<LoginFormValues>) => Promise<void>;
}
