import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./coomon/Button";

// first we do object destructering of all properties we have in detailProduct which we get from ProductProvider
// then we return jsx as container with padding top-bottom
// mx-auto puts it in the center
// img-fluid to make sure that image is inside the container

// in product info we have 2 columns : one first image another for text
// when we click on Add to cart button we use addToCart method from ProductProvider
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(provider) => {
          const {
            id,
            inObserver,
            workYour,
            img,
            info,
            bottomWord,
            title,
          } = provider.detailCard;
          return (
            <div className="container py-5">
              {/*title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}

              {/* product info*/}
              <div classname="row">
                {/* product image*/}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="card" />
                </div>
                {/* product text*/}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>name:{title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Bottom word:{" "}
                    <span className="text-uppercase">{bottomWord}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong> {workYour}</strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0 ">
                    Description of the card:
                  </p>
                  <p className="text-purple">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to cards</ButtonContainer>
                    </Link>
                    {/* cart is used to change colors in Button.js depending on whether we already added product to cart or not*/}
                    <ButtonContainer
                      cart
                      disabled={inObserver ? true : false}
                      onClick={() => {
                        provider.openModel(id);
                      }}
                    >
                      {inObserver ? "Already Seen" : "Something new"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
