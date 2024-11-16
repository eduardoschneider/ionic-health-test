import React from 'react';
import './styles.scss';
import { useParams } from 'react-router-dom';
import { getSpecific } from '@services/MarvelService';
import { getPathSegment } from '@utils/Helpers';
import { parseISO, format } from 'date-fns';
import DetailBlock from '@components/DetailBlock';
import Loading from '@components/Loading';

const Details: React.FC = () => {

  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const [item, setItem] = React.useState<any>();

  const fetchItem = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getSpecific(id, getPathSegment());
      setItem(response.data.results[0]);
    } catch (error) {
      console.error("Erro ao buscar os itens:", error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  const renderItems = (items: any[], label: string, className: string) => (
    items && items.length > 0 && (
      <DetailBlock label={label}>
        {items.map((item, index) => (
          <span key={index} className={`card-content ${className}`}>{item.name}</span>
        ))}
      </DetailBlock>
    )
  );

  React.useEffect(() => {
    fetchItem();
  }, [fetchItem]);

  if (isLoading) {
    return (
    <div className="item-profile">
      <Loading />
    </div>
    );
  }

  return (
    <div className="item-profile">

      <div className="information">
        <img src={item?.thumbnail?.path + '.' + item?.thumbnail?.extension}></img>
        <span className="name">{item?.name || item?.title}</span>
        <span className="description">{item?.description}</span>

        {item?.next &&
          <a className="navigate next">
            <span>Próximo</span><br />
            {item?.next?.name}
          </a>
        }
        {item?.previous &&
          <a className="navigate previous">
            <span>Anterior</span><br />
            {item?.previous?.name}
          </a>
        }

        <span className="modified">
          <a>Última modificação</a> <br />
          {format(parseISO(item.modified), 'dd/MM/yyyy HH:mm')}
        </span>
      </div>

      <div className="content">

        {renderItems(item?.comics?.items, 'Comics', 'comic')}
        {renderItems(item?.stories?.items, 'Histórias', 'stories')}
        {renderItems(item?.events?.items, 'Eventos', 'events')}
        {renderItems(item?.characters?.items, 'Personagens', 'characters')}
        {renderItems(item?.series?.items, 'Séries', 'series')}
        {renderItems(item?.creators?.items, 'Criadores', 'creators')}

      </div>
    </div>
  );
};

export default Details;