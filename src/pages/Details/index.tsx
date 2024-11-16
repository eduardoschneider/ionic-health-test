import React from 'react';
import './styles.scss';
import { useParams } from 'react-router-dom';
import { getSpecific } from '@services/MarvelService';
import { getPathSegment } from '@utils/Helpers';
import { parseISO, format } from 'date-fns';
import Loading from '@components/Loading';

const Details: React.FC = () => {

  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const [item, setItem] = React.useState<any>();

  const fetchItem = async () => {
    setIsLoading(true);
    try {
      let response = await getSpecific(id, getPathSegment());
      setItem(response.data.results[0]);
    } catch (error) {
      console.error("Erro ao buscar os itens:", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchItem();
  }, [])

  return (
    <div className="item-profile">
      {isLoading ?
        <Loading></Loading>
        :
        <>
          <div className="information">
            <img src={item?.thumbnail?.path + '.' + item?.thumbnail?.extension}></img>
            <span className="name">{item?.name}</span>
            <span className="description">{item?.description}</span>
            <span className="modified">
              <a>Última modificação</a> <br />
              {format(parseISO(item.modified), 'dd/MM/yyyy HH:mm')}
            </span>
          </div>
          
          <div className="content">

            { getPathSegment() != 'comics' &&
            <div className="block">
              <span className="title">Aparece nas seguintes comics:</span>
              <div className="block-content">
                {
                  item?.comics.items.map((item:any, index:number) => {
                    return <span key={index} className="card-content comic">{item.name}</span>
                  })
                }
              </div>
            </div>
            }

            { getPathSegment() != 'stories' &&
            <div className="block">
              <span className="title">Aparece nas seguintes histórias:</span>
              <div className="block-content">
                {
                  item?.stories.items.map((item:any, index:number) => {
                    return <span key={index} className="card-content stories">{item.name}</span>
                  })
                }
              </div>
            </div>
            }

            { getPathSegment() != 'events' &&
            <div className="block">
              <span className="title">Aparece nos seguintes eventos:</span>
              <div className="block-content">
                {
                  item?.events?.items.map((item:any, index:number) => {
                    return <span key={index} className="card-content events">{item.name}</span>
                  })
                }
              </div>
            </div>
            }

            { getPathSegment() != 'items' &&
            <div className="block">
              <span className="title">Aparece os seguintes personagens:</span>
              <div className="block-content">
                {
                  item?.items?.items.map((item:any, index:number) => {
                    return <span key={index} className="card-content events">{item.name}</span>
                  })
                }
              </div>
            </div>
            }

            { getPathSegment() != 'series' &&
            <div className="block">
              <span className="title">Aparece nas seguintes séries:</span>
              <div className="block-content">
                {
                  item?.series.items.map((item:any, index:number) => {
                    return <span key={index} className="card-content series">{item.name}</span>
                  })
                }
              </div>
            </div>
            }
            
          </div>
        </>
      }
    </div>
  );
};

export default Details;