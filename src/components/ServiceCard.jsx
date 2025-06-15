
function ServiceCard({detail}){
    return(
        <div className='service-card'>
            <img src={detail.imageUrl} alt="" />
            <div className='service-detail-container'>
                <h2>{detail.name}</h2>
                <p>{detail.description}</p>
                <h3>{detail.price} ETB &#x25cf; {detail.duration} Min</h3>
                <a href="">Book Now <span>&rarr;</span></a>
            </div>
        </div>
    )
}

export default ServiceCard