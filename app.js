var Animate = function()
{
  
  var speed = 500,
  transitionEndEvents = 'webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd transitionend';

  var animate = function(object, cssProperties, callback, duration) 
  {
    duration = duration || speed;
  
    if (Modernizr.csstransitions) 
    {
      object.css("transition", "all " + duration + "ms ease-in-out");
  
      object.css(cssProperties);
  
      if ($.isFunction(callback)) 
      {
        object.bind(transitionEndEvents,function()
        {
          object.unbind(transitionEndEvents);
          callback();
        });  
      }  
    } 
    else 
    {
      if ($.isFunction(callback)) object.animate(cssProperties, duration, callback);
       
      else object.animate(cssProperties, duration);
    }
  }

}
