import {  DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export function OrderDetails(){
    return(
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Pedido: 2139089180kjda</DialogTitle>
                <DialogDescription>Detalhes do pedido</DialogDescription>
            </DialogHeader>
            <div className='space-y-6'>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className='text-muted-foreground'>Status:</TableCell>
                            <TableCell className='flex justify-end'>
                                <div className='flex items-center gap-2'>
                                    <span className='h-2 w-2 rounded-full bg-slate-400'></span>
                                    <span className='font-medium text-muted-foreground'>Pendente</span>
                                </div>
                            </TableCell>
                        </TableRow>
                        
                        <TableRow>
                            <TableCell className='text-muted-foreground'>Cliente:</TableCell>
                            <TableCell className='flex justify-end'>
                                Mateus Maia
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className='text-muted-foreground'>Telefone:</TableCell>
                            <TableCell className='flex justify-end'>
                                (83) 99953-3314
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className='text-muted-foreground'>Email:</TableCell>
                            <TableCell className='flex justify-end'>
                                mateusssmaia@gmail.com
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className='text-muted-foreground'>Realizado há:</TableCell>
                            <TableCell className='flex justify-end'>
                                3 minutos
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='text-right'></TableHead>
                            <TableHead className='text-right'></TableHead>
                            <TableHead className='text-right'></TableHead>
                            <TableHead className='text-right'></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Pizza Peperoni Família</TableCell>
                            <TableCell className='text-right'>2</TableCell>
                            <TableCell className='text-right'>R$69,90</TableCell>
                            <TableCell className='text-right'>R$139,80</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </DialogContent>
    )
}