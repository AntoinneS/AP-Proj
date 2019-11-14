export let MENU_ITEM = [
    {
        path: 'index',
        title: 'Dashboard',
        icon: 'dashboard'
    },
    {
        path: 'editor',
        title: 'Automatic Hunting Session',
        icon: 'pencil'
    },
    {
        path: 'profile',
        title: 'User Profile',
        icon: 'user'
    },
    {
        path: 'ui',
        title: 'Administrator',
        icon: 'paint-brush',
        children: [
            {
                path: 'modals',
                title: 'Modals'
            },
    
            /*  {
                 path: 'loading',
                 title: 'Loading'
             }, */
        ]
    },
   

];
