import { Platform } from "@/Entities/Platform";
import { Genrels } from "./Genrels";
import { Publisher } from "./publisher";

export interface game {
  id: number;
  slug: string;
  genres:Genrels[]
  publishers:Publisher[]
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  description_raw: string;
}
