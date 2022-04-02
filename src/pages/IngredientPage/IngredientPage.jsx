import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation, useHistory } from 'react-router-dom';

import { setCurrentIngredient } from "../../services/actions/ingredients";

import Modal from '../../ui/Modal/Modal';
import IngredientDetails from '../../components/Ingredients/IngredientDetails/IngredientDetails';

const IngredientPage = () => {
    const { items } = useSelector((store) => store.ingredients);
    const { id } = useParams();
    var currentIngredient = (items) ? items.find(item => item._id === id) : null;

    const dispatch = useDispatch();
    useEffect(() => {
        if (currentIngredient) {
            dispatch(setCurrentIngredient(currentIngredient))
        };
    }, [dispatch, currentIngredient]);

    const location = useLocation();
    const history = useHistory();
    const onClose = (e) => {
        e.preventDefault();
        dispatch(setCurrentIngredient(null));
        history.replace({ pathname: "/", state: { from: location } });
    };

    return (
        (currentIngredient) ? (
            <Modal onClose={onClose} title="Детали ингредиента">
                <IngredientDetails item={currentIngredient} />
            </Modal>
        ) : null
    );
}

export default IngredientPage;