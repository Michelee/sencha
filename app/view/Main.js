Ext.define('Sencha.view.Main', {
    extend: 'Ext.Container',
    xtype : 'main',
    requires : [
            'Sencha.view.Header', //Llama al la vista que tiene el header
            'Sencha.view.Filters',
            
        ],
        config : {
            layout  : 'vbox',
            items   : [{
                xtype   : 'header'  //Step 2
            },{ 
                xtype   : 'filters'  //Step 2
            },{
                xtype   : 'results', //Step 2
                flex    : 1
            }]
        }
});