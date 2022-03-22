import FilterItem from './filteritem';
import './filters.css'
const Filter = ({ filtersList }) => {
    return (
        <div className='filters'>
            {filtersList && filtersList.map((filter) => {
                return <FilterItem key={filter.id} item={filter} />
            })}
        </div>
    )
}
export default Filter;