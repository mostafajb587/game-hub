import { create } from "zustand";

 interface GameQuery {
  gerneId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}
interface gameQueryStore{
  gameQuery:GameQuery
  setSearchText:(searchtext:string)=>void,
  setGenreId:(genreId:number)=>void,
  setPlatFormId:(PlatformId:number)=>void,
  setSortOrder:(sortOrder:string)=>void
      }
const useGameQueryStore= create<gameQueryStore>(set=>({
 gameQuery: {},
 setSearchText:(searchText)=>set(()=>({gameQuery:{searchText}})),
 setGenreId:(gerneId)=>set(store=>({gameQuery:{...store.gameQuery, gerneId}})),
 setPlatFormId:(platformId)=>set(store=>({gameQuery:{...store.gameQuery,platformId}})),
 setSortOrder:(sortOrder)=>set(store=>({gameQuery:{...store.gameQuery,sortOrder}}))
}))
export default useGameQueryStore;