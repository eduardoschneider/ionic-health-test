import './styles.scss';
import notFoundImage from '@assets/404.png';

const NotFound: React.FC = () => {

  return (
    <div className="page-not-found">
        <span className="title">404</span>
        <span className="message">Essa página não foi encontrada :(</span>
        <img src={notFoundImage}></img>
    </div>
  );
};

export default NotFound;