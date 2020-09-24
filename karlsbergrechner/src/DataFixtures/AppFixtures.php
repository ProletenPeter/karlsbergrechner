<?php

namespace App\DataFixtures;

use App\Entity\Getraenke;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {

        $bier = new Getraenke();

        $bier->setName("Urpils")
            ->setBottleSize(0.5)
            ->setCost(16)
            ->setCategory("bier");

        $manager->persist($bier);

        $manager->flush();
    }
}
