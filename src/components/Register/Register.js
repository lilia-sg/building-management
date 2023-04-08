import CancelButton from "../common/CancelButton";
import Input from "../common/Input";
import SubmitButton from "../common/SubmitButton";

export default function Register() {
	return (
        // TODO: Add text that you are registering as a building manager
		<form className="form mx-auto max-w-xl mb-10">
			<div className="space-y-10 pt-10 mx-auto max-w-xl">
				<div className="border-b border-gray-900/10 pb-10">
					<h2 className="text-base font-semibold leading-7 text-gray-900">
						Profile
					</h2>
					<p className="mt-1 text-sm leading-6 text-gray-600">
						Some intro text here.
					</p>
                    <div className="mt-5 grid grid-cols-4 gap-x-6 gap-y-4">
                        <Input type="text" name="username" displayLabel="Username" size="lg"/>
                        <Input type="password" name="password" displayLabel="Password" size="med"/>
                        <Input type="condfirmPassword" name="condfirmPassword" displayLabel="Confirm password" size="med"/>
                    </div>
				</div>

				<div className="border-b border-gray-900/10 pb-10">
					<h2 className="text-base font-semibold leading-7 text-gray-900">
						Personal Information
					</h2>
					<div className="mt-5 grid grid-cols-4 gap-x-6 gap-y-4">
                        <Input type="text" name="firstName" displayLabel="First Name" size="med"/>
                        <Input type="text" name="midName" displayLabel="Middle Name" size="med"/>
                        <Input type="text" name="lastName" displayLabel="Last Name" size="lg"/>
                        <Input type="email" name="email" displayLabel="Email address" size="lg"/>
						<Input type="text" name="phone" displayLabel="Phone nr" size="lg"/>
                        {/* TODO: Add countries as drop-down menu */}
						<Input type="text" name="country" displayLabel="Country" size="med"/>
						<Input type="text" name="city" displayLabel="City" size="med"/>
						<Input type="text" name="streetAddr" displayLabel="Street Address" size="xl"/>
					</div>
				</div>
			</div>

			<div className="mt-6 flex items-center justify-end gap-x-6">
                <CancelButton/>
                <SubmitButton text="Save"/>
			</div>
		</form>
	);
}
