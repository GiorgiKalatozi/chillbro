import PeopleHugging from "../../public/people-hugging.svg";

export default function Header() {
  return (
    <div className="flex justify-center mt-6 mb-12">
      <img src={PeopleHugging} alt="logo" className="w-8 h-8 cursor-pointer " />
    </div>
  );
}
