import React from "react";
import FastImage, { FastImageProps } from "react-native-fast-image";

type ImageContainerProps = {
  path?: string | null;
  original?: boolean;
} & FastImageProps;

export const ImageContainer: React.FC<ImageContainerProps> = (props) => {
  const { path, original, ...rest } = props;
  if (!path) return null;
  return (
    <FastImage
      {...rest}
      source={{
        uri: `https://image.tmdb.org/t/p/${
          original ? "original" : "w500"
        }${path}`,
      }}
    />
  );
};
