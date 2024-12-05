# `dataOciJmsJmsPlugins` Submodule <a name="`dataOciJmsJmsPlugins` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsJmsPlugins <a name="DataOciJmsJmsPlugins" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins oci_jms_jms_plugins}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_jms_plugins

dataOciJmsJmsPlugins.DataOciJmsJmsPlugins(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_id: str = None,
  availability_status: str = None,
  compartment_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsJmsPluginsFilter]] = None,
  fleet_id: str = None,
  hostname_contains: str = None,
  id: str = None,
  state: str = None,
  time_last_seen_less_than_or_equal_to: str = None,
  time_registered_less_than_or_equal_to: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#agent_id DataOciJmsJmsPlugins#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.availabilityStatus">availability_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#availability_status DataOciJmsJmsPlugins#availability_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#compartment_id DataOciJmsJmsPlugins#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#compartment_id_in_subtree DataOciJmsJmsPlugins#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter">DataOciJmsJmsPluginsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#fleet_id DataOciJmsJmsPlugins#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.hostnameContains">hostname_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#hostname_contains DataOciJmsJmsPlugins#hostname_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#id DataOciJmsJmsPlugins#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#state DataOciJmsJmsPlugins#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.timeLastSeenLessThanOrEqualTo">time_last_seen_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#time_last_seen_less_than_or_equal_to DataOciJmsJmsPlugins#time_last_seen_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.timeRegisteredLessThanOrEqualTo">time_registered_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#time_registered_less_than_or_equal_to DataOciJmsJmsPlugins#time_registered_less_than_or_equal_to}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_id`<sup>Optional</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.agentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#agent_id DataOciJmsJmsPlugins#agent_id}.

---

##### `availability_status`<sup>Optional</sup> <a name="availability_status" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.availabilityStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#availability_status DataOciJmsJmsPlugins#availability_status}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#compartment_id DataOciJmsJmsPlugins#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#compartment_id_in_subtree DataOciJmsJmsPlugins#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter">DataOciJmsJmsPluginsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#filter DataOciJmsJmsPlugins#filter}

---

##### `fleet_id`<sup>Optional</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.fleetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#fleet_id DataOciJmsJmsPlugins#fleet_id}.

---

##### `hostname_contains`<sup>Optional</sup> <a name="hostname_contains" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.hostnameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#hostname_contains DataOciJmsJmsPlugins#hostname_contains}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#id DataOciJmsJmsPlugins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#state DataOciJmsJmsPlugins#state}.

---

##### `time_last_seen_less_than_or_equal_to`<sup>Optional</sup> <a name="time_last_seen_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.timeLastSeenLessThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#time_last_seen_less_than_or_equal_to DataOciJmsJmsPlugins#time_last_seen_less_than_or_equal_to}.

---

##### `time_registered_less_than_or_equal_to`<sup>Optional</sup> <a name="time_registered_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.Initializer.parameter.timeRegisteredLessThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#time_registered_less_than_or_equal_to DataOciJmsJmsPlugins#time_registered_less_than_or_equal_to}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetAgentId">reset_agent_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetAvailabilityStatus">reset_availability_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetFleetId">reset_fleet_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetHostnameContains">reset_hostname_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetTimeLastSeenLessThanOrEqualTo">reset_time_last_seen_less_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetTimeRegisteredLessThanOrEqualTo">reset_time_registered_less_than_or_equal_to</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciJmsJmsPluginsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter">DataOciJmsJmsPluginsFilter</a>]]

---

##### `reset_agent_id` <a name="reset_agent_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetAgentId"></a>

```python
def reset_agent_id() -> None
```

##### `reset_availability_status` <a name="reset_availability_status" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetAvailabilityStatus"></a>

```python
def reset_availability_status() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_fleet_id` <a name="reset_fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetFleetId"></a>

```python
def reset_fleet_id() -> None
```

##### `reset_hostname_contains` <a name="reset_hostname_contains" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetHostnameContains"></a>

```python
def reset_hostname_contains() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_time_last_seen_less_than_or_equal_to` <a name="reset_time_last_seen_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetTimeLastSeenLessThanOrEqualTo"></a>

```python
def reset_time_last_seen_less_than_or_equal_to() -> None
```

##### `reset_time_registered_less_than_or_equal_to` <a name="reset_time_registered_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.resetTimeRegisteredLessThanOrEqualTo"></a>

```python
def reset_time_registered_less_than_or_equal_to() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciJmsJmsPlugins resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_jms_plugins

dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_jms_plugins

dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_jms_plugins

dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_jms_plugins

dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciJmsJmsPlugins resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciJmsJmsPlugins to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciJmsJmsPlugins that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsJmsPlugins to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList">DataOciJmsJmsPluginsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.jmsPluginCollection">jms_plugin_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList">DataOciJmsJmsPluginsJmsPluginCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.agentIdInput">agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.availabilityStatusInput">availability_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter">DataOciJmsJmsPluginsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.fleetIdInput">fleet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.hostnameContainsInput">hostname_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.timeLastSeenLessThanOrEqualToInput">time_last_seen_less_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.timeRegisteredLessThanOrEqualToInput">time_registered_less_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.availabilityStatus">availability_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.hostnameContains">hostname_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.timeLastSeenLessThanOrEqualTo">time_last_seen_less_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.timeRegisteredLessThanOrEqualTo">time_registered_less_than_or_equal_to</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.filter"></a>

```python
filter: DataOciJmsJmsPluginsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList">DataOciJmsJmsPluginsFilterList</a>

---

##### `jms_plugin_collection`<sup>Required</sup> <a name="jms_plugin_collection" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.jmsPluginCollection"></a>

```python
jms_plugin_collection: DataOciJmsJmsPluginsJmsPluginCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList">DataOciJmsJmsPluginsJmsPluginCollectionList</a>

---

##### `agent_id_input`<sup>Optional</sup> <a name="agent_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.agentIdInput"></a>

```python
agent_id_input: str
```

- *Type:* str

---

##### `availability_status_input`<sup>Optional</sup> <a name="availability_status_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.availabilityStatusInput"></a>

```python
availability_status_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciJmsJmsPluginsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter">DataOciJmsJmsPluginsFilter</a>]]

---

##### `fleet_id_input`<sup>Optional</sup> <a name="fleet_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.fleetIdInput"></a>

```python
fleet_id_input: str
```

- *Type:* str

---

##### `hostname_contains_input`<sup>Optional</sup> <a name="hostname_contains_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.hostnameContainsInput"></a>

```python
hostname_contains_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `time_last_seen_less_than_or_equal_to_input`<sup>Optional</sup> <a name="time_last_seen_less_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.timeLastSeenLessThanOrEqualToInput"></a>

```python
time_last_seen_less_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_registered_less_than_or_equal_to_input`<sup>Optional</sup> <a name="time_registered_less_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.timeRegisteredLessThanOrEqualToInput"></a>

```python
time_registered_less_than_or_equal_to_input: str
```

- *Type:* str

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `availability_status`<sup>Required</sup> <a name="availability_status" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `hostname_contains`<sup>Required</sup> <a name="hostname_contains" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.hostnameContains"></a>

```python
hostname_contains: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_last_seen_less_than_or_equal_to`<sup>Required</sup> <a name="time_last_seen_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.timeLastSeenLessThanOrEqualTo"></a>

```python
time_last_seen_less_than_or_equal_to: str
```

- *Type:* str

---

##### `time_registered_less_than_or_equal_to`<sup>Required</sup> <a name="time_registered_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.timeRegisteredLessThanOrEqualTo"></a>

```python
time_registered_less_than_or_equal_to: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPlugins.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsJmsPluginsConfig <a name="DataOciJmsJmsPluginsConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_jms_plugins

dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_id: str = None,
  availability_status: str = None,
  compartment_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsJmsPluginsFilter]] = None,
  fleet_id: str = None,
  hostname_contains: str = None,
  id: str = None,
  state: str = None,
  time_last_seen_less_than_or_equal_to: str = None,
  time_registered_less_than_or_equal_to: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#agent_id DataOciJmsJmsPlugins#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.availabilityStatus">availability_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#availability_status DataOciJmsJmsPlugins#availability_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#compartment_id DataOciJmsJmsPlugins#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#compartment_id_in_subtree DataOciJmsJmsPlugins#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter">DataOciJmsJmsPluginsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#fleet_id DataOciJmsJmsPlugins#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.hostnameContains">hostname_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#hostname_contains DataOciJmsJmsPlugins#hostname_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#id DataOciJmsJmsPlugins#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#state DataOciJmsJmsPlugins#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.timeLastSeenLessThanOrEqualTo">time_last_seen_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#time_last_seen_less_than_or_equal_to DataOciJmsJmsPlugins#time_last_seen_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.timeRegisteredLessThanOrEqualTo">time_registered_less_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#time_registered_less_than_or_equal_to DataOciJmsJmsPlugins#time_registered_less_than_or_equal_to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_id`<sup>Optional</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#agent_id DataOciJmsJmsPlugins#agent_id}.

---

##### `availability_status`<sup>Optional</sup> <a name="availability_status" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#availability_status DataOciJmsJmsPlugins#availability_status}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#compartment_id DataOciJmsJmsPlugins#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#compartment_id_in_subtree DataOciJmsJmsPlugins#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciJmsJmsPluginsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter">DataOciJmsJmsPluginsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#filter DataOciJmsJmsPlugins#filter}

---

##### `fleet_id`<sup>Optional</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#fleet_id DataOciJmsJmsPlugins#fleet_id}.

---

##### `hostname_contains`<sup>Optional</sup> <a name="hostname_contains" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.hostnameContains"></a>

```python
hostname_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#hostname_contains DataOciJmsJmsPlugins#hostname_contains}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#id DataOciJmsJmsPlugins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#state DataOciJmsJmsPlugins#state}.

---

##### `time_last_seen_less_than_or_equal_to`<sup>Optional</sup> <a name="time_last_seen_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.timeLastSeenLessThanOrEqualTo"></a>

```python
time_last_seen_less_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#time_last_seen_less_than_or_equal_to DataOciJmsJmsPlugins#time_last_seen_less_than_or_equal_to}.

---

##### `time_registered_less_than_or_equal_to`<sup>Optional</sup> <a name="time_registered_less_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsConfig.property.timeRegisteredLessThanOrEqualTo"></a>

```python
time_registered_less_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#time_registered_less_than_or_equal_to DataOciJmsJmsPlugins#time_registered_less_than_or_equal_to}.

---

### DataOciJmsJmsPluginsFilter <a name="DataOciJmsJmsPluginsFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_jms_plugins

dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#name DataOciJmsJmsPlugins#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#values DataOciJmsJmsPlugins#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#regex DataOciJmsJmsPlugins#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#name DataOciJmsJmsPlugins#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#values DataOciJmsJmsPlugins#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_jms_plugins#regex DataOciJmsJmsPlugins#regex}.

---

### DataOciJmsJmsPluginsJmsPluginCollection <a name="DataOciJmsJmsPluginsJmsPluginCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_jms_plugins

dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollection()
```


### DataOciJmsJmsPluginsJmsPluginCollectionItems <a name="DataOciJmsJmsPluginsJmsPluginCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_jms_plugins

dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsJmsPluginsFilterList <a name="DataOciJmsJmsPluginsFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_jms_plugins

dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJmsPluginsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter">DataOciJmsJmsPluginsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciJmsJmsPluginsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter">DataOciJmsJmsPluginsFilter</a>]]

---


### DataOciJmsJmsPluginsFilterOutputReference <a name="DataOciJmsJmsPluginsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_jms_plugins

dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter">DataOciJmsJmsPluginsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciJmsJmsPluginsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsFilter">DataOciJmsJmsPluginsFilter</a>]

---


### DataOciJmsJmsPluginsJmsPluginCollectionItemsList <a name="DataOciJmsJmsPluginsJmsPluginCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_jms_plugins

dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference <a name="DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_jms_plugins

dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.agentType">agent_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.availabilityStatus">availability_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.osArchitecture">os_architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.osDistribution">os_distribution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.pluginVersion">plugin_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.timeLastSeen">time_last_seen</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.timeRegistered">time_registered</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItems">DataOciJmsJmsPluginsJmsPluginCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `agent_type`<sup>Required</sup> <a name="agent_type" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.agentType"></a>

```python
agent_type: str
```

- *Type:* str

---

##### `availability_status`<sup>Required</sup> <a name="availability_status" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `os_architecture`<sup>Required</sup> <a name="os_architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.osArchitecture"></a>

```python
os_architecture: str
```

- *Type:* str

---

##### `os_distribution`<sup>Required</sup> <a name="os_distribution" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.osDistribution"></a>

```python
os_distribution: str
```

- *Type:* str

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `plugin_version`<sup>Required</sup> <a name="plugin_version" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.pluginVersion"></a>

```python
plugin_version: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_last_seen`<sup>Required</sup> <a name="time_last_seen" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.timeLastSeen"></a>

```python
time_last_seen: str
```

- *Type:* str

---

##### `time_registered`<sup>Required</sup> <a name="time_registered" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.timeRegistered"></a>

```python
time_registered: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJmsPluginsJmsPluginCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItems">DataOciJmsJmsPluginsJmsPluginCollectionItems</a>

---


### DataOciJmsJmsPluginsJmsPluginCollectionList <a name="DataOciJmsJmsPluginsJmsPluginCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_jms_plugins

dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsJmsPluginsJmsPluginCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsJmsPluginsJmsPluginCollectionOutputReference <a name="DataOciJmsJmsPluginsJmsPluginCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_jms_plugins

dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList">DataOciJmsJmsPluginsJmsPluginCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollection">DataOciJmsJmsPluginsJmsPluginCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.property.items"></a>

```python
items: DataOciJmsJmsPluginsJmsPluginCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionItemsList">DataOciJmsJmsPluginsJmsPluginCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsJmsPluginsJmsPluginCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsJmsPlugins.DataOciJmsJmsPluginsJmsPluginCollection">DataOciJmsJmsPluginsJmsPluginCollection</a>

---



