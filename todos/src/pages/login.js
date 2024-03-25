import { Formik, Field, Form } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '@/styles/login.module.css';
import { auth } from '@/lib/firebase'; // Import Firebase authentication
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import signInWithEmailAndPassword function

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values, { setSubmitting }) => {
    // Simulate login process
    try {
      // Perform authentication logic here
      const email = values.username; // Get email from form values
      const password = values.password; // Get password from form values
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed in:', user);
      // Handle successful sign-in
      // For demonstration, let's assume successful login
      router.push('/dashboard'); // Redirect to dashboard on successful login
    } catch (error) {
      console.error('Error signing in:', error.message);
      setError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={`${styles.login_box} p-3`}>
      <h1>Login</h1>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.frm}>
            <div className="mb-3">
              <Field className="form-control" id="email" name="username" placeholder="Username" aria-describedby="usernameHelp" />
            </div>
            <div className="mb-3">
              <Field className="form-control" id="password" name="password" placeholder="Password" type="password" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
}
