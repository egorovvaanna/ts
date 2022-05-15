import { FC, Fragment } from "react";
import loader from './../loader/Loader.gif'

export const Loader: FC =()=> {
    return (
        <h1>Loading... <img src={loader} alt="loading..." /> </h1>
    );
  };


