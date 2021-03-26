import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';

import Tag from './Tag';

import * as styles from './ServiceTags.module.scss';

interface IServiceTags {
  className?: string;
  services: MinFraudServices;
}

export const renderTag =
  (service: string, isDisabled?: boolean) : JSX.Element => (
    <Tag
      className={classNames(
        styles.tag,
        {
          [styles['tag__disabled']]: isDisabled,
        }
      )}
    >
      {service}
    </Tag>
  );

const ServiceTags: React.FC<IServiceTags> = (props) => {
  const { className, services } = props;
  return (
    <div
      className={className}
    >
      {(services === '*' || services.includes('score'))
        ? renderTag('Score')
        : renderTag('Score', true)
      }

      {(services === '*' || services.includes('insights'))
        ? renderTag('Insights')
        : renderTag('Insights', true)
      }

      {(services === '*' || services.includes('factors'))
        ? renderTag('Factors')
        : renderTag('Factors', true)
      }
    </div>
  );
};

ServiceTags.propTypes = {
  className: PropTypes.string,
  services: PropTypes.any.isRequired,
};

export default ServiceTags;
