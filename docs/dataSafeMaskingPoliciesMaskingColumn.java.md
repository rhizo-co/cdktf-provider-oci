# `dataSafeMaskingPoliciesMaskingColumn` Submodule <a name="`dataSafeMaskingPoliciesMaskingColumn` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeMaskingPoliciesMaskingColumn <a name="DataSafeMaskingPoliciesMaskingColumn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column oci_data_safe_masking_policies_masking_column}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policies_masking_column.DataSafeMaskingPoliciesMaskingColumn;

DataSafeMaskingPoliciesMaskingColumn.Builder.create(Construct scope, java.lang.String id)
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
    .columnName(java.lang.String)
    .maskingPolicyId(java.lang.String)
    .object(java.lang.String)
    .schemaName(java.lang.String)
//  .id(java.lang.String)
//  .isMaskingEnabled(java.lang.Boolean)
//  .isMaskingEnabled(IResolvable)
//  .maskingColumnGroup(java.lang.String)
//  .maskingFormats(IResolvable)
//  .maskingFormats(java.util.List<DataSafeMaskingPoliciesMaskingColumnMaskingFormats>)
//  .objectType(java.lang.String)
//  .sensitiveTypeId(java.lang.String)
//  .timeouts(DataSafeMaskingPoliciesMaskingColumnTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.columnName">columnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#column_name DataSafeMaskingPoliciesMaskingColumn#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.maskingPolicyId">maskingPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_policy_id DataSafeMaskingPoliciesMaskingColumn#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.object">object</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#object DataSafeMaskingPoliciesMaskingColumn#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#schema_name DataSafeMaskingPoliciesMaskingColumn#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#id DataSafeMaskingPoliciesMaskingColumn#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.isMaskingEnabled">isMaskingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#is_masking_enabled DataSafeMaskingPoliciesMaskingColumn#is_masking_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.maskingColumnGroup">maskingColumnGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_column_group DataSafeMaskingPoliciesMaskingColumn#masking_column_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.maskingFormats">maskingFormats</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>></code> | masking_formats block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.objectType">objectType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#object_type DataSafeMaskingPoliciesMaskingColumn#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.sensitiveTypeId">sensitiveTypeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#sensitive_type_id DataSafeMaskingPoliciesMaskingColumn#sensitive_type_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts">DataSafeMaskingPoliciesMaskingColumnTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.columnName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#column_name DataSafeMaskingPoliciesMaskingColumn#column_name}.

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.maskingPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_policy_id DataSafeMaskingPoliciesMaskingColumn#masking_policy_id}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.object"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#object DataSafeMaskingPoliciesMaskingColumn#object}.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.schemaName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#schema_name DataSafeMaskingPoliciesMaskingColumn#schema_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#id DataSafeMaskingPoliciesMaskingColumn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isMaskingEnabled`<sup>Optional</sup> <a name="isMaskingEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.isMaskingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#is_masking_enabled DataSafeMaskingPoliciesMaskingColumn#is_masking_enabled}.

---

##### `maskingColumnGroup`<sup>Optional</sup> <a name="maskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.maskingColumnGroup"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_column_group DataSafeMaskingPoliciesMaskingColumn#masking_column_group}.

---

##### `maskingFormats`<sup>Optional</sup> <a name="maskingFormats" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.maskingFormats"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>>

masking_formats block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_formats DataSafeMaskingPoliciesMaskingColumn#masking_formats}

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.objectType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#object_type DataSafeMaskingPoliciesMaskingColumn#object_type}.

---

##### `sensitiveTypeId`<sup>Optional</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.sensitiveTypeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#sensitive_type_id DataSafeMaskingPoliciesMaskingColumn#sensitive_type_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts">DataSafeMaskingPoliciesMaskingColumnTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#timeouts DataSafeMaskingPoliciesMaskingColumn#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.putMaskingFormats">putMaskingFormats</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetIsMaskingEnabled">resetIsMaskingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetMaskingColumnGroup">resetMaskingColumnGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetMaskingFormats">resetMaskingFormats</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetObjectType">resetObjectType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetSensitiveTypeId">resetSensitiveTypeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMaskingFormats` <a name="putMaskingFormats" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.putMaskingFormats"></a>

```java
public void putMaskingFormats(IResolvable OR java.util.List<DataSafeMaskingPoliciesMaskingColumnMaskingFormats> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.putMaskingFormats.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.putTimeouts"></a>

```java
public void putTimeouts(DataSafeMaskingPoliciesMaskingColumnTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts">DataSafeMaskingPoliciesMaskingColumnTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetId"></a>

```java
public void resetId()
```

##### `resetIsMaskingEnabled` <a name="resetIsMaskingEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetIsMaskingEnabled"></a>

```java
public void resetIsMaskingEnabled()
```

##### `resetMaskingColumnGroup` <a name="resetMaskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetMaskingColumnGroup"></a>

```java
public void resetMaskingColumnGroup()
```

##### `resetMaskingFormats` <a name="resetMaskingFormats" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetMaskingFormats"></a>

```java
public void resetMaskingFormats()
```

##### `resetObjectType` <a name="resetObjectType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetObjectType"></a>

```java
public void resetObjectType()
```

##### `resetSensitiveTypeId` <a name="resetSensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetSensitiveTypeId"></a>

```java
public void resetSensitiveTypeId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeMaskingPoliciesMaskingColumn resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policies_masking_column.DataSafeMaskingPoliciesMaskingColumn;

DataSafeMaskingPoliciesMaskingColumn.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policies_masking_column.DataSafeMaskingPoliciesMaskingColumn;

DataSafeMaskingPoliciesMaskingColumn.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policies_masking_column.DataSafeMaskingPoliciesMaskingColumn;

DataSafeMaskingPoliciesMaskingColumn.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policies_masking_column.DataSafeMaskingPoliciesMaskingColumn;

DataSafeMaskingPoliciesMaskingColumn.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSafeMaskingPoliciesMaskingColumn.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataSafeMaskingPoliciesMaskingColumn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSafeMaskingPoliciesMaskingColumn to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSafeMaskingPoliciesMaskingColumn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeMaskingPoliciesMaskingColumn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.childColumns">childColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingFormats">maskingFormats</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference">DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.columnNameInput">columnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.isMaskingEnabledInput">isMaskingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingColumnGroupInput">maskingColumnGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingFormatsInput">maskingFormatsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingPolicyIdInput">maskingPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.objectTypeInput">objectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.sensitiveTypeIdInput">sensitiveTypeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts">DataSafeMaskingPoliciesMaskingColumnTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.isMaskingEnabled">isMaskingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingColumnGroup">maskingColumnGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingPolicyId">maskingPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `childColumns`<sup>Required</sup> <a name="childColumns" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.childColumns"></a>

```java
public java.util.List<java.lang.String> getChildColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `maskingFormats`<sup>Required</sup> <a name="maskingFormats" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingFormats"></a>

```java
public DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList getMaskingFormats();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeouts"></a>

```java
public DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference">DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.columnNameInput"></a>

```java
public java.lang.String getColumnNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isMaskingEnabledInput`<sup>Optional</sup> <a name="isMaskingEnabledInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.isMaskingEnabledInput"></a>

```java
public java.lang.Object getIsMaskingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maskingColumnGroupInput`<sup>Optional</sup> <a name="maskingColumnGroupInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingColumnGroupInput"></a>

```java
public java.lang.String getMaskingColumnGroupInput();
```

- *Type:* java.lang.String

---

##### `maskingFormatsInput`<sup>Optional</sup> <a name="maskingFormatsInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingFormatsInput"></a>

```java
public java.lang.Object getMaskingFormatsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>>

---

##### `maskingPolicyIdInput`<sup>Optional</sup> <a name="maskingPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingPolicyIdInput"></a>

```java
public java.lang.String getMaskingPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.objectTypeInput"></a>

```java
public java.lang.String getObjectTypeInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `sensitiveTypeIdInput`<sup>Optional</sup> <a name="sensitiveTypeIdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.sensitiveTypeIdInput"></a>

```java
public java.lang.String getSensitiveTypeIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts">DataSafeMaskingPoliciesMaskingColumnTimeouts</a>

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isMaskingEnabled`<sup>Required</sup> <a name="isMaskingEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.isMaskingEnabled"></a>

```java
public java.lang.Object getIsMaskingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maskingColumnGroup`<sup>Required</sup> <a name="maskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingColumnGroup"></a>

```java
public java.lang.String getMaskingColumnGroup();
```

- *Type:* java.lang.String

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.maskingPolicyId"></a>

```java
public java.lang.String getMaskingPolicyId();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `sensitiveTypeId`<sup>Required</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.sensitiveTypeId"></a>

```java
public java.lang.String getSensitiveTypeId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumn.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeMaskingPoliciesMaskingColumnConfig <a name="DataSafeMaskingPoliciesMaskingColumnConfig" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policies_masking_column.DataSafeMaskingPoliciesMaskingColumnConfig;

DataSafeMaskingPoliciesMaskingColumnConfig.builder()
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
    .columnName(java.lang.String)
    .maskingPolicyId(java.lang.String)
    .object(java.lang.String)
    .schemaName(java.lang.String)
//  .id(java.lang.String)
//  .isMaskingEnabled(java.lang.Boolean)
//  .isMaskingEnabled(IResolvable)
//  .maskingColumnGroup(java.lang.String)
//  .maskingFormats(IResolvable)
//  .maskingFormats(java.util.List<DataSafeMaskingPoliciesMaskingColumnMaskingFormats>)
//  .objectType(java.lang.String)
//  .sensitiveTypeId(java.lang.String)
//  .timeouts(DataSafeMaskingPoliciesMaskingColumnTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.columnName">columnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#column_name DataSafeMaskingPoliciesMaskingColumn#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.maskingPolicyId">maskingPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_policy_id DataSafeMaskingPoliciesMaskingColumn#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.object">object</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#object DataSafeMaskingPoliciesMaskingColumn#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#schema_name DataSafeMaskingPoliciesMaskingColumn#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#id DataSafeMaskingPoliciesMaskingColumn#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.isMaskingEnabled">isMaskingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#is_masking_enabled DataSafeMaskingPoliciesMaskingColumn#is_masking_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.maskingColumnGroup">maskingColumnGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_column_group DataSafeMaskingPoliciesMaskingColumn#masking_column_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.maskingFormats">maskingFormats</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>></code> | masking_formats block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.objectType">objectType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#object_type DataSafeMaskingPoliciesMaskingColumn#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#sensitive_type_id DataSafeMaskingPoliciesMaskingColumn#sensitive_type_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts">DataSafeMaskingPoliciesMaskingColumnTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#column_name DataSafeMaskingPoliciesMaskingColumn#column_name}.

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.maskingPolicyId"></a>

```java
public java.lang.String getMaskingPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_policy_id DataSafeMaskingPoliciesMaskingColumn#masking_policy_id}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#object DataSafeMaskingPoliciesMaskingColumn#object}.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#schema_name DataSafeMaskingPoliciesMaskingColumn#schema_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#id DataSafeMaskingPoliciesMaskingColumn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isMaskingEnabled`<sup>Optional</sup> <a name="isMaskingEnabled" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.isMaskingEnabled"></a>

```java
public java.lang.Object getIsMaskingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#is_masking_enabled DataSafeMaskingPoliciesMaskingColumn#is_masking_enabled}.

---

##### `maskingColumnGroup`<sup>Optional</sup> <a name="maskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.maskingColumnGroup"></a>

```java
public java.lang.String getMaskingColumnGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_column_group DataSafeMaskingPoliciesMaskingColumn#masking_column_group}.

---

##### `maskingFormats`<sup>Optional</sup> <a name="maskingFormats" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.maskingFormats"></a>

```java
public java.lang.Object getMaskingFormats();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>>

masking_formats block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#masking_formats DataSafeMaskingPoliciesMaskingColumn#masking_formats}

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#object_type DataSafeMaskingPoliciesMaskingColumn#object_type}.

---

##### `sensitiveTypeId`<sup>Optional</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.sensitiveTypeId"></a>

```java
public java.lang.String getSensitiveTypeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#sensitive_type_id DataSafeMaskingPoliciesMaskingColumn#sensitive_type_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnConfig.property.timeouts"></a>

```java
public DataSafeMaskingPoliciesMaskingColumnTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts">DataSafeMaskingPoliciesMaskingColumnTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#timeouts DataSafeMaskingPoliciesMaskingColumn#timeouts}

---

### DataSafeMaskingPoliciesMaskingColumnMaskingFormats <a name="DataSafeMaskingPoliciesMaskingColumnMaskingFormats" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policies_masking_column.DataSafeMaskingPoliciesMaskingColumnMaskingFormats;

DataSafeMaskingPoliciesMaskingColumnMaskingFormats.builder()
    .formatEntries(IResolvable)
    .formatEntries(java.util.List<DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries>)
//  .condition(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats.property.formatEntries">formatEntries</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries</a>></code> | format_entries block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats.property.condition">condition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#condition DataSafeMaskingPoliciesMaskingColumn#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#description DataSafeMaskingPoliciesMaskingColumn#description}. |

---

##### `formatEntries`<sup>Required</sup> <a name="formatEntries" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats.property.formatEntries"></a>

```java
public java.lang.Object getFormatEntries();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries</a>>

format_entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#format_entries DataSafeMaskingPoliciesMaskingColumn#format_entries}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#condition DataSafeMaskingPoliciesMaskingColumn#condition}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#description DataSafeMaskingPoliciesMaskingColumn#description}.

---

### DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries <a name="DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policies_masking_column.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries;

DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.builder()
    .type(java.lang.String)
//  .columnName(java.lang.String)
//  .description(java.lang.String)
//  .endDate(java.lang.String)
//  .endLength(java.lang.Number)
//  .endValue(java.lang.Number)
//  .fixedNumber(java.lang.Number)
//  .fixedString(java.lang.String)
//  .groupingColumns(java.util.List<java.lang.String>)
//  .length(java.lang.Number)
//  .libraryMaskingFormatId(java.lang.String)
//  .pattern(java.lang.String)
//  .postProcessingFunction(java.lang.String)
//  .randomList(java.util.List<java.lang.String>)
//  .regularExpression(java.lang.String)
//  .replaceWith(java.lang.String)
//  .schemaName(java.lang.String)
//  .sqlExpression(java.lang.String)
//  .startDate(java.lang.String)
//  .startLength(java.lang.Number)
//  .startPosition(java.lang.Number)
//  .startValue(java.lang.Number)
//  .tableName(java.lang.String)
//  .userDefinedFunction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#type DataSafeMaskingPoliciesMaskingColumn#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.columnName">columnName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#column_name DataSafeMaskingPoliciesMaskingColumn#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#description DataSafeMaskingPoliciesMaskingColumn#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.endDate">endDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#end_date DataSafeMaskingPoliciesMaskingColumn#end_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.endLength">endLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#end_length DataSafeMaskingPoliciesMaskingColumn#end_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.endValue">endValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#end_value DataSafeMaskingPoliciesMaskingColumn#end_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.fixedNumber">fixedNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#fixed_number DataSafeMaskingPoliciesMaskingColumn#fixed_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.fixedString">fixedString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#fixed_string DataSafeMaskingPoliciesMaskingColumn#fixed_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.groupingColumns">groupingColumns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#grouping_columns DataSafeMaskingPoliciesMaskingColumn#grouping_columns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.length">length</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#length DataSafeMaskingPoliciesMaskingColumn#length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.libraryMaskingFormatId">libraryMaskingFormatId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#library_masking_format_id DataSafeMaskingPoliciesMaskingColumn#library_masking_format_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.pattern">pattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#pattern DataSafeMaskingPoliciesMaskingColumn#pattern}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.postProcessingFunction">postProcessingFunction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#post_processing_function DataSafeMaskingPoliciesMaskingColumn#post_processing_function}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.randomList">randomList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#random_list DataSafeMaskingPoliciesMaskingColumn#random_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.regularExpression">regularExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#regular_expression DataSafeMaskingPoliciesMaskingColumn#regular_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.replaceWith">replaceWith</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#replace_with DataSafeMaskingPoliciesMaskingColumn#replace_with}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#schema_name DataSafeMaskingPoliciesMaskingColumn#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.sqlExpression">sqlExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#sql_expression DataSafeMaskingPoliciesMaskingColumn#sql_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startDate">startDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_date DataSafeMaskingPoliciesMaskingColumn#start_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startLength">startLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_length DataSafeMaskingPoliciesMaskingColumn#start_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startPosition">startPosition</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_position DataSafeMaskingPoliciesMaskingColumn#start_position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startValue">startValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_value DataSafeMaskingPoliciesMaskingColumn#start_value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#table_name DataSafeMaskingPoliciesMaskingColumn#table_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.userDefinedFunction">userDefinedFunction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#user_defined_function DataSafeMaskingPoliciesMaskingColumn#user_defined_function}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#type DataSafeMaskingPoliciesMaskingColumn#type}.

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#column_name DataSafeMaskingPoliciesMaskingColumn#column_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#description DataSafeMaskingPoliciesMaskingColumn#description}.

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#end_date DataSafeMaskingPoliciesMaskingColumn#end_date}.

---

##### `endLength`<sup>Optional</sup> <a name="endLength" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.endLength"></a>

```java
public java.lang.Number getEndLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#end_length DataSafeMaskingPoliciesMaskingColumn#end_length}.

---

##### `endValue`<sup>Optional</sup> <a name="endValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.endValue"></a>

```java
public java.lang.Number getEndValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#end_value DataSafeMaskingPoliciesMaskingColumn#end_value}.

---

##### `fixedNumber`<sup>Optional</sup> <a name="fixedNumber" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.fixedNumber"></a>

```java
public java.lang.Number getFixedNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#fixed_number DataSafeMaskingPoliciesMaskingColumn#fixed_number}.

---

##### `fixedString`<sup>Optional</sup> <a name="fixedString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.fixedString"></a>

```java
public java.lang.String getFixedString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#fixed_string DataSafeMaskingPoliciesMaskingColumn#fixed_string}.

---

##### `groupingColumns`<sup>Optional</sup> <a name="groupingColumns" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.groupingColumns"></a>

```java
public java.util.List<java.lang.String> getGroupingColumns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#grouping_columns DataSafeMaskingPoliciesMaskingColumn#grouping_columns}.

---

##### `length`<sup>Optional</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.length"></a>

```java
public java.lang.Number getLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#length DataSafeMaskingPoliciesMaskingColumn#length}.

---

##### `libraryMaskingFormatId`<sup>Optional</sup> <a name="libraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.libraryMaskingFormatId"></a>

```java
public java.lang.String getLibraryMaskingFormatId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#library_masking_format_id DataSafeMaskingPoliciesMaskingColumn#library_masking_format_id}.

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#pattern DataSafeMaskingPoliciesMaskingColumn#pattern}.

---

##### `postProcessingFunction`<sup>Optional</sup> <a name="postProcessingFunction" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.postProcessingFunction"></a>

```java
public java.lang.String getPostProcessingFunction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#post_processing_function DataSafeMaskingPoliciesMaskingColumn#post_processing_function}.

---

##### `randomList`<sup>Optional</sup> <a name="randomList" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.randomList"></a>

```java
public java.util.List<java.lang.String> getRandomList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#random_list DataSafeMaskingPoliciesMaskingColumn#random_list}.

---

##### `regularExpression`<sup>Optional</sup> <a name="regularExpression" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.regularExpression"></a>

```java
public java.lang.String getRegularExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#regular_expression DataSafeMaskingPoliciesMaskingColumn#regular_expression}.

---

##### `replaceWith`<sup>Optional</sup> <a name="replaceWith" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.replaceWith"></a>

```java
public java.lang.String getReplaceWith();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#replace_with DataSafeMaskingPoliciesMaskingColumn#replace_with}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#schema_name DataSafeMaskingPoliciesMaskingColumn#schema_name}.

---

##### `sqlExpression`<sup>Optional</sup> <a name="sqlExpression" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.sqlExpression"></a>

```java
public java.lang.String getSqlExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#sql_expression DataSafeMaskingPoliciesMaskingColumn#sql_expression}.

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_date DataSafeMaskingPoliciesMaskingColumn#start_date}.

---

##### `startLength`<sup>Optional</sup> <a name="startLength" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startLength"></a>

```java
public java.lang.Number getStartLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_length DataSafeMaskingPoliciesMaskingColumn#start_length}.

---

##### `startPosition`<sup>Optional</sup> <a name="startPosition" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startPosition"></a>

```java
public java.lang.Number getStartPosition();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_position DataSafeMaskingPoliciesMaskingColumn#start_position}.

---

##### `startValue`<sup>Optional</sup> <a name="startValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.startValue"></a>

```java
public java.lang.Number getStartValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#start_value DataSafeMaskingPoliciesMaskingColumn#start_value}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#table_name DataSafeMaskingPoliciesMaskingColumn#table_name}.

---

##### `userDefinedFunction`<sup>Optional</sup> <a name="userDefinedFunction" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries.property.userDefinedFunction"></a>

```java
public java.lang.String getUserDefinedFunction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#user_defined_function DataSafeMaskingPoliciesMaskingColumn#user_defined_function}.

---

### DataSafeMaskingPoliciesMaskingColumnTimeouts <a name="DataSafeMaskingPoliciesMaskingColumnTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policies_masking_column.DataSafeMaskingPoliciesMaskingColumnTimeouts;

DataSafeMaskingPoliciesMaskingColumnTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#create DataSafeMaskingPoliciesMaskingColumn#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#delete DataSafeMaskingPoliciesMaskingColumn#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#update DataSafeMaskingPoliciesMaskingColumn#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#create DataSafeMaskingPoliciesMaskingColumn#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#delete DataSafeMaskingPoliciesMaskingColumn#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_masking_policies_masking_column#update DataSafeMaskingPoliciesMaskingColumn#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList <a name="DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policies_masking_column.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList;

new DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.get"></a>

```java
public DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries</a>>

---


### DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference <a name="DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policies_masking_column.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference;

new DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetColumnName">resetColumnName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetEndDate">resetEndDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetEndLength">resetEndLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetEndValue">resetEndValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetFixedNumber">resetFixedNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetFixedString">resetFixedString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetGroupingColumns">resetGroupingColumns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetLength">resetLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetLibraryMaskingFormatId">resetLibraryMaskingFormatId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetPattern">resetPattern</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetPostProcessingFunction">resetPostProcessingFunction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetRandomList">resetRandomList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetRegularExpression">resetRegularExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetReplaceWith">resetReplaceWith</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetSqlExpression">resetSqlExpression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartDate">resetStartDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartLength">resetStartLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartPosition">resetStartPosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartValue">resetStartValue</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetUserDefinedFunction">resetUserDefinedFunction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetColumnName` <a name="resetColumnName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetColumnName"></a>

```java
public void resetColumnName()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEndDate` <a name="resetEndDate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetEndDate"></a>

```java
public void resetEndDate()
```

##### `resetEndLength` <a name="resetEndLength" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetEndLength"></a>

```java
public void resetEndLength()
```

##### `resetEndValue` <a name="resetEndValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetEndValue"></a>

```java
public void resetEndValue()
```

##### `resetFixedNumber` <a name="resetFixedNumber" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetFixedNumber"></a>

```java
public void resetFixedNumber()
```

##### `resetFixedString` <a name="resetFixedString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetFixedString"></a>

```java
public void resetFixedString()
```

##### `resetGroupingColumns` <a name="resetGroupingColumns" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetGroupingColumns"></a>

```java
public void resetGroupingColumns()
```

##### `resetLength` <a name="resetLength" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetLength"></a>

```java
public void resetLength()
```

##### `resetLibraryMaskingFormatId` <a name="resetLibraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetLibraryMaskingFormatId"></a>

```java
public void resetLibraryMaskingFormatId()
```

##### `resetPattern` <a name="resetPattern" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetPattern"></a>

```java
public void resetPattern()
```

##### `resetPostProcessingFunction` <a name="resetPostProcessingFunction" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetPostProcessingFunction"></a>

```java
public void resetPostProcessingFunction()
```

##### `resetRandomList` <a name="resetRandomList" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetRandomList"></a>

```java
public void resetRandomList()
```

##### `resetRegularExpression` <a name="resetRegularExpression" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetRegularExpression"></a>

```java
public void resetRegularExpression()
```

##### `resetReplaceWith` <a name="resetReplaceWith" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetReplaceWith"></a>

```java
public void resetReplaceWith()
```

##### `resetSchemaName` <a name="resetSchemaName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetSchemaName"></a>

```java
public void resetSchemaName()
```

##### `resetSqlExpression` <a name="resetSqlExpression" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetSqlExpression"></a>

```java
public void resetSqlExpression()
```

##### `resetStartDate` <a name="resetStartDate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartDate"></a>

```java
public void resetStartDate()
```

##### `resetStartLength` <a name="resetStartLength" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartLength"></a>

```java
public void resetStartLength()
```

##### `resetStartPosition` <a name="resetStartPosition" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartPosition"></a>

```java
public void resetStartPosition()
```

##### `resetStartValue` <a name="resetStartValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetStartValue"></a>

```java
public void resetStartValue()
```

##### `resetTableName` <a name="resetTableName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetTableName"></a>

```java
public void resetTableName()
```

##### `resetUserDefinedFunction` <a name="resetUserDefinedFunction" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.resetUserDefinedFunction"></a>

```java
public void resetUserDefinedFunction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.columnNameInput">columnNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endDateInput">endDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endLengthInput">endLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endValueInput">endValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedNumberInput">fixedNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedStringInput">fixedStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.groupingColumnsInput">groupingColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.lengthInput">lengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.libraryMaskingFormatIdInput">libraryMaskingFormatIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.postProcessingFunctionInput">postProcessingFunctionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.randomListInput">randomListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.regularExpressionInput">regularExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.replaceWithInput">replaceWithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.sqlExpressionInput">sqlExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startDateInput">startDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startLengthInput">startLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startPositionInput">startPositionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startValueInput">startValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.userDefinedFunctionInput">userDefinedFunctionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endDate">endDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endLength">endLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endValue">endValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedNumber">fixedNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedString">fixedString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.groupingColumns">groupingColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.length">length</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.libraryMaskingFormatId">libraryMaskingFormatId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.postProcessingFunction">postProcessingFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.randomList">randomList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.regularExpression">regularExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.replaceWith">replaceWith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.sqlExpression">sqlExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startDate">startDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startLength">startLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startPosition">startPosition</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startValue">startValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.userDefinedFunction">userDefinedFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.columnNameInput"></a>

```java
public java.lang.String getColumnNameInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endDateInput"></a>

```java
public java.lang.String getEndDateInput();
```

- *Type:* java.lang.String

---

##### `endLengthInput`<sup>Optional</sup> <a name="endLengthInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endLengthInput"></a>

```java
public java.lang.Number getEndLengthInput();
```

- *Type:* java.lang.Number

---

##### `endValueInput`<sup>Optional</sup> <a name="endValueInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endValueInput"></a>

```java
public java.lang.Number getEndValueInput();
```

- *Type:* java.lang.Number

---

##### `fixedNumberInput`<sup>Optional</sup> <a name="fixedNumberInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedNumberInput"></a>

```java
public java.lang.Number getFixedNumberInput();
```

- *Type:* java.lang.Number

---

##### `fixedStringInput`<sup>Optional</sup> <a name="fixedStringInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedStringInput"></a>

```java
public java.lang.String getFixedStringInput();
```

- *Type:* java.lang.String

---

##### `groupingColumnsInput`<sup>Optional</sup> <a name="groupingColumnsInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.groupingColumnsInput"></a>

```java
public java.util.List<java.lang.String> getGroupingColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lengthInput`<sup>Optional</sup> <a name="lengthInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.lengthInput"></a>

```java
public java.lang.Number getLengthInput();
```

- *Type:* java.lang.Number

---

##### `libraryMaskingFormatIdInput`<sup>Optional</sup> <a name="libraryMaskingFormatIdInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.libraryMaskingFormatIdInput"></a>

```java
public java.lang.String getLibraryMaskingFormatIdInput();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `postProcessingFunctionInput`<sup>Optional</sup> <a name="postProcessingFunctionInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.postProcessingFunctionInput"></a>

```java
public java.lang.String getPostProcessingFunctionInput();
```

- *Type:* java.lang.String

---

##### `randomListInput`<sup>Optional</sup> <a name="randomListInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.randomListInput"></a>

```java
public java.util.List<java.lang.String> getRandomListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regularExpressionInput`<sup>Optional</sup> <a name="regularExpressionInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.regularExpressionInput"></a>

```java
public java.lang.String getRegularExpressionInput();
```

- *Type:* java.lang.String

---

##### `replaceWithInput`<sup>Optional</sup> <a name="replaceWithInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.replaceWithInput"></a>

```java
public java.lang.String getReplaceWithInput();
```

- *Type:* java.lang.String

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.schemaNameInput"></a>

```java
public java.lang.String getSchemaNameInput();
```

- *Type:* java.lang.String

---

##### `sqlExpressionInput`<sup>Optional</sup> <a name="sqlExpressionInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.sqlExpressionInput"></a>

```java
public java.lang.String getSqlExpressionInput();
```

- *Type:* java.lang.String

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startDateInput"></a>

```java
public java.lang.String getStartDateInput();
```

- *Type:* java.lang.String

---

##### `startLengthInput`<sup>Optional</sup> <a name="startLengthInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startLengthInput"></a>

```java
public java.lang.Number getStartLengthInput();
```

- *Type:* java.lang.Number

---

##### `startPositionInput`<sup>Optional</sup> <a name="startPositionInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startPositionInput"></a>

```java
public java.lang.Number getStartPositionInput();
```

- *Type:* java.lang.Number

---

##### `startValueInput`<sup>Optional</sup> <a name="startValueInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startValueInput"></a>

```java
public java.lang.Number getStartValueInput();
```

- *Type:* java.lang.Number

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `userDefinedFunctionInput`<sup>Optional</sup> <a name="userDefinedFunctionInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.userDefinedFunctionInput"></a>

```java
public java.lang.String getUserDefinedFunctionInput();
```

- *Type:* java.lang.String

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

---

##### `endLength`<sup>Required</sup> <a name="endLength" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endLength"></a>

```java
public java.lang.Number getEndLength();
```

- *Type:* java.lang.Number

---

##### `endValue`<sup>Required</sup> <a name="endValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.endValue"></a>

```java
public java.lang.Number getEndValue();
```

- *Type:* java.lang.Number

---

##### `fixedNumber`<sup>Required</sup> <a name="fixedNumber" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedNumber"></a>

```java
public java.lang.Number getFixedNumber();
```

- *Type:* java.lang.Number

---

##### `fixedString`<sup>Required</sup> <a name="fixedString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.fixedString"></a>

```java
public java.lang.String getFixedString();
```

- *Type:* java.lang.String

---

##### `groupingColumns`<sup>Required</sup> <a name="groupingColumns" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.groupingColumns"></a>

```java
public java.util.List<java.lang.String> getGroupingColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.length"></a>

```java
public java.lang.Number getLength();
```

- *Type:* java.lang.Number

---

##### `libraryMaskingFormatId`<sup>Required</sup> <a name="libraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.libraryMaskingFormatId"></a>

```java
public java.lang.String getLibraryMaskingFormatId();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `postProcessingFunction`<sup>Required</sup> <a name="postProcessingFunction" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.postProcessingFunction"></a>

```java
public java.lang.String getPostProcessingFunction();
```

- *Type:* java.lang.String

---

##### `randomList`<sup>Required</sup> <a name="randomList" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.randomList"></a>

```java
public java.util.List<java.lang.String> getRandomList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regularExpression`<sup>Required</sup> <a name="regularExpression" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.regularExpression"></a>

```java
public java.lang.String getRegularExpression();
```

- *Type:* java.lang.String

---

##### `replaceWith`<sup>Required</sup> <a name="replaceWith" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.replaceWith"></a>

```java
public java.lang.String getReplaceWith();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.sqlExpression"></a>

```java
public java.lang.String getSqlExpression();
```

- *Type:* java.lang.String

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

---

##### `startLength`<sup>Required</sup> <a name="startLength" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startLength"></a>

```java
public java.lang.Number getStartLength();
```

- *Type:* java.lang.Number

---

##### `startPosition`<sup>Required</sup> <a name="startPosition" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startPosition"></a>

```java
public java.lang.Number getStartPosition();
```

- *Type:* java.lang.Number

---

##### `startValue`<sup>Required</sup> <a name="startValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.startValue"></a>

```java
public java.lang.Number getStartValue();
```

- *Type:* java.lang.Number

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userDefinedFunction`<sup>Required</sup> <a name="userDefinedFunction" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.userDefinedFunction"></a>

```java
public java.lang.String getUserDefinedFunction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries</a>

---


### DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList <a name="DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policies_masking_column.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList;

new DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.get"></a>

```java
public DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>>

---


### DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference <a name="DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policies_masking_column.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference;

new DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.putFormatEntries">putFormatEntries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFormatEntries` <a name="putFormatEntries" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.putFormatEntries"></a>

```java
public void putFormatEntries(IResolvable OR java.util.List<DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.putFormatEntries.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries</a>>

---

##### `resetCondition` <a name="resetCondition" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.formatEntries">formatEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.conditionInput">conditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.formatEntriesInput">formatEntriesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `formatEntries`<sup>Required</sup> <a name="formatEntries" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.formatEntries"></a>

```java
public DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList getFormatEntries();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntriesList</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.conditionInput"></a>

```java
public java.lang.String getConditionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `formatEntriesInput`<sup>Optional</sup> <a name="formatEntriesInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.formatEntriesInput"></a>

```java
public java.lang.Object getFormatEntriesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries">DataSafeMaskingPoliciesMaskingColumnMaskingFormatsFormatEntries</a>>

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormatsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnMaskingFormats">DataSafeMaskingPoliciesMaskingColumnMaskingFormats</a>

---


### DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference <a name="DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_masking_policies_masking_column.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference;

new DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts">DataSafeMaskingPoliciesMaskingColumnTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeMaskingPoliciesMaskingColumn.DataSafeMaskingPoliciesMaskingColumnTimeouts">DataSafeMaskingPoliciesMaskingColumnTimeouts</a>

---



