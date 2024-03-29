import {
    Aside,
    AsideTitle,
    InfoWrapper,
    MinorTitle,
    PersonPhoto,
    PersonTitle,
    PersonWrapper,
    PersonalInfoItem,
    PersonalInfoList,
    ProfileWrapper,
} from './PersonInfo.styled';
import noPoster from '../../../../../images/no-poster.jpg';
import { PROFILE_H632 } from 'common/constants';
import { Credits } from './Credits/Credits';

export const PersonInfo = ({ person, acting, crew, total }) => {
    const {
        biography,
        known_for_department,
        name,
        gender,
        birthday,
        deathday,
        age,
        place_of_birth,
        profile_path,
    } = person;

    return (
        <PersonWrapper>
            <Aside>
                <PersonPhoto
                    src={profile_path ? PROFILE_H632 + profile_path : noPoster}
                    alt={name}
                    width={300}
                    height={450}
                />
                <div>
                    <AsideTitle>Personal Info</AsideTitle>
                    <PersonalInfoList>
                        <PersonalInfoItem>
                            <MinorTitle>Known for</MinorTitle>
                            <p>{known_for_department}</p>
                        </PersonalInfoItem>
                        <PersonalInfoItem>
                            <MinorTitle>Known credits</MinorTitle>
                            <p>{total ?? 'N/a'}</p>
                        </PersonalInfoItem>
                        {gender !== 0 && (
                            <PersonalInfoItem>
                                <MinorTitle>Gender</MinorTitle>
                                <p>{gender === 2 ? 'Male' : 'Female'}</p>
                            </PersonalInfoItem>
                        )}
                        {birthday && (
                            <PersonalInfoItem>
                                <MinorTitle>Birthday</MinorTitle>
                                <p>
                                    {birthday}{' '}
                                    {!deathday && `(${age} years old)`}
                                </p>
                            </PersonalInfoItem>
                        )}
                        {deathday && (
                            <PersonalInfoItem>
                                <MinorTitle>Deahday</MinorTitle>
                                <p>
                                    {deathday} ({age} years old)
                                </p>
                            </PersonalInfoItem>
                        )}
                        {place_of_birth && (
                            <PersonalInfoItem>
                                <MinorTitle>Place of birth</MinorTitle>
                                <p>{place_of_birth}</p>
                            </PersonalInfoItem>
                        )}
                    </PersonalInfoList>
                </div>
            </Aside>
            <InfoWrapper>
                <ProfileWrapper>
                    <PersonTitle>{name}</PersonTitle>
                    <MinorTitle>Biography</MinorTitle>
                    {biography?.map((el, i) => (
                        <p key={i} style={{ marginBottom: '12px' }}>
                            {el}
                        </p>
                    ))}
                    {biography?.length === 0 && (
                        <p>We don't have a biography for {name}.</p>
                    )}
                </ProfileWrapper>
                <Credits acting={acting} crew={crew} />
            </InfoWrapper>
        </PersonWrapper>
    );
};
