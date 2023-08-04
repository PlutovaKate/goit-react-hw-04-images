import { React, useEffect, useState } from 'react';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
};

// export class App extends Component {
//   state = {
//     searchValue: '',
//   };

//   handleFormSubmit = searchValue => {
//     this.setState({ searchValue });
//   };

//   render() {
//     return (
//       <div className={css.app}>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         <ImageGallery searchValue={this.state.searchValue} />
//         <ToastContainer autoClose={2000} position="top-right" theme="dark" />
//       </div>
//     );
//   }
// }

export default App;
