const Title = ({content}) => {
  return (
    <>
      <h1>{content}</h1>
      <style jsx>{`
        h1 {
          color: var(--white);
          font-weight: 500;
          font-size: 1.25em;
        }
      `}</style>
    </>
  );
};

Title.defaultProps ={
  content: 'Lorem ipsum dolor',
}

export default Title;
