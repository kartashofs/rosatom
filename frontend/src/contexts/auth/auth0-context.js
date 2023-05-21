import { createContext, useCallback, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { Auth0Client } from '@auth0/auth0-spa-js';
import { auth0Config } from '../../config';
import { paths } from '../../paths';
import { Issuer } from '../../utils/auth';

const auth0Client = new Auth0Client({
  domain: auth0Config.issuer_base_url,
  clientId: auth0Config.client_id,
  cacheLocation: 'localstorage',
  authorizationParams: {
    redirect_uri: auth0Config.base_url + paths.auth.auth0.callback,
  },
});

var ActionType;
(function (ActionType) {
  ActionType['INITIALIZE'] = 'INITIALIZE';
  ActionType['LOGIN'] = 'LOGIN';
  ActionType['LOGOUT'] = 'LOGOUT';
})(ActionType || (ActionType = {}));

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthContext = createContext({
  ...initialState,
  issuer: Issuer.Auth0,
  loginWithRedirect: () => Promise.resolve(),
  handleRedirectCallback: () => Promise.resolve(undefined),
  logout: () => Promise.resolve(),
});

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      await auth0Client.checkSession();

      const isAuthenticated = await auth0Client.isAuthenticated();

      if (isAuthenticated) {
        const user = await auth0Client.getUser();

        // Here you should extract the complete user profile to make it
        // available in your entire app.
        // The auth state only provides basic information.

        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated,
            user: {
              id: user.sub,
              avatar: user.picture,
              email: user.email,
              name: 'Анастасия Виссер',
              plan: 'Premium',
            },
          },
        });
      } else {
        dispatch({
          type: ActionType.INITIALIZE,
          payload: {
            isAuthenticated,
            user: null,
          },
        });
      }
    } catch (err) {
      console.error(err);
      dispatch({
        type: ActionType.INITIALIZE,
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  }, [dispatch]);

  useEffect(
    () => {
      initialize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const loginWithRedirect = useCallback(async (appState) => {
    await auth0Client.loginWithRedirect({
      appState,
    });
  }, []);

  const handleRedirectCallback = useCallback(async () => {
    const result = await auth0Client.handleRedirectCallback();
    const user = await auth0Client.getUser();

    // Here you should extract the complete user profile to make it available in your entire app.
    // The auth state only provides basic information.

    dispatch({
      type: ActionType.LOGIN,
      payload: {
        user: {
          id: user.sub,
          avatar: user.picture,
          email: user.email,
          name: 'Анастасия Виссер',
          plan: 'Premium',
        },
      },
    });

    return result.appState;
  }, []);

  const logout = useCallback(async () => {
    await auth0Client.logout();
    dispatch({
      type: ActionType.LOGOUT,
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        issuer: Issuer.Auth0,
        loginWithRedirect,
        handleRedirectCallback,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const AuthConsumer = AuthContext.Consumer;
