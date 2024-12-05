# `dataOciFusionAppsFusionEnvironmentRefreshActivities` Submodule <a name="`dataOciFusionAppsFusionEnvironmentRefreshActivities` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentRefreshActivities <a name="DataOciFusionAppsFusionEnvironmentRefreshActivities" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities oci_fusion_apps_fusion_environment_refresh_activities}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_refresh_activities

dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fusion_environment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter]] = None,
  id: str = None,
  state: str = None,
  time_expected_finish_less_than_or_equal_to: str = None,
  time_scheduled_start_greater_than_or_equal_to: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#fusion_environment_id DataOciFusionAppsFusionEnvironmentRefreshActivities#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#display_name DataOciFusionAppsFusionEnvironmentRefreshActivities#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter">DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#id DataOciFusionAppsFusionEnvironmentRefreshActivities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#state DataOciFusionAppsFusionEnvironmentRefreshActivities#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.timeExpectedFinishLessThanOrEqualTo">time_expected_finish_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#time_expected_finish_less_than_or_equal_to DataOciFusionAppsFusionEnvironmentRefreshActivities#time_expected_finish_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.timeScheduledStartGreaterThanOrEqualTo">time_scheduled_start_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#time_scheduled_start_greater_than_or_equal_to DataOciFusionAppsFusionEnvironmentRefreshActivities#time_scheduled_start_greater_than_or_equal_to}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.fusionEnvironmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#fusion_environment_id DataOciFusionAppsFusionEnvironmentRefreshActivities#fusion_environment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#display_name DataOciFusionAppsFusionEnvironmentRefreshActivities#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter">DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#filter DataOciFusionAppsFusionEnvironmentRefreshActivities#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#id DataOciFusionAppsFusionEnvironmentRefreshActivities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#state DataOciFusionAppsFusionEnvironmentRefreshActivities#state}.

---

##### `time_expected_finish_less_than_or_equal_to`<sup>Optional</sup> <a name="time_expected_finish_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.timeExpectedFinishLessThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#time_expected_finish_less_than_or_equal_to DataOciFusionAppsFusionEnvironmentRefreshActivities#time_expected_finish_less_than_or_equal_to}.

---

##### `time_scheduled_start_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_scheduled_start_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.Initializer.parameter.timeScheduledStartGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#time_scheduled_start_greater_than_or_equal_to DataOciFusionAppsFusionEnvironmentRefreshActivities#time_scheduled_start_greater_than_or_equal_to}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.resetTimeExpectedFinishLessThanOrEqualTo">reset_time_expected_finish_less_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.resetTimeScheduledStartGreaterThanOrEqualTo">reset_time_scheduled_start_greater_than_or_equal_to</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter">DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_time_expected_finish_less_than_or_equal_to` <a name="reset_time_expected_finish_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.resetTimeExpectedFinishLessThanOrEqualTo"></a>

```python
def reset_time_expected_finish_less_than_or_equal_to() -> None
```

##### `reset_time_scheduled_start_greater_than_or_equal_to` <a name="reset_time_scheduled_start_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.resetTimeScheduledStartGreaterThanOrEqualTo"></a>

```python
def reset_time_scheduled_start_greater_than_or_equal_to() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentRefreshActivities resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_refresh_activities

dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_refresh_activities

dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_refresh_activities

dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_refresh_activities

dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentRefreshActivities resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentRefreshActivities to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFusionAppsFusionEnvironmentRefreshActivities that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentRefreshActivities to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList">DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.refreshActivityCollection">refresh_activity_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList">DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter">DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.fusionEnvironmentIdInput">fusion_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.timeExpectedFinishLessThanOrEqualToInput">time_expected_finish_less_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.timeScheduledStartGreaterThanOrEqualToInput">time_scheduled_start_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.timeExpectedFinishLessThanOrEqualTo">time_expected_finish_less_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.timeScheduledStartGreaterThanOrEqualTo">time_scheduled_start_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.filter"></a>

```python
filter: DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList">DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList</a>

---

##### `refresh_activity_collection`<sup>Required</sup> <a name="refresh_activity_collection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.refreshActivityCollection"></a>

```python
refresh_activity_collection: DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList">DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter">DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter</a>]]

---

##### `fusion_environment_id_input`<sup>Optional</sup> <a name="fusion_environment_id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.fusionEnvironmentIdInput"></a>

```python
fusion_environment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `time_expected_finish_less_than_or_equal_to_input`<sup>Optional</sup> <a name="time_expected_finish_less_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.timeExpectedFinishLessThanOrEqualToInput"></a>

```python
time_expected_finish_less_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_scheduled_start_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_scheduled_start_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.timeScheduledStartGreaterThanOrEqualToInput"></a>

```python
time_scheduled_start_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.fusionEnvironmentId"></a>

```python
fusion_environment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_expected_finish_less_than_or_equal_to`<sup>Required</sup> <a name="time_expected_finish_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.timeExpectedFinishLessThanOrEqualTo"></a>

```python
time_expected_finish_less_than_or_equal_to: str
```

- *Type:* str

---

##### `time_scheduled_start_greater_than_or_equal_to`<sup>Required</sup> <a name="time_scheduled_start_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.timeScheduledStartGreaterThanOrEqualTo"></a>

```python
time_scheduled_start_greater_than_or_equal_to: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivities.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig <a name="DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_refresh_activities

dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fusion_environment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter]] = None,
  id: str = None,
  state: str = None,
  time_expected_finish_less_than_or_equal_to: str = None,
  time_scheduled_start_greater_than_or_equal_to: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#fusion_environment_id DataOciFusionAppsFusionEnvironmentRefreshActivities#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#display_name DataOciFusionAppsFusionEnvironmentRefreshActivities#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter">DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#id DataOciFusionAppsFusionEnvironmentRefreshActivities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#state DataOciFusionAppsFusionEnvironmentRefreshActivities#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.timeExpectedFinishLessThanOrEqualTo">time_expected_finish_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#time_expected_finish_less_than_or_equal_to DataOciFusionAppsFusionEnvironmentRefreshActivities#time_expected_finish_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.timeScheduledStartGreaterThanOrEqualTo">time_scheduled_start_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#time_scheduled_start_greater_than_or_equal_to DataOciFusionAppsFusionEnvironmentRefreshActivities#time_scheduled_start_greater_than_or_equal_to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.fusionEnvironmentId"></a>

```python
fusion_environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#fusion_environment_id DataOciFusionAppsFusionEnvironmentRefreshActivities#fusion_environment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#display_name DataOciFusionAppsFusionEnvironmentRefreshActivities#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter">DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#filter DataOciFusionAppsFusionEnvironmentRefreshActivities#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#id DataOciFusionAppsFusionEnvironmentRefreshActivities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#state DataOciFusionAppsFusionEnvironmentRefreshActivities#state}.

---

##### `time_expected_finish_less_than_or_equal_to`<sup>Optional</sup> <a name="time_expected_finish_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.timeExpectedFinishLessThanOrEqualTo"></a>

```python
time_expected_finish_less_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#time_expected_finish_less_than_or_equal_to DataOciFusionAppsFusionEnvironmentRefreshActivities#time_expected_finish_less_than_or_equal_to}.

---

##### `time_scheduled_start_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_scheduled_start_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesConfig.property.timeScheduledStartGreaterThanOrEqualTo"></a>

```python
time_scheduled_start_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#time_scheduled_start_greater_than_or_equal_to DataOciFusionAppsFusionEnvironmentRefreshActivities#time_scheduled_start_greater_than_or_equal_to}.

---

### DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter <a name="DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_refresh_activities

dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#name DataOciFusionAppsFusionEnvironmentRefreshActivities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#values DataOciFusionAppsFusionEnvironmentRefreshActivities#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#regex DataOciFusionAppsFusionEnvironmentRefreshActivities#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#name DataOciFusionAppsFusionEnvironmentRefreshActivities#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#values DataOciFusionAppsFusionEnvironmentRefreshActivities#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activities#regex DataOciFusionAppsFusionEnvironmentRefreshActivities#regex}.

---

### DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollection <a name="DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_refresh_activities

dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollection()
```


### DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItems <a name="DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_refresh_activities

dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItems()
```


### DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStruct <a name="DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStruct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_refresh_activities

dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStruct()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList <a name="DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_refresh_activities

dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter">DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter">DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter</a>]]

---


### DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference <a name="DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_refresh_activities

dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter">DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter">DataOciFusionAppsFusionEnvironmentRefreshActivitiesFilter</a>]

---


### DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList <a name="DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_refresh_activities

dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference <a name="DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_refresh_activities

dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.isDataMaskingOpted">is_data_masking_opted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.refreshActivityId">refresh_activity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.refreshIssueDetailsList">refresh_issue_details_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList">DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.serviceAvailability">service_availability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.sourceFusionEnvironmentId">source_fusion_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.timeAccepted">time_accepted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.timeExpectedFinish">time_expected_finish</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.timeOfRestorationPoint">time_of_restoration_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItems">DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.fusionEnvironmentId"></a>

```python
fusion_environment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_data_masking_opted`<sup>Required</sup> <a name="is_data_masking_opted" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.isDataMaskingOpted"></a>

```python
is_data_masking_opted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `refresh_activity_id`<sup>Required</sup> <a name="refresh_activity_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.refreshActivityId"></a>

```python
refresh_activity_id: str
```

- *Type:* str

---

##### `refresh_issue_details_list`<sup>Required</sup> <a name="refresh_issue_details_list" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.refreshIssueDetailsList"></a>

```python
refresh_issue_details_list: DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList">DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList</a>

---

##### `service_availability`<sup>Required</sup> <a name="service_availability" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.serviceAvailability"></a>

```python
service_availability: str
```

- *Type:* str

---

##### `source_fusion_environment_id`<sup>Required</sup> <a name="source_fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.sourceFusionEnvironmentId"></a>

```python
source_fusion_environment_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_accepted`<sup>Required</sup> <a name="time_accepted" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.timeAccepted"></a>

```python
time_accepted: str
```

- *Type:* str

---

##### `time_expected_finish`<sup>Required</sup> <a name="time_expected_finish" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.timeExpectedFinish"></a>

```python
time_expected_finish: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `time_of_restoration_point`<sup>Required</sup> <a name="time_of_restoration_point" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.timeOfRestorationPoint"></a>

```python
time_of_restoration_point: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItems">DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItems</a>

---


### DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList <a name="DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_refresh_activities

dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference <a name="DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_refresh_activities

dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.property.refreshIssues">refresh_issues</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStruct">DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `refresh_issues`<sup>Required</sup> <a name="refresh_issues" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.property.refreshIssues"></a>

```python
refresh_issues: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStruct">DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsRefreshIssueDetailsListStruct</a>

---


### DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList <a name="DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_refresh_activities

dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference <a name="DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_refresh_activities

dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList">DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollection">DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.property.items"></a>

```python
items: DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList">DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivities.DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollection">DataOciFusionAppsFusionEnvironmentRefreshActivitiesRefreshActivityCollection</a>

---



