
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

export const mainServices = [
{
  id: "haircut-styling",
  name: "Haircut & Styling",
  price: 300,
  duration: 45,
  description: "Personalized haircut and styling tailored to your hair type and face shape.",
  imageUrl: hairService1,
  category: "hair"
},
{
  id: "traditional-braiding",
  name: "Traditional Braiding",
  price: 400,
  duration: 120,
  description: "Authentic Ethiopian and African braiding styles for cultural elegance.",
  imageUrl: hairService2,
  category: "hair"
},
{
  id: "cornrows-feedins",
  name: "Cornrows & Feed-ins",
  price: 350,
  duration: 90,
  description: "Sleek and stylish protective cornrows with optional feed-in hair.",
  imageUrl: hairService3,
  category: "hair"
},
{
  id: "hair-coloring",
  name: "Hair Coloring (Full / Highlights)",
  price: 800,
  duration: 180,
  description: "Vibrant or natural coloring options with long-lasting results.",
  imageUrl: hairService4,
  category: "hair"
},
{
  id: "silk-press",
  name: "Silk Press",
  price: 600,
  duration: 60,
  description: "Smooth, glossy, and frizz-free hair without chemical treatments.",
  imageUrl: hairService5,
  category: "hair"
},
{
  id: "blowdry-curl",
  name: "Blow-dry & Curl",
  price: 300,
  duration: 45,
  description: "Voluminous and bouncy finish for all occasions.",
  imageUrl: hairService6,
  category: "hair"
},
{
  id: "protective-styling",
  name: "Protective Styling (Twists, Locs, etc.)",
  price: 700,
  duration: 240,
  description: "Low-manipulation styles to protect natural hair and promote growth.",
  imageUrl: hairService7,
  category: "hair"
},
{
  id: "natural-makeup",
  name: "Natural Everyday Makeup",
  price: 400,
  duration: 45,
  description: "Light, glowing makeup perfect for work or casual outings.",
  imageUrl: makeupService1,
  category: "makeup"
},
{
  id: "glam-party-look",
  name: "Glam Party Look",
  price: 600,
  duration: 60,
  description: "Bold eyes, flawless base, and shimmer for unforgettable nights out.",
  imageUrl: makeupService2,
  category: "makeup"
},
{
  id: "bridal-makeup",
  name: "Bridal Makeup",
  price: 1500,
  duration: 120,
  description: "Elegant, long-lasting look for your special day, customized to your vision.",
  imageUrl: makeupService3,
  category: "makeup"
},
{
  id: "editorial-makeup",
  name: "Editorial/Photoshoot Makeup",
  price: 700,
  duration: 90,
  description: "High-impact makeup for camera-ready results and fashion shoots.",
  imageUrl: makeupService4,
  category: "makeup"
},
{
  id: "eyelash-extensions",
  name: "Eyelash Extensions",
  price: 500,
  duration: 120,
  description: "Natural or dramatic lashes for extended wear without mascara.",
  imageUrl: makeupService5,
  category: "makeup"
},
{
  id: "classic-manicure",
  name: "Classic Manicure",
  price: 250,
  duration: 40,
  description: "Clean, shape, and polish your nails with care.",
  imageUrl: nailService1,
  category: "nails"
},
{
  id: "gel-manicure",
  name: "Gel Manicure",
  price: 350,
  duration: 45,
  description: "Shiny, chip-free polish that lasts up to 2 weeks.",
  imageUrl: nailService2,
  category: "nails"
},
{
  id: "pedicure",
  name: "Pedicure",
  price: 300,
  duration: 60,
  description: "Relaxing foot soak, nail grooming, and polish.",
  imageUrl: nailService3,
  category: "nails"
},
{
  id: "acrylic-nails",
  name: "Acrylic Nail Extensions",
  price: 500,
  duration: 120,
  description: "Lengthen and strengthen nails with stylish acrylics.",
  imageUrl: nailService4,
  category: "nails"
},
{
  id: "nail-art",
  name: "Nail Art & Design",
  price: 200,
  duration: 30,
  description: "Custom hand-painted art, decals, or glitter for unique flair.",
  imageUrl: nailService5,
  category: "nails"
},
{
  id: "foot-care",
  name: "Foot Care & Scrub",
  price: 280,
  duration: 40,
  description: "Smooth and revitalize tired feet with exfoliating scrub and massage.",
  imageUrl: nailService6,
  category: "nails"
}
];






// Flattened Add-ons
export const addOns = [
{
  id: "deep-conditioning",
  name: "Deep Conditioning Treatment",
  price: 150,
  duration: 20,
  description: "Revitalize dry, damaged hair with our nutrient-rich treatment.",
  category: "hair"
},
{
  id: "scalp-massage",
  name: "Scalp Massage",
  price: 100,
  duration: 15,
  description: "Relaxing massage to stimulate blood flow and reduce tension.",
  category: "hair"
},
{
  id: "hot-oil-treatment",
  name: "Hot Oil Treatment",
  price: 200,
  duration: 25,
  description: "Moisturizing oil blend for shine, softness, and scalp health.",
  category: "hair"
},
{
  id: "steam-therapy",
  name: "Hair Steam Therapy",
  price: 150,
  duration: 20,
  description: "Opens cuticles for deep moisture absorption and improved elasticity.",
  category: "hair"
},
{
  id: "edge-styling",
  name: "Edge Styling",
  price: 80,
  duration: 10,
  description: "Sleek and artistic baby hair styling for a polished finish.",
  category: "hair"
},
{
  id: "eyebrow-shaping",
  name: "Eyebrow Shaping",
  price: 100,
  duration: 15,
  description: "Clean and define your brows to enhance your features.",
  category: "makeup"
},
{
  id: "eyebrow-tinting",
  name: "Eyebrow Tinting",
  price: 150,
  duration: 20,
  description: "Longer-lasting color to fill and enhance brows.",
  category: "makeup"
},
{
  id: "false-lashes",
  name: "False Lashes",
  price: 120,
  duration: 10,
  description: "Add volume and drama to your eye look instantly.",
  category: "makeup"
},
{
  id: "skin-prep",
  name: "Skin Prep (Facial Mist, Primer)",
  price: 80,
  duration: 10,
  description: "Ensure a smooth, hydrated canvas before makeup.",
  category: "makeup"
},
{
  id: "touchup-kit",
  name: "Quick Touch-up Kit",
  price: 100,
  duration: 0,
  description: "Take-home essentials to keep your look fresh all day.",
  category: "makeup"
},
{
  id: "paraffin-wax",
  name: "Paraffin Wax Treatment",
  price: 180,
  duration: 20,
  description: "Deeply moisturizing treatment for hands or feet.",
  category: "nails"
},
{
  id: "nail-repair",
  name: "Nail Repair",
  price: 100,
  duration: 15,
  description: "Fix cracked, chipped, or damaged nails professionally.",
  category: "nails"
},
{
  id: "hand-foot-massage",
  name: "Hand/Foot Massage",
  price: 120,
  duration: 15,
  description: "Relaxing treatment to soothe and soften muscles.",
  category: "nails"
},
{
  id: "french-tips",
  name: "French Tips",
  price: 80,
  duration: 10,
  description: "Classic white-tipped finish for a clean, polished look.",
  category: "nails"
},
{
  id: "extra-nail-art",
  name: "Extra Nail Art Elements",
  price: 100,
  duration: 30,
  description: "Add rhinestones, chrome, 3D designs or other artistic details.",
  category: "nails"
}
];
  