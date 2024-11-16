import React from 'react';
import './styles.scss';
import { useParams } from 'react-router-dom';
import { getSpecificCharacter } from '@services/MarvelService';
import { getPathSegment } from '@utils/Helpers';
import { parseISO, format } from 'date-fns';
import Loading from '@components/Loading';

const CharacterProfile: React.FC = () => {

  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const [character, setCharacter] = React.useState<any>();

  const fetchCharacter = async () => {
    setIsLoading(true);
    try {
      let response = await getSpecificCharacter(id, getPathSegment());
      setCharacter(response.data.results[0]);
    } catch (error) {
      console.error("Erro ao buscar os itens:", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchCharacter();
  }, [])

  return (
    <div className="character-profile">
      {isLoading ?
        <Loading></Loading>
        :
        <>
          <div className="information">
            <img src={character?.thumbnail?.path + '.' + character?.thumbnail?.extension}></img>
            <span className="name">{character?.name}</span>
            <span className="description">{character?.description}</span>
            <span className="modified">
              <a>Última modificação</a> <br />
              {format(parseISO(character.modified), 'dd/MM/yyyy HH:mm')}
            </span>
          </div>
          
          <div className="content">

            { getPathSegment() != 'comics' &&
            <div className="block">
              <span className="title">Aparece nas seguintes comics:</span>
              <div className="block-content">
                {
                  character?.comics.items.map((item:any, index:number) => {
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
                  character?.stories.items.map((item:any, index:number) => {
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
                  character?.events?.items.map((item:any, index:number) => {
                    return <span key={index} className="card-content events">{item.name}</span>
                  })
                }
              </div>
            </div>
            }

            { getPathSegment() != 'characters' &&
            <div className="block">
              <span className="title">Aparece os seguintes personagens:</span>
              <div className="block-content">
                {
                  character?.characters?.items.map((item:any, index:number) => {
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
                  character?.series.items.map((item:any, index:number) => {
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

export default CharacterProfile;