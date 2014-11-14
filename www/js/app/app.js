/*
Lavaca 1.0.5
Copyright (c) 2012 Mutual Mobile

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function(Lavaca, $) {

/*
// Uncomment this section to use hash-based browser history instead of HTML5 history.
// You should use hash-based history if there's no server-side component supporting your app's routes.

Lavaca.net.History.overrideStandardsMode();
*/
var lastY;
document.addEventListener('touchmove', function(e) {
    var scrollable = false,
        items = $(e.target).parents(),
        currentY = e.touches[0].clientY;
    
    //$(items).each(function(i,o) {
    //    if($(o).attr('name') == 'volume') scrollable = true;
    //});
    if(!scrollable) {
      if ($(e.target).attr('name') == 'volume') scrollable = true;
    }
    
    if(currentY > lastY){
      scrollable = false;
    }else if (currentY < lastY) {
      scrollable = false;
    }
    
    lastY = currentY;
    
    
    if(!scrollable) e.preventDefault();
}, false);
/**
 * @class app
 * @super Lavaca.mvc.Application
 * Global application-specific object
 */
window.app = new Lavaca.mvc.Application(function() {
  // Setup offline AJAX handler
  Lavaca.net.Connectivity.registerOfflineAjaxHandler(app.onOfflineAjax);
  // Initialize the models cache
  app.models.init();
  //FOR BACKGROUNDS
  //app.background = new app.ui.Background('#cb-slideshow');
  //app.background.init();
  //INIT DB WITH NAME
  //app.store = new Lavaca.storage.LocalStore('someName', Lavaca.env.Device.mobileBrowser().blackberry ? {useCompression: false} : {});

  // Initialize the routes
  app.router.add({
    '/': [app.net.ExampleController, 'home'],
    '/lang': [app.net.ExampleController, 'lang']
  });
  // Initialize the loading indicator
  app.loadingIndicator = Lavaca.ui.LoadingIndicator.init();
  //app.loadingIndicator.className = 'spinner';
  app.loadingIndicator.el = $('.overlay-container');
  //FOR YOUR MUSIC
  /*
  app.menuMusic = new Media('/audio/happy_0.mp3', function () {
    app.playMenuMusic();
  });
  app.gameMusic = [];
  app.gameMusic.push('/audio/beauty_of_chaos_1.mp3');
  app.gameMusic.push('/audio/Happy_walk.mp3');
  app.gameMusic.push('/audio/Fallen.mp3');
  app.gameMusic.push('/audio/Momentum.mp3');
  app.gameMusic.push('/audio/rest_for_a_bit.mp3');
  app.currentSong = null;
  app.currentSongIndex = null;
  */
  //FOR FX SOUNDS
  /*
  app.buttonClickSound = new Media('/audio/button-start.mp3');
  app.buttonClickSound2 = new Media('/audio/button-click.mp3');
  app.correctSelectionSound = new Media('/audio/correct_selection.mp3');
  app.gameOverSound = new Media('/audio/game_over.mp3');
  app.endGameSound = new Media('/audio/end_of_game.mp3');
  
  app.menuMusic.paused = true;
  
  app.playSounds = app.store.get('playSounds') != null ? app.store.get('playSounds') : true;
  app.playMusic = app.store.get('playMusic') != null ? app.store.get('playMusic') : true;
  */
  //GET AND SET DIFFICULTY
  //app.difficulty = app.store.get('difficulty') != null ? app.store.get('difficulty') : 'easy';
  //GET AND SET APP VOLUME
  //app.volume =  app.store.get('volume') != null ? app.store.get('volume') : '0.5';
  
  //SET VOLUME FOR ALL APP SOUNDS
  /*
  app.menuMusic.setVolume(app.volume);
  app.buttonClickSound.setVolume(app.volume);
  app.buttonClickSound2.setVolume(app.volume);
  app.correctSelectionSound.setVolume(app.volume);
  app.gameOverSound.setVolume(app.volume);
  app.endGameSound.setVolume(app.volume);
  */
  //START APP MUSIC
  /*
  app.playMenuMusic = function() {
    if (app.playMusic) app.menuMusic.play();
    app.menuMusic.paused = false;
  }
  app.playGameMusic = function() {
    var t = null;
    
    if (!app.currentSongIndex) {
      app.currentSongIndex = Math.floor((Math.random()*5));
    } else {
      t = Math.floor((Math.random()*5));
      if (t == app.currentSongIndex) {
        t = Math.floor((Math.random()*5));
        if (t == app.currentSongIndex) {
          t = Math.floor((Math.random()*5));
          if (t == app.currentSongIndex) {
            t = Math.floor((Math.random()*5));
          }
        }
      }
      app.currentSongIndex = t;
    }
    app.currentSong = new Media(app.gameMusic[app.currentSongIndex], function () {
        app.playGameMusic();
    });
    app.currentSong.setVolume(app.volume);
    if (app.playMusic) app.currentSong.play();
  }
  app.pauseMenuMusic = function() {
    app.menuMusic.pause();
    app.menuMusic.paused = true;
  }
  app.pauseGameMusic = function() {
    if (app.currentSong) {
        app.currentSong.pause();
        app.currentSong.paused = true;
    }
  }*/
  //INIT FX SOUNDS
  /*
  app.playButtonClickSound = function() {
    if (app.playSounds) app.buttonClickSound.play();
  }
  app.pauseButtonClickSound = function() {
    app.buttonClickSound.pause();
  }
  app.playButtonClickSound2 = function() {
    if (app.playSounds) app.buttonClickSound2.play();
  }
  app.pauseButtonClickSound2 = function() {
    app.buttonClickSound2.pause();
  }
  app.playCorrectSelectionSound = function() {
    if (app.playSounds) app.correctSelectionSound.play();
  }
  app.playGameOverSound = function() {
    if (app.playSounds) app.gameOverSound.play();
  }
  app.playEndGameSound = function() {
    if (app.playSounds) app.endGameSound.play();
  }
  */
});

/**
 * @method showErrors
 * Shows the errors dialog
 *
 * @param {Array} errors  A list of error messages
 * @return {Lavaca.util.Promise}  A promise
 */
app.showErrors = function(errors) {
  return this.viewManager.load(null, app.ui.views.ErrorsView, {errors: errors}, 900);
};

/**
 * @method onOfflineAjax
 * Handles attempts to make an AJAX request when the application is offline
 */
app.onOfflineAjax = function() {
  //var hasLoaded = Lavaca.util.Translation.hasLoaded;
  //plugins.notification.alert(hasLoaded ? Lavaca.util.Translation.get('error_offline') : 'No internet connection available. Please check your settings and connection and try again.');
  return false;  
};
//SET APP PAUSED TO FALSE TO DEFAULT
app.paused = false;

})(Lavaca, Lavaca.$);