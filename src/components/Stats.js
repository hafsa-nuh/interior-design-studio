import React from 'react'

const Stats = ({stats}) => {
  return (
    <>
      <div className="bg-green rounded-[20px] p-12 ml-2 mr-2">
        <div className="flex flex-wrap gap-6">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="min-h-[70px] w-2/6 lg:flex-1   odd:border-r lg:odd:border-r lg:even:border-r lg:even:last:border-none flex flex-col justify-center"
              >
                <div
                  className="text-2xl lg:text-4xl
                text-accent font-semibold "
                >
                  {item.value}
                </div>
                <div className="text-base  font-light max-w-[110px] ">
                  {item.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Stats