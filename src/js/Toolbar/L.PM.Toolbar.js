L.PM.Toolbar = L.Class.extend({
    options: {

    },
    buttons: {},
    initialize(map) {
        this.map = map;

        // console.log(this.options);

        this._defineButtons();
    },
    getButtons: function() {
        return this.buttons;
    },

    addControls: function(options) {
        // L.Util.setOptions(this, options);
    },
    addButton: function(name, button) {
        // console.log('add ' + name);
        this.buttons[name] = button;
        this.options[name] = true;

        this._show();

        return this.buttons[name];
    },
    _defineButtons: function() {

        // find some generic way to do this

        // some buttons are still in their respective classes, like L.PM.Draw.Poly
        var deleteButton = {
            'className': 'icon-delete',
            'onClick': function() {

            },
            'afterClick': function(e) {
                console.log('after click');
            },
            'doToggle': true,
            'toggleStatus': false
        };

         this.addButton('deleteLayer', new L.Control.PMButton(deleteButton));


         var drawPolyButton = {
             'className': 'icon-polygon',
             'onClick': function() {

             },
             'afterClick': function(e) {
                //  self._map.Draw.Poly.toggle();
             },
             'doToggle': true,
             'toggleStatus': false
         };

         this.addButton('drawPolygon', new L.Control.PMButton(drawPolyButton));



    },
    _hide: function(button) {
        if(button) {
            button.remove();
        } else {
            for (var btn in this.buttons) {
                this.buttons[btn].remove();
            }
        }
    },
    _show: function(button) {

        if(button) {
            button.addTo(this.map);
        } else {
            for (var btn in this.buttons) {
                this.buttons[btn].addTo(this.map);
            }
        }



    }
});
