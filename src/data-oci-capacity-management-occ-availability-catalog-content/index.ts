// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_content
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCapacityManagementOccAvailabilityCatalogContentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_content#id DataOciCapacityManagementOccAvailabilityCatalogContent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_content#occ_availability_catalog_id DataOciCapacityManagementOccAvailabilityCatalogContent#occ_availability_catalog_id}
  */
  readonly occAvailabilityCatalogId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_content oci_capacity_management_occ_availability_catalog_content}
*/
export class DataOciCapacityManagementOccAvailabilityCatalogContent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_capacity_management_occ_availability_catalog_content";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_content oci_capacity_management_occ_availability_catalog_content} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCapacityManagementOccAvailabilityCatalogContentConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCapacityManagementOccAvailabilityCatalogContentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_capacity_management_occ_availability_catalog_content',
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
    this._occAvailabilityCatalogId = config.occAvailabilityCatalogId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // occ_availability_catalog_id - computed: false, optional: false, required: true
  private _occAvailabilityCatalogId?: string; 
  public get occAvailabilityCatalogId() {
    return this.getStringAttribute('occ_availability_catalog_id');
  }
  public set occAvailabilityCatalogId(value: string) {
    this._occAvailabilityCatalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get occAvailabilityCatalogIdInput() {
    return this._occAvailabilityCatalogId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      occ_availability_catalog_id: cdktf.stringToTerraform(this._occAvailabilityCatalogId),
    };
  }
}
