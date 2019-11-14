export let MENU_ITEM = [
    {
        path: 'index',
        title: 'Dashboard',
        icon: 'dashboard'
    },
    {
        path: 'editor',
        title: 'Test',
        icon: 'pencil'
    },
    {
        path: 'icon',
        title: 'Test',
        icon: 'diamond'
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
