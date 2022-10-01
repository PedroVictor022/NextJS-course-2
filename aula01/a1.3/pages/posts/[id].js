import { useRouter } from 'next/router';
import Link from "next/link";

function Post() {
  const router = useRouter();

  console.log(router.query.id);

  return (
    <div>
      <h2>Pagina de Posts</h2>
      <p>
        ID da pagina atual: {router.query.id}
      </p>

      <ul>
        <li>
          <Link href='/'>
            <a>Ir para a Home</a>
          </Link>
        </li>
      </ul>

    </div>
  )
}

export default Post;
