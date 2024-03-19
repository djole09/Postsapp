import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './AppRoutes';
import { ReactQueryWrapper } from './ReactQueryWrapper';
import { Layout } from './components/Layout/Layout';
import { ComponentLogProvider } from './context/ComponentLogContext';
import { WithComponentLog } from './context/WithComponentLog';

const App = () => (
  <ComponentLogProvider message="Hello from:">
    <WithComponentLog componentName="App">
      <ReactQueryWrapper>
        <BrowserRouter>
          <Layout>
            <AppRoutes />
          </Layout>
        </BrowserRouter>
      </ReactQueryWrapper>
    </WithComponentLog>
  </ComponentLogProvider>
);

export default App;
