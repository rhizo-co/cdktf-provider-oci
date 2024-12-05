# `dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns` Submodule <a name="`dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns oci_data_safe_sdm_masking_policy_difference_difference_columns}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_difference_difference_columns

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  sdm_masking_policy_difference_id: str,
  column_name: typing.List[str] = None,
  difference_type: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter]] = None,
  id: str = None,
  object: typing.List[str] = None,
  planned_action: str = None,
  schema_name: typing.List[str] = None,
  sync_status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.sdmMaskingPolicyDifferenceId">sdm_masking_policy_difference_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#sdm_masking_policy_difference_id DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#sdm_masking_policy_difference_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.columnName">column_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#column_name DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.differenceType">difference_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#difference_type DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#difference_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#id DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.object">object</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#object DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.plannedAction">planned_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#planned_action DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#planned_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#schema_name DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.syncStatus">sync_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#sync_status DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#sync_status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `sdm_masking_policy_difference_id`<sup>Required</sup> <a name="sdm_masking_policy_difference_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.sdmMaskingPolicyDifferenceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#sdm_masking_policy_difference_id DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#sdm_masking_policy_difference_id}.

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.columnName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#column_name DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#column_name}.

---

##### `difference_type`<sup>Optional</sup> <a name="difference_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.differenceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#difference_type DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#difference_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#filter DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#id DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.object"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#object DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#object}.

---

##### `planned_action`<sup>Optional</sup> <a name="planned_action" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.plannedAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#planned_action DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#planned_action}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.schemaName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#schema_name DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#schema_name}.

---

##### `sync_status`<sup>Optional</sup> <a name="sync_status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.Initializer.parameter.syncStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#sync_status DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#sync_status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetColumnName">reset_column_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetDifferenceType">reset_difference_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetObject">reset_object</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetPlannedAction">reset_planned_action</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetSchemaName">reset_schema_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetSyncStatus">reset_sync_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter</a>]]

---

##### `reset_column_name` <a name="reset_column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetColumnName"></a>

```python
def reset_column_name() -> None
```

##### `reset_difference_type` <a name="reset_difference_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetDifferenceType"></a>

```python
def reset_difference_type() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_object` <a name="reset_object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetObject"></a>

```python
def reset_object() -> None
```

##### `reset_planned_action` <a name="reset_planned_action" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetPlannedAction"></a>

```python
def reset_planned_action() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```

##### `reset_sync_status` <a name="reset_sync_status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.resetSyncStatus"></a>

```python
def reset_sync_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_difference_difference_columns

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_difference_difference_columns

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_difference_difference_columns

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_difference_difference_columns

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.sdmMaskingPolicyDifferenceColumnCollection">sdm_masking_policy_difference_column_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.columnNameInput">column_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.differenceTypeInput">difference_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.objectInput">object_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.plannedActionInput">planned_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.schemaNameInput">schema_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.sdmMaskingPolicyDifferenceIdInput">sdm_masking_policy_difference_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.syncStatusInput">sync_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.columnName">column_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.differenceType">difference_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.object">object</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.plannedAction">planned_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.sdmMaskingPolicyDifferenceId">sdm_masking_policy_difference_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.syncStatus">sync_status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.filter"></a>

```python
filter: DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList</a>

---

##### `sdm_masking_policy_difference_column_collection`<sup>Required</sup> <a name="sdm_masking_policy_difference_column_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.sdmMaskingPolicyDifferenceColumnCollection"></a>

```python
sdm_masking_policy_difference_column_collection: DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList</a>

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.columnNameInput"></a>

```python
column_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `difference_type_input`<sup>Optional</sup> <a name="difference_type_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.differenceTypeInput"></a>

```python
difference_type_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.objectInput"></a>

```python
object_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `planned_action_input`<sup>Optional</sup> <a name="planned_action_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.plannedActionInput"></a>

```python
planned_action_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.schemaNameInput"></a>

```python
schema_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sdm_masking_policy_difference_id_input`<sup>Optional</sup> <a name="sdm_masking_policy_difference_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.sdmMaskingPolicyDifferenceIdInput"></a>

```python
sdm_masking_policy_difference_id_input: str
```

- *Type:* str

---

##### `sync_status_input`<sup>Optional</sup> <a name="sync_status_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.syncStatusInput"></a>

```python
sync_status_input: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.columnName"></a>

```python
column_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `difference_type`<sup>Required</sup> <a name="difference_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.differenceType"></a>

```python
difference_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.object"></a>

```python
object: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `planned_action`<sup>Required</sup> <a name="planned_action" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.plannedAction"></a>

```python
planned_action: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.schemaName"></a>

```python
schema_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sdm_masking_policy_difference_id`<sup>Required</sup> <a name="sdm_masking_policy_difference_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.sdmMaskingPolicyDifferenceId"></a>

```python
sdm_masking_policy_difference_id: str
```

- *Type:* str

---

##### `sync_status`<sup>Required</sup> <a name="sync_status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.syncStatus"></a>

```python
sync_status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_difference_difference_columns

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  sdm_masking_policy_difference_id: str,
  column_name: typing.List[str] = None,
  difference_type: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter]] = None,
  id: str = None,
  object: typing.List[str] = None,
  planned_action: str = None,
  schema_name: typing.List[str] = None,
  sync_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.sdmMaskingPolicyDifferenceId">sdm_masking_policy_difference_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#sdm_masking_policy_difference_id DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#sdm_masking_policy_difference_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.columnName">column_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#column_name DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.differenceType">difference_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#difference_type DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#difference_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#id DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.object">object</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#object DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.plannedAction">planned_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#planned_action DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#planned_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#schema_name DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#schema_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.syncStatus">sync_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#sync_status DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#sync_status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `sdm_masking_policy_difference_id`<sup>Required</sup> <a name="sdm_masking_policy_difference_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.sdmMaskingPolicyDifferenceId"></a>

```python
sdm_masking_policy_difference_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#sdm_masking_policy_difference_id DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#sdm_masking_policy_difference_id}.

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.columnName"></a>

```python
column_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#column_name DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#column_name}.

---

##### `difference_type`<sup>Optional</sup> <a name="difference_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.differenceType"></a>

```python
difference_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#difference_type DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#difference_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#filter DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#id DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.object"></a>

```python
object: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#object DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#object}.

---

##### `planned_action`<sup>Optional</sup> <a name="planned_action" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.plannedAction"></a>

```python
planned_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#planned_action DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#planned_action}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.schemaName"></a>

```python
schema_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#schema_name DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#schema_name}.

---

##### `sync_status`<sup>Optional</sup> <a name="sync_status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsConfig.property.syncStatus"></a>

```python
sync_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#sync_status DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#sync_status}.

---

### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_difference_difference_columns

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#name DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#values DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#regex DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#name DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#values DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_columns#regex DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns#regex}.

---

### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollection <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_difference_difference_columns

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollection()
```


### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItems <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_difference_difference_columns

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_difference_difference_columns

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter</a>]]

---


### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_difference_difference_columns

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsFilter</a>]

---


### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_difference_difference_columns

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_difference_difference_columns

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.differenceType">difference_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.maskingColumnkey">masking_columnkey</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.plannedAction">planned_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.sensitiveColumnkey">sensitive_columnkey</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.syncStatus">sync_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.timeLastSynced">time_last_synced</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItems">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `difference_type`<sup>Required</sup> <a name="difference_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.differenceType"></a>

```python
difference_type: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `masking_columnkey`<sup>Required</sup> <a name="masking_columnkey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.maskingColumnkey"></a>

```python
masking_columnkey: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `planned_action`<sup>Required</sup> <a name="planned_action" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.plannedAction"></a>

```python
planned_action: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `sensitive_columnkey`<sup>Required</sup> <a name="sensitive_columnkey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.sensitiveColumnkey"></a>

```python
sensitive_columnkey: str
```

- *Type:* str

---

##### `sensitive_type_id`<sup>Required</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

---

##### `sync_status`<sup>Required</sup> <a name="sync_status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.syncStatus"></a>

```python
sync_status: str
```

- *Type:* str

---

##### `time_last_synced`<sup>Required</sup> <a name="time_last_synced" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.timeLastSynced"></a>

```python
time_last_synced: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItems">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItems</a>

---


### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_difference_difference_columns

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference <a name="DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_sdm_masking_policy_difference_difference_columns

dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollection">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumns.DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollection">DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnsSdmMaskingPolicyDifferenceColumnCollection</a>

---



