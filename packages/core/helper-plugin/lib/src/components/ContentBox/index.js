import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from '@strapi/design-system/Flex';
import { Stack } from '@strapi/design-system/Stack';
import { Text } from '@strapi/design-system/Text';
import customEllipsis from '../../utils/customEllipsis';

const IconWrapper = styled(Flex)`
  margin-right: ${({ theme }) => theme.spaces[6]};
  svg {
    width: ${32 / 16}rem;
    height: ${32 / 16}rem;
  }
`;

const ContentBox = ({ title, subtitle, icon, iconBackground, endAction }) => {
  const firstTitleChar = title.substring(0, 4);

  if (title.length > 70 && firstTitleChar === 'http') {
    title = customEllipsis(title);
  }

  return (
    <Flex shadow="tableShadow" hasRadius padding={6} background="neutral0">
      <IconWrapper background={iconBackground} hasRadius padding={3}>
        {icon}
      </IconWrapper>
      <Stack size={endAction ? 0 : 1}>
        <Flex>
          <Text small bold style={{ wordBreak: 'break-all' }}>
            {title}
          </Text>
          {endAction}
        </Flex>
        <Text textColor="neutral600">{subtitle}</Text>
      </Stack>
    </Flex>
  );
};

ContentBox.defaultProps = {
  title: undefined,
  subtitle: undefined,
  icon: undefined,
  iconBackground: undefined,
  endAction: undefined,
};

ContentBox.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.node,
  iconBackground: PropTypes.string,
  endAction: PropTypes.node,
};

export default ContentBox;