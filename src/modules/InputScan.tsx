import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useState } from 'react'
const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false })

interface InputScanProps {
  value: string
  onChange: (value: string) => void
  placeholder: string
}

export const InputScan = (props: InputScanProps) => {
  const { value, onChange, placeholder } = props
  const [openScanner, setOpenScanner] = useState(false)

  const handleScan = (result: string | null) => {
    if (result) {
      onChange(result)
      setOpenScanner(false)
    }
  }
  return (
    <Box>
      <InputGroup>
        <Input
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          bg='white'
        />
        <InputRightElement width='8rem'>
          <Button width='100%' onClick={() => setOpenScanner(true)}>
            Scan
          </Button>
        </InputRightElement>
      </InputGroup>
      {openScanner && (
        <QrReader
          //   ref={qrRef}
          delay={300}
          style={{ width: '100%' }}
          onError={(error: any) => console.error(error)}
          onScan={handleScan}
          //   showViewFinder={false}
          //   legacyMode
        />
      )}
    </Box>
  )
}
