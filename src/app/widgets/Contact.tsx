'use client'
import { ChangeEvent, useState } from "react";
import Input from "../components/Input";
import styled from "styled-components";
import { toast, useToast } from "react-toastify";
import { ImInstagram } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { SectionNames } from "../constants/SectionNames";

interface Form {
    name: string,
    email: string,
    phoneNumber: string,
    message: string
}

const INITIAL_VALUES = { name: '', email: '', phoneNumber: '', message: '' };

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState<Form>(INITIAL_VALUES);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setForm(prev => {
            if (event.target.name === 'phoneNumber') {
                event.target.value = event.target.value.replace(/\D/g, '');
            }
            return { ...prev, [event.target.name]: event.target.value }
        });
    }

    async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            toast.success('Contato enviado com sucesso', { style: { fontSize: 20 } });
            setForm(INITIAL_VALUES);
        } catch (error) {
            toast.error('Ocorreu um erro ao enviar o seu contato, por favor tente novamente mais tarde', { style: { fontSize: 20 } });
        }
        finally {
            setLoading(false)
        }
    };

    return (
        <section id={SectionNames.contact} data-aos="fade-up" data-aos-duration="2000" style={{ marginBottom: 100 }}>
            <h2>Contato</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <Input name="name" label="Nome" value={form.name} onChange={handleChange} />
                    <Input name="email" label="E-mail" value={form.email} onChange={handleChange} />
                    <Input name="phoneNumber" label="Whatsapp" value={form.phoneNumber} onChange={handleChange} onBlur={() => {
                        let phoneNumber = form.phoneNumber.replace(/[^0-9]/g, "");
                        const mask = "(##) # ####-####";
                        let result = '';
                        let inputIndex = 0;

                        phoneNumber = phoneNumber.replace(/\D/g, '');
                        for (let i = 0; i < mask.length; i++) {
                            if (mask[i] === '#') {
                                if (inputIndex < phoneNumber.length) {
                                    result += phoneNumber[inputIndex];
                                    inputIndex++;
                                } else {
                                    break;
                                }
                            } else {
                                result += mask[i];
                            }
                        }

                        setForm(prev => ({ ...prev, phoneNumber: result }))
                    }} />
                    <Input name="message" label="Mensagem" textarea value={form.message} onChange={handleChange} />
                    <Button
                        type="submit"
                        disabled={!form.name || form.name.length < 3
                            || !form.email || !form.email.includes('@') || !form.email.includes('.com')
                            || !form.phoneNumber || form.phoneNumber.length !== 16
                            || !form.message || form.message.length < 5
                        }
                    >
                        {loading ? 'Enviando...' : 'Enviar'}
                    </Button>
                </form>
                <article>
                    <h3>Outros meios de contato</h3>
                    <a href="mailto:paulosm.dev@gmail.com" target="_blank">
                        <IoMail />
                        <span>paulosm.dev@gmail.com</span>
                    </a>
                    <a href="https://wa.me/5519997074135" target="_blank">
                        <FaWhatsapp />
                        <span>(19) 9 9707-4135</span>
                    </a>
                </article>
            </div>
        </section>
    )
}

const Button = styled.button`
    margin-top: 20px;
    height: 60px;
    background-color: #6A3894;
    color: white;
    outline: none;
    border: none;
    border-radius: 4px;
    font-size: 26px;
    transition: all .3s ease-in-out;

    &:disabled {
        opacity: .5;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background-color: transparent;
        border: 2px solid #6A3894;
    }
`