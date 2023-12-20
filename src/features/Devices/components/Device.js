import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from "../../../util/404Error/components/NotFound";

const Device = () => {
    const { postId } = useParams();

    const [postData, setPostData] = useState(null);

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const response = await import(`../json/${postId}.json`);
                setPostData(response.default);
            } catch (error) {
                console.error('エラー:', error);
            }
        };
    
        fetchPostData();
    }, [postId]);

    if (!postData) {
        return (
            <>
                <NotFound />
            </>
        );
    }

    const { name, mini_description, price, url1, description1_1, description1_2, description1_3, description1_4, description1_5, description2_1, description2_2, description2_3, description2_4, description2_5, description3_1, description3_2, description3_3, description3_4, description3_5, description4_1, description4_2, description4_3, description4_4, description4_5, description5_1, description5_2, description5_3, description5_4, description5_5, description6_1, description6_2, description6_3, description6_4, description6_5, list_1, list_2, list_3, list_4, list_5, list_6, list_7, list_8, list_9, list_10, image1, image2, image3, image4, image5, } = postData;

    return (
        <div className="mt-8 text-lg mx-120 max-2xl:mx-96 max-xl:mx-64 max-lg:mx-36 max-md:mx-16 max-sm:mx-6 text-black dark:text-dark">
            <body>
                <title>{name}</title>
            </body>
            <div className=" border-b-2 border-black dark:border-dark">
                <img className="rounded-3xl w-full" src={image1} alt="" loading="lazy" />
                <div className="mt-8 mx-6 pb-2">
                    <span className="text-4xl max-lg:text-3xl max-sm:text-2xl font-bold">{name}</span>
                    <div className="flex justify-between">
                        <div className="flex items-center text-xl max-sm:text-lg">
                            {mini_description}
                            <a href={url1} className="ml-2 text-blue-500 hover:opacity-70" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" fill="currentColor"
                                    class="bi bi-cart" viewBox="0 0 16 16">
                                    <path
                                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>
                            </a>
                        </div>
                        <span className="text-3xl max-lg:text-2xl max-sm:text-lg opacity-75">{price}</span>
                    </div>
                </div>
            </div>

            <div>
                <div className="my-4 mx-8 max-sm:mx-4">
                    {[description1_1, description1_2, description1_3, description1_4, description1_5].filter(Boolean).map((item, index) => (
                        <div key={index}>
                            {item}
                            <br />
                        </div>
                    ))}
                </div>
                <img src={image2} alt="" className="rounded-3xl w-full" loading="lazy" />
                <div className="my-4 mx-8 max-sm:mx-4">
                    {[description2_1, description2_2, description2_3, description2_4, description2_5].filter(Boolean).map((item, index) => (
                        <div key={index}>
                            {item}
                            <br />
                        </div>
                    ))}
                    <ul className="list-disc mx-8 my-4">
                        {[list_1, list_2, list_3, list_4, list_5, list_6, list_7, list_8, list_9, list_10].map((item, index) => (
                            item && <li key={index}>{item}</li>
                        ))}
                    </ul>
                    {[description3_1, description3_2, description3_3, description3_4, description3_5].filter(Boolean).map((item, index) => (
                        <div key={index}>
                            {item}
                            <br />
                        </div>
                    ))}
                </div>
                <img src={image3} alt="" className="rounded-3xl w-full" loading="lazy" />
                <div className="my-4 mx-8 max-sm:mx-4">
                    {[description4_1, description4_2, description4_3, description4_4, description4_5].filter(Boolean).map((item, index) => (
                        <div key={index}>
                            {item}
                            <br />
                        </div>
                    ))}
                </div>
                <img src={image4} alt="" className="rounded-3xl w-full" loading="lazy" />
                <div className="my-4 mx-8 max-sm:mx-4">
                    {[description5_1, description5_2, description5_3, description5_4, description5_5].filter(Boolean).map((item, index) => (
                        <div key={index}>
                            {item}
                            <br />
                        </div>
                    ))}
                </div>
                <img src={image5} alt="" className="rounded-3xl w-full" loading="lazy" />
                <div className="my-4 mx-8 max-sm:mx-4">
                    {[description6_1, description6_2, description6_3, description6_4, description6_5].filter(Boolean).map((item, index) => (
                        <div key={index}>
                            {item}
                            <br />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Device;