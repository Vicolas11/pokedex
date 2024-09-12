import { MainLayoutProp } from "../interfaces/MainLayout";
import { GreyCircleBgImg } from "../assets";
import "../styles/main.scss";

export default function MainLayout({ children }: MainLayoutProp) {
  return (
    <>
      {/* The three Gray Circle on the backgroud */}
      {Array.from({ length: 3 }).map((_, idx) => (
        <img
          key={idx}
          id={`greyCircleBgImg${idx + 1}`}
          src={GreyCircleBgImg}
          alt={`CircleBgImg`}
        />
      ))}
      {children}
    </>
  );
}
