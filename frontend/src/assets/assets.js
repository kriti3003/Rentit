import p_img1 from './p_img1.jpg'
import p_img2_1 from './p_img2_1.jpg'
import p_img2_2 from './p_img2_2.jpg'
import p_img2_3 from './p_img2_3.jpg'
import p_img2_4 from './p_img2_4.jpg'
import p_img3 from './p_img3.jpg'
import p_img4 from './p_img4.jpg'
import p_img5 from './p_img5.jpg'
import p_img6 from './p_img6.jpg'
import p_img7 from './p_img7.jpg'
import p_img8 from './p_img8.jpg'
import p_img9 from './p_img9.jpg'
import p_img10 from './p_img10.jpg'
import p_img11 from './p_img11.jpg'
import p_img12 from './p_img12.jpg'
import p_img13 from './p_img13.jpg'
import p_img14 from './p_img14.jpg'
import p_img15 from './p_img15.jpg'
import p_img16 from './p_img16.jpg'
import p_img17 from './p_img17.jpg'
import p_img18 from './p_img18.jpg'
import p_img19 from './p_img19.jpg'
import p_img20 from './p_img20.jpg'
import p_img21 from './p_img21.jpg'
import p_img22 from './p_img22.jpg'
import p_img23 from './p_img23.jpg'
import p_img24 from './p_img24.jpg'
import p_img25 from './p_img25.jpg'
import p_img26 from './p_img26.jpg'
import p_img27 from './p_img27.jpg'
import p_img28 from './p_img28.jpg'
import p_img29 from './p_img29.jpg'
import p_img30 from './p_img30.jpg'
import p_img31 from './p_img31.jpg'
import p_img32 from './p_img32.jpg'
import p_img33 from './p_img33.jpg'
import p_img34 from './p_img34.jpg'
import p_img35 from './p_img35.jpg'
import p_img36 from './p_img36.jpg'
import p_img37 from './p_img37.jpg'
import p_img38 from './p_img38.jpg'
import p_img39 from './p_img39.jpg'
import p_img40 from './p_img40.jpg'
import p_img41 from './p_img41.jpg'
import p_img42 from './p_img42.jpg'
import p_img43 from './p_img43.jpg'
import p_img44 from './p_img44.jpg'
import p_img45 from './p_img45.jpg'
import p_img46 from './p_img46.jpg'
import p_img47 from './p_img47.jpg'
import p_img48 from './p_img48.jpg'
import p_img49 from './p_img49.jpg'
import p_img50 from './p_img50.jpg'
import p_img51 from './p_img51.jpg'
import p_img52 from './p_img52.jpg'


import logo from './logo.png'
import hero_img from './hero_img.jpg'
import cart_icon from './cart_icon.jpg'
import bin_icon from './bin_icon.jpg'
import dropdown_icon from './dropdown_icon.jpg'
import exchange_icon from './exchange_icon.jpg'
import profile_icon from './profile_icon.jpg'
import quality_icon from './quality_icon.jpg'
import search_icon from './search_icon.jpg'
import star_dull_icon from './star_dull_icon.jpg'
import star_icon from './star_icon.jpg'
import support_icon from './support_icon.jpg'
import menu_icon from './menu_icon.jpg'
import about_icon from './about_icon.jpg'
import contact_icon from './contact_icon.jpg'
import razorpay_logo from './razorpay_logo.jpg'
import stripe_logo from './stripe_logo.jpg'
import cross_icon from './cross_icon.jpg'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_icon,
    menu_icon,
    about_icon,
    contact_icon,
    razorpay_logo,
    stripe_logo,
    cross_icon
};

export const products = [
    {
        _id: "aaa",
        name: "Women Top",
        description: "A lightweight, usually knitted top",
        price: 1000,
        image: [p_img1],
        category: "Women",
        subCategory: "topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaab",
        name: "Men Linen Shirt",
        description: "A lightweight, usually knitted shirt",
        price: 2000,
        image: [p_img2_1, p_img2_2, p_img2_3, p_img2_4],
        category: "Men",
        subCategory: "topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaac",
        name: "Straight Dress",
        description: "A straight, cotton dress",
        price: 4000,
        image: [p_img3],
        category: "Women",
        subCategory: "dress",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaad",
        name: "Casual T-Shirt",
        description: "Casual, comfortable T-shirt",
        price: 800,
        image: [p_img4],
        category: "Men",
        subCategory: "topwear",
        sizes: ["S", "M", "L"],
        date: 1716625345448,
        bestseller: false
    },
    {
        _id: "aaae",
        name: "Women Knit Top",
        description: "Soft, cozy knit top",
        price: 1200,
        image: [p_img5],
        category: "Women",
        subCategory: "topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaf",
        name: "Kid's cord set",
        description: "Lightweight, breathable",
        price: 1500,
        image: [p_img6],
        category: "Kids",
        subCategory: "topwear",
        sizes: ["M", "L", "XL"],
        date: 1716623345448,
        bestseller: false
    },
    {
        _id: "aaag",
        name: "Cotton Skirt",
        description: "Floral patterned, comfortable skirt",
        price: 1800,
        image: [p_img7],
        category: "Women",
        subCategory: "bottomwear",
        sizes: ["S", "M", "L"],
        date: 1716624345448,
        bestseller: false
    },
    {
        _id: "aaah",
        name: "Basic T-Shirt",
        description: "Essential, everyday T-shirt",
        price: 600,
        image: [p_img8],
        category: "Men",
        subCategory: "topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716625345448,
        bestseller: true
    },
    {
        _id: "aaai",
        name: "Kids dress",
        description: "Elegant, fitted for casual occasions",
        price: 5000,
        image: [p_img9],
        category: "Kids",
        subCategory: "outerwear",
        sizes: ["M", "L", "XL"],
        date: 1716626345448,
        bestseller: false
    },
    {
        _id: "aaaj",
        name: "Women's dress",
        description: "Comfortable, durable dress for casual wear",
        price: 1200,
        image: [p_img10],
        category: "Women",
        subCategory: "Dress",
        sizes: ["M", "L", "XL"],
        date: 1716627345448,
        bestseller: false
    },
    {
        _id: "aaak",
        name: "Women's Cardigan",
        description: "Cozy cardigan for winter",
        price: 3500,
        image: [p_img11],
        category: "Women",
        subCategory: "outerwear",
        sizes: ["S", "M", "L"],
        date: 1716628345448,
        bestseller: true
    },
    {
        _id: "aaal",
        name: "Men's Denim Jeans",
        description: "Classic fit jeans for everyday wear",
        price: 2500,
        image: [p_img12],
        category: "Men",
        subCategory: "bottomwear",
        sizes: ["M", "L", "XL"],
        date: 1716629345448,
        bestseller: true
    },
    {
        _id: "aaam",
        name: "Summer Dress",
        description: "Light and airy summer dress",
        price: 3000,
        image: [p_img13],
        category: "Women",
        subCategory: "dress",
        sizes: ["S", "M", "L", "XL"],
        date: 1716630345448,
        bestseller: false
    },
    {
        _id: "aaan",
        name: "Men's Sweatshirt",
        description: "Comfortable sweatshirt for cool weather",
        price: 1800,
        image: [p_img14],
        category: "Men",
        subCategory: "topwear",
        sizes: ["M", "L", "XL"],
        date: 1716631345448,
        bestseller: false
    },
    {
        _id: "aaao",
        name: "Women’s Maxi Dress",
        description: "Elegant dress for evening occasions",
        price: 4500,
        image: [p_img15],
        category: "Women",
        subCategory: "dress",
        sizes: ["M", "L"],
        date: 1716632345448,
        bestseller: true
    },
    {
        _id: "aaap",
        name: "Men’s Blazer",
        description: "Smart blazer for formal events",
        price: 5500,
        image: [p_img16],
        category: "Men",
        subCategory: "outerwear",
        sizes: ["M", "L", "XL"],
        date: 1716633345448,
        bestseller: true
    },
    {
        _id: "aaaq",
        name: "Women's Sweater",
        description: "Soft, warm sweater for winter",
        price: 2000,
        image: [p_img17],
        category: "Women",
        subCategory: "topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaar",
        name: "Men's Polo Shirt",
        description: "Classic polo for casual wear",
        price: 1500,
        image: [p_img18],
        category: "Men",
        subCategory: "topwear",
        sizes: ["M", "L", "XL"],
        date: 1716635345448,
        bestseller: true
    },
    {
        _id: "aaas",
        name: "Women's Casual Shorts",
        description: "Perfect for summer outings",
        price: 900,
        image: [p_img19],
        category: "Women",
        subCategory: "bottomwear",
        sizes: ["S", "M", "L"],
        date: 1716636345448,
        bestseller: true
    },
    {
        _id: "aaat",
        name: "Men's Hoodie",
        description: "Warm hoodie for casual wear",
        price: 2000,
        image: [p_img20],
        category: "Men",
        subCategory: "topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716637345448,
        bestseller: false
    },
    {
        _id: "aaau",
        name: "Women's Denim Jacket",
        description: "Stylish denim jacket",
        price: 3200,
        image: [p_img21],
        category: "Women",
        subCategory: "outerwear",
        sizes: ["S", "M", "L"],
        date: 1716638345448,
        bestseller: true
    },
    {
        _id: "aaav",
        name: "Men's Cargo Pants",
        description: "Durable cargo pants for outdoor activities",
        price: 2300,
        image: [p_img22],
        category: "Men",
        subCategory: "bottomwear",
        sizes: ["M", "L", "XL"],
        date: 1716639345448,
        bestseller: true
    },
    {
        _id: "aaaw",
        name: "Women’s Scarf",
        description: "Warm, woolen scarf for winter",
        price: 500,
        image: [p_img23],
        category: "Women",
        subCategory: "accessory",
        sizes: ["One Size"],
        date: 1716640345448,
        bestseller: false
    },
    {
        _id: "aaax",
        name: "Men's Leather Belt",
        description: "High-quality leather belt for men",
        price: 700,
        image: [p_img24],
        category: "Men",
        subCategory: "accessory",
        sizes: ["One Size"],
        date: 1716641345448,
        bestseller: false
    },
    {
        _id: "aaay",
        name: "Women’s Sunglasses",
        description: "Stylish sunglasses for women",
        price: 1500,
        image: [p_img25],
        category: "Women",
        subCategory: "accessory",
        sizes: ["One Size"],
        date: 1716642345448,
        bestseller: true
    },
    {
        _id: "aaaz",
        name: "Men’s Beanie",
        description: "Cozy beanie for winter",
        price: 400,
        image: [p_img26],
        category: "Men",
        subCategory: "accessory",
        sizes: ["One Size"],
        date: 1716643345448,
        bestseller: false
    },
    {
        _id: "aaba",
        name: "Women's Crossbody Bag",
        description: "Compact crossbody bag",
        price: 2500,
        image: [p_img27],
        category: "Women",
        subCategory: "accessory",
        sizes: ["One Size"],
        date: 1716644345448,
        bestseller: true
    },
    {
        _id: "aabb",
        name: "Men's Dress Shoes",
        description: "Elegant dress shoes for formal occasions",
        price: 5000,
        image: [p_img28],
        category: "Men",
        subCategory: "outerwear",
        sizes: ["7", "8", "9", "10", "11"],
        date: 1716645345448,
        bestseller: false
    },
    {
        _id: "aabc",
        name: "Women’s Sandals",
        description: "Comfortable, stylish sandals",
        price: 1800,
        image: [p_img29],
        category: "Women",
        subCategory: "outerwear",
        sizes: ["6", "7", "8", "9"],
        date: 1716646345448,
        bestseller: false
    },
    {
        _id: "aabd",
        name: "Men's Sports Watch",
        description: "Durable, water-resistant sports watch",
        price: 3200,
        image: [p_img30],
        category: "Men",
        subCategory: "accessory",
        sizes: ["One Size"],
        date: 1716647345448,
        bestseller: true
    },
    {
        _id: "aabe",
        name: "Women’s Wool Hat",
        description: "Warm wool hat for cold weather",
        price: 800,
        image: [p_img31],
        category: "Women",
        subCategory: "accessory",
        sizes: ["One Size"],
        date: 1716648345448,
        bestseller: false
    },
    {
        _id: "aabf",
        name: "Men’s Formal Tie",
        description: "Silk tie for formal occasions",
        price: 600,
        image: [p_img32],
        category: "Men",
        subCategory: "accessory",
        sizes: ["One Size"],
        date: 1716649345448,
        bestseller: true
    },
    {
        _id: "aabg",
        name: "Women’s Clutch Bag",
        description: "Elegant clutch bag for evening wear",
        price: 2000,
        image: [p_img33],
        category: "Women",
        subCategory: "accessory",
        sizes: ["One Size"],
        date: 1716650345448,
        bestseller: true
    },
    {
        _id: "aabh",
        name: "Men’s Trench Coat",
        description: "Classic trench coat for winter",
        price: 6500,
        image: [p_img34],
        category: "Men",
        subCategory: "outerwear",
        sizes: ["M", "L", "XL"],
        date: 1716651345448,
        bestseller: false
    },
    {
        _id: "aabi",
        name: "Women's Ankle Boots",
        description: "Stylish ankle boots",
        price: 4500,
        image: [p_img35],
        category: "Women",
        subCategory: "outerwear",
        sizes: ["6", "7", "8", "9"],
        date: 1716652345448,
        bestseller: false
    },
    {
        _id: "aabj",
        name: "Men’s Bomber Jacket",
        description: "Trendy bomber jacket",
        price: 4000,
        image: [p_img36],
        category: "Men",
        subCategory: "outerwear",
        sizes: ["M", "L", "XL"],
        date: 1716653345448,
        bestseller: true
    },
    {
        _id: "aabk",
        name: "Women’s Blouse",
        description: "Chic blouse for daily wear",
        price: 1600,
        image: [p_img37],
        category: "Women",
        subCategory: "topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716654345448,
        bestseller: true
    },
    {
        _id: "aabl",
        name: "Men’s Casual Sneakers",
        description: "Lightweight, comfortable sneakers",
        price: 3000,
        image: [p_img38],
        category: "Men",
        subCategory: "bottomwear",
        sizes: ["8", "9", "10", "11"],
        date: 1716655345448,
        bestseller: false
    },
    {
        _id: "aabm",
        name: "Women's Winter Scarf",
        description: "Warm scarf for winter days",
        price: 900,
        image: [p_img39],
        category: "Women",
        subCategory: "accessory",
        sizes: ["One Size"],
        date: 1716656345448,
        bestseller: false
    },
    {
        _id: "aabn",
        name: "Men's Knit Sweater",
        description: "Warm knit sweater for cool weather",
        price: 2500,
        image: [p_img40],
        category: "Men",
        subCategory: "topwear",
        sizes: ["M", "L", "XL"],
        date: 1716657345448,
        bestseller: true
    },
    {
        _id: "aabo",
        name: "Women’s Pearl Necklace",
        description: "Elegant pearl necklace for formal occasions",
        price: 3000,
        image: [p_img41],
        category: "Women",
        subCategory: "accessory",
        sizes: ["One Size"],
        date: 1716658345448,
        bestseller: true
    },
    {
        _id: "aabp",
        name: "Men’s Wool Scarf",
        description: "Soft wool scarf for winter",
        price: 1200,
        image: [p_img42],
        category: "Men",
        subCategory: "accessory",
        sizes: ["One Size"],
        date: 1716659345448,
        bestseller: false
    },
    {
        _id: "aabq",
        name: "Women's Cocktail Dress",
        description: "Elegant cocktail dress for parties",
        price: 5000,
        image: [p_img43],
        category: "Women",
        subCategory: "dress",
        sizes: ["S", "M", "L"],
        date: 1716660345448,
        bestseller: true
    },
    {
        _id: "aabr",
        name: "Men's Joggers",
        description: "Comfortable joggers for workouts",
        price: 2000,
        image: [p_img44],
        category: "Men",
        subCategory: "bottomwear",
        sizes: ["M", "L", "XL"],
        date: 1716661345448,
        bestseller: false
    },
    {
        _id: "aabs",
        name: "Women's Leather Gloves",
        description: "Elegant leather gloves for winter",
        price: 1700,
        image: [p_img45],
        category: "Women",
        subCategory: "accessory",
        sizes: ["S", "M", "L"],
        date: 1716662345448,
        bestseller: false
    },
    {
        _id: "aabt",
        name: "Men’s Leather Jacket",
        description: "Classic leather jacket for men",
        price: 7000,
        image: [p_img46],
        category: "Men",
        subCategory: "outerwear",
        sizes: ["M", "L", "XL"],
        date: 1716663345448,
        bestseller: true
    },
    {
        _id: "aabu",
        name: "Women's Formal Pants",
        description: "Elegant formal pants for work",
        price: 3000,
        image: [p_img47],
        category: "Women",
        subCategory: "bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716664345448,
        bestseller: true
    }
];
