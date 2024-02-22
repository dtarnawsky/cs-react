import './ExploreContainer.css';
import {IonButton} from '@ionic/react';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <IonButton routerLink={'/tab1/pageA'}>Page A</IonButton>
    </div>
  );
};

export default ExploreContainer;
