import { useQuery } from "@tanstack/react-query";
import apiCleint from "@/services/api-client";
import { game } from "../Entities/game";
const apicleint=new apiCleint<game>('/games')
const useGame=(slug:string)=>useQuery({
    queryKey:['games',slug],
    queryFn:()=>apicleint.get(slug)
     
})
export default useGame;