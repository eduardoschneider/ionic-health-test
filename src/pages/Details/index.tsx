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

            {item?.comics &&
              <DetailBlock label="Aparece nas seguintes comics">
                  {
                    item?.comics.items.map((item: any, index: number) => {
                      return <span key={index} className="card-content comic">{item.name}</span>
                    })
                  }
              </DetailBlock>
            }

            {item?.stories &&
              <DetailBlock label="Aparece nas seguintes histórias">
                  {
                    item?.stories.items.map((item: any, index: number) => {
                      return <span key={index} className="card-content stories">{item.name}</span>
                    })
                  }
              </DetailBlock>
            }

            {item?.events &&
              <DetailBlock label="Aparece nos seguintes eventos">
                  {
                    item?.events?.items.map((item: any, index: number) => {
                      return <span key={index} className="card-content events">{item.name}</span>
                    })
                  }
              </DetailBlock>
            }

            {item?.characters &&
              <DetailBlock label="Aparece os seguintes personagens">
                  {
                    item?.characters?.items.map((item: any, index: number) => {
                      return <span key={index} className="card-content events">{item.name}</span>
                    })
                  }
              </DetailBlock>
            }

            {item?.series &&
              <DetailBlock label="Aparece nas seguintes séries">
                  {
                    item?.series.items.map((item: any, index: number) => {
                      return <span key={index} className="card-content series">{item.name}</span>
                    })
                  }
              </DetailBlock>
            }


            {item?.creators &&
              <DetailBlock label="Criadores">
                  {
                    item?.creators.items.map((item: any, index: number) => {
                      return <span key={index} className="card-content creators">{item.name}</span>
                    })
                  }
              </DetailBlock>
            }

          </div>
        </>
      }
    </div>
  );
};

export default Details;