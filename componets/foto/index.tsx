import Image from "next/image";
interface propimaFoto {
  src: string;
  alt: string;
  height: number;
  width: number;
  
}

const ImaFoto = ({ src, alt, height, width}: propimaFoto) => {
  var x;
  var y;
  return <Image src={src} alt={alt} height={height} width={width} />;
};
export { ImaFoto };
