import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { useRouter } from 'next/router';
import AuthService from '@/services/Auth';
import AuthApi from '@/libs/api/auth';
import ProfileApi from '@/libs/api/profile';
import { RouteCodes } from '@/constants/route-codes';

const AuthContext = createContext({
  user: null,
  inProcess: false,
  userGetLoading: true,
  logout: () => {},
  getUser: () => {},
  signIn: () => {},
  signUp: () => {},
});

const api = new AuthApi();
const profileApi = new ProfileApi();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userGetLoading, setUserGetLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const { push } = useRouter();

  const getUser = useCallback(async () => {
    setLoading(true);
    setUserGetLoading(true);
    try {
      const { data } = await profileApi.get();
      setUser(data);
    } catch (e) {
      if (e?.response?.status === 401) {
        AuthService.clearToken();
      }
    } finally {
      setLoading(false);
      setUserGetLoading(false);
    }
  }, [setUser]);

  useEffect(() => {
    (async () => {
      if (!AuthService.getToken()) {
        return;
      }
      await getUser();
    })();
  }, []);

  const logout = useCallback(async () => {
    push('/');
    setUser(null);
    AuthService.clearToken();
  }, [setUser, push]);

  const authorizeUser = useCallback(async (token, redirectUrl) => {
    AuthService.setToken(token);
    await getUser();
    await push(redirectUrl);
  }, [push, getUser]);

  const signIn = useCallback(
    async (values, redirectUrl = RouteCodes.accountOwner) => {
      try {
        setLoading(true);
        const { data } = await api.signIn({ data: values });
        await authorizeUser(data.value, redirectUrl);
      } catch (e) {
        return Promise.reject(e);
      } finally {
        setLoading(false);
      }
    },
    [authorizeUser],
  );

  const signUp = useCallback(
    async (values, redirectUrl = '/') => {
      setLoading(true);
      try {
        const { data } = await api.signUp({
          data: values,
        });
        await authorizeUser(data.value, redirectUrl);
      } catch (e) {
        return Promise.reject(e);
      } finally {
        setLoading(false);
      }
    },
    [authorizeUser],
  );

  const updateUser = useCallback(
    async (data) => {
      try {
        let updateData = data;

        if (!data?.user) {
          updateData = {
            user: {
              ...data,
            },
          };
        }
        return usersApi.put(user?.id, { data: updateData });
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    [user],
  );
  return (
    <AuthContext.Provider
      value={{
        setUser,
        user,
        loading,
        errors,
        signUp,
        signIn,
        getUser,
        updateUser,
        logout,
        setErrors,
        userGetLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth };
