export default function Copyright() {
  return (
    <>
      <p>{`${new Date().getFullYear()}`} | Criado com &#10084;&#65039; por Lucas Mota</p>
      <style jsx>
        {`
          p {
            font-size: 0.80rem;
            text-align: center;
            font-weight: 400;
          }
        `}
      </style>
    </>
  );
}
