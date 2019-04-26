class GitHub{
  constructor(){
    this.client_id='dbde99184ce14c85692c';
    this.client_secret='773b6801153efa7337237e97c3a78f48727ce4b9';
    this.repose_count=5;
    this.repose_sort='created: asc';
  }


  async getUser(user){
    const profileResponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const reposResponse = await fetch(`http://api.github.com/users/${user}/repos?per_page=${this.repose_count}&sort=${this.repose_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

  const profile = await profileResponse.json();
  const repos = await reposResponse.json();
  return {
    profile,
    repos
    }
  }


}