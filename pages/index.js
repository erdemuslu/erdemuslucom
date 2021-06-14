import _JSXStyle from 'styled-jsx/style';
import {MainLayout} from '../layouts';
import URLS from '../utils/homepage-urls';

if (typeof global !== 'undefined') {
  Object.assign(global, { _JSXStyle })
}

const Home = () => {
  return (
    <MainLayout>
      <div className="homepage">
        <div className="homepage-content">
          <p>
            İzmir’de yaşamakta olan bir yazılım geliştiricisiyim. JavaScript/TypeScript temelinde; web, mobil ve masaüstü uygulamaları geliştirmekte ve şu anda {<a className="is-active" href="https://www.yolda.com/">Yolda.com</a>} bünyesinde çalışmaktayım.
          </p>
          <p>
            Çoğunlukla <i>React</i> ve <i>ReactNative</i> kullanarak geliştirme yapmakla birlikte, çeşitli Node.js ve JavaScript önyüz geliştirme araçlarıyla(<i>Express, Koa, Vue, Nuxt ve Next</i>) da tecrübelerim bulunmaktadır.
          </p>
          <div className="homepage-links">
            {
              URLS.map((url, index) => {
                return (
                  <a key={index.toString()} href={url.href} className={index === 0 ? 'is-active' : ''}>{url.text}</a>
                );
              })
            }
          </div>
        </div>
      </div>
      <style jsx>{`
        .homepage {
          display: flex;
          flex-wrap: wrap;
        }

        .homepage-content {
          max-width: 38em;
          width: 100%;
        }

        .homepage-content p {
          font-size: 1.5em;
          color: var(--second-color-200);
        }

        .homepage-content p:first-of-type {
          margin-top: 4em;
        }

        .homepage-content p:last-of-type {
          margin-top: 1em;
        }

        .homepage-content p i {
          font-size: inherit;
        }

        .homepage-links {
          margin-top: 4em;
        }

        .homepage-links a {
          margin-right: 8px;
          font-weight: 300;
        }

        @media screen and (max-width: 50em) {
          .homepage-content {
            margin-top: 2em;
          }

          .homepage-links {
            margin-top: 3em;
          }

          .homepage-links a {
            display: block;
            margin-bottom: 2em;
          }
        }
      `}</style>
    </MainLayout>
  );
};

export default Home;
