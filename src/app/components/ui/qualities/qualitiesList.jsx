import React from "react";
import PropTypes from "prop-types";
import Quality from "../quality";

const QualitiesList = ({ qualities, userQualities }) => {
    console.log(qualities);
    console.log(userQualities);
    const filteredQualities = qualities.filter(item => userQualities.includes(item._id));
    console.log(filteredQualities);
    return (
        <>
            {userQualities.map((qual) => (
                <Quality key={qual._id} id={qual}/>
            ))}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array,
    userQualities: PropTypes.string
};

export default QualitiesList;
