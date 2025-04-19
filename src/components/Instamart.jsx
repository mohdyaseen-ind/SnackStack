import React,{useState} from 'react'

const Section = ({ title , description , isVisible , setIsVisible}) => {
    return (
        <div className='border-black p-2 m-2'>
            <h3 className='font-bold text-xl'>{title}</h3>
            {isVisible ? 
            <>
            <button className='cursor-pointer underline' onClick={() => setIsVisible(false)}>
                Hide
            </button> 
            <p>{description}</p>
            </>
            : <button className='cursor-pointer underline' onClick={() => setIsVisible(true)}>
                Show
            </button>}
        </div>
    )
}

const Instamart = () => {
    const [visibleSection , setVisibleSection] = useState("")
    return (
        <>
        <h1 className='text-3xl p-2 m-2 font-bold'>Instamart</h1>
        <Section title={"About Instamart"} description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
            isVisible={visibleSection === "about"}
            setIsVisible={() => setVisibleSection("about")}
        />
        <Section title={"Team"} description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
            isVisible={visibleSection === "team"}
            setIsVisible={() => setVisibleSection("team")}
        />
        <Section title={"Careers"} description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
            isVisible={visibleSection === "careers"}
            setIsVisible={() => setVisibleSection("careers")}
        />
        <Section title={"Legacy"} description={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."}
            isVisible={visibleSection === "legacy"}
            setIsVisible={() => setVisibleSection("legacy")}
        />
        </>
    )
}

export default Instamart