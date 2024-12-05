# `bastionSession` Submodule <a name="`bastionSession` Submodule" id="rhizo-co-terraform-provider-oci.bastionSession"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BastionSession <a name="BastionSession" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session oci_bastion_session}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bastion_session

bastionSession.BastionSession(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bastion_id: str,
  key_details: BastionSessionKeyDetails,
  target_resource_details: BastionSessionTargetResourceDetails,
  display_name: str = None,
  id: str = None,
  key_type: str = None,
  session_ttl_in_seconds: typing.Union[int, float] = None,
  timeouts: BastionSessionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.bastionId">bastion_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#bastion_id BastionSession#bastion_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.keyDetails">key_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails">BastionSessionKeyDetails</a></code> | key_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.targetResourceDetails">target_resource_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails">BastionSessionTargetResourceDetails</a></code> | target_resource_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#display_name BastionSession#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#id BastionSession#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.keyType">key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#key_type BastionSession#key_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.sessionTtlInSeconds">session_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#session_ttl_in_seconds BastionSession#session_ttl_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts">BastionSessionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bastion_id`<sup>Required</sup> <a name="bastion_id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.bastionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#bastion_id BastionSession#bastion_id}.

---

##### `key_details`<sup>Required</sup> <a name="key_details" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.keyDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails">BastionSessionKeyDetails</a>

key_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#key_details BastionSession#key_details}

---

##### `target_resource_details`<sup>Required</sup> <a name="target_resource_details" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.targetResourceDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails">BastionSessionTargetResourceDetails</a>

target_resource_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_details BastionSession#target_resource_details}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#display_name BastionSession#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#id BastionSession#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.keyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#key_type BastionSession#key_type}.

---

##### `session_ttl_in_seconds`<sup>Optional</sup> <a name="session_ttl_in_seconds" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.sessionTtlInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#session_ttl_in_seconds BastionSession#session_ttl_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts">BastionSessionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#timeouts BastionSession#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putKeyDetails">put_key_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putTargetResourceDetails">put_target_resource_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetKeyType">reset_key_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetSessionTtlInSeconds">reset_session_ttl_in_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_key_details` <a name="put_key_details" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putKeyDetails"></a>

```python
def put_key_details(
  public_key_content: str
) -> None
```

###### `public_key_content`<sup>Required</sup> <a name="public_key_content" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putKeyDetails.parameter.publicKeyContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#public_key_content BastionSession#public_key_content}.

---

##### `put_target_resource_details` <a name="put_target_resource_details" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putTargetResourceDetails"></a>

```python
def put_target_resource_details(
  session_type: str,
  target_resource_fqdn: str = None,
  target_resource_id: str = None,
  target_resource_operating_system_user_name: str = None,
  target_resource_port: typing.Union[int, float] = None,
  target_resource_private_ip_address: str = None
) -> None
```

###### `session_type`<sup>Required</sup> <a name="session_type" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putTargetResourceDetails.parameter.sessionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#session_type BastionSession#session_type}.

---

###### `target_resource_fqdn`<sup>Optional</sup> <a name="target_resource_fqdn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putTargetResourceDetails.parameter.targetResourceFqdn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_fqdn BastionSession#target_resource_fqdn}.

---

###### `target_resource_id`<sup>Optional</sup> <a name="target_resource_id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putTargetResourceDetails.parameter.targetResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_id BastionSession#target_resource_id}.

---

###### `target_resource_operating_system_user_name`<sup>Optional</sup> <a name="target_resource_operating_system_user_name" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putTargetResourceDetails.parameter.targetResourceOperatingSystemUserName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_operating_system_user_name BastionSession#target_resource_operating_system_user_name}.

---

###### `target_resource_port`<sup>Optional</sup> <a name="target_resource_port" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putTargetResourceDetails.parameter.targetResourcePort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_port BastionSession#target_resource_port}.

---

###### `target_resource_private_ip_address`<sup>Optional</sup> <a name="target_resource_private_ip_address" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putTargetResourceDetails.parameter.targetResourcePrivateIpAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_private_ip_address BastionSession#target_resource_private_ip_address}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#create BastionSession#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#delete BastionSession#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#update BastionSession#update}.

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_type` <a name="reset_key_type" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetKeyType"></a>

```python
def reset_key_type() -> None
```

##### `reset_session_ttl_in_seconds` <a name="reset_session_ttl_in_seconds" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetSessionTtlInSeconds"></a>

```python
def reset_session_ttl_in_seconds() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BastionSession resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import bastion_session

bastionSession.BastionSession.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import bastion_session

bastionSession.BastionSession.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import bastion_session

bastionSession.BastionSession.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import bastion_session

bastionSession.BastionSession.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BastionSession resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BastionSession to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BastionSession that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BastionSession to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.bastionName">bastion_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.bastionPublicHostKeyInfo">bastion_public_host_key_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.bastionUserName">bastion_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.keyDetails">key_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference">BastionSessionKeyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.sshMetadata">ssh_metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.targetResourceDetails">target_resource_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference">BastionSessionTargetResourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference">BastionSessionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.bastionIdInput">bastion_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.keyDetailsInput">key_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails">BastionSessionKeyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.keyTypeInput">key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.sessionTtlInSecondsInput">session_ttl_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.targetResourceDetailsInput">target_resource_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails">BastionSessionTargetResourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts">BastionSessionTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.bastionId">bastion_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.keyType">key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.sessionTtlInSeconds">session_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bastion_name`<sup>Required</sup> <a name="bastion_name" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.bastionName"></a>

```python
bastion_name: str
```

- *Type:* str

---

##### `bastion_public_host_key_info`<sup>Required</sup> <a name="bastion_public_host_key_info" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.bastionPublicHostKeyInfo"></a>

```python
bastion_public_host_key_info: str
```

- *Type:* str

---

##### `bastion_user_name`<sup>Required</sup> <a name="bastion_user_name" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.bastionUserName"></a>

```python
bastion_user_name: str
```

- *Type:* str

---

##### `key_details`<sup>Required</sup> <a name="key_details" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.keyDetails"></a>

```python
key_details: BastionSessionKeyDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference">BastionSessionKeyDetailsOutputReference</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `ssh_metadata`<sup>Required</sup> <a name="ssh_metadata" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.sshMetadata"></a>

```python
ssh_metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_resource_details`<sup>Required</sup> <a name="target_resource_details" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.targetResourceDetails"></a>

```python
target_resource_details: BastionSessionTargetResourceDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference">BastionSessionTargetResourceDetailsOutputReference</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.timeouts"></a>

```python
timeouts: BastionSessionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference">BastionSessionTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `bastion_id_input`<sup>Optional</sup> <a name="bastion_id_input" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.bastionIdInput"></a>

```python
bastion_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_details_input`<sup>Optional</sup> <a name="key_details_input" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.keyDetailsInput"></a>

```python
key_details_input: BastionSessionKeyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails">BastionSessionKeyDetails</a>

---

##### `key_type_input`<sup>Optional</sup> <a name="key_type_input" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.keyTypeInput"></a>

```python
key_type_input: str
```

- *Type:* str

---

##### `session_ttl_in_seconds_input`<sup>Optional</sup> <a name="session_ttl_in_seconds_input" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.sessionTtlInSecondsInput"></a>

```python
session_ttl_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_resource_details_input`<sup>Optional</sup> <a name="target_resource_details_input" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.targetResourceDetailsInput"></a>

```python
target_resource_details_input: BastionSessionTargetResourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails">BastionSessionTargetResourceDetails</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BastionSessionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts">BastionSessionTimeouts</a>]

---

##### `bastion_id`<sup>Required</sup> <a name="bastion_id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.bastionId"></a>

```python
bastion_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_type`<sup>Required</sup> <a name="key_type" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

---

##### `session_ttl_in_seconds`<sup>Required</sup> <a name="session_ttl_in_seconds" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.sessionTtlInSeconds"></a>

```python
session_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSession.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BastionSessionConfig <a name="BastionSessionConfig" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bastion_session

bastionSession.BastionSessionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bastion_id: str,
  key_details: BastionSessionKeyDetails,
  target_resource_details: BastionSessionTargetResourceDetails,
  display_name: str = None,
  id: str = None,
  key_type: str = None,
  session_ttl_in_seconds: typing.Union[int, float] = None,
  timeouts: BastionSessionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.bastionId">bastion_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#bastion_id BastionSession#bastion_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.keyDetails">key_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails">BastionSessionKeyDetails</a></code> | key_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.targetResourceDetails">target_resource_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails">BastionSessionTargetResourceDetails</a></code> | target_resource_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#display_name BastionSession#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#id BastionSession#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.keyType">key_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#key_type BastionSession#key_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.sessionTtlInSeconds">session_ttl_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#session_ttl_in_seconds BastionSession#session_ttl_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts">BastionSessionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bastion_id`<sup>Required</sup> <a name="bastion_id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.bastionId"></a>

```python
bastion_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#bastion_id BastionSession#bastion_id}.

---

##### `key_details`<sup>Required</sup> <a name="key_details" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.keyDetails"></a>

```python
key_details: BastionSessionKeyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails">BastionSessionKeyDetails</a>

key_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#key_details BastionSession#key_details}

---

##### `target_resource_details`<sup>Required</sup> <a name="target_resource_details" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.targetResourceDetails"></a>

```python
target_resource_details: BastionSessionTargetResourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails">BastionSessionTargetResourceDetails</a>

target_resource_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_details BastionSession#target_resource_details}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#display_name BastionSession#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#id BastionSession#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_type`<sup>Optional</sup> <a name="key_type" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.keyType"></a>

```python
key_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#key_type BastionSession#key_type}.

---

##### `session_ttl_in_seconds`<sup>Optional</sup> <a name="session_ttl_in_seconds" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.sessionTtlInSeconds"></a>

```python
session_ttl_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#session_ttl_in_seconds BastionSession#session_ttl_in_seconds}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionConfig.property.timeouts"></a>

```python
timeouts: BastionSessionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts">BastionSessionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#timeouts BastionSession#timeouts}

---

### BastionSessionKeyDetails <a name="BastionSessionKeyDetails" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bastion_session

bastionSession.BastionSessionKeyDetails(
  public_key_content: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails.property.publicKeyContent">public_key_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#public_key_content BastionSession#public_key_content}. |

---

##### `public_key_content`<sup>Required</sup> <a name="public_key_content" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails.property.publicKeyContent"></a>

```python
public_key_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#public_key_content BastionSession#public_key_content}.

---

### BastionSessionTargetResourceDetails <a name="BastionSessionTargetResourceDetails" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bastion_session

bastionSession.BastionSessionTargetResourceDetails(
  session_type: str,
  target_resource_fqdn: str = None,
  target_resource_id: str = None,
  target_resource_operating_system_user_name: str = None,
  target_resource_port: typing.Union[int, float] = None,
  target_resource_private_ip_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.sessionType">session_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#session_type BastionSession#session_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.targetResourceFqdn">target_resource_fqdn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_fqdn BastionSession#target_resource_fqdn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_id BastionSession#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.targetResourceOperatingSystemUserName">target_resource_operating_system_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_operating_system_user_name BastionSession#target_resource_operating_system_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.targetResourcePort">target_resource_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_port BastionSession#target_resource_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.targetResourcePrivateIpAddress">target_resource_private_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_private_ip_address BastionSession#target_resource_private_ip_address}. |

---

##### `session_type`<sup>Required</sup> <a name="session_type" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.sessionType"></a>

```python
session_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#session_type BastionSession#session_type}.

---

##### `target_resource_fqdn`<sup>Optional</sup> <a name="target_resource_fqdn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.targetResourceFqdn"></a>

```python
target_resource_fqdn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_fqdn BastionSession#target_resource_fqdn}.

---

##### `target_resource_id`<sup>Optional</sup> <a name="target_resource_id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_id BastionSession#target_resource_id}.

---

##### `target_resource_operating_system_user_name`<sup>Optional</sup> <a name="target_resource_operating_system_user_name" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.targetResourceOperatingSystemUserName"></a>

```python
target_resource_operating_system_user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_operating_system_user_name BastionSession#target_resource_operating_system_user_name}.

---

##### `target_resource_port`<sup>Optional</sup> <a name="target_resource_port" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.targetResourcePort"></a>

```python
target_resource_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_port BastionSession#target_resource_port}.

---

##### `target_resource_private_ip_address`<sup>Optional</sup> <a name="target_resource_private_ip_address" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails.property.targetResourcePrivateIpAddress"></a>

```python
target_resource_private_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#target_resource_private_ip_address BastionSession#target_resource_private_ip_address}.

---

### BastionSessionTimeouts <a name="BastionSessionTimeouts" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bastion_session

bastionSession.BastionSessionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#create BastionSession#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#delete BastionSession#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#update BastionSession#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#create BastionSession#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#delete BastionSession#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bastion_session#update BastionSession#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BastionSessionKeyDetailsOutputReference <a name="BastionSessionKeyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bastion_session

bastionSession.BastionSessionKeyDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.property.publicKeyContentInput">public_key_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.property.publicKeyContent">public_key_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails">BastionSessionKeyDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_key_content_input`<sup>Optional</sup> <a name="public_key_content_input" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.property.publicKeyContentInput"></a>

```python
public_key_content_input: str
```

- *Type:* str

---

##### `public_key_content`<sup>Required</sup> <a name="public_key_content" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.property.publicKeyContent"></a>

```python
public_key_content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetailsOutputReference.property.internalValue"></a>

```python
internal_value: BastionSessionKeyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionKeyDetails">BastionSessionKeyDetails</a>

---


### BastionSessionTargetResourceDetailsOutputReference <a name="BastionSessionTargetResourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bastion_session

bastionSession.BastionSessionTargetResourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resetTargetResourceFqdn">reset_target_resource_fqdn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resetTargetResourceId">reset_target_resource_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resetTargetResourceOperatingSystemUserName">reset_target_resource_operating_system_user_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resetTargetResourcePort">reset_target_resource_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resetTargetResourcePrivateIpAddress">reset_target_resource_private_ip_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target_resource_fqdn` <a name="reset_target_resource_fqdn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resetTargetResourceFqdn"></a>

```python
def reset_target_resource_fqdn() -> None
```

##### `reset_target_resource_id` <a name="reset_target_resource_id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resetTargetResourceId"></a>

```python
def reset_target_resource_id() -> None
```

##### `reset_target_resource_operating_system_user_name` <a name="reset_target_resource_operating_system_user_name" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resetTargetResourceOperatingSystemUserName"></a>

```python
def reset_target_resource_operating_system_user_name() -> None
```

##### `reset_target_resource_port` <a name="reset_target_resource_port" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resetTargetResourcePort"></a>

```python
def reset_target_resource_port() -> None
```

##### `reset_target_resource_private_ip_address` <a name="reset_target_resource_private_ip_address" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.resetTargetResourcePrivateIpAddress"></a>

```python
def reset_target_resource_private_ip_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceDisplayName">target_resource_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.sessionTypeInput">session_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceFqdnInput">target_resource_fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceIdInput">target_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceOperatingSystemUserNameInput">target_resource_operating_system_user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourcePortInput">target_resource_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourcePrivateIpAddressInput">target_resource_private_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.sessionType">session_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceFqdn">target_resource_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceOperatingSystemUserName">target_resource_operating_system_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourcePort">target_resource_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourcePrivateIpAddress">target_resource_private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails">BastionSessionTargetResourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_resource_display_name`<sup>Required</sup> <a name="target_resource_display_name" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceDisplayName"></a>

```python
target_resource_display_name: str
```

- *Type:* str

---

##### `session_type_input`<sup>Optional</sup> <a name="session_type_input" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.sessionTypeInput"></a>

```python
session_type_input: str
```

- *Type:* str

---

##### `target_resource_fqdn_input`<sup>Optional</sup> <a name="target_resource_fqdn_input" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceFqdnInput"></a>

```python
target_resource_fqdn_input: str
```

- *Type:* str

---

##### `target_resource_id_input`<sup>Optional</sup> <a name="target_resource_id_input" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceIdInput"></a>

```python
target_resource_id_input: str
```

- *Type:* str

---

##### `target_resource_operating_system_user_name_input`<sup>Optional</sup> <a name="target_resource_operating_system_user_name_input" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceOperatingSystemUserNameInput"></a>

```python
target_resource_operating_system_user_name_input: str
```

- *Type:* str

---

##### `target_resource_port_input`<sup>Optional</sup> <a name="target_resource_port_input" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourcePortInput"></a>

```python
target_resource_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_resource_private_ip_address_input`<sup>Optional</sup> <a name="target_resource_private_ip_address_input" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourcePrivateIpAddressInput"></a>

```python
target_resource_private_ip_address_input: str
```

- *Type:* str

---

##### `session_type`<sup>Required</sup> <a name="session_type" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.sessionType"></a>

```python
session_type: str
```

- *Type:* str

---

##### `target_resource_fqdn`<sup>Required</sup> <a name="target_resource_fqdn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceFqdn"></a>

```python
target_resource_fqdn: str
```

- *Type:* str

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

---

##### `target_resource_operating_system_user_name`<sup>Required</sup> <a name="target_resource_operating_system_user_name" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourceOperatingSystemUserName"></a>

```python
target_resource_operating_system_user_name: str
```

- *Type:* str

---

##### `target_resource_port`<sup>Required</sup> <a name="target_resource_port" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourcePort"></a>

```python
target_resource_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_resource_private_ip_address`<sup>Required</sup> <a name="target_resource_private_ip_address" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.targetResourcePrivateIpAddress"></a>

```python
target_resource_private_ip_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: BastionSessionTargetResourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTargetResourceDetails">BastionSessionTargetResourceDetails</a>

---


### BastionSessionTimeoutsOutputReference <a name="BastionSessionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bastion_session

bastionSession.BastionSessionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts">BastionSessionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BastionSessionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bastionSession.BastionSessionTimeouts">BastionSessionTimeouts</a>]

---



