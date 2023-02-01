import PrimaryLayout from '@/components/layout';
import UserApi from '@/libs/api/user';
import { useAuth } from '@/context/auth';
import { useCallback, useEffect, useMemo } from 'react';
import GlobalLoader from '@/components/global-loader';
import { useRouter } from 'next/router';
import Account from '@/components/account';
import AccountOwnerEdit from '@/components/organisms/profile/edit';
import { useAccountEdit } from '@/hooks/use-account-edit';

const Profile = () => {
  const { userGetLoading, user, logout } = useAuth();
  const { push, query } = useRouter();
  const { onSubmit, loading } = useAccountEdit();

  useEffect(() => {
    // TODO change this redirect
    if (!userGetLoading && !user?.email) {
      push('/');
    }
  }, [user, userGetLoading, push]);

  const showLoader = useMemo(() => {
    return userGetLoading || !user?.email;
  }, [userGetLoading, user]);

  const onChange = useCallback(
    async (key, value) => {
      // TODO написать парням бека, что не удобно обновить всю дату когда просто обновляешь картинку
      await onSubmit({
        [key]: value,
        // TODO user лишняя
        ...user,
      });
    },
    [onSubmit, user],
  );

  if (showLoader) {
    return <GlobalLoader />;
  }

  return (
    <PrimaryLayout>
      <Account
        user={user}
        edit={true}
        logout={logout}
        onChange={onChange}
        loading={loading}
      />
      <AccountOwnerEdit open={!!query.edit} />
    </PrimaryLayout>
  );
};

export default Profile;
