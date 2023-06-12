# static data:
from Buisiness.ShopItems.Flower import Flower

data = [
    {"key": 1, "name": "Modest Explorer", "price": 60, "description": "des", "imageUrl": 'Bouquet_1.jpeg',
     "category": "blossom", "type": "bouquet", "colors": ["green"]},
    {"key": 2, "name": "Beach Bum", "price": 80, "description": "des", "imageUrl": 'Bouquet_2.jpeg',
     "category": "blossom", "type": "bouquet", "colors": ["green"]},
    {"key": 3, "name": "Reliable Red", "price": 100, "description": "des", "imageUrl": 'Bouquet_3.jpeg',
     "category": "blossom", "type": "bouquet", "colors": ["green"]},
    {"key": 4, "name": "Dreamfinder", "price": 65, "description": "des", "imageUrl": 'Bouquet_4.jpeg',
     "category": "blossom", "type": "bouquet", "colors": ["green"]},
    {"key": 5, "name": "The Cruiser", "price": 120, "description": "des", "imageUrl": 'Bouquet_5.jpeg',
     "category": "blossom", "type": "bouquet", "colors": ["green"]},
    {"key": 6, "name": "Green Wonder", "price": 70, "description": "des", "imageUrl": 'Bouquet_6.png',
     "category": "blossom", "type": "bouquet", "colors": ["green"]},
    {"key": 7, "name": "Green Wonder", "price": 70, "description": "des", "imageUrl": 'Flowerpot_1.png',
     "category": "flowerpot", "type": "orchid", "colors": ["green"]},
    {"key": 8, "name": "Green Wonder", "price": 70, "description": "des", "imageUrl": 'Flowerpot_2.png',
     "category": "flowerpot", "type": "orchid", "colors": ["green"]},
    {"key": 9, "name": "Green Wonder", "price": 70, "description": "des", "imageUrl": 'Flowerpot_3.png',
     "category": "flowerpot", "type": "orchid", "colors": ["green"]},
    {"key": 10, "name": "Green Wonder", "price": 70, "description": "des", "imageUrl": 'Flowerpot_4.png',
     "category": "flowerpot", "type": "1", "colors": ["green"]},
    {"key": 11, "name": "Green Wonder", "price": 70, "description": "des", "imageUrl": 'Flowerpot_5.png',
     "category": "flowerpot", "type": "1", "colors": ["green"]},
    {"key": 12, "name": "Green Wonder", "price": 70, "description": "des", "imageUrl": 'Flowerpot_6.png',
     "category": "flowerpot", "type": "1", "colors": ["green"]},
    {"key": 13, "name": "Green Wonder", "price": 70, "description": "des", "imageUrl": 'Flowerpot_7.png',
     "category": "flowerpot", "type": "1", "colors": ["green"]}
]
set_flowers = {"blossom", "flowerpot"}


class FakeData:
    @staticmethod
    def get_home_flowers():
        ans = []
        for dict in data:
            if dict.get("category") in set_flowers:
                ans.append(Flower(*dict.values()))
        return ans

    @staticmethod
    def get_flower(key):
        for dict in data:
            if key == dict.get("key"):
                return Flower(*dict.values())

    @staticmethod
    def get_flowers_by_category(category):
        ans = []
        for dict in data:
            if dict.get("category") == str(category):
                ans.append(Flower(*dict.values()))
        return ans
