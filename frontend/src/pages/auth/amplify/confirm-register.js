import Head from 'next/head';
import { useRouter, useSearchParams } from 'next/navigation';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { MuiOtpInput } from 'mui-one-time-password-input';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormHelperText,
  FormLabel,
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

const getInitialValues = (username) => {
  return {
    code: '',
    email: username || '',
    submit: null,
  };
};

const validationSchema = Yup.object({
  code: Yup.string().min(6).max(6).required('Code is required'),
  email: Yup.string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
});

const Page = () => {
  const isMounted = useMounted();
  const router = useRouter();
  const { username } = useParams();
  const { confirmSignUp } = useAuth();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: getInitialValues(username),
    validationSchema,
    onSubmit: async (values, helpers) => {
      try {
        await confirmSignUp(values.email, values.code);

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
        <title>Confirm Register | AtomAnalytics</title>
      </Head>
      <div>
        <Card elevation={16}>
          <CardHeader sx={{ pb: 0 }} title="Confirm Register" />
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
                Confirm
              </Button>
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
