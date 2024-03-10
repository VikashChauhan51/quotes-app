import { useEffect, useState } from 'react';
import { getQuotes } from '../utils/api';
import {Loader} from '../components';

const Quotes = () => {
  const [quotes, setQuotes] = useState<{ id: string; message: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      setIsLoading(true); 
      const quotes = await getQuotes();
      setQuotes(quotes);
      setIsLoading(false); 
    };
//like mount hook
    fetchQuotes();
  }, []);


  if (isLoading) { 
    return <Loader/>;
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
