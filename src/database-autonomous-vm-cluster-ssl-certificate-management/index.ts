// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseAutonomousVmClusterSslCertificateManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#autonomous_vm_cluster_id DatabaseAutonomousVmClusterSslCertificateManagement#autonomous_vm_cluster_id}
  */
  readonly autonomousVmClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#ca_bundle_id DatabaseAutonomousVmClusterSslCertificateManagement#ca_bundle_id}
  */
  readonly caBundleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#certificate_authority_id DatabaseAutonomousVmClusterSslCertificateManagement#certificate_authority_id}
  */
  readonly certificateAuthorityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#certificate_generation_type DatabaseAutonomousVmClusterSslCertificateManagement#certificate_generation_type}
  */
  readonly certificateGenerationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#certificate_id DatabaseAutonomousVmClusterSslCertificateManagement#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#id DatabaseAutonomousVmClusterSslCertificateManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#timeouts DatabaseAutonomousVmClusterSslCertificateManagement#timeouts}
  */
  readonly timeouts?: DatabaseAutonomousVmClusterSslCertificateManagementTimeouts;
}
export interface DatabaseAutonomousVmClusterSslCertificateManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#create DatabaseAutonomousVmClusterSslCertificateManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#delete DatabaseAutonomousVmClusterSslCertificateManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#update DatabaseAutonomousVmClusterSslCertificateManagement#update}
  */
  readonly update?: string;
}

export function databaseAutonomousVmClusterSslCertificateManagementTimeoutsToTerraform(struct?: DatabaseAutonomousVmClusterSslCertificateManagementTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseAutonomousVmClusterSslCertificateManagementTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseAutonomousVmClusterSslCertificateManagementTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management oci_database_autonomous_vm_cluster_ssl_certificate_management}
*/
export class DatabaseAutonomousVmClusterSslCertificateManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_autonomous_vm_cluster_ssl_certificate_management";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management oci_database_autonomous_vm_cluster_ssl_certificate_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseAutonomousVmClusterSslCertificateManagementConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseAutonomousVmClusterSslCertificateManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_vm_cluster_ssl_certificate_management',
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
    this._autonomousVmClusterId = config.autonomousVmClusterId;
    this._caBundleId = config.caBundleId;
    this._certificateAuthorityId = config.certificateAuthorityId;
    this._certificateGenerationType = config.certificateGenerationType;
    this._certificateId = config.certificateId;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autonomous_vm_cluster_id - computed: false, optional: false, required: true
  private _autonomousVmClusterId?: string; 
  public get autonomousVmClusterId() {
    return this.getStringAttribute('autonomous_vm_cluster_id');
  }
  public set autonomousVmClusterId(value: string) {
    this._autonomousVmClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousVmClusterIdInput() {
    return this._autonomousVmClusterId;
  }

  // ca_bundle_id - computed: true, optional: true, required: false
  private _caBundleId?: string; 
  public get caBundleId() {
    return this.getStringAttribute('ca_bundle_id');
  }
  public set caBundleId(value: string) {
    this._caBundleId = value;
  }
  public resetCaBundleId() {
    this._caBundleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleIdInput() {
    return this._caBundleId;
  }

  // certificate_authority_id - computed: true, optional: true, required: false
  private _certificateAuthorityId?: string; 
  public get certificateAuthorityId() {
    return this.getStringAttribute('certificate_authority_id');
  }
  public set certificateAuthorityId(value: string) {
    this._certificateAuthorityId = value;
  }
  public resetCertificateAuthorityId() {
    this._certificateAuthorityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityIdInput() {
    return this._certificateAuthorityId;
  }

  // certificate_generation_type - computed: false, optional: false, required: true
  private _certificateGenerationType?: string; 
  public get certificateGenerationType() {
    return this.getStringAttribute('certificate_generation_type');
  }
  public set certificateGenerationType(value: string) {
    this._certificateGenerationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateGenerationTypeInput() {
    return this._certificateGenerationType;
  }

  // certificate_id - computed: true, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseAutonomousVmClusterSslCertificateManagementTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autonomous_vm_cluster_id: cdktf.stringToTerraform(this._autonomousVmClusterId),
      ca_bundle_id: cdktf.stringToTerraform(this._caBundleId),
      certificate_authority_id: cdktf.stringToTerraform(this._certificateAuthorityId),
      certificate_generation_type: cdktf.stringToTerraform(this._certificateGenerationType),
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      id: cdktf.stringToTerraform(this._id),
      timeouts: databaseAutonomousVmClusterSslCertificateManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}