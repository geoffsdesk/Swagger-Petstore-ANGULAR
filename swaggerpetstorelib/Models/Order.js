/**
 *SwaggerPetstoreLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 12/15/2016
 */
/**
 * Creates a instance of Order
 *
 * @constructor
 */

angular.module('SwaggerPetstoreLib').factory('Order',function(BaseModel){
	var Order = function(obj) {
		if(!obj){
						this.id = null;     
    				this.petId = null;     
    				this.quantity = null;     
    				this.shipDate = null;     
    				this.status = null;     
    				this.complete  = false;     
    													
		}
		else
		{
					this.id = obj.id;
    		this.petId = obj.petId;
    		this.quantity = obj.quantity;
    		this.shipDate = new Date(obj.shipDate);
    		this.status = obj.status;
    		this.complete = obj.complete;
 
		}
	}

	Order.prototype = new BaseModel();
	Order.prototype.constructor = Order;

		/**
	 * TODO: Write general description for this method
	 *
	 * @return {long|null}
	 */
	Order.prototype.getId = function() {
		return this.id;
	};

	/**
	 * Setter for Id
	 * 
	 * @param {long|null} value 
	 */
	Order.prototype.setId = function(value) {
		this.id = value;
	};

		/**
	 * TODO: Write general description for this method
	 *
	 * @return {long|null}
	 */
	Order.prototype.getPetId = function() {
		return this.petId;
	};

	/**
	 * Setter for PetId
	 * 
	 * @param {long|null} value 
	 */
	Order.prototype.setPetId = function(value) {
		this.petId = value;
	};

		/**
	 * TODO: Write general description for this method
	 *
	 * @return {int|null}
	 */
	Order.prototype.getQuantity = function() {
		return this.quantity;
	};

	/**
	 * Setter for Quantity
	 * 
	 * @param {int|null} value 
	 */
	Order.prototype.setQuantity = function(value) {
		this.quantity = value;
	};

		/**
	 * TODO: Write general description for this method
	 *
	 * @return {DateTime|null}
	 */
	Order.prototype.getShipDate = function() {
		return this.shipDate;
	};

	/**
	 * Setter for ShipDate
	 * 
	 * @param {DateTime|null} value 
	 */
	Order.prototype.setShipDate = function(value) {
		this.shipDate = value;
	};

		/**
	 * Order Status
	 *
	 * @return {StatusEnum|null}
	 */
	Order.prototype.getStatus = function() {
		return this.status;
	};

	/**
	 * Setter for Status
	 * 
	 * @param {StatusEnum|null} value 
	 */
	Order.prototype.setStatus = function(value) {
		this.status = value;
	};

		/**
	 * TODO: Write general description for this method
	 *
	 * @return {bool|null}
	 */
	Order.prototype.getComplete = function() {
		return this.complete;
	};

	/**
	 * Setter for Complete
	 * 
	 * @param {bool|null} value 
	 */
	Order.prototype.setComplete = function(value) {
		this.complete = value;
	};

	
	return Order;
});