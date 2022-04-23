function domaingen(){
    let pronoun = ['the', 'my', 'our', 'this'];
    let adj = ['new', 'greatest', 'mostly', 'latest'];
    let noun = ['computer', 'chicken', 'car', 'ferrari'];
    let domain = ['.net', '.com', '.org', '.ke'];

  
    let gen = [];
    for (let p = 0; p <= pronoun.length; p++) {
        for (let a = 0; a <= adj.length; a++) {
            for (let n = 0; n <= noun.length; n++) {
                for (let d = 0; d <= domain.length; d++) {
                gen.push(pronoun[p]+adj[a]+noun[n]+domain[d]);
             } 
         }   
        }
    }
    console.log(gen);
}

domaingen();