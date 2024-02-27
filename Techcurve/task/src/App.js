import './App.css';
import './components/Dropdown'
import FilterButtonDropdown from './components/Dropdown';

const options =[
  {label: 'Date of Registation', value:'01/05/2024'},
  {label: 'vender score', value:'99'},
];

const handleFilterSelect = (selected) => {
  console.log('Selected Filter:', selected);
};

const App = () => {
  return (
    <div id="appBody">
      <FilterButtonDropdown filteroptions={options} onfilterSelect={handleFilterSelect}></FilterButtonDropdown>
    </div>
    
  );
}

export default App;
