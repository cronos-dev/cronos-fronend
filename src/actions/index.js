//Action to get all Repos
export function getRepos(response) {
  return{
    type: 'Get_Repos',
    payload: response
  }
}

export function getMenus(response) {
  console.log('getMenus', response)
  return{
    type: 'Get_Menus',
    payload: response
  }
}

// Thunk function, it calls the getRepos action above after it receives the fetch response.
export function getRepoThunk() {
  return function(dispatch, getState) {
    fetch('https://api.github.com/repositories')
    .then(e => e.json())
      .then(function(response){
        console.log(response);
        var arr = response.slice(0,10);
        dispatch(getRepos(arr))
      })
      .catch((error) => {
        console.error(error,"ERRRRRORRR");
      });
  }
}

export function getMenuThunk() {
  return function(dispatch, getState) {
    fetch(
      'http://crimson-voice-2981.getsandbox.com/menu',
      {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
      }
    )
    .then(e => e.json())
      .then(function(response){
        console.log('fetch resp', response);
        var arr = response.menu;
        dispatch(getMenus(arr))
      })
      .catch((error) => {
        console.error(error,"ERRRRRORRR");
      });
  }
}

// Repo selected action
export function repoSelected(repo){
  return{
    type: 'Repo_Selected',
    payload: repo
  }
}
