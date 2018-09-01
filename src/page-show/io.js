import ioContext from '../common/io-context'

ioContext.create('show', {
  getContent: {
    mock: true,
    mockUrl: 'page-hello/getContent',
    url: '',
  },
})

export default ioContext.api.show
