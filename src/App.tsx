import AppRoutes from './config/routes';
import useAuthListener from './hooks/useAuthListener';
import useFirebaseComments from './redux/utils/setComments';


function App() {
  useAuthListener();
  useFirebaseComments();
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
