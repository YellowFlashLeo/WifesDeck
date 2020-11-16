import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { FaSun } from "react-icons/fa";
import PropTypes from "prop-types";

export default class Card extends Component {
  render() {
    const { id, title, img } = this.props.card; // since Product list is calling product Product

    // first className  specified how many columns of products will be displayed for different sizes of screens
    // second className says that will be displyaed card
    // className img-container is custom by us
    // once we click on the product we are directed by link to details page
    // on details page we display image of the product we clicked on at the top (card-image-top)
    // after link , we describe button which is on each product

    //About button we have disabled attribute which we use to have following logic:
    // By default all products are inCart=false, so when user clicks on product, inCart becomes true and button is disabled
    //  if product is already in cart then clicking will not work
    // then we check if inCart is true then we have paragraph saying "in cart"
    // if inCart is false then we have font awesome cart image
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(provider) => (
              <div
                className="img-container -p3"
                onClick={() => provider.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={img} alt="card" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  onClick={() => {
                    provider.openModel(id);
                  }}
                >
                  <i className="fas fa-cart-plus" />
                </button>
              </div>
            )}
          </ProductConsumer>

          {/* card footer*/}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-3"></span>
              {<FaSun />}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.8rem solid rgba(0, 0, 0, 0.8);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.8);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1.2rem 1.9rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
