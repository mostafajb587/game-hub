import { Screenshots } from "@/Entities/ScreenShots"
import apiCleint from "@/services/api-client"
import { useQuery } from "@tanstack/react-query"
const useImage=(id:number)=>{
    const apicleint=new apiCleint<Screenshots>(`/games/${id}/screenshots`)
    return useQuery({
        queryKey:['screenshots',id],
        queryFn:apicleint.getAll
    })

}
export default useImage