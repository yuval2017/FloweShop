from flask import Flask, jsonify
from Service.Facade import Facade

app = Flask(__name__)
facade = Facade()  # Create an instance of the Facade


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/api/Flowers/<int:key>', methods=['GET'])
def get_shopitem(key):
    # Retrieve the ShopItem based on the key using the Facade
    res_shopitem = facade.fetch_item(key)
    if res_shopitem.is_err_accured():
        return jsonify({'error': res_shopitem.err_message})
    # Convert the ShopItem to a dictionary
    return jsonify(res_shopitem.obj.get_item_dict())


@app.route('/api/home_items', methods=['GET'])
def get_home_items():
    # Fetch the home items using the Facade
    res_home_items = facade.fetch_home_items()
    if res_home_items.is_err_accured():
        return jsonify({'error': res_home_items.err_message})
    # Convert the home items to a list of dictionaries
    home_items_list = [item.get_item_dict() for item in res_home_items.obj]
    return jsonify(home_items_list)


@app.route('/api/items_by_category/<string:category>', methods=['GET'])
def get_items_by_category(category):
    # Fetch items by category using the Facade
    res_items = facade.fetch_items_by_category(category)
    if res_items.is_err_accured():
        return jsonify({'error': res_items.err_message})
    # Convert the items to a list of dictionaries
    items_list = [item.get_item_dict() for item in res_items.obj]
    return jsonify(items_list)


if __name__ == '__main__':
    app.run()
