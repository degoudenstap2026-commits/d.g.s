const products = [
  {
    "id": 1,
    "name": "Nike Mercurial Vapor 16",
    "category": "voetbalschoenen",
    "price": 29.95,
    "image": "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 2,
    "name": "adidas Predator Elite",
    "category": "voetbalschoenen",
    "price": 37.45,
    "image": "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 3,
    "name": "Puma Future 9",
    "category": "voetbalschoenen",
    "price": 44.95,
    "image": "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 4,
    "name": "Grisport 803 S3",
    "category": "werkschoenen",
    "price": 52.45,
    "image": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 5,
    "name": "HKS RS 270 S3 BOA",
    "category": "werkgchoenen",
    "price": 59.95,
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 6,
    "name": "Steel Blue Parkes ZIP S3",
    "category": "werkschoenen",
    "price": 67.45,
    "image": "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 7,
    "name": "Nike Air Force 1 kindermaat",
    "category": "kinderen",
    "price": 74.95,
    "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 8,
    "name": "Adidas Campus 00s kindermaat",
    "category": "kinderen",
    "price": 82.45,
    "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 9,
    "name": "New Balance 530 kindermaat",
    "category": "kinderen",
    "price": 89.95,
    "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 10,
    "name": "Nike Air Force 1",
    "category": "sneakers",
    "price": 97.45,
    "image": "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 11,
    "name": "adidas Samba OG",
    "category": "sneakers",
    "price": 104.95,
    "image": "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 12,
    "name": "New Balance 530",
    "category": "sneakers",
    "price": 112.45,
    "image": "https://images.unsplash.com/photo-1554130840-ecf2e7d5e4b4?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 13,
    "name": "UGG Classic Mini Loafer",
    "category": "dames",
    "price": 119.95,
    "image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 14,
    "name": "Birkenstock Boston",
    "category": "dames",
    "price": 127.45,
    "image": "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 15,
    "name": "Clarks Wallabee",
    "category": "dames",
    "price": 134.95,
    "image": "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 16,
    "name": "Decathlon Aquashoes 100",
    "category": "waterschoenen",
    "price": 142.45,
    "image": "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 17,
    "name": "Speedo Zanpa",
    "category": "waterschoenen",
    "price": 149.95,
    "image": "https://images.unsplash.com/photo-1601924928370-3e5b2c6c3f07?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 18,
    "name": "Aqua Sphere Beachwalker",
    "category": "waterschoenen",
    "price": 157.45,
    "image": "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 19,
    "name": "Shoesme eerste loopschoenen",
    "category": "baby",
    "price": 164.95,
    "image": "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 20,
    "name": "Shoesme eerste loopschoenen jongens",
    "category": "baby",
    "price": 172.45,
    "image": "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 21,
    "name": "Shoesme sneakers",
    "category": "kinderen",
    "price": 179.95,
    "image": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 22,
    "name": "Adidas sportware badslippers",
    "category": "badslippers",
    "price": 187.45,
    "image": "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 23,
    "name": "Braziliaanse Havaianas Brasil Logo",
    "category": "badslippers",
    "price": 194.95,
    "image": "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 24,
    "name": "Nike Victori One",
    "category": "badslippers",
    "price": 202.45,
    "image": "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 25,
    "name": "Dr. Martens 1460",
    "category": "laarzen",
    "price": 209.95,
    "image": "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 26,
    "name": "Timberland 6 Inch Premium",
    "category": "laarzen",
    "price": 217.45,
    "image": "https://images.unsplash.com/photo-1529810313688-490d18e04c05?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 27,
    "name": "UGG Classic Ultra Mini",
    "category": "dames",
    "price": 224.95,
    "image": "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 28,
    "name": "Clarks Atticus",
    "category": "heren",
    "price": 232.45,
    "image": "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 29,
    "name": "Pier One zakelijke veterschoenen",
    "category": "heren",
    "price": 239.95,
    "image": "https://images.unsplash.com/photo-1616406432452-07bc5938759d?auto=format&fit=crop&w=900&q=85"
  },
  {
    "id": 30,
    "name": "Lloyd Core Plus",
    "category": "heren",
    "price": 247.45,
    "image": "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=85"
  }
];