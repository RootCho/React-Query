import axios from "axios";
import { useQuery } from "react-query";

// const fetchSuperHero = (heroId) => {
//   return axios.get(`http://localhost:4000/superheroes/${heroId}`);
// };
// export const useSuperHeroData = (heroId) => {
//   return useQuery(["super-hero", heroId], () => fetchSuperHero(heroId));
// };

//parameter 대신에 queryKey를 사용하면 코드가 좀 더 깔끔해진다.
const fetchSuperHero = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};
export const useSuperHeroData = (heroId) => {
  return useQuery(["super-hero", heroId], fetchSuperHero);
};
