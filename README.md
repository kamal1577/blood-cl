# blood-cl

Blood donations are often done by indviduals because often hospitals don't have enough blood to give to those in need , people often tend to use social networks to call for help in case of donations . I built this simple app to help solve thispart of this problem and create a one place where all people can reach each others and benefit when blood is needed.



  
  
  + People register to the app to add their contact info including blood type .
  + All registered users could browse the list of donors and see what type of blood needed around their zip code area .
  + Users could contact each other by email or phone to set up appointment with and at the nearest hospital. 


Technologies used:

Back End :

 + Nodejs 
 + Passport
 + PostgreSQL and (Postico)
 + Sequelize for users and donors
 + API for users and donors

Front End
 + HTML 
 + CSS / Materialize CSS
 + Bootstrap
 + JavaScript
 + JQuery 
 + ReactJS, using webpack .

How To run the App:
In your terminal open two bashes :
   + Type webpack -w to run the app
   + in other bash type nodemon to run the database side. 

 Application Features:

  + Secure sign up and Login in by using passport for authentification.  Once signed up you can then login and source the data.
  + Once on singed in you will directed to read about blood donation benefits then if you are aggree to be life saver you could click on donateform and add your info in there.
  + Is not allaowed to submit empty form or epmty filed from the form , everything is validated .
  
  + Once submit registration to be a donor you will redirected to thanks page in which you could see all donors info with blood-type.
  + Then you could Logout.

