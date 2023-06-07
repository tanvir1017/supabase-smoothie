import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Update = () => {
  const { id } = useParams();
  const [smoothie, setSmoothie] = useState(null);
  const [fetchErr, setFetchErr] = useState(null);
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    const fetchSmoothie = async () => {
      const { data, error } = await supabase
        .from("Supa Smoothies")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        setSmoothie(null);
        setFetchErr("Could not load the data by specific id");
        return;
      }
      if (data) {
        setSmoothie(data);
        setFetchErr(null);
      }
    };

    fetchSmoothie();
  }, []);

  let content = null;
  if (!fetchErr && !smoothie) {
    content = <p>Loading...</p>;
  }
  if (fetchErr && !smoothie) {
    content = <p>{fetchErr}</p>;
  }
  if (smoothie && !fetchErr) {
    const handleSubmit = () => {};
    content = (
      <div className="page create">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={smoothie.title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="method">Method:</label>
          <textarea
            id="method"
            value={smoothie.method}
            onChange={(e) => setMethod(e.target.value)}
          />

          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            value={smoothie.rating}
            onChange={(e) => setRating(e.target.value)}
          />

          <div className="update-button">
            <Link to={`/`}>
              <button>Cancel</button>
            </Link>
            <button>Create Smoothie Recipe</button>
          </div>

          {fetchErr && <p className="error ">{fetchErr}</p>}
        </form>
      </div>
    );
  }

  return <div className="page update">{content}</div>;
};

export default Update;
