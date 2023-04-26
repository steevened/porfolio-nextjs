import { HighLight } from '@/components/highlight/HighLight';
import { Gradient } from './Gradient';
import { GradientHighlight } from './GradientHighlight';
import { LoaderSkeleton } from './LoaderSkeleton';
import MarkUpSkeleton from './MarkUpSkeleton';
import { Animation } from './Animation';
import { Combination } from './Combination';
import { FinalSkeletonHl } from './FinalSkeletonHl';

const TailwinSkeleton = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 px-10 md:grid-cols-3 place-items-center">
        {[1, 2, 3].map((_, index) => (
          <LoaderSkeleton key={index} showOverlay />
        ))}
      </div>
      {/* content */}

      <div className="py-10 shadow-app-top-light dark:shadow-app-top">
        <div>
          <h3 className="title-2">Skeleton</h3>
          <ul className="py-3 ml-5 space-y-2 list-disc text-blue-gray-600 dark:text-gray-500">
            <li className="">
              Skeleton is a placeholder for content that hasn&apos;t been loaded
              yet.
            </li>

            <li className="">
              Use Tailwind&apos;s range of utility classes to create a skeleton
              that roughly resembles the content you&apos;re about to load.
            </li>
          </ul>
          <div className="grid py-10 mt-5 bg-white dark:bg-black shadow-app-shadow-light dark:shadow-app-shadow place-content-center">
            <LoaderSkeleton />
          </div>

          <div className="bg-white dark:bg-black shadow-app-shadow-light dark:shadow-app-shadow">
            <MarkUpSkeleton />
          </div>
        </div>
      </div>
      <div className="py-10 shadow-app-top-light dark:shadow-app-top">
        <div>
          <h3 className="title-2">Gradient overlay</h3>
          <ul className="py-3 ml-5 space-y-2 list-disc text-blue-gray-600 dark:text-gray-500">
            <li className="">
              Use Tailwind&apos;s gradient color stops to create a gradient that
              fades from transparent to white and back to transparent.
            </li>
          </ul>
          <div className="grid py-10 mt-5 bg-white dark:bg-black shadow-app-shadow-light dark:shadow-app-shadow place-content-center">
            <Gradient />
          </div>

          <div className="bg-white dark:bg-black shadow-app-shadow-light dark:shadow-app-shadow">
            <GradientHighlight />
          </div>
        </div>
      </div>
      {/* animation */}
      <div className="py-10 shadow-app-top-light dark:shadow-app-top">
        <div>
          <h3 className="title-2">Animation</h3>
          <ul className="py-3 ml-5 space-y-2 list-disc text-blue-gray-600 dark:text-gray-500">
            <li className="">
              Define a CSS keyframe animation that translates elements 100% to
              the right in the extend keyframes object of{' '}
              <span className="text-light-blue-600">tailwind.config.js.</span>
            </li>
            <li>
              Use Tailwind&apos;s arbitrary values to apply the keyframe
              animation to the overlay element.
            </li>
          </ul>
          <div className="grid py-10 mt-5 bg-white dark:bg-black shadow-app-shadow-light dark:shadow-app-shadow place-content-center overflow-hidden">
            <Gradient className="-translate-x-full animate-[gradient-x_2s_infinite]" />
          </div>

          <div className="bg-white dark:bg-black shadow-app-shadow-light dark:shadow-app-shadow">
            <Animation />
            <HighLight
              language="js"
              code={`
              <div class="[...] -translate-x-full animate-[gradient-x_2s_infinite]"></div>
            `}
            />
          </div>
        </div>
      </div>
      {/* combine */}
      <div className="py-10 shadow-app-top-light dark:shadow-app-top">
        <div>
          <h3 className="title-2">
            Combine the skeleton and overlay animation
          </h3>
          <ul className="py-3 ml-5 space-y-2 list-disc text-blue-gray-600 dark:text-gray-500">
            <li className="">
              Add the overlay to a pseudo-element of the skeleton wrapper using
              Tailwind&apos;s{' '}
              <span className="text-light-blue-600">before:</span> modifier.
            </li>
          </ul>
          <div className="grid py-10 mt-5 bg-white dark:bg-black shadow-app-shadow-light dark:shadow-app-shadow place-content-center overflow-hidden">
            <LoaderSkeleton
              className="
              relative  
              before:absolute before:inset-0
              before:-translate-x-full
              before:animate-[gradient-x_2s_infinite]
              before:bg-gradient-to-r
              before:from-transparent  
              before:via-gray-900/20 before:dark:via-gray-100/10
              before:to-transparent"
            />
          </div>

          <div className="bg-white dark:bg-black shadow-app-shadow-light dark:shadow-app-shadow">
            <Combination />
          </div>
        </div>
      </div>
      {/* finishing touches */}
      <div className="py-10 shadow-app-top-light dark:shadow-app-top">
        <div>
          <h3 className="title-2">Finishing touches</h3>
          <ul className="py-3 ml-5 space-y-2 list-disc text-blue-gray-600 dark:text-gray-500">
            <li className="">
              Hide the overlay while it&apos;s positioned outside the skeleton.
            </li>
            <li>Add a shadow to the skeleton.</li>
            <li>
              Add a border to the top of the overlay to simulate reflecting
              light.
            </li>
          </ul>
          <div className="grid py-10 mt-5 bg-white dark:bg-black shadow-app-shadow-light dark:shadow-app-shadow place-content-center">
            <LoaderSkeleton
              className="
              overflow-hidden
              shadow-xl shadow-black/10 dark:shadow-gray-900/10
              relative  
              before:absolute before:inset-0
              before:-translate-x-full
              before:animate-[gradient-x_2s_infinite]
              before:bg-gradient-to-r
              before:from-transparent  
              before:via-gray-900/20 before:dark:via-gray-100/10
              before:to-transparent
              before:border-t-2 before:border-gray-100/40 before:dark:border-gray-900/20
              "
            />
          </div>

          <div className="bg-white dark:bg-black shadow-app-shadow-light dark:shadow-app-shadow">
            <FinalSkeletonHl />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwinSkeleton;
