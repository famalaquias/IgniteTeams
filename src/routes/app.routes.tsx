import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Groups } from '@screens/Groups';
import { Players } from '@screens/Players';
import { NewGroups } from '@screens/NewGroups';

const { Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="groups"
        component={Groups}
      />
      <Screen
        name="new"
        component={NewGroups}
      />
      <Screen
        name="players"
        component={Players}
      />
    </Navigator>
  );
}
