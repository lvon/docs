import ioContext from '../common/io-context'

ioContext.create('edit', {
  getContent: {
    mock: true,
    mockUrl: 'page-hello/getContent',
    url: '',
  },
})

export default ioContext.api.edit
