import heroImage from "../assets/images/hero-image.webp"
import hair from '../assets/images/hair-styling.png'
import makeup from '../assets/images/cosmetics.png'
import nail from '../assets/images/nail-polish.png'
import salonImg from '../assets/images/salon-img.webp'
import Testimonials from '../components/Testimonials'
import { galleryImages } from '../images'
import { Link, useNavigation } from 'react-router'
import { motion } from 'motion/react'

function Home(){
    return(
        <>
            <header>                
                <div className='hero-section'>
                    <div className='hero-text-container'>
                        <motion.h1 initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration:0.5, delay:0}} key='hero-title' className='hero-title'>Wesfie Salon </motion.h1>
                        <motion.p initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration:0.5, delay:0.1}} key='hero-tagline' className='hero-tagline'>Where Beauty Meets Tradition</motion.p>
                        <motion.p initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration:0.5, delay:0.2}} key='hero-text' className='hero-text'>Discover expert care in Hair, Makeup, and Nail services, inspired by Ethiopian elegance and tailored to your unique beauty.</motion.p>
                        <motion.div initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration:0.5, delay:0.3}} key='hero-link'>  
                            <Link className='CTA-btn' to='booking'>Book Yor Appointment</Link>
                        </motion.div>
                    </div>
                    <motion.div initial={{opacity:0, x:-300}} animate={{opacity:1, x:0}} transition={{duration:0.5, delay:0}} key='hero-img' className='hero-image-container'>
                        <img className='hero-image' src={heroImage} alt="" />
                    </motion.div>
                </div>
            </header>

            <main>
                <section className='services-section'>
                    <div className='section-container'>
                        <h2 className='section-title'>Our Services</h2>
                        <div className='services-container'>
                            <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{duration:0.5, delay: 0}} className='service'>
                                <img className='service-icon' src={hair} alt="" />
                                <h3 className='service-heading'>Hair</h3>
                                <p className='service-description'>Our expert stylists specialize in everything from traditional Ethiopian hairdressing to modern cuts, coloring, and protective styles. Whether you're preparing for a wedding, a holiday, or just need a refresh, we ensure your hair looks its absolute best.</p>
                                <Link to={`services?${new URLSearchParams('category=hair').toString()}`} className='learn-more-btn'>Learn more <span>&rarr;</span></Link>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{duration:0.5, delay: 0.25}} className='service'>
                                <img className='service-icon' src={makeup} alt="" />
                                <h3 className='service-heading'>MakeUp</h3>
                                <p className='service-description'>From soft glam to bold bridal looks, our makeup artists are skilled in enhancing your natural beauty. We use high-quality products and tailored techniques to match your skin tone and occasion, making you look flawless and feel confident.</p>
                                <Link to={`services?${new URLSearchParams('category=makeup').toString()}`} className='learn-more-btn'>Learn more <span>&rarr;</span></Link>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{duration:0.5, delay: 0.5}} className='service'>
                                <img className='service-icon' src={nail} alt="" />
                                <h3 className='service-heading'>Nail</h3>
                                <p className='service-description'>Pamper your hands and feet with our luxurious nail services. We offer manicures, gel polish, nail art, and more—designed to keep your nails elegant, clean, and stylish for every event or everyday wear.</p>
                                <Link to={`services?${new URLSearchParams('category=nails').toString()}`} className='learn-more-btn'>Learn more <span>&rarr;</span></Link>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className='about-us-section'>
                    <div className='section-container'>
                        <div className='about-us-container'>
                            <motion.img initial={{ translateX: "-100px"}} whileInView={{ translateX: "0px"}} viewport={{ once: true }} transition={{duration:0.5}} className='salon-img' src={salonImg} alt="" />
                            <motion.div initial={{ translateX: "100px"}} whileInView={{ translateX: "0px"}} viewport={{ once: true }} transition={{duration:0.5}} className='about-us-text'>
                                <h2 className='section-title'>About Us</h2>
                                <div className='about-us-content'>
                                    <p>Welcome to Wesfie Salon, your destination for premium women’s beauty care in Ethiopia. Rooted in tradition and elevated by modern style, Wesfie is named after the traditional hair stick pin—a symbol of grace, pride, and beauty. Our goal is to honor that spirit in every service we provide.</p>
                                    <p>At Wesfie, we believe beauty is more than skin deep—it’s a celebration of culture, confidence, and care. Whether you're preparing for a special event or simply treating yourself, our team is here to help you feel your most radiant.</p>
                                    <p><em>“Every woman deserves to feel seen and celebrated.”</em> Selam Ayalew, Founder</p>
                                    <Link to='aboutus' className='learn-more-btn'>More About us <span>&rarr;</span></Link>
                                </div>
                                
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className='gallery-section'>
                    <div className='section-container'>
                        <h2 className='section-title'>Our Work</h2>
                        <div className='gallery-container'>
                            <motion.div initial={{ opacity: 0, scale: 0.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{duration:0.5}} className='gallery-item item-1'>
                                <img className='gallery-img' src={galleryImages[0]} alt="" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{duration:0.5}} className='gallery-item item-2'>
                                <img className='gallery-img' src={galleryImages[10]} alt="" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{duration:0.5}} className='gallery-item item-3'>
                                <img className='gallery-img' src={galleryImages[5]} alt="" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{duration:0.5}} className='gallery-item item-4'>
                                <img className='gallery-img' src={galleryImages[15]} alt="" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{duration:0.5}} className='gallery-item item-5'>
                                <img className='gallery-img' src={galleryImages[1]} alt="" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{duration:0.5}} className='gallery-item item-6'>
                                <img className='gallery-img' src={galleryImages[7]} alt="" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{duration:0.5}} className='gallery-item item-7'>
                                <img className='gallery-img' src={galleryImages[14]} alt="" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{duration:0.5}} className='gallery-item item-8'>
                                <img className='gallery-img' src={galleryImages[17]} alt="" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{duration:0.5}} className='gallery-item item-9'>
                                <img className='gallery-img' src={galleryImages[3]} alt="" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{duration:0.5}} className='gallery-item item-10'>
                                <img className='gallery-img' src={galleryImages[6]} alt="" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{duration:0.5}} className='gallery-item item-11'>
                                <img className='gallery-img' src={galleryImages[12]} alt="" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{duration:0.5}} className='gallery-item item-12'>
                                <img className='gallery-img' src={galleryImages[4]} alt="" />
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{duration:0.5}} className='gallery-item item-13'>
                                <img className='gallery-img' src={galleryImages[8]} alt="" />
                            </motion.div>
                        </div>

                    </div>
                </section>

                <section className='testimonials-section'>
                    <div className='section-container'>
                        <h2 className='section-title'>What Our Clients Say</h2>
                        <Testimonials />

                    </div>
                </section>

                <section className='booking-cta-section'>
                    <div className='section-container'>
                        <div className='CTA-container'>
                            <h2>Ready for Your Next Glam Session?</h2>
                            <p>Whether it’s a fresh hairstyle, flawless makeup, or the perfect nail finish — Wesfie Salon is here to bring your beauty vision to life. Book your appointment today and let us pamper you with expert care and tradition-inspired style.</p>
                            <Link className='CTA-section-btn' to="booking">Book an Appointment</Link>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
  
}

export default Home