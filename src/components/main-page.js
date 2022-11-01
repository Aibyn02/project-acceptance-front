import React from "react";
import image1 from "../imgs/strc2.png"
import image2 from "../imgs/process.png"
import logo1 from "../imgs/mcriap2.png"
import logo2 from "../imgs/theworldbank.jpg"
import logo3 from "../imgs/logo8.png"
import logo4 from "../imgs/aitu.png"

import picture1 from "../imgs/1picture1.png"
import picture2 from "../imgs/2picture2.png"
import picture3 from "../imgs/3picture3.png"
import picture4 from "../imgs/4picture4.png"
import picture5 from "../imgs/5picture5.png"
import picture6 from "../imgs/6picture6.png"
import picture7 from "../imgs/7picture7.png"
import picture8 from "../imgs/8picture8.png"
import picture9 from "../imgs/9picture9.png"
import picture10 from "../imgs/10picture10.png"


export default function MainPage() {

    return (<div className="main">
        <div className="text-center text-white">
            <div className="bg-image">
                <br/>
                <br/>
                <br/>
                <br/>
                <h2>Развитие потенциала Центра компетенций <br/> «Электронная промышленность»</h2>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
        <br/>

        <div className="container">
            <br/>
            <br/>
            <div className="row">
                <div className="col">
                    <br/>
                    <h5>Цель проекта</h5>
                    <p className="text-secondary">Целью проекта по созданию
                        Центра компетенций является содействие развитию
                        отечественного производства ИКТ-оборудования
                        и программного обеспечения на базе open source (открытых)
                        решений и развитие электронной промышленности Казахстана.
                    </p>
                    <br/>


                </div>
            </div>
        </div>


        <div className="grey-bg">
            <div className="container">
                <br/>
                <h5>Задачи проекта</h5>
                <p className="text-secondary font-weight-bold">
                    Деятельность ЦК в среднесрочном периоде будет направлена на решение следующих задач: </p>
                <p className="text-secondary">
                    - Привлечение новых участников, повышение квалификации персонала для выполнения НИОКР и
                    инженерных проектов.<br/>

                    - Разработка физического уровня High-Phy распределенного блока (DU) с применением тестовой
                    среды архитектуры O-RAN.<br/>

                    - Разработка и внедрение отечественной программно-аппаратной платформы на основе open-source
                    решений для WEB-ориентированных систем автоматизации в рамках импортозамещения.<br/>

                    - Создание электронных средств измерения массовой концентрации пыли и оптической плотности в
                    дымовых газах топливосжигающих установок, работающих на любом типе топлива.<br/>

                    - Разработка комплексного анализа состояния и перспектив технологического развития ЭП с
                    предложениями по изменению технологической политики.
                </p>
                <br/>
            </div>
        </div>

        <br/>


        <div className="container p-3 mb-5 bg-body rounded shadow">
            <div className="row">
                <div className="col text-center">
                    <p className="text-center">Структура Open RAN</p>
                    <img src={image2} className="astanait rounded" alt="asd"/>
                </div>
                <div className="col text-center">
                    <p className="text-center">Процесс перехода на O-RAN</p>
                    <img src={image1} className="astanait rounded" alt="asd"/>
                </div>
            </div>
        </div>

        <div className="grey-bg">
            <div className="container-sm">
                <br/>
                <h2 className="text-center">Team</h2>
                <br/>

                <div className="white-bg row p-3 mb-4 bg-body rounded shadow">
                    <div className="col-3">
                        <img src={picture1} className="pictures rounded" alt="first"/>
                    </div>
                    <div className="col-3">
                        <h5>Нефтисов А.В.</h5>
                        <p className="text-secondary">Руководитель проектов</p>
                    </div>
                    <div className="col-6">
                        <p>Общее руководство проектом. Формирование стратегии развития центра.
                            Контроль выполнения операционной и проектной деятельности центра.
                            Разработка планов работы центра.</p>
                    </div>
                </div>

                <div className="white-bg row p-3 mb-4 bg-body rounded shadow">
                    <div className="col-6">
                        <p>Контроль выполнения задач, выстраивание бизнес-процессов</p>
                    </div>
                    <div className="col-3">
                        <h5>Белощицкий А.А.</h5>
                        <p className="text-secondary">Соисполнитель</p>
                    </div>
                    <div className="col-3">
                        <img src={picture2} className="pictures rounded" alt="first"/>
                    </div>
                </div>

                <div className="white-bg row p-3 mb-4 bg-body rounded shadow">
                    <div className="col-3">
                        <img src={picture3} className="pictures rounded" alt="first"/>
                    </div>
                    <div className="col-3">
                        <h5>Лебедев Д.В.</h5>
                        <p className="text-secondary">Соисполнитель</p>
                    </div>
                    <div className="col-6">
                        <p>Разработка на FGPA, высокоэффективные вычисления на основе параллелизации вычислений,
                            разработка предложений по развитию государственной технологической политики
                            Разработка физического уровня High-Phy распределенного блока
                            (DU) с применением тестовой среды архитектуры O-RAN
                        </p>
                    </div>
                </div>

                <div className="white-bg row p-3 mb-4 bg-body rounded shadow">
                    <div className="col-6">
                        <p>Финансовый консалтинг, сопровождение выполнение проекта,
                            построение устойчивой финансовой модели функционирования центра</p>
                    </div>
                    <div className="col-3">
                        <h5>Арын А.М.</h5>
                        <p className="text-secondary">Соисполнитель</p>
                    </div>
                    <div className="col-3">
                        <img src={picture4} className="pictures rounded" alt="first"/>
                    </div>
                </div>

                <div className="white-bg row p-3 mb-4 bg-body rounded shadow">
                    <div className="col-3">
                        <img src={picture5} className="pictures rounded" alt="first"/>
                    </div>
                    <div className="col-3">
                        <h5>Камбарова Ж.Д.</h5>
                        <p className="text-secondary">Соисполнитель</p>
                    </div>
                    <div className="col-6">
                        <p>Форсайт - исследования в области работы центра.
                            Документирование деятельности центра, формирование отчетной документации.
                            разработка предложений по развитию государственной технологической
                        </p>
                    </div>
                </div>

                <div className="white-bg row p-3 mb-4 rounded shadow">
                    <div className="col-6">
                        <p>Разработка на FGPA, высокоэффективные вычисления на основе
                            параллелизации вычислений в рамках телекоммуникаций
                            Разработка физического уровня High-Phy распределенного
                            блока (DU) с применением тестовой среды архитектуры O-RAN.
                        </p>
                    </div>
                    <div className="col-3">
                        <h5>Нурахов Е.С.</h5>
                        <p className="text-secondary">Соисполнитель</p>
                    </div>
                    <div className="col-3">
                        <img src={picture6} className="pictures rounded" alt="first"/>
                    </div>
                </div>

                <div className="white-bg row p-3 mb-4 bg-body rounded shadow">
                    <div className="col-3">
                        <img src={picture7} className="pictures rounded" alt="first"/>
                    </div>
                    <div className="col-3">
                        <h5>Тасмурзаев Н.М.</h5>
                        <p className="text-secondary">Соисполнитель</p>
                    </div>
                    <div className="col-6">
                        <p>Разработка на FGPA, высокоэффективные вычисления
                            на основе параллелизации вычислений в рамках телекоммуникаций
                            Разработка физического уровня High-Phy распределенного блока
                            (DU) с применением тестовой среды архитектуры O-RAN

                        </p>
                    </div>
                </div>

                <div className="white-bg row p-3 mb-4 rounded shadow">
                    <div className="col-6">
                        <p>Разработка на FGPA, высокоэффективные вычисления на
                            основе параллелизации вычислений в рамках телекоммуникаций
                            “Разработка и внедрение отечественной программно-аппаратной
                            платформы на основе open-source решений для WEB-ориентированных
                            систем автоматизации в рамках импортозамещения”.

                        </p>
                    </div>
                    <div className="col-3">
                        <h5>Муханбет А.А</h5>
                        <p className="text-secondary">Соисполнитель</p>
                    </div>
                    <div className="col-3">
                        <img src={picture9} className="pictures rounded" alt="first"/>
                    </div>
                </div>

                <div className="white-bg row p-3 mb-4 bg-body rounded shadow">
                    <div className="col-3">
                        <img src={picture8} className="pictures rounded" alt="first"/>
                    </div>
                    <div className="col-3">
                        <h5>Амангелды Б.С.</h5>
                        <p className="text-secondary">Соисполнитель</p>
                    </div>
                    <div className="col-6">
                        <p>Разработка на FGPA, высокоэффективные вычисления
                            на основе параллелизации вычислений в рамках телекоммуникаций
                            “Создание электронных средств измерения массовой
                            концентрации пыли и оптической плотности в дымовых
                            газах топливосжигающих установок, работающих на любом типе топлива”.
                        </p>
                    </div>
                </div>

                <div className="white-bg row p-3 mb-4 rounded shadow">
                    <div className="col-6">
                        <p>Сопровождение выполнения проекта,
                            упаковка результатов НИОКР в готовый продукт,
                            продвижение на рынке, выработка стратегии продвижения

                        </p>
                    </div>
                    <div className="col-3">
                        <h5>Ордабаев С.Б.</h5>
                        <p className="text-secondary">Соисполнитель</p>
                    </div>
                    <div className="col-3">
                        <img src={picture10} className="pictures rounded" alt="first"/>
                    </div>
                </div>

            </div>
            <br/>

        </div>
        <div>
            <br/>
            <div className="container">
                <br/>
                <div className="row">

                    <div className="col text-center">
                        <a href="https://www.gov.kz/memleket/entities/mdai?lang=ru" className="navbar-brand">
                            <img src={logo1} className="logo2 rounded" alt="asd"/>
                        </a>
                    </div>
                    <div className="col text-center">
                        <a href="https://www.worldbank.org/en/who-we-are/ibrd" className="navbar-brand">
                            <img src={logo2} className="logos rounded" alt="asd"/>
                        </a>
                    </div>
                    <div className="col text-center">
                        <a href="http://www.fpip.kz/index.php/ru/" className="navbar-brand">
                            <img src={logo3} className="logo2 rounded" alt="asd"/>
                        </a>
                    </div>
                    <div className="col text-center">
                        <a href="https://astanait.edu.kz/en/main-page/" className="navbar-brand">
                            <img src={logo4} className="logos rounded" alt="asd"/>
                        </a>
                    </div>

                </div>

            </div>
            <br/>
        </div>

    </div>)
}