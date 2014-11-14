(function(ns, $, Widget) {

/**
 * @class app.ui.Background
 * @super Lavaca.ui.Widget
 * Global background animation widget
 *
 * @constructor
 *
 * @param {jQuery} el  The DOM element that is the root of the widget
 */
ns.Background = Widget.extend({
  /** 
   * @field {String} template
   * @default 'background'
   * The name of the template used by the global nav
   */
  template: 'background',

  /**
   * @method init
   * Sets background image
   *
   */
  init: function() {
    var el = this.el,
        iOSversion = function () {
            var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
            return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
        },
        template = this.template;
    if (/iPad/.test(navigator.platform) && iOSversion()[0] == 5 ) {
        template += '_low';
    }

    Lavaca.ui.Template.render(template, {}).then(function(html) {
      el.html(html);
    }).then(function() {
      el.find('li > span').each(function(ind, element) {
        $(element).css({backgroundImage: 'url(' + app.paintings[ind].src + ')'});
      });
    });
  },
  /**
   * @method toggleAnimations
   * Method toggles class that sets the animation transitions
   */
  toggleAnimations: function() {
    this.el.toggleClass('cb-slideshow');
  },
  /**
   * @method hide
   * Method hides the background slide animations
   */
  hide: function() {
    this.el.hide();
  },
  /**
   * @method show
   * Method shows the background slide animations
   */
  show: function() {
    this.el.show();
  }
});

})(Lavaca.resolve('app.ui', true), Lavaca.$, Lavaca.ui.Widget);