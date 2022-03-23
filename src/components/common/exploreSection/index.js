import ExploreCard from './exploreCard';
import './exploreSection.css'

const ExploreSection = ({ restaurantsList, collectionName }) => {
    return (
        <div className='max-width explore-section'>
            <div className='collection-title'>{collectionName}</div>
            <div className='explore-grid'>
                {restaurantsList.map(restaurant => {
                    return <ExploreCard restaurant={restaurant} />
                })}
            </div>
        </div>
    )
}
export default ExploreSection;