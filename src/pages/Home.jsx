import { useEffect, useState } from "react";
import SmoothiesCard from "../components/smoothiescard";
import supabase from "../config/supabaseclient";

const Home = () => {
  const [fetchErr, setFetchErr] = useState(null);
  const [smoothies, setSmoothies] = useState(null);
  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase.from("Supa Smoothies").select();
      if (error) {
        setFetchErr("could not fetched from db");
        setSmoothies(null);
        console.log(error);
      }

      if (data) {
        setSmoothies(data);
        setFetchErr(null);
      }
    };

    //  calling the fetchSmoothies function to be executed
    fetchSmoothies();
  }, []);

  let content = null;
  if (fetchErr && !smoothies) {
    content = <p>{fetchErr}</p>;
  }
  if (!fetchErr && !smoothies) {
    content = <p>loading...</p>;
  }
  if (!fetchErr && smoothies) {
    content = (
      <div className="smoothies">
        <div className="smoothie-grid">
          {smoothies.reverse().map((smoothie) => (
            <SmoothiesCard key={smoothie.id} smoothie={smoothie} />
          ))}
        </div>
      </div>
    );
  }

  return <div className="page home">{content}</div>;
};

export default Home;
