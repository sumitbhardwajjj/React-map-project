import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/DetailPage.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const DetailPage = () => {
  const [cards, setcards] = useState([]);

  const productId = useParams().id;

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${productId}`)
      .then((data) => data.json())
      .then((result) => setcards(result));
  }, [productId]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div>
          {cards.map((card) => (
            <div key={card.id}>
              <div className="contain">
                <div>
                  <h4>{card.name}</h4>
                  <h5>{card.tagline}</h5>
                  <img className="image" src={card.image_url} alt="" />
                </div>
                <div className="desc">
                  <b>Description:</b> {card.description}
                  <div>
                    <b>First Brewed:</b> {card.first_brewed}
                  </div>
                  <span>
                    <b>ABV:</b> {card.abv}
                  </span>
                  <span>
                    <b>IBU:</b> {card.ibu}
                  </span>
                  <span>
                    <b>Target FG:</b> {card.target_fg}
                  </span>
                  <span>
                    <b>EBC:</b> {card.ebc}
                  </span>
                  <span>
                    <b>SRM:</b> {card.srm}
                  </span>
                  <span>
                    <b>PH:</b> {card.ph}
                  </span>
                  <span>
                    <b>Attenuation Level:</b> {card.attenuation_level}
                  </span>
                  <span>
                    <b>Volume Value:</b> {card.volume.value}
                  </span>
                  <span>
                    <b>Volume Unit:</b> {card.volume.unit}
                  </span>
                  <span>
                    <b>Boil Volume Value</b> {card.boil_volume.value}
                  </span>
                  {card &&
                    card.method &&
                    card.method.mash_temp &&
                    card.method.mash_temp[0] &&
                    card.method.mash_temp[0].temp && (
                      <div>
                        <span>
                          <b> Mash Temperature:</b>{" "}
                          {card.method.mash_temp[0].temp.value}{" "}
                          {card.method.mash_temp[0].temp.unit}
                        </span>
                        <span>
                          <b> Duration:</b> {card.method.mash_temp[0].duration}{" "}
                          minutes
                        </span>
                        <div>
                          {card &&
                            card.method &&
                            card.method.fermentation &&
                            card.method.fermentation.temp && (
                              <div>
                                <span>
                                  <b> Fermentation Temperature:</b>
                                  {card.method.fermentation.temp.value}{" "}
                                  {card.method.fermentation.temp.unit}
                                </span>
                              </div>
                            )}
                        </div>
                      </div>
                    )}
                  {card &&
                    card.method &&
                    card.method &&
                    card.method.twist !== null && (
                      <div>
                        <span>
                          <b>Twist:</b> {card.method.twist}
                        </span>
                      </div>
                    )}
                  {card && card.ingredients && (
                    <div>
                      <h5>Ingredients:</h5>
                      <div>
                        <h5>Malt</h5>
                        {card.ingredients.malt.map((malt, index) => (
                          <div key={index}>
                            <span>
                              <b>Name: </b>
                              {malt.name}
                            </span>
                            <span>
                              <b>Amount:</b> {malt.amount.value}{" "}
                              {malt.amount.unit}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div>
                        <h5>Hops</h5>
                        {card.ingredients.hops.map((hop, index) => (
                          <div key={index}>
                            <span>
                              <b>Name:</b> {hop.name}
                            </span>
                            <span>
                              <b> Amount:</b> {hop.amount.value}{" "}
                              {hop.amount.unit}
                            </span>
                            <span>
                              <b>Add:</b> {hop.add}
                            </span>
                            <span>
                              <b>Attribute:</b> {hop.attribute}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div>
                        <h5>Yeast</h5>
                        <span>{card.ingredients.yeast}</span>
                      </div>
                    </div>
                  )}
                  <div>{card.food_pairing}</div>
                  {card.brewers_tips}
                  <div>{card.contributed_by}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/" className="link">
          <div>
            <button className="back">
              <ArrowBackIcon className="icon" /> <span> Go Back</span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DetailPage;
