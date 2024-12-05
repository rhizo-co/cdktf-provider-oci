# `dataOciDatabaseManagementManagedDatabaseAttentionLogCount` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseAttentionLogCount` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseAttentionLogCount <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count oci_database_management_managed_database_attention_log_count}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_attention_log_count

dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  group_by: str = None,
  id: str = None,
  is_regular_expression: typing.Union[bool, IResolvable] = None,
  log_search_text: str = None,
  time_greater_than_or_equal_to: str = None,
  time_less_than_or_equal_to: str = None,
  type_filter: str = None,
  urgency_filter: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#managed_database_id DataOciDatabaseManagementManagedDatabaseAttentionLogCount#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.groupBy">group_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#group_by DataOciDatabaseManagementManagedDatabaseAttentionLogCount#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#id DataOciDatabaseManagementManagedDatabaseAttentionLogCount#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.isRegularExpression">is_regular_expression</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#is_regular_expression DataOciDatabaseManagementManagedDatabaseAttentionLogCount#is_regular_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.logSearchText">log_search_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#log_search_text DataOciDatabaseManagementManagedDatabaseAttentionLogCount#log_search_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.timeGreaterThanOrEqualTo">time_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCount#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.timeLessThanOrEqualTo">time_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCount#time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.typeFilter">type_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#type_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCount#type_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.urgencyFilter">urgency_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#urgency_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCount#urgency_filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#managed_database_id DataOciDatabaseManagementManagedDatabaseAttentionLogCount#managed_database_id}.

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.groupBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#group_by DataOciDatabaseManagementManagedDatabaseAttentionLogCount#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#id DataOciDatabaseManagementManagedDatabaseAttentionLogCount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_regular_expression`<sup>Optional</sup> <a name="is_regular_expression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.isRegularExpression"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#is_regular_expression DataOciDatabaseManagementManagedDatabaseAttentionLogCount#is_regular_expression}.

---

##### `log_search_text`<sup>Optional</sup> <a name="log_search_text" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.logSearchText"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#log_search_text DataOciDatabaseManagementManagedDatabaseAttentionLogCount#log_search_text}.

---

##### `time_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.timeGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCount#time_greater_than_or_equal_to}.

---

##### `time_less_than_or_equal_to`<sup>Optional</sup> <a name="time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.timeLessThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCount#time_less_than_or_equal_to}.

---

##### `type_filter`<sup>Optional</sup> <a name="type_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.typeFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#type_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCount#type_filter}.

---

##### `urgency_filter`<sup>Optional</sup> <a name="urgency_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.Initializer.parameter.urgencyFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#urgency_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCount#urgency_filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetGroupBy">reset_group_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetIsRegularExpression">reset_is_regular_expression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetLogSearchText">reset_log_search_text</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetTimeGreaterThanOrEqualTo">reset_time_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetTimeLessThanOrEqualTo">reset_time_less_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetTypeFilter">reset_type_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetUrgencyFilter">reset_urgency_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_group_by` <a name="reset_group_by" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetGroupBy"></a>

```python
def reset_group_by() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_regular_expression` <a name="reset_is_regular_expression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetIsRegularExpression"></a>

```python
def reset_is_regular_expression() -> None
```

##### `reset_log_search_text` <a name="reset_log_search_text" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetLogSearchText"></a>

```python
def reset_log_search_text() -> None
```

##### `reset_time_greater_than_or_equal_to` <a name="reset_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetTimeGreaterThanOrEqualTo"></a>

```python
def reset_time_greater_than_or_equal_to() -> None
```

##### `reset_time_less_than_or_equal_to` <a name="reset_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetTimeLessThanOrEqualTo"></a>

```python
def reset_time_less_than_or_equal_to() -> None
```

##### `reset_type_filter` <a name="reset_type_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetTypeFilter"></a>

```python
def reset_type_filter() -> None
```

##### `reset_urgency_filter` <a name="reset_urgency_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.resetUrgencyFilter"></a>

```python
def reset_urgency_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAttentionLogCount resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_attention_log_count

dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_attention_log_count

dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_attention_log_count

dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_attention_log_count

dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAttentionLogCount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseAttentionLogCount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseAttentionLogCount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseAttentionLogCount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList">DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.groupByInput">group_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.isRegularExpressionInput">is_regular_expression_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.logSearchTextInput">log_search_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeGreaterThanOrEqualToInput">time_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeLessThanOrEqualToInput">time_less_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.typeFilterInput">type_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.urgencyFilterInput">urgency_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.groupBy">group_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.isRegularExpression">is_regular_expression</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.logSearchText">log_search_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeGreaterThanOrEqualTo">time_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeLessThanOrEqualTo">time_less_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.typeFilter">type_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.urgencyFilter">urgency_filter</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.items"></a>

```python
items: DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList">DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList</a>

---

##### `group_by_input`<sup>Optional</sup> <a name="group_by_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.groupByInput"></a>

```python
group_by_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_regular_expression_input`<sup>Optional</sup> <a name="is_regular_expression_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.isRegularExpressionInput"></a>

```python
is_regular_expression_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_search_text_input`<sup>Optional</sup> <a name="log_search_text_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.logSearchTextInput"></a>

```python
log_search_text_input: str
```

- *Type:* str

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `time_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeGreaterThanOrEqualToInput"></a>

```python
time_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_less_than_or_equal_to_input`<sup>Optional</sup> <a name="time_less_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeLessThanOrEqualToInput"></a>

```python
time_less_than_or_equal_to_input: str
```

- *Type:* str

---

##### `type_filter_input`<sup>Optional</sup> <a name="type_filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.typeFilterInput"></a>

```python
type_filter_input: str
```

- *Type:* str

---

##### `urgency_filter_input`<sup>Optional</sup> <a name="urgency_filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.urgencyFilterInput"></a>

```python
urgency_filter_input: str
```

- *Type:* str

---

##### `group_by`<sup>Required</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.groupBy"></a>

```python
group_by: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_regular_expression`<sup>Required</sup> <a name="is_regular_expression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.isRegularExpression"></a>

```python
is_regular_expression: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_search_text`<sup>Required</sup> <a name="log_search_text" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.logSearchText"></a>

```python
log_search_text: str
```

- *Type:* str

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `time_greater_than_or_equal_to`<sup>Required</sup> <a name="time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeGreaterThanOrEqualTo"></a>

```python
time_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_less_than_or_equal_to`<sup>Required</sup> <a name="time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.timeLessThanOrEqualTo"></a>

```python
time_less_than_or_equal_to: str
```

- *Type:* str

---

##### `type_filter`<sup>Required</sup> <a name="type_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.typeFilter"></a>

```python
type_filter: str
```

- *Type:* str

---

##### `urgency_filter`<sup>Required</sup> <a name="urgency_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.urgencyFilter"></a>

```python
urgency_filter: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_attention_log_count

dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  group_by: str = None,
  id: str = None,
  is_regular_expression: typing.Union[bool, IResolvable] = None,
  log_search_text: str = None,
  time_greater_than_or_equal_to: str = None,
  time_less_than_or_equal_to: str = None,
  type_filter: str = None,
  urgency_filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#managed_database_id DataOciDatabaseManagementManagedDatabaseAttentionLogCount#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.groupBy">group_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#group_by DataOciDatabaseManagementManagedDatabaseAttentionLogCount#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#id DataOciDatabaseManagementManagedDatabaseAttentionLogCount#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.isRegularExpression">is_regular_expression</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#is_regular_expression DataOciDatabaseManagementManagedDatabaseAttentionLogCount#is_regular_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.logSearchText">log_search_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#log_search_text DataOciDatabaseManagementManagedDatabaseAttentionLogCount#log_search_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.timeGreaterThanOrEqualTo">time_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCount#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.timeLessThanOrEqualTo">time_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCount#time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.typeFilter">type_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#type_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCount#type_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.urgencyFilter">urgency_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#urgency_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCount#urgency_filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#managed_database_id DataOciDatabaseManagementManagedDatabaseAttentionLogCount#managed_database_id}.

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.groupBy"></a>

```python
group_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#group_by DataOciDatabaseManagementManagedDatabaseAttentionLogCount#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#id DataOciDatabaseManagementManagedDatabaseAttentionLogCount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_regular_expression`<sup>Optional</sup> <a name="is_regular_expression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.isRegularExpression"></a>

```python
is_regular_expression: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#is_regular_expression DataOciDatabaseManagementManagedDatabaseAttentionLogCount#is_regular_expression}.

---

##### `log_search_text`<sup>Optional</sup> <a name="log_search_text" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.logSearchText"></a>

```python
log_search_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#log_search_text DataOciDatabaseManagementManagedDatabaseAttentionLogCount#log_search_text}.

---

##### `time_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.timeGreaterThanOrEqualTo"></a>

```python
time_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCount#time_greater_than_or_equal_to}.

---

##### `time_less_than_or_equal_to`<sup>Optional</sup> <a name="time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.timeLessThanOrEqualTo"></a>

```python
time_less_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAttentionLogCount#time_less_than_or_equal_to}.

---

##### `type_filter`<sup>Optional</sup> <a name="type_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.typeFilter"></a>

```python
type_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#type_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCount#type_filter}.

---

##### `urgency_filter`<sup>Optional</sup> <a name="urgency_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountConfig.property.urgencyFilter"></a>

```python
urgency_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_attention_log_count#urgency_filter DataOciDatabaseManagementManagedDatabaseAttentionLogCount#urgency_filter}.

---

### DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_attention_log_count

dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_attention_log_count

dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_attention_log_count

dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems">DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAttentionLogCount.DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems">DataOciDatabaseManagementManagedDatabaseAttentionLogCountItems</a>

---



