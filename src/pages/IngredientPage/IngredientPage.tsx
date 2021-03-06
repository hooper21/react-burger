import { useParams } from "react-router-dom";

import { TIngredient } from "../../utils/types"
import { useAppSelector } from '../../services/types/hooks';

import IngredientDetails from '../../components/Ingredients/IngredientDetails/IngredientDetails';
import { NotFound } from  '..';

type TParams = {
    [id: string]: string;
};

const IngredientPage = () => {

    const { id } = useParams<TParams>();
    const { items, loading } = useAppSelector((store) => store.ingredients);

    if (loading) {
        return null;
    };

    const selected = (items) ? items.find((item: TIngredient) => item._id === id) : null;

    return (
        (selected) ? (
            <div className="pt-30">
                <IngredientDetails item={selected} />
            </div>
        ) : (
            <NotFound />
        )
    );
};

export default IngredientPage;