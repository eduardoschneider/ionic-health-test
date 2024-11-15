import React from 'react';
import './styles.scss';
import { getAllCharacters } from '@services/MarvelService';
import CharacterCard from '@components/CharacterCard';
import Pagination from '@components/Pagination';

const CharacterList: React.FC = () => {

  /* SEARCH SEM BOTÃO */
  const [search, setSearch] = React.useState<string>('');
  const [lateSearch, setLateSearch] = React.useState<string>("");
  /*                  */

  /* PAGINATOR */
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  /*           */

  const [items, setItems] = React.useState<any[]>([]);

  const fetchItems = async (page: number, name: string) => {
    setIsLoading(true);
    try {
      let response = await getAllCharacters(page, name);
      setItems(response.data.results);
      setTotalPages(Math.ceil(response.data.total / 16));
    } catch (error) {
      console.error("Erro ao buscar os itens:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearSearch = () => {
    setSearch('');
    setLateSearch('');
    //fetchItems(currentPage, '');
  }

  React.useEffect(() => {
    //fetchItems(currentPage, lateSearch);
  }, [currentPage]);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setLateSearch(search); // Atualiza a busca com o valor final
    }, 1000);

    return () => {
      clearTimeout(handler); // Limpa o timeout anterior
    };
  }, [search]);

  React.useEffect(() => {
    if (lateSearch != '') {
      //fetchItems(currentPage, lateSearch);
    }
  }, [lateSearch]);

  return (
    <div className="list-container">
      <div className="search">
        <input disabled={isLoading} value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite o nome do herói..."></input>
        <button onClick={() => clearSearch()}> Redefinir </button>
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