export function getData(){
    const url = [{
          id:15,
          day:'Lundi',
          exercice:'Developpé Couché',
          serie:[
            {
              nombre: 1, 
              repetition: 10, 
              poids: 50
            }, 
            {
              nombre: 1, 
              repetition: 8, 
              poids: 60
            }, 
            {
              nombre: 1, 
              repetition: 6, 
              poids: 70
            }, 
          ]
        },{
          id:16,
          day:'Lundi',
          exercice:'Developpé Couché Incline',
          serie:[
            {
              nombre: 1, 
              repetition: 10, 
              poids: 40
            }, 
            {
              nombre: 1, 
              repetition: 8, 
              poids: 50
            }, 
            {
              nombre: 1, 
              repetition: 6, 
              poids: 60
            }, 
          ]
        }];
    return url;
}