import FullStackDeveloper from "@/components/FullStackDeveloper";

export default function Home() {
  return (
    <div className="container">
      <div className="gridLeft">
        <FullStackDeveloper />
        <div className="buttonDistance">
          <button className="button">Conheça meu portfólio</button>
        </div>
      </div>
      <div className="gridRight">
        <img src="img1.png" alt="" width={493} />
      </div>
    </div>
  );
}
