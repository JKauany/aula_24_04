import React, {useState} from "react";


function Notas(){
    const[salario1, setSalario1] = useState(0);
    const[salario2, setSalario2] = useState(0);
    const[salario3, setSalario3] = useState(0);
    const[media, setMedia] = useState(0);
    const [situacao, setSituacao] = useState("");


    function calcularMedia(){
        const media = (salario1 + salario2 + salario3) /3;
        setMedia (media);
        setSituacao(media >= 6 ? "Parabéns Guerreiro(a), você foi aprovado!!" : "Nãoooo Guerreiro(a), você foi reprovado!!");

    }

        return(
            <div>
                <h2>A media dos salários </h2>
                <label htmlFor="salario1">Salario 1:</label>
                <input
                    id="salario1"
                    type="number"
                    value={salario1}
                    onChange={(event) => setSalario1(Number())}
                />
                <div>
                <label htmlFor="salario2">Salario 2:</label>
                <input
                    id="salario2"
                    type="number"
                    value={salario1}
                    onChange={(event) => setSalario2(Number())}
                />
                </div>
    
            </div>
    
        
        )
}
export default Notas;