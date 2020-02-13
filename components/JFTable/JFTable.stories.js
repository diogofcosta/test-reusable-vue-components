import { storiesOf } from '@storybook/vue'
import JFTable from './JFTable'

var items = [
  [ 'Yair Lamb', 'yair.lamb@email.com' ],
  [ 'Leonardo Payne', 'leonardo.payne@email.com' ],
  [ 'Carl Henson', 'carl.henson@email.com' ],
  [ 'Jensen Combs', 'jensen.combs@email.com' ],
  [ 'Amiah Burton', 'amiah.burton@email.com' ],
  [ 'Yaretzi Mayo', 'yaretzi.mayo@email.com' ],
  [ 'Kamren Huffman', 'kamren.huffman@email.com' ]
]

storiesOf('JFTable', module)
  .add('with 7 items', () => ({
    components: { JFTable },
    template:
    `
      <JFTable
        :items="items"
      />
    `,
    data: () => ({
      items
    })
  }))