import { ShoppingCart, Timer, Package, Coffee } from "lucide-react";
import coffeeImg from "./assets/coffee.svg";
import { Header } from "./components/header";
import { useState } from "react";

export function App() {
  const [quantidade, setQuantidade] = useState(1);

  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const aumentarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  return (
    <>
      <Header />
      <main>
        <div id="content">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ul className="info-list">
            <li>
              <ShoppingCart
                className="icon yellow-dark"
                size={32}
                weight="fill"
              />
              <span>Compra simples e segura</span>
            </li>

            <li>
              <Package className="icon base-text" size={32} weight="fill" />
              <span>Embalagem mantém o café intacto</span>
            </li>

            <li>
              <Timer className="icon yellow" size={32} weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </li>

            <li>
              <Coffee className="icon purple" size={32} weight="fill" />
              <span>O café chega fresquinho até você</span>
            </li>
          </ul>
        </div>
        <div>
          <img src={coffeeImg} alt="" />
        </div>
      </main>

      <h2 id="NossosCafes">Nossos cafés</h2>

      <section className="CatalogoCafesFila1">
        <div className="ExpressoTradicional">
          <img src="/images/coffees/expresso.png" alt="" />
          <p id="tituloTradicional">TRADICIONAL</p>
          <h2 id="cafe1">Expresso Tradicional</h2>
          <p>O tradicional café feito com água quente e grãos moídos</p>
          <h2 id="preco">R$ 9,90</h2>
          <div className="contador">
            <button onClick={diminuirQuantidade}>-</button>
            <span>{quantidade}</span>
            <button onClick={aumentarQuantidade}>+</button>
          </div>
        </div>

        <div className="ExpressoAmericano">
          <img src="/images/coffees/americano.png" alt="" />
          <p id="tituloTradicional">TRADICIONAL</p>
          <h2 id="cafe2">Expresso Americano</h2>
          <p>Expresso diluído, menos intenso que o tradicional</p>
          <h2 id="preco">R$ 9,90</h2>
          <div className="contador">
            <button onClick={diminuirQuantidade}>-</button>
            <span>{quantidade}</span>
            <button onClick={aumentarQuantidade}>+</button>
          </div>
        </div>

        <div className="ExpressoCremoso">
          <img src="/images/coffees/expresso-cremoso.png" alt="" />
          <p id="tituloTradicional">TRADICIONAL</p>
          <h2 id="cafe3">Expresso Cremoso</h2>
          <p>Café expresso tradicional com espuma cremosa</p>
          <h2 id="preco">R$ 9,90</h2>
          <div className="contador">
            <button onClick={diminuirQuantidade}>-</button>
            <span>{quantidade}</span>
            <button onClick={aumentarQuantidade}>+</button>
          </div>
        </div>
      </section>

      <section className="CatalogoCafesFila2">
        <div className="ExpressoGelado">
          <img src="/images/coffees/cafe-gelado.png" alt="" />
          <p id="tituloTradicional">TRADICIONAL GELADO</p>
          <h2 id="cafe4">Expresso Gelado</h2>
          <p>Bebida preparada com café expresso e cubos de gelo</p>
          <h2 id="preco">R$ 9,90</h2>
          <div className="contador">
            <button onClick={diminuirQuantidade}>-</button>
            <span>{quantidade}</span>
            <button onClick={aumentarQuantidade}>+</button>
          </div>
        </div>

        <div className="CafecomLeite">
          <img src="/images/coffees/cafe-com-leite.png" alt="" />
          <p id="tituloTradicional">TRADICIONAL COM LEITE</p>
          <h2 id="cafe5">Expresso Americano</h2>
          <p>
            Meio a meio de expresso tradicional <br></br> com leite vaporizado
          </p>
          <h2 id="preco">R$ 9,90</h2>
          <div className="contador">
            <button onClick={diminuirQuantidade}>-</button>
            <span>{quantidade}</span>
            <button onClick={aumentarQuantidade}>+</button>
          </div>
        </div>

        <div className="Latte">
          <img src="/images/coffees/latte.png" alt="" />
          <p id="tituloTradicional">TRADICIONAL COM LEITE</p>
          <h2 id="cafe6">Latte</h2>
          <p>
            Uma dose de café expresso com o dobro <br /> de leite e espuma
            cremosa
          </p>
          <h2 id="preco">R$ 9,90</h2>
          <div className="contador">
            <button onClick={diminuirQuantidade}>-</button>
            <span>{quantidade}</span>
            <button onClick={aumentarQuantidade}>+</button>
          </div>
        </div>
      </section>

      <section className="CatalogoCafesFila3">
        <div className="Capuccino">
          <img src="/images/coffees/capuccino.png" alt="" />
          <p id="tituloTradicional">TRADICIONAL COM LEITE</p>
          <h2 id="cafe7">Capuccino</h2>
          <p>Bebida com canela feita de doses iguais de café, leite e espuma</p>
          <h2 id="preco">R$ 9,90</h2>
          <div className="contador">
            <button onClick={diminuirQuantidade}>-</button>
            <span>{quantidade}</span>
            <button onClick={aumentarQuantidade}>+</button>
          </div>
        </div>

        <div className="Macchiato">
          <img src="/images/coffees/macchiato.png" alt="" />
          <p id="tituloTradicional">TRADICIONAL COM LEITE</p>
          <h2 id="cafe8">Macchiato</h2>
          <p>Café expresso misturado com um pouco de leite quente e espuma</p>
          <h2 id="preco">R$ 9,90</h2>
          <div className="contador">
            <button onClick={diminuirQuantidade}>-</button>
            <span>{quantidade}</span>
            <button onClick={aumentarQuantidade}>+</button>
          </div>
        </div>

        <div className="Mocaccino">
          <img src="/images/coffees/mocaccino.png" alt="" />
          <p id="tituloTradicional">TRADICIONAL COM LEITE</p>
          <h2 id="cafe9">Mocaccino</h2>
          <p>Café expresso misturado com um pouco de leite quente e espuma</p>
          <h2 id="preco">R$ 9,90</h2>
          <div className="contador">
            <button onClick={diminuirQuantidade}>-</button>
            <span>{quantidade}</span>
            <button onClick={aumentarQuantidade}>+</button>
          </div>
        </div>
      </section>

      
    </>
  );
}
