from abc import ABC, abstractmethod
class ShopItem(ABC):
    def __init__(self, key: int, name: str, category: str):
        self._key: int = key
        self._name: str = name
        self._category: str = category

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

    def category(self, new_category):
        self._category = new_category

    @abstractmethod
    def get_item_dict(self) -> dict:
        return {
            'key': self.key,
            'name': self.name,
            'category': self.category
        }