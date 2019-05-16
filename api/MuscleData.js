export function getData(){
    const url = [{
          id:1515,
          muscle:1,
          name:'Développé Couché',
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBSqAC37gvhn554YtHdPlWs84caI9FAyCwN_gLcnI3sUaDWxXKWQ',
          average:10,
          description:'Le développé couché est un exercice de base pour cibler les pectoraux. Il peut s\'exécuter avec une barre ou sur machine. Mais, avec des haltères, il possède l’intérêt de permettre un mouvement plus naturel, une meilleure contraction des pectoraux et un plus grand étirement des muscles. C\'est un exercice qui fait appel aux muscles stabilisateurs et qui n\'est pas aussi facile à maîtriser que le développé couché à la barre.',
          },{
          id:1616,
          muscle:1,
          name:'Développé Couché Incline',
          img: 'http://2.bp.blogspot.com/-Hvig8QaRmY4/UgyfGwZWrfI/AAAAAAAAAZw/SJ3pqcNoh6k/s1600/t%C3%A9l%C3%A9chargement+(1).jpg',
          average:10,
          description:'Le développé incliné avec haltères (“incline dumbbell press” en anglais) est une variante de la version classique en position couchée. Il s’effectue sur un banc incliné, ce qui permet de mettre l’accent sur la partie supérieure des pectoraux (faisceau claviculaire).'
        },{
          id:1617,
          muscle:1,
          name:'Butterfly',
          img: 'https://entrainement-sportif.fr/butterfly.gif',
          average:10,
          description:'Aussi appelé le butterfly, le pec peck est un mouvement très efficace pour atomiser vos pectoraux et surtout travailler le milieu. Cet exercice de musculation est important pour améliorer la performance au développé couché.'
        },{
          id:1618,
          muscle:3,
          name:'Développé militaire',
          img: 'http://3.bp.blogspot.com/-fH1n9SwdDXI/UNYgsovXCcI/AAAAAAAAAGc/3wWbuxfsks4/s1600/gfbs.png',
          average:10,
          description:'Le développé à la barre devant appelé couramment le développé militaire pour les épaules est très important pour se muscler les deltoïdes, notamment le faisceau moyen. Cet exercice nécessite une sangle abdominale puissante et de bons muscles lombaires qui vont se contracter de façon isométrique pour stabiliser la colonne vertébrale. C’est la clé pour garder un bon équilibre.'
        }];
    return url;
}

export function getMuscles(){
    const url = [
      {
          id:1,
          name:'Pectoraux' ,
          category_muscle:1,
      },
      {
          id:2,
          name:'Biceps',
          category_muscle:2,
      },{
          id:3,
          name:'Epaule' ,
          category_muscle:3,
      }
    ];
    return url;
}