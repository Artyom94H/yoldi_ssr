import { Layout } from 'antd';
import PrimaryHeader from '@/components/layout/header';
import PrimaryFooter from '@/components/layout/footer';
import { useAuth } from '@/context/auth';
import { StyledContent, StyledHeader } from '@/components/layout/styled';

const { Header, Footer, Content } = Layout;

const PrimaryLayout = ({ gray = false, children }) => {
  const { user } = useAuth();

  return (
    <Layout className='layout'>
      <StyledHeader >
        <PrimaryHeader />
      </StyledHeader>
      <StyledContent gray={gray}>{children}</StyledContent>
      {!user?.email && (
        <Footer>
          <PrimaryFooter />
        </Footer>
      )}
    </Layout>
  );
};

export default PrimaryLayout;
