import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';

import { pre as Pre } from '../Mdx';

import styles from './Example.module.scss';

interface IExample {
  children: React.ReactNode,
  className?: string;
  language: 'bash' | 'json';
}

const Example: React.FC<IExample> = (props) => {
  const { children, className, language } = props;

  const languageClass = `language-${language}`;

  return (
    <div
      className={classNames(
        styles.container,
        className,
      )}
    >
      <div
        className={styles.label}
      >
        Example:
      </div>

      <Pre
        className={classNames(
          styles.value,
          languageClass
        )}
        showLineNumbers={false}
      >
        <code
          className={languageClass}
        >
          {children}
        </code>
      </Pre>
    </div>
  );
};

Example.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  language: PropTypes.oneOf([
    'bash',
    'json',
  ] as const).isRequired,
};

export default Example;
