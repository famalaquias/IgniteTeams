import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styled from 'styled-components/native';

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonIconTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;

  min-height: 56px;
  max-height: 56px;

  margin-left: 12px;
  margin-right: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``;
