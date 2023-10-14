import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <div className="w-full h-full flex flex-col items-center text-enter justify-center">
      <Image src={"/404.svg"} alt="404" height={500} width={500} />
      <Link href={"/"} className="text-lg font-semibold">
        Click to Return
      </Link>
    </div>
  );
};
export default Error;
