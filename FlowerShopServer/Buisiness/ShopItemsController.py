from Buisiness.Response import Response
from DataLayer.DataLayerController import DataLayerController


class ShopItemsController:
    def __init__(self):
        self._items = {}
        self._data_layer_controller = DataLayerController()
        # the items in the home always in
        self._home_items = self._data_layer_controller.get_all_home_items()

    @property
    def items(self):
        return self._items

    @items.setter
    def items(self, new_items):
        self._items = new_items

    @property
    def home_items(self):
        return self._home_items

    @home_items.setter
    def home_items(self, new_home_items):
        self._home_items = new_home_items

    def filter_by_category(self, category: str):
        return Response(obj=self._data_layer_controller.get_items_by_category(category))

    # check if the item in the dict if not return it from db
    def get_item(self, item_key):
        if item_key in self._items:
            return Response(obj=self._items[item_key])
        # need also return response
        return Response(obj=self._data_layer_controller.get_item(item_key))

    def get_home_items(self):
        return Response(obj=self.home_items)
