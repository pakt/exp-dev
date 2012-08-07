    function fst(p) { return p[0]; };
    function snd(p) { return p[1]; };

    function sum(tab){
        var s = _.reduce(tab, function (acc, x) { return acc+x;}, 0);
        return s;
    }
    function avg(tab){
        var s = sum(tab);
        return s / _.size(tab);
    }
    function variance(tab){
        var mi = avg(tab);
        var t = _.map(tab, function (x) { return (x-mi)*(x-mi); });
        var v = avg(t);
        return v;
    }
    function std(tab){
        var v = variance(tab);
        return Math.sqrt(v);
    }

    function mgcd(o){
        if(!o.length)
            return 1;
        for(var r, a, i = o.length - 1, b = o[i]; i;)
            for(a = o[--i]; r = a % b; a = b, b = r);
        return Math.abs(b);
    }

    function ls_fit(xy_pairs) {
        var sum_x = 0;
        var sum_y = 0;
        var sum_xy = 0;
        var sum_xx = 0;
        var count = 0;
        
        var values_x = _.map(xy_pairs, fst);
        var values_y = _.map(xy_pairs, snd);
        /*
         * We'll use those variables for faster read/write access.
         */
        var x = 0;
        var y = 0;
        var values_length = values_x.length;
        if (values_length != values_y.length) {
            throw new Error('The parameters values_x and values_y need to have same size!');
        }
        
        /*
         * Nothing to do.
         */
        if (values_length === 0) {
            throw new Error("No fit for empty set");
        }
        
        /*
         * Calculate the sum for each of the parts necessary.
         */
        for (var v = 0; v < values_length; v++) {
            x = values_x[v];
            y = values_y[v];
            sum_x += x;
            sum_y += y;
            sum_xx += x*x;
            sum_xy += x*y;
            count++;
        }
        
        /*
         * Calculate m and b for the formular:
         * y = x * m + b
         */
        var m = (count*sum_xy - sum_x*sum_y) / (count*sum_xx - sum_x*sum_x);
        var b = (sum_y/count) - (m*sum_x)/count;
        return [m, b];
    }
        
    function text_node(t){
        var t = document.createTextNode(t);
        return t;
    }
    function wrap(t){
        var p = document.createElement("P");
        var t = text_node(t);
        p.appendChild(t);
        return p;
    }
    function dump_s(node, t){
        var p = wrap(t);
        node.insertBefore(p, node.firstChild);
    }
    function dump(node, pair){
        var i = pair[0];
        var time = pair[1];
        var t = i.toString(16) + "->" + time;
        dump_s(node, t);
    }

    function shuffle(arr) {
        var tmp, current, top = arr.length;

        if(top) while(--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = arr[current];
            arr[current] = arr[top];
            arr[top] = tmp;
        }

        return arr;
    }

    function rand(length,current){
     current = current ? current : '';
     return length ? rand( --length , "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt( Math.floor( Math.random() * 60 ) ) + current ) : current;
    }
