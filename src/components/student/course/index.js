import {
  ArrowForwardIos,
  Star,
  FiberManualRecord,
  LocalLibrary,
} from "@mui/icons-material";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
export default function StudentCourse() {
  return (
    <>
      <div className="flex flex-col mr-8">
        {/* <div className="category mb-10 mt-4">
          <div className="flex justify-between">
            <h2 className="font-semibold text-xl">Categories</h2>
            <div className="flex">
              <h6 className="mr-3">View all</h6>
              <ArrowForwardIos className="course_icon w-3" />
            </div>
          </div>
          <div className="flex mt-8 items-center px-6">
            <div className="mr-4 h-10">
              <img
                src="/img/categories/china.png"
                alt="flag"
                className="h-full"
              />
            </div>
            <div className="mr-4">
              <h3 className="text-base font-medium">China</h3>
              <p className="text-xs text-gray-600">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <ArrowForwardIos className="course_icon w-3" />
          </div>
        </div> */}
        <div className="courses mb-8">
          <div className="flex justify-between mb-8">
            <h2 className="font-semibold text-xl">Your Courses</h2>
            <div className="flex">
              <h6 className="mr-3">View all</h6>
              <ArrowForwardIos className="course_icon w-3" />
            </div>
          </div>
          <div className="grid grid-cols-3 px-6 gap-16">
            <div className="flex flex-col">
              <div className="rounded-lg overflow-hidden h-48 flex items-center">
                <img
                  src="/img/students/student_1.jpg"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="flex mt-4 flex-col">
                <div className="flex justify-between w-full">
                  <h3 className="font-semibold text-xl">FullStack</h3>
                </div>
                <div className="text-gray-600 text-xs flex items-center">
                  <p>student_1 &nbsp;</p>
                  <span>
                    <FiberManualRecord className="w-2" />
                  </span>
                  <span>&nbsp; 5.0 &nbsp;</span>
                  <span>
                    <Star className="w-3" />
                  </span>
                </div>
              </div>
              <div className="flex justify-between mt-4 items-center">
                <div className="text-gray-600 flex items-center">
                  <span>
                    <LocalLibrary />
                  </span>
                  <p> &nbsp;110+ Content</p>
                </div>
                <span className="text-teal-500">View Details</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-lg overflow-hidden h-48 flex items-center">
                <img
                  src="/img/students/student_1.jpg"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="flex mt-4 flex-col">
                <div className="flex justify-between w-full">
                  <h3 className="font-semibold text-xl">FullStack</h3>
                </div>
                <div className="text-gray-600 text-xs flex items-center">
                  <p>student_1 &nbsp;</p>
                  <span>
                    <FiberManualRecord className="w-2" />
                  </span>
                  <span>&nbsp; 5.0 &nbsp;</span>
                  <span>
                    <Star className="w-3" />
                  </span>
                </div>
              </div>
              <div className="flex justify-between mt-4 items-center">
                <div className="text-gray-600 flex items-center">
                  <span>
                    <LocalLibrary />
                  </span>
                  <p> &nbsp;110+ Content</p>
                </div>
                <span className="text-teal-500">View Details</span>
              </div>
            </div>
          </div>
          <Stack spacing={2} className="mt-8">
            <Pagination
              count={10}
              shape="rounded"
              className="inline-flex justify-end"
            />
            {/* <Pagination count={10} variant="outlined" shape="rounded" /> */}
          </Stack>
        </div>
        <div className="courses">
          <div className="flex justify-between mb-8">
            <h2 className="font-semibold text-xl">All Courses</h2>
            <div className="flex">
              <h6 className="mr-3">View all</h6>
              <ArrowForwardIos className="course_icon w-3" />
            </div>
          </div>
          <div className="grid grid-cols-3 px-6 gap-16">
            <div className="flex flex-col">
              <div className="rounded-lg overflow-hidden h-48 flex items-center">
                <img
                  src="/img/students/student_1.jpg"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="flex mt-4 flex-col">
                <div className="flex justify-between w-full">
                  <h3 className="font-semibold text-xl">FullStack</h3>
                  <div className="flex font-semibold text-xl">
                    <span className="text-teal-500">$&nbsp;</span>
                    <span>50.99</span>
                  </div>
                </div>
                <div className="text-gray-600 text-xs flex items-center">
                  <p>student_1 &nbsp;</p>
                  <span>
                    <FiberManualRecord className="w-2" />
                  </span>
                  <span>&nbsp; 5.0 &nbsp;</span>
                  <span>
                    <Star className="w-3" />
                  </span>
                </div>
              </div>
              <div className="flex justify-between mt-4 items-center">
                <div className="text-gray-600 flex items-center">
                  <span>
                    <LocalLibrary />
                  </span>
                  <p> &nbsp;110+ Content</p>
                </div>
                <span className="text-teal-500">View Details</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-lg overflow-hidden h-48 flex items-center">
                <img
                  src="/img/students/student_1.jpg"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="flex mt-4 flex-col">
                <div className="flex justify-between w-full">
                  <h3 className="font-semibold text-xl">FullStack</h3>
                  <div className="flex font-semibold text-xl">
                    <span className="text-teal-500">$&nbsp;</span>
                    <span>50.99</span>
                  </div>
                </div>
                <div className="text-gray-600 text-xs flex items-center">
                  <p>student_1 &nbsp;</p>
                  <span>
                    <FiberManualRecord className="w-2" />
                  </span>
                  <span>&nbsp; 5.0 &nbsp;</span>
                  <span>
                    <Star className="w-3" />
                  </span>
                </div>
              </div>
              <div className="flex justify-between mt-4 items-center">
                <div className="text-gray-600 flex items-center">
                  <span>
                    <LocalLibrary />
                  </span>
                  <p> &nbsp;110+ Content</p>
                </div>
                <span className="text-teal-500">View Details</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="rounded-lg overflow-hidden h-48 flex items-center">
                <img
                  src="/img/students/student_1.jpg"
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="flex mt-4 flex-col">
                <div className="flex justify-between w-full">
                  <h3 className="font-semibold text-xl">FullStack</h3>
                  <div className="flex font-semibold text-xl">
                    <span className="text-teal-500">$&nbsp;</span>
                    <span>50.99</span>
                  </div>
                </div>
                <div className="text-gray-600 text-xs flex items-center">
                  <p>student_1 &nbsp;</p>
                  <span>
                    <FiberManualRecord className="w-2" />
                  </span>
                  <span>&nbsp; 5.0 &nbsp;</span>
                  <span>
                    <Star className="w-3" />
                  </span>
                </div>
              </div>
              <div className="flex justify-between mt-4 items-center">
                <div className="text-gray-600 flex items-center">
                  <span>
                    <LocalLibrary />
                  </span>
                  <p> &nbsp;110+ Content</p>
                </div>
                <span className="text-teal-500">View Details</span>
              </div>
            </div>
          </div>
          <Stack spacing={2} className="mt-8">
            <Pagination
              count={10}
              shape="rounded"
              className="inline-flex justify-end"
            />
            {/* <Pagination count={10} variant="outlined" shape="rounded" /> */}
          </Stack>
        </div>
      </div>
    </>
  );
}
