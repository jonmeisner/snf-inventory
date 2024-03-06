import './index.css'
import React from 'react'
import Logger from './Logger.tsx'
import { RecoilRoot } from 'recoil'
import ReactDOM from 'react-dom/client'
import Controller from './Controller.tsx'
import { NuiProvider } from 'fivem-nui-react-lib'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <Logger />
      <NuiProvider resource='snf-inventory'>
        <Controller />
      </NuiProvider>
    </RecoilRoot>
  </React.StrictMode>,
)
