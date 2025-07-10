import PageHeader from '../components/PageHeader'
import mission from '../assets/images/mission.png'
import vision from '../assets/images/light-bulb.png'
import useSalonDataStore from '../store/salonDataStore'
import { useLoaderData, Await } from 'react-router'
import { Suspense } from 'react'
import Error from './Error'

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

function AboutUs(){
    const salonData = useLoaderData()
    const staffs = useSalonDataStore((state) => state.staffs)
    return(
        <>
            <header>
                <PageHeader title="About Us"/>
            </header>
            <main>
                <section className='our-story-section'>
                    <div className='section-container'>
                        <h2 className='section-title'>Wesfie Salon – Where Beauty Meets Tradition</h2>
                        <p className='our-story-text'>
                            Nestled in the heart of Addis Ababa, Wesfie Salon is more than just a beauty destination — it's a celebration of Ethiopian heritage and modern elegance. Founded with a passion for empowering women through self-expression and self-care, Wesfie Salon offers a premium experience rooted in authenticity, quality, and comfort.
                        </p>
                        <p className='our-story-text'>
                            At Wesfie, we believe that every woman deserves to feel radiant and confident. Whether you’re looking for traditional hairstyles that honor our cultural roots or a trendy makeover for a special occasion, our experienced team of stylists and beauty professionals are here to make it happen.
                        </p>
                        <p className='our-story-text'>
                            We combine traditional techniques with contemporary trends and the latest industry practices to bring out the most beautiful version of you. Our commitment to hygiene, client satisfaction, and personalized service has made us a trusted name among modern Ethiopian women.
                        </p>
                    </div>
                </section>
                <section className='mission-section'>
                    <div className='section-container'>
                    <div className='services-container'>
                        <div className='service'>
                            <img className='service-icon' src={mission} alt="" />
                            <h3 className='service-heading'>Our Mission</h3>
                            <p className='service-description'>
                                To empower women by offering premium beauty services that enhance confidence, celebrate individuality, and respect cultural heritage.
                            </p>
                        </div>
                        <div className='service'>
                            <img className='service-icon' src={vision} alt="" />
                            <h3 className='service-heading'>Our Vision</h3>
                            <p className='service-description'>
                                To be Ethiopia’s most loved and trusted beauty destination — blending tradition with innovation. 
                            </p>
                        </div>
                    </div>
                    </div>
                </section>
                <section className='our-staff-section'>
                    <div className='section-container'>
                        <h2 className='section-title'>Meet Our Stylists</h2>
                        <Suspense fallback={<h1 className="loading">Loading...</h1>}>
                            <Await resolve={salonData.salonDatastore} errorElement={<Error/>}>
                                {() => {
                                    return (<>                                       
                                        <div className='our-staff-container'>

                                            {staffs.map(staff => (
                                                <div key={staff.id} className='staff-container'>
                                                    <img src={staff.imageUrl} alt="" />
                                                    <div className='staff-detail-container'>
                                                        <h3>{staff.name}</h3>
                                                        <p>{staff.info}</p>
                                                    </div>
                                                </div>
                                            ))
                                            }
                                        </div>
                                    </>)
                                }
                                }
                            </Await>
                        </Suspense>
                    </div>
                </section>
                <section className='why-us-section'>
                    <div className='section-container'>
                        <h2 className='section-title'>Why Choose Wesfie?</h2>
                        <div className="reasons-container">
                            <div className="reason">
                                <p>A serene and professional environment designed for relaxation.</p>
                            </div>
                            <div className="reason">
                                <p>Highly trained stylists with a passion for beauty and heritage.</p>
                            </div>
                            <div className="reason">
                                <p>Use of high-quality products and strict hygiene protocols.</p>
                            </div>
                            <div className="reason">
                                <p>A wide range of services tailored to suit every occasion and style.</p>
                            </div>
                        </div>
                    </div>    
                </section>
            </main>
        </>
    )
}

export default AboutUs