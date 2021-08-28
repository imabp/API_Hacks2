import { useState, useEffect } from "react";
import Axios from "axios";

const useSponsors = () => {
  const [sponsors, setsponsors] = useState({"data":{"gold":[], "silver":[], "bronze":[],"auth":[],"media":[]}});
  const URI = `https://imabp.github.io/API_Hacks2/data/sponsordata.json`;

  const getSponsors = async () => {
    let res = await Axios({
      method: "get",
      url: URI,
    });

    let { data } = res;
    
    setsponsors(data.data);
  };
  useEffect(() => {
    getSponsors();
  }, []);
  return sponsors;
};
export { useSponsors };
