import React from 'react';
import {Root} from 'native-base';
import {QueryClient, QueryClientProvider} from 'react-query';
import AppNavigation from './app/navigation/AppNavigation';
import appReducer from './app/reducers/appReducer';
import initialStore from './app/reducers/initialStore';
import AppContext from './app/AppContext';

const queryClient = new QueryClient();

const App = () => {
  const [app, dispatch] = React.useReducer(appReducer, initialStore);

  return (
    <AppContext.Provider value={{app, dispatch}}>
      <QueryClientProvider client={queryClient}>
        <Root>
          <AppNavigation />
        </Root>
      </QueryClientProvider>
    </AppContext.Provider>
  );
};

export default App;
