import React from 'react';
import './styles.scss';
import { getAllCharacters } from '@services/MarvelService';
import { Link } from 'react-router-dom';
import CharacterCard from '@components/CharacterCard';
import Pagination from '@components/Pagination';

const CharacterList: React.FC = () => {

  /* SEARCH SEM BOTÃO */
  const [search, setSearch] = React.useState<string>('');
  const [lateSearch, setLateSearch] = React.useState<string>("");
  /*                  */

  /* PAGINATOR */
  const [currentPage, setCurrentPage] = React.useState<number>(() => {
    const params = new URLSearchParams(location.search);
    const pageFromUrl = parseInt(params.get('page') || '1', 10);
    return pageFromUrl;
  });
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
    setCurrentPage(1);
    const params = new URLSearchParams(location.search);
    params.delete('search');
    params.set('page', '1');
    window.history.replaceState(null, '', `${location.pathname}?${params.toString()}`);
    fetchItems(currentPage, '');
  }

  React.useEffect(() => {

    const params = new URLSearchParams(location.search);
    const pageFromUrl = parseInt(params.get('page') || currentPage.toString(), 10);
    const searchFromUrl = params.get('search');

    fetchItems(pageFromUrl, searchFromUrl || '');
    
  }, [location.search]);

  React.useEffect(() => {
    setCurrentPage(1);
    const handler = setTimeout(() => {
      if (search != '') {
        const params = new URLSearchParams(location.search);
        params.set('search', search);
        params.set('page', '1');
        window.history.replaceState(null, '', `${location.pathname}?${params.toString()}`);
      }
      setLateSearch(search);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  /*
  React.useEffect(() => {
    if (lateSearch != '') {
      fetchItems(currentPage, lateSearch);
    }
  }, [lateSearch]);
  */

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
              <Link key={index} to={'/dashboard/characters/' + item.id}>
                <CharacterCard imageSrc={item.thumbnail.path + '.' + item.thumbnail.extension} text={item.name}></CharacterCard>
              </Link>
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
              console.log(page);
              const params = new URLSearchParams(location.search);
              params.set('page', page.toString());
              window.history.replaceState(null, '', `${location.pathname}?${params.toString()}`);
              setCurrentPage(page);
            }
          }}
        />
      </div>
    </div>
  );
};

export default CharacterList;