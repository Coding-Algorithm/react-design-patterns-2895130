import { SplitScreen } from './SplitScreen';

const LeftHandComponent = ({name = 'Its left'}) => {
  return <h1 style={{ backgroundColor: 'green' }}>{name}</h1>;
};

const RightHandComponent = ({message = 'Hello'}) => {
  return <p style={{ backgroundColor: 'red' }}>{message}</p>;
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent />
      <RightHandComponent />
    </SplitScreen>
  );
}

export default App;
