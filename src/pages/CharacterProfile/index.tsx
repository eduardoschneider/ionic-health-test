import React from 'react';
import './styles.scss';
import { useParams } from 'react-router-dom';
import { getSpecificCharacter } from '@services/MarvelService';
import { parseISO, format } from 'date-fns';
import Loading from '@components/Loading';

const CharacterProfile: React.FC = () => {

  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const [character, setCharacter] = React.useState<any>();

  const fetchCharacter = async () => {
    setIsLoading(true);
    try {
      let response = await getSpecificCharacter(id);
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
        <div className="information">
          <img src={character?.thumbnail?.path + '.' + character?.thumbnail?.extension}></img>
          <span className="name">{character?.name}</span>
          <span className="description">{character?.description}</span>
          <span className="modified">
            <a>Última modificação</a> <br/>
            {format(parseISO(character.modified), 'dd/MM/yyyy HH:mm')}
            </span>
        </div>
      }
    </div>
  );
};

export default CharacterProfile;