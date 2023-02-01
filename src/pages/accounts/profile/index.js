import Profile from '@/components/organisms/profile';

const ProfilePage = () => {
  return (
    <>
      <Profile />
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default ProfilePage;
