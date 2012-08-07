    String.prototype.format = function() {
      var args = arguments;
      return this.replace(/{(\d+)}/g, function(match, number) { 
        return typeof args[number] != 'undefined'
          ? args[number]
          : match
        ;
      });
    };
    function add(x, y){
        var x = x>>>0;
        var y = y>>>0;
        return (x+y)>>>0;
    }
    function sub(x, y){
        var x = x>>>0;
        var y = y>>>0;
        return (x-y)>>>0;
    }
    function div(x, y){
        var x = x>>>0;
        var y = y>>>0;
        return (x/y)>>>0;
    }
    function mod(x, n){
        var x = x>>>0;
        var n = n>>>0;
        var x = x%n;
        return x>>>0;
    }
    function shr(x, y){
        if(y>=32){
            return 0>>>0;
        }
        var a = x>>>0;
        var b = y>>>0;
        return (a>>>b)>>>0;
    }
    function shl(x, y){
        if(y>=32){
            return 0>>>0;
        }
        var x = x>>>0;
        var y = y>>>0;
        return (x<<y)>>>0;
    }
    function and(x, y){
        var x = x>>>0;
        var y = y>>>0;
        return (x & y)>>>0;
    }
    function mul(a, b) {
        var ah = (a >> 16) & 0xffff, al = a & 0xffff;
        var bh = (b >> 16) & 0xffff, bl = b & 0xffff;
        var high = ((ah * bl) + (al * bh)) & 0xffff;
        var r = ((high << 16)>>>0) + (al * bl);
        return (r & (0xffffffff>>>0))>>>0;
    }

     function xgcd(a,b)
     { 
     if (b == 0)
       {return [1, 0, a]}
     else
       {
        temp = xgcd(b, mod(a,b))
        x = temp[0]
        y = temp[1]
        d = temp[2]
        return [y, sub(x,mul(y, div(a,b))), d]
       }
     }
    
    function inv(x, n){
        var tmp = xgcd(x, n);
        var x = tmp[0];
        x = mod(x, n);
        return x;
    }
