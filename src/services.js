
import hairService1 from './assets/images/services/hair/1.jpg'
import hairService2 from './assets/images/services/hair/2.jpg'
import hairService3 from './assets/images/services/hair/3.jpg'
import hairService4 from './assets/images/services/hair/4.jpg'
import hairService5 from './assets/images/services/hair/5.jpg'
import hairService6 from './assets/images/services/hair/6.jpg'
import hairService7 from './assets/images/services/hair/7.jpg'

import makeupService1 from './assets/images/services/makeup/1.jpg'
import makeupService2 from './assets/images/services/makeup/2.jpg'
import makeupService3 from './assets/images/services/makeup/3.jpg'
import makeupService4 from './assets/images/services/makeup/4.jpg'
import makeupService5 from './assets/images/services/makeup/5.jpg'

import nailService1 from './assets/images/services/nail/1.jpg'
import nailService2 from './assets/images/services/nail/2.jpg'
import nailService3 from './assets/images/services/nail/3.jpg'
import nailService4 from './assets/images/services/nail/4.jpg'
import nailService5 from './assets/images/services/nail/5.jpg'
import nailService6 from './assets/images/services/nail/6.jpg'

export const salonServices = {
    hair: {
      category: "Hair Services",
      mainServices: [
        {
          id: "haircut-styling",
          name: "Haircut & Styling",
          price: "Starting at ETB 300",
          duration: "45 mins",
          description: "Personalized haircut and styling tailored to your hair type and face shape.",
          imageUrl: hairService1
        },
        {
          id: "traditional-braiding",
          name: "Traditional Braiding",
          price: "Starting at ETB 400",
          duration: "1.5–2 hrs",
          description: "Authentic Ethiopian and African braiding styles for cultural elegance.",
          imageUrl: hairService2
        },
        {
          id: "cornrows-feedins",
          name: "Cornrows & Feed-ins",
          price: "Starting at ETB 350",
          duration: "1.5 hrs",
          description: "Sleek and stylish protective cornrows with optional feed-in hair.",
          imageUrl: hairService3
        },
        {
          id: "hair-coloring",
          name: "Hair Coloring (Full / Highlights)",
          price: "Starting at ETB 800",
          duration: "2–3 hrs",
          description: "Vibrant or natural coloring options with long-lasting results.",
          imageUrl: hairService4
        },
        {
          id: "silk-press",
          name: "Silk Press",
          price: "Starting at ETB 600",
          duration: "1 hr",
          description: "Smooth, glossy, and frizz-free hair without chemical treatments.",
          imageUrl: hairService5
        },
        {
          id: "blowdry-curl",
          name: "Blow-dry & Curl",
          price: "Starting at ETB 300",
          duration: "45 mins",
          description: "Voluminous and bouncy finish for all occasions.",
          imageUrl: hairService6
        },
        {
          id: "protective-styling",
          name: "Protective Styling (Twists, Locs, etc.)",
          price: "Starting at ETB 700",
          duration: "2–4 hrs",
          description: "Low-manipulation styles to protect natural hair and promote growth.",
          imageUrl: hairService7
        }
      ],
      addOns: [
        {
          id: "deep-conditioning",
          name: "Deep Conditioning Treatment",
          price: "ETB 150",
          duration: "20 mins",
          description: "Revitalize dry, damaged hair with our nutrient-rich treatment."
        },
        {
          id: "scalp-massage",
          name: "Scalp Massage",
          price: "ETB 100",
          duration: "15 mins",
          description: "Relaxing massage to stimulate blood flow and reduce tension."
        },
        {
          id: "hot-oil-treatment",
          name: "Hot Oil Treatment",
          price: "ETB 200",
          duration: "25 mins",
          description: "Moisturizing oil blend for shine, softness, and scalp health."
        },
        {
          id: "steam-therapy",
          name: "Hair Steam Therapy",
          price: "ETB 150",
          duration: "20 mins",
          description: "Opens cuticles for deep moisture absorption and improved elasticity."
        },
        {
          id: "edge-styling",
          name: "Edge Styling",
          price: "ETB 80",
          duration: "10 mins",
          description: "Sleek and artistic baby hair styling for a polished finish."
        }
      ]
    },
  
    makeup: {
      category: "Makeup Services",
      mainServices: [
        {
          id: "natural-makeup",
          name: "Natural Everyday Makeup",
          price: "Starting at ETB 400",
          duration: "45 mins",
          description: "Light, glowing makeup perfect for work or casual outings.",
          imageUrl: makeupService1
        },
        {
          id: "glam-party-look",
          name: "Glam Party Look",
          price: "Starting at ETB 600",
          duration: "1 hr",
          description: "Bold eyes, flawless base, and shimmer for unforgettable nights out.",
          imageUrl: makeupService2
        },
        {
          id: "bridal-makeup",
          name: "Bridal Makeup",
          price: "Starting at ETB 1500",
          duration: "2 hrs",
          description: "Elegant, long-lasting look for your special day, customized to your vision.",
          imageUrl: makeupService3
        },
        {
          id: "editorial-makeup",
          name: "Editorial/Photoshoot Makeup",
          price: "Starting at ETB 700",
          duration: "1–1.5 hrs",
          description: "High-impact makeup for camera-ready results and fashion shoots.",
          imageUrl: makeupService4
        },
        {
          id: "eyelash-extensions",
          name: "Eyelash Extensions",
          price: "Starting at ETB 500",
          duration: "1–2 hrs",
          description: "Natural or dramatic lashes for extended wear without mascara.",
          imageUrl: makeupService5
        }
      ],
      addOns: [
        {
          id: "eyebrow-shaping",
          name: "Eyebrow Shaping",
          price: "ETB 100",
          duration: "15 mins",
          description: "Clean and define your brows to enhance your features."
        },
        {
          id: "eyebrow-tinting",
          name: "Eyebrow Tinting",
          price: "ETB 150",
          duration: "20 mins",
          description: "Longer-lasting color to fill and enhance brows."
        },
        {
          id: "false-lashes",
          name: "False Lashes",
          price: "ETB 120",
          duration: "10 mins",
          description: "Add volume and drama to your eye look instantly."
        },
        {
          id: "skin-prep",
          name: "Skin Prep (Facial Mist, Primer)",
          price: "ETB 80",
          duration: "10 mins",
          description: "Ensure a smooth, hydrated canvas before makeup."
        },
        {
          id: "touchup-kit",
          name: "Quick Touch-up Kit",
          price: "ETB 100",
          duration: "N/A",
          description: "Take-home essentials to keep your look fresh all day."
        }
      ]
    },
  
    nails: {
      category: "Nail Services",
      mainServices: [
        {
          id: "classic-manicure",
          name: "Classic Manicure",
          price: "Starting at ETB 250",
          duration: "30–40 mins",
          description: "Clean, shape, and polish your nails with care.",
          imageUrl: nailService1
        },
        {
          id: "gel-manicure",
          name: "Gel Manicure",
          price: "Starting at ETB 350",
          duration: "45 mins",
          description: "Shiny, chip-free polish that lasts up to 2 weeks.",
          imageUrl: nailService2
        },
        {
          id: "pedicure",
          name: "Pedicure",
          price: "Starting at ETB 300",
          duration: "45–60 mins",
          description: "Relaxing foot soak, nail grooming, and polish.",
          imageUrl: nailService3
        },
        {
          id: "acrylic-nails",
          name: "Acrylic Nail Extensions",
          price: "Starting at ETB 500",
          duration: "1.5–2 hrs",
          description: "Lengthen and strengthen nails with stylish acrylics.",
          imageUrl: nailService4
        },
        {
          id: "nail-art",
          name: "Nail Art & Design",
          price: "Starting at ETB 200",
          duration: "Varies",
          description: "Custom hand-painted art, decals, or glitter for unique flair.",
          imageUrl: nailService5
        },
        {
          id: "foot-care",
          name: "Foot Care & Scrub",
          price: "Starting at ETB 280",
          duration: "40 mins",
          description: "Smooth and revitalize tired feet with exfoliating scrub and massage.",
          imageUrl: nailService6
        }
      ],
      addOns: [
        {
          id: "paraffin-wax",
          name: "Paraffin Wax Treatment",
          price: "ETB 180",
          duration: "20 mins",
          description: "Deeply moisturizing treatment for hands or feet."
        },
        {
          id: "nail-repair",
          name: "Nail Repair",
          price: "ETB 100",
          duration: "10–15 mins",
          description: "Fix cracked, chipped, or damaged nails professionally."
        },
        {
          id: "hand-foot-massage",
          name: "Hand/Foot Massage",
          price: "ETB 120",
          duration: "15 mins",
          description: "Relaxing treatment to soothe and soften muscles."
        },
        {
          id: "french-tips",
          name: "French Tips",
          price: "ETB 80",
          duration: "10 mins",
          description: "Classic white-tipped finish for a clean, polished look."
        },
        {
          id: "extra-nail-art",
          name: "Extra Nail Art Elements",
          price: "ETB 100",
          duration: "15–30 mins",
          description: "Add rhinestones, chrome, 3D designs or other artistic details."
        }
      ]
    }
  };
  