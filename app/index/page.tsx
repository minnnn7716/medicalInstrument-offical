"use client";

import { useEffect, useState } from "react";

export default function Page() {
    const [scrollY, setScrollY] = useState(0);
    const [viewport, setViewport] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateViewport = () => {
            setViewport({ width: window.innerWidth, height: window.innerHeight });
        };

        const onScroll = () => {
            setScrollY(window.scrollY);
        };

        updateViewport();
        onScroll();

        window.addEventListener("resize", updateViewport);
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("resize", updateViewport);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    const progress = Math.min(scrollY / 320, 1);
    const startX = viewport.width / 2;
    const startY = viewport.height / 2;
    const endX = 64;
    const endY = 44;
    const logoX = startX + (endX - startX) * progress;
    const logoY = startY + (endY - startY) * progress;
    const logoSize = 100 + (26 - 100) * progress;

    return <>
        <a
            href="#"
            className="fixed z-[70] font-bold tracking-tight leading-none text-black drop-shadow-lg"
            style={{
                left: `${logoX}px`,
                top: `${logoY}px`,
                fontSize: `${logoSize}pt`,
                transform: "translate(-50%, -50%)"
            }}
        >
            logo
        </a>

        <nav className="flex top-0 right-0 left-0 justify-between fixed z-50 p-6 text-white">
            <div className="w-24" aria-hidden />
            <ul className="flex">
                <li>links</li>
            </ul>
        </nav>

        <header className="relative">
            <div className="sticky top-0 h-svh">
                <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url('/image/header_background_img.webp')`
                }}
                />
            </div>

            <div className="relative z-10">
                <section className="min-h-svh px-30">
                    <div className="bg-white w-[55%] p-5 rounded-lg">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut eum aut nam, vitae natus aspernatur id atque laudantium quam nesciunt voluptatem dicta ipsa dolorum adipisci, eaque, labore eius. Corrupti odit commodi suscipit assumenda odio vero hic sit, in nesciunt id rem expedita aspernatur excepturi sed possimus neque officia dolores, velit praesentium quas! Nisi ipsum, officiis dignissimos asperiores dolores nesciunt quod beatae non sunt natus placeat ipsam praesentium aperiam eos accusamus ducimus sit vero minima officia saepe culpa aut eaque quasi ad? Obcaecati repellat itaque est, cum dolorem aliquam unde reprehenderit quam nostrum rerum doloribus delectus culpa quasi esse tempore qui fugiat modi, expedita quo. At, cupiditate in aspernatur, consequuntur aliquid totam cumque voluptate repellat ipsam quia velit quaerat! Repellendus laborum minus nobis, recusandae ipsa assumenda inventore facere tempore temporibus odit. Illum, quas praesentium reprehenderit temporibus consectetur odio? Quo maxime beatae dignissimos, cum quidem iusto culpa aliquid cupiditate ex voluptas dolorem.    
                    </div>
                </section>
            </div>
        </header>

        <section className="p-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum vitae ex ducimus adipisci laboriosam deserunt harum eligendi ipsa numquam minus enim quidem, amet porro, quam est optio nobis maiores! A reprehenderit sunt sapiente, quam dolores pariatur, laboriosam deserunt atque quia excepturi sint magni voluptatibus optio facere libero dignissimos doloremque ratione officiis accusamus quibusdam aliquid ipsa? Porro sunt deleniti culpa, doloremque dolore modi aliquam similique impedit numquam obcaecati earum. Quasi inventore optio cum laboriosam corrupti, quia aperiam alias non velit ratione, id minus labore laudantium blanditiis, ut impedit expedita aspernatur quos neque distinctio a! Inventore qui quaerat consequatur aliquid ut temporibus numquam dicta sunt. Maxime animi laudantium ea officia! Accusamus sint, nostrum corrupti optio laborum deleniti suscipit sit velit perspiciatis illo vitae, minus adipisci, voluptas tempore quia exercitationem nam quidem. Rem, minima non nemo omnis, eos ex perferendis est sunt perspiciatis quidem vero et nesciunt eveniet obcaecati quis dolore accusantium ipsa quasi eaque voluptates illo! Doloremque blanditiis ipsum consequuntur quam cum hic eum molestias reiciendis excepturi, voluptates ducimus ut accusantium quis exercitationem quasi cupiditate dolorum laborum itaque ipsam veritatis animi maxime iure amet. Necessitatibus magnam quaerat, animi hic beatae, soluta laborum, corporis eum consectetur temporibus labore voluptas totam. Labore nihil aliquid aspernatur obcaecati! Reiciendis neque nemo alias, voluptatum repellendus necessitatibus modi non ex voluptatibus veniam similique quaerat praesentium reprehenderit nostrum dolorum placeat, suscipit corporis delectus vero molestias laboriosam aut voluptas sapiente odio. Placeat amet natus, sit commodi consequatur quidem. Impedit deleniti dicta quidem fugiat, voluptatibus laudantium, excepturi sapiente sit, illum provident quisquam officia! Distinctio debitis minus natus iste soluta itaque molestiae quisquam id molestias, fugiat maiores tenetur aperiam quaerat magni ut animi aspernatur qui quasi nemo nihil provident veritatis exercitationem atque. Quis dignissimos praesentium nobis, hic accusamus maiores earum incidunt adipisci iusto vel at error sapiente aliquam, perspiciatis quibusdam. Enim officia eveniet voluptatem repellat odit quam animi, ullam repudiandae sint dolores quasi magnam ratione totam nisi eum deleniti illum illo modi reprehenderit deserunt amet! Sed similique aliquam, doloremque natus cumque enim corporis rerum sequi, aliquid quo numquam voluptatem exercitationem adipisci vel in eos maiores atque eius dolores, voluptatibus repudiandae odio impedit neque ex. Molestiae, vero ipsam dolor sapiente eum commodi perspiciatis, ratione sed veritatis illo optio amet. Animi veritatis magni eligendi dolorem nisi ipsam reprehenderit? Inventore consequuntur facilis sequi in repellendus et ad alias consectetur a eveniet est asperiores, animi, magni repellat eos. Molestias dignissimos iusto hic ipsam adipisci? Vel voluptatibus dicta sequi? Tempora at nobis excepturi, saepe facilis deserunt repellat inventore cumque tenetur quis quaerat ipsum ab, ea numquam temporibus, laudantium sit! Velit labore aliquam doloremque! Veniam consequuntur provident doloremque nisi! At aperiam cum reprehenderit nobis soluta. Magni earum nulla iste ipsam modi ut nesciunt ea sed eos non commodi, qui dolorem sint aut sapiente accusantium esse impedit nihil amet minima laudantium dolorum maxime odio repudiandae. Dolores voluptates officia consectetur, eaque perspiciatis cupiditate velit dignissimos aliquid possimus repellendus nisi quae at, voluptatem ullam amet facilis? Commodi, mollitia odio minus natus animi provident libero aliquid incidunt architecto alias accusamus praesentium. Totam voluptatum ipsam vel ipsa ipsum! Cum deleniti velit, obcaecati, fugiat doloribus debitis fugit dignissimos odio accusantium maxime sequi corrupti doloremque aut voluptatem incidunt tenetur quam recusandae delectus eligendi asperiores. Fugit, ex ab! Quod fuga odio quaerat atque tempore iusto saepe voluptatem perspiciatis dignissimos exercitationem doloremque qui quisquam, quis ea quam, placeat ipsam. Doloribus eveniet animi recusandae consequuntur totam, earum assumenda perferendis sequi aliquid natus eligendi minima illo odio possimus. Quae necessitatibus laboriosam error consectetur sint exercitationem natus accusamus quia laudantium totam saepe animi, asperiores aliquid itaque corrupti quaerat corporis sunt odit fuga iste facilis porro labore nostrum quis! Pariatur quidem voluptate impedit sed reiciendis perferendis repellat aspernatur labore veritatis odio velit modi ipsam voluptatem nobis ex, architecto hic qui alias. Doloremque quo odio repellat cum ipsum, quas doloribus voluptatum porro perferendis est quidem at animi veniam sequi vitae similique enim corrupti accusamus minus? Quidem accusamus ratione quis sit aspernatur. Alias, ipsum libero. Unde, cumque molestias? Facere hic soluta a alias, laudantium nisi odit officiis deleniti fugit inventore nostrum ipsam dolores eum. Fugiat in, tempora obcaecati earum fugit quisquam possimus qui deleniti. Minus dolores laboriosam, dolor, quis sapiente expedita debitis assumenda reprehenderit non nemo molestias sit, itaque qui similique velit voluptatum libero natus voluptate totam neque saepe fugiat laudantium nulla. Officiis impedit excepturi iste atque? Ullam soluta natus similique sequi et cupiditate quis modi reprehenderit, eum illo aspernatur aut tempore eveniet illum itaque voluptates tenetur nesciunt neque explicabo fuga adipisci. Beatae laborum ducimus dolor animi fugiat ipsam iusto voluptatibus ex aspernatur necessitatibus enim nobis excepturi nesciunt, totam voluptate odit possimus laudantium aliquid cupiditate accusamus eum repudiandae illum maxime! Expedita ab consequuntur perspiciatis eius facilis atque voluptatibus possimus dolorem, incidunt eveniet veniam fugit molestias. Maxime quae veniam necessitatibus libero, atque quia voluptas eligendi magnam reprehenderit sunt qui illo, quisquam optio error cum cupiditate incidunt temporibus obcaecati deleniti, dolorum totam quod! Maiores velit ab at reprehenderit vitae quaerat aliquam, quo accusantium eligendi saepe. Explicabo minima ea, quibusdam voluptates assumenda voluptatibus. In sapiente odit quia optio, sequi consequuntur nisi voluptatum ab, aut dolorum reprehenderit omnis ducimus nostrum doloribus numquam voluptates aliquid culpa nobis dolor! Consectetur cupiditate sit sint in provident commodi doloremque? Odit fugit explicabo nulla velit? Fuga ea modi, nobis officia necessitatibus et id obcaecati possimus, provident quis repudiandae similique animi pariatur facilis quidem corporis quos sapiente? Assumenda eligendi quam quos nisi consectetur quod dolore aliquam dolorem soluta. Minima laborum dolor enim quas omnis impedit ipsa quae reiciendis deleniti sed provident earum deserunt nam alias saepe, vel nulla eius sapiente velit aut quasi nobis at magnam atque! Veniam magni alias tempore in! Sit, magnam dolore maiores vel minus recusandae aliquam! Corporis, inventore? Sed eveniet facilis eligendi animi, id beatae maiores. Culpa architecto delectus natus, eveniet in suscipit porro quibusdam, dignissimos quae assumenda iusto numquam itaque repellendus placeat. Dolorum quo maiores id nihil odit laborum consectetur velit ab molestias ex corrupti amet facere quia, dolor, saepe quibusdam fugiat? Ea eos similique error velit facere iste. Corrupti nihil consequatur vero id voluptas, voluptatum dolorum tenetur?
        </section>
    </>
}