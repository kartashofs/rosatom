import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { IssuerGuard } from '../../../guards/issuer-guard';
import { GuestGuard } from '../../../guards/guest-guard';
import { useAuth } from '../../../hooks/use-auth';
import { useMounted } from '../../../hooks/use-mounted';
import { paths } from '../../../paths';
import { Issuer } from '../../../utils/auth';

const Page = () => {
  const isMounted = useMounted();
  const router = useRouter();
  const { handleRedirectCallback } = useAuth();

  const handle = useCallback(async () => {
    const searchParams = new URLSearchParams(globalThis.location.search);
    const code = searchParams.get('code');
    const state = searchParams.get('state');

    const hasParams = !!(code && state);

    if (!hasParams) {
      router.replace(paths.index);
      return;
    }

    try {
      const appState = await handleRedirectCallback();

      if (isMounted()) {
        const returnTo = appState?.returnTo || paths.dashboard.index;
        router.replace(returnTo);
      }
    } catch (err) {
      console.error(err);

      if (isMounted()) {
        router.replace(paths.index);
      }
    }
  }, [router, handleRedirectCallback, isMounted]);

  useEffect(
    () => {
      handle();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return null;
};

Page.getLayout = (page) => (
  <IssuerGuard issuer={Issuer.Auth0}>
    <GuestGuard>{page}</GuestGuard>
  </IssuerGuard>
);

export default Page;
