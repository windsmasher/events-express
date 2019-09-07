import React from "react";
import "./App.scss";
import EventForm from "./components/EventForm/EventForm";
import Navbar from "./components/Navbar/Navbar";
import ParticipantList from "./components/ParticipantList/ParticipantList";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <EventForm />
        <ParticipantList />
      </div>
    </Provider>
  );
}

export default App;
