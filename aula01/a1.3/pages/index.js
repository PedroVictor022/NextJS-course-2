function HomePage() {
   return (
      <div>
        <h1>Welcome to Next.JS</h1>

        <div>
          <h2>Arquivos</h2>
          <ul>
            <li>Arquivos devem ter estrutura semelhante.</li>
            <li>Nome dos arquivos criados e o mesmo da barra de pesquisa.</li>
            <li>Customizacao da pagina 404.js</li>
          </ul>
        </div>

        <div>
          <h2>Customizando App</h2>
          <p>Crie um arquivo <code>_app.js</code> de acordo com a documentacao do Next.JS e la dentro coloque um estilo global.</p>
        </div>

        <div>
          <h2>Rotas Dinamicas</h2>
          <p>
            Para criar rotas crie um arquivo `[id].js` e nele importe algumas configuracoes da documentacao.
            Importe o useRouter, passe ele para uma constante.
          </p>
        </div>

      </div>
   )
}
export default HomePage;
