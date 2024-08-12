import React from "react";
import {
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Screens } from "@navigation/routes";
import { ImageContainer } from "@components";
import moment from "moment/moment";
import { Movie } from "@types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainStackParamList } from "@navigation/types";
import { styles } from "@screens/Home/styles";

type HomeScreenProps = {
  movies?: Movie[];
  searchedMovies?: Movie[];
  nextMoviesPage: () => void;
  nextSearchPage: () => void;
  searchedText: string;
  setSearchedText: React.Dispatch<React.SetStateAction<string>>;
};

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const {
    movies,
    searchedMovies,
    nextMoviesPage,
    nextSearchPage,
    searchedText,
    setSearchedText,
  } = props;
  const navigation = useNavigation<NavigationProp<MainStackParamList>>();

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setSearchedText} />
      <Button
        title={"title"}
        onPress={() => {
          nextSearchPage();
        }}
      />
      <FlatList
        data={searchedText ? searchedMovies : movies}
        contentContainerStyle={styles.listContainer}
        onEndReached={() => {
          searchedText ? nextSearchPage() : nextMoviesPage();
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(Screens.MovieDetails, { id: item.id })
            }
            key={item.id}
            style={styles.card}
          >
            <ImageContainer style={styles.image} path={item.poster_path} />
            <View>
              <Text>{item.title}</Text>
              <Text>
                {moment(item.release_date, "YYYY-MM-DD").format("DD MMM, YYYY")}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
