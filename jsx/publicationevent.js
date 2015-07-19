/* Thing > Event > PublicationEvent - A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media.. Generated automatically by the reactGenerator. */
 define(['../bower_components/react/react', './action', './language', './person', './broadcastservice', './offer', './imageobject', './event', './datetime', './aggregaterating', './boolean', './place', './duration', './organization', './postaladdress', './creativework', './review', './eventstatustype'], function(React, Action, Language, Person, BroadcastService, Offer, ImageObject, Event, DateTime, AggregateRating, Boolean, Place, Duration, Organization, PostalAddress, CreativeWork, Review, EventStatusType){
  return React.createClass({
    getDefaultProps: function(){
      return {
      }
    },
    render: function(){
      var inLanguage;
      if( this.props.inLanguage ){
        if( this.props.inLanguage instanceof Array ){
          inLanguage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.inLanguage ){
            inLanguage.push( ( <div data-advice='Put your HTML here. inLanguage is a Language or
Text.'></div> ) );
          }
        } else {
            inLanguage.push( ( <div data-advice='Put your HTML here. inLanguage is a Language or
Text.'></div> ) );
        }
      }
      var performer;
      if( this.props.performer ){
        if( this.props.performer instanceof Array ){
          performer = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.performer ){
            performer.push( ( <div data-advice='Put your HTML here. performer is a Person or
Organization.'></div> ) );
          }
        } else {
            performer.push( ( <div data-advice='Put your HTML here. performer is a Person or
Organization.'></div> ) );
        }
      }
      var endDate;
      if( this.props.endDate ){
        if( this.props.endDate instanceof Array ){
          endDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.endDate ){
            endDate.push( ( <div data-advice='Put your HTML here. endDate is a Date.'></div> ) );
          }
        } else {
            endDate.push( ( <div data-advice='Put your HTML here. endDate is a Date.'></div> ) );
        }
      }
      var startDate;
      if( this.props.startDate ){
        if( this.props.startDate instanceof Array ){
          startDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.startDate ){
            startDate.push( ( <div data-advice='Put your HTML here. startDate is a Date.'></div> ) );
          }
        } else {
            startDate.push( ( <div data-advice='Put your HTML here. startDate is a Date.'></div> ) );
        }
      }
      var sameAs;
      if( this.props.sameAs ){
        if( this.props.sameAs instanceof Array ){
          sameAs = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.sameAs ){
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
          }
        } else {
            sameAs.push( ( <div data-advice='Put your HTML here. sameAs is a URL.'></div> ) );
        }
      }
      var workPerformed;
      if( this.props.workPerformed ){
        if( this.props.workPerformed instanceof Array ){
          workPerformed = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.workPerformed ){
            workPerformed.push( ( <CreativeWork props={ this.props.workPerformed } /> ) );          }
        } else {
          workPerformed = ( <CreativeWork props={ this.props.workPerformed } /> );        }
      }
      var isAccessibleForFree;
      if( this.props.isAccessibleForFree ){
        if( this.props.isAccessibleForFree instanceof Array ){
          isAccessibleForFree = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.isAccessibleForFree ){
            isAccessibleForFree.push( ( <Boolean props={ this.props.isAccessibleForFree } /> ) );          }
        } else {
          isAccessibleForFree = ( <Boolean props={ this.props.isAccessibleForFree } /> );        }
      }
      var aggregateRating;
      if( this.props.aggregateRating ){
        if( this.props.aggregateRating instanceof Array ){
          aggregateRating = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.aggregateRating ){
            aggregateRating.push( ( <AggregateRating props={ this.props.aggregateRating } /> ) );          }
        } else {
          aggregateRating = ( <AggregateRating props={ this.props.aggregateRating } /> );        }
      }
      var typicalAgeRange;
      if( this.props.typicalAgeRange ){
        if( this.props.typicalAgeRange instanceof Array ){
          typicalAgeRange = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.typicalAgeRange ){
            typicalAgeRange.push( ( <div data-advice='Put your HTML here. typicalAgeRange is a Text.'></div> ) );
          }
        } else {
            typicalAgeRange.push( ( <div data-advice='Put your HTML here. typicalAgeRange is a Text.'></div> ) );
        }
      }
      var duration;
      if( this.props.duration ){
        if( this.props.duration instanceof Array ){
          duration = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.duration ){
            duration.push( ( <Duration props={ this.props.duration } /> ) );          }
        } else {
          duration = ( <Duration props={ this.props.duration } /> );        }
      }
      var additionalType;
      if( this.props.additionalType ){
        if( this.props.additionalType instanceof Array ){
          additionalType = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.additionalType ){
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
          }
        } else {
            additionalType.push( ( <div data-advice='Put your HTML here. additionalType is a URL.'></div> ) );
        }
      }
      var organizer;
      if( this.props.organizer ){
        if( this.props.organizer instanceof Array ){
          organizer = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.organizer ){
            organizer.push( ( <div data-advice='Put your HTML here. organizer is a Person or
Organization.'></div> ) );
          }
        } else {
            organizer.push( ( <div data-advice='Put your HTML here. organizer is a Person or
Organization.'></div> ) );
        }
      }
      var doorTime;
      if( this.props.doorTime ){
        if( this.props.doorTime instanceof Array ){
          doorTime = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.doorTime ){
            doorTime.push( ( <DateTime props={ this.props.doorTime } /> ) );          }
        } else {
          doorTime = ( <DateTime props={ this.props.doorTime } /> );        }
      }
      var previousStartDate;
      if( this.props.previousStartDate ){
        if( this.props.previousStartDate instanceof Array ){
          previousStartDate = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.previousStartDate ){
            previousStartDate.push( ( <div data-advice='Put your HTML here. previousStartDate is a Date.'></div> ) );
          }
        } else {
            previousStartDate.push( ( <div data-advice='Put your HTML here. previousStartDate is a Date.'></div> ) );
        }
      }
      var review;
      if( this.props.review ){
        if( this.props.review instanceof Array ){
          review = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.review ){
            review.push( ( <Review props={ this.props.review } /> ) );          }
        } else {
          review = ( <Review props={ this.props.review } /> );        }
      }
      var offers;
      if( this.props.offers ){
        if( this.props.offers instanceof Array ){
          offers = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.offers ){
            offers.push( ( <Offer props={ this.props.offers } /> ) );          }
        } else {
          offers = ( <Offer props={ this.props.offers } /> );        }
      }
      var location;
      if( this.props.location ){
        if( this.props.location instanceof Array ){
          location = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.location ){
            location.push( ( <div data-advice='Put your HTML here. location is a Place or
PostalAddress.'></div> ) );
          }
        } else {
            location.push( ( <div data-advice='Put your HTML here. location is a Place or
PostalAddress.'></div> ) );
        }
      }
      var mainEntityOfPage;
      if( this.props.mainEntityOfPage ){
        if( this.props.mainEntityOfPage instanceof Array ){
          mainEntityOfPage = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.mainEntityOfPage ){
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> ) );
          }
        } else {
            mainEntityOfPage.push( ( <div data-advice='Put your HTML here. mainEntityOfPage is a CreativeWork or
URL.'></div> ) );
        }
      }
      var publishedOn;
      if( this.props.publishedOn ){
        if( this.props.publishedOn instanceof Array ){
          publishedOn = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.publishedOn ){
            publishedOn.push( ( <BroadcastService props={ this.props.publishedOn } /> ) );          }
        } else {
          publishedOn = ( <BroadcastService props={ this.props.publishedOn } /> );        }
      }
      var image;
      if( this.props.image ){
        if( this.props.image instanceof Array ){
          image = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.image ){
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
          }
        } else {
            image.push( ( <div data-advice='Put your HTML here. image is a URL or
ImageObject.'></div> ) );
        }
      }
      var attendee;
      if( this.props.attendee ){
        if( this.props.attendee instanceof Array ){
          attendee = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.attendee ){
            attendee.push( ( <div data-advice='Put your HTML here. attendee is a Person or
Organization.'></div> ) );
          }
        } else {
            attendee.push( ( <div data-advice='Put your HTML here. attendee is a Person or
Organization.'></div> ) );
        }
      }
      var description;
      if( this.props.description ){
        if( this.props.description instanceof Array ){
          description = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.description ){
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
          }
        } else {
            description.push( ( <div data-advice='Put your HTML here. description is a Text.'></div> ) );
        }
      }
      var superEvent;
      if( this.props.superEvent ){
        if( this.props.superEvent instanceof Array ){
          superEvent = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.superEvent ){
            superEvent.push( ( <Event props={ this.props.superEvent } /> ) );          }
        } else {
          superEvent = ( <Event props={ this.props.superEvent } /> );        }
      }
      var recordedIn;
      if( this.props.recordedIn ){
        if( this.props.recordedIn instanceof Array ){
          recordedIn = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.recordedIn ){
            recordedIn.push( ( <CreativeWork props={ this.props.recordedIn } /> ) );          }
        } else {
          recordedIn = ( <CreativeWork props={ this.props.recordedIn } /> );        }
      }
      var subEvent;
      if( this.props.subEvent ){
        if( this.props.subEvent instanceof Array ){
          subEvent = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.subEvent ){
            subEvent.push( ( <Event props={ this.props.subEvent } /> ) );          }
        } else {
          subEvent = ( <Event props={ this.props.subEvent } /> );        }
      }
      var alternateName;
      if( this.props.alternateName ){
        if( this.props.alternateName instanceof Array ){
          alternateName = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.alternateName ){
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
          }
        } else {
            alternateName.push( ( <div data-advice='Put your HTML here. alternateName is a Text.'></div> ) );
        }
      }
      var potentialAction;
      if( this.props.potentialAction ){
        if( this.props.potentialAction instanceof Array ){
          potentialAction = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.potentialAction ){
            potentialAction.push( ( <Action props={ this.props.potentialAction } /> ) );          }
        } else {
          potentialAction = ( <Action props={ this.props.potentialAction } /> );        }
      }
      var name;
      if( this.props.name ){
        if( this.props.name instanceof Array ){
          name = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.name ){
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
          }
        } else {
            name.push( ( <div data-advice='Put your HTML here. name is a Text.'></div> ) );
        }
      }
      var url;
      if( this.props.url ){
        if( this.props.url instanceof Array ){
          url = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.url ){
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
          }
        } else {
            url.push( ( <div data-advice='Put your HTML here. url is a URL.'></div> ) );
        }
      }
      var eventStatus;
      if( this.props.eventStatus ){
        if( this.props.eventStatus instanceof Array ){
          eventStatus = [( <div data-advice='HTML for the *head* of the section'></div> )];
          for( i in this.props.eventStatus ){
            eventStatus.push( ( <EventStatusType props={ this.props.eventStatus } /> ) );          }
        } else {
          eventStatus = ( <EventStatusType props={ this.props.eventStatus } /> );        }
      }
      return (<div title='PublicationEvent' className='PublicationEvent entity'>
        { inLanguage }
        { performer }
        { endDate }
        { startDate }
        { sameAs }
        { workPerformed }
        { isAccessibleForFree }
        { aggregateRating }
        { typicalAgeRange }
        { duration }
        { additionalType }
        { organizer }
        { doorTime }
        { previousStartDate }
        { review }
        { offers }
        { location }
        { mainEntityOfPage }
        { publishedOn }
        { image }
        { attendee }
        { description }
        { superEvent }
        { recordedIn }
        { subEvent }
        { alternateName }
        { potentialAction }
        { name }
        { url }
        { eventStatus }
     </div>);
    }
  });
});
