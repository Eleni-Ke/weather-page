import { InputGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SearchBar = (props) => {
  return (
    <InputGroup>
      <Form.Control
        placeholder="..."
        // value={props.selectedCityFromApp.name}
        onChange={(e) => props.changeSelectedCityFromApp(e.target.value)}
      />
      <Link to="/">Search City</Link>
    </InputGroup>
  );
};

export default SearchBar;
