# `dataOciResourceSchedulerSchedules` Submodule <a name="`dataOciResourceSchedulerSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciResourceSchedulerSchedules <a name="DataOciResourceSchedulerSchedules" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules oci_resource_scheduler_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciResourceSchedulerSchedulesFilter]] = None,
  id: str = None,
  schedule_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#compartment_id DataOciResourceSchedulerSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#display_name DataOciResourceSchedulerSchedules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#id DataOciResourceSchedulerSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.scheduleId">schedule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#schedule_id DataOciResourceSchedulerSchedules#schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#state DataOciResourceSchedulerSchedules#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#compartment_id DataOciResourceSchedulerSchedules#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#display_name DataOciResourceSchedulerSchedules#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#filter DataOciResourceSchedulerSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#id DataOciResourceSchedulerSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedule_id`<sup>Optional</sup> <a name="schedule_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.scheduleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#schedule_id DataOciResourceSchedulerSchedules#schedule_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#state DataOciResourceSchedulerSchedules#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetScheduleId">reset_schedule_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciResourceSchedulerSchedulesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_schedule_id` <a name="reset_schedule_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetScheduleId"></a>

```python
def reset_schedule_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciResourceSchedulerSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciResourceSchedulerSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciResourceSchedulerSchedules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciResourceSchedulerSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciResourceSchedulerSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList">DataOciResourceSchedulerSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleCollection">schedule_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList">DataOciResourceSchedulerSchedulesScheduleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleIdInput">schedule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleId">schedule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.filter"></a>

```python
filter: DataOciResourceSchedulerSchedulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList">DataOciResourceSchedulerSchedulesFilterList</a>

---

##### `schedule_collection`<sup>Required</sup> <a name="schedule_collection" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleCollection"></a>

```python
schedule_collection: DataOciResourceSchedulerSchedulesScheduleCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList">DataOciResourceSchedulerSchedulesScheduleCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciResourceSchedulerSchedulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `schedule_id_input`<sup>Optional</sup> <a name="schedule_id_input" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleIdInput"></a>

```python
schedule_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `schedule_id`<sup>Required</sup> <a name="schedule_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.scheduleId"></a>

```python
schedule_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciResourceSchedulerSchedulesConfig <a name="DataOciResourceSchedulerSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciResourceSchedulerSchedulesFilter]] = None,
  id: str = None,
  schedule_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#compartment_id DataOciResourceSchedulerSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#display_name DataOciResourceSchedulerSchedules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#id DataOciResourceSchedulerSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.scheduleId">schedule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#schedule_id DataOciResourceSchedulerSchedules#schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#state DataOciResourceSchedulerSchedules#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#compartment_id DataOciResourceSchedulerSchedules#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#display_name DataOciResourceSchedulerSchedules#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciResourceSchedulerSchedulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#filter DataOciResourceSchedulerSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#id DataOciResourceSchedulerSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedule_id`<sup>Optional</sup> <a name="schedule_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.scheduleId"></a>

```python
schedule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#schedule_id DataOciResourceSchedulerSchedules#schedule_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#state DataOciResourceSchedulerSchedules#state}.

---

### DataOciResourceSchedulerSchedulesFilter <a name="DataOciResourceSchedulerSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#name DataOciResourceSchedulerSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#values DataOciResourceSchedulerSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#regex DataOciResourceSchedulerSchedules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#name DataOciResourceSchedulerSchedules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#values DataOciResourceSchedulerSchedules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/resource_scheduler_schedules#regex DataOciResourceSchedulerSchedules#regex}.

---

### DataOciResourceSchedulerSchedulesScheduleCollection <a name="DataOciResourceSchedulerSchedulesScheduleCollection" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollection()
```


### DataOciResourceSchedulerSchedulesScheduleCollectionItems <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItems()
```


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters()
```


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue()
```


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciResourceSchedulerSchedulesFilterList <a name="DataOciResourceSchedulerSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciResourceSchedulerSchedulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciResourceSchedulerSchedulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>]]

---


### DataOciResourceSchedulerSchedulesFilterOutputReference <a name="DataOciResourceSchedulerSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciResourceSchedulerSchedulesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesFilter">DataOciResourceSchedulerSchedulesFilter</a>]

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsList <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.recurrenceDetails">recurrence_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.recurrenceType">recurrence_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.resourceFilters">resource_filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.resources">resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeEnds">time_ends</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeLastRun">time_last_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeNextRun">time_next_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeStarts">time_starts</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItems">DataOciResourceSchedulerSchedulesScheduleCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `recurrence_details`<sup>Required</sup> <a name="recurrence_details" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.recurrenceDetails"></a>

```python
recurrence_details: str
```

- *Type:* str

---

##### `recurrence_type`<sup>Required</sup> <a name="recurrence_type" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.recurrenceType"></a>

```python
recurrence_type: str
```

- *Type:* str

---

##### `resource_filters`<sup>Required</sup> <a name="resource_filters" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.resourceFilters"></a>

```python
resource_filters: DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.resources"></a>

```python
resources: DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_ends`<sup>Required</sup> <a name="time_ends" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeEnds"></a>

```python
time_ends: str
```

- *Type:* str

---

##### `time_last_run`<sup>Required</sup> <a name="time_last_run" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeLastRun"></a>

```python
time_last_run: str
```

- *Type:* str

---

##### `time_next_run`<sup>Required</sup> <a name="time_next_run" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeNextRun"></a>

```python
time_next_run: str
```

- *Type:* str

---

##### `time_starts`<sup>Required</sup> <a name="time_starts" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeStarts"></a>

```python
time_starts: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciResourceSchedulerSchedulesScheduleCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItems">DataOciResourceSchedulerSchedulesScheduleCollectionItems</a>

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.attribute">attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.shouldIncludeChildCompartments">should_include_child_compartments</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.value">value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.attribute"></a>

```python
attribute: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `should_include_child_compartments`<sup>Required</sup> <a name="should_include_child_compartments" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.shouldIncludeChildCompartments"></a>

```python
should_include_child_compartments: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.value"></a>

```python
value: DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFilters</a>

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValueOutputReference.property.internalValue"></a>

```python
internal_value: DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourceFiltersValue</a>

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference <a name="DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources">DataOciResourceSchedulerSchedulesScheduleCollectionItemsResources</a>

---


### DataOciResourceSchedulerSchedulesScheduleCollectionList <a name="DataOciResourceSchedulerSchedulesScheduleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference <a name="DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_resource_scheduler_schedules

dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollection">DataOciResourceSchedulerSchedulesScheduleCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.items"></a>

```python
items: DataOciResourceSchedulerSchedulesScheduleCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionItemsList">DataOciResourceSchedulerSchedulesScheduleCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciResourceSchedulerSchedulesScheduleCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciResourceSchedulerSchedules.DataOciResourceSchedulerSchedulesScheduleCollection">DataOciResourceSchedulerSchedulesScheduleCollection</a>

---



