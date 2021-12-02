import { Button } from '../../components/button/Button';
import { Navbar } from '../../components/navbar/Navbar';
import './Home.sass';

export function Home() {
  return (
    <div>
      <navbar>
        <Navbar />
      </navbar>
      <div>
      <Button >Teste</Button>
      </div>
    </div>
  );
}