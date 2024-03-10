type ErrorProps = {
    message: string;
  };
  
  const Error = ({ message }: ErrorProps) => (
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  );
  
  export default Error;
  