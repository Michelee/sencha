Ext.define('Itunes.view.Main', {
    extend: 'Ext.Container',
    xtype : 'main',
    requires : [
        
    ],
    config : {
        layout  : 'vbox',                  //Step 1
        items   : [{
            xtype   : 'container',
            height  : 120,                 //Step 2
            style   : 'background:#bdc3c7',
            html    : 'The Header'
        },{
            xtype   : 'component',
            flex    : 1,                   //Step 3
            style   : 'background:#ecf0f1',
            html    : 'Te Results'
        }]
    }
});