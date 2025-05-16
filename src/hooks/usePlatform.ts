import platform from "../data/platform";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Platform} from "../Entities/Platform";

const apiCleint =new apiClient<Platform>('/platforms/lists/parents');
const usePlatform=()=>useQuery({
    queryKey:['platform'],
    queryFn:apiCleint.getAll,
    staleTime:24*60*60*1000,
    initialData:{count:platform.length,results:platform,next:null}
})
export default usePlatform;