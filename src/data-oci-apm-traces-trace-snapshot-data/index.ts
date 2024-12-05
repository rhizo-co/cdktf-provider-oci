// https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciApmTracesTraceSnapshotDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#apm_domain_id DataOciApmTracesTraceSnapshotData#apm_domain_id}
  */
  readonly apmDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#id DataOciApmTracesTraceSnapshotData#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#is_summarized DataOciApmTracesTraceSnapshotData#is_summarized}
  */
  readonly isSummarized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#snapshot_time DataOciApmTracesTraceSnapshotData#snapshot_time}
  */
  readonly snapshotTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#thread_id DataOciApmTracesTraceSnapshotData#thread_id}
  */
  readonly threadId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#trace_key DataOciApmTracesTraceSnapshotData#trace_key}
  */
  readonly traceKey: string;
}
export interface DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails {
}

export function dataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsToTerraform(struct?: DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference {
    return new DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data oci_apm_traces_trace_snapshot_data}
*/
export class DataOciApmTracesTraceSnapshotData extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apm_traces_trace_snapshot_data";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data oci_apm_traces_trace_snapshot_data} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciApmTracesTraceSnapshotDataConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciApmTracesTraceSnapshotDataConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apm_traces_trace_snapshot_data',
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
    this._apmDomainId = config.apmDomainId;
    this._id = config.id;
    this._isSummarized = config.isSummarized;
    this._snapshotTime = config.snapshotTime;
    this._threadId = config.threadId;
    this._traceKey = config.traceKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apm_domain_id - computed: false, optional: false, required: true
  private _apmDomainId?: string; 
  public get apmDomainId() {
    return this.getStringAttribute('apm_domain_id');
  }
  public set apmDomainId(value: string) {
    this._apmDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apmDomainIdInput() {
    return this._apmDomainId;
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

  // is_summarized - computed: false, optional: true, required: false
  private _isSummarized?: boolean | cdktf.IResolvable; 
  public get isSummarized() {
    return this.getBooleanAttribute('is_summarized');
  }
  public set isSummarized(value: boolean | cdktf.IResolvable) {
    this._isSummarized = value;
  }
  public resetIsSummarized() {
    this._isSummarized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSummarizedInput() {
    return this._isSummarized;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // snapshot_time - computed: false, optional: true, required: false
  private _snapshotTime?: string; 
  public get snapshotTime() {
    return this.getStringAttribute('snapshot_time');
  }
  public set snapshotTime(value: string) {
    this._snapshotTime = value;
  }
  public resetSnapshotTime() {
    this._snapshotTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotTimeInput() {
    return this._snapshotTime;
  }

  // thread_id - computed: false, optional: true, required: false
  private _threadId?: string; 
  public get threadId() {
    return this.getStringAttribute('thread_id');
  }
  public set threadId(value: string) {
    this._threadId = value;
  }
  public resetThreadId() {
    this._threadId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadIdInput() {
    return this._threadId;
  }

  // time_ended - computed: true, optional: false, required: false
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // trace_key - computed: false, optional: false, required: true
  private _traceKey?: string; 
  public get traceKey() {
    return this.getStringAttribute('trace_key');
  }
  public set traceKey(value: string) {
    this._traceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get traceKeyInput() {
    return this._traceKey;
  }

  // trace_snapshot_details - computed: true, optional: false, required: false
  private _traceSnapshotDetails = new DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList(this, "trace_snapshot_details", false);
  public get traceSnapshotDetails() {
    return this._traceSnapshotDetails;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apm_domain_id: cdktf.stringToTerraform(this._apmDomainId),
      id: cdktf.stringToTerraform(this._id),
      is_summarized: cdktf.booleanToTerraform(this._isSummarized),
      snapshot_time: cdktf.stringToTerraform(this._snapshotTime),
      thread_id: cdktf.stringToTerraform(this._threadId),
      trace_key: cdktf.stringToTerraform(this._traceKey),
    };
  }
}
