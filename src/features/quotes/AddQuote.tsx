import React, { useReducer } from 'react';
import { createQuote } from '../../utils/api';
import { Loader, Error } from '../../components';
import { Button, Form } from 'react-bootstrap';

interface State {
  message: string;
  isLoading: boolean;
  error: string | null;
  messageError: string | null;
}

type Action =
  | { type: 'SET_MESSAGE'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_MESSAGE_ERROR'; payload: string | null };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_MESSAGE':
      return { ...state, message: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_MESSAGE_ERROR':
      return { ...state, messageError: action.payload };
    default:
      return state;
  }
}

const AddQuote: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    message: '',
    isLoading: false,
    error: null,
    messageError: null,
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (state.message.trim() === "") {
      dispatch({ type: 'SET_MESSAGE_ERROR', payload: "Message is required" });
      return;
    }
    dispatch({ type: 'SET_MESSAGE_ERROR', payload: null });
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      await createQuote({ message: state.message });
      dispatch({ type: 'SET_MESSAGE', payload: "" });
    } catch (err: any) {
      dispatch({ type: 'SET_ERROR', payload: err.message });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  if (state.isLoading) {
    return <Loader />;
  }
  if (state.error) {
    return <Error message={state.error} />;
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
              value={state.message} 
              isInvalid={!!state.messageError}
              onChange={(e) => dispatch({ type: 'SET_MESSAGE', payload: e.target.value })} 
            />
            <Form.Control.Feedback type='invalid'>
              {state.messageError}
            </Form.Control.Feedback>
          </Form.Group>
          <Button disabled={state.isLoading} className="btn btn-primary mb-2" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddQuote;
