import { gql } from "@apollo/client";

export const GET_ALL_CATS = gql`
  {
    categories {
        name
      }
    }
`;
export const GET_ALL_CAT = gql`
{
  category(input: {title: "all"}) {
    name,
    products {
      id,
        name,
        inStock,
        gallery,
        description,
        category:,
        attributes {
          id,
          name,
          type,
          items {
            displayValue,
            value,
            id 
          }
        },
        prices {
          currency {
            label,
            symbol
            },
            amount
        }
        brand
    }
  },
  categories {
    name
  },
  currencies {
    label,
    symbol
  }
}
`;

export const GET_TECH_CAT = gql`
{
  category(input: {title: "tech"}) {
    name,
    products {
      id,
        name,
        inStock,
        gallery,
        description,
        category:,
        attributes {
          id,
          name,
          type,
          items {
            displayValue,
            value,
            id 
          }
        },
        prices {
          currency {
            label,
            symbol
            },
            amount
        }
        brand
    }
  },
  categories {
    name
  },
  currencies {
    label,
    symbol
  }
}
`;

export const GET_CLOTHES_CAT = gql`
{
  category(input: {title: "clothes"}) {
    name,
    products {
      id,
        name,
        inStock,
        gallery,
        description,
        category:,
        attributes {
          id,
          name,
          type,
          items {
            displayValue,
            value,
            id 
          }
        },
        prices {
          currency {
            label,
            symbol
            },
            amount
        }
        brand
    }
  },
  categories {
    name
  },
  currencies {
    label,
    symbol
  }
}
`;

export const GET_ALL_ALL = gql `
{
  category(input: {title: "clothes"}) {
    name,
    products {
      id,
        name,
        inStock,
        gallery,
        description,
        category:,
        attributes {
          id,
          name,
          type,
          items {
            displayValue,
            value,
            id 
          }
        },
        prices {
          currency {
            label,
            symbol
            },
            amount
        }
        brand
    }
  },
  category(input: {title: "all"}) {
    name,
    products {
      id,
        name,
        inStock,
        gallery,
        description,
        category:,
        attributes {
          id,
          name,
          type
        },
        prices {
          currency {
            label,
            symbol
            },
            amount
        }
        brand
    }
  },
  category(input: {title: "tech"}) {
    name,
    products {
      id,
        name,
        inStock,
        gallery,
        description,
        category:,
        attributes {
          id,
          name,
          type
        },
        prices {
          currency {
            label,
            symbol
            },
            amount
        }
        brand
    }
  },
  categories {
    name
  },
  currencies {
    label,
    symbol
  }
}
`;