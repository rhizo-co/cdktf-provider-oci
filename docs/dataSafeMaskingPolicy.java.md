# `dataSafeMaskingPolicy` Submodule <a name="`dataSafeMaskingPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeMaskingPolicy <a name="DataSafeMaskingPolicy" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy oci_data_safe_masking_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policy.DataSafeMaskingPolicy;

DataSafeMaskingPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .columnSource(IResolvable)
    .columnSource(java.util.List<DataSafeMaskingPolicyColumnSource>)
    .compartmentId(java.lang.String)
//  .addMaskingColumnsFromSdmTrigger(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .generateHealthReportTrigger(java.lang.Number)
//  .id(java.lang.String)
//  .isDropTempTablesEnabled(java.lang.Boolean)
//  .isDropTempTablesEnabled(IResolvable)
//  .isRedoLoggingEnabled(java.lang.Boolean)
//  .isRedoLoggingEnabled(IResolvable)
//  .isRefreshStatsEnabled(java.lang.Boolean)
//  .isRefreshStatsEnabled(IResolvable)
//  .parallelDegree(java.lang.String)
//  .postMaskingScript(java.lang.String)
//  .preMaskingScript(java.lang.String)
//  .recompile(java.lang.String)
//  .timeouts(DataSafeMaskingPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.columnSource">columnSource</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a>></code> | column_source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#compartment_id DataSafeMaskingPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.addMaskingColumnsFromSdmTrigger">addMaskingColumnsFromSdmTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#add_masking_columns_from_sdm_trigger DataSafeMaskingPolicy#add_masking_columns_from_sdm_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#defined_tags DataSafeMaskingPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#description DataSafeMaskingPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#display_name DataSafeMaskingPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#freeform_tags DataSafeMaskingPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.generateHealthReportTrigger">generateHealthReportTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#generate_health_report_trigger DataSafeMaskingPolicy#generate_health_report_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#id DataSafeMaskingPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.isDropTempTablesEnabled">isDropTempTablesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_drop_temp_tables_enabled DataSafeMaskingPolicy#is_drop_temp_tables_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.isRedoLoggingEnabled">isRedoLoggingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_redo_logging_enabled DataSafeMaskingPolicy#is_redo_logging_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.isRefreshStatsEnabled">isRefreshStatsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_refresh_stats_enabled DataSafeMaskingPolicy#is_refresh_stats_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.parallelDegree">parallelDegree</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#parallel_degree DataSafeMaskingPolicy#parallel_degree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.postMaskingScript">postMaskingScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#post_masking_script DataSafeMaskingPolicy#post_masking_script}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.preMaskingScript">preMaskingScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#pre_masking_script DataSafeMaskingPolicy#pre_masking_script}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.recompile">recompile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#recompile DataSafeMaskingPolicy#recompile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts">DataSafeMaskingPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `columnSource`<sup>Required</sup> <a name="columnSource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.columnSource"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a>>

column_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#column_source DataSafeMaskingPolicy#column_source}

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#compartment_id DataSafeMaskingPolicy#compartment_id}.

---

##### `addMaskingColumnsFromSdmTrigger`<sup>Optional</sup> <a name="addMaskingColumnsFromSdmTrigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.addMaskingColumnsFromSdmTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#add_masking_columns_from_sdm_trigger DataSafeMaskingPolicy#add_masking_columns_from_sdm_trigger}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#defined_tags DataSafeMaskingPolicy#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#description DataSafeMaskingPolicy#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#display_name DataSafeMaskingPolicy#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#freeform_tags DataSafeMaskingPolicy#freeform_tags}.

---

##### `generateHealthReportTrigger`<sup>Optional</sup> <a name="generateHealthReportTrigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.generateHealthReportTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#generate_health_report_trigger DataSafeMaskingPolicy#generate_health_report_trigger}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#id DataSafeMaskingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDropTempTablesEnabled`<sup>Optional</sup> <a name="isDropTempTablesEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.isDropTempTablesEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_drop_temp_tables_enabled DataSafeMaskingPolicy#is_drop_temp_tables_enabled}.

---

##### `isRedoLoggingEnabled`<sup>Optional</sup> <a name="isRedoLoggingEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.isRedoLoggingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_redo_logging_enabled DataSafeMaskingPolicy#is_redo_logging_enabled}.

---

##### `isRefreshStatsEnabled`<sup>Optional</sup> <a name="isRefreshStatsEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.isRefreshStatsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_refresh_stats_enabled DataSafeMaskingPolicy#is_refresh_stats_enabled}.

---

##### `parallelDegree`<sup>Optional</sup> <a name="parallelDegree" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.parallelDegree"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#parallel_degree DataSafeMaskingPolicy#parallel_degree}.

---

##### `postMaskingScript`<sup>Optional</sup> <a name="postMaskingScript" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.postMaskingScript"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#post_masking_script DataSafeMaskingPolicy#post_masking_script}.

---

##### `preMaskingScript`<sup>Optional</sup> <a name="preMaskingScript" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.preMaskingScript"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#pre_masking_script DataSafeMaskingPolicy#pre_masking_script}.

---

##### `recompile`<sup>Optional</sup> <a name="recompile" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.recompile"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#recompile DataSafeMaskingPolicy#recompile}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts">DataSafeMaskingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#timeouts DataSafeMaskingPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.putColumnSource">putColumnSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetAddMaskingColumnsFromSdmTrigger">resetAddMaskingColumnsFromSdmTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetGenerateHealthReportTrigger">resetGenerateHealthReportTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetIsDropTempTablesEnabled">resetIsDropTempTablesEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetIsRedoLoggingEnabled">resetIsRedoLoggingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetIsRefreshStatsEnabled">resetIsRefreshStatsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetParallelDegree">resetParallelDegree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetPostMaskingScript">resetPostMaskingScript</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetPreMaskingScript">resetPreMaskingScript</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetRecompile">resetRecompile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putColumnSource` <a name="putColumnSource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.putColumnSource"></a>

```java
public void putColumnSource(IResolvable OR java.util.List<DataSafeMaskingPolicyColumnSource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.putColumnSource.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.putTimeouts"></a>

```java
public void putTimeouts(DataSafeMaskingPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts">DataSafeMaskingPolicyTimeouts</a>

---

##### `resetAddMaskingColumnsFromSdmTrigger` <a name="resetAddMaskingColumnsFromSdmTrigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetAddMaskingColumnsFromSdmTrigger"></a>

```java
public void resetAddMaskingColumnsFromSdmTrigger()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetGenerateHealthReportTrigger` <a name="resetGenerateHealthReportTrigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetGenerateHealthReportTrigger"></a>

```java
public void resetGenerateHealthReportTrigger()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetIsDropTempTablesEnabled` <a name="resetIsDropTempTablesEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetIsDropTempTablesEnabled"></a>

```java
public void resetIsDropTempTablesEnabled()
```

##### `resetIsRedoLoggingEnabled` <a name="resetIsRedoLoggingEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetIsRedoLoggingEnabled"></a>

```java
public void resetIsRedoLoggingEnabled()
```

##### `resetIsRefreshStatsEnabled` <a name="resetIsRefreshStatsEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetIsRefreshStatsEnabled"></a>

```java
public void resetIsRefreshStatsEnabled()
```

##### `resetParallelDegree` <a name="resetParallelDegree" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetParallelDegree"></a>

```java
public void resetParallelDegree()
```

##### `resetPostMaskingScript` <a name="resetPostMaskingScript" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetPostMaskingScript"></a>

```java
public void resetPostMaskingScript()
```

##### `resetPreMaskingScript` <a name="resetPreMaskingScript" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetPreMaskingScript"></a>

```java
public void resetPreMaskingScript()
```

##### `resetRecompile` <a name="resetRecompile" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetRecompile"></a>

```java
public void resetRecompile()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeMaskingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policy.DataSafeMaskingPolicy;

DataSafeMaskingPolicy.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policy.DataSafeMaskingPolicy;

DataSafeMaskingPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policy.DataSafeMaskingPolicy;

DataSafeMaskingPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policy.DataSafeMaskingPolicy;

DataSafeMaskingPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSafeMaskingPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataSafeMaskingPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSafeMaskingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSafeMaskingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeMaskingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.columnSource">columnSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList">DataSafeMaskingPolicyColumnSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference">DataSafeMaskingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.addMaskingColumnsFromSdmTriggerInput">addMaskingColumnsFromSdmTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.columnSourceInput">columnSourceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.generateHealthReportTriggerInput">generateHealthReportTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isDropTempTablesEnabledInput">isDropTempTablesEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRedoLoggingEnabledInput">isRedoLoggingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRefreshStatsEnabledInput">isRefreshStatsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.parallelDegreeInput">parallelDegreeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.postMaskingScriptInput">postMaskingScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.preMaskingScriptInput">preMaskingScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.recompileInput">recompileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts">DataSafeMaskingPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.addMaskingColumnsFromSdmTrigger">addMaskingColumnsFromSdmTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.generateHealthReportTrigger">generateHealthReportTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isDropTempTablesEnabled">isDropTempTablesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRedoLoggingEnabled">isRedoLoggingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRefreshStatsEnabled">isRefreshStatsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.parallelDegree">parallelDegree</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.postMaskingScript">postMaskingScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.preMaskingScript">preMaskingScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.recompile">recompile</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `columnSource`<sup>Required</sup> <a name="columnSource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.columnSource"></a>

```java
public DataSafeMaskingPolicyColumnSourceList getColumnSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList">DataSafeMaskingPolicyColumnSourceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeouts"></a>

```java
public DataSafeMaskingPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference">DataSafeMaskingPolicyTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `addMaskingColumnsFromSdmTriggerInput`<sup>Optional</sup> <a name="addMaskingColumnsFromSdmTriggerInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.addMaskingColumnsFromSdmTriggerInput"></a>

```java
public java.lang.Number getAddMaskingColumnsFromSdmTriggerInput();
```

- *Type:* java.lang.Number

---

##### `columnSourceInput`<sup>Optional</sup> <a name="columnSourceInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.columnSourceInput"></a>

```java
public java.lang.Object getColumnSourceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a>>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateHealthReportTriggerInput`<sup>Optional</sup> <a name="generateHealthReportTriggerInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.generateHealthReportTriggerInput"></a>

```java
public java.lang.Number getGenerateHealthReportTriggerInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isDropTempTablesEnabledInput`<sup>Optional</sup> <a name="isDropTempTablesEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isDropTempTablesEnabledInput"></a>

```java
public java.lang.Object getIsDropTempTablesEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRedoLoggingEnabledInput`<sup>Optional</sup> <a name="isRedoLoggingEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRedoLoggingEnabledInput"></a>

```java
public java.lang.Object getIsRedoLoggingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRefreshStatsEnabledInput`<sup>Optional</sup> <a name="isRefreshStatsEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRefreshStatsEnabledInput"></a>

```java
public java.lang.Object getIsRefreshStatsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `parallelDegreeInput`<sup>Optional</sup> <a name="parallelDegreeInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.parallelDegreeInput"></a>

```java
public java.lang.String getParallelDegreeInput();
```

- *Type:* java.lang.String

---

##### `postMaskingScriptInput`<sup>Optional</sup> <a name="postMaskingScriptInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.postMaskingScriptInput"></a>

```java
public java.lang.String getPostMaskingScriptInput();
```

- *Type:* java.lang.String

---

##### `preMaskingScriptInput`<sup>Optional</sup> <a name="preMaskingScriptInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.preMaskingScriptInput"></a>

```java
public java.lang.String getPreMaskingScriptInput();
```

- *Type:* java.lang.String

---

##### `recompileInput`<sup>Optional</sup> <a name="recompileInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.recompileInput"></a>

```java
public java.lang.String getRecompileInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts">DataSafeMaskingPolicyTimeouts</a>

---

##### `addMaskingColumnsFromSdmTrigger`<sup>Required</sup> <a name="addMaskingColumnsFromSdmTrigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.addMaskingColumnsFromSdmTrigger"></a>

```java
public java.lang.Number getAddMaskingColumnsFromSdmTrigger();
```

- *Type:* java.lang.Number

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateHealthReportTrigger`<sup>Required</sup> <a name="generateHealthReportTrigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.generateHealthReportTrigger"></a>

```java
public java.lang.Number getGenerateHealthReportTrigger();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isDropTempTablesEnabled`<sup>Required</sup> <a name="isDropTempTablesEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isDropTempTablesEnabled"></a>

```java
public java.lang.Object getIsDropTempTablesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRedoLoggingEnabled`<sup>Required</sup> <a name="isRedoLoggingEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRedoLoggingEnabled"></a>

```java
public java.lang.Object getIsRedoLoggingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRefreshStatsEnabled`<sup>Required</sup> <a name="isRefreshStatsEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.isRefreshStatsEnabled"></a>

```java
public java.lang.Object getIsRefreshStatsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `parallelDegree`<sup>Required</sup> <a name="parallelDegree" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.parallelDegree"></a>

```java
public java.lang.String getParallelDegree();
```

- *Type:* java.lang.String

---

##### `postMaskingScript`<sup>Required</sup> <a name="postMaskingScript" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.postMaskingScript"></a>

```java
public java.lang.String getPostMaskingScript();
```

- *Type:* java.lang.String

---

##### `preMaskingScript`<sup>Required</sup> <a name="preMaskingScript" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.preMaskingScript"></a>

```java
public java.lang.String getPreMaskingScript();
```

- *Type:* java.lang.String

---

##### `recompile`<sup>Required</sup> <a name="recompile" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.recompile"></a>

```java
public java.lang.String getRecompile();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeMaskingPolicyColumnSource <a name="DataSafeMaskingPolicyColumnSource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policy.DataSafeMaskingPolicyColumnSource;

DataSafeMaskingPolicyColumnSource.builder()
    .columnSource(java.lang.String)
//  .sensitiveDataModelId(java.lang.String)
//  .targetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource.property.columnSource">columnSource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#column_source DataSafeMaskingPolicy#column_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#sensitive_data_model_id DataSafeMaskingPolicy#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource.property.targetId">targetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#target_id DataSafeMaskingPolicy#target_id}. |

---

##### `columnSource`<sup>Required</sup> <a name="columnSource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource.property.columnSource"></a>

```java
public java.lang.String getColumnSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#column_source DataSafeMaskingPolicy#column_source}.

---

##### `sensitiveDataModelId`<sup>Optional</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource.property.sensitiveDataModelId"></a>

```java
public java.lang.String getSensitiveDataModelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#sensitive_data_model_id DataSafeMaskingPolicy#sensitive_data_model_id}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#target_id DataSafeMaskingPolicy#target_id}.

---

### DataSafeMaskingPolicyConfig <a name="DataSafeMaskingPolicyConfig" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policy.DataSafeMaskingPolicyConfig;

DataSafeMaskingPolicyConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .columnSource(IResolvable)
    .columnSource(java.util.List<DataSafeMaskingPolicyColumnSource>)
    .compartmentId(java.lang.String)
//  .addMaskingColumnsFromSdmTrigger(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .generateHealthReportTrigger(java.lang.Number)
//  .id(java.lang.String)
//  .isDropTempTablesEnabled(java.lang.Boolean)
//  .isDropTempTablesEnabled(IResolvable)
//  .isRedoLoggingEnabled(java.lang.Boolean)
//  .isRedoLoggingEnabled(IResolvable)
//  .isRefreshStatsEnabled(java.lang.Boolean)
//  .isRefreshStatsEnabled(IResolvable)
//  .parallelDegree(java.lang.String)
//  .postMaskingScript(java.lang.String)
//  .preMaskingScript(java.lang.String)
//  .recompile(java.lang.String)
//  .timeouts(DataSafeMaskingPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.columnSource">columnSource</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a>></code> | column_source block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#compartment_id DataSafeMaskingPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.addMaskingColumnsFromSdmTrigger">addMaskingColumnsFromSdmTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#add_masking_columns_from_sdm_trigger DataSafeMaskingPolicy#add_masking_columns_from_sdm_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#defined_tags DataSafeMaskingPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#description DataSafeMaskingPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#display_name DataSafeMaskingPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#freeform_tags DataSafeMaskingPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.generateHealthReportTrigger">generateHealthReportTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#generate_health_report_trigger DataSafeMaskingPolicy#generate_health_report_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#id DataSafeMaskingPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.isDropTempTablesEnabled">isDropTempTablesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_drop_temp_tables_enabled DataSafeMaskingPolicy#is_drop_temp_tables_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.isRedoLoggingEnabled">isRedoLoggingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_redo_logging_enabled DataSafeMaskingPolicy#is_redo_logging_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.isRefreshStatsEnabled">isRefreshStatsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_refresh_stats_enabled DataSafeMaskingPolicy#is_refresh_stats_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.parallelDegree">parallelDegree</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#parallel_degree DataSafeMaskingPolicy#parallel_degree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.postMaskingScript">postMaskingScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#post_masking_script DataSafeMaskingPolicy#post_masking_script}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.preMaskingScript">preMaskingScript</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#pre_masking_script DataSafeMaskingPolicy#pre_masking_script}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.recompile">recompile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#recompile DataSafeMaskingPolicy#recompile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts">DataSafeMaskingPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `columnSource`<sup>Required</sup> <a name="columnSource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.columnSource"></a>

```java
public java.lang.Object getColumnSource();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a>>

column_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#column_source DataSafeMaskingPolicy#column_source}

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#compartment_id DataSafeMaskingPolicy#compartment_id}.

---

##### `addMaskingColumnsFromSdmTrigger`<sup>Optional</sup> <a name="addMaskingColumnsFromSdmTrigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.addMaskingColumnsFromSdmTrigger"></a>

```java
public java.lang.Number getAddMaskingColumnsFromSdmTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#add_masking_columns_from_sdm_trigger DataSafeMaskingPolicy#add_masking_columns_from_sdm_trigger}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#defined_tags DataSafeMaskingPolicy#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#description DataSafeMaskingPolicy#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#display_name DataSafeMaskingPolicy#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#freeform_tags DataSafeMaskingPolicy#freeform_tags}.

---

##### `generateHealthReportTrigger`<sup>Optional</sup> <a name="generateHealthReportTrigger" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.generateHealthReportTrigger"></a>

```java
public java.lang.Number getGenerateHealthReportTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#generate_health_report_trigger DataSafeMaskingPolicy#generate_health_report_trigger}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#id DataSafeMaskingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDropTempTablesEnabled`<sup>Optional</sup> <a name="isDropTempTablesEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.isDropTempTablesEnabled"></a>

```java
public java.lang.Object getIsDropTempTablesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_drop_temp_tables_enabled DataSafeMaskingPolicy#is_drop_temp_tables_enabled}.

---

##### `isRedoLoggingEnabled`<sup>Optional</sup> <a name="isRedoLoggingEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.isRedoLoggingEnabled"></a>

```java
public java.lang.Object getIsRedoLoggingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_redo_logging_enabled DataSafeMaskingPolicy#is_redo_logging_enabled}.

---

##### `isRefreshStatsEnabled`<sup>Optional</sup> <a name="isRefreshStatsEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.isRefreshStatsEnabled"></a>

```java
public java.lang.Object getIsRefreshStatsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#is_refresh_stats_enabled DataSafeMaskingPolicy#is_refresh_stats_enabled}.

---

##### `parallelDegree`<sup>Optional</sup> <a name="parallelDegree" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.parallelDegree"></a>

```java
public java.lang.String getParallelDegree();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#parallel_degree DataSafeMaskingPolicy#parallel_degree}.

---

##### `postMaskingScript`<sup>Optional</sup> <a name="postMaskingScript" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.postMaskingScript"></a>

```java
public java.lang.String getPostMaskingScript();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#post_masking_script DataSafeMaskingPolicy#post_masking_script}.

---

##### `preMaskingScript`<sup>Optional</sup> <a name="preMaskingScript" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.preMaskingScript"></a>

```java
public java.lang.String getPreMaskingScript();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#pre_masking_script DataSafeMaskingPolicy#pre_masking_script}.

---

##### `recompile`<sup>Optional</sup> <a name="recompile" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.recompile"></a>

```java
public java.lang.String getRecompile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#recompile DataSafeMaskingPolicy#recompile}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyConfig.property.timeouts"></a>

```java
public DataSafeMaskingPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts">DataSafeMaskingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#timeouts DataSafeMaskingPolicy#timeouts}

---

### DataSafeMaskingPolicyTimeouts <a name="DataSafeMaskingPolicyTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policy.DataSafeMaskingPolicyTimeouts;

DataSafeMaskingPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#create DataSafeMaskingPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#delete DataSafeMaskingPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#update DataSafeMaskingPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#create DataSafeMaskingPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#delete DataSafeMaskingPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policy#update DataSafeMaskingPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeMaskingPolicyColumnSourceList <a name="DataSafeMaskingPolicyColumnSourceList" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policy.DataSafeMaskingPolicyColumnSourceList;

new DataSafeMaskingPolicyColumnSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.get"></a>

```java
public DataSafeMaskingPolicyColumnSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a>>

---


### DataSafeMaskingPolicyColumnSourceOutputReference <a name="DataSafeMaskingPolicyColumnSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policy.DataSafeMaskingPolicyColumnSourceOutputReference;

new DataSafeMaskingPolicyColumnSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.resetSensitiveDataModelId">resetSensitiveDataModelId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.resetTargetId">resetTargetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSensitiveDataModelId` <a name="resetSensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.resetSensitiveDataModelId"></a>

```java
public void resetSensitiveDataModelId()
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.resetTargetId"></a>

```java
public void resetTargetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.columnSourceInput">columnSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.sensitiveDataModelIdInput">sensitiveDataModelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.targetIdInput">targetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.columnSource">columnSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnSourceInput`<sup>Optional</sup> <a name="columnSourceInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.columnSourceInput"></a>

```java
public java.lang.String getColumnSourceInput();
```

- *Type:* java.lang.String

---

##### `sensitiveDataModelIdInput`<sup>Optional</sup> <a name="sensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.sensitiveDataModelIdInput"></a>

```java
public java.lang.String getSensitiveDataModelIdInput();
```

- *Type:* java.lang.String

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.targetIdInput"></a>

```java
public java.lang.String getTargetIdInput();
```

- *Type:* java.lang.String

---

##### `columnSource`<sup>Required</sup> <a name="columnSource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.columnSource"></a>

```java
public java.lang.String getColumnSource();
```

- *Type:* java.lang.String

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.sensitiveDataModelId"></a>

```java
public java.lang.String getSensitiveDataModelId();
```

- *Type:* java.lang.String

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSourceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyColumnSource">DataSafeMaskingPolicyColumnSource</a>

---


### DataSafeMaskingPolicyTimeoutsOutputReference <a name="DataSafeMaskingPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policy.DataSafeMaskingPolicyTimeoutsOutputReference;

new DataSafeMaskingPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts">DataSafeMaskingPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPolicy.DataSafeMaskingPolicyTimeouts">DataSafeMaskingPolicyTimeouts</a>

---



