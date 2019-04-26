//Search input
const searchUser = document.getElementById('searchUser');
const github = new GitHub;
const ui = new UI;
searchUser.addEventListener('keyup',(e => {
  //get input text
  const userText = e.target.value;
  if(userText !== ''){
   //Make http call
   github.getUser(userText)
   .then(data => {
    if(data.profile.message == 'Not Found'){
          //show alert
      ui.alert('user not found','alert alert-danger');
      ui.clearProfile();
    }else{
     //show profile
     ui.showProfile(data.profile);
     ui.showRepos(data.repos);
    }
   });
  }else{
    //clear Profile
    ui.clearProfile();
  }
}));