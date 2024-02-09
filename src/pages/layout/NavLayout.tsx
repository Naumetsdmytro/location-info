import { Disclosure, Menu, Transition } from '@headlessui/react'
import React, { Fragment, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/location-info-logo.png'
import { useSelector } from 'react-redux'
import { selectIsLogedIn, selectUser } from '../../redux/auth/selectors'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux'

interface Props {
	children: React.ReactNode
}

const classNames = (...classes: string[]) => {
	return classes.filter(Boolean).join(' ')
}

export const NavLayout = ({ children }: Props) => {
	const isLoggedIn = useSelector(selectIsLogedIn)
	const dispatch = useDispatch()
	const user = useSelector(selectUser)

	const navigate = useNavigate()
	const location = useLocation()

	const navigation = [
		{ current: location.pathname === '/main', href: '/main', name: 'Main' },
		{
			current: location.pathname === '/favourites',
			href: '/favourites',
			name: 'Favourites',
		},
	]

	const onLogout = () => {
		try {
			dispatch(logout() as any)
			navigate('/')
		} catch (e: unknown) {
			if (e instanceof Error) {
				console.error(e.message)
			}
		}
	}

	return (
		<>
			<Disclosure as="nav" className="w-full">
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center">
									<Link to="/main">
										<img alt="Location Info" className="block lg:hidden h-10 w-auto" src={logo} />
										<img alt="Location Info" className="hidden lg:block h-10 w-auto" src={logo} />
									</Link>
								</div>
								{isLoggedIn && (
									<div className="hidden sm:ml-6 sm:block">
										<div className="flex space-x-4">
											{navigation.map(item => (
												<Link
													aria-current={item.current ? 'page' : undefined}
													className={classNames(
														item.current
															? 'bg-gray-900 text-white'
															: 'text-gray-900 hover:bg-gray-700 hover:text-white',
														'rounded-md px-3 py-2 text-sm font-medium',
													)}
													key={item.name}
													to={item.href}
												>
													{item.name}
												</Link>
											))}
										</div>
									</div>
								)}
							</div>
							{isLoggedIn ? (
								<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
									<Menu as="div" className="relative ml-3">
										<Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
											<span className="text-white font-bold px-3 py-2">
												{user ? `${user.firstName} ${user.lastName}` : 'Loading...'}
											</span>
										</Menu.Button>
										<Transition
											as={Fragment}
											enter="transition ease-out duration-100"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95"
										>
											<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
												<Menu.Item>
													{({ active }) => (
														<Link
															className={classNames(
																active ? 'bg-gray-100' : '',
																'block px-4 py-2 text-sm text-gray-700',
															)}
															to="#"
														>
															Your Profile
														</Link>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<Link
															className={classNames(
																active ? 'bg-gray-100' : '',
																'block px-4 py-2 text-sm text-gray-700',
															)}
															onClick={onLogout}
															to="/"
														>
															Sign out
														</Link>
													)}
												</Menu.Item>
											</Menu.Items>
										</Transition>
									</Menu>
								</div>
							) : (
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										<Link
											className={classNames(
												'text-gray-900 hover:bg-gray-700 hover:text-white',
												'rounded-md px-3 py-2 text-sm font-medium',
											)}
											to="/auth/login"
										>
											Login
										</Link>
										<Link
											className={classNames(
												'text-gray-900 hover:bg-gray-700 hover:text-white',
												'rounded-md px-3 py-2 text-sm font-medium',
											)}
											to="/auth/register"
										>
											Register
										</Link>
									</div>
								</div>
							)}
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map(item => (
								<Disclosure.Button
									aria-current={item.current ? 'page' : undefined}
									as="a"
									className={classNames(
										item.current
											? 'bg-gray-900 text-white'
											: 'text-gray-300 hover:bg-gray-700 hover:text-white',
										'block rounded-md px-3 py-2 text-base font-medium',
									)}
									href={item.href}
									key={item.name}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			</Disclosure>
			{children}
		</>
	)
}
