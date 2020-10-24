import React, { Component } from "react";
import Script from "react-load-script";

class Search extends Component {
  // Define Constructor
  constructor(props) {
    super(props);
    this.url = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP}&libraries=places`;
    // Declare State
    this.state = {
      city: "",
      query: "",
    };
  }

  handleScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = {
      types: ["(cities)"],
    }; // To disable any eslint 'google not defined' errors

    // Initialize Google Autocomplete
    /*global google*/ this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      options
    );

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components and formatted
    // address.
    this.autocomplete.setFields(["address_components", "formatted_address"]);

    // Fire Event when a suggested name is selected
    this.autocomplete.addListener("place_changed", this.handlePlaceSelect);
  };

  handlePlaceSelect = () => {
    // Extract City From Address Object
    const addressObject = this.autocomplete.getPlace();
    const address = addressObject.address_components;

    // Check if address is valid
    if (address) {
      // Set State
      this.setState({
        city: address[0].long_name,
        query: addressObject.formatted_address,
      });
    }
  };

  render() {
    return (
      <div>
        <Script url={this.url} onLoad={this.handleScriptLoad} />
        <input
          id="autocomplete"
          value={this.state.query}
          style={{
            margin: "0 auto",
            maxWidth: 800,
          }}
        />
      </div>
    );
  }
}

export default Search;