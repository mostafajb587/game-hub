import useGenres from "./useGernels";

const usegenrels =(id?:number)=>{
    const { data: genres } = useGenres();
    return genres?.results.find((g) => g.id === id);
}
export default usegenrels