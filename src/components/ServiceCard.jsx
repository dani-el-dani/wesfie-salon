import { Link } from "react-router"
import { motion, useInView } from "motion/react"
import { useRef } from "react";



function ServiceCard({detail, index}){
    const ref = useRef();
    const isInView = useInView(ref, { once: true, margin:'0px 0px 200px 0px' });
    return(
        <motion.div
            ref={ref}
            initial={{scale:0, x:"-100px"}} 
            animate={isInView ? {scale:1, x:"0px"} : {}} 
            transition={{duration:0.5, delay:(index % 3) * 0.15}} 
            className='service-card'
        >
            <img src={detail.imageUrl} alt="" />
            <div className='service-detail-container'>
                <h2>{detail.name}</h2>
                <p>{detail.description}</p>
                <h3>{detail.price} ETB &#x25cf; {detail.duration} Min</h3>
                <Link to='/booking' state={{service:detail.id}}>Book Now <span>&rarr;</span></Link>
            </div>
        </motion.div>
    )
}

export default ServiceCard