from openerp import api, fields, models, _

class ProductProduct(models.Model):
    _inherit = 'product.product'
    
    @api.model
    def name_search(self, name, args=None, operator='ilike', limit=100):
        args = args or []
        product_id = self.search(['|',('attribute_value_ids.name','ilike',name),('name', 'ilike',name)])
        return product_id.name_get()