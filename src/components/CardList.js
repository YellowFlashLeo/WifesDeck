import React, { Component } from "react";
import Card from "./Card";
import Title from "./coomon/title";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import SearchBox from "./coomon/searchBox";

export default class CardList extends Component {
  // ProductConsumer will enable ProductList to use everything from ProdcutProvider
  // we use function with parameter which represents provider object
  render() {
    return (
      <MainScreenWrapper>
        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <Title name="Your" title="Library" />
              <ProductConsumer>
                {(provider) => {
                  return (
                    <SearchBox
                      value={provider.searchQuery}
                      onChange={provider.handleSearch}
                    />
                  );
                }}
              </ProductConsumer>
              <div className="row">
                <ProductConsumer>
                  {(provider) => {
                    return provider.cards.map((card) => {
                      return <Card key={card.id} card={card} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </React.Fragment>
      </MainScreenWrapper>
    );
  }
}

const MainScreenWrapper = styled.nav`
  background: var(--lightBlue);
`;
