const path = require('path');
const createValidator = require('./validator');
const validate = createValidator({
    id: {required: true},
    dir: {required: true},
});

function BaseConfig(config) {
    const input = config.baseConfig;

    validate(input);

    const baseConfig = {
        id: input.id,
        dir: path.relative(config.projectRoot, input.dir),
    };
    baseConfig.resolved = path.resolve(config.projectRoot, baseConfig.dir);

    return baseConfig;
}


module.exports = BaseConfig;
