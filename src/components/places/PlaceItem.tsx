import React from 'react';

import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
} from '@ionic/react';

import { PlaceItemI } from '../../interfaces/places';

import PlaceCardActions from './PlaceCardActions';

import classes from './PlaceItem.module.css';

const PLaceItem: React.FC<PlaceItemI> = (props) => {
    const { id, title, description, imgURL, address, location } = props.placeInfo;

    const openMapModalHandler = () => {
        if (props.onOpenMapModal) {
            props.onOpenMapModal({
                isOpen: true,
                address,
                location,
            });
        }
    };

    return (
        <IonCard className={classes['dra-place-card']}>
            <img src={imgURL} alt={`${title}-place`} />

            <IonCardHeader>
                <IonCardSubtitle>{address}</IonCardSubtitle>
                <IonCardTitle>{title}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>{description}</IonCardContent>

            <PlaceCardActions
                onOpenMapModal={openMapModalHandler}
                onOpenDeletePlaceAlert={props.onOpenDeletePlaceAlert.bind(null, id)}
                placeId={props.placeInfo.id}
            />
        </IonCard>
    );
};

export default PLaceItem;
