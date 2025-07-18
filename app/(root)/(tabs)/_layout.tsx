// import { Tabs } from "expo-router";
// import { Image, ImageSourcePropType, Text, View } from "react-native";
// import icons from "@/constants/icons";

// const TabIcon = ({
//   focused,
//   icon,
//   title,
// }: {
//   focused: boolean;
//   icon: ImageSourcePropType;
//   title: string;
// }) => (
//   <View className="flex-1 mt-3 flex flex-col items-center">
//     <Image
//       source={icon}
//       tintColor={focused ? "#0061FF" : "#666876"}
//       resizeMode="contain"
//       className="size-6"
//     />
//     <Text
//       className={`${
//         focused
//           ? "text-primary-300 font-rubik-medium"
//           : "text-black-200 font-rubik"
//       } text-xs w-full text-center mt-1`}
//     >
//       {title}
//     </Text>
//   </View>
// );

// const TabsLayout = () => {
//   return (
//     <Tabs
//       screenOptions={{
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           backgroundColor: "white",
//           borderTopWidth: 0,
//           elevation: 0, // Android: removes shadow
//           shadowOpacity: 0, // iOS: removes shadow
//           minHeight: 70,
//         },
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <TabIcon focused={focused} icon={icons.home} title="Home" />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: "Explore",
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <TabIcon focused={focused} icon={icons.search} title="Explore" />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: "Profile",
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <TabIcon focused={focused} icon={icons.person} title="Profile" />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// };

// export default TabsLayout;


import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />


      <Tabs.Screen
        name="explore"
        options={{
          title: 'explore',
          headerShown: false,
          tabBarIcon: ({ color }) => <EvilIcons name="search" size={24} color="black" />,
        }}
      />
  
       <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
