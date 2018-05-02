var assert = require('assert');

function Raices(a,b,c){
    
    var Discriminante = (b*b-4*a*c);
    var RaizDiscriminante;
    var R1,R2,RI1,RI2;
    var DobleA = (2*a);
    
    if(Discriminante > 0)
    {
        RaizDiscriminante = Math.sqrt(Discriminante);
    
        R1 = (-b + RaizDiscriminante) / (DobleA);
        R2 = (-b - RaizDiscriminante) / (DobleA);
        RI1 = 0;
        RI2 = 0;
    }
    else
    {
        RaizDiscriminante = Math.sqrt(-Discriminante);
        R1 = -b / (DobleA);
        R2 = -b / (DobleA);
        RI1 = RaizDiscriminante / (DobleA);
        RI2 = -RaizDiscriminante / (DobleA);
        
    }
    
    return [[R1,RI1],[R2,RI2]];
    
}


assert.deepEqual(Raices(1,-5,0),[[5,0],[0,0]]);
assert.deepEqual(Raices(2,5,0),[[0,0],[-2.5,0]]);
assert.deepEqual(Raices(1,5,0),[[0,0],[-5,0]]);
assert.deepEqual(Raices(1,0,1),[[0,1],[0,-1]]);
assert.deepEqual(Raices(1,-2,5),[[1,2],[1,-2]]);
assert.deepEqual(Raices(1,1,1),[[-0.5,Math.sqrt(3)/2],[-0.5,-Math.sqrt(3)/2]]);
assert.deepEqual(Raices(1,-3,3),[[1.5,Math.sqrt(3)/2],[1.5,-Math.sqrt(3)/2]]);
