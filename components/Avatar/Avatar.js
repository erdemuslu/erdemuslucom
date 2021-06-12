import Image from 'next/image';
import _JSXStyle from 'styled-jsx/style';

const Avatar = ({
  alt,
  source,
  width,
  height,
}) => {
  return (
    <div>
      <Image src={source} alt={alt} width={width} height={height} />
      <style jsx>{`
        div {
          width: ${width}px;
          height: ${height}px;
          border-radius: 50%;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

Avatar.defaultProps = {
  width: 84,
  height: 84,
  source: '',
  alt: '',
};

export default Avatar;
