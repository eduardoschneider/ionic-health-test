import React from 'react';
import './styles.scss';
import Loading from '@components/Loading';
import { getAll } from '@services/MarvelService';
import { Link } from 'react-router-dom';
import Card from '@components/Card';
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from "react-datepicker";
import Pagination from '@components/Pagination';
import { getURLParam, updateURLParams, deleteURLParams, getPathSegment } from '@utils/Helpers';

const List: React.FC = () => {

  const [items, setItems] = React.useState<any[]>([]);

  /* SEARCH SEM BOTÃO */
  const [search, setSearch] = React.useState<string>('');
  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [_, triggerSearch] = React.useState<string>("");
  const [__, triggerDate] = React.useState<Date | null>(null);

  /* PAGINATOR */
  const [currentPage, setCurrentPage] = React.useState<number>(() => {
    const params = new URLSearchParams(location.search);
    const pageFromUrl = parseInt(params.get('page') || '1', 10);
    return pageFromUrl;
  });
  const [totalPages, setTotalPages] = React.useState(1);
  /*           */

  const [isLoading, setIsLoading] = React.useState(false);

  const fetchItems = React.useCallback(async (page: number, name: string, modified: string) => {
    setIsLoading(true);
    try {
      let response = await getAll(page, name, modified, getPathSegment());
      setItems(response.data.results);
      setTotalPages(Math.ceil(response.data.total / 16));
    } catch (error) {
      console.error("Erro ao buscar os itens:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearSearch = React.useCallback(() => {
    setStartDate(null);
    setSearch('');
    setCurrentPage(1);
    deleteURLParams();
  }, []);

  const handlePageChange = React.useCallback((page: number) => {
    if (page >= 1 && page <= totalPages) {
      updateURLParams('page', page.toString());
      setCurrentPage(page);
    }
  }, [totalPages]);

  /* Busca sempre que fica 0,7 segundo sem digitar (busca)*/
  React.useEffect(() => {
    if (search !== '' || startDate) { setCurrentPage(1); }

    const handler = setTimeout(() => {
      if (search !== '') {
        updateURLParams('search', search);
        updateURLParams('page', '1');
        triggerSearch(search);
      }
      console.log(startDate);
      if (startDate) {
        updateURLParams('modified', startDate.toLocaleDateString('en-US'));
        updateURLParams('page', '1');
        triggerDate(startDate);
      }

    }, 700);

    return () => {
      clearTimeout(handler);
    };
  }, [search, startDate]);

  /* Busca sempre que a URL é alterada (filtro, página)*/
  React.useEffect(() => {
    const pageFromUrl = parseInt(getURLParam('page') || '1', 10);
    const searchFromUrl = getURLParam('search');
    const modifiedFromUrl = getURLParam('modified');

    fetchItems(pageFromUrl, searchFromUrl || '', modifiedFromUrl || '');
  }, [location.search, location.pathname, fetchItems]);

  /* Atualiza o conteúdo quando muda de contexto */
  React.useEffect(() => {
    let page = getURLParam('page') ?? '1';
    setCurrentPage(parseInt(page, 10));
    setSearch('');
  }, [location.pathname]);

  return (
    <div className="list-container">

      <span className="search-result">
        {getURLParam('search') && `Resultados que começam com "${getURLParam('search')}"`}
        <br/>
        {getURLParam('modified') && `Resultados que foram alterados desde "${getURLParam('modified')}"`}
      </span>

      <div className="search">
        <label>Modificado desde:</label>
        <DatePicker className="modified-input" dateFormat="MM/dd/yyyy" selected={startDate} onChange={(date: any) => setStartDate(date)} />
        <input className="search-input" disabled={isLoading} value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar por nome/título..." />
        <button className="reset-button" onClick={clearSearch}>Limpar busca</button>
      </div>

      <div className="card-list">
        {isLoading ? (
          <Loading />
        ) : items.length === 0 ? (
          <p className="empty">Não foram encontrados registros.</p> // Mensagem quando não houver itens
        ) : (
          items.map((item, index) => (
            <Link className="card-link" key={index} to={`/dashboard/${getPathSegment()}/${item.id}`}>
              <Card imageSrc={`${item.thumbnail.path}.${item.thumbnail.extension}`} text={item.name || item.title} />
            </Link>
          ))
        )}
      </div>

      <div className="paginator">
        <Pagination
          loading={isLoading}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default List;