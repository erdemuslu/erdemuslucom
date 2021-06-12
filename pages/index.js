import _JSXStyle from 'styled-jsx/style';
import {MainLayout} from '../layouts';
import {Avatar, Title} from '../components';
import IMAGES from '../definitions/images';

if (typeof global !== 'undefined') {
  Object.assign(global, { _JSXStyle })
}

const Home = () => {
  return (
    <MainLayout>
      <div className="homepage">
        <div className="homepage-side">
          <Avatar source={IMAGES.erdem} />
        </div>
        <div className="homepage-content">
          <Title content="Merhabalar. 👋 Ben Erdem Uslu." />
          <p>
            İzmir’de yaşamakta olan bir yazılım geliştiricisiyim. JavaScript/TypeScript temelinde; web, mobil ve masaüstü uygulamaları geliştirmekteyim. Şu anda {<a href="https://www.yolda.com/">Yolda.com</a>} bünyesinde çalışmaktayım.
          </p>
          <p>
            Çoğunlukla <i>React</i> ve <i>ReactNative</i> kullanarak geliştirme yapmakla birlikte, çeşitli Node.js ve JavaScript önyüz geliştirme araçlarıyla(<i>Express, Koa, Vue, Nuxt ve Next</i>) da tecrübelerim oldu.
          </p>
        </div>
      </div>
      <style jsx>{`
        .homepage {
          display: flex;
          flex-wrap: wrap;
        }

        .homepage-side {
          margin-right: 114px;
        }

        .homepage-content {
          padding-top: 8px;
          max-width: calc(100% - 2em);
          width: 38em;
        }

        .homepage-content p {
          font-size: 1.125em;
          margin-top: 1.25em;
          color: var(--white-200);
        }
      `}</style>
    </MainLayout>
  );
};

export default Home;
