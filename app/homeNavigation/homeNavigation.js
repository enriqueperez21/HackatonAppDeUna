import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../main";
import { UserScreen } from "../user/userScreen";
import { StoreScreen } from "../store/storeScreen";
import {FinancesScreen} from "../user/financialManagement/financialMScreen";
import ChatScreen from "../chat/chatScreen";

const Stack = createNativeStackNavigator();

export const HomeNavigation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}   options={{ headerShown: false }}/>
        <Stack.Screen name="UserScreen" component={UserScreen}   options={{ headerShown: false }}/>
        <Stack.Screen name="StoreScreen" component={StoreScreen}   options={{ headerShown: false }}/>
        <Stack.Screen name="FinancesMScreen" component={FinancesScreen}   options={{ headerShown: false }}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen}   options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
}
