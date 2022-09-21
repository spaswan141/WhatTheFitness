import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/GymDetail.module.css";
import { getData, getTermsData, isLoading } from "../Redux/action";
const GymDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [plans, setPlans] = useState([]);
  const [currentProduct, setcurrentProduct] = useState({});
  const mainData = useSelector((state) => state.data);
  const termsData = useSelector((state) => state.termsData);
  const isLoading = useSelector((state) => state.isLoading);

  /* ---------Network calls Starts Here---------*/
  useEffect(() => {
    dispatch(getData(mainData));
  }, []);

  useEffect(() => {
    dispatch(getTermsData(termsData));
  }, []);

  useEffect(() => {
    if (id) {
      const temp = mainData.find((ele) => ele.user_id === id);
      temp && setcurrentProduct(temp);
    }
  }, [mainData, id]);

  useEffect(() => {
    axios
      .get("https://blueproduct.herokuapp.com/plan")
      .then((res) => setPlans(res.data));
  }, []);
  /* ---------Network calls Ends Here---------*/


  /* For random Colors */
  function getColorCode() {
    var makeColorCode = "0123456789ABCDEF";
    var code = "#";
    for (var count = 0; count < 6; count++) {
      code = code + makeColorCode[Math.floor(Math.random() * 16)];
    }
    return code;
  }
/*--- For Random colors---*/


  return isLoading ? (
    <h1>....Loading</h1>
  ) : (
    <div className={styles.detailsPage}>
      <div className={styles.details}>
        <h1>{currentProduct.gym_name}</h1>
        <p>
          {currentProduct.address1},{currentProduct.city}
        </p>
        <h3>Description :</h3>
        <p>{currentProduct.description}</p>
        <h3>Facilities</h3>
        <div className={styles.facility}>
          {currentProduct.benefits !== undefined &&
            currentProduct.benefits.map((item) => (
              <div key={item.id}>
                <p>{item.name}</p>
              </div>
            ))}
        </div>

        <h3>Why to choose WTF?</h3>
        <div className={styles.terms}>
          {termsData.map((item) => {
            return (
              <div key={item.id}>{item.name === null ? "" : <p>{item.name}</p>}</div>
            );
          })}
        </div>
      </div>

      <div className={styles.plans}>
        <h1>Choose Membership</h1>
        {plans.map((item) => {
          return (
            <div
              style={{ backgroundColor: getColorCode() }}
              className={styles.list}
              key={item.id}
            >
              <div>
                <h3>{item.plan}</h3>
                <h4>{item.plan_name}</h4>
              </div>
              <div>
                <h4>{item.price}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GymDetails;
