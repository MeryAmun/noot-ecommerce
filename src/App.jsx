
import './App.css';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HomeScreen } from './pages';
import { Footer, Navbar } from './components';

function App() {
  const queryClient = new QueryClient()
  return (
   
    <div className="App">
      <Navbar/>
      <QueryClientProvider client={queryClient}>
     <HomeScreen/>
     </QueryClientProvider>
     <Footer/>
    </div>
    
  );
}

export default App;
