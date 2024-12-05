# `dataOciCloudBridgeAgentDependencies` Submodule <a name="`dataOciCloudBridgeAgentDependencies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudBridgeAgentDependencies <a name="DataOciCloudBridgeAgentDependencies" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies oci_cloud_bridge_agent_dependencies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_agent_dependencies

dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies(
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
  agent_id: str = None,
  display_name: str = None,
  environment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCloudBridgeAgentDependenciesFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#compartment_id DataOciCloudBridgeAgentDependencies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#agent_id DataOciCloudBridgeAgentDependencies#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#display_name DataOciCloudBridgeAgentDependencies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.environmentId">environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#environment_id DataOciCloudBridgeAgentDependencies#environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilter">DataOciCloudBridgeAgentDependenciesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#id DataOciCloudBridgeAgentDependencies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#state DataOciCloudBridgeAgentDependencies#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#compartment_id DataOciCloudBridgeAgentDependencies#compartment_id}.

---

##### `agent_id`<sup>Optional</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.agentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#agent_id DataOciCloudBridgeAgentDependencies#agent_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#display_name DataOciCloudBridgeAgentDependencies#display_name}.

---

##### `environment_id`<sup>Optional</sup> <a name="environment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.environmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#environment_id DataOciCloudBridgeAgentDependencies#environment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilter">DataOciCloudBridgeAgentDependenciesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#filter DataOciCloudBridgeAgentDependencies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#id DataOciCloudBridgeAgentDependencies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#state DataOciCloudBridgeAgentDependencies#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.resetAgentId">reset_agent_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.resetEnvironmentId">reset_environment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCloudBridgeAgentDependenciesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilter">DataOciCloudBridgeAgentDependenciesFilter</a>]]

---

##### `reset_agent_id` <a name="reset_agent_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.resetAgentId"></a>

```python
def reset_agent_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_environment_id` <a name="reset_environment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.resetEnvironmentId"></a>

```python
def reset_environment_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCloudBridgeAgentDependencies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_agent_dependencies

dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_agent_dependencies

dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_agent_dependencies

dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_agent_dependencies

dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCloudBridgeAgentDependencies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCloudBridgeAgentDependencies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCloudBridgeAgentDependencies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudBridgeAgentDependencies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.agentDependencyCollection">agent_dependency_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList">DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList">DataOciCloudBridgeAgentDependenciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.agentIdInput">agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.environmentIdInput">environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilter">DataOciCloudBridgeAgentDependenciesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `agent_dependency_collection`<sup>Required</sup> <a name="agent_dependency_collection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.agentDependencyCollection"></a>

```python
agent_dependency_collection: DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList">DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.filter"></a>

```python
filter: DataOciCloudBridgeAgentDependenciesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList">DataOciCloudBridgeAgentDependenciesFilterList</a>

---

##### `agent_id_input`<sup>Optional</sup> <a name="agent_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.agentIdInput"></a>

```python
agent_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `environment_id_input`<sup>Optional</sup> <a name="environment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.environmentIdInput"></a>

```python
environment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCloudBridgeAgentDependenciesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilter">DataOciCloudBridgeAgentDependenciesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependencies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudBridgeAgentDependenciesAgentDependencyCollection <a name="DataOciCloudBridgeAgentDependenciesAgentDependencyCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_agent_dependencies

dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollection()
```


### DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItems <a name="DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_agent_dependencies

dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItems()
```


### DataOciCloudBridgeAgentDependenciesConfig <a name="DataOciCloudBridgeAgentDependenciesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_agent_dependencies

dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  agent_id: str = None,
  display_name: str = None,
  environment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCloudBridgeAgentDependenciesFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#compartment_id DataOciCloudBridgeAgentDependencies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#agent_id DataOciCloudBridgeAgentDependencies#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#display_name DataOciCloudBridgeAgentDependencies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.environmentId">environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#environment_id DataOciCloudBridgeAgentDependencies#environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilter">DataOciCloudBridgeAgentDependenciesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#id DataOciCloudBridgeAgentDependencies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#state DataOciCloudBridgeAgentDependencies#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#compartment_id DataOciCloudBridgeAgentDependencies#compartment_id}.

---

##### `agent_id`<sup>Optional</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#agent_id DataOciCloudBridgeAgentDependencies#agent_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#display_name DataOciCloudBridgeAgentDependencies#display_name}.

---

##### `environment_id`<sup>Optional</sup> <a name="environment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#environment_id DataOciCloudBridgeAgentDependencies#environment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCloudBridgeAgentDependenciesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilter">DataOciCloudBridgeAgentDependenciesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#filter DataOciCloudBridgeAgentDependencies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#id DataOciCloudBridgeAgentDependencies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#state DataOciCloudBridgeAgentDependencies#state}.

---

### DataOciCloudBridgeAgentDependenciesFilter <a name="DataOciCloudBridgeAgentDependenciesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_agent_dependencies

dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#name DataOciCloudBridgeAgentDependencies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#values DataOciCloudBridgeAgentDependencies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#regex DataOciCloudBridgeAgentDependencies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#name DataOciCloudBridgeAgentDependencies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#values DataOciCloudBridgeAgentDependencies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependencies#regex DataOciCloudBridgeAgentDependencies#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList <a name="DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_agent_dependencies

dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference <a name="DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_agent_dependencies

dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.checksum">checksum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.dependencyName">dependency_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.dependencyVersion">dependency_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.eTag">e_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItems">DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.checksum"></a>

```python
checksum: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `dependency_name`<sup>Required</sup> <a name="dependency_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.dependencyName"></a>

```python
dependency_name: str
```

- *Type:* str

---

##### `dependency_version`<sup>Required</sup> <a name="dependency_version" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.dependencyVersion"></a>

```python
dependency_version: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `e_tag`<sup>Required</sup> <a name="e_tag" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.eTag"></a>

```python
e_tag: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItems">DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItems</a>

---


### DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList <a name="DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_agent_dependencies

dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference <a name="DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_agent_dependencies

dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList">DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollection">DataOciCloudBridgeAgentDependenciesAgentDependencyCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.property.items"></a>

```python
items: DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList">DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudBridgeAgentDependenciesAgentDependencyCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesAgentDependencyCollection">DataOciCloudBridgeAgentDependenciesAgentDependencyCollection</a>

---


### DataOciCloudBridgeAgentDependenciesFilterList <a name="DataOciCloudBridgeAgentDependenciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_agent_dependencies

dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudBridgeAgentDependenciesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilter">DataOciCloudBridgeAgentDependenciesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCloudBridgeAgentDependenciesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilter">DataOciCloudBridgeAgentDependenciesFilter</a>]]

---


### DataOciCloudBridgeAgentDependenciesFilterOutputReference <a name="DataOciCloudBridgeAgentDependenciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_bridge_agent_dependencies

dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilter">DataOciCloudBridgeAgentDependenciesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCloudBridgeAgentDependenciesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependencies.DataOciCloudBridgeAgentDependenciesFilter">DataOciCloudBridgeAgentDependenciesFilter</a>]

---



