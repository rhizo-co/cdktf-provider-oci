# `dataOciDataSafeMaskingPoliciesMaskingColumns` Submodule <a name="`dataOciDataSafeMaskingPoliciesMaskingColumns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeMaskingPoliciesMaskingColumns <a name="DataOciDataSafeMaskingPoliciesMaskingColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns oci_data_safe_masking_policies_masking_columns}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_columns

dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  masking_policy_id: str,
  column_name: typing.List[str] = None,
  data_type: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingPoliciesMaskingColumnsFilter]] = None,
  id: str = None,
  is_masking_enabled: typing.Union[bool, IResolvable] = None,
  is_seed_required: typing.Union[bool, IResolvable] = None,
  masking_column_group: typing.List[str] = None,
  masking_column_lifecycle_state: str = None,
  object: typing.List[str] = None,
  object_type: typing.List[str] = None,
  schema_name: typing.List[str] = None,
  sensitive_type_id: str = None,
  time_created_greater_than_or_equal_to: str = None,
  time_created_less_than: str = None,
  time_updated_greater_than_or_equal_to: str = None,
  time_updated_less_than: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_policy_id DataOciDataSafeMaskingPoliciesMaskingColumns#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.columnName">column_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#column_name DataOciDataSafeMaskingPoliciesMaskingColumns#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.dataType">data_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#data_type DataOciDataSafeMaskingPoliciesMaskingColumns#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#id DataOciDataSafeMaskingPoliciesMaskingColumns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.isMaskingEnabled">is_masking_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#is_masking_enabled DataOciDataSafeMaskingPoliciesMaskingColumns#is_masking_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.isSeedRequired">is_seed_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#is_seed_required DataOciDataSafeMaskingPoliciesMaskingColumns#is_seed_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.maskingColumnGroup">masking_column_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_column_group DataOciDataSafeMaskingPoliciesMaskingColumns#masking_column_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.maskingColumnLifecycleState">masking_column_lifecycle_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_column_lifecycle_state DataOciDataSafeMaskingPoliciesMaskingColumns#masking_column_lifecycle_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.object">object</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#object DataOciDataSafeMaskingPoliciesMaskingColumns#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.objectType">object_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#object_type DataOciDataSafeMaskingPoliciesMaskingColumns#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#schema_name DataOciDataSafeMaskingPoliciesMaskingColumns#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#sensitive_type_id DataOciDataSafeMaskingPoliciesMaskingColumns#sensitive_type_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_created_greater_than_or_equal_to DataOciDataSafeMaskingPoliciesMaskingColumns#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_created_less_than DataOciDataSafeMaskingPoliciesMaskingColumns#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.timeUpdatedGreaterThanOrEqualTo">time_updated_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_updated_greater_than_or_equal_to DataOciDataSafeMaskingPoliciesMaskingColumns#time_updated_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.timeUpdatedLessThan">time_updated_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_updated_less_than DataOciDataSafeMaskingPoliciesMaskingColumns#time_updated_less_than}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `masking_policy_id`<sup>Required</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.maskingPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_policy_id DataOciDataSafeMaskingPoliciesMaskingColumns#masking_policy_id}.

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.columnName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#column_name DataOciDataSafeMaskingPoliciesMaskingColumns#column_name}.

---

##### `data_type`<sup>Optional</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.dataType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#data_type DataOciDataSafeMaskingPoliciesMaskingColumns#data_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#filter DataOciDataSafeMaskingPoliciesMaskingColumns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#id DataOciDataSafeMaskingPoliciesMaskingColumns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_masking_enabled`<sup>Optional</sup> <a name="is_masking_enabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.isMaskingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#is_masking_enabled DataOciDataSafeMaskingPoliciesMaskingColumns#is_masking_enabled}.

---

##### `is_seed_required`<sup>Optional</sup> <a name="is_seed_required" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.isSeedRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#is_seed_required DataOciDataSafeMaskingPoliciesMaskingColumns#is_seed_required}.

---

##### `masking_column_group`<sup>Optional</sup> <a name="masking_column_group" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.maskingColumnGroup"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_column_group DataOciDataSafeMaskingPoliciesMaskingColumns#masking_column_group}.

---

##### `masking_column_lifecycle_state`<sup>Optional</sup> <a name="masking_column_lifecycle_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.maskingColumnLifecycleState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_column_lifecycle_state DataOciDataSafeMaskingPoliciesMaskingColumns#masking_column_lifecycle_state}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.object"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#object DataOciDataSafeMaskingPoliciesMaskingColumns#object}.

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.objectType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#object_type DataOciDataSafeMaskingPoliciesMaskingColumns#object_type}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.schemaName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#schema_name DataOciDataSafeMaskingPoliciesMaskingColumns#schema_name}.

---

##### `sensitive_type_id`<sup>Optional</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.sensitiveTypeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#sensitive_type_id DataOciDataSafeMaskingPoliciesMaskingColumns#sensitive_type_id}.

---

##### `time_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.timeCreatedGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_created_greater_than_or_equal_to DataOciDataSafeMaskingPoliciesMaskingColumns#time_created_greater_than_or_equal_to}.

---

##### `time_created_less_than`<sup>Optional</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.timeCreatedLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_created_less_than DataOciDataSafeMaskingPoliciesMaskingColumns#time_created_less_than}.

---

##### `time_updated_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_updated_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.timeUpdatedGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_updated_greater_than_or_equal_to DataOciDataSafeMaskingPoliciesMaskingColumns#time_updated_greater_than_or_equal_to}.

---

##### `time_updated_less_than`<sup>Optional</sup> <a name="time_updated_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.Initializer.parameter.timeUpdatedLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_updated_less_than DataOciDataSafeMaskingPoliciesMaskingColumns#time_updated_less_than}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetColumnName">reset_column_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetDataType">reset_data_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetIsMaskingEnabled">reset_is_masking_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetIsSeedRequired">reset_is_seed_required</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetMaskingColumnGroup">reset_masking_column_group</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetMaskingColumnLifecycleState">reset_masking_column_lifecycle_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetObject">reset_object</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetObjectType">reset_object_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetSchemaName">reset_schema_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetSensitiveTypeId">reset_sensitive_type_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetTimeCreatedGreaterThanOrEqualTo">reset_time_created_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetTimeCreatedLessThan">reset_time_created_less_than</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetTimeUpdatedGreaterThanOrEqualTo">reset_time_updated_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetTimeUpdatedLessThan">reset_time_updated_less_than</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingPoliciesMaskingColumnsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a>]]

---

##### `reset_column_name` <a name="reset_column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetColumnName"></a>

```python
def reset_column_name() -> None
```

##### `reset_data_type` <a name="reset_data_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetDataType"></a>

```python
def reset_data_type() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_masking_enabled` <a name="reset_is_masking_enabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetIsMaskingEnabled"></a>

```python
def reset_is_masking_enabled() -> None
```

##### `reset_is_seed_required` <a name="reset_is_seed_required" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetIsSeedRequired"></a>

```python
def reset_is_seed_required() -> None
```

##### `reset_masking_column_group` <a name="reset_masking_column_group" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetMaskingColumnGroup"></a>

```python
def reset_masking_column_group() -> None
```

##### `reset_masking_column_lifecycle_state` <a name="reset_masking_column_lifecycle_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetMaskingColumnLifecycleState"></a>

```python
def reset_masking_column_lifecycle_state() -> None
```

##### `reset_object` <a name="reset_object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetObject"></a>

```python
def reset_object() -> None
```

##### `reset_object_type` <a name="reset_object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetObjectType"></a>

```python
def reset_object_type() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```

##### `reset_sensitive_type_id` <a name="reset_sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetSensitiveTypeId"></a>

```python
def reset_sensitive_type_id() -> None
```

##### `reset_time_created_greater_than_or_equal_to` <a name="reset_time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetTimeCreatedGreaterThanOrEqualTo"></a>

```python
def reset_time_created_greater_than_or_equal_to() -> None
```

##### `reset_time_created_less_than` <a name="reset_time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetTimeCreatedLessThan"></a>

```python
def reset_time_created_less_than() -> None
```

##### `reset_time_updated_greater_than_or_equal_to` <a name="reset_time_updated_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetTimeUpdatedGreaterThanOrEqualTo"></a>

```python
def reset_time_updated_greater_than_or_equal_to() -> None
```

##### `reset_time_updated_less_than` <a name="reset_time_updated_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.resetTimeUpdatedLessThan"></a>

```python
def reset_time_updated_less_than() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeMaskingPoliciesMaskingColumns resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_columns

dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_columns

dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_columns

dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_columns

dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeMaskingPoliciesMaskingColumns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeMaskingPoliciesMaskingColumns to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeMaskingPoliciesMaskingColumns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeMaskingPoliciesMaskingColumns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList">DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingColumnCollection">masking_column_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.columnNameInput">column_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.dataTypeInput">data_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.isMaskingEnabledInput">is_masking_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.isSeedRequiredInput">is_seed_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingColumnGroupInput">masking_column_group_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingColumnLifecycleStateInput">masking_column_lifecycle_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingPolicyIdInput">masking_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.objectInput">object_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.objectTypeInput">object_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.schemaNameInput">schema_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.sensitiveTypeIdInput">sensitive_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeCreatedGreaterThanOrEqualToInput">time_created_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeCreatedLessThanInput">time_created_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeUpdatedGreaterThanOrEqualToInput">time_updated_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeUpdatedLessThanInput">time_updated_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.columnName">column_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.dataType">data_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.isMaskingEnabled">is_masking_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.isSeedRequired">is_seed_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingColumnGroup">masking_column_group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingColumnLifecycleState">masking_column_lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.object">object</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.objectType">object_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeUpdatedGreaterThanOrEqualTo">time_updated_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeUpdatedLessThan">time_updated_less_than</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.filter"></a>

```python
filter: DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList">DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList</a>

---

##### `masking_column_collection`<sup>Required</sup> <a name="masking_column_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingColumnCollection"></a>

```python
masking_column_collection: DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList</a>

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.columnNameInput"></a>

```python
column_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.dataTypeInput"></a>

```python
data_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingPoliciesMaskingColumnsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_masking_enabled_input`<sup>Optional</sup> <a name="is_masking_enabled_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.isMaskingEnabledInput"></a>

```python
is_masking_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_seed_required_input`<sup>Optional</sup> <a name="is_seed_required_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.isSeedRequiredInput"></a>

```python
is_seed_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `masking_column_group_input`<sup>Optional</sup> <a name="masking_column_group_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingColumnGroupInput"></a>

```python
masking_column_group_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `masking_column_lifecycle_state_input`<sup>Optional</sup> <a name="masking_column_lifecycle_state_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingColumnLifecycleStateInput"></a>

```python
masking_column_lifecycle_state_input: str
```

- *Type:* str

---

##### `masking_policy_id_input`<sup>Optional</sup> <a name="masking_policy_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingPolicyIdInput"></a>

```python
masking_policy_id_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.objectInput"></a>

```python
object_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.objectTypeInput"></a>

```python
object_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.schemaNameInput"></a>

```python
schema_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sensitive_type_id_input`<sup>Optional</sup> <a name="sensitive_type_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.sensitiveTypeIdInput"></a>

```python
sensitive_type_id_input: str
```

- *Type:* str

---

##### `time_created_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeCreatedGreaterThanOrEqualToInput"></a>

```python
time_created_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_created_less_than_input`<sup>Optional</sup> <a name="time_created_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeCreatedLessThanInput"></a>

```python
time_created_less_than_input: str
```

- *Type:* str

---

##### `time_updated_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_updated_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeUpdatedGreaterThanOrEqualToInput"></a>

```python
time_updated_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_updated_less_than_input`<sup>Optional</sup> <a name="time_updated_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeUpdatedLessThanInput"></a>

```python
time_updated_less_than_input: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.columnName"></a>

```python
column_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.dataType"></a>

```python
data_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_masking_enabled`<sup>Required</sup> <a name="is_masking_enabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.isMaskingEnabled"></a>

```python
is_masking_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_seed_required`<sup>Required</sup> <a name="is_seed_required" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.isSeedRequired"></a>

```python
is_seed_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `masking_column_group`<sup>Required</sup> <a name="masking_column_group" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingColumnGroup"></a>

```python
masking_column_group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `masking_column_lifecycle_state`<sup>Required</sup> <a name="masking_column_lifecycle_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingColumnLifecycleState"></a>

```python
masking_column_lifecycle_state: str
```

- *Type:* str

---

##### `masking_policy_id`<sup>Required</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.maskingPolicyId"></a>

```python
masking_policy_id: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.object"></a>

```python
object: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.objectType"></a>

```python
object_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.schemaName"></a>

```python
schema_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sensitive_type_id`<sup>Required</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

---

##### `time_created_greater_than_or_equal_to`<sup>Required</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeCreatedGreaterThanOrEqualTo"></a>

```python
time_created_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_created_less_than`<sup>Required</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeCreatedLessThan"></a>

```python
time_created_less_than: str
```

- *Type:* str

---

##### `time_updated_greater_than_or_equal_to`<sup>Required</sup> <a name="time_updated_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeUpdatedGreaterThanOrEqualTo"></a>

```python
time_updated_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_updated_less_than`<sup>Required</sup> <a name="time_updated_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.timeUpdatedLessThan"></a>

```python
time_updated_less_than: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumns.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeMaskingPoliciesMaskingColumnsConfig <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_columns

dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  masking_policy_id: str,
  column_name: typing.List[str] = None,
  data_type: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingPoliciesMaskingColumnsFilter]] = None,
  id: str = None,
  is_masking_enabled: typing.Union[bool, IResolvable] = None,
  is_seed_required: typing.Union[bool, IResolvable] = None,
  masking_column_group: typing.List[str] = None,
  masking_column_lifecycle_state: str = None,
  object: typing.List[str] = None,
  object_type: typing.List[str] = None,
  schema_name: typing.List[str] = None,
  sensitive_type_id: str = None,
  time_created_greater_than_or_equal_to: str = None,
  time_created_less_than: str = None,
  time_updated_greater_than_or_equal_to: str = None,
  time_updated_less_than: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_policy_id DataOciDataSafeMaskingPoliciesMaskingColumns#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.columnName">column_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#column_name DataOciDataSafeMaskingPoliciesMaskingColumns#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.dataType">data_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#data_type DataOciDataSafeMaskingPoliciesMaskingColumns#data_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#id DataOciDataSafeMaskingPoliciesMaskingColumns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.isMaskingEnabled">is_masking_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#is_masking_enabled DataOciDataSafeMaskingPoliciesMaskingColumns#is_masking_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.isSeedRequired">is_seed_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#is_seed_required DataOciDataSafeMaskingPoliciesMaskingColumns#is_seed_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.maskingColumnGroup">masking_column_group</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_column_group DataOciDataSafeMaskingPoliciesMaskingColumns#masking_column_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.maskingColumnLifecycleState">masking_column_lifecycle_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_column_lifecycle_state DataOciDataSafeMaskingPoliciesMaskingColumns#masking_column_lifecycle_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.object">object</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#object DataOciDataSafeMaskingPoliciesMaskingColumns#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.objectType">object_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#object_type DataOciDataSafeMaskingPoliciesMaskingColumns#object_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#schema_name DataOciDataSafeMaskingPoliciesMaskingColumns#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#sensitive_type_id DataOciDataSafeMaskingPoliciesMaskingColumns#sensitive_type_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_created_greater_than_or_equal_to DataOciDataSafeMaskingPoliciesMaskingColumns#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_created_less_than DataOciDataSafeMaskingPoliciesMaskingColumns#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.timeUpdatedGreaterThanOrEqualTo">time_updated_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_updated_greater_than_or_equal_to DataOciDataSafeMaskingPoliciesMaskingColumns#time_updated_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.timeUpdatedLessThan">time_updated_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_updated_less_than DataOciDataSafeMaskingPoliciesMaskingColumns#time_updated_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `masking_policy_id`<sup>Required</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.maskingPolicyId"></a>

```python
masking_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_policy_id DataOciDataSafeMaskingPoliciesMaskingColumns#masking_policy_id}.

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.columnName"></a>

```python
column_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#column_name DataOciDataSafeMaskingPoliciesMaskingColumns#column_name}.

---

##### `data_type`<sup>Optional</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.dataType"></a>

```python
data_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#data_type DataOciDataSafeMaskingPoliciesMaskingColumns#data_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingPoliciesMaskingColumnsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#filter DataOciDataSafeMaskingPoliciesMaskingColumns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#id DataOciDataSafeMaskingPoliciesMaskingColumns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_masking_enabled`<sup>Optional</sup> <a name="is_masking_enabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.isMaskingEnabled"></a>

```python
is_masking_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#is_masking_enabled DataOciDataSafeMaskingPoliciesMaskingColumns#is_masking_enabled}.

---

##### `is_seed_required`<sup>Optional</sup> <a name="is_seed_required" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.isSeedRequired"></a>

```python
is_seed_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#is_seed_required DataOciDataSafeMaskingPoliciesMaskingColumns#is_seed_required}.

---

##### `masking_column_group`<sup>Optional</sup> <a name="masking_column_group" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.maskingColumnGroup"></a>

```python
masking_column_group: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_column_group DataOciDataSafeMaskingPoliciesMaskingColumns#masking_column_group}.

---

##### `masking_column_lifecycle_state`<sup>Optional</sup> <a name="masking_column_lifecycle_state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.maskingColumnLifecycleState"></a>

```python
masking_column_lifecycle_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#masking_column_lifecycle_state DataOciDataSafeMaskingPoliciesMaskingColumns#masking_column_lifecycle_state}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.object"></a>

```python
object: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#object DataOciDataSafeMaskingPoliciesMaskingColumns#object}.

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.objectType"></a>

```python
object_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#object_type DataOciDataSafeMaskingPoliciesMaskingColumns#object_type}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.schemaName"></a>

```python
schema_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#schema_name DataOciDataSafeMaskingPoliciesMaskingColumns#schema_name}.

---

##### `sensitive_type_id`<sup>Optional</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#sensitive_type_id DataOciDataSafeMaskingPoliciesMaskingColumns#sensitive_type_id}.

---

##### `time_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```python
time_created_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_created_greater_than_or_equal_to DataOciDataSafeMaskingPoliciesMaskingColumns#time_created_greater_than_or_equal_to}.

---

##### `time_created_less_than`<sup>Optional</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.timeCreatedLessThan"></a>

```python
time_created_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_created_less_than DataOciDataSafeMaskingPoliciesMaskingColumns#time_created_less_than}.

---

##### `time_updated_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_updated_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.timeUpdatedGreaterThanOrEqualTo"></a>

```python
time_updated_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_updated_greater_than_or_equal_to DataOciDataSafeMaskingPoliciesMaskingColumns#time_updated_greater_than_or_equal_to}.

---

##### `time_updated_less_than`<sup>Optional</sup> <a name="time_updated_less_than" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsConfig.property.timeUpdatedLessThan"></a>

```python
time_updated_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#time_updated_less_than DataOciDataSafeMaskingPoliciesMaskingColumns#time_updated_less_than}.

---

### DataOciDataSafeMaskingPoliciesMaskingColumnsFilter <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_columns

dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#name DataOciDataSafeMaskingPoliciesMaskingColumns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#values DataOciDataSafeMaskingPoliciesMaskingColumns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#regex DataOciDataSafeMaskingPoliciesMaskingColumns#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#name DataOciDataSafeMaskingPoliciesMaskingColumns#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#values DataOciDataSafeMaskingPoliciesMaskingColumns#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policies_masking_columns#regex DataOciDataSafeMaskingPoliciesMaskingColumns#regex}.

---

### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_columns

dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection()
```


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_columns

dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems()
```


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_columns

dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats()
```


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_columns

dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_columns

dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingPoliciesMaskingColumnsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a>]]

---


### DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_columns

dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeMaskingPoliciesMaskingColumnsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsFilter">DataOciDataSafeMaskingPoliciesMaskingColumnsFilter</a>]

---


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_columns

dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_columns

dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_columns

dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.endDate">end_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.endLength">end_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.endValue">end_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.fixedNumber">fixed_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.fixedString">fixed_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.groupingColumns">grouping_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.length">length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.libraryMaskingFormatId">library_masking_format_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.postProcessingFunction">post_processing_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.randomList">random_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.regularExpression">regular_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.replaceWith">replace_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.sqlExpression">sql_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.startDate">start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.startLength">start_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.startPosition">start_position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.startValue">start_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.userDefinedFunction">user_defined_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.endDate"></a>

```python
end_date: str
```

- *Type:* str

---

##### `end_length`<sup>Required</sup> <a name="end_length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.endLength"></a>

```python
end_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_value`<sup>Required</sup> <a name="end_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.endValue"></a>

```python
end_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_number`<sup>Required</sup> <a name="fixed_number" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.fixedNumber"></a>

```python
fixed_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_string`<sup>Required</sup> <a name="fixed_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.fixedString"></a>

```python
fixed_string: str
```

- *Type:* str

---

##### `grouping_columns`<sup>Required</sup> <a name="grouping_columns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.groupingColumns"></a>

```python
grouping_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `library_masking_format_id`<sup>Required</sup> <a name="library_masking_format_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.libraryMaskingFormatId"></a>

```python
library_masking_format_id: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `post_processing_function`<sup>Required</sup> <a name="post_processing_function" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.postProcessingFunction"></a>

```python
post_processing_function: str
```

- *Type:* str

---

##### `random_list`<sup>Required</sup> <a name="random_list" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.randomList"></a>

```python
random_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regular_expression`<sup>Required</sup> <a name="regular_expression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.regularExpression"></a>

```python
regular_expression: str
```

- *Type:* str

---

##### `replace_with`<sup>Required</sup> <a name="replace_with" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.replaceWith"></a>

```python
replace_with: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.startDate"></a>

```python
start_date: str
```

- *Type:* str

---

##### `start_length`<sup>Required</sup> <a name="start_length" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.startLength"></a>

```python
start_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_position`<sup>Required</sup> <a name="start_position" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.startPosition"></a>

```python
start_position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_value`<sup>Required</sup> <a name="start_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.startValue"></a>

```python
start_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_defined_function`<sup>Required</sup> <a name="user_defined_function" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.userDefinedFunction"></a>

```python
user_defined_function: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntries</a>

---


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_columns

dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_columns

dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.formatEntries">format_entries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `format_entries`<sup>Required</sup> <a name="format_entries" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.formatEntries"></a>

```python
format_entries: DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsFormatEntriesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormats</a>

---


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_columns

dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.childColumns">child_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.isMaskingEnabled">is_masking_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.maskingColumnGroup">masking_column_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.maskingFormats">masking_formats</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.maskingPolicyId">masking_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `child_columns`<sup>Required</sup> <a name="child_columns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.childColumns"></a>

```python
child_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `is_masking_enabled`<sup>Required</sup> <a name="is_masking_enabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.isMaskingEnabled"></a>

```python
is_masking_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `masking_column_group`<sup>Required</sup> <a name="masking_column_group" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.maskingColumnGroup"></a>

```python
masking_column_group: str
```

- *Type:* str

---

##### `masking_formats`<sup>Required</sup> <a name="masking_formats" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.maskingFormats"></a>

```python
masking_formats: DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsMaskingFormatsList</a>

---

##### `masking_policy_id`<sup>Required</sup> <a name="masking_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.maskingPolicyId"></a>

```python
masking_policy_id: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `sensitive_type_id`<sup>Required</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItems</a>

---


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_columns

dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference <a name="DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policies_masking_columns

dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPoliciesMaskingColumns.DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection">DataOciDataSafeMaskingPoliciesMaskingColumnsMaskingColumnCollection</a>

---



