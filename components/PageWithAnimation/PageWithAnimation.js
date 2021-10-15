import _JSXStyle from 'styled-jsx/style';

const PageWithAnimation = ({ children }) => {
  return (
    <section>
      {children}
      <style jsx>{`
        @keyframes page-loader {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        section {
          width: 100%;
          animation-name: page-loader;
          animation-duration: .5s;
          animation-iteration-count: 1;
          animation-timing-function: linear;
        }
      `}</style>
    </section>
  );
};

export default PageWithAnimation;
