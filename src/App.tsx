import { Fragment } from 'react';
import './App.css'
import NavBar from './NavBar';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Background from './Background';

function App(): JSX.Element {
  return (
    <Fragment>
      <NavBar />
      <AccessibilityNewIcon />
        <Background>
          <MyComponent name='Ryan' />
          <MyComponent name='Peter' />
          <Counter start={0} />
        </Background>
    </Fragment>
  );
}

export default App;
