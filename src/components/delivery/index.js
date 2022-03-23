import Filter from '../common/filters';
import './delivery.css'
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topBrands';

const deliveryFilters = [
    {
        id: 1,
        icon: <i className="fa-solid fa-filter absolute-center"></i>,
        title: "Filters",
    },
    {
        id: 2,
        title: "Ratings: 4.0+",
    },
    {
        id: 3,
        title: "Safe and Hygienic",
    },
    {
        id: 4,
        title: "Pure Veg",
    },
    {
        id: 5,
        icon: <i className="fa-solid fa-sort absolute-center"></i>,
        title: "Delivery Time",
    },
    {
        id: 6,
        title: "Great Offers",
    },
]
const Delivery = () => {
    return (
        <div>
            <div className='max-width'>
                <Filter filtersList={deliveryFilters} />
            </div>
            <DeliveryCollections />
            <TopBrands />
        </div>
    )
}
export default Delivery;