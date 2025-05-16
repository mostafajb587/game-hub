
import { useQuery } from "@tanstack/react-query";
import apiClient from "@/services/api-client";
import genres from "@/data/genres";
import { Genrels } from "../Entities/Genrels";
const apiCleint=new apiClient<Genrels>('/genres');  

const useGenres=()=> useQuery({
    queryKey:['genres'],
    queryFn:apiCleint.getAll,
    staleTime:24*60*60*1000,
    initialData:{count:genres.length , results:genres,next:null }

})
export default useGenres;