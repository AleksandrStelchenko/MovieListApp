import React, { useMemo, useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";
import { useInfinityVideos, useSearchVideos } from "../../hooks/useFilms";

export const HomeScreenContainer = () => {
  const [searchedText, setSearchedText] = useState("");
  const { data: videoData, fetchNextPage: fetchNextVideoPage } =
    useInfinityVideos();
  const { data: searchedData, fetchNextPage: fetchNextSearchPage } =
    useSearchVideos(searchedText);

  const videos = useMemo(() => {
    return videoData?.pages.reduce((acc, page) => {
      return [...acc, ...page.results];
    }, []);
  }, [videoData]);

  const searchedVideos = useMemo(() => {
    return searchedData?.pages.reduce((acc, page) => {
      return [...acc, ...page.results];
    }, []);
  }, [searchedData]);

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={{ borderRadius: 10, borderWidth: 1 }}
        onChangeText={setSearchedText}
      />
      <Button
        title={"title"}
        onPress={() => {
          fetchNextSearchPage();
        }}
      />
      <FlatList
        data={searchedText ? searchedVideos : videos}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 40 }}
        onEndReached={() => {
          searchedText ? fetchNextSearchPage() : fetchNextVideoPage();
        }}
        renderItem={({ item }) => {
          return <Text key={item.id}>{item.original_title}</Text>;
        }}
      />
    </View>
  );
};
