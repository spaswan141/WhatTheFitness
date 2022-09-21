import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getData, getCityData } from "../Redux/action";
import Star from "../styles/star.png"

const Home = () => {
  const dispatch = useDispatch();
  const mainData = useSelector((state) => state.data);
  const cityData = useSelector((state) => state.cityData);

  useEffect(() => {
    dispatch(getData(mainData));
  }, []);

  useEffect(() => {
    dispatch(getCityData(cityData));
  }, []);

;

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <h1>Filters</h1>
        <div>
          <h2>Location</h2>
          <input type="text" placeholder="Enter location" />
          <h2>Price</h2>
          <div className={styles.price}>
            <input type="text" placeholder="Min" />
            <input type="text" placeholder="Max" />
          </div>
          <h2>Cities</h2>
          <select>
            <option value="">Select City</option>
            {cityData.map((item) => {
              return <option value={item.city}>{item.city}</option>;
            })}
          </select>
        </div>
      </div>

      <div className={styles.box}>
        {mainData.map((item) => (
          <Link
            to={`/${item.user_id}`}
            key={item.user_id}
            className={styles.link}
          >
            <div key={item.user_id} className={styles.boxcontainer}>
              <h2>{item.gym_name}</h2>
              <img className={styles.stars} src={Star} alt="rating"/>
              <p>
                {item.address1},{item.city}
              </p>
              
               
              <p>
              <img src="https://cdn-icons-png.flaticon.com/512/3699/3699532.png" style={{height:'15px',width:'15px'}} alt="location"/>  {item.duration_text} away | {item.distance_text}
              </p>
              
              <div className={styles.inner}>
                <p></p>
                {item.plan_price == null ? (
                  ""
                ) : (
                  <p>₹ {item.plan_price} for 3 Months</p>
                )}
                <button>Book Now</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
