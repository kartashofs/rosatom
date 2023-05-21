import { GuestGuard } from '../guards/guest-guard';

export const withGuestGuard = (Component) => (props) =>
  (
    <GuestGuard>
      <Component {...props} />
    </GuestGuard>
  );
