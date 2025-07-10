import PageHeader from "../components/PageHeader"
import ServiceCard from "../components/ServiceCard"
import { useSearchParams, Link, Await, useLoaderData } from "react-router"
import useSalonDataStore from "../store/salonDataStore"
import { Suspense } from "react"
import Error from "./Error"

export async function loader(){

    if(useSalonDataStore.getState().mainServices.length === 0 || useSalonDataStore.getState().addOns.length === 0){
        const promise = fetch('/api/salondata')
            .then(res => {
                if (!res.ok) throw {
                    message: 'Error Fetching salon data',
                    statusText: res.statusText,
                    status: res.status
                }
                return res.json()
            })
            .then(data => {
                useSalonDataStore.getState().loadSalonData(data) 
                return data
            })

        return ({ salonDatastore: promise })
    }

    else{
        return ({salonDatastore: 'data'})
    }
}

function Services(){
    const salonData = useLoaderData()
    const mainServices = useSalonDataStore((state) => state.mainServices)
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
                        <Suspense fallback={<h1 className="loading">Loading...</h1>}>
                            <Await resolve={salonData.salonDatastore} errorElement={<Error/>}>
                                {
                                    () => {
                                        return (
                                            <>
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
                                                        services.sort(() => Math.random() - 0.5).map((service, index) => {
                                                            return (
                                                                <ServiceCard key={service.id} detail={service} index={index}/>
                                                            )
                                                                
                                                        })
                                                    }
                                                </div>
                                            </>
                                        )
                                    }
                                }
                            </Await>
                        </Suspense>
                        
                    </div>
                </section>
            </main>
        </>
        
    )
}

export default Services