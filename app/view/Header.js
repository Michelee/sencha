Ext.define('Sencha.view.Header', {
    extend  : 'Ext.Container',
    xtype   : 'header', 
    requires: [
        
    ],

    config: {
        height  : 120,
        layout  : 'hbox',   //Step 1
        items   : [{
            xtype   : 'container',
            flex    : 1,    //Step 2
            style   : 'background:#e67e22', //we will remove this later
            html    : 'Controls'
        },{
            xtype : 'container',
            flex    : 1,     // <--
            style   : 'background:#d35400', //we will remove this later
            html    : 'Player'
        },{
            xtype : 'container',
            flex    : 1,     // <--
            style   : 'background:#e74c3c', //we will remove this later
            html    : 'Search'
        }]
    }
});