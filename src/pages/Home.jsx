import { useEffect, useState } from "react";
import SmoothiesCard from "../components/smoothiescard";
import supabase from "../config/supabaseClient";

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

  return (
    <div className="page home">
      {fetchErr && <p>{fetchErr}</p>}
      {smoothies && (
        <div className="smoothies">
          <div className="smoothie-grid">
            {smoothies.map((smoothie) => (
              <SmoothiesCard key={smoothie.id} smoothie={smoothie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
