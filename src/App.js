import React from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";

function App() {
  const steps = [
    {
      id: "greet",
      message: "Hello! Welcome to 25centAI Assistant.",
      trigger: "ask name"
    },
    {
      id: "ask name",
      message: "May I know your name?",
      trigger: "Waiting1"
    },
    {
      id: "Waiting1",
      user: true,
      trigger: "name"
    },
    {
      id: "name",
      message: "Hi {previousValue}, can you please provide your contact number?",
      trigger: "askContact"
    },
    {
      id: "askContact",
      user: true,
      validator: (value) => {
        const regex = /^[0-9]{10}$/; // Validates a 10-digit phone number
        if (regex.test(value)) {
          return true;
        }
        return "Please enter a valid 10-digit contact number.";
      },
      trigger: "contactSaved"
    },
    {
      id: "contactSaved",
      message: "Thank you! How can I assist you today?",
      trigger: "options"
    },
    {
      id: "options",
      options: [
        { value: "buy", label: "Looking to buy a property", trigger: "buy" },
        { value: "sell", label: "Looking to sell a property", trigger: "sell" },
        { value: "rent", label: "Looking to rent a property", trigger: "rent" }
      ]
    },
    {
      id: "buy",
      message: "Great! Are you looking for residential or commercial properties?",
      trigger: "buyOptions"
    },
    {
      id: "buyOptions",
      options: [
        { value: "residential", label: "Residential", trigger: "residentialBuy" },
        { value: "commercial", label: "Commercial", trigger: "commercialBuy" }
      ]
    },
    {
      id: "residentialBuy",
      message: "Thank you! We'll provide listings for residential properties shortly.",
      trigger: "end"
    },
    {
      id: "commercialBuy",
      message: "Thank you! We'll provide listings for commercial properties shortly.",
      trigger: "end"
    },
    {
      id: "sell",
      message: "We can assist you with selling your property. Please provide more details on the type of property.",
      trigger: "sellOptions"
    },
    {
      id: "sellOptions",
      options: [
        { value: "residential", label: "Residential", trigger: "residentialSell" },
        { value: "commercial", label: "Commercial", trigger: "commercialSell" }
      ]
    },
    {
      id: "residentialSell",
      message: "Thank you! Our team will contact you to discuss selling your residential property.",
      trigger: "end"
    },
    {
      id: "commercialSell",
      message: "Thank you! Our team will contact you to discuss selling your commercial property.",
      trigger: "end"
    },
    {
      id: "rent",
      message: "Are you looking to rent or lease a property?",
      trigger: "rentOptions"
    },
    {
      id: "rentOptions",
      options: [
        { value: "residential", label: "Residential", trigger: "residentialRent" },
        { value: "commercial", label: "Commercial", trigger: "commercialRent" }
      ]
    },
    {
      id: "residentialRent",
      message: "We'll provide you with options for renting a residential property soon.",
      trigger: "end"
    },
    {
      id: "commercialRent",
      message: "We'll provide you with options for leasing a commercial property soon.",
      trigger: "end"
    },
    {
      id: "end",
      message: "Thank you for using 25centAI.Our agent contact you shortly!",
      end: true
    }
  ];
  
  return( <>
  <Segment floated="right">
    <ChatBot steps={steps}/>
  </Segment></>
  );     
}
export default App;
