// Global Styles

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style>{`
        *{
          font-family: sans-serif;
          color:#fff;
          background-color:#222;

          }
      `}</style>

      <Component {...pageProps} />
    </>
  )
}
export default MyApp;
