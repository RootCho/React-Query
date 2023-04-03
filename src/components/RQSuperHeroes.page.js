import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data } = useQuery("/super-heroes", fetchSuperHeroes);

  if (isLoading) {
    return <h2>LOADING.....</h2>;
  }

  return (
    <>
      <h2>RQSuperHeroes.page</h2>
      {data?.data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </>
  );
};
