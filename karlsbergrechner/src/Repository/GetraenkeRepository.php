<?php

namespace App\Repository;

use App\Entity\Getraenke;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Getraenke|null find($id, $lockMode = null, $lockVersion = null)
 * @method Getraenke|null findOneBy(array $criteria, array $orderBy = null)
 * @method Getraenke[]    findAll()
 * @method Getraenke[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GetraenkeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Getraenke::class);
    }

    // /**
    //  * @return Getraenke[] Returns an array of Getraenke objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Getraenke
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
