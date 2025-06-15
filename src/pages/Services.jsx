import PageHeader from "../components/PageHeader"
import ServiceCard from "../components/ServiceCard"
import { mainServices } from "../services"
import { useSearchParams, Link } from "react-router"


function Services(){
    const [searchParams, setSearchParams] = useSearchParams()
    const filter = searchParams.get('category')
    const services = filter
        ? mainServices.filter(service => service.category.toLowerCase() === filter.toLowerCase())
        : mainServices 

    function handelClick(key,value){
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return(
        <>
            <header>
                <PageHeader title="Our Services"/>
            </header>
            <main>
                <section>
                    <div className='section-container'>
                        <div className='filter-btn-container'>
                            <button className={`${filter === 'hair'? 'filter-btn selected-filter-btn' : 'filter-btn'}`}  onClick={() => handelClick('category' , 'hair')}>
                                Hair
                            </button>
                            <button className={`${filter === 'makeup'? 'filter-btn selected-filter-btn' : 'filter-btn'}`}  onClick={() => handelClick('category' , 'makeup')}>
                                Make up
                            </button>
                            <button className={`${filter === 'nails'? 'filter-btn selected-filter-btn' : 'filter-btn'}`}  onClick={() => handelClick('category' , 'nails')}>
                                Nails
                            </button>
                            {filter && <button className='filter-btn'  onClick={() => handelClick('category' , null)}>
                                Clear filter
                            </button>}
                        </div>
                        <div className="services-card-container">
                            {
                                services.sort(() => Math.random() - 0.5).map((service) => {
                                    return <ServiceCard key={service.id} detail={service}/>
                                })
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
        
    )
}

export default Services