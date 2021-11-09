import React from 'react';

interface IProps {
  text?: {
    title?: string;
    subtitle?: string;
    description?: string;
  };
  useAnd?: boolean;
  background: string;
}

const Header = ({ text, useAnd, background }: IProps) => {
  return (
    <div
      className={`header-wrapper ${
        text?.title || text?.subtitle || text?.description ? 'background' : ''
      }`}
    >
      <style jsx>
        {`
          .header-wrapper {
            background-image: url(${background});
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: center;
            background-size: cover;
          }
        `}
      </style>
      {text ? (
        <div className='text'>
          {text.title ? <h2 className='title'>{text.title}</h2> : ''}
          {useAnd ? <p className='and'>&</p> : ''}
          <p></p>
          {text.subtitle ? <h1 className='subtitle'>{text.subtitle}</h1> : ''}
          {text.description ? <h4>{text.description}</h4> : ''}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Header;
