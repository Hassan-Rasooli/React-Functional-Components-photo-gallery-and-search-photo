import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([])
  const[filteredMonsters,setFilteredMonsters]=useState(monsters)

  useEffect (() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((res) =>setMonsters(res.users))

  }, [])

  useEffect (() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.maidenName.toLocaleLowerCase().includes(searchField)
    });
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters,searchField])
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }
  
  return (
    <div className="App">

      <h1 className='app-title'>Photo Gallery & Album</h1>
      <SearchBox
        className='search-box'
        onChangeHandler={onSearchChange}
        placeholder='Search Photo'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}




// class App extends Component {
//   constructor(props) {
//     super(props);


//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }
//   componentDidMount() {
//     fetch('https://dummyjson.com/users')
//       .then((res) => res.json())
//       .then((res) =>
//         this.setState(() => {
//           return { monsters: res.users }
//         })
//       )
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     })
//   }

//   render() {
//     console.log(this.state)
//     console.log('render app')
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

// const filteredMonsters = monsters.filter((monster) => {
//   return monster.maidenName.toLocaleLowerCase().includes(searchField)
// })
//     console.log(filteredMonsters)
//     return (
// <div className="App">

//   <h1 className='app-title'>Photo Gallery & Album</h1>
//   <SearchBox
//     className='search-box'
//     onChangeHandler={onSearchChange}
//     placeholder='Search Photo'
//   />
//   <CardList monsters={filteredMonsters} />
// </div>
//     );
//   }
// }

export default App;
