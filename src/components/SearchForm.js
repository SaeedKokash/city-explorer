import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class SearchForm extends Component {
    render() {
        return (

            <div>
                <Form onSubmit={this.props.submitHandler} >

                    <Form.Group className="mb-3">
                        <Form.Label id='searchQuery' >Enter City Name</Form.Label>
                        <Form.Control id='searchQuery' type="text" placeholder="Enter City Name Here" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Explore!
                    </Button>

                </Form>

                

            </div>
        )
    }
}
