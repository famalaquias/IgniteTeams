import { TouchableOpacity } from 'react-native';
import { UsersThree } from 'phosphor-react-native';

import styled, { css } from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  padding: 24px;
  border-radius: 6px;
  margin-bottom: 12px;

  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};

    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  weight: 'fill',
  color: theme.COLORS.GREEN_500,
}))`
  margin-right: 20px;
`;
