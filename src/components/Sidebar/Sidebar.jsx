import PropTypes from 'prop-types'

const Sidebar = ({ wantToCookRecipie,currentlyCookingHandler }) => {
    const { recipe_name, preparing_time, calories } = wantToCookRecipie;


    return (


        <tr className="bg-white border-b text-black font-semibold">
            <td className="px-6 py-4">
                {recipe_name}
            </td>
            <td className="px-6 py-4">
                {preparing_time}
            </td>
            <td className="px-6 py-4">
                {calories}
            </td>
            <button className='bg-[#0BE58A] border-2 hover:bg-transparent hover:border-solid hover:border-2 border-transparent hover:border-[#0BE58A] hover:text-black font-semibold px-5 py-3 rounded-xl my-4' onClick={()=>currentlyCookingHandler(wantToCookRecipie)}>Preparing</button>
        </tr>




    );
};
Sidebar.propTypes = {
    wantToCookRecipie: PropTypes.object.isRequired,
    currentlyCookingHandler:PropTypes.func.isRequired,
}

export default Sidebar;