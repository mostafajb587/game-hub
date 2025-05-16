
import axios , {AxiosRequestConfig} from "axios";

const instance= axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'742c0e2416844c55993d51676b4fc3f4'
    }
    
})
export interface FetchingResponce<T> {
    count: number;
    results: T[];
    next:string|null;
  }

class apiCleint<T>{
   endpoint:string;
 constructor(endpoint:string)
 {this.endpoint=endpoint}
  getAll=(config?:AxiosRequestConfig)=>{
   return instance.get<FetchingResponce<T>>(this.endpoint,config).then(res=>res.data)
 }
 get=(id:string|number)=>{
 return instance.get<T>(this.endpoint+'/'+id).then(res=>res.data)
 }
}
export default apiCleint