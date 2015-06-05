Ext.define('Sencha.view.Filters', {
    extend: 'Ext.Container',
    xtype : 'filters',

    config: {
        layout: {
            type    : 'hbox',   //Step 1
            pack    : 'center'  //Step 2
        },
        defaults    : {        //Step 1 configuraciones por default que tendran los items a continuacion
            xtype   :'button',
            margin  : 3
        },
        items : [   //Step 2 Arreglo para definir los botones
            {text:'Music',itemId:'music'}, //Step 3 dentro de cada boton se define un item id para filtrar
            {text:'Movies',itemId:'movies'},
            {text:'Short Films',itemId:'films'},
            {text:'Shows',itemId:'shows'},
            {text:'Books',itemId:'books'},
            {text:'Software',itemId:'software'}
        ]
    }
});