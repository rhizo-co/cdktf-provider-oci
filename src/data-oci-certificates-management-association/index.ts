// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCertificatesManagementAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_association#association_id DataOciCertificatesManagementAssociation#association_id}
  */
  readonly associationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_association#id DataOciCertificatesManagementAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_association oci_certificates_management_association}
*/
export class DataOciCertificatesManagementAssociation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_certificates_management_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/certificates_management_association oci_certificates_management_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCertificatesManagementAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCertificatesManagementAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_certificates_management_association',
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
    this._associationId = config.associationId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_resource_id - computed: true, optional: false, required: false
  public get associatedResourceId() {
    return this.getStringAttribute('associated_resource_id');
  }

  // association_id - computed: false, optional: false, required: true
  private _associationId?: string; 
  public get associationId() {
    return this.getStringAttribute('association_id');
  }
  public set associationId(value: string) {
    this._associationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associationIdInput() {
    return this._associationId;
  }

  // association_type - computed: true, optional: false, required: false
  public get associationType() {
    return this.getStringAttribute('association_type');
  }

  // certificates_resource_id - computed: true, optional: false, required: false
  public get certificatesResourceId() {
    return this.getStringAttribute('certificates_resource_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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
      association_id: cdktf.stringToTerraform(this._associationId),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
