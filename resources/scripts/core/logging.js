!function(){function e(e){var n=e?new Date(e):new Date,o=function(e){return 10>e?"0"+e:e};return o(n.getDate())+"-"+o(n.getMonth()+1)+"-"+n.getFullYear()}function n(e){return e?new Date(e).toLocaleTimeString("en-GB").replace(" ","_"):(new Date).toTimeString()}function o(o,t,i){!$.bot.isModuleEnabled("./core/fileSystem.js")||!g||i&&i.equalsIgnoreCase($.botName)||t.equalsIgnoreCase(".mods")||($.isDirectory("./logs/"+o)||$.mkDir("./logs/"+o),$.writeToFile(n()+" > "+t,"./logs/"+o+"/"+e()+".txt",!0))}function t(n,o,t){if($.bot.isModuleEnabled("./core/fileSystem.js")&&g){$.isDirectory("./logs/event")||$.mkDir("./logs/event"),$.fileExists("./logs/event/"+e()+".txt")||$.touchFile("./logs/event/"+e()+".txt");var i=new Date;$.writeToFile(i.toDateString()+" "+i.toTimeString()+"["+n+"#"+o+"] "+t,"./logs/event/"+e()+".txt",!0)}}function i(n,o,t){if($.bot.isModuleEnabled("./core/fileSystem.js")){$.isDirectory("./logs/error")||$.mkDir("./logs/error");var i=new Date;$.writeToFile(i.toDateString()+" "+i.toTimeString()+"["+n+"#"+o+"] "+t,"./logs/error/"+e()+".txt",!0)}}function s(n,o){$.isDirectory("./logs/chatModerator")||$.mkDir("./logs/chatModerator");var t=new Date;$.writeToFile(t.toDateString()+" "+t.toTimeString()+"["+n+"] "+o,"./logs/chatModerator/"+e()+".txt",!0)}var g=$.getIniDbBoolean("settings","loggingEnabled",!1);$.bind("ircChannelMessage",function(e){$.log("chat",""+e.getSender()+": "+e.getMessage())}),$.bind("ircPrivateMessage",function(e){var n=e.getSender().toLowerCase(),o=e.getMessage();if(-1==o.toLowerCase().indexOf("moderators if this room")&&$.log("privMsg",$.username.resolve(n)+": "+o,n),$.consoleDebug($.lang.get("console.received.irsprivmsg",n,o)),o=o.toLowerCase(),n.equalsIgnoreCase("jtv")&&(o.equalsIgnoreCase("clearchat")?$.logEvent("misc.js",333,$.lang.get("console.received.clearchat")):-1!=o.indexOf("clearchat")&&$.logEvent("misc.js",335,$.lang.get("console.received.purgetimeoutban",o.substring(10))),-1!=o.indexOf("now in slow mode")&&$.logEvent("misc.js",339,$.lang.get("console.received.slowmode.start",o.substring(o.indexOf("every")+6))),-1!=o.indexOf("no longer in slow mode")&&$.logEvent("misc.js",343,$.lang.get("console.received.slowmode.end")),-1!=o.indexOf("now in subscribers-only")&&$.logEvent("misc.js",347,$.lang.get("console.received.subscriberonly.start")),-1!=o.indexOf("no longer in subscribers-only")&&$.logEvent("misc.js",351,$.lang.get("console.received.subscriberonly.end")),-1!=o.indexOf("now in r9k")&&$.logEvent("misc.js",355,$.lang.get("console.received.r9k.start")),-1!=o.indexOf("no longer in r9k")&&$.logEvent("misc.js",359,$.lang.get("console.received.r9k.end")),-1!=o.indexOf("hosting"))){var t=o.substring(11,o.indexOf(".",12)).trim();t.equalsIgnoreCase("-")?($.bot.channelIsHosting=null,$.logEvent("misc.js",366,$.lang.get("console.received.host.end"))):($.bot.channelIsHosting=t,$.logEvent("misc.js",368,$.lang.get("console.received.host.start",t)))}}),$.bind("command",function(e){var n=e.getCommand(),o=e.getSender().toLowerCase(),t=$.username.resolve(o),i=e.getArgs(),s=i[0];if(n.equalsIgnoreCase("log")){if(!$.isAdmin(o))return void $.say($.whisperPrefix(o)+$.adminMsg);if(!s)return void(g?$.say($.whisperPrefix(o)+$.lang.get("logging.enabled")):$.say($.whisperPrefix(o)+$.lang.get("logging.disabled")));s.equalsIgnoreCase("enable")&&(g=!0,$.setIniDbBoolean("settings","loggingEnabled",g),$.logEvent("misc.js",84,t+" enabled logging"),$.say($.whisperPrefix(o)+$.lang.get("logging.enabled"))),s.equalsIgnoreCase("disable")&&(g=!1,$.setIniDbBoolean("settings","loggingEnabled",g),$.logEvent("misc.js",91,t+" disabled logging"),$.say($.whisperPrefix(o)+$.lang.get("logging.disabled")))}}),$.bind("initReady",function(){$.bot.isModuleEnabled("./core/logging.js")&&($.consoleDebug($.lang.get("console.loggingstatus",g?$.lang.get("common.enabled"):$.lang.get("common.disabled"))),$.registerChatCommand("./core/logging.js","log",1))}),$.logging={getLogDateString:e,getLogTimeString:n},$.log=o,$.logEvent=t,$.logError=i,$.logChatModEvent=s}();
