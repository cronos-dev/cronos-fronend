var defaultState = {
  menus: [],
  hasError: false
};
export default function(state=defaultState, action){
  switch (action.type) {
    case "Get_Menus":
      gitMenus = action.payload
      console.log(gitMenus, 'gitMenus');
      return gitMenus;
    case "Get_Menus_Failed":
      console.log('getmenusfailed', {...state, menus: [], hasError: true})
      return {...state, menus: [], hasError: true};
  }
  return state;
}
