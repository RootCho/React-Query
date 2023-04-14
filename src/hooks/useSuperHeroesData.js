import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

//Custom Query Hook
export const useSuperHeroesData = (onSuccess, onError, enabled) => {
  return useQuery("/super-heroes", fetchSuperHeroes, {
    // cacheTime: 5000,
    // staleTime: 30000, //최신 데이터 업데이트 이후 30초 동안은 data fetching을 하지 않는다.(30초 뒤에 데이터가 fresh -> stale 상태로 변한다.) (default: 0)
    //[refetch default]
    // refetchOnMount: true, (default)
    // refetchOnWindowFocus: true, (default true)
    //( 만약 화면 클릭 같은 액션을 취하면 자동으로 refetch)
    // refetchInterval: 2000, //(default false)
    enabled: enabled, //자동으로 데이터 패칭 여부 (default: true) , 수동으로 데이터 패칭을 원한다면 enabled: false로 하고 특정 이벤트를 통해 refetch 함수를 실행시킨다.
    onSuccess, //onSuccess : onSuccess
    onError, //Error 발생 시, react-query는 자동으로 retry를 3번 시도한다.
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name); // data 중 특정 값(name)만 리턴하고 싶은 경우 select 옵션을 사용한다.
    //   return superHeroNames;
    // },
  });
};
