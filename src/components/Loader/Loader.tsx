import { Spinner } from 'react-bootstrap';

import styles from './Loader.module.css'; 
const Loader = () => {
    return (
        <div className={styles.loader}>
          <Spinner animation="border" role="status" />
          
        </div>
    );
  };
  
  export default Loader;