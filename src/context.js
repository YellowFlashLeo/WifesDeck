import React, { Component } from "react";
import { wholedata, detailCard } from "./data";
import { paginate } from "../src/components/coomon/utils/paginate";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    cards: [],
    detailCard: detailCard,
    modelOpen: false, // for opening widnow once add to cart button was clicked
    modelCard: detailCard,
    searchQuery: "",
    currentPage: 1,
    pageSize: 5,
    totalCount: 44,
  };

  componentDidMount() {
    this.handleSearch();
  }

  setCards = () => {
    let cards = [];
    wholedata.forEach((item) => {
      const singleItem = { ...item };
      cards = [...cards, singleItem];
    });
    return cards;
  };

  getPagedData = () => {
    const cards = this.setCards();
    const { searchQuery } = this.state;
    if (searchQuery)
      // if we have any search from user then filter movies by query
      cards = cards.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    this.setState({ cards });
  };

  getItem = (id) => {
    const card = this.state.cards.find((item) => item.id === id);
    return card;
  };

  handlePageChange = (page) => {
    // we change state of the current page to the page number which was pressed on the pagination component
    this.setState({ currentPage: page });
  };

  handleDetail = (id) => {
    const card = this.getItem(id);
    this.setState(() => {
      return { detailCard: card };
    });
  };
  //For model component
  openModel = (id) => {
    // we gonna cal it everytime we click the icon of the product
    const card = this.getItem(id);
    this.setState(() => {
      return { modelCard: card, modelOpen: true };
    });
  };
  closeModel = () => {
    this.setState(() => {
      return { modelOpen: false };
    });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
    let cards = this.setCards();
    const { searchQuery } = this.state;
    if (searchQuery) {
      // if we have any search from user then filter movies by query
      cards = cards.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }
    this.setState({ cards });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          handleSearch: this.handleSearch,
          handlePageChange: this.handlePageChange,
          openModel: this.openModel,
          closeModel: this.closeModel,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

//HigherOrder Component
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ProductConsumer>
        {(value) => <Component {...props} context={value} />}
      </ProductConsumer>
    );
  };
}

export { ProductProvider, ProductConsumer, ProductContext };
