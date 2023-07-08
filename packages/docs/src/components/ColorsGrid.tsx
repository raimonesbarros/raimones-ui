import { colors } from '@raimones-ui/tokens'
import { getContrast } from 'polished'

export const ColorsGrid = () => {
  return Object.entries(colors).map(([key, value]) => {
    return (
      <div key={key} style={{ backgroundColor: value, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(value, '#FFF') > 4 ? '#FFF' : '#000',
          }}
        >
          <strong>${key}</strong>
          <span>{value}</span>
        </div>
      </div>
    )
  })
}
