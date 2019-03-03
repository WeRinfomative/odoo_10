odoo.define('search_by_variants.form_common', function (require) {
	"use strict";

	var form_common = require('web.form_common');
	var utils = require('web.utils')

	form_common.CompletionFieldMixin.init=function(){
    	this.limit = 10;
        this.orderer = new utils.DropMisordered();
        this.can_create = this.node.attrs.can_create || true;
        this.can_write = this.node.attrs.can_write || true;
    	}
});