from Buisiness.ShopItemsController import ShopItemsController


class Facade:
    def __init__(self):
        self._shop_items_controller = ShopItemsController()

    @property
    def shop_items_controller(self):
        return self._shop_items_controller

    def get_home_items(self):
        return self.shop_items_controller.get_home_items()

    def get_items_by_category(self, category: str):
        return self.shop_items_controller.filter_by_category(category)
