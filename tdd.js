var assert = require('assert');

function Raices(a,b,c){
    
    var Discriminante = (b*b-4*a*c);
    var RaizDiscriminante;
    
    if(Discriminante > 0)
    {
        RaizDiscriminante = Math.sqrt(Discriminante);
    
        var R1 = (-b + RaizDiscriminante) / (2*a);
        var R2 = (-b - RaizDiscriminante) / (2*a);
        var RI1 = 0;
        var RI2 = 0;
    }
    else
    {
        RaizDiscriminante = Math.sqrt(-Discriminante);
        var R1 = -b / (2*a);
        var R2 = -b / (2*a);
        var RI1 = RaizDiscriminante / (2*a);
        var RI2 = -RaizDiscriminante / (2*a);
        
    }
    
    return [[R1,RI1],[R2,RI2]];
    
}


assert.deepEqual(Raices(1,-5,0),[[5,0],[0,0]]);
assert.deepEqual(Raices(2,5,0),[[0,0],[-2.5,0]]);
assert.deepEqual(Raices(1,5,0),[[0,0],[-5,0]]);
assert.deepEqual(Raices(1,0,1),[[0,1],[0,-1]]);
