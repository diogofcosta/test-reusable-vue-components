import { storiesOf } from '@storybook/vue'
import JFTableRow from './JFTableRow'

storiesOf('JFTableRow', module)
  .add('with 2 values', () => ({
    components: { JFTableRow },
    template:
    `
      <JFTableRow
        :values="values"
      />
    `,
    data: () => ({
      values: [
        'Diogo Costa',
        'diogo@diogo.com'
      ]
    })
  }))