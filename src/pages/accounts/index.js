import PrimaryLayout from '@/components/layout';
import Container from '@/components/container';
import AccountList from '@/components/account-list';
import useSWR from 'swr';
import { fetcher } from '@/utils';

const Accounts = () => {
  const { isLoading, data } = useSWR(
    'https://frontend-test-api.yoldi.agency/api/user',
    fetcher,
  );

  return (
    <PrimaryLayout>
      <Container>
        <AccountList loading={isLoading} data={data} />
      </Container>
    </PrimaryLayout>
  );
};

export default Accounts;
