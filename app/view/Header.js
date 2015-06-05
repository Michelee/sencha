/**
 * @class Sencha.view.Header
 * @extends Ext.Container
 * The application header
 */

Ext.define('Sencha.view.Header', {
    extend  : 'Ext.Container',
    xtype   : 'header', 
    requires: [
        'Sencha.view.Player' //Requiring the player class
    ],

    config: {
        height  : 120,
        layout  : 'hbox',   //Step 1
        items   : [{
            xtype   : 'container',
                flex    : 1,
                layout  : {            //Step 1
                    type    : 'hbox',
                    align   : 'center' //Step 2
                },
                defaults: {
                    xtype : 'button',
                    width : 40,
                    height: 40,
                    margin: 5
                },
               items   : [{
                        text  : '<<'
                    },{
                        text  : '>'
                    },{
                        text  : '>>'
                    },{
                        xtype       : 'sliderfield',  // Step 1
                        width       : null,           // Step 2
                        height      : null,
                        flex        : 1,              //Step 3
                        value       : 60
                    }]
                },{
        },{
            xtype : 'player',   //adding the player to the UI
            flex    : 1
        },{
            xtype   : 'container',
            flex    : 1,
            layout  : {                  //Step 1
                type    : 'hbox',
                align   : 'center'
            },
            items   : [{
                xtype   : 'textfield',   //Step 2
                name    : 'query',
                placeHolder : 'Search...',
                flex    : 1,
                margin  : 20
            }]
        }]
    }
});