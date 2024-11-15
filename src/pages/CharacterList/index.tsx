import React from 'react';
import './styles.scss';
import { getAllCharacters } from '@services/MarvelService';
import CharacterCard from '@components/CharacterCard';
import Pagination from '@components/Pagination';

const CharacterList: React.FC = () => {

  const [items, setItems] = React.useState<any[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchItems = async (page: number) => {
    setIsLoading(true);
    try {
      let response = await getAllCharacters(page);
      setItems(response.data.results);
      setTotalPages(Math.ceil(response.data.total / 16));
    } catch (error) {
      console.error("Erro ao buscar os itens:", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    //fetchItems(currentPage);
  }, [currentPage]);

  return (
    <div className="list-container">
      <div className="search">
        <input></input>
      </div>
      <div className="card-list">
        {
          isLoading ? <></>
            :
            items.map((item, index) => (
              <CharacterCard key={index} imageSrc={item.thumbnail.path + '.' + item.thumbnail.extension} text={item.name}></CharacterCard>
            ))
        }
      </div>
      <div className="paginator">
        <Pagination
          loading={isLoading}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            if (page >= 1 && page <= totalPages) {
              setCurrentPage(page);
            }
          }}
        />
      </div>
    </div>
  );
};

export default CharacterList;