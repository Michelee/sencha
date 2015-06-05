/**
 * @class Bleext.view.grid.Grid
 * @extends Ext.Component
 * A custom grid component
 */

Ext.define('Bleext.view.grid.Grid', {
    extend: 'Ext.Container',
    requires: [
  		'Ext.data.StoreManager', //Step 1
        'Ext.data.Store',
        'Ext.dataview.DataView' //Step 1
    ],

    config: {
        layout      : 'fit',
        columns     : null,
        store       : null,
        tplColumns  : [
            '<tpl for="columns">',
                '<tpl if="width">',
                //adding the data-index
                '<div data-index="{[xindex - 1]}" class="bleext-column-header" style="width:{width}px;">{text}</div>',
                '<tpl else>',
                //adding the data-index
                '<div data-index="{[xindex - 1]}" class="bleext-column-header" style="flex:{flex}">{text}</div>',
                '</tpl>',
            '</tpl>'
        ].join('')
    },

    initialize  : function(){
        var me = this,
            dataview;

        me.add(me.buildColumns());
        dataview = me.add(me.buildDataview()); //Step 1

        me.callParent(arguments);

        me.element.on('tap',me.handleCustomEvents,me);

        //step 2
        me.relayEvents(dataview,[
            'itemtap','itemdoubletap','itemsingletap','itemswipe','itemtaphold',
            'itemtouchend','itemtouchmove','itemtouchstart','select','refresh'
        ]);
    },

    handleCustomEvents  : function(event){
	    var me  = this,
	        //Step 1
	        dom = event.getTarget('.bleext-grid-header-container .bleext-column-header'),
	        column,
	        index;

	    if(dom){
	        index = Ext.fly(dom).getAttribute('data-index'); //Step 2
	        
	        column = me.getColumns()[index];
	        column.direction = column.direction === 'ASC'?'DESC':'ASC'; //Step 3
	        
	        this.fireEvent('sort',column.dataIndex,column.direction,column); //Step 4
	    }
	},

    applyStore      : function(store){ //Step 3
        return Ext.data.StoreManager.lookup(store); //Step 4
    },

    buildColumns    : function(){ //Step 3
        return {
            xtype : 'component',
            docked: 'top',                  //Step 4
            cls   : 'bleext-grid-header-container',
            tpl   : this.getTplColumns(),   //Step 5
            data  : {
                columns : this.getColumns()
            }
        };
    },

    buildDataview   : function(){
        var me      = this,
            store   = me.getStore(),  //Step 1
            columns = me.getColumns(),
            column,
            html = [],
            tpl,
            len,
            i;

        for(i=0,len=columns.length;i<len;i++){
            column = columns[i];

            if(column.width){
                //Step 2
                html.push('<div class="bleext-grid-cell" style="width:'+column.width+'px;">{[this.getRenderer('+i+',xindex)]}</div>');
            }else{
                //Step 2
                html.push('<div class="bleext-grid-cell" style="flex:'+column.flex+'">{[this.getRenderer('+i+',xindex)]}</div>');
            }

            if(column.tpl){ //Step 3
                column.tpl = new Ext.XTemplate(column.tpl);
            }
        }

        tpl = new Ext.XTemplate(html.join(''),{
            //Step 4
            getRenderer     : function(columnIndex,rowIndex){
                var column = columns[columnIndex], //Step 5
                    record = store.getAt(rowIndex);

                if(column.renderer){ //Step 6
                    return column.renderer.call(column.scope || me,record.get(column.dataIndex),record,columnIndex,rowIndex);
                }else if(column.tpl){ //Step 7
                    return column.tpl.apply(record.data);
                }
                //Step 8
                return record.get(column.dataIndex);
            }
        });

        return {
            xtype   : 'dataview',
            cls     : 'bleext-grid-body',
            store   : store,
            itemTpl : tpl
        };
    }
});