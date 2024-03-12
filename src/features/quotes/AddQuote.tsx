import React, { useState } from 'react';
import { createQuote } from '../../utils/api';
import { Loader, Error } from '../../components';
import { Button, Form } from 'react-bootstrap';

const AddQuote: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (message.trim() === "") {
        setMessageError("Message is required");
        return;
      }
      setMessageError(null);
    try {
      await createQuote( {message: message });
      setMessage("");
    } catch (err:any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) { 
    return <Loader />;
  }
  if (error) {
    return <Error message={error} />;
  }
  return (
    <div className="container">
      <div className="row">
        <Form className="form-inline" onSubmit={handleSubmit}>
            <br/>
          <Form.Group className="form-group mb-2" controlId="formBasicEmail">
            <Form.Control 
              type="text" 
              className="form-control"
              placeholder="Enter message" 
              value={message} 
              isInvalid={!!messageError}
              onChange={(e) => setMessage(e.target.value)} 
            />
            <Form.Control.Feedback type='invalid'>
              {messageError}
            </Form.Control.Feedback>
          </Form.Group>
          <Button className="btn btn-primary mb-2" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddQuote;
