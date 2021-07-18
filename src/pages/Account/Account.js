import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import Topbar from "../../components/Scorecard/Topbar";
import { useSelector, useDispatch } from "react-redux";
import {
  getCurrentUser,
  updateCurrentUser,
  updateCurrentUserAvatar,
} from "../../actions/user";
import FormData from "form-data";
import { useHistory, useLocation } from "react-router-dom";
import Alert from "../../parts/shared/Alert";

export default function Account() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [error, setError] = useState("");
  const firstName = useRef("");
  const lastName = useRef("");

  const [userData, setUserData] = useState({ firstName: "", lastName: "" });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmitProfile = (e) => {
    e.preventDefault();

    try {
      var formData = new FormData();
      formData.append("avatar", selectedFile);
      dispatch(updateCurrentUserAvatar(formData));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    if (firstName.current.value == "")
      setUserData({
        firstName: currentUser?.data.fullName.split(" ")[0],
        lastName: lastName.current.value,
      });
    if (lastName.current.value == "")
      setUserData({
        firstName: firstName.current.value,
        lastName: currentUser?.data.fullName.split(" ")[1],
      });
  };

  const handleUpdateCurrentUser = (e) => {
    e.preventDefault();

    if (userData.firstName == "" && userData.lastName == "") {
      setError("First name and last name cannot be empty.");
      return;
    }

    try {
      dispatch(updateCurrentUser(userData));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      dispatch(getCurrentUser());
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        accountActive={true}
      />

      <div className="flex-1 overflow-auto focus:outline-none">
        <Topbar setSidebarOpen={setSidebarOpen} shadow={"shadow"} />

        <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
          {error && <Alert message={error} />}
          <div className="mt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                <form onSubmit={handleSubmitProfile}>
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Profile
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          This information will be displayed publicly so be
                          careful what you share.
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="company_website"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Name
                          </label>
                          <div className="mt-1 rounded-md shadow-sm flex">
                            <span className="bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-3 inline-flex items-center text-gray-500 sm:text-sm">
                              webwork.ai/
                            </span>
                            <input
                              type="text"
                              name="username"
                              id="username"
                              className="focus:ring-indigo-500 focus:border-indigo-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                            />
                          </div>
                        </div>

                        <div className="col-span-3">
                          <label
                            htmlFor="about"
                            className="block text-sm font-medium text-gray-700"
                          >
                            About
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="about"
                              name="about"
                              rows={3}
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                              placeholder=""
                              defaultValue={""}
                            />
                          </div>
                          <p className="mt-2 text-sm text-gray-500">
                            Brief description for your profile. URLs are
                            hyperlinked.
                          </p>
                        </div>

                        <div className="col-span-3">
                          <label className="block text-sm font-medium text-gray-700">
                            Photo
                          </label>
                          <div className="mt-1 flex items-center">
                            <span className="inline-block bg-gray-100 rounded-full overflow-hidden h-12 w-12">
                              <svg
                                className="h-full w-full text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            </span>
                            <input
                              type="file"
                              hidden={true}
                              id="avatarUpload"
                              accept="image/png, image/jpeg"
                              onChange={(e) =>
                                setSelectedFile(e.target.files[0])
                              }
                            />
                            <button
                              type="button"
                              onClick={() =>
                                document.getElementById("avatarUpload").click()
                              }
                              className="ml-5 bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Change
                            </button>
                          </div>
                        </div>

                        <div className="col-span-3">
                          <label className="block text-sm font-medium text-gray-700">
                            Cover photo
                          </label>
                          <div className="mt-1 border-2 border-gray-300 border-dashed rounded-md px-6 pt-5 pb-6 flex justify-center">
                            <div className="space-y-1 text-center">
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                  <span>Upload a file</span>
                                  <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">
                                PNG, JPG up to 5MB
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>

                <form onSubmit={handleUpdateCurrentUser} method="POST">
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Personal Information
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Use a permanent address where you can recieve mail.
                        </p>
                      </div>

                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            id="first_name"
                            ref={firstName}
                            onChange={handleChange}
                            placeholder={
                              currentUser?.data.fullName.split(" ")[0]
                            }
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            id="last_name"
                            ref={lastName}
                            onChange={handleChange}
                            placeholder={
                              currentUser?.data.fullName.split(" ")[1]
                            }
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label
                            htmlFor="email_address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          <input
                            type="text"
                            name="email_address"
                            id="email_address"
                            autoComplete="email"
                            placeholder={currentUser?.data.email}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Country / Region
                          </label>
                          <select
                            id="country"
                            name="country"
                            autoComplete="country"
                            className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option>Vietnam</option>
                            <option>United States</option>
                          </select>
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="street_address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Street address
                          </label>
                          <input
                            type="text"
                            name="street_address"
                            id="street_address"
                            autoComplete="street-address"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="state"
                            className="block text-sm font-medium text-gray-700"
                          >
                            State / Province
                          </label>
                          <input
                            type="text"
                            name="state"
                            id="state"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="postal_code"
                            className="block text-sm font-medium text-gray-700"
                          >
                            ZIP / Postal
                          </label>
                          <input
                            type="text"
                            name="postal_code"
                            id="postal_code"
                            autoComplete="postal-code"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>

                <form action="#" method="POST">
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Notifications
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Provide basic informtion about the job. Be specific
                          with the job title.
                        </p>
                      </div>

                      <fieldset>
                        <legend className="text-base font-medium text-gray-900">
                          By Email
                        </legend>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start">
                            <div className="h-5 flex items-center">
                              <input
                                id="comments"
                                name="comments"
                                type="checkbox"
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="comments"
                                className="font-medium text-gray-700"
                              >
                                Comments
                              </label>
                              <p className="text-gray-500">
                                Get notified when someones posts a comment on a
                                posting.
                              </p>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input
                                  id="candidates"
                                  name="candidates"
                                  type="checkbox"
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="candidates"
                                  className="font-medium text-gray-700"
                                >
                                  Candidates
                                </label>
                                <p className="text-gray-500">
                                  Get notified when a candidate applies for a
                                  job.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input
                                  id="offers"
                                  name="offers"
                                  type="checkbox"
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="offers"
                                  className="font-medium text-gray-700"
                                >
                                  Offers
                                </label>
                                <p className="text-gray-500">
                                  Get notified when a candidate accepts or
                                  rejects an offer.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="mt-6">
                        <legend className="text-base font-medium text-gray-900">
                          Push Notifications
                        </legend>
                        <p className="text-sm text-gray-500">
                          These are delivered via SMS to your mobile phone.
                        </p>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-center">
                            <input
                              id="push_everything"
                              name="push_notifications"
                              type="radio"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label htmlFor="push_everything" className="ml-3">
                              <span className="block text-sm font-medium text-gray-700">
                                Everything
                              </span>
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="push_email"
                              name="push_notifications"
                              type="radio"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label htmlFor="push_email" className="ml-3">
                              <span className="block text-sm font-medium text-gray-700">
                                Same as email
                              </span>
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="push_nothing"
                              name="push_notifications"
                              type="radio"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <label htmlFor="push_nothing" className="ml-3">
                              <span className="block text-sm font-medium text-gray-700">
                                No push notifications
                              </span>
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
