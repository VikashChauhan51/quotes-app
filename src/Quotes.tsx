import { useEffect, useState } from 'react';
import { getQuotes } from './api';

const Quotes = () => {
  const [quotes, setQuotes] = useState<{ id: string; message: string }[]>([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const quotes = await getQuotes();
      setQuotes(quotes);
    };

    fetchQuotes();
  }, []);


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
