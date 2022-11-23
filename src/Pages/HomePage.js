import React from 'react';





const HomePage = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting){
                entry.target.classList.add('show');
            }else entry.target.classList.remove('show');
        });
    });
    const hiddenElememnts = document.querySelectorAll('.hidden');
    hiddenElememnts.forEach((el) => observer.observe(el));
    return (
        <div>
            <section style={{justifyContent: 'center', alignItems: 'center', heigth: '90vh'}}>
                <div className="bg-image ">
                </div>
            </section>
            <section className="hidden bg-section text-white">
                <h2>Projects</h2>
                <p>KTH Ergonomi</p>
            </section>
            <section className="hidden">
                <h2>Projects</h2>
                <p>Paint Master</p>
            </section>
        </div>


    );
};

export default HomePage;