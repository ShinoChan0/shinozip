import React from 'react'

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-20 mb-24">
      <body>
        <title>404 NotFound</title>
      </body>
      <span className="text-9xl max-md:text-7xl font-bold text-red-500">404</span>
      <span className="text-9xl max-md:text-7xl font-bold text-red-500 mb-10">NotFound</span>
      <div className="text-3xl max-md:text-xl font-bold">
        ファイルパス間違ってるかも！
      </div>
      <div className="text-3xl max-md:text-xl font-bold">
        You may have the wrong file path!
      </div>
    </div>
  )
}

export default NotFound