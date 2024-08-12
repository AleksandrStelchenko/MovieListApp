import React, { useMemo, useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";
import { useInfinityVideos, useSearchVideos } from "../../hooks/useFilms";
import { ImageContainer } from "@components";
import moment from "moment";
import { Movie } from "@types";

export const HomeScreenContainer = () => {
  const [searchedText, setSearchedText] = useState("");
  const { data: videoData, fetchNextPage: fetchNextVideoPage } =
    useInfinityVideos();
  const { data: searchedData, fetchNextPage: fetchNextSearchPage } =
    useSearchVideos(searchedText);

  const videos = useMemo(() => {
    const result: Movie[] = videoData?.pages.reduce((acc, page) => {
      return [...acc, ...page.results];
    }, []);
    const ids = result?.map((item) => item.id);

    return result?.filter((item, index) => !ids.includes(item.id, index + 1));
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
        contentContainerStyle={{ paddingVertical: 40, gap: 20 }}
        onEndReached={() => {
          searchedText ? fetchNextSearchPage() : fetchNextVideoPage();
        }}
        renderItem={({ item }) => (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              marginHorizontal: 20,
              borderRadius: 16,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.18,
              shadowRadius: 4.6,
              elevation: 5,
            }}
          >
            <ImageContainer
              style={{
                height: 300,
                aspectRatio: 670 / 1005,
                borderRadius: 16,
                overflow: "hidden",
              }}
              path={item.poster_path}
            />
            <View>
              <Text>{item.title}</Text>
              <Text>
                {moment(item.release_date, "YYYY-MM-DD").format("DD MMM, YYYY")}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
