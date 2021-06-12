import {MainLayout} from '../layouts';
import {Avatar} from '../components';
import IMAGES from '../definitions/images';

const Home = () => {
  return (
    <MainLayout>
      <Avatar source={IMAGES.erdem} />
    </MainLayout>
  );
};

export default Home;
