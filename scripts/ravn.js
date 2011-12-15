//Here is the jquery that is powered by filter.js

var fJS;
jQuery(document).ready(function($) {

//let's check all the categories by default. 

   $('#category_all').closest('ul').children().find(':checkbox').attr('checked', true);

   $('#category_all').click(function(){
     $(this).closest('ul').children().find(':checkbox').attr('checked', $(this).is(':checked'));
   }); 
   
//Give life to the price slider

   $('#price_filter').val('0-500');
   $('#price_range_label').html('$0-$500');
   $( "#price_slider" ).slider({
      range:true,
      min: 0,
      max: 1000,
      values:[0, 250],
      step: 5,
      slide: function( event, ui ) {
        $( "#price_range_label" ).html('$' + ui.values[ 0 ] + ' - $' + ui.values[ 1 ] + '<br \>' );
        $('#price_filter').val(ui.values[0] + '-' + ui.values[1]);
        $('#price_filter').trigger('change');
      }   
   });
   
//Give life to the timeline slider

   $('#timeleft_filter').val('0-3');
   $('#timeleft_range_label').html('0 days - 3 days');
   $( "#timeleft_slider" ).slider({
      range:true,
      min: 0,
      max: 10,
      values:[0, 3],
      slide: function( event, ui ) {
        $( "#timeleft_range_label" ).html(ui.values[ 0 ] + ' days - ' + ui.values[ 1 ] + ' days' );
        $('#timeleft_filter').val(ui.values[0] + '-' + ui.values[1]);
         fJS.filter();
      }   
   });

   fJS = filterInit(); //call the filterInit function we've created below
});

function filterInit(filter_type){  //create a filter function based on the parameters set by filter.js file

  var calulate_day_left = function(days){
    if(days == 0) return 'Last Day';
    else if(days == 1) return '1 day Left';
    else return days + ' day Left';
  };

//set the view up

  var view = function(service){
    service.timeleft = Math.floor(Math.random()*10);
    var service_title = service.title.length < 40 ? service.title : service.title.substring(0,40) +'...';
    var type_name = service.type.name.length < 40 ? service.type.name : service.type.name.substring(0,40) +'...';
    
    clear     = this.div({'class': 'clear'});
	fs_price  = this.div({'class': 'fs_price'}, service.thumbnail);
    fs_price  = this.div({'class': 'fs_price'}, '$' + service.amount );
    fs_head   = this.span({'class': 'fs_head'}, service_title);
    fs_for    = this.span({'class': 'fs_in'}, 'in');
    fs_disc   = this.span({'class': 'fs_disc'}, type_name);
    time_left   = this.span({'class': 'fs_disc'},  calulate_day_left(service.timeleft));
    fs_left   = this.div({'class': 'fs_left'}, [fs_head, fs_for, fs_disc, time_left]);
    fs_box    = this.div({'class': 'fs_box'}, [fs_left, fs_price, clear ] );

    return this.link('/demo/' + service.to_param ,{'title': service.title}, fs_box); //creates links based on the search result
  };

  var settings = {
      filter_criteria: {
          category: ['#category_list input:checkbox .EVENT.click .SELECT.:checked', 'service_categories.ARRAY.category_id'],
          amount: ['#price_filter .EVENT.change .SELECT.:input .TYPE.range', 'amount'],
          timeleft: ['#timeleft_filter .EVENT.change .SELECT.:input .TYPE.range', 'timeleft']
          },
       and_filter_on: true //If any filter selection is zero then select none. For 'OR' filter set 'false'
  };

/*The filter.js also works with mustache.js. I didn't include mustache for my purposes butI just wanted to show the possibility that it is fully integrated, because if the delete the below code, the functionality will break.  */

  if(filter_type!== 'mustache'){
    return FilterJS(services, "#service_list", view, settings);
  }

  
}

