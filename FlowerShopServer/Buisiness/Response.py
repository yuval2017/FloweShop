class Response:
    def __init__(self, err_message=None, obj=None):
        self._err_message = err_message
        self._obj = obj

    @property
    def err_message(self):
        return self._err_message

    @property
    def obj(self):
        return self._obj

    def is_err_accured(self):
        return self._err_message is not None

