import { MainScreen } from '../main-screen/main-screen';

type AppScreenProps = {
  placeCount: string;
}

function App(props: AppScreenProps): JSX.Element {
  const {placeCount} = props;
  return <MainScreen placeCount={placeCount}/>;
}

export default App;
