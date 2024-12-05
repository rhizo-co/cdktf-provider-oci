// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_average_carbon_emission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMeteringComputationAverageCarbonEmissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_average_carbon_emission#id DataOciMeteringComputationAverageCarbonEmission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_average_carbon_emission#sku_part_number DataOciMeteringComputationAverageCarbonEmission#sku_part_number}
  */
  readonly skuPartNumber: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_average_carbon_emission oci_metering_computation_average_carbon_emission}
*/
export class DataOciMeteringComputationAverageCarbonEmission extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_metering_computation_average_carbon_emission";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_average_carbon_emission oci_metering_computation_average_carbon_emission} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMeteringComputationAverageCarbonEmissionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMeteringComputationAverageCarbonEmissionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_metering_computation_average_carbon_emission',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '6.18.0',
        providerVersionConstraint: '~> 6.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._skuPartNumber = config.skuPartNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // average_carbon_emission - computed: true, optional: false, required: false
  public get averageCarbonEmission() {
    return this.getNumberAttribute('average_carbon_emission');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // sku_part_number - computed: false, optional: false, required: true
  private _skuPartNumber?: string; 
  public get skuPartNumber() {
    return this.getStringAttribute('sku_part_number');
  }
  public set skuPartNumber(value: string) {
    this._skuPartNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuPartNumberInput() {
    return this._skuPartNumber;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      sku_part_number: cdktf.stringToTerraform(this._skuPartNumber),
    };
  }
}
