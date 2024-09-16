import PropTypes from 'prop-types'
const CurrentlyCookingSidebar = ({currentlyCook}) => {
    const {recipe_name,preparing_time,calories} = currentlyCook;
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
        
    </tr>
    );
};
CurrentlyCookingSidebar.propTypes = {
    currentlyCook:PropTypes.object.isRequired,
}
export default CurrentlyCookingSidebar;