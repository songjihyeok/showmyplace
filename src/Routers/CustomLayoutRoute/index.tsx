import React from 'react';
import { Route } from 'react-router-dom';


const CustomLayoutRoute = ({ component: Component, layout: Layout, ...rest }: any) => {

     return (
          <Route {...rest} render={(props: any) => (
               <Layout>
                    <Component {...props} />
               </Layout>
          )} />
     );
};

export default CustomLayoutRoute;
