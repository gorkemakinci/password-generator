import React from 'react';
import { MdContentCopy } from 'react-icons/md'
import { AiOutlineRedo } from 'react-icons/ai'
import { CopyToClipboard } from 'react-copy-to-clipboard';
var generator = require('generate-password');

export default class Generated extends React.Component {
    defaultChecked = 16
    password = generator.generate({
        length: this.defaultChecked,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
    });

    state = {
        value: this.password,
        length: this.defaultChecked,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
        excludeSimilarCharacters: false,
        strict: false,
        copied: false,
    }; 

    handleChange(event) {
        const length = (event.target.validity.valid) ? event.target.value : this.state.length;
        const min = 1;
        const max = 100;

        if (length <= max && length >= min){
            this.setState({ length });
        }
    }

    newPassword() {
        try {
            const value = generator.generate({
                length: this.state.length,
                uppercase: this.state.uppercase,
                lowercase: this.state.lowercase,
                symbols: this.state.symbols,
                numbers: this.state.numbers,
                excludeSimilarCharacters: this.state.excludeSimilarCharacters,
                strict: this.state.strict,
            });
            this.setState({ value });
        } catch (error) {}
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleFormSubmit}>
                </form>

                <div className="md:grid md:grid-cols-6 md:gap-4">
                    <div className="col-span-5 relative p-6 my-4 w-full rounded border-b-4 border-red-500 dark:border-red-800 bg-gray-100 dark:bg-gray-800">
                        <div suppressHydrationWarning className="font-bold text-gray-800 dark:text-gray-100 mr-10 overflow-hidden" >
                            {this.state.value}
                        </div>

                        <CopyToClipboard
                            text={this.state.value}
                            onCopy={() => {
                                this.setState({copied: true})
                                }}>
                                <button className="my-1 font-bold absolute w-5 h-10 text-gray-400 right-3 top-3 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-800">
                                    <MdContentCopy />
                                </button>
                        </CopyToClipboard >

                        <button
                            onClick={this.newPassword.bind(this)}
                            className="my-1 font-bold absolute w-5 h-10 text-gray-400 right-10 top-3 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-800">
                            <AiOutlineRedo />
                        </button>
                    </div>
                    <div className="flex flex-row my-4 w-full rounded-lg relative">
                        <button
                            className="font-bold bg-red-700 hover:bg-red-600 text-white  h-full w-20 flex rounded-l focus:outline-none cursor-pointer"
                            onClick={() => {
                                if (Number(this.state.length) - 1 >= 1){
                                    length = Number(this.state.length) - 1;
                                    this.setState({ length });
                                }
                        }}><span className="m-auto">-</span></button>

                        <input
                            type="text" pattern="[0-9]*"
                            className="bg-gray-200 dark:bg-gray-900 font-bold text-center border border-red-700 dark:border-red-700 w-full text-xs md:text-base flex items-center justify-center cursor-default"
                            onInput={this.handleChange.bind(this)}
                            value={this.state.length} />

                        <button
                            className="font-bold bg-red-700 hover:bg-red-600 text-white h-full w-20 flex rounded-r focus:outline-none cursor-pointer"
                            onClick={() => {
                                if (Number(this.state.length) + 1 <= 100){
                                    length = Number(this.state.length) + 1;
                                    this.setState({ length });
                                }
                        }}><span className="m-auto">+</span></button>

                    </div>
                </div>

                <div className="relative p-6 my-4 w-full rounded bg-gray-100 dark:bg-gray-800">
                    <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 text-left mb-4">
                        Customize your password
                    </div>

                    <div className="grid grid-cols-2">
                        <div className="block">
                            <div className="font-semibold mt-2">
                                <div>
                                <label className=" inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="rounded form-checkbox text-red-700 h-6 w-6"
                                        value={this.state.uppercase}
                                        onChange={()=>{
                                            this.setState({uppercase:! this.state.uppercase})
                                        }}
                                        defaultChecked/>
                                    <span className="ml-2">Uppercase</span>
                                </label>
                                </div>
                                <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="rounded form-checkbox text-red-700 h-6 w-6"
                                        value={this.state.lowercase}
                                        onChange={()=>{
                                            this.setState({lowercase:! this.state.lowercase})
                                        }}
                                        defaultChecked/>
                                    <span className="ml-2">Lowercase</span>
                                </label>
                                </div>
                                <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="rounded form-checkbox text-red-700 h-6 w-6"
                                        value={this.state.numbers}
                                        onChange={()=>{
                                            this.setState({numbers:! this.state.numbers})
                                        }}
                                        defaultChecked/>
                                    <span className="ml-2">Numbers</span>
                                </label>
                                </div>
                                <div>
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        className="rounded form-checkbox text-red-700 h-6 w-6"
                                        value={this.state.symbols}
                                        onChange={()=>{
                                            this.setState({symbols:! this.state.symbols})
                                        }}
                                        defaultChecked/>
                                    <span className="ml-2">Symbols</span>
                                </label>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="font-semibold mt-2">
                                <div className="mt-1">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="rounded form-checkbox text-red-700 h-6 w-6"
                                            name="radio-sizes"
                                            value={this.state.excludeSimilarCharacters}
                                            onChange={()=>{
                                                this.setState({excludeSimilarCharacters:! this.state.excludeSimilarCharacters})
                                            }}/>
                                        <span className="ml-2">Exclude Similar Characters</span>
                                    </label>
                                </div>
                                <div className="mt-1">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="rounded form-checkbox text-red-700 h-6 w-6"
                                            name="radio-sizes"
                                            value={this.state.strict}
                                            onChange={()=>{
                                                this.setState({strict:! this.state.strict})
                                            }}/>
                                        <span className="ml-2">Strict Mode</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}