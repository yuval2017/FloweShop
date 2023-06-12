from abc import ABC, abstractmethod


class ShopItem(ABC):
    def __init__(self, key: int, name: str, price, description: str, img_url: str, category: str):
        self._key: int = key
        self._name: str = name
        self._category: str = category
        self._image_url = img_url
        self._description = description
        self._price = price

    @property
    def key(self):
        return self._key

    @key.setter
    def key(self, new_key):
        self._key = new_key

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, new_name):
        self._name = new_name

    @property
    def category(self):
        return self._category

    @category.setter
    def category(self, new_category):
        self._category = new_category

    @property
    def image_url(self):
        return self._image_url

    @image_url.setter
    def image_url(self, new_img_url):
        self._image_url = new_img_url

    @property
    def description(self):
        return self._description

    @description.setter
    def description(self, new_description):
        self._description = new_description

    @property
    def price(self):
        return self._price

    @price.setter
    def price(self, new_price):
        self._price = new_price

    @abstractmethod
    def get_item_dict(self) -> dict:
        return {
            'key': self.key,
            'name': self.name,
            'category': self.category,
            'imageUrl': self._image_url,
            "price": self.price
        }
