import { shallow } from 'vue-test-utils'
import Header from '@/components/Header'

describe('Header.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallow(Header, {
      stubs: ['router-link', 'router-view']
    })
    expect(wrapper.text()).toBe('Vue Simple SSR')
  })
})
