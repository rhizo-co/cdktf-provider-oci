// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciServiceCatalogServiceCatalogAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_association#service_catalog_association_id DataOciServiceCatalogServiceCatalogAssociation#service_catalog_association_id}
  */
  readonly serviceCatalogAssociationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_association oci_service_catalog_service_catalog_association}
*/
export class DataOciServiceCatalogServiceCatalogAssociation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_service_catalog_service_catalog_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_catalog_service_catalog_association oci_service_catalog_service_catalog_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciServiceCatalogServiceCatalogAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciServiceCatalogServiceCatalogAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_service_catalog_service_catalog_association',
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
    this._serviceCatalogAssociationId = config.serviceCatalogAssociationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_catalog_association_id - computed: false, optional: false, required: true
  private _serviceCatalogAssociationId?: string; 
  public get serviceCatalogAssociationId() {
    return this.getStringAttribute('service_catalog_association_id');
  }
  public set serviceCatalogAssociationId(value: string) {
    this._serviceCatalogAssociationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCatalogAssociationIdInput() {
    return this._serviceCatalogAssociationId;
  }

  // service_catalog_id - computed: true, optional: false, required: false
  public get serviceCatalogId() {
    return this.getStringAttribute('service_catalog_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      service_catalog_association_id: cdktf.stringToTerraform(this._serviceCatalogAssociationId),
    };
  }
}
