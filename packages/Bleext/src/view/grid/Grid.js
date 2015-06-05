/**
 * @class Bleext.view.grid.Grid
 * @extends Ext.Component
 * A custom grid component
 */

Ext.define('Bleext.view.grid.Grid', {
    extend: 'Ext.Container',
    requires: [
  
    ],

    config: {
        columns     : null,
        store       : null,
        tplColumns  : [
            '<tpl for="columns">',    //Step 1
                '<tpl if="width">',   //Step 2
                '<div class="bleext-column-header" style="width:{width}px;">{text}</div>',
                '<tpl else>',         //Step 3
                '<div class="bleext-column-header" style="flex:{flex}">{text}</div>',
                '</tpl>',
            '</tpl>'
        ].join('')
    },

    initialize  : function(){   //Step 2
        var me = this;

        me.add(me.buildColumns());

        me.callParent(arguments);
    },

    applyColumns    : function(columns){ //Step 2
        var column,
            len,
            i;

        for(i=0,len=columns.length;i<len;i++){
            column = columns[i];
            if(!column.width && !column.flex){
                column.flex = 1;          //Step 3
            }
        }
        return columns;      //Step 4
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
    }
});