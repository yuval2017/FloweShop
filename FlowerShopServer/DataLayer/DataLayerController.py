from DataLayer.FakeData import FakeData


class DataLayerController:

    def get_all_home_items(self):
        return FakeData.get_home_flowers()

    def get_items_by_category(self, category: str):
        return FakeData.get_flowers_by_category(category)

    def get_item(self, item_id):
        return FakeData.get_flower(item_id)
