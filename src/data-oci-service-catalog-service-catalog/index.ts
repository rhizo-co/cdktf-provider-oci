// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciServiceCatalogServiceCatalogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog#service_catalog_id DataOciServiceCatalogServiceCatalog#service_catalog_id}
  */
  readonly serviceCatalogId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog oci_service_catalog_service_catalog}
*/
export class DataOciServiceCatalogServiceCatalog extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_service_catalog_service_catalog";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog oci_service_catalog_service_catalog} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciServiceCatalogServiceCatalogConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciServiceCatalogServiceCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_service_catalog_service_catalog',
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
    this._serviceCatalogId = config.serviceCatalogId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_catalog_id - computed: false, optional: false, required: true
  private _serviceCatalogId?: string; 
  public get serviceCatalogId() {
    return this.getStringAttribute('service_catalog_id');
  }
  public set serviceCatalogId(value: string) {
    this._serviceCatalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCatalogIdInput() {
    return this._serviceCatalogId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      service_catalog_id: cdktf.stringToTerraform(this._serviceCatalogId),
    };
  }
}
