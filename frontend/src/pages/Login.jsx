import { useData } from '../context/DataContext';

export default function Login() {
   const { game } = useData();

   console.log(game);
   return (
      <div>
         <h1>{game}</h1>
      </div>
   );
}
