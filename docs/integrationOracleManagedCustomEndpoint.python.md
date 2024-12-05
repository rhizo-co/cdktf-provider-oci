# `integrationOracleManagedCustomEndpoint` Submodule <a name="`integrationOracleManagedCustomEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationOracleManagedCustomEndpoint <a name="IntegrationOracleManagedCustomEndpoint" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint oci_integration_oracle_managed_custom_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import integration_oracle_managed_custom_endpoint

integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hostname: str,
  integration_instance_id: str,
  dns_type: str = None,
  dns_zone_name: str = None,
  id: str = None,
  managed_type: str = None,
  state: str = None,
  timeouts: IntegrationOracleManagedCustomEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#hostname IntegrationOracleManagedCustomEndpoint#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.integrationInstanceId">integration_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#integration_instance_id IntegrationOracleManagedCustomEndpoint#integration_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.dnsType">dns_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_type IntegrationOracleManagedCustomEndpoint#dns_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.dnsZoneName">dns_zone_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_zone_name IntegrationOracleManagedCustomEndpoint#dns_zone_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#id IntegrationOracleManagedCustomEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.managedType">managed_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#managed_type IntegrationOracleManagedCustomEndpoint#managed_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#state IntegrationOracleManagedCustomEndpoint#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.hostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#hostname IntegrationOracleManagedCustomEndpoint#hostname}.

---

##### `integration_instance_id`<sup>Required</sup> <a name="integration_instance_id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.integrationInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#integration_instance_id IntegrationOracleManagedCustomEndpoint#integration_instance_id}.

---

##### `dns_type`<sup>Optional</sup> <a name="dns_type" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.dnsType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_type IntegrationOracleManagedCustomEndpoint#dns_type}.

---

##### `dns_zone_name`<sup>Optional</sup> <a name="dns_zone_name" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.dnsZoneName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_zone_name IntegrationOracleManagedCustomEndpoint#dns_zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#id IntegrationOracleManagedCustomEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_type`<sup>Optional</sup> <a name="managed_type" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.managedType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#managed_type IntegrationOracleManagedCustomEndpoint#managed_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#state IntegrationOracleManagedCustomEndpoint#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#timeouts IntegrationOracleManagedCustomEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetDnsType">reset_dns_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetDnsZoneName">reset_dns_zone_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetManagedType">reset_managed_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#create IntegrationOracleManagedCustomEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#delete IntegrationOracleManagedCustomEndpoint#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#update IntegrationOracleManagedCustomEndpoint#update}.

---

##### `reset_dns_type` <a name="reset_dns_type" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetDnsType"></a>

```python
def reset_dns_type() -> None
```

##### `reset_dns_zone_name` <a name="reset_dns_zone_name" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetDnsZoneName"></a>

```python
def reset_dns_zone_name() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_managed_type` <a name="reset_managed_type" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetManagedType"></a>

```python
def reset_managed_type() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IntegrationOracleManagedCustomEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import integration_oracle_managed_custom_endpoint

integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import integration_oracle_managed_custom_endpoint

integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import integration_oracle_managed_custom_endpoint

integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import integration_oracle_managed_custom_endpoint

integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IntegrationOracleManagedCustomEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IntegrationOracleManagedCustomEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IntegrationOracleManagedCustomEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationOracleManagedCustomEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference">IntegrationOracleManagedCustomEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsTypeInput">dns_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsZoneNameInput">dns_zone_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.integrationInstanceIdInput">integration_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.managedTypeInput">managed_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsType">dns_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsZoneName">dns_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.integrationInstanceId">integration_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.managedType">managed_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.timeouts"></a>

```python
timeouts: IntegrationOracleManagedCustomEndpointTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference">IntegrationOracleManagedCustomEndpointTimeoutsOutputReference</a>

---

##### `dns_type_input`<sup>Optional</sup> <a name="dns_type_input" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsTypeInput"></a>

```python
dns_type_input: str
```

- *Type:* str

---

##### `dns_zone_name_input`<sup>Optional</sup> <a name="dns_zone_name_input" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsZoneNameInput"></a>

```python
dns_zone_name_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_instance_id_input`<sup>Optional</sup> <a name="integration_instance_id_input" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.integrationInstanceIdInput"></a>

```python
integration_instance_id_input: str
```

- *Type:* str

---

##### `managed_type_input`<sup>Optional</sup> <a name="managed_type_input" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.managedTypeInput"></a>

```python
managed_type_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IntegrationOracleManagedCustomEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a>]

---

##### `dns_type`<sup>Required</sup> <a name="dns_type" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsType"></a>

```python
dns_type: str
```

- *Type:* str

---

##### `dns_zone_name`<sup>Required</sup> <a name="dns_zone_name" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsZoneName"></a>

```python
dns_zone_name: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_instance_id`<sup>Required</sup> <a name="integration_instance_id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.integrationInstanceId"></a>

```python
integration_instance_id: str
```

- *Type:* str

---

##### `managed_type`<sup>Required</sup> <a name="managed_type" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.managedType"></a>

```python
managed_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationOracleManagedCustomEndpointConfig <a name="IntegrationOracleManagedCustomEndpointConfig" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import integration_oracle_managed_custom_endpoint

integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  hostname: str,
  integration_instance_id: str,
  dns_type: str = None,
  dns_zone_name: str = None,
  id: str = None,
  managed_type: str = None,
  state: str = None,
  timeouts: IntegrationOracleManagedCustomEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#hostname IntegrationOracleManagedCustomEndpoint#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.integrationInstanceId">integration_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#integration_instance_id IntegrationOracleManagedCustomEndpoint#integration_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dnsType">dns_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_type IntegrationOracleManagedCustomEndpoint#dns_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dnsZoneName">dns_zone_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_zone_name IntegrationOracleManagedCustomEndpoint#dns_zone_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#id IntegrationOracleManagedCustomEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.managedType">managed_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#managed_type IntegrationOracleManagedCustomEndpoint#managed_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#state IntegrationOracleManagedCustomEndpoint#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#hostname IntegrationOracleManagedCustomEndpoint#hostname}.

---

##### `integration_instance_id`<sup>Required</sup> <a name="integration_instance_id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.integrationInstanceId"></a>

```python
integration_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#integration_instance_id IntegrationOracleManagedCustomEndpoint#integration_instance_id}.

---

##### `dns_type`<sup>Optional</sup> <a name="dns_type" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dnsType"></a>

```python
dns_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_type IntegrationOracleManagedCustomEndpoint#dns_type}.

---

##### `dns_zone_name`<sup>Optional</sup> <a name="dns_zone_name" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dnsZoneName"></a>

```python
dns_zone_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_zone_name IntegrationOracleManagedCustomEndpoint#dns_zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#id IntegrationOracleManagedCustomEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_type`<sup>Optional</sup> <a name="managed_type" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.managedType"></a>

```python
managed_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#managed_type IntegrationOracleManagedCustomEndpoint#managed_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#state IntegrationOracleManagedCustomEndpoint#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.timeouts"></a>

```python
timeouts: IntegrationOracleManagedCustomEndpointTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#timeouts IntegrationOracleManagedCustomEndpoint#timeouts}

---

### IntegrationOracleManagedCustomEndpointTimeouts <a name="IntegrationOracleManagedCustomEndpointTimeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import integration_oracle_managed_custom_endpoint

integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#create IntegrationOracleManagedCustomEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#delete IntegrationOracleManagedCustomEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#update IntegrationOracleManagedCustomEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#create IntegrationOracleManagedCustomEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#delete IntegrationOracleManagedCustomEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#update IntegrationOracleManagedCustomEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationOracleManagedCustomEndpointTimeoutsOutputReference <a name="IntegrationOracleManagedCustomEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import integration_oracle_managed_custom_endpoint

integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IntegrationOracleManagedCustomEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a>]

---



