/* Thing > Intangible > Demand - A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services. For describing demand using this type, the very same properties used for Offer apply.. Generated automatically by the reactGenerator. */ 
 define(['../bower_components/react/react', './itemavailability', './geoshape', './product', './warrantypromise', './offeritemcondition', './businessentitytype', './businessfunction', './pricespecification', './deliverymethod', './quantitativevalue', './person', './typeandquantitynode', './place', './creativework', './action', './organization', './datetime', './paymentmethod', './imageobject'], function(React, ItemAvailability, GeoShape, Product, WarrantyPromise, OfferItemCondition, BusinessEntityType, BusinessFunction, PriceSpecification, DeliveryMethod, QuantitativeValue, Person, TypeAndQuantityNode, Place, CreativeWork, Action, Organization, DateTime, PaymentMethod, ImageObject){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var warranty;
      if( this.props.warranty ){
        if( this.props.warranty instanceof Array ){
          warranty = [(React.createElement("p", null, "warranty:") )];
          for( i in this.props.warranty ){
            warranty.push( ( React.createElement(WarrantyPromise, {props:  this.props.warranty}) ) );          }
        } else {
          warranty = ( React.createElement(WarrantyPromise, {props:  this.props.warranty}) );        }
      }
      var ineligibleRegion;
      if( this.props.ineligibleRegion ){
        if( this.props.ineligibleRegion instanceof Array ){
          ineligibleRegion = [(React.createElement("p", null, "ineligibleRegion:") )];
          for( i in this.props.ineligibleRegion ){
            ineligibleRegion.push( ( React.createElement("div", {class: "ineligibleRegion"}) ) );
          }
        } else {
          ineligibleRegion = ( React.createElement("div", {class: "ineligibleRegion"}, this.props.ineligibleRegion) );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [(React.createElement("p", null, "sameAs:") )];
          for( i in this.props.sameAs ){
            sameAs.push( ( React.createElement("div", {class: "sameAs"}) ) );
          }
        } else {
          sameAs = ( React.createElement("div", {class: "sameAs"}, this.props.sameAs) );
        }
      }
      var eligibleRegion;
      if( this.props.eligibleRegion ){
        if( this.props.eligibleRegion instanceof Array ){
          eligibleRegion = [(React.createElement("p", null, "eligibleRegion:") )];
          for( i in this.props.eligibleRegion ){
            eligibleRegion.push( ( React.createElement("div", {class: "eligibleRegion"}) ) );
          }
        } else {
          eligibleRegion = ( React.createElement("div", {class: "eligibleRegion"}, this.props.eligibleRegion) );
        }
      }
      var businessFunction;
      if( this.props.businessFunction ){
        if( this.props.businessFunction instanceof Array ){
          businessFunction = [(React.createElement("p", null, "businessFunction:") )];
          for( i in this.props.businessFunction ){
            businessFunction.push( ( React.createElement(BusinessFunction, {props:  this.props.businessFunction}) ) );          }
        } else {
          businessFunction = ( React.createElement(BusinessFunction, {props:  this.props.businessFunction}) );        }
      }
      var deliveryLeadTime;
      if( this.props.deliveryLeadTime ){
        if( this.props.deliveryLeadTime instanceof Array ){
          deliveryLeadTime = [(React.createElement("p", null, "deliveryLeadTime:") )];
          for( i in this.props.deliveryLeadTime ){
            deliveryLeadTime.push( ( React.createElement(QuantitativeValue, {props:  this.props.deliveryLeadTime}) ) );          }
        } else {
          deliveryLeadTime = ( React.createElement(QuantitativeValue, {props:  this.props.deliveryLeadTime}) );        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [(React.createElement("p", null, "additionalType:") )];
          for( i in this.props.additionalType ){
            additionalType.push( ( React.createElement("div", {class: "additionalType"}) ) );
          }
        } else {
          additionalType = ( React.createElement("div", {class: "additionalType"}, this.props.additionalType) );
        }
      }
      var availability;
      if( this.props.availability ){
        if( this.props.availability instanceof Array ){
          availability = [(React.createElement("p", null, "availability:") )];
          for( i in this.props.availability ){
            availability.push( ( React.createElement(ItemAvailability, {props:  this.props.availability}) ) );          }
        } else {
          availability = ( React.createElement(ItemAvailability, {props:  this.props.availability}) );        }
      }
      var inventoryLevel;
      if( this.props.inventoryLevel ){
        if( this.props.inventoryLevel instanceof Array ){
          inventoryLevel = [(React.createElement("p", null, "inventoryLevel:") )];
          for( i in this.props.inventoryLevel ){
            inventoryLevel.push( ( React.createElement(QuantitativeValue, {props:  this.props.inventoryLevel}) ) );          }
        } else {
          inventoryLevel = ( React.createElement(QuantitativeValue, {props:  this.props.inventoryLevel}) );        }
      }
      var includesObject;
      if( this.props.includesObject ){
        if( this.props.includesObject instanceof Array ){
          includesObject = [(React.createElement("p", null, "includesObject:") )];
          for( i in this.props.includesObject ){
            includesObject.push( ( React.createElement(TypeAndQuantityNode, {props:  this.props.includesObject}) ) );          }
        } else {
          includesObject = ( React.createElement(TypeAndQuantityNode, {props:  this.props.includesObject}) );        }
      }
      var gtin14;
      if( this.props.gtin14 ){
        if( this.props.gtin14 instanceof Array ){
          gtin14 = [(React.createElement("p", null, "gtin14:") )];
          for( i in this.props.gtin14 ){
            gtin14.push( ( React.createElement("div", {class: "gtin14"}) ) );
          }
        } else {
          gtin14 = ( React.createElement("div", {class: "gtin14"}, this.props.gtin14) );
        }
      }
      var seller;
      if( this.props.seller ){
        if( this.props.seller instanceof Array ){
          seller = [(React.createElement("p", null, "seller:") )];
          for( i in this.props.seller ){
            seller.push( ( React.createElement("div", {class: "seller"}) ) );
          }
        } else {
          seller = ( React.createElement("div", {class: "seller"}, this.props.seller) );
        }
      }
      var availabilityStarts;
      if( this.props.availabilityStarts ){
        if( this.props.availabilityStarts instanceof Array ){
          availabilityStarts = [(React.createElement("p", null, "availabilityStarts:") )];
          for( i in this.props.availabilityStarts ){
            availabilityStarts.push( ( React.createElement(DateTime, {props:  this.props.availabilityStarts}) ) );          }
        } else {
          availabilityStarts = ( React.createElement(DateTime, {props:  this.props.availabilityStarts}) );        }
      }
      var eligibleDuration;
      if( this.props.eligibleDuration ){
        if( this.props.eligibleDuration instanceof Array ){
          eligibleDuration = [(React.createElement("p", null, "eligibleDuration:") )];
          for( i in this.props.eligibleDuration ){
            eligibleDuration.push( ( React.createElement(QuantitativeValue, {props:  this.props.eligibleDuration}) ) );          }
        } else {
          eligibleDuration = ( React.createElement(QuantitativeValue, {props:  this.props.eligibleDuration}) );        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [(React.createElement("p", null, "mainEntityOfPage:") )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( React.createElement("div", {class: "mainEntityOfPage"}) ) );
          }
        } else {
          mainEntityOfPage = ( React.createElement("div", {class: "mainEntityOfPage"}, this.props.mainEntityOfPage) );
        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [(React.createElement("p", null, "image:") )];
          for( i in this.props.image ){
            image.push( ( React.createElement("div", {class: "image"}) ) );
          }
        } else {
          image = ( React.createElement("div", {class: "image"}, this.props.image) );
        }
      }
      var itemOffered;
      if( this.props.itemOffered ){
        if( this.props.itemOffered instanceof Array ){
          itemOffered = [(React.createElement("p", null, "itemOffered:") )];
          for( i in this.props.itemOffered ){
            itemOffered.push( ( React.createElement(Product, {props:  this.props.itemOffered}) ) );          }
        } else {
          itemOffered = ( React.createElement(Product, {props:  this.props.itemOffered}) );        }
      }
      var sku;
      if( this.props.sku ){
        if( this.props.sku instanceof Array ){
          sku = [(React.createElement("p", null, "sku:") )];
          for( i in this.props.sku ){
            sku.push( ( React.createElement("div", {class: "sku"}) ) );
          }
        } else {
          sku = ( React.createElement("div", {class: "sku"}, this.props.sku) );
        }
      }
      var availableAtOrFrom;
      if( this.props.availableAtOrFrom ){
        if( this.props.availableAtOrFrom instanceof Array ){
          availableAtOrFrom = [(React.createElement("p", null, "availableAtOrFrom:") )];
          for( i in this.props.availableAtOrFrom ){
            availableAtOrFrom.push( ( React.createElement(Place, {props:  this.props.availableAtOrFrom}) ) );          }
        } else {
          availableAtOrFrom = ( React.createElement(Place, {props:  this.props.availableAtOrFrom}) );        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [(React.createElement("p", null, "description:") )];
          for( i in this.props.description ){
            description.push( ( React.createElement("div", {class: "description"}) ) );
          }
        } else {
          description = ( React.createElement("div", {class: "description"}, this.props.description) );
        }
      }
      var mpn;
      if( this.props.mpn ){
        if( this.props.mpn instanceof Array ){
          mpn = [(React.createElement("p", null, "mpn:") )];
          for( i in this.props.mpn ){
            mpn.push( ( React.createElement("div", {class: "mpn"}) ) );
          }
        } else {
          mpn = ( React.createElement("div", {class: "mpn"}, this.props.mpn) );
        }
      }
      var eligibleCustomerType;
      if( this.props.eligibleCustomerType ){
        if( this.props.eligibleCustomerType instanceof Array ){
          eligibleCustomerType = [(React.createElement("p", null, "eligibleCustomerType:") )];
          for( i in this.props.eligibleCustomerType ){
            eligibleCustomerType.push( ( React.createElement(BusinessEntityType, {props:  this.props.eligibleCustomerType}) ) );          }
        } else {
          eligibleCustomerType = ( React.createElement(BusinessEntityType, {props:  this.props.eligibleCustomerType}) );        }
      }
      var priceSpecification;
      if( this.props.priceSpecification ){
        if( this.props.priceSpecification instanceof Array ){
          priceSpecification = [(React.createElement("p", null, "priceSpecification:") )];
          for( i in this.props.priceSpecification ){
            priceSpecification.push( ( React.createElement(PriceSpecification, {props:  this.props.priceSpecification}) ) );          }
        } else {
          priceSpecification = ( React.createElement(PriceSpecification, {props:  this.props.priceSpecification}) );        }
      }
      var acceptedPaymentMethod;
      if( this.props.acceptedPaymentMethod ){
        if( this.props.acceptedPaymentMethod instanceof Array ){
          acceptedPaymentMethod = [(React.createElement("p", null, "acceptedPaymentMethod:") )];
          for( i in this.props.acceptedPaymentMethod ){
            acceptedPaymentMethod.push( ( React.createElement(PaymentMethod, {props:  this.props.acceptedPaymentMethod}) ) );          }
        } else {
          acceptedPaymentMethod = ( React.createElement(PaymentMethod, {props:  this.props.acceptedPaymentMethod}) );        }
      }
      var eligibleTransactionVolume;
      if( this.props.eligibleTransactionVolume ){
        if( this.props.eligibleTransactionVolume instanceof Array ){
          eligibleTransactionVolume = [(React.createElement("p", null, "eligibleTransactionVolume:") )];
          for( i in this.props.eligibleTransactionVolume ){
            eligibleTransactionVolume.push( ( React.createElement(PriceSpecification, {props:  this.props.eligibleTransactionVolume}) ) );          }
        } else {
          eligibleTransactionVolume = ( React.createElement(PriceSpecification, {props:  this.props.eligibleTransactionVolume}) );        }
      }
      var gtin8;
      if( this.props.gtin8 ){
        if( this.props.gtin8 instanceof Array ){
          gtin8 = [(React.createElement("p", null, "gtin8:") )];
          for( i in this.props.gtin8 ){
            gtin8.push( ( React.createElement("div", {class: "gtin8"}) ) );
          }
        } else {
          gtin8 = ( React.createElement("div", {class: "gtin8"}, this.props.gtin8) );
        }
      }
      var eligibleQuantity;
      if( this.props.eligibleQuantity ){
        if( this.props.eligibleQuantity instanceof Array ){
          eligibleQuantity = [(React.createElement("p", null, "eligibleQuantity:") )];
          for( i in this.props.eligibleQuantity ){
            eligibleQuantity.push( ( React.createElement(QuantitativeValue, {props:  this.props.eligibleQuantity}) ) );          }
        } else {
          eligibleQuantity = ( React.createElement(QuantitativeValue, {props:  this.props.eligibleQuantity}) );        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [(React.createElement("p", null, "potentialAction:") )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( React.createElement(Action, {props:  this.props.potentialAction}) ) );          }
        } else {
          potentialAction = ( React.createElement(Action, {props:  this.props.potentialAction}) );        }
      }
      var itemCondition;
      if( this.props.itemCondition ){
        if( this.props.itemCondition instanceof Array ){
          itemCondition = [(React.createElement("p", null, "itemCondition:") )];
          for( i in this.props.itemCondition ){
            itemCondition.push( ( React.createElement(OfferItemCondition, {props:  this.props.itemCondition}) ) );          }
        } else {
          itemCondition = ( React.createElement(OfferItemCondition, {props:  this.props.itemCondition}) );        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [(React.createElement("p", null, "alternateName:") )];
          for( i in this.props.alternateName ){
            alternateName.push( ( React.createElement("div", {class: "alternateName"}) ) );
          }
        } else {
          alternateName = ( React.createElement("div", {class: "alternateName"}, this.props.alternateName) );
        }
      }
      var availabilityEnds;
      if( this.props.availabilityEnds ){
        if( this.props.availabilityEnds instanceof Array ){
          availabilityEnds = [(React.createElement("p", null, "availabilityEnds:") )];
          for( i in this.props.availabilityEnds ){
            availabilityEnds.push( ( React.createElement(DateTime, {props:  this.props.availabilityEnds}) ) );          }
        } else {
          availabilityEnds = ( React.createElement(DateTime, {props:  this.props.availabilityEnds}) );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [(React.createElement("p", null, "name:") )];
          for( i in this.props.name ){
            name.push( ( React.createElement("div", {class: "name"}) ) );
          }
        } else {
          name = ( React.createElement("div", {class: "name"}, this.props.name) );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [(React.createElement("p", null, "url:") )];
          for( i in this.props.url ){
            url.push( ( React.createElement("div", {class: "url"}) ) );
          }
        } else {
          url = ( React.createElement("div", {class: "url"}, this.props.url) );
        }
      }
      var serialNumber;
      if( this.props.serialNumber ){
        if( this.props.serialNumber instanceof Array ){
          serialNumber = [(React.createElement("p", null, "serialNumber:") )];
          for( i in this.props.serialNumber ){
            serialNumber.push( ( React.createElement("div", {class: "serialNumber"}) ) );
          }
        } else {
          serialNumber = ( React.createElement("div", {class: "serialNumber"}, this.props.serialNumber) );
        }
      }
      var availableDeliveryMethod;
      if( this.props.availableDeliveryMethod ){
        if( this.props.availableDeliveryMethod instanceof Array ){
          availableDeliveryMethod = [(React.createElement("p", null, "availableDeliveryMethod:") )];
          for( i in this.props.availableDeliveryMethod ){
            availableDeliveryMethod.push( ( React.createElement(DeliveryMethod, {props:  this.props.availableDeliveryMethod}) ) );          }
        } else {
          availableDeliveryMethod = ( React.createElement(DeliveryMethod, {props:  this.props.availableDeliveryMethod}) );        }
      }
      var advanceBookingRequirement;
      if( this.props.advanceBookingRequirement ){
        if( this.props.advanceBookingRequirement instanceof Array ){
          advanceBookingRequirement = [(React.createElement("p", null, "advanceBookingRequirement:") )];
          for( i in this.props.advanceBookingRequirement ){
            advanceBookingRequirement.push( ( React.createElement(QuantitativeValue, {props:  this.props.advanceBookingRequirement}) ) );          }
        } else {
          advanceBookingRequirement = ( React.createElement(QuantitativeValue, {props:  this.props.advanceBookingRequirement}) );        }
      }
      var gtin13;
      if( this.props.gtin13 ){
        if( this.props.gtin13 instanceof Array ){
          gtin13 = [(React.createElement("p", null, "gtin13:") )];
          for( i in this.props.gtin13 ){
            gtin13.push( ( React.createElement("div", {class: "gtin13"}) ) );
          }
        } else {
          gtin13 = ( React.createElement("div", {class: "gtin13"}, this.props.gtin13) );
        }
      }
      var gtin12;
      if( this.props.gtin12 ){
        if( this.props.gtin12 instanceof Array ){
          gtin12 = [(React.createElement("p", null, "gtin12:") )];
          for( i in this.props.gtin12 ){
            gtin12.push( ( React.createElement("div", {class: "gtin12"}) ) );
          }
        } else {
          gtin12 = ( React.createElement("div", {class: "gtin12"}, this.props.gtin12) );
        }
      }
      var validFrom;
      if( this.props.validFrom ){
        if( this.props.validFrom instanceof Array ){
          validFrom = [(React.createElement("p", null, "validFrom:") )];
          for( i in this.props.validFrom ){
            validFrom.push( ( React.createElement(DateTime, {props:  this.props.validFrom}) ) );          }
        } else {
          validFrom = ( React.createElement(DateTime, {props:  this.props.validFrom}) );        }
      }
      var validThrough;
      if( this.props.validThrough ){
        if( this.props.validThrough instanceof Array ){
          validThrough = [(React.createElement("p", null, "validThrough:") )];
          for( i in this.props.validThrough ){
            validThrough.push( ( React.createElement(DateTime, {props:  this.props.validThrough}) ) );          }
        } else {
          validThrough = ( React.createElement(DateTime, {props:  this.props.validThrough}) );        }
      }
      return (React.createElement("div", {title: "Demand", className: "Demand entity"}, 
         warranty, 
         ineligibleRegion, 
         sameAs, 
         eligibleRegion, 
         businessFunction, 
         deliveryLeadTime, 
         additionalType, 
         availability, 
         inventoryLevel, 
         includesObject, 
         gtin14, 
         seller, 
         availabilityStarts, 
         eligibleDuration, 
         mainEntityOfPage, 
         image, 
         itemOffered, 
         sku, 
         availableAtOrFrom, 
         description, 
         mpn, 
         eligibleCustomerType, 
         priceSpecification, 
         acceptedPaymentMethod, 
         eligibleTransactionVolume, 
         gtin8, 
         eligibleQuantity, 
         potentialAction, 
         itemCondition, 
         alternateName, 
         availabilityEnds, 
         name, 
         url, 
         serialNumber, 
         availableDeliveryMethod, 
         advanceBookingRequirement, 
         gtin13, 
         gtin12, 
         validFrom, 
         validThrough 
     ));
    }
  });
});