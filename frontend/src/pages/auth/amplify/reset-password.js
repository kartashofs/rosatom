import Head from 'next/head';
import { useRouter, useSearchParams } from 'next/navigation';
import NextLink from 'next/link';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { MuiOtpInput } from 'mui-one-time-password-input';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormHelperText,
  FormLabel,
  Link,
  Stack,
  TextField,
} from '@mui/material';
import { GuestGuard } from '../../../guards/guest-guard';
import { IssuerGuard } from '../../../guards/issuer-guard';
import { useAuth } from '../../../hooks/use-auth';
import { useMounted } from '../../../hooks/use-mounted';
import { usePageView } from '../../../hooks/use-page-view';
import { Layout as AuthLayout } from '../../../layouts/auth/classic-layout';
import { paths } from '../../../paths';
import { Issuer } from '../../../utils/auth';

const useParams = () => {
  const searchParams = useSearchParams();
  const username = searchParams.get('username') || undefined;

  return {
    username,
  };
};

const getInitialValues = (username) => ({
  code: '',
  email: username || '',
  password: '',
  passwordConfirm: '',
  submit: null,
});

const validationSchema = Yup.object({
  code: Yup.string().min(6).max(6).required('Code is required'),
  email: Yup.string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  password: Yup.string()
    .min(7, 'Must be at least 7 characters')
    .max(255)
    .required('Required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const Page = () => {
  const isMounted = useMounted();
  const router = useRouter();
  const { username } = useParams();
  const { forgotPasswordSubmit } = useAuth();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: getInitialValues(username),
    validationSchema,
    onSubmit: async (values, helpers) => {
      try {
        await forgotPasswordSubmit(values.email, values.code, values.password);

        if (isMounted()) {
          router.push(paths.auth.amplify.login);
        }
      } catch (err) {
        console.error(err);

        if (isMounted()) {
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: err.message });
          helpers.setSubmitting(false);
        }
      }
    },
  });

  usePageView();

  return (
    <>
      <Head>
        <title>Reset Password | AtomAnalytics</title>
      </Head>
      <div>
        <Card elevation={16}>
          <CardHeader sx={{ pb: 0 }} title="Reset Password" />
          <CardContent>
            <form noValidate onSubmit={formik.handleSubmit}>
              <Stack spacing={3}>
                {username ? (
                  <TextField
                    disabled
                    fullWidth
                    label="Email"
                    value={username}
                  />
                ) : (
                  <TextField
                    autoFocus
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email Address"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                  />
                )}
                <FormControl
                  error={!!(formik.touched.code && formik.errors.code)}
                >
                  <FormLabel
                    sx={{
                      display: 'block',
                      mb: 2,
                    }}
                  >
                    Verification code
                  </FormLabel>
                  <MuiOtpInput
                    length={6}
                    onBlur={() => formik.handleBlur('code')}
                    onChange={(value) => formik.setFieldValue('code', value)}
                    onFocus={() => formik.setFieldTouched('code')}
                    sx={{
                      '& .MuiFilledInput-input': {
                        p: '14px',
                      },
                    }}
                    value={formik.values.code}
                  />
                  {!!(formik.touched.code && formik.errors.code) && (
                    <FormHelperText>{formik.errors.code}</FormHelperText>
                  )}
                </FormControl>
                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
                <TextField
                  error={
                    !!(
                      formik.touched.passwordConfirm &&
                      formik.errors.passwordConfirm
                    )
                  }
                  fullWidth
                  helperText={
                    formik.touched.passwordConfirm &&
                    formik.errors.passwordConfirm
                  }
                  label="Password Confirmation"
                  name="passwordConfirm"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.passwordConfirm}
                />
              </Stack>
              {formik.errors.submit && (
                <FormHelperText error sx={{ mt: 3 }}>
                  {formik.errors.submit}
                </FormHelperText>
              )}
              <Button
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
              >
                Reset Password
              </Button>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 3,
                }}
              >
                <Link
                  component={NextLink}
                  href={paths.auth.amplify.forgotPassword}
                  underline="hover"
                  variant="subtitle2"
                >
                  Did you not receive the code?
                </Link>
              </Box>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

Page.getLayout = (page) => (
  <IssuerGuard issuer={Issuer.Amplify}>
    <GuestGuard>
      <AuthLayout>{page}</AuthLayout>
    </GuestGuard>
  </IssuerGuard>
);

export default Page;
