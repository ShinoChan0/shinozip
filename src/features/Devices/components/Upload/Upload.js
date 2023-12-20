import React from 'react'

const Upload = () => {
    return (
        <>
            <div className="mx-32 text-black dark:text-white">
                <div className="my-8">
                    <span className="text-5xl font-bold border-b-4 border-black dark:border-white">
                        Upload device information
                    </span>
                </div>
                <div>
                    <form className="text-xl">
                        <div className="ml-5">
                            <span className="text-3xl font-bold">
                                User authentication
                            </span>
                            <div className="pl-4 ml-4 border-l-2 border-black">
                                <div className="my-2 flex">
                                    <span>name</span>
                                    <input type="text" required minLength={1} className="ml-4 rounded-lg after:border-black" />
                                </div>
                                <div className="my-2">
                                    <span>password</span>
                                    <input type="password" required minLength={1} className="ml-4 rounded-lg after:border-black" />
                                </div>
                            </div>
                        </div>

                        <div className="ml-5">
                            <span className="text-3xl font-bold">
                                Must
                            </span>
                            <div className="pl-4 ml-4 border-l-2 border-black">
                                <div className="my-2">
                                    <span>name</span>
                                    <input type="text" required minLength={1} className="ml-4 rounded-lg after:border-black" />
                                </div>
                                <div className="my-2">
                                    <span>mini_description</span>
                                    <input type="text" required minLength={1} className="ml-4 rounded-lg after:border-black" />
                                </div>
                                <div className="my-2">
                                    <span>price</span>
                                    <input type="text" required minLength={1} className="ml-4 rounded-lg after:border-black" />
                                </div>
                                <div className="my-2">
                                    <span>url_1</span>
                                    <input type="text" required minLength={1} className="ml-4 rounded-lg after:border-black" />
                                </div>
                            </div>
                        </div>

                        <div className="ml-5 mb-8">
                            <span className="text-3xl font-bold">
                                Description
                            </span>
                            <div className="pl-4 ml-4 border-l-2 border-black">
                                <div className="mb-8">
                                    <div className="my-2">
                                        <span>description1_1</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                    <div className="my-2">
                                        <span>description1_2</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                    <div className="my-2">
                                        <span>description1_3</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                    <div className="my-2">
                                        <span>description1_4</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                    <div className="my-2">
                                        <span>description1_5</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <div className="my-2">
                                        <span>description2_1</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                    <div className="my-2">
                                        <span>description2_2</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                    <div className="my-2">
                                        <span>description2_3</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                    <div className="my-2">
                                        <span>description2_4</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                    <div className="my-2">
                                        <span>description2_5</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <div className="my-2">
                                        <span>description3_1</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                    <div className="my-2">
                                        <span>description3_2</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                    <div className="my-2">
                                        <span>description3_3</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                    <div className="my-2">
                                        <span>description3_4</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                    <div className="my-2">
                                        <span>description3_5</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <div className="my-2">
                                        <span>description4_1</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                    <div className="my-2">
                                        <span>description4_2</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                    <div className="my-2">
                                        <span>description4_3</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                    <div className="my-2">
                                        <span>description4_4</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                    <div className="my-2">
                                        <span>description4_5</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <div className="my-2">
                                        <span>description5_1</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                    <div className="my-2">
                                        <span>description5_2</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                    <div className="my-2">
                                        <span>description5_3</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                    <div className="my-2">
                                        <span>description5_4</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                    <div className="my-2">
                                        <span>description5_5</span>
                                        <input type="text" className="ml-4 rounded-lg after:border-black" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ml-5">
                            <span className="text-3xl font-bold">
                                List
                            </span>
                            <div className="pl-4 ml-4 border-l-2 border-black">
                                <div className="my-2">
                                    <span>list_1</span>
                                    <input type="text" className="ml-4 rounded-lg after:border-black" />
                                </div>
                                <div className="my-2">
                                    <span>list_2</span>
                                    <input type="text" className="ml-4 rounded-lg after:border-black" />
                                </div>
                                <div className="my-2">
                                    <span>list_3</span>
                                    <input type="text" className="ml-4 rounded-lg after:border-black" />
                                </div>
                                <div className="my-2">
                                    <span>list_4</span>
                                    <input type="text" className="ml-4 rounded-lg after:border-black" />
                                </div>
                                <div className="my-2">
                                    <span>list_5</span>
                                    <input type="text" className="ml-4 rounded-lg after:border-black" />
                                </div>
                            </div>
                        </div>

                        <div className="ml-5">
                            <span className="text-3xl font-bold">
                                Image
                            </span>
                            <div className="pl-4 ml-4 border-l-2 border-black">
                                <div className="my-2">
                                    <span>image1</span>
                                    <input type="file" required accept=".png" className="ml-4 after:border-black" />
                                </div>
                                <div className="my-2">
                                    <span>image2</span>
                                    <input type="file" accept=".png" className="ml-4 after:border-black" />
                                </div>
                                <div className="my-2">
                                    <span>image3</span>
                                    <input type="file" accept=".png" className="ml-4 after:border-black" />
                                </div>
                                <div className="my-2">
                                    <span>image4</span>
                                    <input type="file" accept=".png" className="ml-4 after:border-black" />
                                </div>
                                <div className="my-2">
                                    <span>image5</span>
                                    <input type="file" accept=".png" className="ml-4 after:border-black" />
                                </div>
                            </div>
                            <input type="submit" value="Upload" className="px-12 py-3 border-black border-2 my-4 mx-8 text-3xl bg-opacity-10 bg-black hover:cursor-pointer hover:opacity-70 rounded-full font-bold" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Upload