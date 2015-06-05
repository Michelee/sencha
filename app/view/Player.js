Ext.define('Sencha.view.Player', {
extend  : 'Ext.Component',
    xtype   : 'player',
    requires: [

    ],

    config: {
        tpl     : [ //<-- Step 1
            //we will remove the in-line style later when theaming the app
            '<img src="{art}" class="player-art" style="float:left"/>',
            '<div class="player-content">',
                '<h1>{titulo}</h1>',
                '<h2>{author}</h2>',
                '<div class="player-progress">',
                    '<span class="player-timer">{audio.current}</span>',
                    '<div class="player-bar" style="width:{audio.percent}%;"></div>',
                    '<span class="player-timer">{audio.total}</span>',
                '</div>',
            '<div>'
        ].join(''),
        data    : { //<-- Step 2
            titulo   : 'Last to know',
            author  : 'John Doe',
            art     : 'http://placehold.it/80x80',
            audio   : {
                total   : '4:45',
                current : '2:20',
                percent : 49
            }
        }
    }
});