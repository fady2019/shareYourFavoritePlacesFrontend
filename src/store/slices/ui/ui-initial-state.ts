import { UISliceI } from '../../../interfaces/store';

export const placeMapModalInitialState = {
    isOpen: false,
    address: '',
    location: {
        lat: 0,
        lng: 0,
    },
};

export const placeDeletionAlertInitialState = {
    isOpen: false,
    placeId: '',
};

export const pickedImageModalInitialState = {
    isOpen: false,
    imgSrc: '',
};

export const uiSliceInitialState: UISliceI = {
    placeMapModal: placeMapModalInitialState,
    placeDeletionAlert: placeDeletionAlertInitialState,
    pickedImageModal: pickedImageModalInitialState,
};
