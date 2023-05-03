import useAuth from "../hook/UseAuth";
import person from '/img/person.svg'
import formatDate from "../helpers/FormatDate";

export default function PersonInfo() {


    const { auth } = useAuth();

    const { name, email, _id, createdAt } = auth

    
    return (
        <div className="text-lg text-center text-indigo-600 capitalize shadow-2xl absolute top-14  right-0 bg-white w-max">

            <div className="bg-indigo-400 p-12">

            </div>

            <img className="w m-auto bg-white rounded-full -mt-12" src={person} width={80} height={30} alt="KitDoc Icon" />


            <div className="p-10 flex flex-col gap-2 ">

                <p>{name}</p>

                <p>{email}</p>

                <p>UserId: <span className="text-black">{_id}</span></p>

                <p>Since: <span className="text-black">{formatDate(createdAt)} </span> </p>

            </div>

        </div>

    )
}
