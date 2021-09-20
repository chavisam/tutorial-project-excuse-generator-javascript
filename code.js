let names = ['Mi hermana ','Mi perro ', 'Mi hijo ', 'Mi padre ', 'Una anciana '];
let problems = ['se ha roto  ', 'se ha torcido ','se ha doblado ', 'se ha dislocado ', 'se ha magullado '];
let what = ['una pierna ', 'un tobillo ','la tripa ','el cuello ', 'algo de su cuerpo '];
let where = ['en las escaleras de casa y le he tenido que ayudar.','en el ascensor y le he tenido que ayudar.', 'en el autobús y le he tenido que ayudar.','justo cuando tenía que salir, y le he tenido que ayudar.'];



function NewExcuse(){

    

let resultName = names[Math.floor(Math.random() * names.length)];
let resultProblems = problems[Math.floor(Math.random() * problems.length)];
let resultWhat = what[Math.floor(Math.random() * what.length)];
let resultWhere = where[Math.floor(Math.random() * where.length)];




var result = resultName + resultProblems + resultWhat + resultWhere;

var TheExuse = document.getElementById('excuse');
TheExuse.innerHTML = result;

}
