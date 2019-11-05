//Hassna ouchen et Souad asroubi b15
var scoreMax=20;

var sc1=0;
var sc2=0;

var score1=document.querySelector("#score-0");
var score2=document.querySelector("#score-1");

var scoreTemp1=document.querySelector("#courent-0");
var scoreTemp2=document.querySelector("#courent-1");

var nomJ1=document.querySelector("#nom-0");
var nomJ2=document.querySelector("#nom-1");

var actifStyle1=document.querySelector(".panel-joueur-0");
var actifStyle2=document.querySelector(".panel-joueur-1");

var de=document.querySelector(".de");

var nouveau=document.querySelector(".btn-new");
var lance=document.querySelector(".btn-lancer");
var passe=document.querySelector(".btn-passe");

var actif=true;
var compt_six=0;

init();

//Question 1 :

function init()
{
	scoreTemp1.innerHTML='0';
	scoreTemp2.innerHTML='0';

	score1.innerHTML='0';
	score2.innerHTML='0';

	sc1=0;
	sc2=0;

	actif=true;

	actifStyle1.classList.add("actif");
	actifStyle2.classList.remove("actif");

	de.style.display="none";

	nomJ1.innerHTML="JOUEUR 1 <i class='ion-social-tux'></i>";
	nomJ2.innerHTML="JOUEUR 2 <i class='ion-social-tux'></i>";

	actifStyle1.classList.remove("vainqueur");
	actifStyle2.classList.remove("vainqueur");

	lance.disabled=false;
	passe.disabled=false;
}



//Question 2 :

lance.addEventListener('click',lancer);

function lancer(){

	 var nbrDe=Math.floor(Math.random()*6+1);


	if(nbrDe==1){
		compt_six=0;
		de.src="de-1.png";
		ScoreMax();
		actifStyle2.classList.add("actif");
		actifStyle1.classList.remove("actif");
		joueurSuivant();

	}
	if(nbrDe==2){
		de.src="de-2.png";
		actifCompt(actif,nbrDe);
		compt_six=0;
	}
	if(nbrDe==3){
		de.src="de-3.png";
		actifCompt(actif,nbrDe);
		compt_six=0;
	}
	if(nbrDe==4){
		de.src="de-4.png";
		actifCompt(actif,nbrDe);
		compt_six=0;
	}
	if(nbrDe==5){
		de.src="de-5.png";
		actifCompt(actif,nbrDe);
		compt_six=0;
	}
	if(nbrDe==6){
		de.src="de-6.png";
		actifCompt(actif,nbrDe);

		compt_six++;
		if(compt_six==2){
			if(actif==true){
				sc1=0;
				scoreTemp1.innerHTML='0';
				score1.innerHTML='0';
				joueurSuivant();

			}else
			{
				sc2=0;
				scoreTemp2.innerHTML='0';
				score2.innerHTML='0';
				joueurSuivant();
			}
		}
	}
}

function actifCompt(actif,score){

	if(actif==true){
		de.style.display="block";
		sc1+=score;
		scoreTemp1.innerHTML=sc1;
		ScoreMax();
	}else
	{
		de.style.display="block";
		sc2+=score;
		scoreTemp2.innerHTML=sc2;
		ScoreMax();
	}
}

//Question 3 :

function joueurSuivant(){

	de.style.display="none";
	if(actif){
	score1.innerHTML=sc1;}
	else{
	score2.innerHTML=sc2;}

	scoreTemp1.innerHTML='0';
	scoreTemp2.innerHTML='0';
	
	if(actif==true){
		actif=false;
		actifStyle2.classList.add("actif");
		actifStyle1.classList.remove("actif");
	}
	else{
		actif=true;
		actifStyle1.classList.add("actif");
		actifStyle2.classList.remove("actif")
	}

}

passe.addEventListener('click',joueurSuivant);

//Question 4 :

function ScoreMax(){

	if(sc1>=scoreMax || sc2>=scoreMax){
		if(actif)
		{
			actifStyle1.classList.add("vainqueur");
			score1.innerHTML=sc1;
			scoreTemp1.innerHTML='0';
			nomJ1.innerHTML="VAINQUEUR !";
			de.style.display="none";
		}
		else
		{
			actifStyle2.classList.add("vainqueur");
			score2.innerHTML=sc2;
			scoreTemp2.innerHTML='0';
			nomJ2.innerHTML="VAINQUEUR !";
			de.style.display="none";
		}

		lance.disabled=true;
		passe.disabled=true;

		nouveau.disabled=false;

	}
}

//Question 5:
nouveau.addEventListener('click',init);

//Question 6 :


 var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  document.body.appendChild(x);

  x.addEventListener('keypress',function (){
  	scoreMax=x.value;
  	console.log(scoreMax);
  });







