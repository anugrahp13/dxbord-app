import userLogo from "../../../assets/image/user01.png";
export default function User() {
  return (
    <div className="flex gap-3 items-center bg-white p-4 rounded-full dark:bg-gray-600 dark:text-gray-300">
      <img src={ userLogo } alt="User Image" className="w-14 h-14 rounded-full"/>
      <div >
        <h3 className="font-semibold text-2xl">Jhon Doe</h3>
        <p>Developer</p>
      </div>
    </div>
  )
}
