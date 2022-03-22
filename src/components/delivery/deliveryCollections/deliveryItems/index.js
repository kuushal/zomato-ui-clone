import './deliveryItem.css'
const DeliveryItem = ({ item }) => {

    return (
        <div>
            <div className='delivery-item-cover'>
                <img
                    src={item.cover}
                    className='delivery-item-image'
                    alt='delivery-item'
                />
            </div>
            <div className='delivery-item-title'>
                {item.title}
            </div>
        </div>

    )
}

export default DeliveryItem;