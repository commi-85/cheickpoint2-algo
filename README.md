Description de l’algorithme algorithm_triParSelection
L’algorithme algorithm_triParSelection parcourt la liste donnée et construit progressivement la partie triée en insérant les éléments un à un à leur position correcte.
Le principe de notre algorithme est simple :
On declare :
Un tableau en entier (tab : ARRAY_OF type[INTEGER];)
Deux compteur (i et j) en entier et une clé temp (i,j,temp : INTEGER;)

DEBUT des instructions
I est initialiser à 1 et j et temp sont initialisés à 0
 i:= 1;
    j:=0;
    temp := 0;
Avec une boucle (for) pour allant de i jusqu’à la longueur du tableau moins un faire (FOR(i FROM 1 TO tab.length-1)  DO)
la clé ( temp ) reçoit élément d’index i c’est-à-dire (tab[1] )
temp:= tab[i];
et j va recevoir i-1 c’est-à-dire (1-1=0)
j := i-1;

 Maintenant avec une boucle (while ) tant que j est supérieur ou égal à zéro et l’élément d’indice j soit plus grand que la clé (temp) faire
( WHILE (j>=0 && tab[j]> temp ) DO )
L’élément d’indice j+1 c’est-à-dire (j=0+1) reçoit élément d’indice j cela veut dire que l’élément d’indice 0 va être répète comme élément d’indice 1.
tab[j+1]:= tab[j];
j va recevoir j-1 cela veut dire que j etait égal à 1 et maintenant j va etre egal à 1-1 qui sera 0.
j:=j-1;
		FIN DE LA BOUCLE TANT QUE.
		
		On repositionne la clé la bonne emplacement 
		tab[j+1]:= temp ;
	FIN DE LA BOUCLE FOR
FIN.
