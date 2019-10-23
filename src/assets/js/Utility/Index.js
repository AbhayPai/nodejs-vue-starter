const Utilities = (config) => {
    const imagePrefix = () => location.protocol === 'https:' ? config.remoteUrl : config.localUrl;
    
    const locationPrefix = () => location.protocol === 'https:' ? config.remotePrefix : '';

    return {
        imagePrefix,
        locationPrefix,
    };
};

export default Utilities;