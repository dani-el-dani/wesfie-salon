import { useState } from 'react'
import avatarOne from '../assets/images/avatars/avatar-one.svg'
import avatarTwo from '../assets/images/avatars/avatar-two.svg'
import avatarThree from '../assets/images/avatars/avatar-three.svg'
import avatarFour from '../assets/images/avatars/avatar-four.svg'
import avatarFive from '../assets/images/avatars/avatar-five.svg'
import avatarSix from '../assets/images/avatars/avatar-six.svg'
import avatarSeven from '../assets/images/avatars/avatar-seven.svg'

const testimonials = [
    {
        avatarUrl:avatarOne,
        name: "Sara M.",
        rating: 5,
        comment: "Wesfie Salon is my go-to for all things beauty! The staff are so friendly, and the atmosphere is warm and relaxing."
    },
    {
        avatarUrl:avatarTwo,
        name: "Lily T.",
        rating: 4.5,
        comment: "I love how they blend traditional styles with modern touches. My hair has never looked better!"
    },
    {
        avatarUrl:avatarThree,
        name: "Hanna G.",
        rating: 5,
        comment: "The makeup service was flawless. I felt like a queen on my engagement day. Thank you Wesfie!"
    },
    {
        avatarUrl:avatarFour,
        name: "Mahlet B.",
        rating: 4,
        comment: "Beautiful space and professional service. Booking online was super easy. Highly recommend!"
    },
    {
        avatarUrl:avatarFive,
        name: "Selam A.",
        rating: 5,
        comment: "The nail art was stunning and lasted for weeks. Definitely coming back!"
    },
    {
    avatarUrl:avatarSix,        
        name: "Helen F.",
        rating: 4.5,
        comment: "I appreciate the attention to detail and how the stylists really listen to what you want. A hidden gem in the city!"
    }
  ];
  

function Testimonials(){
    const [opened, setOpened] = useState(0)
    function handelClick(index){
        if(opened !== index)
            setOpened(index)
    }
    return(
        <div className='testimonials-acoddion'>
            {testimonials.map((testimonial, index) => (
                <div key={testimonial.name} onClick={() => handelClick(index)} className={`testimonials-acoddion-item ${index === opened ? 'opened':undefined}`}>
                    <div className='profile'>
                        <img className='avatar' src={testimonial.avatarUrl} alt="" />
                        <h3 className='profile-name'>{testimonial.name}</h3>
                    </div>
                    <p className='rating'> {testimonial.rating} stars</p>
                    <div className='comment'>
                        <p> {testimonial.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    )
} 

export default Testimonials