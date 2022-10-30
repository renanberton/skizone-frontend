import './skins.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import BoxSkins from '../../components/box-skin';
import { useState, useRef, useEffect, useCallback } from 'react';
import React, { createContext } from 'react';

type productsType = {
    attributes: any;
    nome: string,
    description: string,
    photo: any,
    valor: string,
    data: any,
}

function Skins() {

    const [products, setProducts] = useState<productsType[]>([]);
    const jsonCategoryRef = useRef<any>();
    const productsArray = useRef<any[]>([]);
    const productsRef = useRef<productsType[]>([]);
    const saveCategoryRef = useRef<productsType[]>([]);
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);

    function handleSetProducts() {
        productsArray.current?.forEach((product: productsType) => {
            let productsObj: productsType = {
                nome: product.nome,
                description: product.description,
                photo: product.photo,
                valor: product.valor,
                data: product.data,
                attributes: product.attributes,
            }
            productsRef.current.push(productsObj);
        });
        setProducts(productsRef.current);
        // Aqui em baixo eu limpo os array pra evitar lixo (se retirar vai reparar que o nosso array duplica com dados repetidos)
        productsRef.current = [];
        productsArray.current = [];
        return true;
    }

    const handleLoadProducts = useCallback(async () => {
        // Aqui em baixo eu limpo os array pra evitar lixo (se retirar vai reparar que o nosso array duplica com dados repetidos)
        productsRef.current = [];
        productsArray.current = [];

        // Decidi usar vários then eu seguida pra evitar bugs de sincronização, uma vez que aqui usamos async await
        try {
            await fetch('http://localhost:1337/api/products?populate=deep').then(response => {
                return response.json();
            }).then(json => {
                jsonCategoryRef.current = json;
            }).then(a => {
                saveCategoryRef.current = jsonCategoryRef.current.data;
            }).then(b => {
                return (handleSetProducts());
            }).then(value => {
                setTimeout(() => { setDataLoaded(value) }, 300);
            });
        } catch (error) {
            console.log('Error: ', error);
        }
    }, []);


    useEffect(() => {
        setTimeout(() => { handleLoadProducts() }, 300);
    }, [handleLoadProducts]);

    return (
        <div className='container-skins'>
            <Header />
            <section className="skins">
                <h1>SKINS</h1>
                <div className="box-skins">
                    {saveCategoryRef.current.map((products) => {
                        return (
                            <BoxSkins name={products.attributes.nome} img={'http://localhost:1337' + products.attributes.photo.data[0].attributes.url} description={products.attributes.descricao} price={'R$ ' + products.attributes.valor} />

                        )
                    })}
                </div>
            </section>
            <Footer />
        </div>
    )

}

export default Skins;


