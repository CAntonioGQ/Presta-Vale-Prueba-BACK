import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
  } from "typeorm";
  
  @Entity({name: 'products'})
  export class ProductEntity {
    @PrimaryGeneratedColumn({name:'id_product', type: "integer"})
    idProduct!: number;
  
    @Column({name:'name', type:"varchar"})
    name!: string;
  
    @Column({name:'price', type:"decimal"})
    price!: number;

    @Column({name:'status', type:"integer"})
    status!: number;

    @CreateDateColumn({name:'created_at', type:"datetime"})
    createdAt!: Date;
    
    @UpdateDateColumn({name:'updated_at', type:"datetime"})
    updatedAt!: Date;
  }