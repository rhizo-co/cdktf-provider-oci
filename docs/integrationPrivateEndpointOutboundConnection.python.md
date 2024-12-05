# `integrationPrivateEndpointOutboundConnection` Submodule <a name="`integrationPrivateEndpointOutboundConnection` Submodule" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationPrivateEndpointOutboundConnection <a name="IntegrationPrivateEndpointOutboundConnection" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection oci_integration_private_endpoint_outbound_connection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import integration_private_endpoint_outbound_connection

integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  integration_instance_id: str,
  subnet_id: str,
  id: str = None,
  nsg_ids: typing.List[str] = None,
  state: str = None,
  timeouts: IntegrationPrivateEndpointOutboundConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.integrationInstanceId">integration_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#integration_instance_id IntegrationPrivateEndpointOutboundConnection#integration_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#subnet_id IntegrationPrivateEndpointOutboundConnection#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#id IntegrationPrivateEndpointOutboundConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#nsg_ids IntegrationPrivateEndpointOutboundConnection#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#state IntegrationPrivateEndpointOutboundConnection#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `integration_instance_id`<sup>Required</sup> <a name="integration_instance_id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.integrationInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#integration_instance_id IntegrationPrivateEndpointOutboundConnection#integration_instance_id}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#subnet_id IntegrationPrivateEndpointOutboundConnection#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#id IntegrationPrivateEndpointOutboundConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#nsg_ids IntegrationPrivateEndpointOutboundConnection#nsg_ids}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#state IntegrationPrivateEndpointOutboundConnection#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#timeouts IntegrationPrivateEndpointOutboundConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#create IntegrationPrivateEndpointOutboundConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#delete IntegrationPrivateEndpointOutboundConnection#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#update IntegrationPrivateEndpointOutboundConnection#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationPrivateEndpointOutboundConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import integration_private_endpoint_outbound_connection

integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import integration_private_endpoint_outbound_connection

integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import integration_private_endpoint_outbound_connection

integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import integration_private_endpoint_outbound_connection

integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationPrivateEndpointOutboundConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationPrivateEndpointOutboundConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationPrivateEndpointOutboundConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationPrivateEndpointOutboundConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference">IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.integrationInstanceIdInput">integration_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.integrationInstanceId">integration_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.timeouts"></a>

```python
timeouts: IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference">IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_instance_id_input`<sup>Optional</sup> <a name="integration_instance_id_input" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.integrationInstanceIdInput"></a>

```python
integration_instance_id_input: str
```

- *Type:* str

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IntegrationPrivateEndpointOutboundConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_instance_id`<sup>Required</sup> <a name="integration_instance_id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.integrationInstanceId"></a>

```python
integration_instance_id: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationPrivateEndpointOutboundConnectionConfig <a name="IntegrationPrivateEndpointOutboundConnectionConfig" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import integration_private_endpoint_outbound_connection

integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  integration_instance_id: str,
  subnet_id: str,
  id: str = None,
  nsg_ids: typing.List[str] = None,
  state: str = None,
  timeouts: IntegrationPrivateEndpointOutboundConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.integrationInstanceId">integration_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#integration_instance_id IntegrationPrivateEndpointOutboundConnection#integration_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#subnet_id IntegrationPrivateEndpointOutboundConnection#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#id IntegrationPrivateEndpointOutboundConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#nsg_ids IntegrationPrivateEndpointOutboundConnection#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#state IntegrationPrivateEndpointOutboundConnection#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `integration_instance_id`<sup>Required</sup> <a name="integration_instance_id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.integrationInstanceId"></a>

```python
integration_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#integration_instance_id IntegrationPrivateEndpointOutboundConnection#integration_instance_id}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#subnet_id IntegrationPrivateEndpointOutboundConnection#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#id IntegrationPrivateEndpointOutboundConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#nsg_ids IntegrationPrivateEndpointOutboundConnection#nsg_ids}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#state IntegrationPrivateEndpointOutboundConnection#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionConfig.property.timeouts"></a>

```python
timeouts: IntegrationPrivateEndpointOutboundConnectionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#timeouts IntegrationPrivateEndpointOutboundConnection#timeouts}

---

### IntegrationPrivateEndpointOutboundConnectionTimeouts <a name="IntegrationPrivateEndpointOutboundConnectionTimeouts" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import integration_private_endpoint_outbound_connection

integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#create IntegrationPrivateEndpointOutboundConnection#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#delete IntegrationPrivateEndpointOutboundConnection#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#update IntegrationPrivateEndpointOutboundConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#create IntegrationPrivateEndpointOutboundConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#delete IntegrationPrivateEndpointOutboundConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_private_endpoint_outbound_connection#update IntegrationPrivateEndpointOutboundConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference <a name="IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import integration_private_endpoint_outbound_connection

integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IntegrationPrivateEndpointOutboundConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.integrationPrivateEndpointOutboundConnection.IntegrationPrivateEndpointOutboundConnectionTimeouts">IntegrationPrivateEndpointOutboundConnectionTimeouts</a>]

---



