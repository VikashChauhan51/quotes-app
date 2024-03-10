import { useEffect, useState } from 'react';
import { getQuotes } from '../utils/api';
import {Loader,Error} from '../components';

const Quotes = () => {
  const [quotes, setQuotes] = useState<{ id: string; message: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      setIsLoading(true); 
      try {
        const quotes = await getQuotes();
      setQuotes(quotes);
      } catch (error:any) {
        setError(error.message);
      } 
      
      setIsLoading(false); 
    };
//like mount hook
    fetchQuotes();
  }, []);


  if (isLoading) { 
    return <Loader/>;
  }
  if (error) {
    return <Error message={error} />;
  }
  return (
    <div className="container">
    <div className="row">

        {quotes.map((quote) => (
            
            <div key={quote.id} className="pull-left col-md-4">
                <div>
                    <div className="shadow-lg p-3 mb-5 bg-white rounded">{quote.message}</div>
                </div>
            </div>

        ))}
    </div>
    </div>
  );
};

export default Quotes;
