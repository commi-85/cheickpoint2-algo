function triParInsertion(tab){
    let i=1
    let j=0
    let temp=0
    for(i=1; i<tab.length; i++){
        temp = tab[i];
        j = i-1;
       while(j>=0 && tab[j]> temp){
        tab[j+1]= tab[j];
            j =j-1;
       }
       tab[j+1] = temp;
            
    }
    return tab;
}
console.log(triParInsertion([7,4,6,2]));
