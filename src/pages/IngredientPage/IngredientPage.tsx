
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import { TIngredient } from "../../utils/types"

import IngredientDetails from '../../components/Ingredients/IngredientDetails/IngredientDetails';
import { NotFound } from  '..';


type TParams = {
    [id: string]: string;
};

const IngredientPage = () => {
    const { items } = useSelector((store: any) => store.ingredients);
    const { id } = useParams<TParams>();
    const currentIngredient = (items) ? items.find((item: TIngredient) => item._id === id) : null;

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