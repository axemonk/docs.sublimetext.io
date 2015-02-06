

class ApiHierarchicalVisitor(object):
    """
    A simple visitor that visits every element in the API.
    """

    def __init__(self, api):
        self.api = api

    def visit_api(self):
        for (_, m) in self.api.modules.items():
            self.visit_module(m)

    def visit_module(self, m):
        for f in m.functions:
            self.visit_function(f)

        for (_ , cls) in m.classes.items():
            self.visit_class(cls)

    def visit_class(self, cls):
        for m in cls.members:
            self.visit_member(m)

    def visit_function(self, f):
        pass

    def visit_member(self, m):
        pass
