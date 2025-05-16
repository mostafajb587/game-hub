
import apiClient,{ FetchingResponce } from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import useGameQueryStore from "@/store";
import { game } from "../Entities/game";
  const apiCleint = new apiClient<game>('/games');
  const useGames=()=>{
    const GameQuery=  useGameQueryStore(s=>s.gameQuery)
     return useInfiniteQuery< FetchingResponce<game>,Error>({
      queryKey:['games',GameQuery],
      queryFn:({pageParam=1})=>apiCleint.getAll({
        params:{
          genres:GameQuery.gerneId,parent_platforms:GameQuery.platformId,
          ordering:GameQuery.sortOrder,search:GameQuery.searchText,page:pageParam
        
        }
      }),
      getNextPageParam:(nextpage,allpages)=>{
     return nextpage.next? allpages.length+1:undefined;
      }
    })
  }
     
export default useGames;  