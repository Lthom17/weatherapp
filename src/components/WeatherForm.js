import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function WeatherForm({ setCity, setState }) {

  const handleSubmit = (e) => {

    e.preventDefault();

    setCity(e.target[0].value);

    setState(e.target[1].value);

  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter city name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicState">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );

}

export default WeatherForm;