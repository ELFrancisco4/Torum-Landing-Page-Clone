import BitcoinSVG from "../atoms/BitcoinSVG";
import Ethereum from "../atoms/Ethereum";
import PolygonSVG from "../atoms/PolygonSVG";
import Solana from "../atoms/SolanaSVG";

type CryptoProps = {
  className: string;
};
const Cryptos = ({ className }: CryptoProps) => {
  return (
    <div className={className}>
      <span>
        <Ethereum /> Ethereum
      </span>
      <span>
        <BitcoinSVG /> Bitcoin
      </span>
      <span>
        <PolygonSVG /> Polygon
      </span>
      <span>
        <Solana /> Solana
      </span>
    </div>
  );
};

export default Cryptos;
