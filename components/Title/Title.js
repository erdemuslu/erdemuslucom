import _JSXStyle from 'styled-jsx/style';

const Title = ({content}) => {
  return (
    <>
      <h1>{content}</h1>
      <style jsx>{`
        h1 {
          color: var(--second-color-100);
          font-size: 2.5em;
        }
      `}</style>
    </>
  );
};

Title.defaultProps ={
  content: 'Lorem ipsum dolor',
}

export default Title;
