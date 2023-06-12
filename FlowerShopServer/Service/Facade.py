from Buisiness.ShopItemsController import ShopItemsController


class Facade:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self):
        if not hasattr(self, '_shop_items_controller'):
            self._shop_items_controller = ShopItemsController()

    @property
    def shop_items_controller(self):
        return self._shop_items_controller

    def fetch_home_items(self):
        return self.shop_items_controller.get_home_items()

    def fetch_items_by_category(self, category: str):
        return self.shop_items_controller.filter_by_category(category)

    def fetch_item(self, item_key):
        return self.shop_items_controller.get_item(item_key)
