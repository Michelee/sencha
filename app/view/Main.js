Ext.define('Sencha.view.Main', {
    extend: 'Ext.Container',
    xtype : 'main',
    requires : [
            'Sencha.view.Header', //Llama al la vista que tiene el header
            'Sencha.view.Filters'
        ],
        config : {
            layout  : 'vbox',
            items   : [{
                xtype   : 'header'  //Step 2
            },{ 
                xtype   : 'filters'  //Step 2
            },{
                //we are going to move this container to a class
                xtype   : 'component',
                flex    : 1,
                style   : 'background:#ecf0f1', //we will remove this later
                html    : 'The Results'
            }]
        }
});