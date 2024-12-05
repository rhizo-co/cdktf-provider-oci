# `dataOciGoldenGateDeployments` Submodule <a name="`dataOciGoldenGateDeployments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateDeployments <a name="DataOciGoldenGateDeployments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments oci_golden_gate_deployments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeployments(
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
  assignable_connection_id: str = None,
  assigned_connection_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentsFilter]] = None,
  fqdn: str = None,
  id: str = None,
  lifecycle_sub_state: str = None,
  state: str = None,
  supported_connection_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#compartment_id DataOciGoldenGateDeployments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.assignableConnectionId">assignable_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#assignable_connection_id DataOciGoldenGateDeployments#assignable_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.assignedConnectionId">assigned_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#assigned_connection_id DataOciGoldenGateDeployments#assigned_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#display_name DataOciGoldenGateDeployments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter">DataOciGoldenGateDeploymentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.fqdn">fqdn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#fqdn DataOciGoldenGateDeployments#fqdn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#id DataOciGoldenGateDeployments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.lifecycleSubState">lifecycle_sub_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#lifecycle_sub_state DataOciGoldenGateDeployments#lifecycle_sub_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#state DataOciGoldenGateDeployments#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.supportedConnectionType">supported_connection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#supported_connection_type DataOciGoldenGateDeployments#supported_connection_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#compartment_id DataOciGoldenGateDeployments#compartment_id}.

---

##### `assignable_connection_id`<sup>Optional</sup> <a name="assignable_connection_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.assignableConnectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#assignable_connection_id DataOciGoldenGateDeployments#assignable_connection_id}.

---

##### `assigned_connection_id`<sup>Optional</sup> <a name="assigned_connection_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.assignedConnectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#assigned_connection_id DataOciGoldenGateDeployments#assigned_connection_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#display_name DataOciGoldenGateDeployments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter">DataOciGoldenGateDeploymentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#filter DataOciGoldenGateDeployments#filter}

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.fqdn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#fqdn DataOciGoldenGateDeployments#fqdn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#id DataOciGoldenGateDeployments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycle_sub_state`<sup>Optional</sup> <a name="lifecycle_sub_state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.lifecycleSubState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#lifecycle_sub_state DataOciGoldenGateDeployments#lifecycle_sub_state}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#state DataOciGoldenGateDeployments#state}.

---

##### `supported_connection_type`<sup>Optional</sup> <a name="supported_connection_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.Initializer.parameter.supportedConnectionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#supported_connection_type DataOciGoldenGateDeployments#supported_connection_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetAssignableConnectionId">reset_assignable_connection_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetAssignedConnectionId">reset_assigned_connection_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetFqdn">reset_fqdn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetLifecycleSubState">reset_lifecycle_sub_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetSupportedConnectionType">reset_supported_connection_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter">DataOciGoldenGateDeploymentsFilter</a>]]

---

##### `reset_assignable_connection_id` <a name="reset_assignable_connection_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetAssignableConnectionId"></a>

```python
def reset_assignable_connection_id() -> None
```

##### `reset_assigned_connection_id` <a name="reset_assigned_connection_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetAssignedConnectionId"></a>

```python
def reset_assigned_connection_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_fqdn` <a name="reset_fqdn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetFqdn"></a>

```python
def reset_fqdn() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lifecycle_sub_state` <a name="reset_lifecycle_sub_state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetLifecycleSubState"></a>

```python
def reset_lifecycle_sub_state() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_supported_connection_type` <a name="reset_supported_connection_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.resetSupportedConnectionType"></a>

```python
def reset_supported_connection_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciGoldenGateDeployments resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciGoldenGateDeployments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciGoldenGateDeployments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciGoldenGateDeployments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateDeployments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.deploymentCollection">deployment_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList">DataOciGoldenGateDeploymentsDeploymentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList">DataOciGoldenGateDeploymentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignableConnectionIdInput">assignable_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignedConnectionIdInput">assigned_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter">DataOciGoldenGateDeploymentsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.fqdnInput">fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.lifecycleSubStateInput">lifecycle_sub_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.supportedConnectionTypeInput">supported_connection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignableConnectionId">assignable_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignedConnectionId">assigned_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.lifecycleSubState">lifecycle_sub_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.supportedConnectionType">supported_connection_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `deployment_collection`<sup>Required</sup> <a name="deployment_collection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.deploymentCollection"></a>

```python
deployment_collection: DataOciGoldenGateDeploymentsDeploymentCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList">DataOciGoldenGateDeploymentsDeploymentCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.filter"></a>

```python
filter: DataOciGoldenGateDeploymentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList">DataOciGoldenGateDeploymentsFilterList</a>

---

##### `assignable_connection_id_input`<sup>Optional</sup> <a name="assignable_connection_id_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignableConnectionIdInput"></a>

```python
assignable_connection_id_input: str
```

- *Type:* str

---

##### `assigned_connection_id_input`<sup>Optional</sup> <a name="assigned_connection_id_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignedConnectionIdInput"></a>

```python
assigned_connection_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter">DataOciGoldenGateDeploymentsFilter</a>]]

---

##### `fqdn_input`<sup>Optional</sup> <a name="fqdn_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.fqdnInput"></a>

```python
fqdn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lifecycle_sub_state_input`<sup>Optional</sup> <a name="lifecycle_sub_state_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.lifecycleSubStateInput"></a>

```python
lifecycle_sub_state_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `supported_connection_type_input`<sup>Optional</sup> <a name="supported_connection_type_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.supportedConnectionTypeInput"></a>

```python
supported_connection_type_input: str
```

- *Type:* str

---

##### `assignable_connection_id`<sup>Required</sup> <a name="assignable_connection_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignableConnectionId"></a>

```python
assignable_connection_id: str
```

- *Type:* str

---

##### `assigned_connection_id`<sup>Required</sup> <a name="assigned_connection_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.assignedConnectionId"></a>

```python
assigned_connection_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_sub_state`<sup>Required</sup> <a name="lifecycle_sub_state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.lifecycleSubState"></a>

```python
lifecycle_sub_state: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `supported_connection_type`<sup>Required</sup> <a name="supported_connection_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.supportedConnectionType"></a>

```python
supported_connection_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeployments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateDeploymentsConfig <a name="DataOciGoldenGateDeploymentsConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  assignable_connection_id: str = None,
  assigned_connection_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentsFilter]] = None,
  fqdn: str = None,
  id: str = None,
  lifecycle_sub_state: str = None,
  state: str = None,
  supported_connection_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#compartment_id DataOciGoldenGateDeployments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.assignableConnectionId">assignable_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#assignable_connection_id DataOciGoldenGateDeployments#assignable_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.assignedConnectionId">assigned_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#assigned_connection_id DataOciGoldenGateDeployments#assigned_connection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#display_name DataOciGoldenGateDeployments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter">DataOciGoldenGateDeploymentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.fqdn">fqdn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#fqdn DataOciGoldenGateDeployments#fqdn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#id DataOciGoldenGateDeployments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.lifecycleSubState">lifecycle_sub_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#lifecycle_sub_state DataOciGoldenGateDeployments#lifecycle_sub_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#state DataOciGoldenGateDeployments#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.supportedConnectionType">supported_connection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#supported_connection_type DataOciGoldenGateDeployments#supported_connection_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#compartment_id DataOciGoldenGateDeployments#compartment_id}.

---

##### `assignable_connection_id`<sup>Optional</sup> <a name="assignable_connection_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.assignableConnectionId"></a>

```python
assignable_connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#assignable_connection_id DataOciGoldenGateDeployments#assignable_connection_id}.

---

##### `assigned_connection_id`<sup>Optional</sup> <a name="assigned_connection_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.assignedConnectionId"></a>

```python
assigned_connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#assigned_connection_id DataOciGoldenGateDeployments#assigned_connection_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#display_name DataOciGoldenGateDeployments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter">DataOciGoldenGateDeploymentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#filter DataOciGoldenGateDeployments#filter}

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#fqdn DataOciGoldenGateDeployments#fqdn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#id DataOciGoldenGateDeployments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycle_sub_state`<sup>Optional</sup> <a name="lifecycle_sub_state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.lifecycleSubState"></a>

```python
lifecycle_sub_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#lifecycle_sub_state DataOciGoldenGateDeployments#lifecycle_sub_state}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#state DataOciGoldenGateDeployments#state}.

---

##### `supported_connection_type`<sup>Optional</sup> <a name="supported_connection_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsConfig.property.supportedConnectionType"></a>

```python
supported_connection_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#supported_connection_type DataOciGoldenGateDeployments#supported_connection_type}.

---

### DataOciGoldenGateDeploymentsDeploymentCollection <a name="DataOciGoldenGateDeploymentsDeploymentCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollection()
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItems <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItems()
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData()
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps()
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks()
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration()
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow()
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData()
```


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping()
```


### DataOciGoldenGateDeploymentsFilter <a name="DataOciGoldenGateDeploymentsFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#name DataOciGoldenGateDeployments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#values DataOciGoldenGateDeployments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#regex DataOciGoldenGateDeployments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#name DataOciGoldenGateDeployments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#values DataOciGoldenGateDeployments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployments#regex DataOciGoldenGateDeployments#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.diagnosticState">diagnostic_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.timeDiagnosticEnd">time_diagnostic_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.timeDiagnosticStart">time_diagnostic_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData">DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `diagnostic_state`<sup>Required</sup> <a name="diagnostic_state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.diagnosticState"></a>

```python
diagnostic_state: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `time_diagnostic_end`<sup>Required</sup> <a name="time_diagnostic_end" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.timeDiagnosticEnd"></a>

```python
time_diagnostic_end: str
```

- *Type:* str

---

##### `time_diagnostic_start`<sup>Required</sup> <a name="time_diagnostic_start" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.timeDiagnosticStart"></a>

```python
time_diagnostic_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData">DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticData</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.ingressIp">ingress_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps">DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingress_ip`<sup>Required</sup> <a name="ingress_ip" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.ingressIp"></a>

```python
ingress_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps">DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIps</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks">DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks">DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocks</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDays">bundle_release_upgrade_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDays">interim_release_upgrade_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabled">is_interim_release_auto_upgrade_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDays">major_release_upgrade_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDays">security_patch_upgrade_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bundle_release_upgrade_period_in_days`<sup>Required</sup> <a name="bundle_release_upgrade_period_in_days" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDays"></a>

```python
bundle_release_upgrade_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interim_release_upgrade_period_in_days`<sup>Required</sup> <a name="interim_release_upgrade_period_in_days" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDays"></a>

```python
interim_release_upgrade_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_interim_release_auto_upgrade_enabled`<sup>Required</sup> <a name="is_interim_release_auto_upgrade_enabled" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabled"></a>

```python
is_interim_release_auto_upgrade_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `major_release_upgrade_period_in_days`<sup>Required</sup> <a name="major_release_upgrade_period_in_days" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDays"></a>

```python
major_release_upgrade_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_patch_upgrade_period_in_days`<sup>Required</sup> <a name="security_patch_upgrade_period_in_days" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDays"></a>

```python
security_patch_upgrade_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfiguration</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.day">day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.startHour">start_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day`<sup>Required</sup> <a name="day" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.day"></a>

```python
day: str
```

- *Type:* str

---

##### `start_hour`<sup>Required</sup> <a name="start_hour" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.startHour"></a>

```python
start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindow</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.administratorGroupId">administrator_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.operatorGroupId">operator_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.userGroupId">user_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `administrator_group_id`<sup>Required</sup> <a name="administrator_group_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.administratorGroupId"></a>

```python
administrator_group_id: str
```

- *Type:* str

---

##### `operator_group_id`<sup>Required</sup> <a name="operator_group_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.operatorGroupId"></a>

```python
operator_group_id: str
```

- *Type:* str

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `user_group_id`<sup>Required</sup> <a name="user_group_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.userGroupId"></a>

```python
user_group_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMapping</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.credentialStore">credential_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.deploymentName">deployment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.groupToRolesMapping">group_to_roles_mapping</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.identityDomainId">identity_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.oggVersion">ogg_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `credential_store`<sup>Required</sup> <a name="credential_store" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.credentialStore"></a>

```python
credential_store: str
```

- *Type:* str

---

##### `deployment_name`<sup>Required</sup> <a name="deployment_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.deploymentName"></a>

```python
deployment_name: str
```

- *Type:* str

---

##### `group_to_roles_mapping`<sup>Required</sup> <a name="group_to_roles_mapping" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.groupToRolesMapping"></a>

```python
group_to_roles_mapping: DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataGroupToRolesMappingList</a>

---

##### `identity_domain_id`<sup>Required</sup> <a name="identity_domain_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.identityDomainId"></a>

```python
identity_domain_id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `ogg_version`<sup>Required</sup> <a name="ogg_version" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.oggVersion"></a>

```python
ogg_version: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggData</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentBackupId">deployment_backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentDiagnosticData">deployment_diagnostic_data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentUrl">deployment_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.environmentType">environment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.ingressIps">ingress_ips</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isAutoScalingEnabled">is_auto_scaling_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isHealthy">is_healthy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isLatestVersion">is_latest_version</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isLockOverride">is_lock_override</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isPublic">is_public</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isStorageUtilizationLimitExceeded">is_storage_utilization_limit_exceeded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.lifecycleSubState">lifecycle_sub_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.loadBalancerId">load_balancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.loadBalancerSubnetId">load_balancer_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.maintenanceConfiguration">maintenance_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.nextMaintenanceActionType">next_maintenance_action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.nextMaintenanceDescription">next_maintenance_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.oggData">ogg_data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.publicIpAddress">public_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.storageUtilizationInBytes">storage_utilization_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeOfNextMaintenance">time_of_next_maintenance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeOggVersionSupportedUntil">time_ogg_version_supported_until</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeUpgradeRequired">time_upgrade_required</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItems">DataOciGoldenGateDeploymentsDeploymentCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `deployment_backup_id`<sup>Required</sup> <a name="deployment_backup_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentBackupId"></a>

```python
deployment_backup_id: str
```

- *Type:* str

---

##### `deployment_diagnostic_data`<sup>Required</sup> <a name="deployment_diagnostic_data" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentDiagnosticData"></a>

```python
deployment_diagnostic_data: DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsDeploymentDiagnosticDataList</a>

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `deployment_url`<sup>Required</sup> <a name="deployment_url" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.deploymentUrl"></a>

```python
deployment_url: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `environment_type`<sup>Required</sup> <a name="environment_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.environmentType"></a>

```python
environment_type: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingress_ips`<sup>Required</sup> <a name="ingress_ips" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.ingressIps"></a>

```python
ingress_ips: DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsIngressIpsList</a>

---

##### `is_auto_scaling_enabled`<sup>Required</sup> <a name="is_auto_scaling_enabled" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isAutoScalingEnabled"></a>

```python
is_auto_scaling_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_healthy`<sup>Required</sup> <a name="is_healthy" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isHealthy"></a>

```python
is_healthy: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_latest_version`<sup>Required</sup> <a name="is_latest_version" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isLatestVersion"></a>

```python
is_latest_version: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isLockOverride"></a>

```python
is_lock_override: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_public`<sup>Required</sup> <a name="is_public" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isPublic"></a>

```python
is_public: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_storage_utilization_limit_exceeded`<sup>Required</sup> <a name="is_storage_utilization_limit_exceeded" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.isStorageUtilizationLimitExceeded"></a>

```python
is_storage_utilization_limit_exceeded: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `lifecycle_sub_state`<sup>Required</sup> <a name="lifecycle_sub_state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.lifecycleSubState"></a>

```python
lifecycle_sub_state: str
```

- *Type:* str

---

##### `load_balancer_id`<sup>Required</sup> <a name="load_balancer_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.loadBalancerId"></a>

```python
load_balancer_id: str
```

- *Type:* str

---

##### `load_balancer_subnet_id`<sup>Required</sup> <a name="load_balancer_subnet_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.loadBalancerSubnetId"></a>

```python
load_balancer_subnet_id: str
```

- *Type:* str

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.locks"></a>

```python
locks: DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsLocksList</a>

---

##### `maintenance_configuration`<sup>Required</sup> <a name="maintenance_configuration" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.maintenanceConfiguration"></a>

```python
maintenance_configuration: DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceConfigurationList</a>

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.maintenanceWindow"></a>

```python
maintenance_window: DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsMaintenanceWindowList</a>

---

##### `next_maintenance_action_type`<sup>Required</sup> <a name="next_maintenance_action_type" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.nextMaintenanceActionType"></a>

```python
next_maintenance_action_type: str
```

- *Type:* str

---

##### `next_maintenance_description`<sup>Required</sup> <a name="next_maintenance_description" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.nextMaintenanceDescription"></a>

```python
next_maintenance_description: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ogg_data`<sup>Required</sup> <a name="ogg_data" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.oggData"></a>

```python
ogg_data: DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsOggDataList</a>

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `public_ip_address`<sup>Required</sup> <a name="public_ip_address" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.publicIpAddress"></a>

```python
public_ip_address: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_utilization_in_bytes`<sup>Required</sup> <a name="storage_utilization_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.storageUtilizationInBytes"></a>

```python
storage_utilization_in_bytes: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_of_next_maintenance`<sup>Required</sup> <a name="time_of_next_maintenance" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeOfNextMaintenance"></a>

```python
time_of_next_maintenance: str
```

- *Type:* str

---

##### `time_ogg_version_supported_until`<sup>Required</sup> <a name="time_ogg_version_supported_until" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeOggVersionSupportedUntil"></a>

```python
time_ogg_version_supported_until: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `time_upgrade_required`<sup>Required</sup> <a name="time_upgrade_required" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.timeUpgradeRequired"></a>

```python
time_upgrade_required: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateDeploymentsDeploymentCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItems">DataOciGoldenGateDeploymentsDeploymentCollectionItems</a>

---


### DataOciGoldenGateDeploymentsDeploymentCollectionList <a name="DataOciGoldenGateDeploymentsDeploymentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference <a name="DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollection">DataOciGoldenGateDeploymentsDeploymentCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.items"></a>

```python
items: DataOciGoldenGateDeploymentsDeploymentCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionItemsList">DataOciGoldenGateDeploymentsDeploymentCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciGoldenGateDeploymentsDeploymentCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsDeploymentCollection">DataOciGoldenGateDeploymentsDeploymentCollection</a>

---


### DataOciGoldenGateDeploymentsFilterList <a name="DataOciGoldenGateDeploymentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciGoldenGateDeploymentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter">DataOciGoldenGateDeploymentsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciGoldenGateDeploymentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter">DataOciGoldenGateDeploymentsFilter</a>]]

---


### DataOciGoldenGateDeploymentsFilterOutputReference <a name="DataOciGoldenGateDeploymentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_golden_gate_deployments

dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter">DataOciGoldenGateDeploymentsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciGoldenGateDeploymentsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeployments.DataOciGoldenGateDeploymentsFilter">DataOciGoldenGateDeploymentsFilter</a>]

---



