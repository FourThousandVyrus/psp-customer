export function StatCardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 animate-pulse">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-lg" />
        <div className="w-12 h-4 bg-gray-200 rounded" />
      </div>
      <div className="w-20 h-3 bg-gray-200 rounded mb-2" />
      <div className="w-28 h-7 bg-gray-200 rounded" />
    </div>
  );
}

export function ChartSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 animate-pulse">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="w-40 h-5 bg-gray-200 rounded mb-2" />
          <div className="w-56 h-3 bg-gray-200 rounded" />
        </div>
        <div className="w-48 h-8 bg-gray-200 rounded-lg" />
      </div>
      <div className="h-80 bg-gray-100 rounded-lg flex items-end gap-2 p-6">
        {[40, 55, 45, 70, 85, 90, 65].map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-gray-200 rounded-t"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-gray-100 rounded-lg p-4">
            <div className="w-16 h-3 bg-gray-200 rounded mb-2" />
            <div className="w-20 h-6 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function TransactionSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 animate-pulse">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="w-36 h-5 bg-gray-200 rounded" />
        <div className="w-16 h-4 bg-gray-200 rounded" />
      </div>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-lg" />
            <div>
              <div className="w-32 h-4 bg-gray-200 rounded mb-2" />
              <div className="w-24 h-3 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="text-right">
            <div className="w-20 h-4 bg-gray-200 rounded mb-2" />
            <div className="w-16 h-5 bg-gray-200 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function DonutSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 animate-pulse">
      <div className="w-36 h-5 bg-gray-200 rounded mb-6" />
      <div className="h-52 flex items-center justify-center">
        <div className="w-[170px] h-[170px] rounded-full border-[25px] border-gray-200" />
      </div>
      <div className="mt-4 space-y-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 bg-gray-200 rounded-full" />
              <div className="w-20 h-4 bg-gray-200 rounded" />
            </div>
            <div className="w-24 h-4 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
