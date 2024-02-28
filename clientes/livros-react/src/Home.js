import React, { useEffect, useState } from "react";
import './LivroLista.css'
import Header from "./component/Header";
import Image from "../src/assets/react.png";

export default function Home() {
    return (
        <>
            <Header />
            <main className='containerHome'>
                <h1>Página Home</h1><br />
                <img src={Image} />

                <h2>Sistema de Gerenciamento de Livros - Banco de dados - Mongodb</h2>

                <div className="infoContent">
                    <section className="box">
                        <span>Aluno: Gilvan Júnior N. Gonçalves</span><br />
                        <span>Mat:202304560188</span>
                    </section>
                    <section className="box">
                        <span>Tutor(a): Andre Przewodowski Filho.</span>
                    </section>
                </div>







        </main >
        </>
    );
}
