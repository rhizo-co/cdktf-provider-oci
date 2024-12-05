# `dataOciDelegateAccessControlDelegatedResourceAccessRequests` Submodule <a name="`dataOciDelegateAccessControlDelegatedResourceAccessRequests` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequests <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequests" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests oci_delegate_access_control_delegated_resource_access_requests}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_requests

dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests(
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
  delegation_control_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter]] = None,
  id: str = None,
  request_status: str = None,
  resource_id: str = None,
  state: str = None,
  time_end: str = None,
  time_start: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#compartment_id DataOciDelegateAccessControlDelegatedResourceAccessRequests#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.delegationControlId">delegation_control_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#delegation_control_id DataOciDelegateAccessControlDelegatedResourceAccessRequests#delegation_control_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#id DataOciDelegateAccessControlDelegatedResourceAccessRequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.requestStatus">request_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#request_status DataOciDelegateAccessControlDelegatedResourceAccessRequests#request_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#resource_id DataOciDelegateAccessControlDelegatedResourceAccessRequests#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#state DataOciDelegateAccessControlDelegatedResourceAccessRequests#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.timeEnd">time_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#time_end DataOciDelegateAccessControlDelegatedResourceAccessRequests#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#time_start DataOciDelegateAccessControlDelegatedResourceAccessRequests#time_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#compartment_id DataOciDelegateAccessControlDelegatedResourceAccessRequests#compartment_id}.

---

##### `delegation_control_id`<sup>Optional</sup> <a name="delegation_control_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.delegationControlId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#delegation_control_id DataOciDelegateAccessControlDelegatedResourceAccessRequests#delegation_control_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#filter DataOciDelegateAccessControlDelegatedResourceAccessRequests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#id DataOciDelegateAccessControlDelegatedResourceAccessRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `request_status`<sup>Optional</sup> <a name="request_status" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.requestStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#request_status DataOciDelegateAccessControlDelegatedResourceAccessRequests#request_status}.

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#resource_id DataOciDelegateAccessControlDelegatedResourceAccessRequests#resource_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#state DataOciDelegateAccessControlDelegatedResourceAccessRequests#state}.

---

##### `time_end`<sup>Optional</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.timeEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#time_end DataOciDelegateAccessControlDelegatedResourceAccessRequests#time_end}.

---

##### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.Initializer.parameter.timeStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#time_start DataOciDelegateAccessControlDelegatedResourceAccessRequests#time_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetDelegationControlId">reset_delegation_control_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetRequestStatus">reset_request_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetResourceId">reset_resource_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetTimeEnd">reset_time_end</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetTimeStart">reset_time_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter</a>]]

---

##### `reset_delegation_control_id` <a name="reset_delegation_control_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetDelegationControlId"></a>

```python
def reset_delegation_control_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_request_status` <a name="reset_request_status" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetRequestStatus"></a>

```python
def reset_request_status() -> None
```

##### `reset_resource_id` <a name="reset_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetResourceId"></a>

```python
def reset_resource_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_time_end` <a name="reset_time_end" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetTimeEnd"></a>

```python
def reset_time_end() -> None
```

##### `reset_time_start` <a name="reset_time_start" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.resetTimeStart"></a>

```python
def reset_time_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDelegateAccessControlDelegatedResourceAccessRequests resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_requests

dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_requests

dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_requests

dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_requests

dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDelegateAccessControlDelegatedResourceAccessRequests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDelegateAccessControlDelegatedResourceAccessRequests to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDelegateAccessControlDelegatedResourceAccessRequests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDelegateAccessControlDelegatedResourceAccessRequests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.delegatedResourceAccessRequestSummaryCollection">delegated_resource_access_request_summary_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList">DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.delegationControlIdInput">delegation_control_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.requestStatusInput">request_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.timeEndInput">time_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.timeStartInput">time_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.delegationControlId">delegation_control_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.requestStatus">request_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `delegated_resource_access_request_summary_collection`<sup>Required</sup> <a name="delegated_resource_access_request_summary_collection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.delegatedResourceAccessRequestSummaryCollection"></a>

```python
delegated_resource_access_request_summary_collection: DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.filter"></a>

```python
filter: DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList">DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `delegation_control_id_input`<sup>Optional</sup> <a name="delegation_control_id_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.delegationControlIdInput"></a>

```python
delegation_control_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `request_status_input`<sup>Optional</sup> <a name="request_status_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.requestStatusInput"></a>

```python
request_status_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `time_end_input`<sup>Optional</sup> <a name="time_end_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.timeEndInput"></a>

```python
time_end_input: str
```

- *Type:* str

---

##### `time_start_input`<sup>Optional</sup> <a name="time_start_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.timeStartInput"></a>

```python
time_start_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `delegation_control_id`<sup>Required</sup> <a name="delegation_control_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.delegationControlId"></a>

```python
delegation_control_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `request_status`<sup>Required</sup> <a name="request_status" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.requestStatus"></a>

```python
request_status: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequests.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_requests

dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  delegation_control_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter]] = None,
  id: str = None,
  request_status: str = None,
  resource_id: str = None,
  state: str = None,
  time_end: str = None,
  time_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#compartment_id DataOciDelegateAccessControlDelegatedResourceAccessRequests#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.delegationControlId">delegation_control_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#delegation_control_id DataOciDelegateAccessControlDelegatedResourceAccessRequests#delegation_control_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#id DataOciDelegateAccessControlDelegatedResourceAccessRequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.requestStatus">request_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#request_status DataOciDelegateAccessControlDelegatedResourceAccessRequests#request_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#resource_id DataOciDelegateAccessControlDelegatedResourceAccessRequests#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#state DataOciDelegateAccessControlDelegatedResourceAccessRequests#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.timeEnd">time_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#time_end DataOciDelegateAccessControlDelegatedResourceAccessRequests#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#time_start DataOciDelegateAccessControlDelegatedResourceAccessRequests#time_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#compartment_id DataOciDelegateAccessControlDelegatedResourceAccessRequests#compartment_id}.

---

##### `delegation_control_id`<sup>Optional</sup> <a name="delegation_control_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.delegationControlId"></a>

```python
delegation_control_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#delegation_control_id DataOciDelegateAccessControlDelegatedResourceAccessRequests#delegation_control_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#filter DataOciDelegateAccessControlDelegatedResourceAccessRequests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#id DataOciDelegateAccessControlDelegatedResourceAccessRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `request_status`<sup>Optional</sup> <a name="request_status" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.requestStatus"></a>

```python
request_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#request_status DataOciDelegateAccessControlDelegatedResourceAccessRequests#request_status}.

---

##### `resource_id`<sup>Optional</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#resource_id DataOciDelegateAccessControlDelegatedResourceAccessRequests#resource_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#state DataOciDelegateAccessControlDelegatedResourceAccessRequests#state}.

---

##### `time_end`<sup>Optional</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#time_end DataOciDelegateAccessControlDelegatedResourceAccessRequests#time_end}.

---

##### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsConfig.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#time_start DataOciDelegateAccessControlDelegatedResourceAccessRequests#time_start}.

---

### DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_requests

dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection()
```


### DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_requests

dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems()
```


### DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_requests

dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo()
```


### DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_requests

dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#name DataOciDelegateAccessControlDelegatedResourceAccessRequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#values DataOciDelegateAccessControlDelegatedResourceAccessRequests#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#regex DataOciDelegateAccessControlDelegatedResourceAccessRequests#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#name DataOciDelegateAccessControlDelegatedResourceAccessRequests#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#values DataOciDelegateAccessControlDelegatedResourceAccessRequests#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_requests#regex DataOciDelegateAccessControlDelegatedResourceAccessRequests#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_requests

dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_requests

dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.approvalAction">approval_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.approvalType">approval_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.approverAdditionalMessage">approver_additional_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.approverComment">approver_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.approverId">approver_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.timeApprovedForAccess">time_approved_for_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approval_action`<sup>Required</sup> <a name="approval_action" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.approvalAction"></a>

```python
approval_action: str
```

- *Type:* str

---

##### `approval_type`<sup>Required</sup> <a name="approval_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.approvalType"></a>

```python
approval_type: str
```

- *Type:* str

---

##### `approver_additional_message`<sup>Required</sup> <a name="approver_additional_message" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.approverAdditionalMessage"></a>

```python
approver_additional_message: str
```

- *Type:* str

---

##### `approver_comment`<sup>Required</sup> <a name="approver_comment" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.approverComment"></a>

```python
approver_comment: str
```

- *Type:* str

---

##### `approver_id`<sup>Required</sup> <a name="approver_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.approverId"></a>

```python
approver_id: str
```

- *Type:* str

---

##### `time_approved_for_access`<sup>Required</sup> <a name="time_approved_for_access" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.timeApprovedForAccess"></a>

```python
time_approved_for_access: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfo</a>

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_requests

dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_requests

dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.approvalInfo">approval_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.auditTypes">audit_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.closureComment">closure_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.databaseNameList">database_name_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.delegationControlId">delegation_control_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.delegationSubscriptionIds">delegation_subscription_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.durationInHours">duration_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.extendDurationInHours">extend_duration_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.isAutoApproved">is_auto_approved</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.isPendingMoreInfo">is_pending_more_info</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.lifecycleStateDetails">lifecycle_state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.numExtensionApprovals">num_extension_approvals</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.numInitialApprovals">num_initial_approvals</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.providedServiceTypes">provided_service_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.reasonForRequest">reason_for_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.requestedActionNames">requested_action_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.requesterType">requester_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.requestStatus">request_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.ticketNumbers">ticket_numbers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.timeAccessRequested">time_access_requested</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approval_info`<sup>Required</sup> <a name="approval_info" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.approvalInfo"></a>

```python
approval_info: DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsApprovalInfoList</a>

---

##### `audit_types`<sup>Required</sup> <a name="audit_types" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.auditTypes"></a>

```python
audit_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `closure_comment`<sup>Required</sup> <a name="closure_comment" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.closureComment"></a>

```python
closure_comment: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `database_name_list`<sup>Required</sup> <a name="database_name_list" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.databaseNameList"></a>

```python
database_name_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `delegation_control_id`<sup>Required</sup> <a name="delegation_control_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.delegationControlId"></a>

```python
delegation_control_id: str
```

- *Type:* str

---

##### `delegation_subscription_ids`<sup>Required</sup> <a name="delegation_subscription_ids" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.delegationSubscriptionIds"></a>

```python
delegation_subscription_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `duration_in_hours`<sup>Required</sup> <a name="duration_in_hours" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.durationInHours"></a>

```python
duration_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extend_duration_in_hours`<sup>Required</sup> <a name="extend_duration_in_hours" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.extendDurationInHours"></a>

```python
extend_duration_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_auto_approved`<sup>Required</sup> <a name="is_auto_approved" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.isAutoApproved"></a>

```python
is_auto_approved: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_pending_more_info`<sup>Required</sup> <a name="is_pending_more_info" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.isPendingMoreInfo"></a>

```python
is_pending_more_info: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_state_details`<sup>Required</sup> <a name="lifecycle_state_details" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.lifecycleStateDetails"></a>

```python
lifecycle_state_details: str
```

- *Type:* str

---

##### `num_extension_approvals`<sup>Required</sup> <a name="num_extension_approvals" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.numExtensionApprovals"></a>

```python
num_extension_approvals: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_initial_approvals`<sup>Required</sup> <a name="num_initial_approvals" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.numInitialApprovals"></a>

```python
num_initial_approvals: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provided_service_types`<sup>Required</sup> <a name="provided_service_types" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.providedServiceTypes"></a>

```python
provided_service_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `reason_for_request`<sup>Required</sup> <a name="reason_for_request" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.reasonForRequest"></a>

```python
reason_for_request: str
```

- *Type:* str

---

##### `requested_action_names`<sup>Required</sup> <a name="requested_action_names" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.requestedActionNames"></a>

```python
requested_action_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `requester_type`<sup>Required</sup> <a name="requester_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.requesterType"></a>

```python
requester_type: str
```

- *Type:* str

---

##### `request_status`<sup>Required</sup> <a name="request_status" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.requestStatus"></a>

```python
request_status: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `ticket_numbers`<sup>Required</sup> <a name="ticket_numbers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.ticketNumbers"></a>

```python
ticket_numbers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_access_requested`<sup>Required</sup> <a name="time_access_requested" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.timeAccessRequested"></a>

```python
time_access_requested: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItems</a>

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_requests

dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_requests

dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.property.items"></a>

```python
items: DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection">DataOciDelegateAccessControlDelegatedResourceAccessRequestsDelegatedResourceAccessRequestSummaryCollection</a>

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_requests

dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter</a>]]

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_requests

dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequests.DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter">DataOciDelegateAccessControlDelegatedResourceAccessRequestsFilter</a>]

---



