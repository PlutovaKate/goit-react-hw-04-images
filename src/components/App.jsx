import { React, useEffect, useState } from 'react';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getImages } from 'services/fetch';
import Loader from './Loader/Loader';
import Button from './Button/Button';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);

  const changePage = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    if (!searchValue) {
      return;
    }

    setIsLoading(true);
    getImages(searchValue, page)
      .then(data => {
        if (data.status === 'error') return Promise.reject(data.message);

        setTotalHits(data.totalHits);
        setImages(prevImages => [...prevImages, ...data.hits]);

        if (!data.totalHits) {
          toast.error('Sorry, no images');
        } else toast.success(`Found ${data.totalHits} images`);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchValue, page]);

  const handleFormSubmit = newSearchValue => {
    if (searchValue === newSearchValue) {
      return;
    }
    setSearchValue(newSearchValue);
    setImages([]);
    setPage(1);
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={handleFormSubmit} />
      {isLoading && <Loader />}

      {images.length > 0 && <ImageGallery images={images} />}

      {images.length !== totalHits && <Button changePage={changePage} />}
      <ToastContainer autoClose={2000} position="top-right" theme="dark" />
    </div>
  );
};

export default App;
