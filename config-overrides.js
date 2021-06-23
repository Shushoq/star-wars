const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@constants': 'src/constants',
    '@utils': 'src/utils',
    '@HOC': 'src/HOC',
    '@services': 'src/services',
    '@containers': 'src/containers',
    '@routes': 'src/routes',
    '@static': 'src/static',
  })(config)

  return config
}
