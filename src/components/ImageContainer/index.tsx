import React, { useState } from "react";
import FastImage, { FastImageProps } from "react-native-fast-image/src";
import { View } from "react-native";
import { Loader } from "../Loader";

type ImageContainerProps = {
  path?: string | null;
  original?: boolean;
  loader?: boolean;
} & FastImageProps;

export const ImageContainer: React.FC<ImageContainerProps> = (props) => {
  const { path, original, loader, ...rest } = props;
  const [loading, setLoading] = useState(false);

  if (!path) return null;

  return (
    <View style={rest.style}>
      <FastImage
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        {...rest}
        source={{
          uri: `https://image.tmdb.org/t/p/${
            original ? "original" : "w500"
          }${path}`,
        }}
      />
      {loading && loader && <Loader size={"small"} />}
    </View>
  );
};
