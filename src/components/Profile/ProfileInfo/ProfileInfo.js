import React from 'react';
import contentHeadImg from '../../../assets/img/Sapa-terraces.jpg';
import styles from './ProfileInfo.module.scss'
import Preloader from "../../Preloader/Preloader";
import defaultAvatar from '../../../assets/img/defaulAvatar.png'
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = props => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                {/*<img className={styles.background} src={contentHeadImg} alt={'logo'}/>*/}
                <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk}/>
            </div>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large || defaultAvatar} alt={'avatar'}/>
                <div className={styles.description}>
                    <div><b>Имя:</b> {props.profile.fullName}</div>
                    <div><b>Слоган:</b> {props.profile.aboutMe}</div>
                    <div><b>Ищете ли вы
                        работу:</b> {props.profile.lookingForAJobDescription} {props.profile.lookingForAJob ?
                        <span role="img" aria-label="smile">&#x1f603;</span> :
                        <span role="img" aria-label="smile">&#x1f645;</span>}</div>
                    <div><b>Контакты:</b></div>
                    <div className={styles.contacts}>
                        <div><b>Facebook:</b></div>
                        <div><a href={`https://${props.profile.contacts.facebook}`} target={'_blank'}
                                rel={'noopener noreferrer'}>{props.profile.contacts.facebook}</a></div>
                        <div><b>Website:</b></div>
                        <div><a href={`https://${props.profile.contacts.website}`} target={'_blank'}
                                rel={'noopener noreferrer'}>{props.profile.contacts.website}</a></div>
                        <div><b>Vk:</b></div>
                        <div><a href={`https://${props.profile.contacts.vk}`} target={'_blank'}
                                rel={'noopener noreferrer'}>{props.profile.contacts.vk}</a></div>
                        <div><b>Twitter:</b></div>
                        <div><a href={`https://${props.profile.contacts.twitter}`} target={'_blank'}
                                rel={'noopener noreferrer'}>{props.profile.contacts.twitter}</a></div>
                        <div><b>Instagram:</b></div>
                        <div><a href={`https://${props.profile.contacts.instagram}`} target={'_blank'}
                                rel={'noopener noreferrer'}>{props.profile.contacts.instagram}</a></div>
                        <div><b>Youtube:</b></div>
                        <div><a href={`https://${props.profile.contacts.youtube}`} target={'_blank'}
                                rel={'noopener noreferrer'}>{props.profile.contacts.youtube}</a></div>
                        <div><b>Github:</b></div>
                        <div><a href={`https://${props.profile.contacts.github}`} target={'_blank'}
                                rel={'noopener noreferrer'}>{props.profile.contacts.github}</a></div>
                        <div><b>MainLink:</b></div>
                        <div><a href={`https://${props.profile.contacts.mainLink}`} target={'_blank'}
                                rel={'noopener noreferrer'}>{props.profile.contacts.mainLink}</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;