import { useInfiniteQuery } from "@tanstack/react-query";
import { Axios } from "../api/axiosInstance";

export const fetchVideo = async (page: number) => {
  console.log("ya tuta");
  const response = await Axios.get(
    `discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
  );
  return response.data;
};

export const fetchVideoByTitle = async (query: string, page: number) => {
  const response = await Axios.get(
    `search/movie?query=${query.replace(
      / /g,
      "%20",
    )}&include_adult=true&language=en-US&page=${page}`,
  );
  return response.data;
};

// export const useVideos = () => {
//   const [page, setPage] = useState(0);
//
//   return useQuery({
//     queryKey: ["video", page],
//     queryFn: () => fetchVideo(page),
//   });
// };

export const useInfinityVideos = () => {
  return useInfiniteQuery({
    queryKey: ["videos"],
    queryFn: ({ pageParam }) => {
      return fetchVideo(pageParam);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (allPages.length < lastPage.total_pages) return allPages.length + 1;
      return undefined;
    },
  });
};

export const useSearchVideos = (query: string) => {
  return useInfiniteQuery({
    queryKey: ["searched videos", query],
    queryFn: ({ pageParam }) => {
      return fetchVideoByTitle(query, pageParam);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (allPages.length < lastPage.total_pages) return allPages.length + 1;
      return undefined;
    },
  });
};
