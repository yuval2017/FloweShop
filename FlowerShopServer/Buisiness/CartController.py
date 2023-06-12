class CartController:
    def __init__(self):
        # cart key and the value its shopping cart.
        self._carts = dict()
        
    @property
    def carts(self):
        return self._carts

    @carts.setter
    def carts(self, carts):
        self._carts = carts

    def __getitem__(self, index):
        return self.carts[index]

    def __setitem__(self, index, value):
        self.carts[index] = value

    def __len__(self):
        return len(self.carts)
