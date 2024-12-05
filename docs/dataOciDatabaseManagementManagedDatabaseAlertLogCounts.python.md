# `dataOciDatabaseManagementManagedDatabaseAlertLogCounts` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseAlertLogCounts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseAlertLogCounts <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCounts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts oci_database_management_managed_database_alert_log_counts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_alert_log_counts

dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter]] = None,
  group_by: str = None,
  id: str = None,
  is_regular_expression: typing.Union[bool, IResolvable] = None,
  level_filter: str = None,
  log_search_text: str = None,
  time_greater_than_or_equal_to: str = None,
  time_less_than_or_equal_to: str = None,
  type_filter: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#managed_database_id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.groupBy">group_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#group_by DataOciDatabaseManagementManagedDatabaseAlertLogCounts#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.isRegularExpression">is_regular_expression</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#is_regular_expression DataOciDatabaseManagementManagedDatabaseAlertLogCounts#is_regular_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.levelFilter">level_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#level_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#level_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.logSearchText">log_search_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#log_search_text DataOciDatabaseManagementManagedDatabaseAlertLogCounts#log_search_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.timeGreaterThanOrEqualTo">time_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.timeLessThanOrEqualTo">time_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.typeFilter">type_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#type_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#type_filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.managedDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#managed_database_id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#filter}

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.groupBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#group_by DataOciDatabaseManagementManagedDatabaseAlertLogCounts#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_regular_expression`<sup>Optional</sup> <a name="is_regular_expression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.isRegularExpression"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#is_regular_expression DataOciDatabaseManagementManagedDatabaseAlertLogCounts#is_regular_expression}.

---

##### `level_filter`<sup>Optional</sup> <a name="level_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.levelFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#level_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#level_filter}.

---

##### `log_search_text`<sup>Optional</sup> <a name="log_search_text" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.logSearchText"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#log_search_text DataOciDatabaseManagementManagedDatabaseAlertLogCounts#log_search_text}.

---

##### `time_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.timeGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_greater_than_or_equal_to}.

---

##### `time_less_than_or_equal_to`<sup>Optional</sup> <a name="time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.timeLessThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_less_than_or_equal_to}.

---

##### `type_filter`<sup>Optional</sup> <a name="type_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.Initializer.parameter.typeFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#type_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#type_filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetGroupBy">reset_group_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetIsRegularExpression">reset_is_regular_expression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetLevelFilter">reset_level_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetLogSearchText">reset_log_search_text</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTimeGreaterThanOrEqualTo">reset_time_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTimeLessThanOrEqualTo">reset_time_less_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTypeFilter">reset_type_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_group_by` <a name="reset_group_by" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetGroupBy"></a>

```python
def reset_group_by() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_regular_expression` <a name="reset_is_regular_expression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetIsRegularExpression"></a>

```python
def reset_is_regular_expression() -> None
```

##### `reset_level_filter` <a name="reset_level_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetLevelFilter"></a>

```python
def reset_level_filter() -> None
```

##### `reset_log_search_text` <a name="reset_log_search_text" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetLogSearchText"></a>

```python
def reset_log_search_text() -> None
```

##### `reset_time_greater_than_or_equal_to` <a name="reset_time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTimeGreaterThanOrEqualTo"></a>

```python
def reset_time_greater_than_or_equal_to() -> None
```

##### `reset_time_less_than_or_equal_to` <a name="reset_time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTimeLessThanOrEqualTo"></a>

```python
def reset_time_less_than_or_equal_to() -> None
```

##### `reset_type_filter` <a name="reset_type_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.resetTypeFilter"></a>

```python
def reset_type_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAlertLogCounts resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_alert_log_counts

dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_alert_log_counts

dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_alert_log_counts

dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_alert_log_counts

dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAlertLogCounts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseAlertLogCounts to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseManagementManagedDatabaseAlertLogCounts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseAlertLogCounts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.alertLogCountsCollection">alert_log_counts_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.groupByInput">group_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.isRegularExpressionInput">is_regular_expression_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.levelFilterInput">level_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.logSearchTextInput">log_search_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.managedDatabaseIdInput">managed_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeGreaterThanOrEqualToInput">time_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeLessThanOrEqualToInput">time_less_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.typeFilterInput">type_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.groupBy">group_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.isRegularExpression">is_regular_expression</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.levelFilter">level_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.logSearchText">log_search_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeGreaterThanOrEqualTo">time_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeLessThanOrEqualTo">time_less_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.typeFilter">type_filter</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `alert_log_counts_collection`<sup>Required</sup> <a name="alert_log_counts_collection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.alertLogCountsCollection"></a>

```python
alert_log_counts_collection: DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.filter"></a>

```python
filter: DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>]]

---

##### `group_by_input`<sup>Optional</sup> <a name="group_by_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.groupByInput"></a>

```python
group_by_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_regular_expression_input`<sup>Optional</sup> <a name="is_regular_expression_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.isRegularExpressionInput"></a>

```python
is_regular_expression_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `level_filter_input`<sup>Optional</sup> <a name="level_filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.levelFilterInput"></a>

```python
level_filter_input: str
```

- *Type:* str

---

##### `log_search_text_input`<sup>Optional</sup> <a name="log_search_text_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.logSearchTextInput"></a>

```python
log_search_text_input: str
```

- *Type:* str

---

##### `managed_database_id_input`<sup>Optional</sup> <a name="managed_database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.managedDatabaseIdInput"></a>

```python
managed_database_id_input: str
```

- *Type:* str

---

##### `time_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeGreaterThanOrEqualToInput"></a>

```python
time_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_less_than_or_equal_to_input`<sup>Optional</sup> <a name="time_less_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeLessThanOrEqualToInput"></a>

```python
time_less_than_or_equal_to_input: str
```

- *Type:* str

---

##### `type_filter_input`<sup>Optional</sup> <a name="type_filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.typeFilterInput"></a>

```python
type_filter_input: str
```

- *Type:* str

---

##### `group_by`<sup>Required</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.groupBy"></a>

```python
group_by: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_regular_expression`<sup>Required</sup> <a name="is_regular_expression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.isRegularExpression"></a>

```python
is_regular_expression: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `level_filter`<sup>Required</sup> <a name="level_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.levelFilter"></a>

```python
level_filter: str
```

- *Type:* str

---

##### `log_search_text`<sup>Required</sup> <a name="log_search_text" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.logSearchText"></a>

```python
log_search_text: str
```

- *Type:* str

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

---

##### `time_greater_than_or_equal_to`<sup>Required</sup> <a name="time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeGreaterThanOrEqualTo"></a>

```python
time_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_less_than_or_equal_to`<sup>Required</sup> <a name="time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.timeLessThanOrEqualTo"></a>

```python
time_less_than_or_equal_to: str
```

- *Type:* str

---

##### `type_filter`<sup>Required</sup> <a name="type_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.typeFilter"></a>

```python
type_filter: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCounts.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_alert_log_counts

dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection()
```


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_alert_log_counts

dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems()
```


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_alert_log_counts

dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_database_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter]] = None,
  group_by: str = None,
  id: str = None,
  is_regular_expression: typing.Union[bool, IResolvable] = None,
  level_filter: str = None,
  log_search_text: str = None,
  time_greater_than_or_equal_to: str = None,
  time_less_than_or_equal_to: str = None,
  type_filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.managedDatabaseId">managed_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#managed_database_id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.groupBy">group_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#group_by DataOciDatabaseManagementManagedDatabaseAlertLogCounts#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.isRegularExpression">is_regular_expression</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#is_regular_expression DataOciDatabaseManagementManagedDatabaseAlertLogCounts#is_regular_expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.levelFilter">level_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#level_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#level_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.logSearchText">log_search_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#log_search_text DataOciDatabaseManagementManagedDatabaseAlertLogCounts#log_search_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.timeGreaterThanOrEqualTo">time_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.timeLessThanOrEqualTo">time_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.typeFilter">type_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#type_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#type_filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_database_id`<sup>Required</sup> <a name="managed_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.managedDatabaseId"></a>

```python
managed_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#managed_database_id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#managed_database_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#filter}

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.groupBy"></a>

```python
group_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#group_by DataOciDatabaseManagementManagedDatabaseAlertLogCounts#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#id DataOciDatabaseManagementManagedDatabaseAlertLogCounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_regular_expression`<sup>Optional</sup> <a name="is_regular_expression" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.isRegularExpression"></a>

```python
is_regular_expression: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#is_regular_expression DataOciDatabaseManagementManagedDatabaseAlertLogCounts#is_regular_expression}.

---

##### `level_filter`<sup>Optional</sup> <a name="level_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.levelFilter"></a>

```python
level_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#level_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#level_filter}.

---

##### `log_search_text`<sup>Optional</sup> <a name="log_search_text" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.logSearchText"></a>

```python
log_search_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#log_search_text DataOciDatabaseManagementManagedDatabaseAlertLogCounts#log_search_text}.

---

##### `time_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.timeGreaterThanOrEqualTo"></a>

```python
time_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_greater_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_greater_than_or_equal_to}.

---

##### `time_less_than_or_equal_to`<sup>Optional</sup> <a name="time_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.timeLessThanOrEqualTo"></a>

```python
time_less_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#time_less_than_or_equal_to DataOciDatabaseManagementManagedDatabaseAlertLogCounts#time_less_than_or_equal_to}.

---

##### `type_filter`<sup>Optional</sup> <a name="type_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsConfig.property.typeFilter"></a>

```python
type_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#type_filter DataOciDatabaseManagementManagedDatabaseAlertLogCounts#type_filter}.

---

### DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_alert_log_counts

dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#name DataOciDatabaseManagementManagedDatabaseAlertLogCounts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#values DataOciDatabaseManagementManagedDatabaseAlertLogCounts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#regex DataOciDatabaseManagementManagedDatabaseAlertLogCounts#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#name DataOciDatabaseManagementManagedDatabaseAlertLogCounts#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#values DataOciDatabaseManagementManagedDatabaseAlertLogCounts#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_alert_log_counts#regex DataOciDatabaseManagementManagedDatabaseAlertLogCounts#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_alert_log_counts

dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_alert_log_counts

dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_alert_log_counts

dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_alert_log_counts

dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.items"></a>

```python
items: DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection">DataOciDatabaseManagementManagedDatabaseAlertLogCountsAlertLogCountsCollection</a>

---


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_alert_log_counts

dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>]]

---


### DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_management_managed_database_alert_log_counts

dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAlertLogCounts.DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter">DataOciDatabaseManagementManagedDatabaseAlertLogCountsFilter</a>]

---



