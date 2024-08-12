import React from "react";
import FastImage, { FastImageProps } from "react-native-fast-image";

type ImageContainerProps = {
  path: string;
} & FastImageProps;

export const ImageContainer: React.FC<ImageContainerProps> = (props) => {
  const { path, ...rest } = props;
  return (
    <FastImage
      {...rest}
      source={{ uri: `https://image.tmdb.org/t/p/w200${path}` }}
    />
  );
};
