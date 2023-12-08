import CurryImg from "./assets/images/curry.jpg";
import NoodlesImg from "./assets/images/noodles.jpg";
import StewImg from "./assets/images/stew.jpg";

function App() {
	return (
		<div className="w-screen h-screen">
			<header className="w-full flex justify-between items-center p-2 bg-blue-500 lg:px-10 ">
				<h1 className="text-xl lg:text-2xl ">Food Recipe</h1>
				<div className="h-full flex-col justify-between p-1 text-xs lg:flex-row">
					<div className="bg-yellow-200 mb-1 text-center rounded lg:inline-block lg:mr-2 lg:px-1 lg:text-sm  ">
						Log In
					</div>
					<div className="bg-yellow-200 px-2 text-center rounded lg:inline-block lg:text-sm  ">
						Sign Up
					</div>
				</div>
			</header>

			<nav className="bg-blue-200 p-1 lg:p-2 lg:px-5    ">
				<ul className="w-full flex gap-3 text-xs px-2 lg:text-sm lg:gap-5 lg:px-5 ">
					<li>
						<a href="#">
							<span>Home</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>About</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>Contact</span>
						</a>
					</li>
				</ul>
			</nav>

			<main className="px-2">
				{/* <div className="w-full flex-col items-center justify-center">
          <h1 className="self-start text-lg">Our Latest Recipes</h1>

          <div className="flex-col lg:flex-row lg:justify-between">
            <div className="mt-2 flex justify-between rounded lg:max-w-max lg:flex-col">
              <img src={CurryImg} alt="CurryImg" className="w-3/6 lg:w-2/12 lg:bg-yellow-600" />
              <div className="w-4/6 p-2 bg-gray-300 flex-col justify-between lg:w-2/12">
                <p className="m-0 p-0 text-xl">Curry</p>
                <p className="mt-2 p-0 text-xs indent-3">In a pot, sauté onions, garlic, and curry paste until fragrant. Add coconut milk, vegetables, and your choice of protein; simmer until cooked through.</p>
              </div>
            </div>
            <div className="mt-2 flex justify-between rounded lg:max-w-max lg:flex-col">
              <img src={NoodlesImg} alt="NoodlesImg" className="w-3/6 lg:w-2/12" />
              <div className="w-4/6 p-2 bg-gray-300 flex-col justify-between lg:w-2/12">
                <p className="m-0 p-0 text-xl">Noodles</p>
                <p className="mt-2 p-0 text-xs indent-3">Boil noodles until al dente, then toss with sesame oil, soy sauce, and your favorite vegetables for a quick and delicious noodle dish.</p>
              </div>
            </div>
            <div className="mt-2 flex justify-between rounded lg:max-w-max lg:flex-col">
              <img src={StewImg} alt="StewImg" className="w-3/6 lg:w-2/12" />
              <div className="w-4/6 p-2 bg-gray-300 flex-col justify-between lg:w-2/12">
                <p className="m-0 p-0 text-xl">Stew</p>
                <p className="mt-2 p-0 text-xs indent-3">Combine diced meat, vegetables, broth, and seasonings in a pot. Simmer until tender for a hearty and delicious stew.</p>
              </div>
            </div>
          </div>
        </div> */}

				<div>
					<h1 className="self-start text-lg">Our Latest Recipes</h1>

					<div className="flex justify-between lg:flex lg:w-screen lg:justify-between ">
						<div className="flex w-screen">
							<img
								src={CurryImg}
								alt="CurryImg"
								className=" lg:w-8/12"
							/>
							<div className="bg-gray-300 p-2 lg:w-8/12">
								<p >Curry</p>
								<p className="lg:indent-5 lg:text-sm ">
									In a pot, sauté onions, garlic, and curry
									paste until fragrant. Add coconut milk,
									vegetables, and your choice of protein;
									simmer until cooked through.
								</p>
							</div>
						</div>
						<div className="">
							<img
								src={NoodlesImg}
								alt="NoodlesImg"
								className="lg:w-8/12"
							/>
							<div className="bg-gray-300 p-2 lg:w-8/12">
								<p >Noodles</p>
								<p className="lg:indent-5 lg:text-sm ">
									Boil noodles until al dente, then toss with
									sesame oil, soy sauce, and your favorite
									vegetables for a quick and delicious noodle
									dish.
								</p>
							</div>
						</div>
						<div className="">
							<img
								src={StewImg}
								alt="StewImg"
								className="lg:w-8/12"
							/>
							<div className="bg-gray-300 p-2 lg:w-8/12">
								<p >Stew</p>
								<p className="lg:indent-5 lg:text-sm ">
									Combine diced meat, vegetables, broth, and
									seasonings in a pot. Simmer until tender for
									a hearty and delicious stew.
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
