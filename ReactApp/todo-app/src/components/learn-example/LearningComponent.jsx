import FirstComponent from './FirstComponent';
import LearningJavaScript from './LearningJavaScript';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';


export default function LearningComponent() {
    return (
      <div className="App">
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
        <LearningJavaScript/>
      </div>
    );
  }