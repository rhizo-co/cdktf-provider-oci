// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsNamespaceIngestTimeRulesManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#enable_ingest_time_rule LogAnalyticsNamespaceIngestTimeRulesManagement#enable_ingest_time_rule}
  */
  readonly enableIngestTimeRule: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#id LogAnalyticsNamespaceIngestTimeRulesManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#ingest_time_rule_id LogAnalyticsNamespaceIngestTimeRulesManagement#ingest_time_rule_id}
  */
  readonly ingestTimeRuleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#namespace LogAnalyticsNamespaceIngestTimeRulesManagement#namespace}
  */
  readonly namespace: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#timeouts LogAnalyticsNamespaceIngestTimeRulesManagement#timeouts}
  */
  readonly timeouts?: LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts;
}
export interface LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#create LogAnalyticsNamespaceIngestTimeRulesManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#delete LogAnalyticsNamespaceIngestTimeRulesManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management#update LogAnalyticsNamespaceIngestTimeRulesManagement#update}
  */
  readonly update?: string;
}

export function logAnalyticsNamespaceIngestTimeRulesManagementTimeoutsToTerraform(struct?: LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts | cdktf.IResolvable): any {
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

export class LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management oci_log_analytics_namespace_ingest_time_rules_management}
*/
export class LogAnalyticsNamespaceIngestTimeRulesManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_namespace_ingest_time_rules_management";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_namespace_ingest_time_rules_management oci_log_analytics_namespace_ingest_time_rules_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAnalyticsNamespaceIngestTimeRulesManagementConfig
  */
  public constructor(scope: Construct, id: string, config: LogAnalyticsNamespaceIngestTimeRulesManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_namespace_ingest_time_rules_management',
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
    this._enableIngestTimeRule = config.enableIngestTimeRule;
    this._id = config.id;
    this._ingestTimeRuleId = config.ingestTimeRuleId;
    this._namespace = config.namespace;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_ingest_time_rule - computed: false, optional: false, required: true
  private _enableIngestTimeRule?: boolean | cdktf.IResolvable; 
  public get enableIngestTimeRule() {
    return this.getBooleanAttribute('enable_ingest_time_rule');
  }
  public set enableIngestTimeRule(value: boolean | cdktf.IResolvable) {
    this._enableIngestTimeRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIngestTimeRuleInput() {
    return this._enableIngestTimeRule;
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

  // ingest_time_rule_id - computed: false, optional: false, required: true
  private _ingestTimeRuleId?: string; 
  public get ingestTimeRuleId() {
    return this.getStringAttribute('ingest_time_rule_id');
  }
  public set ingestTimeRuleId(value: string) {
    this._ingestTimeRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestTimeRuleIdInput() {
    return this._ingestTimeRuleId;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogAnalyticsNamespaceIngestTimeRulesManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogAnalyticsNamespaceIngestTimeRulesManagementTimeouts) {
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
      enable_ingest_time_rule: cdktf.booleanToTerraform(this._enableIngestTimeRule),
      id: cdktf.stringToTerraform(this._id),
      ingest_time_rule_id: cdktf.stringToTerraform(this._ingestTimeRuleId),
      namespace: cdktf.stringToTerraform(this._namespace),
      timeouts: logAnalyticsNamespaceIngestTimeRulesManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
