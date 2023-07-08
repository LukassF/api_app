import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import icons from "../data/icons.json";

export default function FoodCard(props) {
  return (
    <div className="col-5 container card px-0 my-2 d-flex flex-column">
      <div
        style={{
          backgroundImage: `url(${props.info.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          overflow: "hidden",
          width: "100%",
          height: "300px",
        }}
        className="position-relative"
      ></div>
      <span className="row pt-2 px-3">
        <h3 className="col">{props.info.name}</h3>
        <h5 className="col-2 d-flex justify-content-end text-muted">
          {props.info.price}$
        </h5>
      </span>
      <span className="px-3 py-0" style={{ fontSize: "14px" }}>
        {props.info.ingredients.map((item, index) => {
          if (index + 1 !== props.info.ingredients.length)
            return (
              <span key={item} className="text-muted">
                {item} |{" "}
              </span>
            );
          else
            return (
              <span key={item} className="text-muted">
                {item}
              </span>
            );
        })}
      </span>
      <ul className="px-3 py-2 d-flex gap-2">
        {props.info.adjectives.map((item) => {
          let selected = icons.filter((icon) => icon.name === item)[0];

          return (
            <div
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{
                width: "30px",
                aspectRatio: "1/1",
                backgroundColor: selected.color,
              }}
            >
              <img
                src={selected.src}
                width={selected.width}
                style={{ filter: "invert(1)" }}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
