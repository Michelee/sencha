Ext.define('Sencha.view.Results', {
    extend  : 'Bleext.view.grid.Grid', //Esta clase nos dara el funcionamiento de un grid
    xtype   : 'results',
    requires: [
        
    ],

    config: {
        columns : [ //Se definen las columnas, los dataindex son para llenar los resultados de esas columnas
//Step 1
            {text:'Art',dataIndex:'artwork',tpl:'<img src="{artwork}" />'},
            {text:'Name',dataIndex:'name'},
            {text:'Artist',dataIndex:'artist'},
            {text:'Duration',dataIndex:'duration'},
            {text:'Albumn',dataIndex:'albumn'},
            {text:'Genre',dataIndex:'genre'},
            //Step 2
            {text:'Price',dataIndex:'price',renderer:function(value){return value + value * 0.1}} //<--- FIX
        ],
        store   : {   //El store es para guardar la info 
            //we are going to use a class for this later
            fields  : ['artwork','name','artist','duration','albumn','genre','artwork'],
            //we will use the itunes api later, for now we use dummy data
            data    : (function(){
                var data = [];

                for(var i=0;i<20;i++){
                    data.push({
                        artwork : 'http://a2.mzstatic.com/us/r30/Music4/v4/ee/51/fd/ee51fd7d-d84a-ecdf-bf5f-d18fac97a116/5099921739958_1535x1535_300dpi.100x100-75.jpg',
                        name    : 'Viva la Vida',
                        artist  : 'Coldplay',
                        price   : 1.29,
                        genre   : 'Alternative',
                        albumn  : 'Viva la Vida or Death and All His Friends',
                        duration: '03:57'
                    });
                }
                return data;
            })()
        },
        
        listeners : { //Step 1
            sort : function(dataIndex,direction,column){ //Step 2
                //Step 3
                Ext.Msg.alert('Sort','DataIndex: '+dataIndex+' Direction: '+direction);
            }
        }
    }
});