import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import IngredientDetails from '../../components/Ingredients/IngredientDetails/IngredientDetails';
import { NotFound } from  '../../pages';

const IngredientPage = () => {
    const { items } = useSelector((store) => store.ingredients);
    const { id } = useParams();
    const currentIngredient = (items) ? items.find(item => item._id === id) : null;

    return (
        (currentIngredient) ? (
            <div className="pt-30">
                <IngredientDetails item={currentIngredient} />
            </div>
        ) : (
            <NotFound />
        )
    );
};

export default IngredientPage;