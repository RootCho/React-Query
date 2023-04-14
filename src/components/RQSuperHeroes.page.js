import { useQuery } from "react-query";
import axios from "axios";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };
  const onError = (error) => {
    console.log("Perform side effect after encountering error", error);
  };
  const enabled = true;
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError, enabled);

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>LOADING.....</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHeroes.page</h2>
      {/* 버튼을 클릭했을 때 data refetch 실행 */}
      {/* <button onClick={refetch}>Fetch heroes</button> */}
      {data?.data.map((hero) => (
        <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
      {/* {data?.map((heroName) => {
        return (
          <div key={heroName}>
            <Link>{heroName}</Link>
          </div>
        );
      })} */}
    </>
  );
};
