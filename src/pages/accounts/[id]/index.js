import PrimaryLayout from '@/components/layout';
import Account from '@/components/account';
import UserApi from '@/libs/api/user';
import SeoHeader from '@/components/SeoHeader';
import SEOHelper from '@/helpers/SEOHelper';

const api = new UserApi();

const AccountShow = ({ account }) => {
  return (
    <>
      <SeoHeader data={SEOHelper.getAccountData(account)} />
      <PrimaryLayout>
        <Account user={account} edit={false} />
      </PrimaryLayout>
    </>
  );
};

export async function getServerSideProps(context) {
  let account = {};
  try {
    const { data } = await api.get(context.query.id);
    account = data;
  } catch (e) {
    console.log('Error', e);
  }
  return {
    props: {
      account,
    }
  };
}

export default AccountShow;
