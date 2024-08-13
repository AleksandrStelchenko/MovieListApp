import React from "react";
import { Text, View } from "react-native";
import { Card, ImageContainer } from "@components";
import moment from "moment/moment";
import { styles } from "./styles";

type TitleCardProps = {
  image?: string;
  title?: string;
  tagLine?: string;
  voteAverage?: number;
  status?: string;
  releaseDate?: string;
};

export const TitleCard: React.FC<TitleCardProps> = (props) => {
  const { image, title, tagLine, voteAverage, status, releaseDate } = props;

  return (
    <Card>
      <View style={styles.headerRowContainer}>
        <ImageContainer
          original
          resizeMode={"cover"}
          path={image}
          style={styles.image}
        />
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>{title?.toUpperCase()}</Text>
            <Text style={styles.text}>{tagLine}</Text>
          </View>
          <Text style={styles.voteAverageText}>{voteAverage}☆</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.text}>{status}</Text>

            <Text style={styles.text}>
              {moment(releaseDate, "YYYY-MM-DD").format("DD MMM, YYYY")}
            </Text>
          </View>
        </View>
      </View>
    </Card>
  );
};
