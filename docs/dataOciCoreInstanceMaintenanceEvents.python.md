# `dataOciCoreInstanceMaintenanceEvents` Submodule <a name="`dataOciCoreInstanceMaintenanceEvents` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreInstanceMaintenanceEvents <a name="DataOciCoreInstanceMaintenanceEvents" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events oci_core_instance_maintenance_events}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_maintenance_events

dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  correlation_token: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreInstanceMaintenanceEventsFilter]] = None,
  id: str = None,
  instance_action: str = None,
  instance_id: str = None,
  state: str = None,
  time_window_start_greater_than_or_equal_to: str = None,
  time_window_start_less_than_or_equal_to: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#compartment_id DataOciCoreInstanceMaintenanceEvents#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.correlationToken">correlation_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#correlation_token DataOciCoreInstanceMaintenanceEvents#correlation_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter">DataOciCoreInstanceMaintenanceEventsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#id DataOciCoreInstanceMaintenanceEvents#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.instanceAction">instance_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#instance_action DataOciCoreInstanceMaintenanceEvents#instance_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#instance_id DataOciCoreInstanceMaintenanceEvents#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#state DataOciCoreInstanceMaintenanceEvents#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.timeWindowStartGreaterThanOrEqualTo">time_window_start_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#time_window_start_greater_than_or_equal_to DataOciCoreInstanceMaintenanceEvents#time_window_start_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.timeWindowStartLessThanOrEqualTo">time_window_start_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#time_window_start_less_than_or_equal_to DataOciCoreInstanceMaintenanceEvents#time_window_start_less_than_or_equal_to}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#compartment_id DataOciCoreInstanceMaintenanceEvents#compartment_id}.

---

##### `correlation_token`<sup>Optional</sup> <a name="correlation_token" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.correlationToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#correlation_token DataOciCoreInstanceMaintenanceEvents#correlation_token}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter">DataOciCoreInstanceMaintenanceEventsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#filter DataOciCoreInstanceMaintenanceEvents#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#id DataOciCoreInstanceMaintenanceEvents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_action`<sup>Optional</sup> <a name="instance_action" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.instanceAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#instance_action DataOciCoreInstanceMaintenanceEvents#instance_action}.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#instance_id DataOciCoreInstanceMaintenanceEvents#instance_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#state DataOciCoreInstanceMaintenanceEvents#state}.

---

##### `time_window_start_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_window_start_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.timeWindowStartGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#time_window_start_greater_than_or_equal_to DataOciCoreInstanceMaintenanceEvents#time_window_start_greater_than_or_equal_to}.

---

##### `time_window_start_less_than_or_equal_to`<sup>Optional</sup> <a name="time_window_start_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.timeWindowStartLessThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#time_window_start_less_than_or_equal_to DataOciCoreInstanceMaintenanceEvents#time_window_start_less_than_or_equal_to}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetCorrelationToken">reset_correlation_token</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetInstanceAction">reset_instance_action</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetTimeWindowStartGreaterThanOrEqualTo">reset_time_window_start_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetTimeWindowStartLessThanOrEqualTo">reset_time_window_start_less_than_or_equal_to</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreInstanceMaintenanceEventsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter">DataOciCoreInstanceMaintenanceEventsFilter</a>]]

---

##### `reset_correlation_token` <a name="reset_correlation_token" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetCorrelationToken"></a>

```python
def reset_correlation_token() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_action` <a name="reset_instance_action" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetInstanceAction"></a>

```python
def reset_instance_action() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_time_window_start_greater_than_or_equal_to` <a name="reset_time_window_start_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetTimeWindowStartGreaterThanOrEqualTo"></a>

```python
def reset_time_window_start_greater_than_or_equal_to() -> None
```

##### `reset_time_window_start_less_than_or_equal_to` <a name="reset_time_window_start_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetTimeWindowStartLessThanOrEqualTo"></a>

```python
def reset_time_window_start_less_than_or_equal_to() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreInstanceMaintenanceEvents resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_maintenance_events

dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_maintenance_events

dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_maintenance_events

dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_maintenance_events

dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreInstanceMaintenanceEvents resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreInstanceMaintenanceEvents to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreInstanceMaintenanceEvents that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreInstanceMaintenanceEvents to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList">DataOciCoreInstanceMaintenanceEventsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceMaintenanceEvents">instance_maintenance_events</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList">DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.correlationTokenInput">correlation_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter">DataOciCoreInstanceMaintenanceEventsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceActionInput">instance_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartGreaterThanOrEqualToInput">time_window_start_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartLessThanOrEqualToInput">time_window_start_less_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.correlationToken">correlation_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceAction">instance_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartGreaterThanOrEqualTo">time_window_start_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartLessThanOrEqualTo">time_window_start_less_than_or_equal_to</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.filter"></a>

```python
filter: DataOciCoreInstanceMaintenanceEventsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList">DataOciCoreInstanceMaintenanceEventsFilterList</a>

---

##### `instance_maintenance_events`<sup>Required</sup> <a name="instance_maintenance_events" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceMaintenanceEvents"></a>

```python
instance_maintenance_events: DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList">DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `correlation_token_input`<sup>Optional</sup> <a name="correlation_token_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.correlationTokenInput"></a>

```python
correlation_token_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreInstanceMaintenanceEventsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter">DataOciCoreInstanceMaintenanceEventsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_action_input`<sup>Optional</sup> <a name="instance_action_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceActionInput"></a>

```python
instance_action_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `time_window_start_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_window_start_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartGreaterThanOrEqualToInput"></a>

```python
time_window_start_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_window_start_less_than_or_equal_to_input`<sup>Optional</sup> <a name="time_window_start_less_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartLessThanOrEqualToInput"></a>

```python
time_window_start_less_than_or_equal_to_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `correlation_token`<sup>Required</sup> <a name="correlation_token" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.correlationToken"></a>

```python
correlation_token: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_action`<sup>Required</sup> <a name="instance_action" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceAction"></a>

```python
instance_action: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_window_start_greater_than_or_equal_to`<sup>Required</sup> <a name="time_window_start_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartGreaterThanOrEqualTo"></a>

```python
time_window_start_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_window_start_less_than_or_equal_to`<sup>Required</sup> <a name="time_window_start_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartLessThanOrEqualTo"></a>

```python
time_window_start_less_than_or_equal_to: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreInstanceMaintenanceEventsConfig <a name="DataOciCoreInstanceMaintenanceEventsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_maintenance_events

dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  correlation_token: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreInstanceMaintenanceEventsFilter]] = None,
  id: str = None,
  instance_action: str = None,
  instance_id: str = None,
  state: str = None,
  time_window_start_greater_than_or_equal_to: str = None,
  time_window_start_less_than_or_equal_to: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#compartment_id DataOciCoreInstanceMaintenanceEvents#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.correlationToken">correlation_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#correlation_token DataOciCoreInstanceMaintenanceEvents#correlation_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter">DataOciCoreInstanceMaintenanceEventsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#id DataOciCoreInstanceMaintenanceEvents#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.instanceAction">instance_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#instance_action DataOciCoreInstanceMaintenanceEvents#instance_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#instance_id DataOciCoreInstanceMaintenanceEvents#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#state DataOciCoreInstanceMaintenanceEvents#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.timeWindowStartGreaterThanOrEqualTo">time_window_start_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#time_window_start_greater_than_or_equal_to DataOciCoreInstanceMaintenanceEvents#time_window_start_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.timeWindowStartLessThanOrEqualTo">time_window_start_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#time_window_start_less_than_or_equal_to DataOciCoreInstanceMaintenanceEvents#time_window_start_less_than_or_equal_to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#compartment_id DataOciCoreInstanceMaintenanceEvents#compartment_id}.

---

##### `correlation_token`<sup>Optional</sup> <a name="correlation_token" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.correlationToken"></a>

```python
correlation_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#correlation_token DataOciCoreInstanceMaintenanceEvents#correlation_token}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreInstanceMaintenanceEventsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter">DataOciCoreInstanceMaintenanceEventsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#filter DataOciCoreInstanceMaintenanceEvents#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#id DataOciCoreInstanceMaintenanceEvents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_action`<sup>Optional</sup> <a name="instance_action" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.instanceAction"></a>

```python
instance_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#instance_action DataOciCoreInstanceMaintenanceEvents#instance_action}.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#instance_id DataOciCoreInstanceMaintenanceEvents#instance_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#state DataOciCoreInstanceMaintenanceEvents#state}.

---

##### `time_window_start_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_window_start_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.timeWindowStartGreaterThanOrEqualTo"></a>

```python
time_window_start_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#time_window_start_greater_than_or_equal_to DataOciCoreInstanceMaintenanceEvents#time_window_start_greater_than_or_equal_to}.

---

##### `time_window_start_less_than_or_equal_to`<sup>Optional</sup> <a name="time_window_start_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.timeWindowStartLessThanOrEqualTo"></a>

```python
time_window_start_less_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#time_window_start_less_than_or_equal_to DataOciCoreInstanceMaintenanceEvents#time_window_start_less_than_or_equal_to}.

---

### DataOciCoreInstanceMaintenanceEventsFilter <a name="DataOciCoreInstanceMaintenanceEventsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_maintenance_events

dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#name DataOciCoreInstanceMaintenanceEvents#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#values DataOciCoreInstanceMaintenanceEvents#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#regex DataOciCoreInstanceMaintenanceEvents#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#name DataOciCoreInstanceMaintenanceEvents#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#values DataOciCoreInstanceMaintenanceEvents#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#regex DataOciCoreInstanceMaintenanceEvents#regex}.

---

### DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents <a name="DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_maintenance_events

dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreInstanceMaintenanceEventsFilterList <a name="DataOciCoreInstanceMaintenanceEventsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_maintenance_events

dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreInstanceMaintenanceEventsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter">DataOciCoreInstanceMaintenanceEventsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreInstanceMaintenanceEventsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter">DataOciCoreInstanceMaintenanceEventsFilter</a>]]

---


### DataOciCoreInstanceMaintenanceEventsFilterOutputReference <a name="DataOciCoreInstanceMaintenanceEventsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_maintenance_events

dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter">DataOciCoreInstanceMaintenanceEventsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreInstanceMaintenanceEventsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter">DataOciCoreInstanceMaintenanceEventsFilter</a>]

---


### DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList <a name="DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_maintenance_events

dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference <a name="DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_instance_maintenance_events

dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.additionalDetails">additional_details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.alternativeResolutionAction">alternative_resolution_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.alternativeResolutionActions">alternative_resolution_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.canDeleteLocalStorage">can_delete_local_storage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.canReschedule">can_reschedule</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.correlationToken">correlation_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.estimatedDuration">estimated_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.instanceAction">instance_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.instanceMaintenanceEventId">instance_maintenance_event_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.maintenanceCategory">maintenance_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.maintenanceReason">maintenance_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.startWindowDuration">start_window_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeHardDueDate">time_hard_due_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeWindowStart">time_window_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents">DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_details`<sup>Required</sup> <a name="additional_details" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.additionalDetails"></a>

```python
additional_details: StringMap
```

- *Type:* cdktf.StringMap

---

##### `alternative_resolution_action`<sup>Required</sup> <a name="alternative_resolution_action" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.alternativeResolutionAction"></a>

```python
alternative_resolution_action: str
```

- *Type:* str

---

##### `alternative_resolution_actions`<sup>Required</sup> <a name="alternative_resolution_actions" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.alternativeResolutionActions"></a>

```python
alternative_resolution_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `can_delete_local_storage`<sup>Required</sup> <a name="can_delete_local_storage" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.canDeleteLocalStorage"></a>

```python
can_delete_local_storage: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `can_reschedule`<sup>Required</sup> <a name="can_reschedule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.canReschedule"></a>

```python
can_reschedule: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `correlation_token`<sup>Required</sup> <a name="correlation_token" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.correlationToken"></a>

```python
correlation_token: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `estimated_duration`<sup>Required</sup> <a name="estimated_duration" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.estimatedDuration"></a>

```python
estimated_duration: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_action`<sup>Required</sup> <a name="instance_action" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.instanceAction"></a>

```python
instance_action: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `instance_maintenance_event_id`<sup>Required</sup> <a name="instance_maintenance_event_id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.instanceMaintenanceEventId"></a>

```python
instance_maintenance_event_id: str
```

- *Type:* str

---

##### `maintenance_category`<sup>Required</sup> <a name="maintenance_category" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.maintenanceCategory"></a>

```python
maintenance_category: str
```

- *Type:* str

---

##### `maintenance_reason`<sup>Required</sup> <a name="maintenance_reason" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.maintenanceReason"></a>

```python
maintenance_reason: str
```

- *Type:* str

---

##### `start_window_duration`<sup>Required</sup> <a name="start_window_duration" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.startWindowDuration"></a>

```python
start_window_duration: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `time_hard_due_date`<sup>Required</sup> <a name="time_hard_due_date" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeHardDueDate"></a>

```python
time_hard_due_date: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `time_window_start`<sup>Required</sup> <a name="time_window_start" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeWindowStart"></a>

```python
time_window_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents">DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents</a>

---



