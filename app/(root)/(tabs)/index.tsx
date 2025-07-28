import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import NoResults from "@/components/NoResults";

const index = () => {
  const loading = true; // Simulating loading state, replace with actual loading logic
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        numColumns={2}
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => item.toString()}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          loading ? (
            <ActivityIndicator size="large" className="text-primary-300 mt-5" />
          ) : (
            <NoResults />
          )
        }
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5 ">
              <View className="flex flex-row items-center ">
                <Image
                  source={images.avatar}
                  className="size-12 rounded-full"
                />
                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs  font-rubik text-black-100">
                    Good Morning
                  </Text>
                  <Text className="font-rubik-medium text-base text-black-300">
                    Skipper
                  </Text>
                </View>
              </View>

              <Image source={icons.bell} className="size-6" />
            </View>
            <Search />
            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300 ">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className="text-base  font-rubik-bold text-primary-300    ">
                    See all
                  </Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={[1, 2, 3, 4]}
                renderItem={({ item }) => <FeaturedCard />}
                keyExtractor={(item) => item.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                contentContainerClassName="flex gap-5 mt-5"
              />

        
            </View>

            <View className="flex flex-row items-center justify-between">
              <Text className="text-xl font-rubik-bold text-black-300 ">
                Our Recommendation
              </Text>
              <TouchableOpacity>
                <Text className="text-base  font-rubik-bold text-primary-300    ">
                  See all
                </Text>
              </TouchableOpacity>
            </View>

            <Filters />

    
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default index;
