import React from 'react'
import Skeleton from 'react-loading-skeleton'

function PageSkeleton() {
  return (
    <div className="page page--skeleton">
      <main className="content">
        <Skeleton count={5} height={20} style={{ margin: '0.5rem 0' }} />
      </main>
    </div>
  )
}

export default PageSkeleton