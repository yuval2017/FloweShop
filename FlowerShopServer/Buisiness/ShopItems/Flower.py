from typing import List

from Buisiness.ShopItems.ShopItem import ShopItem


class Flower(ShopItem):

    def __init__(self, key: int, name: str, price, description: str, img_url: str, category: str, flower_type: str,
                 colors: List[str]):
        super().__init__(key, name, price, description, img_url, category)
        self._flower_type: str = flower_type
        self._colors: List[str] = colors

    @property
    def flower_type(self):
        return self._flower_type

    @flower_type.setter
    def flower_type(self, new_flower_type):
        self._flower_type = new_flower_type

    @property
    def colors(self):
        return self._colors

    @colors.setter
    def colors(self, new_colors):
        self._colors = new_colors

    def get_item_dict(self) -> dict:
        item_dict = super().get_item_dict()
        item_dict['type'] = self.flower_type
        item_dict['colors'] = self.colors
        return item_dict
