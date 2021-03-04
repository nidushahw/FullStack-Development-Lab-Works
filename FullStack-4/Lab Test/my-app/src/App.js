import TweetContainer from './component/TweetContainer';

function App() {
  const tweets = (
    <div>
      {[
        "Stop COVID-19, Take-out only! ",
        "At home, binge watching Breaking Bad for second time!",
        "When is the beach opening up? Can't wait.."
      ].map((status, index) => (
        <TweetContainer key={index} status={status} />
      ))}
    </div>
  );
  return (
    <div>{tweets}</div>
  );
}

export default App;
