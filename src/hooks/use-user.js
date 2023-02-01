import { atom, selector, useRecoilState } from 'recoil';
import { useCallback, useEffect, useState } from 'react';
import ProfileApi from 'libs/api/profile';
import { useNavigate } from 'react-router-dom';
import AuthService from 'services/Auth';

const profileApi = new ProfileApi();

export const userInitialState = {
  loading: false,
  user: null,
};

export const userState = atom({
  key: 'userState',
  default: userInitialState,
});

export const getUser = selector({
  key: 'getUser',
  get: ({ get }) => {
    const user = get(userState);

    return user.user;
  },
});

export const useUser = (redirect) => {
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (AuthService.getToken()) {
        setLoading(true);
        try {
          const { data } = await profileApi.list();
          setUserInfo((s) => ({ ...s, user: data }));
        } catch (e) {
          if (redirect) {
            navigate('/sign-in');
          }
        } finally {
          setLoading(false);
        }
      }

    })();
    // eslint-disable-next-line
  }, []);

  const logoutUser = useCallback(() => {
    AuthService.logout();
    navigate('/sign-in');
    setUserInfo(userInitialState);
  }, [setUserInfo, navigate]);

  return {
    user: userInfo.user,
    loading: loading,
    logoutUser,
  };
};
