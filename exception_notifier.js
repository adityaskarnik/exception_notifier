define([
  'require',
  'jquery',
  'moment',
  'base/js/namespace',
  'base/js/events',
  'notebook/js/codecell'
  ], function (
    requirejs,
    $,
    moment,
    Jupyter,
    events,
    codecell) {
    "use strict";
  
    var CodeCell = codecell.CodeCell;

    var params = {
      sticky: true,
      play_sound: true
    };
    var audio_file = "./notify.mp3";
  
    var current_time = function() {
      return new Date().getTime() / 1000;
    };
  
    var play_notification_sound = function(opts) {
      try {
        var audio = new Audio(requirejs.toUrl(audio_file));
        audio.play();
      } catch(e) {
        console.log('HTML5 Audio not supported in browser.');
      }
    };
  
    var notify = function () {
        var opts = {
          body: "Exception",
          icon: Jupyter.notebook.base_url + "static/base/images/favicon.ico",
          requireInteraction: params.sticky
        };
        if (params.play_sound) {
          play_notification_sound(opts);
        }
    };
  
    function showNotification() {
      notify();
      const notification = new Notification("Exception Occurred", {
        body: "Exception occurred in a cell. Please check"
     })
    }
    function checkPermission() {
      if (Notification.permission === "granted") {
        // TODO add condition to check if exception has occurred
        var old_get_callbacks = CodeCell.prototype.get_callbacks;
        CodeCell.prototype.get_callbacks = function () {
            var callbacks = old_get_callbacks.apply(this, arguments);
            console.log("callbacks", callbacks);
            var cell = this;
            var prev_reply_callback = callbacks.shell.reply;
            console.log("prev_reply_callback", prev_reply_callback);
            callbacks.shell.reply = function (msg) {
            return prev_reply_callback(msg);
        };
        return callbacks;
          
        };
        showNotification();
     } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
          if (permission === "granted") {
            showNotification();
          }
           console.log(permission);
        });
     }
    }
    var load_ipython_extension = function () {
      return Jupyter.notebook.config.loaded.then(function() {
        $.extend(true, params, Jupyter.notebook.config.data.notify);
        checkPermission();
      });
    };
  
    return {
      load_ipython_extension : load_ipython_extension
    };
  
  });