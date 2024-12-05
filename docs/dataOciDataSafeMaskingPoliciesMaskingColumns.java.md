# `dataOciDataSafeMaskingPoliciesMaskingColumns` Submodule <a name="`dataOciDataSafeMaskingPoliciesMaskingColumns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeMaskingPoliciesMaskingColumns <a name="DataOciDataSafeMaskingPoliciesMaskingColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns oci_data_safe_masking_policies_masking_columns}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policies_masking_columns.DataOciDataSafeMaskingPoliciesMaskingColumns;

DataOciDataSafeMaskingPoliciesMaskingColumns.Builder.create(Construct scope, java.lang.String id)
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
    .maskingPolicyId(java.lang.String)
//  .columnName(java.util.List<java.lang.String>)
//  .dataType(java.util.List<java.lang.String>)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeMaskingPoliciesMaskingColumnsFilter>)
//  .id(java.lang.String)
//  .isMaskingEnabled(java.lang.Boolean)
//  .isMaskingEnabled(IResolvable)
//  .isSeedRequired(java.lang.Boolean)
//  .isSeedRequired(IResolvable)
//  .maskingColumnGroup(java.util.List<java.lang.String>)
//  .maskingColumnLifecycleState(java.lang.String)
//  .object(java.util.List<java.lang.String>)
//  .objectType(java.util.List<java.lang.String>)
//  .schemaName(java.util.List<java.lang.String>)
//  .sensitiveTypeId(java.lang.String)
//  .timeCreatedGreaterThanOrEqualTo(java.lang.String)
//  .timeCreatedLessThan(java.lang.String)
//  .timeUpdatedGreaterThanOrEqualTo(java.lang.String)
//  .timeUpdatedLessThan(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.maskingPolicyId">maskingPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_policy_id DataOciDataSafeMaskingPoliciesMaskingColumns#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.columnName">columnName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#column_name DataOciDataSafeMaskingPoliciesMaskingColumns#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.dataType">dataType</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#data_type DataOciDataSafeMaskingPoliciesMaskingColumns#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#id DataOciDataSafeMaskingPoliciesMaskingColumns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.isMaskingEnabled">isMaskingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#is_masking_enabled DataOciDataSafeMaskingPoliciesMaskingColumns#is_masking_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.isSeedRequired">isSeedRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#is_seed_required DataOciDataSafeMaskingPoliciesMaskingColumns#is_seed_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.maskingColumnGroup">maskingColumnGroup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_column_group DataOciDataSafeMaskingPoliciesMaskingColumns#masking_column_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.maskingColumnLifecycleState">maskingColumnLifecycleState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_column_lifecycle_state DataOciDataSafeMaskingPoliciesMaskingColumns#masking_column_lifecycle_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.object">object</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#object DataOciDataSafeMaskingPoliciesMaskingColumns#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.objectType">objectType</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#object_type DataOciDataSafeMaskingPoliciesMaskingColumns#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.schemaName">schemaName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#schema_name DataOciDataSafeMaskingPoliciesMaskingColumns#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.sensitiveTypeId">sensitiveTypeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#sensitive_type_id DataOciDataSafeMaskingPoliciesMaskingColumns#sensitive_type_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_created_greater_than_or_equal_to DataOciDataSafeMaskingPoliciesMaskingColumns#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_created_less_than DataOciDataSafeMaskingPoliciesMaskingColumns#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.timeUpdatedGreaterThanOrEqualTo">timeUpdatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_updated_greater_than_or_equal_to DataOciDataSafeMaskingPoliciesMaskingColumns#time_updated_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.timeUpdatedLessThan">timeUpdatedLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_updated_less_than DataOciDataSafeMaskingPoliciesMaskingColumns#time_updated_less_than}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.maskingPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_policy_id DataOciDataSafeMaskingPoliciesMaskingColumns#masking_policy_id}.

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.columnName"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#column_name DataOciDataSafeMaskingPoliciesMaskingColumns#column_name}.

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.dataType"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#data_type DataOciDataSafeMaskingPoliciesMaskingColumns#data_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#filter DataOciDataSafeMaskingPoliciesMaskingColumns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#id DataOciDataSafeMaskingPoliciesMaskingColumns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isMaskingEnabled`<sup>Optional</sup> <a name="isMaskingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.isMaskingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#is_masking_enabled DataOciDataSafeMaskingPoliciesMaskingColumns#is_masking_enabled}.

---

##### `isSeedRequired`<sup>Optional</sup> <a name="isSeedRequired" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.isSeedRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#is_seed_required DataOciDataSafeMaskingPoliciesMaskingColumns#is_seed_required}.

---

##### `maskingColumnGroup`<sup>Optional</sup> <a name="maskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.maskingColumnGroup"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_column_group DataOciDataSafeMaskingPoliciesMaskingColumns#masking_column_group}.

---

##### `maskingColumnLifecycleState`<sup>Optional</sup> <a name="maskingColumnLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.maskingColumnLifecycleState"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_column_lifecycle_state DataOciDataSafeMaskingPoliciesMaskingColumns#masking_column_lifecycle_state}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.object"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#object DataOciDataSafeMaskingPoliciesMaskingColumns#object}.

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.objectType"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#object_type DataOciDataSafeMaskingPoliciesMaskingColumns#object_type}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.schemaName"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#schema_name DataOciDataSafeMaskingPoliciesMaskingColumns#schema_name}.

---

##### `sensitiveTypeId`<sup>Optional</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.sensitiveTypeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#sensitive_type_id DataOciDataSafeMaskingPoliciesMaskingColumns#sensitive_type_id}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.timeCreatedGreaterThanOrEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_created_greater_than_or_equal_to DataOciDataSafeMaskingPoliciesMaskingColumns#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.timeCreatedLessThan"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_created_less_than DataOciDataSafeMaskingPoliciesMaskingColumns#time_created_less_than}.

---

##### `timeUpdatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.timeUpdatedGreaterThanOrEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_updated_greater_than_or_equal_to DataOciDataSafeMaskingPoliciesMaskingColumns#time_updated_greater_than_or_equal_to}.

---

##### `timeUpdatedLessThan`<sup>Optional</sup> <a name="timeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.timeUpdatedLessThan"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_updated_less_than DataOciDataSafeMaskingPoliciesMaskingColumns#time_updated_less_than}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetColumnName">resetColumnName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetDataType">resetDataType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetIsMaskingEnabled">resetIsMaskingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetIsSeedRequired">resetIsSeedRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetMaskingColumnGroup">resetMaskingColumnGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetMaskingColumnLifecycleState">resetMaskingColumnLifecycleState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetObject">resetObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetObjectType">resetObjectType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetSchemaName">resetSchemaName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetSensitiveTypeId">resetSensitiveTypeId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetTimeCreatedGreaterThanOrEqualTo">resetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetTimeCreatedLessThan">resetTimeCreatedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetTimeUpdatedGreaterThanOrEqualTo">resetTimeUpdatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetTimeUpdatedLessThan">resetTimeUpdatedLessThan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDataSafeMaskingPoliciesMaskingColumnsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a>>

---

##### `resetColumnName` <a name="resetColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetColumnName"></a>

```java
public void resetColumnName()
```

##### `resetDataType` <a name="resetDataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetDataType"></a>

```java
public void resetDataType()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetId"></a>

```java
public void resetId()
```

##### `resetIsMaskingEnabled` <a name="resetIsMaskingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetIsMaskingEnabled"></a>

```java
public void resetIsMaskingEnabled()
```

##### `resetIsSeedRequired` <a name="resetIsSeedRequired" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetIsSeedRequired"></a>

```java
public void resetIsSeedRequired()
```

##### `resetMaskingColumnGroup` <a name="resetMaskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetMaskingColumnGroup"></a>

```java
public void resetMaskingColumnGroup()
```

##### `resetMaskingColumnLifecycleState` <a name="resetMaskingColumnLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetMaskingColumnLifecycleState"></a>

```java
public void resetMaskingColumnLifecycleState()
```

##### `resetObject` <a name="resetObject" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetObject"></a>

```java
public void resetObject()
```

##### `resetObjectType` <a name="resetObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetObjectType"></a>

```java
public void resetObjectType()
```

##### `resetSchemaName` <a name="resetSchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetSchemaName"></a>

```java
public void resetSchemaName()
```

##### `resetSensitiveTypeId` <a name="resetSensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetSensitiveTypeId"></a>

```java
public void resetSensitiveTypeId()
```

##### `resetTimeCreatedGreaterThanOrEqualTo` <a name="resetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetTimeCreatedGreaterThanOrEqualTo"></a>

```java
public void resetTimeCreatedGreaterThanOrEqualTo()
```

##### `resetTimeCreatedLessThan` <a name="resetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetTimeCreatedLessThan"></a>

```java
public void resetTimeCreatedLessThan()
```

##### `resetTimeUpdatedGreaterThanOrEqualTo` <a name="resetTimeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetTimeUpdatedGreaterThanOrEqualTo"></a>

```java
public void resetTimeUpdatedGreaterThanOrEqualTo()
```

##### `resetTimeUpdatedLessThan` <a name="resetTimeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetTimeUpdatedLessThan"></a>

```java
public void resetTimeUpdatedLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeMaskingPoliciesMaskingColumns resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policies_masking_columns.DataOciDataSafeMaskingPoliciesMaskingColumns;

DataOciDataSafeMaskingPoliciesMaskingColumns.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policies_masking_columns.DataOciDataSafeMaskingPoliciesMaskingColumns;

DataOciDataSafeMaskingPoliciesMaskingColumns.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policies_masking_columns.DataOciDataSafeMaskingPoliciesMaskingColumns;

DataOciDataSafeMaskingPoliciesMaskingColumns.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policies_masking_columns.DataOciDataSafeMaskingPoliciesMaskingColumns;

DataOciDataSafeMaskingPoliciesMaskingColumns.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDataSafeMaskingPoliciesMaskingColumns.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDataSafeMaskingPoliciesMaskingColumns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDataSafeMaskingPoliciesMaskingColumns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDataSafeMaskingPoliciesMaskingColumns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeMaskingPoliciesMaskingColumns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList">DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingColumnCollection">maskingColumnCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.columnNameInput">columnNameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.dataTypeInput">dataTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.isMaskingEnabledInput">isMaskingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.isSeedRequiredInput">isSeedRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingColumnGroupInput">maskingColumnGroupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingColumnLifecycleStateInput">maskingColumnLifecycleStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingPolicyIdInput">maskingPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.objectInput">objectInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.objectTypeInput">objectTypeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.schemaNameInput">schemaNameInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.sensitiveTypeIdInput">sensitiveTypeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeCreatedGreaterThanOrEqualToInput">timeCreatedGreaterThanOrEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeCreatedLessThanInput">timeCreatedLessThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeUpdatedGreaterThanOrEqualToInput">timeUpdatedGreaterThanOrEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeUpdatedLessThanInput">timeUpdatedLessThanInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.columnName">columnName</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.dataType">dataType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.isMaskingEnabled">isMaskingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.isSeedRequired">isSeedRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingColumnGroup">maskingColumnGroup</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingColumnLifecycleState">maskingColumnLifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingPolicyId">maskingPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.object">object</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.objectType">objectType</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.schemaName">schemaName</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeUpdatedGreaterThanOrEqualTo">timeUpdatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeUpdatedLessThan">timeUpdatedLessThan</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.filter"></a>

```java
public DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList">DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList</a>

---

##### `maskingColumnCollection`<sup>Required</sup> <a name="maskingColumnCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingColumnCollection"></a>

```java
public DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList getMaskingColumnCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList</a>

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.columnNameInput"></a>

```java
public java.util.List<java.lang.String> getColumnNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataTypeInput`<sup>Optional</sup> <a name="dataTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.dataTypeInput"></a>

```java
public java.util.List<java.lang.String> getDataTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isMaskingEnabledInput`<sup>Optional</sup> <a name="isMaskingEnabledInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.isMaskingEnabledInput"></a>

```java
public java.lang.Object getIsMaskingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSeedRequiredInput`<sup>Optional</sup> <a name="isSeedRequiredInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.isSeedRequiredInput"></a>

```java
public java.lang.Object getIsSeedRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maskingColumnGroupInput`<sup>Optional</sup> <a name="maskingColumnGroupInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingColumnGroupInput"></a>

```java
public java.util.List<java.lang.String> getMaskingColumnGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maskingColumnLifecycleStateInput`<sup>Optional</sup> <a name="maskingColumnLifecycleStateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingColumnLifecycleStateInput"></a>

```java
public java.lang.String getMaskingColumnLifecycleStateInput();
```

- *Type:* java.lang.String

---

##### `maskingPolicyIdInput`<sup>Optional</sup> <a name="maskingPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingPolicyIdInput"></a>

```java
public java.lang.String getMaskingPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.objectInput"></a>

```java
public java.util.List<java.lang.String> getObjectInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.objectTypeInput"></a>

```java
public java.util.List<java.lang.String> getObjectTypeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.schemaNameInput"></a>

```java
public java.util.List<java.lang.String> getSchemaNameInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sensitiveTypeIdInput`<sup>Optional</sup> <a name="sensitiveTypeIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.sensitiveTypeIdInput"></a>

```java
public java.lang.String getSensitiveTypeIdInput();
```

- *Type:* java.lang.String

---

##### `timeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeCreatedGreaterThanOrEqualToInput"></a>

```java
public java.lang.String getTimeCreatedGreaterThanOrEqualToInput();
```

- *Type:* java.lang.String

---

##### `timeCreatedLessThanInput`<sup>Optional</sup> <a name="timeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeCreatedLessThanInput"></a>

```java
public java.lang.String getTimeCreatedLessThanInput();
```

- *Type:* java.lang.String

---

##### `timeUpdatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeUpdatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeUpdatedGreaterThanOrEqualToInput"></a>

```java
public java.lang.String getTimeUpdatedGreaterThanOrEqualToInput();
```

- *Type:* java.lang.String

---

##### `timeUpdatedLessThanInput`<sup>Optional</sup> <a name="timeUpdatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeUpdatedLessThanInput"></a>

```java
public java.lang.String getTimeUpdatedLessThanInput();
```

- *Type:* java.lang.String

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.columnName"></a>

```java
public java.util.List<java.lang.String> getColumnName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.dataType"></a>

```java
public java.util.List<java.lang.String> getDataType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isMaskingEnabled`<sup>Required</sup> <a name="isMaskingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.isMaskingEnabled"></a>

```java
public java.lang.Object getIsMaskingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isSeedRequired`<sup>Required</sup> <a name="isSeedRequired" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.isSeedRequired"></a>

```java
public java.lang.Object getIsSeedRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maskingColumnGroup`<sup>Required</sup> <a name="maskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingColumnGroup"></a>

```java
public java.util.List<java.lang.String> getMaskingColumnGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maskingColumnLifecycleState`<sup>Required</sup> <a name="maskingColumnLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingColumnLifecycleState"></a>

```java
public java.lang.String getMaskingColumnLifecycleState();
```

- *Type:* java.lang.String

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingPolicyId"></a>

```java
public java.lang.String getMaskingPolicyId();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.object"></a>

```java
public java.util.List<java.lang.String> getObject();
```

- *Type:* java.util.List<java.lang.String>

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.objectType"></a>

```java
public java.util.List<java.lang.String> getObjectType();
```

- *Type:* java.util.List<java.lang.String>

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.schemaName"></a>

```java
public java.util.List<java.lang.String> getSchemaName();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sensitiveTypeId`<sup>Required</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.sensitiveTypeId"></a>

```java
public java.lang.String getSensitiveTypeId();
```

- *Type:* java.lang.String

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeCreatedGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeCreatedGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

---

##### `timeCreatedLessThan`<sup>Required</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeCreatedLessThan"></a>

```java
public java.lang.String getTimeCreatedLessThan();
```

- *Type:* java.lang.String

---

##### `timeUpdatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeUpdatedGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeUpdatedGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

---

##### `timeUpdatedLessThan`<sup>Required</sup> <a name="timeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeUpdatedLessThan"></a>

```java
public java.lang.String getTimeUpdatedLessThan();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeMaskingPoliciesMaskingColumnsConfig <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policies_masking_columns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig;

DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.builder()
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
    .maskingPolicyId(java.lang.String)
//  .columnName(java.util.List<java.lang.String>)
//  .dataType(java.util.List<java.lang.String>)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeMaskingPoliciesMaskingColumnsFilter>)
//  .id(java.lang.String)
//  .isMaskingEnabled(java.lang.Boolean)
//  .isMaskingEnabled(IResolvable)
//  .isSeedRequired(java.lang.Boolean)
//  .isSeedRequired(IResolvable)
//  .maskingColumnGroup(java.util.List<java.lang.String>)
//  .maskingColumnLifecycleState(java.lang.String)
//  .object(java.util.List<java.lang.String>)
//  .objectType(java.util.List<java.lang.String>)
//  .schemaName(java.util.List<java.lang.String>)
//  .sensitiveTypeId(java.lang.String)
//  .timeCreatedGreaterThanOrEqualTo(java.lang.String)
//  .timeCreatedLessThan(java.lang.String)
//  .timeUpdatedGreaterThanOrEqualTo(java.lang.String)
//  .timeUpdatedLessThan(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.maskingPolicyId">maskingPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_policy_id DataOciDataSafeMaskingPoliciesMaskingColumns#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.columnName">columnName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#column_name DataOciDataSafeMaskingPoliciesMaskingColumns#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.dataType">dataType</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#data_type DataOciDataSafeMaskingPoliciesMaskingColumns#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#id DataOciDataSafeMaskingPoliciesMaskingColumns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.isMaskingEnabled">isMaskingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#is_masking_enabled DataOciDataSafeMaskingPoliciesMaskingColumns#is_masking_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.isSeedRequired">isSeedRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#is_seed_required DataOciDataSafeMaskingPoliciesMaskingColumns#is_seed_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.maskingColumnGroup">maskingColumnGroup</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_column_group DataOciDataSafeMaskingPoliciesMaskingColumns#masking_column_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.maskingColumnLifecycleState">maskingColumnLifecycleState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_column_lifecycle_state DataOciDataSafeMaskingPoliciesMaskingColumns#masking_column_lifecycle_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.object">object</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#object DataOciDataSafeMaskingPoliciesMaskingColumns#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.objectType">objectType</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#object_type DataOciDataSafeMaskingPoliciesMaskingColumns#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.schemaName">schemaName</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#schema_name DataOciDataSafeMaskingPoliciesMaskingColumns#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#sensitive_type_id DataOciDataSafeMaskingPoliciesMaskingColumns#sensitive_type_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_created_greater_than_or_equal_to DataOciDataSafeMaskingPoliciesMaskingColumns#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_created_less_than DataOciDataSafeMaskingPoliciesMaskingColumns#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.timeUpdatedGreaterThanOrEqualTo">timeUpdatedGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_updated_greater_than_or_equal_to DataOciDataSafeMaskingPoliciesMaskingColumns#time_updated_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.timeUpdatedLessThan">timeUpdatedLessThan</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_updated_less_than DataOciDataSafeMaskingPoliciesMaskingColumns#time_updated_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.maskingPolicyId"></a>

```java
public java.lang.String getMaskingPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_policy_id DataOciDataSafeMaskingPoliciesMaskingColumns#masking_policy_id}.

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.columnName"></a>

```java
public java.util.List<java.lang.String> getColumnName();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#column_name DataOciDataSafeMaskingPoliciesMaskingColumns#column_name}.

---

##### `dataType`<sup>Optional</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.dataType"></a>

```java
public java.util.List<java.lang.String> getDataType();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#data_type DataOciDataSafeMaskingPoliciesMaskingColumns#data_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#filter DataOciDataSafeMaskingPoliciesMaskingColumns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#id DataOciDataSafeMaskingPoliciesMaskingColumns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isMaskingEnabled`<sup>Optional</sup> <a name="isMaskingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.isMaskingEnabled"></a>

```java
public java.lang.Object getIsMaskingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#is_masking_enabled DataOciDataSafeMaskingPoliciesMaskingColumns#is_masking_enabled}.

---

##### `isSeedRequired`<sup>Optional</sup> <a name="isSeedRequired" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.isSeedRequired"></a>

```java
public java.lang.Object getIsSeedRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#is_seed_required DataOciDataSafeMaskingPoliciesMaskingColumns#is_seed_required}.

---

##### `maskingColumnGroup`<sup>Optional</sup> <a name="maskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.maskingColumnGroup"></a>

```java
public java.util.List<java.lang.String> getMaskingColumnGroup();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_column_group DataOciDataSafeMaskingPoliciesMaskingColumns#masking_column_group}.

---

##### `maskingColumnLifecycleState`<sup>Optional</sup> <a name="maskingColumnLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.maskingColumnLifecycleState"></a>

```java
public java.lang.String getMaskingColumnLifecycleState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_column_lifecycle_state DataOciDataSafeMaskingPoliciesMaskingColumns#masking_column_lifecycle_state}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.object"></a>

```java
public java.util.List<java.lang.String> getObject();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#object DataOciDataSafeMaskingPoliciesMaskingColumns#object}.

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.objectType"></a>

```java
public java.util.List<java.lang.String> getObjectType();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#object_type DataOciDataSafeMaskingPoliciesMaskingColumns#object_type}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.schemaName"></a>

```java
public java.util.List<java.lang.String> getSchemaName();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#schema_name DataOciDataSafeMaskingPoliciesMaskingColumns#schema_name}.

---

##### `sensitiveTypeId`<sup>Optional</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.sensitiveTypeId"></a>

```java
public java.lang.String getSensitiveTypeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#sensitive_type_id DataOciDataSafeMaskingPoliciesMaskingColumns#sensitive_type_id}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeCreatedGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_created_greater_than_or_equal_to DataOciDataSafeMaskingPoliciesMaskingColumns#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.timeCreatedLessThan"></a>

```java
public java.lang.String getTimeCreatedLessThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_created_less_than DataOciDataSafeMaskingPoliciesMaskingColumns#time_created_less_than}.

---

##### `timeUpdatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeUpdatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.timeUpdatedGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeUpdatedGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_updated_greater_than_or_equal_to DataOciDataSafeMaskingPoliciesMaskingColumns#time_updated_greater_than_or_equal_to}.

---

##### `timeUpdatedLessThan`<sup>Optional</sup> <a name="timeUpdatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.timeUpdatedLessThan"></a>

```java
public java.lang.String getTimeUpdatedLessThan();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_updated_less_than DataOciDataSafeMaskingPoliciesMaskingColumns#time_updated_less_than}.

---

### DataOciDataSafeMaskingPoliciesMaskingColumnsFilter <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policies_masking_columns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter;

DataOciDataSafeMaskingPoliciesMaskingColumnsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#name DataOciDataSafeMaskingPoliciesMaskingColumns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#values DataOciDataSafeMaskingPoliciesMaskingColumns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#regex DataOciDataSafeMaskingPoliciesMaskingColumns#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#name DataOciDataSafeMaskingPoliciesMaskingColumns#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#values DataOciDataSafeMaskingPoliciesMaskingColumns#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#regex DataOciDataSafeMaskingPoliciesMaskingColumns#regex}.

---

### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policies_masking_columns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection;

DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection.builder()
    .build();
```


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policies_masking_columns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems;

DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems.builder()
    .build();
```


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policies_masking_columns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats;

DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats.builder()
    .build();
```


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policies_masking_columns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries;

DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policies_masking_columns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList;

new DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.get"></a>

```java
public DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a>>

---


### DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policies_masking_columns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference;

new DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a>

---


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policies_masking_columns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList;

new DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.get"></a>

```java
public DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policies_masking_columns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList;

new DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.get"></a>

```java
public DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policies_masking_columns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference;

new DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.endDate">endDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.endLength">endLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.endValue">endValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.fixedNumber">fixedNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.fixedString">fixedString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.groupingColumns">groupingColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.length">length</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.libraryMaskingFormatId">libraryMaskingFormatId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.postProcessingFunction">postProcessingFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.randomList">randomList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.regularExpression">regularExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.replaceWith">replaceWith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.sqlExpression">sqlExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.startDate">startDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.startLength">startLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.startPosition">startPosition</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.startValue">startValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.userDefinedFunction">userDefinedFunction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

---

##### `endLength`<sup>Required</sup> <a name="endLength" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.endLength"></a>

```java
public java.lang.Number getEndLength();
```

- *Type:* java.lang.Number

---

##### `endValue`<sup>Required</sup> <a name="endValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.endValue"></a>

```java
public java.lang.Number getEndValue();
```

- *Type:* java.lang.Number

---

##### `fixedNumber`<sup>Required</sup> <a name="fixedNumber" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.fixedNumber"></a>

```java
public java.lang.Number getFixedNumber();
```

- *Type:* java.lang.Number

---

##### `fixedString`<sup>Required</sup> <a name="fixedString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.fixedString"></a>

```java
public java.lang.String getFixedString();
```

- *Type:* java.lang.String

---

##### `groupingColumns`<sup>Required</sup> <a name="groupingColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.groupingColumns"></a>

```java
public java.util.List<java.lang.String> getGroupingColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.length"></a>

```java
public java.lang.Number getLength();
```

- *Type:* java.lang.Number

---

##### `libraryMaskingFormatId`<sup>Required</sup> <a name="libraryMaskingFormatId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.libraryMaskingFormatId"></a>

```java
public java.lang.String getLibraryMaskingFormatId();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `postProcessingFunction`<sup>Required</sup> <a name="postProcessingFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.postProcessingFunction"></a>

```java
public java.lang.String getPostProcessingFunction();
```

- *Type:* java.lang.String

---

##### `randomList`<sup>Required</sup> <a name="randomList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.randomList"></a>

```java
public java.util.List<java.lang.String> getRandomList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regularExpression`<sup>Required</sup> <a name="regularExpression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.regularExpression"></a>

```java
public java.lang.String getRegularExpression();
```

- *Type:* java.lang.String

---

##### `replaceWith`<sup>Required</sup> <a name="replaceWith" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.replaceWith"></a>

```java
public java.lang.String getReplaceWith();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `sqlExpression`<sup>Required</sup> <a name="sqlExpression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.sqlExpression"></a>

```java
public java.lang.String getSqlExpression();
```

- *Type:* java.lang.String

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.startDate"></a>

```java
public java.lang.String getStartDate();
```

- *Type:* java.lang.String

---

##### `startLength`<sup>Required</sup> <a name="startLength" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.startLength"></a>

```java
public java.lang.Number getStartLength();
```

- *Type:* java.lang.Number

---

##### `startPosition`<sup>Required</sup> <a name="startPosition" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.startPosition"></a>

```java
public java.lang.Number getStartPosition();
```

- *Type:* java.lang.Number

---

##### `startValue`<sup>Required</sup> <a name="startValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.startValue"></a>

```java
public java.lang.Number getStartValue();
```

- *Type:* java.lang.Number

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userDefinedFunction`<sup>Required</sup> <a name="userDefinedFunction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.userDefinedFunction"></a>

```java
public java.lang.String getUserDefinedFunction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries</a>

---


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policies_masking_columns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList;

new DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.get"></a>

```java
public DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policies_masking_columns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference;

new DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.condition">condition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.formatEntries">formatEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.condition"></a>

```java
public java.lang.String getCondition();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `formatEntries`<sup>Required</sup> <a name="formatEntries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.formatEntries"></a>

```java
public DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList getFormatEntries();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats</a>

---


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policies_masking_columns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference;

new DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.childColumns">childColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.columnName">columnName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.dataType">dataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.isMaskingEnabled">isMaskingEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.maskingColumnGroup">maskingColumnGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.maskingFormats">maskingFormats</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.maskingPolicyId">maskingPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `childColumns`<sup>Required</sup> <a name="childColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.childColumns"></a>

```java
public java.util.List<java.lang.String> getChildColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.columnName"></a>

```java
public java.lang.String getColumnName();
```

- *Type:* java.lang.String

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.dataType"></a>

```java
public java.lang.String getDataType();
```

- *Type:* java.lang.String

---

##### `isMaskingEnabled`<sup>Required</sup> <a name="isMaskingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.isMaskingEnabled"></a>

```java
public IResolvable getIsMaskingEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `maskingColumnGroup`<sup>Required</sup> <a name="maskingColumnGroup" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.maskingColumnGroup"></a>

```java
public java.lang.String getMaskingColumnGroup();
```

- *Type:* java.lang.String

---

##### `maskingFormats`<sup>Required</sup> <a name="maskingFormats" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.maskingFormats"></a>

```java
public DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList getMaskingFormats();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList</a>

---

##### `maskingPolicyId`<sup>Required</sup> <a name="maskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.maskingPolicyId"></a>

```java
public java.lang.String getMaskingPolicyId();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `sensitiveTypeId`<sup>Required</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.sensitiveTypeId"></a>

```java
public java.lang.String getSensitiveTypeId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems</a>

---


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policies_masking_columns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList;

new DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.get"></a>

```java
public DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_masking_policies_masking_columns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference;

new DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.property.items"></a>

```java
public DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection</a>

---



