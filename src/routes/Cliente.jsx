import { useForm } from 'react-hook-form'

const Cliente = () => {
  //desestruturando objeto
  const {register, setValue, setFocus} = useForm();

  //criando a funcao da api que vai consumir os dados
  function buscarCep(e){
    const cep = e.target.value;
    fetch(`http://viacep.com.br/ws/${cep}/json/`)
    .then((res)=>res.json())
    .then((dados)=>{
      setValue('rua', dados.logradouro);
      setValue('bairro', dados.bairro);
      setFocus('numero');
    })
  }

  return (
    <div>
      <form className='"flex-1 flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0 mr-16"'>
        <fieldset>
          <legend>Dados cliente</legend>
          <div>
            <label>CEP: </label>
            <input type="text"
            {...register('cep')}
            onBlur={buscarCep} />

          </div>
          <div>
            <label>Rua: </label>
            <input type="text"           
            {...register('rua')} />

          </div>
          <div>
            <label>Bairro: </label>
            <input type="text" 
            {...register('bairro')}
            />
          </div>          
          <div>
            <label>Número: </label>
            <input type="text"
            {...register('numero')} 
            />
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Cliente