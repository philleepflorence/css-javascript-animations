var Animate = function()
{
  
  var speed = 500,
      isTransitions = Modernizr.csstransitions,
      transitionEndEvents = 'webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd transitionend';

  var animate = function(object, cssProperties, duration, callback) 
  {
    duration = duration || speed;
  
    if (isTransitions) 
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
