import React from 'react';
import style from './Botao.module.scss'

class Botao extends React.Component<{
  type?: "button" | "submit" | "reset" | undefined, 
  onClick?: () => void,
  children: string
}> {
  render() {
    const { type="button", onClick, children } = this.props;
    return (
      <button onClick={onClick} type={type} className={style.botao}>
        {children}
      </button>
    )
  }
}

export default Botao;