import { TestPage } from '@/views/TestPage/TestPage';
import { TanstackView } from '@/views/TanstackTest/Tanstack';
import { PostTestView } from '@/views/AxiosApiTest/PostTest';

export default function Page(): React.JSX.Element {
  return (
    <div>
      <TestPage />
      <h2>
        <b>------------tanstack, axios test--------------</b>
      </h2>
      <TanstackView />
      <PostTestView />
    </div>
  );
}
