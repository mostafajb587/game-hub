import { videos } from "@/Entities/videos"
import apiCleint from "@/services/api-client"
import { useQuery } from "@tanstack/react-query";
const useVideo=(gameId:number)=>{
    const apicleint=new apiCleint<videos>(`/games/${gameId}/movies`)
return useQuery({
    queryKey:['trailers',gameId],
    queryFn:apicleint.getAll
     
})
}
export default useVideo;
