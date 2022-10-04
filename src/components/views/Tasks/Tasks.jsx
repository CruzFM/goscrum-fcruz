import './tasks.styles.css';

import { Header } from '../../Header/Header';
import { useResize } from '../../../hooks/useResize';

export const Tasks= ()=> {

    const { isPhone } = useResize();

    return(
        <>
            <Header />
            <main>
                <section className='wrapper_list'>
                    <div className='list_header'>
                        <h2>Mis Tareas</h2>
                    </div>
                    {isPhone === true ? 
                    <div className='list phone'>
                        <div className='card'>
                            <div className='close'>x</div>
                            <h3>Tarea 1</h3>
                            <h6>24/03/2022 12:12 hs.</h6>
                            <h5>Facundo Uferer</h5>
                            <div className='card--btn'>
                                <button type="button">Nueva</button>
                                <button type="button">Alta</button>
                            </div>
                            <p>Descripción lorem</p>
                        </div>
                        <div className='card'>
                            <div className='close'>x</div>
                            <h3>Tarea 1</h3>
                            <h6>24/03/2022 12:12 hs.</h6>
                            <h5>Facundo Uferer</h5>
                            <div className='card--btn'>
                                <button type="button">Nueva</button>
                                <button type="button">Alta</button>
                            </div>
                            <p>Descripción lorem</p>
                        </div>
                        <div className='card'>
                            <div className='close'>x</div>
                            <h3>Tarea 1</h3>
                            <h6>24/03/2022 12:12 hs.</h6>
                            <h5>Facundo Uferer</h5>
                            <div className='card--btn'>
                                <button type="button">Nueva</button>
                                <button type="button">Alta</button>
                            </div>
                            <p>Descripción lorem</p>
                        </div>
                    </div> 
                    : <div className='list desktop'>
                        <div className='card'>
                            <div className='close'>x</div>
                            <h3>Tarea 1</h3>
                            <h6>24/03/2022 12:12 hs.</h6>
                            <h5>Facundo Uferer</h5>
                            <div className='card--btn'>
                                <button type="button">Nueva</button>
                                <button type="button">Alta</button>
                            </div>
                            <p>Descripción lorem</p>
                        </div>
                        <div className='card'>
                            <div className='close'>x</div>
                            <h3>Tarea 1</h3>
                            <h6>24/03/2022 12:12 hs.</h6>
                            <h5>Facundo Uferer</h5>
                            <div className='card--btn'>
                                <button type="button">Nueva</button>
                                <button type="button">Alta</button>
                            </div>
                            <p>Descripción lorem</p>
                        </div>
                        <div className='card'>
                            <div className='close'>x</div>
                            <h3>Tarea 1</h3>
                            <h6>24/03/2022 12:12 hs.</h6>
                            <h5>Facundo Uferer</h5>
                            <div className='card--btn'>
                                <button type="button">Nueva</button>
                                <button type="button">Alta</button>
                            </div>
                            <p>Descripción lorem</p>
                        </div>
                    </div>
                    }
                </section>
            </main>
        </>

    )}