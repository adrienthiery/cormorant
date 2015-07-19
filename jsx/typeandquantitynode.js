/* Thing > Intangible > StructuredValue > TypeAndQuantityNode - A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './action', './businessfunction', './creativework', './product', './imageobject'], function(React, Action, BusinessFunction, CreativeWork, Product, ImageObject){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var props = this.props.props;
      var potentialAction;
      if( props.potentialAction ){
        if( props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.potentialAction ){
            potentialAction.push( ( <Action {...props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ props.potentialAction } /> );        }
      }
      var description;
      if( props.description ){
        if( props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description = ( <div data-advice='Put your HTML here. description is a Text.'></div> );
        }
      }
      var sameAs;
      if( props.sameAs ){
        if( props.sameAs instanceof Array ){
          sameAs = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.sameAs ){
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
          }
        } else {
            sameAs = ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> );
        }
      }
      var businessFunction;
      if( props.businessFunction ){
        if( props.businessFunction instanceof Array ){
          businessFunction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.businessFunction ){
            businessFunction.push( ( <BusinessFunction {...props.businessFunction } /> ) );          }
        } else {
          businessFunction = ( <BusinessFunction props={ props.businessFunction } /> );        }
      }
      var unitText;
      if( props.unitText ){
        if( props.unitText instanceof Array ){
          unitText = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.unitText ){
            unitText.push( ( <div data-advice='Put your HTML here. unitText is a Text.'></div> ) );
          }
        } else {
            unitText = ( <div data-advice='Put your HTML here. unitText is a Text.'></div> );
        }
      }
      var url;
      if( props.url ){
        if( props.url instanceof Array ){
          url = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.url ){
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
          }
        } else {
            url = ( <div data-advice='Put your HTML here. url is a URL.'></div> );
        }
      }
      var amountOfThisGood;
      if( props.amountOfThisGood ){
        if( props.amountOfThisGood instanceof Array ){
          amountOfThisGood = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.amountOfThisGood ){
            amountOfThisGood.push( ( <div data-advice='Put your HTML here. amountOfThisGood is a Number.'></div> ) );
          }
        } else {
            amountOfThisGood = ( <div data-advice='Put your HTML here. amountOfThisGood is a Number.'></div> );
        }
      }
      var unitCode;
      if( props.unitCode ){
        if( props.unitCode instanceof Array ){
          unitCode = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.unitCode ){
            unitCode.push( ( <div data-advice='Put your HTML here. unitCode is a Text or
URL.'></div> ) );
          }
        } else {
            unitCode = ( <div data-advice='Put your HTML here. unitCode is a Text or
URL.'></div> );
        }
      }
      var mainEntityOfPage;
      if( props.mainEntityOfPage ){
        if( props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> ) );
          }
        } else {
            mainEntityOfPage = ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> );
        }
      }
      var additionalType;
      if( props.additionalType ){
        if( props.additionalType instanceof Array ){
          additionalType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.additionalType ){
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
          }
        } else {
            additionalType = ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> );
        }
      }
      var alternateName;
      if( props.alternateName ){
        if( props.alternateName instanceof Array ){
          alternateName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.alternateName ){
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
          }
        } else {
            alternateName = ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> );
        }
      }
      var image;
      if( props.image ){
        if( props.image instanceof Array ){
          image = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.image ){
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
          }
        } else {
            image = ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> );
        }
      }
      var typeOfGood;
      if( props.typeOfGood ){
        if( props.typeOfGood instanceof Array ){
          typeOfGood = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.typeOfGood ){
            typeOfGood.push( ( <Product {...props.typeOfGood } /> ) );          }
        } else {
          typeOfGood = ( <Product props={ props.typeOfGood } /> );        }
      }
      var name;
      if( props.name ){
        if( props.name instanceof Array ){
          name = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in props.name ){
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
          }
        } else {
            name = ( <div data-advice='Put your HTML here. name is a Text.'></div> );
        }
      }
      return (<div title='TypeAndQuantityNode' className='TypeAndQuantityNode entity'>
        { potentialAction }
        { description }
        { sameAs }
        { businessFunction }
        { unitText }
        { url }
        { amountOfThisGood }
        { unitCode }
        { mainEntityOfPage }
        { additionalType }
        { alternateName }
        { image }
        { typeOfGood }
        { name }
     </div>);
    }
  });
});
