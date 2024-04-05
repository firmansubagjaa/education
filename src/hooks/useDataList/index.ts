import { useQuery } from "@tanstack/react-query";
import { api } from "../../helpers";

export const useDataList = () => {
  const { data, isSuccess, isPending, error } = useQuery({
    queryKey: ["data-list"],
    queryFn: async () => {
      const response = await api.get("/directory/dataList");
      return response.data;
    },
    refetchOnWindowFocus: true,
    refetchOnReconnect: false,
    refetchOnMount: true,
  });
  const result = data?.data;
  return { data: result, isSuccess, isPending, error };
};
