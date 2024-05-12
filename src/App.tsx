import AppRoutes from './config/routes';
import useFirebaseComments from './redux/utils/setComments';


function App() {
  useFirebaseComments();
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
