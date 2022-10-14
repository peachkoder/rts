import ReactDOM from "react-dom";
import EventComponent from "./events/EventComponent";
import UserSearch from "./refs/UserSearch";
import GuestList from "./state/guestList";

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
