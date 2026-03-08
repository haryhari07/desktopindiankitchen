module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/data/recipes.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mealPlates",
    ()=>mealPlates,
    "recipes",
    ()=>recipes,
    "states",
    ()=>states
]);
const states = [
    // North India
    {
        name: 'Punjab',
        slug: 'punjab',
        region: 'North India',
        description: 'Known for its rich, buttery flavors and extensive use of dairy and wheat.',
        imageUrl: '/states/punjab.webp'
    },
    {
        name: 'Jammu and Kashmir',
        slug: 'jammu-and-kashmir',
        region: 'North India',
        description: 'Famous for its rich meat dishes (Wazwan) and delicate saffron-infused flavors.',
        imageUrl: '/states/jammu-and-kashmir.webp'
    },
    {
        name: 'Himachal Pradesh',
        slug: 'himachal-pradesh',
        region: 'North India',
        description: 'Mountain cuisine featuring yogurt-based curries, lentils, and hearty breads.',
        imageUrl: '/states/himachal-pradesh.webp'
    },
    {
        name: 'Uttarakhand',
        slug: 'uttarakhand',
        region: 'North India',
        description: 'Simple, nutritious Pahadi cuisine using local lentils like Gahat and herbs.',
        imageUrl: '/states/uttarakhand.webp'
    },
    {
        name: 'Haryana',
        slug: 'haryana',
        region: 'North India',
        description: 'Wholesome vegetarian diet rich in milk, ghee, and fresh rotis.',
        imageUrl: '/states/haryana.webp'
    },
    {
        name: 'Delhi',
        slug: 'delhi',
        region: 'North India',
        description: 'A melting pot of Mughlai richness and spicy street food culture.',
        imageUrl: '/states/delhi.webp'
    },
    {
        name: 'Uttar Pradesh',
        slug: 'uttar-pradesh',
        region: 'North India',
        description: 'Home to the royal Awadhi cuisine known for its slow-cooked meats and breads.',
        imageUrl: '/states/uttar-pradesh.webp'
    },
    {
        name: 'Rajasthan',
        slug: 'rajasthan',
        region: 'North India',
        description: 'Spicy war-time cuisine famous for Dal Baati Churma and gram flour dishes.',
        imageUrl: '/states/rajasthan.webp'
    },
    {
        name: 'Chandigarh',
        slug: 'chandigarh',
        region: 'North India',
        description: 'A fusion of Punjabi and Haryanvi flavors, loving both parathas and lassi.',
        imageUrl: '/states/chandigarh.webp'
    },
    {
        name: 'Ladakh',
        slug: 'ladakh',
        region: 'North India',
        description: 'Tibetan-influenced cuisine with Thukpa, Momos, and butter tea.',
        imageUrl: '/states/ladakh.webp'
    },
    // South India
    {
        name: 'Tamil Nadu',
        slug: 'tamil-nadu',
        region: 'South India',
        description: 'Famous for its fermented rice and lentil dishes, tangy tamarind, and coconut.',
        imageUrl: '/states/tamil-nadu.webp'
    },
    {
        name: 'Kerala',
        slug: 'kerala',
        region: 'South India',
        description: 'God\'s Own Country offers distinct coconut-based seafood and Sadhya feasts.',
        imageUrl: '/states/kerala.webp'
    },
    {
        name: 'Karnataka',
        slug: 'karnataka',
        region: 'South India',
        description: 'Diverse from Udupi vegetarian to spicy Coorgi pork and coastal seafood.',
        imageUrl: '/states/karnataka.webp'
    },
    {
        name: 'Andhra Pradesh',
        slug: 'andhra-pradesh',
        region: 'South India',
        description: 'Known for the spiciest curries, Gongura pickles, and rich Hyderabadi influence.',
        imageUrl: '/states/andhra-pradesh.webp'
    },
    {
        name: 'Telangana',
        slug: 'telangana',
        region: 'South India',
        description: 'Rustic millet breads and spicy non-vegetarian curries define this cuisine.',
        imageUrl: '/states/telangana.webp'
    },
    {
        name: 'Puducherry',
        slug: 'puducherry',
        region: 'South India',
        description: 'A unique blend of Tamil spices and French culinary techniques.',
        imageUrl: '/states/puducherry.webp'
    },
    {
        name: 'Lakshadweep',
        slug: 'lakshadweep',
        region: 'South India',
        description: 'Island cuisine heavily reliant on coconut, tuna, and rice.',
        imageUrl: '/states/lakshadweep.webp'
    },
    {
        name: 'Andaman and Nicobar Islands',
        slug: 'andaman-nicobar',
        region: 'South India',
        description: 'Fresh seafood delights with influences from Bengali and South Indian settlers.',
        imageUrl: '/states/andaman-nicobar.webp'
    },
    // West India
    {
        name: 'Maharashtra',
        slug: 'maharashtra',
        region: 'West India',
        description: 'A diverse cuisine ranging from mild coastal seafood to spicy inland curries.',
        imageUrl: '/states/maharashtra.webp'
    },
    {
        name: 'Gujarat',
        slug: 'gujarat',
        region: 'West India',
        description: 'Known for its vegetarian variety and the subtle balance of sweet, salty, and spicy flavors.',
        imageUrl: '/states/gujarat.webp'
    },
    {
        name: 'Goa',
        slug: 'goa',
        region: 'West India',
        description: 'Portuguese-influenced cuisine famous for Vindaloo, Xacuti, and seafood.',
        imageUrl: '/states/goa.webp'
    },
    {
        name: 'Dadra and Nagar Haveli and Daman and Diu',
        slug: 'dadra-nagar-haveli-daman-diu',
        region: 'West India',
        description: 'Coastal Gujarati cuisine with Portuguese hints and plenty of seafood.',
        imageUrl: '/states/dadra-nagar-haveli-daman-diu.webp'
    },
    // East India
    {
        name: 'West Bengal',
        slug: 'west-bengal',
        region: 'East India',
        description: 'Celebrated for its freshwater fish delicacies and exquisite milk-based sweets.',
        imageUrl: '/states/west-bengal.webp'
    },
    {
        name: 'Odisha',
        slug: 'odisha',
        region: 'East India',
        description: 'Simple, less oily cooking famous for Pakhala and temple food (Mahaprasad).',
        imageUrl: '/states/odisha.webp'
    },
    {
        name: 'Bihar',
        slug: 'bihar',
        region: 'East India',
        description: 'Rustic and hearty food, world-famous for Litti Chokha and Sattu.',
        imageUrl: '/states/bihar.webp'
    },
    {
        name: 'Jharkhand',
        slug: 'jharkhand',
        region: 'East India',
        description: 'Tribal cuisine using rugda mushrooms, bamboo shoots, and rice flour.',
        imageUrl: '/states/jharkhand.webp'
    },
    // Central India
    {
        name: 'Madhya Pradesh',
        slug: 'madhya-pradesh',
        region: 'Central India',
        description: 'The heart of India offering Poha-Jalebi breakfasts and spicy meat curries.',
        imageUrl: '/states/madhya-pradesh.webp'
    },
    {
        name: 'Chhattisgarh',
        slug: 'chhattisgarh',
        region: 'Central India',
        description: 'The Rice Bowl of India, known for Bafauri and various rice flour pancakes.',
        imageUrl: '/states/chhattisgarh.webp'
    },
    // North East India
    {
        name: 'Assam',
        slug: 'assam',
        region: 'North East India',
        description: 'Known for tangy fish curries (Masor Tenga) and use of bamboo shoots.',
        imageUrl: '/states/assam.webp'
    },
    {
        name: 'Sikkim',
        slug: 'sikkim',
        region: 'North East India',
        description: 'Organic state famous for Momos, Thukpa, and fermented foods like Gundruk.',
        imageUrl: '/states/sikkim.webp'
    },
    {
        name: 'Nagaland',
        slug: 'nagaland',
        region: 'North East India',
        description: 'Distinctive for smoked meats, bamboo shoots, and the fiery Bhut Jolokia chili.',
        imageUrl: '/states/nagaland.webp'
    },
    {
        name: 'Manipur',
        slug: 'manipur',
        region: 'North East India',
        description: 'Healthy, oil-free stews like Eromba and Kangshoi using seasonal herbs.',
        imageUrl: '/states/manipur.webp'
    },
    {
        name: 'Meghalaya',
        slug: 'meghalaya',
        region: 'North East India',
        description: 'Home to the Khasis and Garos, famous for Jadoh (rice and meat) dishes.',
        imageUrl: '/states/meghalaya.webp'
    },
    {
        name: 'Mizoram',
        slug: 'mizoram',
        region: 'North East India',
        description: 'Simple boiled dishes with plenty of greens and fermented pork fat.',
        imageUrl: '/states/mizoram.webp'
    },
    {
        name: 'Tripura',
        slug: 'tripura',
        region: 'North East India',
        description: 'Famous for Mui Borok and dishes using Berma (fermented fish).',
        imageUrl: '/states/tripura.webp'
    },
    {
        name: 'Arunachal Pradesh',
        slug: 'arunachal-pradesh',
        region: 'North East India',
        description: 'Tribal cuisine featuring Apong (rice beer), bamboo shoots, and boiled greens.',
        imageUrl: '/states/arunachal-pradesh.webp'
    }
];
const mealPlates = [
    {
        id: 'mp1',
        title: 'South Indian Wholesome Feast',
        slug: 'south-indian-wholesome-feast',
        description: 'A balanced vegetarian meal with protein-rich lentils and fresh vegetables.',
        imageUrl: '/meals/south-indian-wholesome-feast.png',
        items: [
            'Paruppu Urundai Mor Kuzhambu',
            'Bharli Vangi',
            'Steamed Rice',
            'Curd'
        ],
        nutrition: {
            calories: '650 kcal',
            protein: '18g',
            carbs: '85g',
            fats: '22g'
        }
    },
    {
        id: 'mp2',
        title: 'North Indian Comfort Meal',
        slug: 'north-indian-comfort-meal',
        description: 'Classic comfort food perfect for a weekday lunch.',
        imageUrl: '/meals/north-indian-comfort-meal.png',
        items: [
            'Amritsari Chole',
            'Lacha Pyaz',
            'Puri',
            'Cucumber Raita'
        ],
        nutrition: {
            calories: '780 kcal',
            protein: '22g',
            carbs: '95g',
            fats: '32g'
        }
    },
    {
        id: 'mp3',
        title: 'Diabetic Friendly Plate',
        slug: 'diabetic-friendly-plate',
        description: 'Nutritious and low-glycemic index meal for health-conscious eating.',
        imageUrl: '/meals/diabetic-friendly-plate.png',
        items: [
            'Amla Methi Sabzi',
            'Bajra Roti',
            'Mixed Salad',
            'Spiced Buttermilk'
        ],
        nutrition: {
            calories: '450 kcal',
            protein: '15g',
            carbs: '55g',
            fats: '12g'
        }
    }
];
const recipes = [
    // PUNJAB
    {
        id: '1',
        title: 'Sarson Ka Saag',
        slug: 'sarson-ka-saag',
        state: 'Punjab',
        region: 'North India',
        prepTime: '20 mins',
        cookTime: '45 mins',
        servings: 4,
        description: 'A traditional Punjabi dish made from mustard greens and spices.',
        ingredients: [
            {
                item: 'Mustard Greens (Sarson)',
                quantity: '500g'
            },
            {
                item: 'Spinach (Palak)',
                quantity: '250g'
            },
            {
                item: 'Maize Flour',
                quantity: '2 tbsp'
            },
            {
                item: 'Ghee',
                quantity: '3 tbsp'
            },
            {
                item: 'Ginger & Garlic',
                quantity: '2 tbsp minced'
            },
            {
                item: 'Green Chilies',
                quantity: '2-3'
            }
        ],
        instructions: [
            'Clean and chop the mustard greens and spinach thoroughly.',
            'Boil the greens with chopped ginger, garlic, and green chilies until soft (approx. 20-25 mins).',
            'Mash the cooked greens into a coarse paste using a blender or traditional masher.',
            'Dissolve maize flour in a little water and stir it into the greens to thicken.',
            'Simmer on low heat for 20 minutes.',
            'Prepare a tempering: Heat ghee, fry onions and dried red chilies until golden.',
            'Pour the tempering over the saag and serve hot.'
        ],
        imageUrl: '/recipes/sarson-ka-saag.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian',
            'Gluten-Free'
        ]
    },
    {
        id: '2',
        title: 'Makki Ki Roti',
        slug: 'makki-ki-roti',
        state: 'Punjab',
        region: 'North India',
        prepTime: '10 mins',
        cookTime: '15 mins',
        servings: 4,
        description: 'A rustic unleavened flatbread made from maize flour.',
        ingredients: [
            {
                item: 'Maize Flour (Makki Atta)',
                quantity: '2 cups'
            },
            {
                item: 'Warm Water',
                quantity: 'as needed'
            },
            {
                item: 'Salt',
                quantity: '1/2 tsp'
            },
            {
                item: 'Ghee',
                quantity: 'for frying'
            }
        ],
        instructions: [
            'Mix maize flour and salt in a bowl.',
            'Gradually add warm water and knead into a firm, pliable dough.',
            'Divide dough into medium-sized balls.',
            'Flatten a ball between wet palms or plastic sheets to form a thick disc.',
            'Heat a griddle (tawa) and cook the roti on medium heat.',
            'Flip and apply ghee, cooking until golden brown spots appear on both sides.'
        ],
        imageUrl: '/recipes/makki-ki-roti.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian',
            'Gluten-Free'
        ]
    },
    {
        id: '3',
        title: 'Butter Chicken',
        slug: 'butter-chicken',
        state: 'Punjab',
        region: 'North India',
        prepTime: '30 mins',
        cookTime: '40 mins',
        servings: 4,
        description: 'World-famous chicken curry in a creamy tomato sauce.',
        ingredients: [
            {
                item: 'Chicken',
                quantity: '500g boneless'
            },
            {
                item: 'Butter',
                quantity: '50g'
            },
            {
                item: 'Tomato Puree',
                quantity: '1 cup'
            },
            {
                item: 'Fresh Cream',
                quantity: '1/2 cup'
            },
            {
                item: 'Ginger Garlic Paste',
                quantity: '1 tbsp'
            },
            {
                item: 'Kasoori Methi',
                quantity: '1 tsp'
            },
            {
                item: 'Kashmiri Chili Powder',
                quantity: '1 tsp'
            }
        ],
        instructions: [
            'Marinate chicken with yogurt, ginger-garlic paste, chili powder, and salt for 1 hour.',
            'Grill or pan-fry the chicken until cooked and slightly charred.',
            'Heat butter in a pan, add tomato puree, and cook until oil separates.',
            'Add cashew paste (optional), cream, sugar, and crushed kasoori methi.',
            'Toss in the cooked chicken and simmer for 5-7 minutes.',
            'Serve hot with Naan or Jeera Rice.'
        ],
        imageUrl: '/recipes/butter-chicken.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Non-Vegetarian',
            'Gluten-Free'
        ]
    },
    // KASHMIR (J&K)
    {
        id: 'jk1',
        title: 'Rogan Josh',
        slug: 'rogan-josh',
        state: 'Jammu and Kashmir',
        region: 'North India',
        prepTime: '30 mins',
        cookTime: '1 hour',
        servings: 4,
        description: 'Aromatic lamb curry with Kashmiri spices.',
        ingredients: [
            {
                item: 'Lamb/Mutton',
                quantity: '500g (shoulder cut)'
            },
            {
                item: 'Yogurt',
                quantity: '1 cup whisked'
            },
            {
                item: 'Kashmiri Chili Powder',
                quantity: '2 tbsp'
            },
            {
                item: 'Fennel Powder (Saunf)',
                quantity: '1 tbsp'
            },
            {
                item: 'Dry Ginger Powder (Sonth)',
                quantity: '1 tsp'
            },
            {
                item: 'Mustard Oil',
                quantity: '4 tbsp'
            },
            {
                item: 'Whole Spices',
                quantity: 'Cloves, Cardamom, Cinnamon'
            },
            {
                item: 'Hing (Asafoetida)',
                quantity: '1 pinch'
            }
        ],
        instructions: [
            'Heat mustard oil until smoking point, then cool slightly.',
            'Add whole spices and hing. Fry the meat pieces until browned and seared.',
            'Add a little water and Kashmiri chili powder (dissolved in water) for vibrant red color.',
            'Whisk yogurt and add it slowly while stirring continuously to prevent splitting.',
            'Add fennel powder, ginger powder, and salt. Cover and cook on low heat.',
            'Simmer for 45-60 minutes until the meat is tender and falls off the bone.',
            'Serve with steamed rice or Naan.'
        ],
        imageUrl: '/recipes/rogan-josh.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Non-Vegetarian',
            'Gluten-Free'
        ]
    },
    // HIMACHAL PRADESH
    {
        id: 'hp1',
        title: 'Dham',
        slug: 'dham',
        state: 'Himachal Pradesh',
        region: 'North India',
        prepTime: '4 hours',
        cookTime: '2 hours',
        servings: 6,
        description: 'A traditional festive meal featuring red kidney beans, rice, and curd.',
        ingredients: [
            {
                item: 'Rajma (Red Kidney Beans)',
                quantity: '1 cup'
            },
            {
                item: 'Rice',
                quantity: '2 cups'
            },
            {
                item: 'Yogurt',
                quantity: '1 cup'
            },
            {
                item: 'Mustard Oil',
                quantity: '4 tbsp'
            },
            {
                item: 'Whole Spices',
                quantity: 'Bay leaf, Cinnamon, Cloves'
            }
        ],
        instructions: [
            'Soak Rajma overnight and boil until soft.',
            'Heat mustard oil in a heavy pot and fry whole spices.',
            'Add yogurt (whisked) slowly while stirring continuously to prevent curdling.',
            'Add the boiled Rajma and spices like turmeric and coriander powder.',
            'Simmer on low heat for 45 minutes until the gravy thickens.',
            'Serve hot with plain steamed rice.'
        ],
        imageUrl: '/recipes/dham.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian',
            'Gluten-Free'
        ]
    },
    // UTTARAKHAND
    {
        id: 'uk1',
        title: 'Kafuli',
        slug: 'kafuli',
        state: 'Uttarakhand',
        region: 'North India',
        prepTime: '15 mins',
        cookTime: '30 mins',
        servings: 4,
        description: 'Nutritious spinach and fenugreek curry.',
        ingredients: [
            {
                item: 'Spinach (Palak)',
                quantity: '1 bunch'
            },
            {
                item: 'Fenugreek Leaves (Methi)',
                quantity: '1/2 bunch'
            },
            {
                item: 'Rice Flour',
                quantity: '2 tbsp'
            },
            {
                item: 'Green Chilies',
                quantity: '2-3'
            },
            {
                item: 'Curd',
                quantity: '1/2 cup'
            },
            {
                item: 'Mustard Oil',
                quantity: '2 tbsp'
            },
            {
                item: 'Jakhiya (Wild Mustard)',
                quantity: '1 tsp (optional)'
            }
        ],
        instructions: [
            'Wash and boil spinach and fenugreek leaves with a little water until soft.',
            'Blend the boiled greens into a smooth paste along with green chilies.',
            'Mix rice flour with water to make a thin paste (Aalan).',
            'Heat oil in a kadai (iron wok preferred) and splutter jakhiya or cumin seeds.',
            'Add the green paste and cook for 5 minutes.',
            'Stir in the rice flour paste and curd. Simmer for 15-20 minutes until thickened.'
        ],
        imageUrl: '/recipes/kafuli.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian',
            'Gluten-Free'
        ]
    },
    // HARYANA
    {
        id: 'hr1',
        title: 'Bajra Khichdi',
        slug: 'bajra-khichdi',
        state: 'Haryana',
        region: 'North India',
        prepTime: '8 hours',
        cookTime: '45 mins',
        servings: 4,
        description: 'Hearty pearl millet porridge perfect for winters.',
        ingredients: [
            {
                item: 'Bajra (Pearl Millet)',
                quantity: '1 cup'
            },
            {
                item: 'Moong Dal (Yellow)',
                quantity: '1/2 cup'
            },
            {
                item: 'Ghee',
                quantity: '3 tbsp'
            },
            {
                item: 'Cumin Seeds (Jeera)',
                quantity: '1 tsp'
            },
            {
                item: 'Hing (Asafoetida)',
                quantity: '1 pinch'
            },
            {
                item: 'Water',
                quantity: '4-5 cups'
            },
            {
                item: 'Salt',
                quantity: 'to taste'
            }
        ],
        instructions: [
            'Wash bajra and moong dal thoroughly. Soak bajra for 4-5 hours (optional but recommended).',
            'Crush the bajra slightly in a mortar or blender (just to break the grain).',
            'In a pressure cooker, add bajra, dal, salt, and water.',
            'Pressure cook for 4-5 whistles on medium heat until mushy.',
            'Allow steam to release naturally. Open and mash slightly with a ladle.',
            'Tempering: Heat ghee, splutter cumin seeds and hing. Pour over the khichdi.',
            'Serve hot with a dollop of ghee, curd, or pickle.'
        ],
        imageUrl: '/recipes/bajra-khichdi.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian',
            'Gluten-Free'
        ]
    },
    // DELHI
    {
        id: 'dl1',
        title: 'Chole Bhature',
        slug: 'chole-bhature',
        state: 'Delhi',
        region: 'North India',
        prepTime: '8 hours',
        cookTime: '45 mins',
        servings: 2,
        description: 'Spicy chickpea curry served with fluffy fried bread.',
        ingredients: [
            {
                item: 'Chickpeas (Kabuli Chana)',
                quantity: '1 cup'
            },
            {
                item: 'Maida (All Purpose Flour)',
                quantity: '2 cups'
            },
            {
                item: 'Onions',
                quantity: '2 chopped'
            },
            {
                item: 'Tea bag',
                quantity: '1 (for color)'
            },
            {
                item: 'Chole Masala',
                quantity: '2 tbsp'
            },
            {
                item: 'Yogurt',
                quantity: '1/2 cup'
            }
        ],
        instructions: [
            'Soak chickpeas overnight. Boil with salt and a tea bag for dark color.',
            'Sauté onions, ginger-garlic paste, and tomatoes. Add chole masala.',
            'Mix the boiled chickpeas into the masala and simmer.',
            'For Bhature: Mix maida, yogurt, salt, and a pinch of baking soda.',
            'Knead into a soft dough and rest for 2 hours.',
            'Roll into oval shapes and deep fry until puffy.'
        ],
        imageUrl: '/recipes/chole-bhature.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian'
        ]
    },
    // UTTAR PRADESH
    {
        id: 'up1',
        title: 'Galouti Kebab',
        slug: 'galouti-kebab',
        state: 'Uttar Pradesh',
        region: 'North India',
        prepTime: '1 hour',
        cookTime: '30 mins',
        servings: 4,
        description: 'Melt-in-mouth minced meat kebabs from Lucknow.',
        ingredients: [
            {
                item: 'Minced Mutton (Keema)',
                quantity: '500g'
            },
            {
                item: 'Raw Papaya Paste',
                quantity: '2 tbsp (tenderizer)'
            },
            {
                item: 'Ghee',
                quantity: '4 tbsp'
            },
            {
                item: 'Roasted Gram Flour',
                quantity: '2 tbsp'
            },
            {
                item: 'Potli Masala',
                quantity: '1 tsp'
            },
            {
                item: 'Rose Water',
                quantity: '1 tsp'
            }
        ],
        instructions: [
            'Marinate minced mutton with papaya paste and salt for 4 hours.',
            'Mix in roasted gram flour and the special spice blend (Potli Masala).',
            'Add rose water and knead well to a smooth, sticky texture.',
            'Smoke the mixture using a live charcoal and ghee (Dhungar method).',
            'Shape into flat round patties.',
            'Pan fry on low heat in ghee until browned and meltingly soft.'
        ],
        imageUrl: '/recipes/galouti-kebab.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Non-Vegetarian',
            'Gluten-Free'
        ]
    },
    // RAJASTHAN
    {
        id: 'rj1',
        title: 'Dal Baati Churma',
        slug: 'dal-baati-churma',
        state: 'Rajasthan',
        region: 'North India',
        prepTime: '45 mins',
        cookTime: '1 hour',
        servings: 4,
        description: 'Hard wheat rolls served with lentils and sweetened crumbled wheat.',
        ingredients: [
            {
                item: 'Wheat Flour (Atta)',
                quantity: '2 cups (coarse)'
            },
            {
                item: 'Semolina (Sooji)',
                quantity: '1/2 cup'
            },
            {
                item: 'Mixed Lentils (Panchmel Dal)',
                quantity: '1 cup (Toor, Moong, Chana, Urad, Masoor)'
            },
            {
                item: 'Ghee',
                quantity: '1 cup melted'
            },
            {
                item: 'Spices',
                quantity: 'Red Chili, Turmeric, Coriander, Cumin'
            },
            {
                item: 'Powdered Sugar',
                quantity: '1/2 cup'
            },
            {
                item: 'Cardamom Powder',
                quantity: '1 tsp'
            }
        ],
        instructions: [
            'Baati: Mix flour, sooji, ghee, and salt. Knead stiff dough with warm water.',
            'Shape into round balls. Bake in a preheated oven/tandoor at 180°C for 30-40 mins until golden and cracked.',
            'Dip hot baatis in melted ghee.',
            'Dal: Pressure cook mixed lentils with salt and turmeric.',
            'Temper with ghee, cumin, cloves, red chilies, and spices. Simmer for 10 mins.',
            'Churma: Crush 2-3 baked baatis into fine crumbs.',
            'Mix with powdered sugar, cardamom, and plenty of ghee.',
            'Serve the trio together.'
        ],
        imageUrl: '/recipes/dal-baati-churma.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian'
        ]
    },
    // TAMIL NADU
    {
        id: 'tn1',
        title: 'Traditional Idli',
        slug: 'traditional-idli',
        state: 'Tamil Nadu',
        region: 'South India',
        prepTime: '12 hours',
        cookTime: '15 mins',
        servings: 4,
        description: 'Soft steamed rice cakes.',
        ingredients: [
            {
                item: 'Idli Rice (Parboiled)',
                quantity: '4 cups'
            },
            {
                item: 'Urad Dal (Whole White)',
                quantity: '1 cup'
            },
            {
                item: 'Fenugreek Seeds',
                quantity: '1 tsp'
            },
            {
                item: 'Salt',
                quantity: '2 tsp'
            },
            {
                item: 'Water',
                quantity: 'for grinding'
            }
        ],
        instructions: [
            'Soak rice and dal separately (add fenugreek to dal) for 4-6 hours.',
            'Grind dal into a fluffy, smooth batter using ice-cold water.',
            'Grind rice to a slightly coarse texture.',
            'Mix both batters with hand to aerate, add salt, and ferment overnight (8-10 hours).',
            'Pour batter into greased idli molds.',
            'Steam for 10-12 minutes until soft and fluffy.'
        ],
        imageUrl: '/recipes/traditional-idli.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian',
            'Vegan',
            'Gluten-Free'
        ]
    },
    {
        id: 'tn2',
        title: 'Chicken Chettinad',
        slug: 'chicken-chettinad',
        state: 'Tamil Nadu',
        region: 'South India',
        prepTime: '30 mins',
        cookTime: '45 mins',
        servings: 4,
        description: 'Fiery chicken curry made with fresh ground spices.',
        ingredients: [
            {
                item: 'Chicken',
                quantity: '500g'
            },
            {
                item: 'Fresh Coconut',
                quantity: '1/2 cup grated'
            },
            {
                item: 'Black Peppercorns',
                quantity: '1 tbsp'
            },
            {
                item: 'Dried Red Chilies',
                quantity: '5-6'
            },
            {
                item: 'Curry Leaves',
                quantity: '2 sprigs'
            },
            {
                item: 'Small Onions (Shallots)',
                quantity: '1 cup'
            }
        ],
        instructions: [
            'Dry roast spices (pepper, cumin, fennel, red chilies) and coconut until golden.',
            'Grind the roasted mixture into a fine paste.',
            'Heat oil (gingelly/sesame oil preferred) and sauté shallots and curry leaves.',
            'Add chicken and sear until white.',
            'Add the ground masala paste and water.',
            'Cover and cook until chicken is tender and oil floats on top.'
        ],
        imageUrl: '/recipes/chicken-chettinad.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Non-Vegetarian',
            'Gluten-Free'
        ]
    },
    // KERALA
    {
        id: 'kl1',
        title: 'Appam with Stew',
        slug: 'appam-stew',
        state: 'Kerala',
        region: 'South India',
        prepTime: '8 hours',
        cookTime: '30 mins',
        servings: 4,
        description: 'Lacy rice pancakes served with mild coconut vegetable stew.',
        ingredients: [
            {
                item: 'Raw Rice',
                quantity: '2 cups soaked'
            },
            {
                item: 'Coconut',
                quantity: '1/2 cup grated'
            },
            {
                item: 'Cooked Rice',
                quantity: '1/2 cup'
            },
            {
                item: 'Yeast',
                quantity: '1/2 tsp'
            },
            {
                item: 'Sugar',
                quantity: '2 tbsp'
            },
            {
                item: 'Vegetables',
                quantity: 'Carrot, Peas, Potato'
            },
            {
                item: 'Coconut Milk',
                quantity: '2 cups (Thick & Thin)'
            }
        ],
        instructions: [
            'Appam: Grind soaked rice, coconut, and cooked rice to a smooth batter.',
            'Add yeast and sugar. Ferment for 8 hours until frothy.',
            'Pour a ladle of batter into an Appam Chatti (pan), swirl to coat sides.',
            'Cover and cook until edges are crisp and center is soft.',
            'Stew: Boil vegetables with thin coconut milk, ginger, chilies, and whole spices.',
            'Add thick coconut milk, simmer for 2 mins (don\'t boil), and temper with curry leaves.'
        ],
        imageUrl: '/recipes/appam-stew.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian',
            'Vegan',
            'Gluten-Free'
        ]
    },
    // KARNATAKA
    {
        id: 'ka1',
        title: 'Bisi Bele Bath',
        slug: 'bisi-bele-bath',
        state: 'Karnataka',
        region: 'South India',
        prepTime: '30 mins',
        cookTime: '45 mins',
        servings: 4,
        description: 'Spicy rice and lentil mash with vegetables.',
        ingredients: [
            {
                item: 'Rice (Sona Masoori)',
                quantity: '1 cup'
            },
            {
                item: 'Toor Dal',
                quantity: '1/2 cup'
            },
            {
                item: 'Mixed Vegetables',
                quantity: '1 cup (Carrot, Beans, Peas, Potato)'
            },
            {
                item: 'Tamarind Extract',
                quantity: '2 tbsp'
            },
            {
                item: 'Bisi Bele Bath Masala',
                quantity: '2 tbsp'
            },
            {
                item: 'Ghee',
                quantity: '2 tbsp'
            },
            {
                item: 'Cashews',
                quantity: '10-12'
            },
            {
                item: 'Jaggery',
                quantity: '1 small piece'
            }
        ],
        instructions: [
            'Wash rice and dal. Pressure cook with turmeric and water until very soft.',
            'Boil the mixed vegetables separately until tender but firm.',
            'In a large pot, mix the cooked rice-dal mash and boiled vegetables.',
            'Add tamarind extract, jaggery, salt, and bisi bele bath masala (mixed in little water).',
            'Adjust consistency with hot water and simmer for 10 minutes.',
            'Tempering: Heat ghee, roast cashews, mustard seeds, curry leaves, and dried red chilies.',
            'Pour tempering over the hot rice. Serve with boondi or chips.'
        ],
        imageUrl: '/recipes/bisi-bele-bath.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian',
            'Gluten-Free'
        ]
    },
    // ANDHRA PRADESH
    {
        id: 'ap1',
        title: 'Hyderabadi Biryani',
        slug: 'hyderabadi-biryani',
        state: 'Andhra Pradesh',
        region: 'South India',
        prepTime: '1 hour',
        cookTime: '1 hour',
        servings: 6,
        description: 'World-famous aromatic rice and meat dish cooked on dum.',
        ingredients: [
            {
                item: 'Basmati Rice',
                quantity: '1 kg aged'
            },
            {
                item: 'Chicken/Mutton',
                quantity: '1 kg'
            },
            {
                item: 'Fried Onions (Birista)',
                quantity: '2 cups'
            },
            {
                item: 'Yogurt',
                quantity: '2 cups'
            },
            {
                item: 'Saffron Milk',
                quantity: '1/2 cup'
            },
            {
                item: 'Mint & Coriander',
                quantity: '1 bunch each'
            }
        ],
        instructions: [
            'Marinate meat with yogurt, ginger-garlic, raw papaya (if mutton), spices, and fried onions for 4+ hours.',
            'Boil water with whole spices and salt (like sea water).',
            'Add soaked rice and cook until 70% done.',
            'Layer the semi-cooked rice over the raw marinated meat in a heavy pot (Kacchi Yakhni style).',
            'Top with saffron milk, ghee, and herbs. Seal with dough.',
            'Cook on high for 10 mins, then low (dum) for 40 mins.'
        ],
        imageUrl: '/recipes/hyderabadi-biryani.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Non-Vegetarian',
            'Gluten-Free'
        ]
    },
    // TELANGANA
    {
        id: 'tg1',
        title: 'Sarva Pindi',
        slug: 'sarva-pindi',
        state: 'Telangana',
        region: 'South India',
        prepTime: '20 mins',
        cookTime: '30 mins',
        servings: 4,
        description: 'Savory pancake made of rice flour and peanuts.',
        ingredients: [
            {
                item: 'Rice Flour',
                quantity: '2 cups'
            },
            {
                item: 'Peanuts',
                quantity: '1/4 cup roasted'
            },
            {
                item: 'Chana Dal',
                quantity: '2 tbsp soaked'
            },
            {
                item: 'Sesame Seeds',
                quantity: '1 tbsp'
            },
            {
                item: 'Green Chilies',
                quantity: '2 minced'
            },
            {
                item: 'Spring Onions',
                quantity: '1/4 cup'
            }
        ],
        instructions: [
            'Mix rice flour with peanuts, soaked chana dal, sesame seeds, chilies, onions, and salt.',
            'Add warm water gradually to make a soft dough (not sticky).',
            'Take a portion and press it flat directly into a greased heavy-bottomed pan (kadai).',
            'Make holes in the flattened dough with your finger and drizzle oil in them.',
            'Cover and cook on medium flame until the bottom is crisp and golden.',
            'Serve hot with pickle or butter.'
        ],
        imageUrl: '/recipes/sarva-pindi.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian',
            'Gluten-Free'
        ]
    },
    // MAHARASHTRA
    {
        id: 'mh1',
        title: 'Vada Pav',
        slug: 'vada-pav',
        state: 'Maharashtra',
        region: 'West India',
        prepTime: '30 mins',
        cookTime: '20 mins',
        servings: 4,
        description: 'Indian burger - spiced potato fritter in a bun.',
        ingredients: [
            {
                item: 'Potatoes',
                quantity: '4 boiled & mashed'
            },
            {
                item: 'Pav Buns',
                quantity: '4'
            },
            {
                item: 'Besan (Gram Flour)',
                quantity: '1 cup'
            },
            {
                item: 'Garlic Chutney',
                quantity: '4 tbsp'
            },
            {
                item: 'Mustard Seeds',
                quantity: '1 tsp'
            },
            {
                item: 'Curry Leaves',
                quantity: '1 sprig'
            }
        ],
        instructions: [
            'Heat oil, splutter mustard seeds, curry leaves, and green chilies.',
            'Mix this tempering into mashed potatoes with turmeric and salt.',
            'Shape potato mix into balls.',
            'Make a thick batter with besan, salt, turmeric, and soda.',
            'Dip potato balls in batter and deep fry until golden.',
            'Slit pav buns, spread garlic chutney, place the vada, and serve.'
        ],
        imageUrl: '/recipes/vada-pav.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian'
        ]
    },
    // GUJARAT
    {
        id: 'gj1',
        title: 'Dhokla',
        slug: 'dhokla',
        state: 'Gujarat',
        region: 'West India',
        prepTime: '10 mins',
        cookTime: '20 mins',
        servings: 4,
        description: 'Steamed savory cake made from gram flour.',
        ingredients: [
            {
                item: 'Besan (Gram Flour)',
                quantity: '1 cup'
            },
            {
                item: 'Semolina (Sooji)',
                quantity: '1 tbsp'
            },
            {
                item: 'Curd',
                quantity: '1/2 cup'
            },
            {
                item: 'Lemon Juice',
                quantity: '1 tbsp'
            },
            {
                item: 'Eno Fruit Salt',
                quantity: '1 sachet (1 tsp)'
            },
            {
                item: 'Mustard Seeds',
                quantity: '1 tsp'
            },
            {
                item: 'Green Chilies',
                quantity: '2-3 slit'
            }
        ],
        instructions: [
            'Mix besan, sooji, curd, lemon juice, sugar, and salt with water to make a smooth batter.',
            'Let the batter rest for 15 minutes.',
            'Grease a steaming tin. Add Eno to the batter and whisk briskly (it will froth).',
            'Immediately pour into the tin and steam for 15-20 minutes.',
            'Check with a toothpick (should come out clean). Cool slightly and cut into squares.',
            'Tempering: Heat oil, crackle mustard seeds, sesame seeds, curry leaves, and green chilies. Pour over Dhokla.'
        ],
        imageUrl: '/recipes/dhokla.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian'
        ]
    },
    // GOA
    {
        id: 'ga1',
        title: 'Goan Fish Curry',
        slug: 'goan-fish-curry',
        state: 'Goa',
        region: 'West India',
        prepTime: '20 mins',
        cookTime: '20 mins',
        servings: 2,
        description: 'Tangy and spicy coconut-based fish curry.',
        ingredients: [
            {
                item: 'Kingfish/Pomfret',
                quantity: '4 slices'
            },
            {
                item: 'Fresh Coconut',
                quantity: '1 cup grated'
            },
            {
                item: 'Kashmiri Red Chilies',
                quantity: '5-6 dried'
            },
            {
                item: 'Coriander Seeds',
                quantity: '1 tbsp'
            },
            {
                item: 'Tamarind',
                quantity: '1 small ball'
            },
            {
                item: 'Kokum',
                quantity: '3-4 petals'
            },
            {
                item: 'Green Chilies',
                quantity: '2 slit'
            }
        ],
        instructions: [
            'Grind coconut, dried chilies, coriander seeds, turmeric, and tamarind into a fine paste.',
            'Heat a little oil in a pot, add the ground masala paste and sauté for 2 mins.',
            'Add water to adjust consistency and bring to a boil.',
            'Add the fish slices, slit green chilies, and kokum petals.',
            'Simmer gently for 5-7 minutes until fish is cooked. Do not stir vigorously.',
            'Serve hot with steamed rice.'
        ],
        imageUrl: '/recipes/goan-fish-curry.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Non-Vegetarian',
            'Gluten-Free'
        ]
    },
    // WEST BENGAL
    {
        id: 'wb1',
        title: 'Rosogolla',
        slug: 'rosogolla',
        state: 'West Bengal',
        region: 'East India',
        prepTime: '30 mins',
        cookTime: '20 mins',
        servings: 4,
        description: 'Spongy cheese balls in syrup.',
        ingredients: [
            {
                item: 'Full Cream Milk',
                quantity: '1 liter'
            },
            {
                item: 'Lemon Juice/Vinegar',
                quantity: '2 tbsp'
            },
            {
                item: 'Sugar',
                quantity: '2 cups'
            },
            {
                item: 'Water',
                quantity: '4 cups'
            },
            {
                item: 'Cardamom',
                quantity: '3-4 pods'
            }
        ],
        instructions: [
            'Boil milk and curdle it with lemon juice to make Chenna (soft cottage cheese).',
            'Drain and rinse the chenna under cold water. Hang for 30 mins to drain whey.',
            'Knead the chenna with your palm for 10-15 mins until smooth and oily.',
            'Divide into small balls without any cracks.',
            'Make a thin syrup by boiling sugar and water with cardamom.',
            'Gently drop the balls into boiling syrup and cook covered for 15-20 mins.'
        ],
        imageUrl: '/recipes/rosogolla.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian'
        ]
    },
    // ODISHA
    {
        id: 'od1',
        title: 'Dalma',
        slug: 'dalma',
        state: 'Odisha',
        region: 'East India',
        prepTime: '20 mins',
        cookTime: '40 mins',
        servings: 4,
        description: 'Nutritious lentil dish with mixed vegetables.',
        ingredients: [
            {
                item: 'Toor Dal',
                quantity: '1/2 cup'
            },
            {
                item: 'Chana Dal',
                quantity: '1/4 cup (optional)'
            },
            {
                item: 'Mixed Vegetables',
                quantity: '2 cups (Pumpkin, Raw Banana, Brinjal, Potato, Arbi)'
            },
            {
                item: 'Ginger',
                quantity: '1 inch crushed'
            },
            {
                item: 'Panch Phoron',
                quantity: '1 tsp'
            },
            {
                item: 'Dry Red Chilies',
                quantity: '2'
            },
            {
                item: 'Ghee',
                quantity: '2 tbsp'
            },
            {
                item: 'Roasted Cumin-Chili Powder',
                quantity: '1 tsp (Bhaja Masala)'
            },
            {
                item: 'Grated Coconut',
                quantity: '2 tbsp'
            }
        ],
        instructions: [
            'Wash dal and soak for 30 mins. Chop vegetables into large chunks.',
            'Pressure cook dal, vegetables, salt, turmeric, and water for 2 whistles.',
            'The dal should be cooked but vegetables should hold shape.',
            'Tempering: Heat ghee, splutter panch phoron and dry red chilies.',
            'Add crushed ginger and fry for a minute. Pour this tempering over the dal.',
            'Simmer for 2-3 minutes. Sprinkle bhaja masala and grated coconut.',
            'Serve hot with steamed rice.'
        ],
        imageUrl: '/recipes/dalma.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian',
            'Gluten-Free'
        ]
    },
    // BIHAR
    {
        id: 'br1',
        title: 'Litti Chokha',
        slug: 'litti-chokha',
        state: 'Bihar',
        region: 'East India',
        prepTime: '1 hour',
        cookTime: '45 mins',
        servings: 4,
        description: 'Wheat balls stuffed with sattu served with roasted eggplant mash.',
        ingredients: [
            {
                item: 'Wheat Flour (Atta)',
                quantity: '2 cups'
            },
            {
                item: 'Sattu (Roasted Gram Flour)',
                quantity: '1 cup'
            },
            {
                item: 'Eggplant (Bharta Baingan)',
                quantity: '1 large'
            },
            {
                item: 'Tomatoes',
                quantity: '2'
            },
            {
                item: 'Mustard Oil',
                quantity: '2 tbsp'
            },
            {
                item: 'Pickle Masala',
                quantity: '1 tbsp'
            },
            {
                item: 'Garlic & Ginger',
                quantity: '1 tbsp minced'
            },
            {
                item: 'Green Chilies',
                quantity: '2-3 chopped'
            },
            {
                item: 'Carom Seeds (Ajwain)',
                quantity: '1/2 tsp'
            }
        ],
        instructions: [
            'Dough: Knead wheat flour with water, salt, and ghee into a semi-stiff dough.',
            'Filling: Mix sattu with chopped garlic, ginger, chilies, ajwain, pickle masala, mustard oil, lemon juice, and salt.',
            'Add a few drops of water to the filling to make it moist (crumbly texture).',
            'Make small balls of dough, cup them, stuff with sattu mix, and seal tight.',
            'Roast Litti on coal, cow dung cakes, or in an oven (200°C) until brown and crusty. Dip in ghee.',
            'Chokha: Roast eggplant and tomatoes on direct flame until charred.',
            'Peel and mash them. Mix with raw mustard oil, chopped onions, chilies, coriander, and salt.',
            'Serve hot Litti broken into the Chokha.'
        ],
        imageUrl: '/recipes/litti-chokha.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian'
        ]
    },
    // JHARKHAND
    {
        id: 'jh1',
        title: 'Dhuska',
        slug: 'dhuska',
        state: 'Jharkhand',
        region: 'East India',
        prepTime: '4 hours',
        cookTime: '30 mins',
        servings: 4,
        description: 'Deep-fried savory pancake made of rice and lentils.',
        ingredients: [
            {
                item: 'Rice',
                quantity: '1 cup'
            },
            {
                item: 'Chana Dal',
                quantity: '1/2 cup'
            },
            {
                item: 'Urad Dal',
                quantity: '1/4 cup'
            },
            {
                item: 'Green Chilies',
                quantity: '2'
            },
            {
                item: 'Cumin Seeds',
                quantity: '1 tsp'
            },
            {
                item: 'Oil',
                quantity: 'for deep frying'
            }
        ],
        instructions: [
            'Soak rice and both dals together for 4-5 hours.',
            'Drain and grind into a slightly coarse batter with chilies and ginger.',
            'Add salt, turmeric, and cumin seeds to the batter. Whisk well.',
            'Heat oil in a deep kadai.',
            'Pour a ladleful of batter into hot oil (like a pancake) and deep fry.',
            'Serve with potato curry or ghugni.'
        ],
        imageUrl: '/recipes/dhuska.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian',
            'Gluten-Free'
        ]
    },
    // MADHYA PRADESH
    {
        id: 'mp1',
        title: 'Poha Jalebi',
        slug: 'poha-jalebi',
        state: 'Madhya Pradesh',
        region: 'Central India',
        prepTime: '15 mins',
        cookTime: '15 mins',
        servings: 4,
        description: 'Famous breakfast combo of flattened rice and sweet swirls.',
        ingredients: [
            {
                item: 'Thick Poha (Flattened Rice)',
                quantity: '2 cups'
            },
            {
                item: 'Onions',
                quantity: '2 finely chopped'
            },
            {
                item: 'Green Chilies',
                quantity: '2-3'
            },
            {
                item: 'Mustard Seeds & Fennel',
                quantity: '1 tsp each'
            },
            {
                item: 'Turmeric',
                quantity: '1/2 tsp'
            },
            {
                item: 'Jalebi',
                quantity: 'store bought/homemade'
            }
        ],
        instructions: [
            'Rinse poha gently in a colander and let it sit (do not soak).',
            'Heat oil, crackle mustard and fennel seeds.',
            'Sauté onions and chilies until translucent. Add turmeric and salt.',
            'Add the moist poha and toss gently to mix. Steam covered for 2 mins.',
            'Garnish with coriander, sev, and a squeeze of lemon.',
            'Serve hot with crispy sweet Jalebis.'
        ],
        imageUrl: '/recipes/poha-jalebi.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian'
        ]
    },
    // CHHATTISGARH
    {
        id: 'ch1',
        title: 'Fara',
        slug: 'fara',
        state: 'Chhattisgarh',
        region: 'Central India',
        prepTime: '20 mins',
        cookTime: '30 mins',
        servings: 4,
        description: 'Steamed rice dumplings.',
        ingredients: [
            {
                item: 'Rice Flour',
                quantity: '1 cup'
            },
            {
                item: 'Leftover Rice',
                quantity: '1/2 cup (optional)'
            },
            {
                item: 'Water',
                quantity: '1.5 cups'
            },
            {
                item: 'Sesame Seeds',
                quantity: '1 tsp'
            },
            {
                item: 'Green Chilies & Coriander',
                quantity: 'chopped'
            },
            {
                item: 'Oil',
                quantity: '1 tbsp'
            }
        ],
        instructions: [
            'Boil water with salt and a teaspoon of oil. Add rice flour and mix quickly.',
            'Turn off heat, cover, and let it rest for 5 mins. Knead into a smooth dough while warm.',
            'Mix in leftover rice (mashed), sesame seeds, chilies, and coriander.',
            'Shape into small cylindrical rolls or fingers.',
            'Steam in a steamer or idli cooker for 10-15 minutes.',
            'Temper: Heat oil, splutter mustard seeds, sesame seeds, and curry leaves. Toss the steamed Fara in it.'
        ],
        imageUrl: '/recipes/fara.jpg',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian',
            'Gluten-Free'
        ]
    },
    // ASSAM
    {
        id: 'as1',
        title: 'Masor Tenga',
        slug: 'masor-tenga',
        state: 'Assam',
        region: 'North East India',
        prepTime: '15 mins',
        cookTime: '25 mins',
        servings: 2,
        description: 'Tangy fish curry made with tomatoes or elephant apple.',
        ingredients: [
            {
                item: 'Rohu/Katla Fish',
                quantity: '4 pieces'
            },
            {
                item: 'Tomatoes',
                quantity: '3-4 chopped'
            },
            {
                item: 'Lemon Juice/Elephant Apple (Ou Tenga)',
                quantity: '2 tbsp/1 cup'
            },
            {
                item: 'Potatoes',
                quantity: '1 boiled & mashed'
            },
            {
                item: 'Mustard Oil',
                quantity: '3 tbsp'
            },
            {
                item: 'Panch Phoron',
                quantity: '1/2 tsp'
            }
        ],
        instructions: [
            'Marinate fish with turmeric and salt. Fry lightly in mustard oil and set aside.',
            'In the same oil, splutter panch phoron and green chilies.',
            'Add tomatoes and cook until soft and pulpy.',
            'Add water, turmeric, and mashed potato (thickener). Bring to a boil.',
            'Add the fried fish and simmer for 5 minutes.',
            'Add lemon juice or ou tenga slices for sourness. Simmer for another 2 minutes and serve.'
        ],
        imageUrl: '/recipes/masor-tenga.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Non-Vegetarian',
            'Gluten-Free'
        ]
    },
    // SIKKIM
    {
        id: 'sk1',
        title: 'Momos',
        slug: 'momos',
        state: 'Sikkim',
        region: 'North East India',
        prepTime: '45 mins',
        cookTime: '15 mins',
        servings: 4,
        description: 'Steamed dumplings filled with meat or vegetables.',
        ingredients: [
            {
                item: 'Maida (All Purpose Flour)',
                quantity: '2 cups'
            },
            {
                item: 'Minced Meat/Cabbage',
                quantity: '1 cup'
            },
            {
                item: 'Onions',
                quantity: '1 finely chopped'
            },
            {
                item: 'Ginger & Garlic',
                quantity: '1 tbsp minced'
            },
            {
                item: 'Soy Sauce',
                quantity: '1 tsp'
            },
            {
                item: 'Oil/Butter',
                quantity: '1 tbsp'
            }
        ],
        instructions: [
            'Dough: Mix flour and water to make a firm dough. Rest for 30 mins.',
            'Filling: Mix minced meat/veg with onions, ginger, garlic, soy sauce, and oil.',
            'Roll out small, thin circles of dough.',
            'Place a spoonful of filling in the center.',
            'Pleat the edges together to seal the momo.',
            'Steam for 10-12 minutes until the skin looks translucent.'
        ],
        imageUrl: '/recipes/momos.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Non-Vegetarian'
        ]
    },
    // NAGALAND
    {
        id: 'nl1',
        title: 'Smoked Pork with Bamboo Shoot',
        slug: 'smoked-pork-bamboo',
        state: 'Nagaland',
        region: 'North East India',
        prepTime: '20 mins',
        cookTime: '1 hour',
        servings: 4,
        description: 'Signature Naga dish with fiery chilies.',
        ingredients: [
            {
                item: 'Smoked Pork',
                quantity: '500g cubes'
            },
            {
                item: 'Fermented Bamboo Shoots',
                quantity: '1 cup'
            },
            {
                item: 'Raja Mircha (Ghost Pepper)',
                quantity: '1-2'
            },
            {
                item: 'Ginger & Garlic',
                quantity: 'crushed'
            },
            {
                item: 'Tomato',
                quantity: '1 chopped'
            }
        ],
        instructions: [
            'Wash the smoked pork thoroughly with warm water.',
            'Pressure cook pork with a little water and salt until tender (3-4 whistles).',
            'In a pan, add the cooked pork along with its stock.',
            'Add bamboo shoots, crushed ginger-garlic, tomato, and raja mircha.',
            'Cook on medium heat until the gravy thickens and flavors meld (approx. 15-20 mins).',
            'Serve hot with steamed rice.'
        ],
        imageUrl: '/recipes/smoked-pork-bamboo.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Non-Vegetarian',
            'Gluten-Free'
        ]
    },
    // MANIPUR
    {
        id: 'mn1',
        title: 'Eromba',
        slug: 'eromba',
        state: 'Manipur',
        region: 'North East India',
        prepTime: '20 mins',
        cookTime: '20 mins',
        servings: 4,
        description: 'Mash of boiled vegetables and fermented fish.',
        ingredients: [
            {
                item: 'Fermented Bamboo Shoots',
                quantity: '1/2 cup'
            },
            {
                item: 'Potatoes',
                quantity: '2 boiled'
            },
            {
                item: 'Ngari (Fermented Fish)',
                quantity: '4-5 medium pieces'
            },
            {
                item: 'Ghost Pepper (Raja Mircha)',
                quantity: '1-2 (adjust spice)'
            },
            {
                item: 'Spring Onions/Chives',
                quantity: 'for garnish'
            },
            {
                item: 'Salt',
                quantity: 'to taste'
            }
        ],
        instructions: [
            'Steam or roast the Ngari (fermented fish) and Raja Mircha until fragrant.',
            'Boil the potatoes and bamboo shoots until soft. Drain water.',
            'In a bowl, mash the roasted Ngari and chilies into a paste with a little salt.',
            'Add the boiled potatoes and bamboo shoots to the bowl.',
            'Mash everything together (traditionally done by hand) to mix the flavors well.',
            'The texture should be a coarse mash, not a smooth puree.',
            'Garnish generously with chopped spring onions or chives.',
            'Serve as a spicy side dish with steamed rice.'
        ],
        imageUrl: '/recipes/eromba.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Non-Vegetarian',
            'Gluten-Free'
        ]
    },
    // MEGHALAYA
    {
        id: 'mg1',
        title: 'Jadoh',
        slug: 'jadoh',
        state: 'Meghalaya',
        region: 'North East India',
        prepTime: '15 mins',
        cookTime: '45 mins',
        servings: 4,
        description: 'Red rice cooked with pork.',
        ingredients: [
            {
                item: 'Short Grain Rice (Joha or Hill Rice)',
                quantity: '2 cups'
            },
            {
                item: 'Pork',
                quantity: '300g (with fat)'
            },
            {
                item: 'Onions',
                quantity: '2 chopped'
            },
            {
                item: 'Ginger Garlic Paste',
                quantity: '1 tbsp'
            },
            {
                item: 'Black Sesame Seeds (Dohneiiong)',
                quantity: '1 tbsp (optional paste)'
            },
            {
                item: 'Turmeric',
                quantity: '1/2 tsp'
            },
            {
                item: 'Bay Leaves',
                quantity: '2'
            },
            {
                item: 'Vegetable Oil',
                quantity: '1 tbsp'
            }
        ],
        instructions: [
            'Wash rice and soak for 30 minutes.',
            'Cut pork into small bite-sized cubes (keep the fat, it adds flavor).',
            'Heat oil in a heavy-bottomed pot. Sauté onions, bay leaves, and ginger-garlic paste.',
            'Add turmeric and black pepper. Add pork pieces and fry until browned.',
            'Add the soaked rice and sauté for 2-3 minutes with the meat.',
            'Pour in 4 cups of water (or meat broth). Stir well.',
            'Cover and cook on low heat until rice is fluffy and meat is tender (approx 20 mins).',
            'Fluff with a fork and serve hot.'
        ],
        imageUrl: '/recipes/jadoh.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Non-Vegetarian',
            'Gluten-Free'
        ]
    },
    // MIZORAM
    {
        id: 'mz1',
        title: 'Bai',
        slug: 'bai',
        state: 'Mizoram',
        region: 'North East India',
        prepTime: '10 mins',
        cookTime: '30 mins',
        servings: 4,
        description: 'Stew made with pork sauce, bamboo shoots, and vegetables.',
        ingredients: [
            {
                item: 'Mixed Vegetables',
                quantity: 'Beans, Eggplant, Mustard Greens'
            },
            {
                item: 'Pork Sauce (Saum)',
                quantity: '1 tbsp (or fermented pork fat)'
            },
            {
                item: 'Bamboo Shoots',
                quantity: '1/2 cup'
            },
            {
                item: 'Water',
                quantity: '3 cups'
            },
            {
                item: 'Green Chilies',
                quantity: '3-4'
            },
            {
                item: 'Salt',
                quantity: 'to taste'
            }
        ],
        instructions: [
            'Bring water to a boil in a pot.',
            'Add the pork sauce/fat and salt.',
            'Add the harder vegetables first (beans, bamboo shoots). Boil for 5-10 mins.',
            'Add leafy greens and chilies. Cook until soft but not mushy.',
            'The stew should be watery and flavorful. Serve hot with rice.'
        ],
        imageUrl: '/recipes/bai.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Non-Vegetarian',
            'Gluten-Free'
        ]
    },
    // TRIPURA
    {
        id: 'tr1',
        title: 'Mui Borok',
        slug: 'mui-borok',
        state: 'Tripura',
        region: 'North East India',
        prepTime: '20 mins',
        cookTime: '30 mins',
        servings: 4,
        description: 'Traditional plate featuring Berma (dried fermented fish).',
        ingredients: [
            {
                item: 'Berma (Fermented Fish)',
                quantity: '2-3 pieces'
            },
            {
                item: 'Mixed Vegetables',
                quantity: 'Beans, Potatoes, Tomato'
            },
            {
                item: 'Green Chilies',
                quantity: '5-6 (spicy)'
            },
            {
                item: 'Salt',
                quantity: 'to taste'
            },
            {
                item: 'Water',
                quantity: '2 cups'
            }
        ],
        instructions: [
            'Wash the Berma fish gently.',
            'Boil water in a pot. Add the Berma, chopped vegetables, and slit green chilies.',
            'Cover and cook until vegetables are tender.',
            'Mash the chilies into the broth for heat.',
            'Serve hot with plain rice. (No oil is used in this dish).'
        ],
        imageUrl: '/recipes/mui-borok.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Non-Vegetarian',
            'Gluten-Free'
        ]
    },
    // ARUNACHAL PRADESH
    {
        id: 'ar1',
        title: 'Thukpa',
        slug: 'thukpa',
        state: 'Arunachal Pradesh',
        region: 'North East India',
        prepTime: '20 mins',
        cookTime: '20 mins',
        servings: 2,
        description: 'Hot noodle soup with vegetables or meat.',
        ingredients: [
            {
                item: 'Noodles',
                quantity: '1 packet boiled'
            },
            {
                item: 'Chicken/Vegetable Broth',
                quantity: '4 cups'
            },
            {
                item: 'Mixed Vegetables',
                quantity: 'Carrot, Cabbage, Beans'
            },
            {
                item: 'Chicken (optional)',
                quantity: '1/2 cup shredded'
            },
            {
                item: 'Ginger & Garlic',
                quantity: '1 tbsp minced'
            },
            {
                item: 'Soy Sauce',
                quantity: '1 tsp'
            }
        ],
        instructions: [
            'Heat a little oil, sauté ginger and garlic.',
            'Add chopped vegetables (and chicken) and stir-fry for 2 mins.',
            'Pour in the broth and bring to a boil. Simmer for 5 mins.',
            'Add soy sauce, salt, and pepper.',
            'Divide boiled noodles into bowls.',
            'Ladle the hot soup and veggies over the noodles. Garnish with spring onions.'
        ],
        imageUrl: '/recipes/thukpa.jpg',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian'
        ]
    },
    // CHANDIGARH
    {
        id: 'chd1',
        title: 'Amritsari Kulcha',
        slug: 'amritsari-kulcha',
        state: 'Chandigarh',
        region: 'North India',
        prepTime: '2 hours',
        cookTime: '20 mins',
        servings: 4,
        description: 'Stuffed flatbread famous in Punjab and Chandigarh.',
        ingredients: [
            {
                item: 'Maida (All Purpose Flour)',
                quantity: '2 cups'
            },
            {
                item: 'Potatoes',
                quantity: '3 boiled & mashed'
            },
            {
                item: 'Onions',
                quantity: '1 finely chopped'
            },
            {
                item: 'Anardana (Dried Pomegranate)',
                quantity: '1 tsp'
            },
            {
                item: 'Green Chilies',
                quantity: '2 chopped'
            },
            {
                item: 'Butter',
                quantity: 'plenty for serving'
            }
        ],
        instructions: [
            'Dough: Mix maida, salt, sugar, baking powder, and curd/milk. Knead soft dough. Rest for 2 hours.',
            'Filling: Mix mashed potatoes with onions, chilies, anardana, coriander, and spices.',
            'Roll a ball of dough, place filling in center, seal, and roll gently into a disc.',
            'Wet one side of the kulcha and stick it onto a hot tawa (or bake in tandoor).',
            'Cook until puffed and browned. Crisp the top directly on flame if using tawa.',
            'Crush the hot kulcha with hands to flake it and top with a dollop of butter.'
        ],
        imageUrl: '/recipes/amritsari-kulcha.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian'
        ]
    },
    // LADAKH
    {
        id: 'ld1',
        title: 'Skyu',
        slug: 'skyu',
        state: 'Ladakh',
        region: 'North India',
        prepTime: '30 mins',
        cookTime: '45 mins',
        servings: 4,
        description: 'Traditional thumb-sized wheat dough stew with root veggies.',
        ingredients: [
            {
                item: 'Wheat Flour',
                quantity: '1 cup'
            },
            {
                item: 'Potatoes',
                quantity: '2 diced'
            },
            {
                item: 'Carrots',
                quantity: '2 diced'
            },
            {
                item: 'Milk/Water',
                quantity: '2 cups'
            },
            {
                item: 'Turnips',
                quantity: '1 diced'
            }
        ],
        instructions: [
            'Knead wheat flour with water into a stiff dough.',
            'Pinch small pieces and shape them into thumb-pressed shell shapes (Skyu).',
            'In a pot, boil water/milk with diced potatoes, carrots, and turnips.',
            'Add the dough shells to the boiling stew.',
            'Simmer until the veggies and pasta-like shells are cooked.',
            'Serve hot as a comforting meal.'
        ],
        imageUrl: '/recipes/skyu.png',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian'
        ]
    },
    // PUDUCHERRY
    {
        id: 'py1',
        title: 'Pondicherry Fish Curry',
        slug: 'pondicherry-fish-curry',
        state: 'Puducherry',
        region: 'South India',
        prepTime: '20 mins',
        cookTime: '30 mins',
        servings: 4,
        description: 'Creole-style curry with coconut milk and mild spices.',
        ingredients: [
            {
                item: 'Fish (Seer/Kingfish)',
                quantity: '500g'
            },
            {
                item: 'Coconut Milk',
                quantity: '1 cup (thick)'
            },
            {
                item: 'Onion',
                quantity: '1 chopped'
            },
            {
                item: 'Tomatoes',
                quantity: '2 chopped'
            },
            {
                item: 'Green Chilies',
                quantity: '2 slit'
            },
            {
                item: 'Fennel Seeds',
                quantity: '1 tsp'
            },
            {
                item: 'Fenugreek Seeds',
                quantity: '1/2 tsp'
            },
            {
                item: 'Curry Leaves',
                quantity: '1 sprig'
            },
            {
                item: 'Tamarind Juice',
                quantity: '2 tbsp'
            },
            {
                item: 'Turmeric & Red Chili Powder',
                quantity: '1 tsp each'
            }
        ],
        instructions: [
            'Marinate fish pieces with turmeric and salt for 15 minutes.',
            'Heat oil in a pan. Splutter fennel seeds, fenugreek seeds, and curry leaves.',
            'Add chopped onions and green chilies. Sauté until soft.',
            'Add tomatoes and cook until mushy. Stir in chili powder and turmeric.',
            'Pour in the tamarind juice and a little water. Bring to a boil.',
            'Gently slide in the fish pieces. Cover and cook for 5-7 minutes.',
            'Reduce heat and pour in the thick coconut milk. Simmer for 2 minutes (do not boil vigorously).',
            'Serve hot with steamed rice or Idiyappam.'
        ],
        imageUrl: '/recipes/pondicherry-fish-curry.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Non-Vegetarian',
            'Gluten-Free'
        ]
    },
    // LAKSHADWEEP
    {
        id: 'ldw1',
        title: 'Mus Kavaab',
        slug: 'mus-kavaab',
        state: 'Lakshadweep',
        region: 'South India',
        prepTime: '20 mins',
        cookTime: '40 mins',
        servings: 4,
        description: 'Spicy tuna curry, a staple of the islands.',
        ingredients: [
            {
                item: 'Tuna Fish (Boneless)',
                quantity: '500g cubes'
            },
            {
                item: 'Grated Coconut',
                quantity: '1 cup'
            },
            {
                item: 'Coriander Powder',
                quantity: '2 tbsp'
            },
            {
                item: 'Chili Powder',
                quantity: '1 tbsp'
            },
            {
                item: 'Turmeric',
                quantity: '1/2 tsp'
            },
            {
                item: 'Onions',
                quantity: '2 finely chopped'
            },
            {
                item: 'Curry Leaves',
                quantity: '2 sprigs'
            }
        ],
        instructions: [
            'Make a paste of grated coconut, coriander powder, chili powder, and turmeric.',
            'Marinate the tuna cubes with half of this paste and salt for 30 mins.',
            'Heat oil, sauté onions and curry leaves until golden.',
            'Add the remaining spice paste and cook until raw smell goes.',
            'Add the marinated fish and a little water.',
            'Cover and cook on low heat until the gravy is thick and oil separates.'
        ],
        imageUrl: '/recipes/mus-kavaab.jpg',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Non-Vegetarian',
            'Gluten-Free'
        ]
    },
    // ANDAMAN AND NICOBAR
    {
        id: 'an1',
        title: 'Coconut Prawn Curry',
        slug: 'coconut-prawn-curry',
        state: 'Andaman and Nicobar Islands',
        region: 'South India',
        prepTime: '15 mins',
        cookTime: '20 mins',
        servings: 4,
        description: 'Fresh seafood curry with island spices.',
        ingredients: [
            {
                item: 'Tiger Prawns',
                quantity: '500g cleaned'
            },
            {
                item: 'Coconut Milk',
                quantity: '1.5 cups'
            },
            {
                item: 'Mustard Seeds',
                quantity: '1 tsp'
            },
            {
                item: 'Green Chilies',
                quantity: '3 slit'
            },
            {
                item: 'Turmeric',
                quantity: '1/2 tsp'
            },
            {
                item: 'Lime Juice',
                quantity: '1 tsp'
            }
        ],
        instructions: [
            'Clean and devein the prawns. Marinate with turmeric and salt.',
            'Heat oil, splutter mustard seeds and curry leaves.',
            'Add green chilies and onions (optional), sauté until soft.',
            'Add the prawns and stir fry for 2 minutes until pink.',
            'Pour in the coconut milk and simmer gently for 5 minutes (do not overcook).',
            'Finish with a squeeze of lime juice.'
        ],
        imageUrl: '/recipes/coconut-prawn-curry.jpg',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Non-Vegetarian',
            'Gluten-Free'
        ]
    },
    // DADRA AND NAGAR HAVELI AND DAMAN AND DIU
    {
        id: 'dd1',
        title: 'Crab Curry',
        slug: 'crab-curry',
        state: 'Dadra and Nagar Haveli and Daman and Diu',
        region: 'West India',
        prepTime: '30 mins',
        cookTime: '30 mins',
        servings: 2,
        description: 'Coastal delicacy cooked with local spices.',
        ingredients: [
            {
                item: 'Crabs',
                quantity: '4 medium, cleaned'
            },
            {
                item: 'Onions',
                quantity: '2 chopped'
            },
            {
                item: 'Tomatoes',
                quantity: '2 chopped'
            },
            {
                item: 'Garlic Ginger Paste',
                quantity: '1 tbsp'
            },
            {
                item: 'Malvani/Garam Masala',
                quantity: '2 tbsp'
            },
            {
                item: 'Coconut Paste',
                quantity: '1/2 cup (optional)'
            }
        ],
        instructions: [
            'Clean crabs thoroughly and break the claws slightly.',
            'Heat oil, sauté onions and ginger-garlic paste until golden.',
            'Add tomatoes and cook until soft. Add masala powders.',
            'Toss in the crabs and coat with the masala.',
            'Add water (and coconut paste if using) and cover.',
            'Cook for 15-20 minutes until the shells turn orange/red.'
        ],
        imageUrl: "/recipes/crab-curry.webp",
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Non-Vegetarian',
            'Gluten-Free'
        ]
    },
    // FAMOUS DISHES (EXTRA)
    {
        id: 'fam1',
        title: 'Samosa',
        slug: 'samosa',
        state: 'Delhi',
        region: 'North India',
        prepTime: '45 mins',
        cookTime: '30 mins',
        servings: 6,
        description: 'Fried pastry with a savory filling, loved worldwide.',
        ingredients: [
            {
                item: 'Maida (All Purpose Flour)',
                quantity: '2 cups'
            },
            {
                item: 'Ghee/Oil',
                quantity: '1/4 cup (for dough)'
            },
            {
                item: 'Carom Seeds (Ajwain)',
                quantity: '1 tsp'
            },
            {
                item: 'Potatoes',
                quantity: '4 boiled & diced'
            },
            {
                item: 'Green Peas',
                quantity: '1/2 cup'
            },
            {
                item: 'Spices',
                quantity: 'Cumin, Coriander, Amchur, Garam Masala'
            }
        ],
        instructions: [
            'Dough: Rub ghee into flour until crumbly. Add water to knead a stiff dough. Rest for 30 mins.',
            'Filling: Heat oil, splutter cumin. Add peas, potatoes, and spices. Cook for 5 mins and cool.',
            'Roll a ball of dough into an oval. Cut in half.',
            'Form a cone with one half, sealing the straight edge with water.',
            'Stuff with filling and seal the bottom edge firmly.',
            'Deep fry in medium-hot oil until golden and crispy (approx. 10-12 mins).'
        ],
        imageUrl: '/recipes/samosa.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian',
            'Vegan'
        ]
    },
    {
        id: 'fam2',
        title: 'Palak Paneer',
        slug: 'palak-paneer',
        state: 'Punjab',
        region: 'North India',
        prepTime: '20 mins',
        cookTime: '20 mins',
        servings: 4,
        description: 'Cottage cheese in a smooth spinach gravy.',
        ingredients: [
            {
                item: 'Spinach (Palak)',
                quantity: '500g washed'
            },
            {
                item: 'Paneer (Cottage Cheese)',
                quantity: '250g cubes'
            },
            {
                item: 'Onion',
                quantity: '1 finely chopped'
            },
            {
                item: 'Tomato',
                quantity: '1 finely chopped'
            },
            {
                item: 'Ginger Garlic Paste',
                quantity: '1 tbsp'
            },
            {
                item: 'Fresh Cream',
                quantity: '2 tbsp'
            },
            {
                item: 'Garam Masala',
                quantity: '1 tsp'
            },
            {
                item: 'Cumin Seeds',
                quantity: '1 tsp'
            }
        ],
        instructions: [
            'Blanch spinach in boiling water for 2 minutes, then immediately plunge into ice water (to keep it green).',
            'Blend the drained spinach with green chilies into a smooth puree.',
            'Heat oil/ghee in a pan, splutter cumin seeds.',
            'Sauté onions and ginger-garlic paste until golden brown.',
            'Add tomatoes and spices (turmeric, red chili, coriander). Cook until oil separates.',
            'Add the spinach puree and simmer for 5 minutes.',
            'Add paneer cubes and garam masala. Mix gently.',
            'Finish with fresh cream and serve hot with Naan or Roti.'
        ],
        imageUrl: '/recipes/palak-paneer.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian',
            'Gluten-Free'
        ]
    },
    {
        id: 'fam3',
        title: 'Masala Dosa',
        slug: 'masala-dosa',
        state: 'Karnataka',
        region: 'South India',
        prepTime: '12 hours',
        cookTime: '10 mins',
        servings: 4,
        description: 'Crispy rice crepe filled with spiced potato mash.',
        ingredients: [
            {
                item: 'Dosa Batter',
                quantity: '4 cups (fermented)'
            },
            {
                item: 'Potatoes',
                quantity: '4 boiled & mashed'
            },
            {
                item: 'Onions',
                quantity: '2 sliced'
            },
            {
                item: 'Green Chilies',
                quantity: '3-4 chopped'
            },
            {
                item: 'Mustard Seeds',
                quantity: '1 tsp'
            },
            {
                item: 'Turmeric Powder',
                quantity: '1/2 tsp'
            },
            {
                item: 'Curry Leaves',
                quantity: '1 sprig'
            },
            {
                item: 'Urad Dal',
                quantity: '1 tsp'
            }
        ],
        instructions: [
            'Filling: Heat oil, splutter mustard seeds, urad dal, and curry leaves.',
            'Add sliced onions and green chilies. Sauté until translucent.',
            'Add turmeric and salt. Mix in the boiled mashed potatoes.',
            'Add a splash of water to keep it moist. Garnish with coriander.',
            'Dosa: Heat a cast-iron tawa or non-stick pan. Pour a ladle of batter.',
            'Spread in a circular motion to make a thin crepe. Drizzle oil/ghee around edges.',
            'Cook until the bottom is golden brown and crisp.',
            'Place a spoonful of potato filling in the center, fold over, and serve hot with chutney.'
        ],
        imageUrl: '/recipes/masala-dosa.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian',
            'Gluten-Free',
            'Vegan'
        ]
    },
    {
        id: 'fam4',
        title: 'Pav Bhaji',
        slug: 'pav-bhaji',
        state: 'Maharashtra',
        region: 'West India',
        prepTime: '20 mins',
        cookTime: '30 mins',
        servings: 4,
        description: 'Spicy mashed vegetable curry served with soft buttered buns.',
        ingredients: [
            {
                item: 'Mixed Vegetables',
                quantity: 'Potatoes, Cauliflower, Peas, Carrots (boiled)'
            },
            {
                item: 'Pav Buns',
                quantity: '8'
            },
            {
                item: 'Butter',
                quantity: '100g'
            },
            {
                item: 'Onions',
                quantity: '2 finely chopped'
            },
            {
                item: 'Capsicum',
                quantity: '1 finely chopped'
            },
            {
                item: 'Tomatoes',
                quantity: '4 finely chopped'
            },
            {
                item: 'Pav Bhaji Masala',
                quantity: '2 tbsp'
            }
        ],
        instructions: [
            'Boil and mash the vegetables thoroughly.',
            'Heat butter on a large tawa/pan. Sauté onions and capsicum.',
            'Add tomatoes and cook until mushy. Add pav bhaji masala and salt.',
            'Add the mashed veggies and a little water. Mash and cook for 10-15 mins.',
            'Add a dollop of butter and coriander leaves.',
            'Slice pav buns, toast with butter on the pan, and serve with the bhaji.'
        ],
        imageUrl: '/recipes/pav-bhaji.webp',
        rating: 5,
        reviewCount: 10,
        dietary: [
            'Vegetarian'
        ]
    }
];
}),
"[project]/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$recipes$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/recipes.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const connectionString = process.env.POSTGRES_URL;
if (!connectionString) {
    throw new Error('POSTGRES_URL environment variable is required');
}
const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["Pool"]({
    connectionString
});
async function query(text, params) {
    const result = await pool.query(text, params);
    return {
        rows: result.rows,
        rowCount: result.rowCount
    };
}
function buildQuery(strings, values) {
    let text = '';
    const params = [];
    strings.forEach((str, i)=>{
        text += str;
        if (i < values.length) {
            params.push(values[i]);
            text += `$${i + 1}`;
        }
    });
    return {
        text,
        params
    };
}
function sql(strings, ...values) {
    const { text, params } = buildQuery(strings, values);
    return query(text, params);
}
function getOptimizedImageUrl(url) {
    if (!url.startsWith('/recipes/')) return url;
    const extMatch = url.match(/\.(jpe?g|png)$/i);
    if (!extMatch) return url;
    const webpUrl = url.replace(/\.(jpe?g|png)$/i, '.webp');
    const webpPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', webpUrl);
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(webpPath)) {
        return webpUrl;
    }
    return url;
}
let initialized = false;
async function ensureTables() {
    if (initialized) return;
    await sql`
    CREATE TABLE IF NOT EXISTS users (
      id uuid PRIMARY KEY,
      email text UNIQUE NOT NULL,
      name text,
      password_hash text NOT NULL,
      role text NOT NULL,
      status text NOT NULL,
      created_at timestamptz NOT NULL
    )
  `;
    await sql`
    CREATE TABLE IF NOT EXISTS sessions (
      id uuid PRIMARY KEY,
      user_id uuid REFERENCES users(id) ON DELETE CASCADE,
      expires_at timestamptz NOT NULL
    )
  `;
    await sql`
    CREATE TABLE IF NOT EXISTS recipes (
      id uuid PRIMARY KEY,
      slug text UNIQUE NOT NULL,
      title text NOT NULL,
      state text NOT NULL,
      region text NOT NULL,
      prep_time text,
      cook_time text,
      servings integer,
      description text NOT NULL,
      ingredients jsonb NOT NULL,
      instructions jsonb NOT NULL,
      image_url text NOT NULL,
      rating numeric,
      review_count integer,
      dietary jsonb NOT NULL
    )
  `;
    await sql`
    CREATE TABLE IF NOT EXISTS ratings (
      id uuid PRIMARY KEY,
      user_id uuid REFERENCES users(id) ON DELETE CASCADE,
      recipe_slug text NOT NULL,
      rating integer NOT NULL,
      timestamp timestamptz NOT NULL
    )
  `;
    await sql`
    CREATE TABLE IF NOT EXISTS bookmarks (
      user_id uuid REFERENCES users(id) ON DELETE CASCADE,
      recipe_slug text NOT NULL,
      timestamp timestamptz NOT NULL,
      PRIMARY KEY (user_id, recipe_slug)
    )
  `;
    await sql`
    CREATE TABLE IF NOT EXISTS activities (
      id uuid PRIMARY KEY,
      user_id uuid REFERENCES users(id) ON DELETE CASCADE,
      type text NOT NULL,
      target_slug text,
      details text NOT NULL,
      timestamp timestamptz NOT NULL
    )
  `;
    await sql`
    CREATE TABLE IF NOT EXISTS comments (
      id uuid PRIMARY KEY,
      user_id uuid REFERENCES users(id) ON DELETE CASCADE,
      recipe_slug text NOT NULL,
      content text NOT NULL,
      timestamp timestamptz NOT NULL
    )
  `;
    await sql`
    CREATE TABLE IF NOT EXISTS password_resets (
      id uuid PRIMARY KEY,
      user_id uuid REFERENCES users(id) ON DELETE CASCADE,
      token text UNIQUE NOT NULL,
      expires_at timestamptz NOT NULL,
      used boolean NOT NULL DEFAULT false
    )
  `;
    await sql`
    CREATE TABLE IF NOT EXISTS generated_recipes (
      id uuid PRIMARY KEY,
      user_id uuid REFERENCES users(id) ON DELETE CASCADE,
      title text NOT NULL,
      description text NOT NULL,
      prep_time text NOT NULL,
      cook_time text NOT NULL,
      servings integer NOT NULL,
      ingredients jsonb NOT NULL,
      instructions jsonb NOT NULL,
      tips text,
      prompt text,
      created_at timestamptz NOT NULL DEFAULT NOW()
    )
  `;
    await sql`
    ALTER TABLE generated_recipes
    ADD COLUMN IF NOT EXISTS image_url text
  `;
    const existing = await sql`SELECT slug FROM recipes`;
    const existingSlugs = new Set(existing.rows.map((r)=>r.slug));
    for (const r of __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$recipes$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["recipes"]){
        if (!existingSlugs.has(r.slug)) {
            await sql`
        INSERT INTO recipes (
          id,
          slug,
          title,
          state,
          region,
          prep_time,
          cook_time,
          servings,
          description,
          ingredients,
          instructions,
          image_url,
          rating,
          review_count,
          dietary
        )
        VALUES (
          ${__TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID()},
          ${r.slug},
          ${r.title},
          ${r.state},
          ${r.region},
          ${r.prepTime},
          ${r.cookTime},
          ${r.servings},
          ${r.description},
          ${JSON.stringify(r.ingredients)},
          ${JSON.stringify(r.instructions)},
          ${r.imageUrl},
          ${r.rating ?? 0},
          ${r.reviewCount ?? 0},
          ${JSON.stringify(r.dietary)}
        )
        ON CONFLICT (slug) DO NOTHING
      `;
        }
    }
    initialized = true;
}
// Password helpers
function hashPassword(password) {
    const salt = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomBytes(16).toString('hex');
    const hash = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].scryptSync(password, salt, 64).toString('hex');
    return `${salt}:${hash}`;
}
function verifyPassword(password, storedHash) {
    if (!storedHash.includes(':')) {
        const legacyHash = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('sha256').update(password).digest('hex');
        return legacyHash === storedHash;
    }
    const [salt, hash] = storedHash.split(':');
    const verifyHash = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].scryptSync(password, salt, 64).toString('hex');
    return hash === verifyHash;
}
function mapUser(row) {
    return {
        id: row.id,
        email: row.email,
        name: row.name ?? undefined,
        passwordHash: row.password_hash,
        role: row.role,
        status: row.status,
        createdAt: row.created_at
    };
}
function mapSession(row) {
    return {
        id: row.id,
        userId: row.user_id,
        expiresAt: row.expires_at
    };
}
function mapRating(row) {
    return {
        id: row.id,
        userId: row.user_id,
        recipeSlug: row.recipe_slug,
        rating: row.rating,
        timestamp: row.timestamp
    };
}
function mapBookmark(row) {
    return {
        userId: row.user_id,
        recipeSlug: row.recipe_slug,
        timestamp: row.timestamp
    };
}
function mapComment(row) {
    return {
        id: row.id,
        userId: row.user_id,
        recipeSlug: row.recipe_slug,
        content: row.content,
        timestamp: row.timestamp
    };
}
function mapGeneratedRecipe(row) {
    return {
        id: row.id,
        userId: row.user_id,
        title: row.title,
        description: row.description,
        prepTime: row.prep_time,
        cookTime: row.cook_time,
        servings: row.servings,
        ingredients: row.ingredients,
        instructions: row.instructions,
        tips: row.tips ?? undefined,
        prompt: row.prompt ?? undefined,
        imageUrl: row.image_url ?? undefined,
        createdAt: row.created_at
    };
}
function mapRecipe(row) {
    return {
        id: row.id,
        slug: row.slug,
        title: row.title,
        state: row.state,
        region: row.region,
        prepTime: row.prep_time ?? '',
        cookTime: row.cook_time ?? '',
        servings: row.servings ?? 0,
        description: row.description,
        ingredients: row.ingredients,
        instructions: row.instructions,
        imageUrl: getOptimizedImageUrl(row.image_url),
        rating: row.rating ?? 0,
        reviewCount: row.review_count ?? 0,
        dietary: row.dietary
    };
}
const db = {
    logActivity: async (userId, type, details, targetSlug)=>{
        await ensureTables();
        const id = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID();
        const timestamp = new Date().toISOString();
        await sql`
      INSERT INTO activities (id, user_id, type, target_slug, details, timestamp)
      VALUES (${id}, ${userId}, ${type}, ${targetSlug ?? null}, ${details}, ${timestamp})
    `;
    },
    findUserByEmail: async (email)=>{
        await ensureTables();
        const result = await sql`
      SELECT * FROM users WHERE email = ${email} LIMIT 1
    `;
        const row = result.rows[0];
        if (!row) return null;
        return mapUser(row);
    },
    findUserById: async (id)=>{
        await ensureTables();
        const result = await sql`
      SELECT * FROM users WHERE id = ${id} LIMIT 1
    `;
        const row = result.rows[0];
        if (!row) return null;
        return mapUser(row);
    },
    createUser: async (email, password, name, role = 'user')=>{
        await ensureTables();
        const existing = await db.findUserByEmail(email);
        if (existing) {
            throw new Error('User already exists');
        }
        const id = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID();
        const passwordHash = hashPassword(password);
        const status = 'active';
        const createdAt = new Date().toISOString();
        await sql`
      INSERT INTO users (id, email, name, password_hash, role, status, created_at)
      VALUES (${id}, ${email}, ${name ?? null}, ${passwordHash}, ${role}, ${status}, ${createdAt})
    `;
        await db.logActivity(id, 'signup', 'User registered');
        const user = {
            id,
            email,
            name,
            passwordHash,
            role,
            status,
            createdAt
        };
        return user;
    },
    validatePassword: (user, password)=>{
        return verifyPassword(password, user.passwordHash);
    },
    createSession: async (userId)=>{
        await ensureTables();
        await sql`
      DELETE FROM sessions WHERE expires_at <= NOW()
    `;
        const id = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID();
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
        await sql`
      INSERT INTO sessions (id, user_id, expires_at)
      VALUES (${id}, ${userId}, ${expiresAt})
    `;
        await db.logActivity(userId, 'login', 'User logged in');
        const session = {
            id,
            userId,
            expiresAt
        };
        return session;
    },
    getSession: async (sessionId)=>{
        await ensureTables();
        const result = await sql`
      SELECT * FROM sessions WHERE id = ${sessionId} LIMIT 1
    `;
        const row = result.rows[0];
        if (!row) return null;
        if (new Date(row.expires_at) < new Date()) {
            await sql`
        DELETE FROM sessions WHERE id = ${sessionId}
      `;
            return null;
        }
        return mapSession(row);
    },
    deleteSession: async (sessionId)=>{
        await ensureTables();
        const result = await sql`
      SELECT * FROM sessions WHERE id = ${sessionId} LIMIT 1
    `;
        const row = result.rows[0];
        if (row) {
            await db.logActivity(row.user_id, 'login', 'User logged out');
        }
        await sql`
      DELETE FROM sessions WHERE id = ${sessionId}
    `;
    },
    getAllUsers: async ()=>{
        await ensureTables();
        const result = await sql`
      SELECT * FROM users ORDER BY created_at DESC
    `;
        return result.rows.map((row)=>{
            const u = mapUser(row);
            const { passwordHash, ...userWithoutPassword } = u;
            return {
                ...userWithoutPassword,
                status: userWithoutPassword.status || 'active'
            };
        });
    },
    updateUserStatus: async (userId, status)=>{
        await ensureTables();
        const result = await sql`
      UPDATE users SET status = ${status} WHERE id = ${userId}
    `;
        const rowCount = result.rowCount ?? 0;
        return rowCount > 0;
    },
    deleteUser: async (userId)=>{
        await ensureTables();
        const result = await sql`
      DELETE FROM users WHERE id = ${userId}
    `;
        const rowCount = result.rowCount ?? 0;
        return rowCount > 0;
    },
    upsertRating: async (userId, recipeSlug, ratingValue)=>{
        await ensureTables();
        const existing = await sql`
      SELECT * FROM ratings WHERE user_id = ${userId} AND recipe_slug = ${recipeSlug} LIMIT 1
    `;
        const timestamp = new Date().toISOString();
        if (existing.rows[0]) {
            await sql`
        UPDATE ratings
        SET rating = ${ratingValue}, timestamp = ${timestamp}
        WHERE user_id = ${userId} AND recipe_slug = ${recipeSlug}
      `;
        } else {
            const id = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID();
            await sql`
        INSERT INTO ratings (id, user_id, recipe_slug, rating, timestamp)
        VALUES (${id}, ${userId}, ${recipeSlug}, ${ratingValue}, ${timestamp})
      `;
        }
        await db.logActivity(userId, 'rating', `Rated recipe ${recipeSlug} with ${ratingValue} stars`, recipeSlug);
    },
    getRating: async (userId, recipeSlug)=>{
        await ensureTables();
        const result = await sql`
      SELECT * FROM ratings WHERE user_id = ${userId} AND recipe_slug = ${recipeSlug} LIMIT 1
    `;
        const row = result.rows[0];
        if (!row) return null;
        return mapRating(row);
    },
    getRecipeAverageRating: async (recipeSlug)=>{
        await ensureTables();
        const result = await sql`
      SELECT AVG(rating)::numeric(10,2) AS avg, COUNT(*)::int AS count
      FROM ratings
      WHERE recipe_slug = ${recipeSlug}
    `;
        const row = result.rows[0];
        if (!row || !row.avg || row.count === 0) return null;
        return {
            average: parseFloat(Number(row.avg).toFixed(1)),
            count: row.count
        };
    },
    toggleBookmark: async (userId, recipeSlug)=>{
        await ensureTables();
        const existing = await sql`
      SELECT * FROM bookmarks WHERE user_id = ${userId} AND recipe_slug = ${recipeSlug} LIMIT 1
    `;
        const timestamp = new Date().toISOString();
        let isBookmarked = false;
        if (existing.rows[0]) {
            await sql`
        DELETE FROM bookmarks WHERE user_id = ${userId} AND recipe_slug = ${recipeSlug}
      `;
            isBookmarked = false;
        } else {
            await sql`
        INSERT INTO bookmarks (user_id, recipe_slug, timestamp)
        VALUES (${userId}, ${recipeSlug}, ${timestamp})
      `;
            isBookmarked = true;
        }
        const details = isBookmarked ? `Bookmarked recipe ${recipeSlug}` : `Removed bookmark from recipe ${recipeSlug}`;
        await db.logActivity(userId, 'bookmark', details, recipeSlug);
        return isBookmarked;
    },
    isBookmarked: async (userId, recipeSlug)=>{
        await ensureTables();
        const result = await sql`
      SELECT * FROM bookmarks WHERE user_id = ${userId} AND recipe_slug = ${recipeSlug} LIMIT 1
    `;
        return !!result.rows[0];
    },
    getUserBookmarks: async (userId)=>{
        await ensureTables();
        const result = await sql`
      SELECT * FROM bookmarks WHERE user_id = ${userId}
      ORDER BY timestamp DESC
    `;
        return result.rows.map((row)=>mapBookmark(row).recipeSlug);
    },
    getAllComments: async ()=>{
        await ensureTables();
        const result = await sql`
      SELECT c.*, u.name AS user_name, u.email AS user_email
      FROM comments c
      LEFT JOIN users u ON c.user_id = u.id
      ORDER BY c.timestamp DESC
    `;
        return result.rows.map((row)=>({
                ...mapComment(row),
                user: {
                    name: row.user_name ?? 'Anonymous',
                    email: row.user_email ?? 'Unknown'
                }
            }));
    },
    deleteComment: async (commentId)=>{
        await ensureTables();
        const result = await sql`
      DELETE FROM comments WHERE id = ${commentId}
    `;
        const rowCount = result.rowCount ?? 0;
        return rowCount > 0;
    },
    getComments: async (recipeSlug)=>{
        await ensureTables();
        const result = await sql`
      SELECT c.*, u.name AS user_name
      FROM comments c
      LEFT JOIN users u ON c.user_id = u.id
      WHERE c.recipe_slug = ${recipeSlug}
      ORDER BY c.timestamp DESC
    `;
        return result.rows.map((row)=>({
                ...mapComment(row),
                user: {
                    name: row.user_name ?? 'Anonymous'
                }
            }));
    },
    addComment: async (userId, recipeSlug, content)=>{
        await ensureTables();
        const id = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID();
        const timestamp = new Date().toISOString();
        await sql`
      INSERT INTO comments (id, user_id, recipe_slug, content, timestamp)
      VALUES (${id}, ${userId}, ${recipeSlug}, ${content}, ${timestamp})
    `;
        await db.logActivity(userId, 'comment', `Commented on recipe ${recipeSlug}`, recipeSlug);
        const user = await db.findUserById(userId);
        return {
            id,
            userId,
            recipeSlug,
            content,
            timestamp,
            user: user ? {
                name: user.name
            } : {
                name: 'Anonymous'
            }
        };
    },
    createPasswordResetToken: async (email)=>{
        await ensureTables();
        const user = await db.findUserByEmail(email);
        if (!user) {
            return null;
        }
        const id = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID();
        const token = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID();
        const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();
        await sql`
      INSERT INTO password_resets (id, user_id, token, expires_at, used)
      VALUES (${id}, ${user.id}, ${token}, ${expiresAt}, false)
    `;
        return token;
    },
    resetPasswordWithToken: async (token, newPassword)=>{
        await ensureTables();
        const now = new Date().toISOString();
        const result = await sql`
      SELECT * FROM password_resets
      WHERE token = ${token} AND used = false AND expires_at > ${now}
      LIMIT 1
    `;
        const row = result.rows[0];
        if (!row) {
            return false;
        }
        const passwordHash = hashPassword(newPassword);
        await sql`
      UPDATE users
      SET password_hash = ${passwordHash}
      WHERE id = ${row.user_id}
    `;
        await sql`
      UPDATE password_resets
      SET used = true
      WHERE id = ${row.id}
    `;
        return true;
    },
    getRecipes: async ()=>{
        await ensureTables();
        const result = await sql`
      SELECT * FROM recipes ORDER BY title ASC
    `;
        return result.rows.map(mapRecipe);
    },
    getLatestRecipes: async (limit = 4)=>{
        await ensureTables();
        const result = await sql`
      SELECT * FROM recipes ORDER BY id DESC LIMIT ${limit}
    `;
        return result.rows.map(mapRecipe);
    },
    getRecipe: async (slug)=>{
        await ensureTables();
        try {
            const result = await sql`
        SELECT * FROM recipes WHERE slug = ${slug} LIMIT 1
      `;
            const row = result.rows[0];
            if (!row) return null;
            return mapRecipe(row);
        } catch (error) {
            console.error('Error loading recipe from database', slug, error);
            return null;
        }
    },
    createRecipe: async (recipeData)=>{
        await ensureTables();
        const existing = await db.getRecipe(recipeData.slug);
        if (existing) {
            throw new Error('Recipe with this slug already exists');
        }
        const id = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID();
        const rating = 0;
        const reviewCount = 0;
        await sql`
      INSERT INTO recipes (
        id,
        slug,
        title,
        state,
        region,
        prep_time,
        cook_time,
        servings,
        description,
        ingredients,
        instructions,
        image_url,
        rating,
        review_count,
        dietary
      )
      VALUES (
        ${id},
        ${recipeData.slug},
        ${recipeData.title},
        ${recipeData.state},
        ${recipeData.region},
        ${recipeData.prepTime},
        ${recipeData.cookTime},
        ${recipeData.servings},
        ${recipeData.description},
        ${JSON.stringify(recipeData.ingredients)},
        ${JSON.stringify(recipeData.instructions)},
        ${recipeData.imageUrl},
        ${rating},
        ${reviewCount},
        ${JSON.stringify(recipeData.dietary)}
      )
    `;
        const recipe = {
            ...recipeData,
            id,
            rating,
            reviewCount
        };
        return recipe;
    },
    updateRecipe: async (slug, updates)=>{
        await ensureTables();
        const existing = await db.getRecipe(slug);
        if (!existing) return null;
        const { id, rating, reviewCount, ...restExisting } = existing;
        const merged = {
            ...existing,
            ...updates,
            id: existing.id
        };
        await sql`
      UPDATE recipes
      SET
        title = ${merged.title},
        state = ${merged.state},
        region = ${merged.region},
        prep_time = ${merged.prepTime},
        cook_time = ${merged.cookTime},
        servings = ${merged.servings},
        description = ${merged.description},
        ingredients = ${JSON.stringify(merged.ingredients)},
        instructions = ${JSON.stringify(merged.instructions)},
        image_url = ${merged.imageUrl},
        rating = ${merged.rating ?? 0},
        review_count = ${merged.reviewCount ?? 0},
        dietary = ${JSON.stringify(merged.dietary)}
      WHERE slug = ${slug}
    `;
        return merged;
    },
    deleteRecipe: async (slug)=>{
        await ensureTables();
        const result = await sql`
      DELETE FROM recipes WHERE slug = ${slug}
    `;
        const rowCount = result.rowCount ?? 0;
        return rowCount > 0;
    },
    createGeneratedRecipe: async (userId, data)=>{
        await ensureTables();
        const id = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID();
        const createdAt = new Date().toISOString();
        await sql`
      INSERT INTO generated_recipes (
        id,
        user_id,
        title,
        description,
        prep_time,
        cook_time,
        servings,
        ingredients,
        instructions,
        tips,
        prompt,
        image_url,
        created_at
      )
      VALUES (
        ${id},
        ${userId},
        ${data.title},
        ${data.description},
        ${data.prepTime},
        ${data.cookTime},
        ${data.servings},
        ${JSON.stringify(data.ingredients)},
        ${JSON.stringify(data.instructions)},
        ${data.tips ?? null},
        ${data.prompt ?? null},
        ${data.imageUrl ?? null},
        ${createdAt}
      )
    `;
        const saved = {
            ...data,
            id,
            userId,
            createdAt
        };
        return saved;
    },
    getUserGeneratedRecipes: async (userId)=>{
        await ensureTables();
        const result = await sql`
      SELECT * FROM generated_recipes
      WHERE user_id = ${userId}
      ORDER BY created_at DESC
    `;
        return result.rows.map(mapGeneratedRecipe);
    },
    getGeneratedRecipeCountForUser: async (userId)=>{
        await ensureTables();
        const result = await sql`
      SELECT COUNT(*)::int AS count
      FROM generated_recipes
      WHERE user_id = ${userId}
    `;
        const row = result.rows[0];
        return row?.count ?? 0;
    },
    deleteGeneratedRecipeForUser: async (userId, id)=>{
        await ensureTables();
        const result = await sql`
      DELETE FROM generated_recipes
      WHERE user_id = ${userId} AND id = ${id}
      RETURNING *
    `;
        const row = result.rows[0];
        if (!row) {
            return null;
        }
        return mapGeneratedRecipe(row);
    },
    deleteOldestGeneratedRecipeForUser: async (userId)=>{
        await ensureTables();
        const result = await sql`
      SELECT id
      FROM generated_recipes
      WHERE user_id = ${userId}
      ORDER BY created_at ASC
      LIMIT 1
    `;
        const row = result.rows[0];
        if (!row) return false;
        const del = await sql`
      DELETE FROM generated_recipes
      WHERE id = ${row.id}
    `;
        const rowCount = del.rowCount ?? 0;
        return rowCount > 0;
    }
};
(async ()=>{
    try {
        await ensureTables();
        const adminEmail = 'admin@indiankitchen.com';
        const existing = await db.findUserByEmail(adminEmail);
        if (!existing) {
            await db.createUser(adminEmail, 'admin123', 'Admin User', 'admin');
        }
    } catch (e) {}
})();
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[project]/app/api/genie/saved/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$sharp__$5b$external$5d$__$28$sharp$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$sharp$29$__ = __turbopack_context__.i("[externals]/sharp [external] (sharp, cjs, [project]/node_modules/sharp)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
async function GET() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const sessionId = cookieStore.get('session_id')?.value;
    if (!sessionId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Unauthorized'
        }, {
            status: 401
        });
    }
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].getSession(sessionId);
    if (!session) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Unauthorized'
        }, {
            status: 401
        });
    }
    const recipes = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].getUserGeneratedRecipes(session.userId);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        recipes
    });
}
async function POST(request) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const sessionId = cookieStore.get('session_id')?.value;
    if (!sessionId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Unauthorized'
        }, {
            status: 401
        });
    }
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].getSession(sessionId);
    if (!session) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Unauthorized'
        }, {
            status: 401
        });
    }
    const body = await request.json();
    const { title, description, prepTime, cookTime, servings, ingredients, instructions, tips, prompt, imageUrl } = body;
    if (!title || !description || !prepTime || !cookTime || !servings || !Array.isArray(ingredients) || !Array.isArray(instructions)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Invalid recipe data'
        }, {
            status: 400
        });
    }
    const existingCount = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].getGeneratedRecipeCountForUser(session.userId);
    if (existingCount >= 3) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Aap sirf 3 Genie recipes save kar sakte hain. Nayi recipe save karne se pehle ek purani recipe delete karein.'
        }, {
            status: 400
        });
    }
    let optimizedImageUrl = undefined;
    if (typeof imageUrl === 'string' && imageUrl.length > 0) {
        if (imageUrl.startsWith('data:image')) {
            const match = imageUrl.match(/^data:(image\/[a-zA-Z0-9+.-]+);base64,(.+)$/);
            if (match) {
                const base64Data = match[2];
                try {
                    const buffer = Buffer.from(base64Data, 'base64');
                    const uploadDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'genie');
                    try {
                        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["mkdir"])(uploadDir, {
                            recursive: true
                        });
                    } catch  {}
                    const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.webp`;
                    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(uploadDir, filename);
                    try {
                        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$sharp__$5b$external$5d$__$28$sharp$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$sharp$29$__["default"])(buffer).resize(1200, 1200, {
                            fit: 'inside',
                            withoutEnlargement: true
                        }).webp({
                            quality: 75,
                            effort: 6,
                            smartSubsample: true
                        }).toFile(filePath);
                    } catch  {
                        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["writeFile"])(filePath, buffer);
                    }
                    optimizedImageUrl = `/genie/${filename}`;
                } catch  {}
            }
        } else if (imageUrl.startsWith('/')) {
            optimizedImageUrl = imageUrl;
        }
    }
    const saved = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].createGeneratedRecipe(session.userId, {
        title,
        description,
        prepTime,
        cookTime,
        servings,
        ingredients,
        instructions,
        tips,
        prompt,
        imageUrl: optimizedImageUrl
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        recipe: saved
    });
}
async function DELETE(request) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const sessionId = cookieStore.get('session_id')?.value;
    if (!sessionId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Unauthorized'
        }, {
            status: 401
        });
    }
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].getSession(sessionId);
    if (!session) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Unauthorized'
        }, {
            status: 401
        });
    }
    const body = await request.json();
    const { id } = body ?? {};
    if (!id || typeof id !== 'string') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Invalid recipe id'
        }, {
            status: 400
        });
    }
    const deleted = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].deleteGeneratedRecipeForUser(session.userId, id);
    if (!deleted) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Recipe not found'
        }, {
            status: 404
        });
    }
    try {
        if (deleted.imageUrl && typeof deleted.imageUrl === 'string') {
            const relativePath = deleted.imageUrl.replace(/^\/+/, '');
            const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', relativePath);
            try {
                const { unlink } = await __turbopack_context__.A("[externals]/fs/promises [external] (fs/promises, cjs, async loader)");
                await unlink(filePath);
            } catch  {}
        }
    } catch  {}
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2fec522c._.js.map