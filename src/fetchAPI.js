//importing axios package to fetch from API
import axios from "axios";

//function to fetch from API
export const getProducts = async () => {
  try {
    const response = await axios.get(
      //getting data we created on dummy server
      "https://my-json-server.typicode.com/khalidlad888/JSONserver/products"
    );
    const products = response.data;

    return products;
  } catch (err) {
    console.log("Error in fetching", err);
  }
};