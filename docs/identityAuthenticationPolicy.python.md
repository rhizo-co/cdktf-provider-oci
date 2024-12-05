# `identityAuthenticationPolicy` Submodule <a name="`identityAuthenticationPolicy` Submodule" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityAuthenticationPolicy <a name="IdentityAuthenticationPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy oci_identity_authentication_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_authentication_policy

identityAuthenticationPolicy.IdentityAuthenticationPolicy(
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
  id: str = None,
  network_policy: IdentityAuthenticationPolicyNetworkPolicy = None,
  password_policy: IdentityAuthenticationPolicyPasswordPolicy = None,
  timeouts: IdentityAuthenticationPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#compartment_id IdentityAuthenticationPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#id IdentityAuthenticationPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.networkPolicy">network_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a></code> | network_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.passwordPolicy">password_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a></code> | password_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#compartment_id IdentityAuthenticationPolicy#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#id IdentityAuthenticationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_policy`<sup>Optional</sup> <a name="network_policy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.networkPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a>

network_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#network_policy IdentityAuthenticationPolicy#network_policy}

---

##### `password_policy`<sup>Optional</sup> <a name="password_policy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.passwordPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a>

password_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#password_policy IdentityAuthenticationPolicy#password_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#timeouts IdentityAuthenticationPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putNetworkPolicy">put_network_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putPasswordPolicy">put_password_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetNetworkPolicy">reset_network_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetPasswordPolicy">reset_password_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_network_policy` <a name="put_network_policy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putNetworkPolicy"></a>

```python
def put_network_policy(
  network_source_ids: typing.List[str] = None
) -> None
```

###### `network_source_ids`<sup>Optional</sup> <a name="network_source_ids" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putNetworkPolicy.parameter.networkSourceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#network_source_ids IdentityAuthenticationPolicy#network_source_ids}.

---

##### `put_password_policy` <a name="put_password_policy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putPasswordPolicy"></a>

```python
def put_password_policy(
  is_lowercase_characters_required: typing.Union[bool, IResolvable] = None,
  is_numeric_characters_required: typing.Union[bool, IResolvable] = None,
  is_special_characters_required: typing.Union[bool, IResolvable] = None,
  is_uppercase_characters_required: typing.Union[bool, IResolvable] = None,
  is_username_containment_allowed: typing.Union[bool, IResolvable] = None,
  minimum_password_length: typing.Union[int, float] = None
) -> None
```

###### `is_lowercase_characters_required`<sup>Optional</sup> <a name="is_lowercase_characters_required" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putPasswordPolicy.parameter.isLowercaseCharactersRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_lowercase_characters_required IdentityAuthenticationPolicy#is_lowercase_characters_required}.

---

###### `is_numeric_characters_required`<sup>Optional</sup> <a name="is_numeric_characters_required" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putPasswordPolicy.parameter.isNumericCharactersRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_numeric_characters_required IdentityAuthenticationPolicy#is_numeric_characters_required}.

---

###### `is_special_characters_required`<sup>Optional</sup> <a name="is_special_characters_required" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putPasswordPolicy.parameter.isSpecialCharactersRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_special_characters_required IdentityAuthenticationPolicy#is_special_characters_required}.

---

###### `is_uppercase_characters_required`<sup>Optional</sup> <a name="is_uppercase_characters_required" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putPasswordPolicy.parameter.isUppercaseCharactersRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_uppercase_characters_required IdentityAuthenticationPolicy#is_uppercase_characters_required}.

---

###### `is_username_containment_allowed`<sup>Optional</sup> <a name="is_username_containment_allowed" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putPasswordPolicy.parameter.isUsernameContainmentAllowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_username_containment_allowed IdentityAuthenticationPolicy#is_username_containment_allowed}.

---

###### `minimum_password_length`<sup>Optional</sup> <a name="minimum_password_length" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putPasswordPolicy.parameter.minimumPasswordLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#minimum_password_length IdentityAuthenticationPolicy#minimum_password_length}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#create IdentityAuthenticationPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#delete IdentityAuthenticationPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#update IdentityAuthenticationPolicy#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_network_policy` <a name="reset_network_policy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetNetworkPolicy"></a>

```python
def reset_network_policy() -> None
```

##### `reset_password_policy` <a name="reset_password_policy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetPasswordPolicy"></a>

```python
def reset_password_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityAuthenticationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_authentication_policy

identityAuthenticationPolicy.IdentityAuthenticationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_authentication_policy

identityAuthenticationPolicy.IdentityAuthenticationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_authentication_policy

identityAuthenticationPolicy.IdentityAuthenticationPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_authentication_policy

identityAuthenticationPolicy.IdentityAuthenticationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityAuthenticationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityAuthenticationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityAuthenticationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityAuthenticationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.networkPolicy">network_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference">IdentityAuthenticationPolicyNetworkPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.passwordPolicy">password_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference">IdentityAuthenticationPolicyPasswordPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference">IdentityAuthenticationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.networkPolicyInput">network_policy_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.passwordPolicyInput">password_policy_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `network_policy`<sup>Required</sup> <a name="network_policy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.networkPolicy"></a>

```python
network_policy: IdentityAuthenticationPolicyNetworkPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference">IdentityAuthenticationPolicyNetworkPolicyOutputReference</a>

---

##### `password_policy`<sup>Required</sup> <a name="password_policy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.passwordPolicy"></a>

```python
password_policy: IdentityAuthenticationPolicyPasswordPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference">IdentityAuthenticationPolicyPasswordPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.timeouts"></a>

```python
timeouts: IdentityAuthenticationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference">IdentityAuthenticationPolicyTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `network_policy_input`<sup>Optional</sup> <a name="network_policy_input" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.networkPolicyInput"></a>

```python
network_policy_input: IdentityAuthenticationPolicyNetworkPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a>

---

##### `password_policy_input`<sup>Optional</sup> <a name="password_policy_input" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.passwordPolicyInput"></a>

```python
password_policy_input: IdentityAuthenticationPolicyPasswordPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IdentityAuthenticationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityAuthenticationPolicyConfig <a name="IdentityAuthenticationPolicyConfig" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_authentication_policy

identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  id: str = None,
  network_policy: IdentityAuthenticationPolicyNetworkPolicy = None,
  password_policy: IdentityAuthenticationPolicyPasswordPolicy = None,
  timeouts: IdentityAuthenticationPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#compartment_id IdentityAuthenticationPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#id IdentityAuthenticationPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.networkPolicy">network_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a></code> | network_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.passwordPolicy">password_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a></code> | password_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#compartment_id IdentityAuthenticationPolicy#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#id IdentityAuthenticationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_policy`<sup>Optional</sup> <a name="network_policy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.networkPolicy"></a>

```python
network_policy: IdentityAuthenticationPolicyNetworkPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a>

network_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#network_policy IdentityAuthenticationPolicy#network_policy}

---

##### `password_policy`<sup>Optional</sup> <a name="password_policy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.passwordPolicy"></a>

```python
password_policy: IdentityAuthenticationPolicyPasswordPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a>

password_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#password_policy IdentityAuthenticationPolicy#password_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.timeouts"></a>

```python
timeouts: IdentityAuthenticationPolicyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#timeouts IdentityAuthenticationPolicy#timeouts}

---

### IdentityAuthenticationPolicyNetworkPolicy <a name="IdentityAuthenticationPolicyNetworkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_authentication_policy

identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy(
  network_source_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy.property.networkSourceIds">network_source_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#network_source_ids IdentityAuthenticationPolicy#network_source_ids}. |

---

##### `network_source_ids`<sup>Optional</sup> <a name="network_source_ids" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy.property.networkSourceIds"></a>

```python
network_source_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#network_source_ids IdentityAuthenticationPolicy#network_source_ids}.

---

### IdentityAuthenticationPolicyPasswordPolicy <a name="IdentityAuthenticationPolicyPasswordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_authentication_policy

identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy(
  is_lowercase_characters_required: typing.Union[bool, IResolvable] = None,
  is_numeric_characters_required: typing.Union[bool, IResolvable] = None,
  is_special_characters_required: typing.Union[bool, IResolvable] = None,
  is_uppercase_characters_required: typing.Union[bool, IResolvable] = None,
  is_username_containment_allowed: typing.Union[bool, IResolvable] = None,
  minimum_password_length: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isLowercaseCharactersRequired">is_lowercase_characters_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_lowercase_characters_required IdentityAuthenticationPolicy#is_lowercase_characters_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isNumericCharactersRequired">is_numeric_characters_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_numeric_characters_required IdentityAuthenticationPolicy#is_numeric_characters_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isSpecialCharactersRequired">is_special_characters_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_special_characters_required IdentityAuthenticationPolicy#is_special_characters_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isUppercaseCharactersRequired">is_uppercase_characters_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_uppercase_characters_required IdentityAuthenticationPolicy#is_uppercase_characters_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isUsernameContainmentAllowed">is_username_containment_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_username_containment_allowed IdentityAuthenticationPolicy#is_username_containment_allowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.minimumPasswordLength">minimum_password_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#minimum_password_length IdentityAuthenticationPolicy#minimum_password_length}. |

---

##### `is_lowercase_characters_required`<sup>Optional</sup> <a name="is_lowercase_characters_required" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isLowercaseCharactersRequired"></a>

```python
is_lowercase_characters_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_lowercase_characters_required IdentityAuthenticationPolicy#is_lowercase_characters_required}.

---

##### `is_numeric_characters_required`<sup>Optional</sup> <a name="is_numeric_characters_required" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isNumericCharactersRequired"></a>

```python
is_numeric_characters_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_numeric_characters_required IdentityAuthenticationPolicy#is_numeric_characters_required}.

---

##### `is_special_characters_required`<sup>Optional</sup> <a name="is_special_characters_required" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isSpecialCharactersRequired"></a>

```python
is_special_characters_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_special_characters_required IdentityAuthenticationPolicy#is_special_characters_required}.

---

##### `is_uppercase_characters_required`<sup>Optional</sup> <a name="is_uppercase_characters_required" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isUppercaseCharactersRequired"></a>

```python
is_uppercase_characters_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_uppercase_characters_required IdentityAuthenticationPolicy#is_uppercase_characters_required}.

---

##### `is_username_containment_allowed`<sup>Optional</sup> <a name="is_username_containment_allowed" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isUsernameContainmentAllowed"></a>

```python
is_username_containment_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_username_containment_allowed IdentityAuthenticationPolicy#is_username_containment_allowed}.

---

##### `minimum_password_length`<sup>Optional</sup> <a name="minimum_password_length" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.minimumPasswordLength"></a>

```python
minimum_password_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#minimum_password_length IdentityAuthenticationPolicy#minimum_password_length}.

---

### IdentityAuthenticationPolicyTimeouts <a name="IdentityAuthenticationPolicyTimeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_authentication_policy

identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#create IdentityAuthenticationPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#delete IdentityAuthenticationPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#update IdentityAuthenticationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#create IdentityAuthenticationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#delete IdentityAuthenticationPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#update IdentityAuthenticationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityAuthenticationPolicyNetworkPolicyOutputReference <a name="IdentityAuthenticationPolicyNetworkPolicyOutputReference" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_authentication_policy

identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resetNetworkSourceIds">reset_network_source_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_network_source_ids` <a name="reset_network_source_ids" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resetNetworkSourceIds"></a>

```python
def reset_network_source_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.networkSourceIdsInput">network_source_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.networkSourceIds">network_source_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_source_ids_input`<sup>Optional</sup> <a name="network_source_ids_input" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.networkSourceIdsInput"></a>

```python
network_source_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_source_ids`<sup>Required</sup> <a name="network_source_ids" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.networkSourceIds"></a>

```python
network_source_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IdentityAuthenticationPolicyNetworkPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a>

---


### IdentityAuthenticationPolicyPasswordPolicyOutputReference <a name="IdentityAuthenticationPolicyPasswordPolicyOutputReference" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_authentication_policy

identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsLowercaseCharactersRequired">reset_is_lowercase_characters_required</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsNumericCharactersRequired">reset_is_numeric_characters_required</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsSpecialCharactersRequired">reset_is_special_characters_required</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsUppercaseCharactersRequired">reset_is_uppercase_characters_required</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsUsernameContainmentAllowed">reset_is_username_containment_allowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetMinimumPasswordLength">reset_minimum_password_length</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_lowercase_characters_required` <a name="reset_is_lowercase_characters_required" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsLowercaseCharactersRequired"></a>

```python
def reset_is_lowercase_characters_required() -> None
```

##### `reset_is_numeric_characters_required` <a name="reset_is_numeric_characters_required" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsNumericCharactersRequired"></a>

```python
def reset_is_numeric_characters_required() -> None
```

##### `reset_is_special_characters_required` <a name="reset_is_special_characters_required" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsSpecialCharactersRequired"></a>

```python
def reset_is_special_characters_required() -> None
```

##### `reset_is_uppercase_characters_required` <a name="reset_is_uppercase_characters_required" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsUppercaseCharactersRequired"></a>

```python
def reset_is_uppercase_characters_required() -> None
```

##### `reset_is_username_containment_allowed` <a name="reset_is_username_containment_allowed" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsUsernameContainmentAllowed"></a>

```python
def reset_is_username_containment_allowed() -> None
```

##### `reset_minimum_password_length` <a name="reset_minimum_password_length" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetMinimumPasswordLength"></a>

```python
def reset_minimum_password_length() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isLowercaseCharactersRequiredInput">is_lowercase_characters_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isNumericCharactersRequiredInput">is_numeric_characters_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isSpecialCharactersRequiredInput">is_special_characters_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUppercaseCharactersRequiredInput">is_uppercase_characters_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUsernameContainmentAllowedInput">is_username_containment_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.minimumPasswordLengthInput">minimum_password_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isLowercaseCharactersRequired">is_lowercase_characters_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isNumericCharactersRequired">is_numeric_characters_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isSpecialCharactersRequired">is_special_characters_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUppercaseCharactersRequired">is_uppercase_characters_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUsernameContainmentAllowed">is_username_containment_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.minimumPasswordLength">minimum_password_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_lowercase_characters_required_input`<sup>Optional</sup> <a name="is_lowercase_characters_required_input" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isLowercaseCharactersRequiredInput"></a>

```python
is_lowercase_characters_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_numeric_characters_required_input`<sup>Optional</sup> <a name="is_numeric_characters_required_input" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isNumericCharactersRequiredInput"></a>

```python
is_numeric_characters_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_special_characters_required_input`<sup>Optional</sup> <a name="is_special_characters_required_input" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isSpecialCharactersRequiredInput"></a>

```python
is_special_characters_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_uppercase_characters_required_input`<sup>Optional</sup> <a name="is_uppercase_characters_required_input" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUppercaseCharactersRequiredInput"></a>

```python
is_uppercase_characters_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_username_containment_allowed_input`<sup>Optional</sup> <a name="is_username_containment_allowed_input" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUsernameContainmentAllowedInput"></a>

```python
is_username_containment_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `minimum_password_length_input`<sup>Optional</sup> <a name="minimum_password_length_input" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.minimumPasswordLengthInput"></a>

```python
minimum_password_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_lowercase_characters_required`<sup>Required</sup> <a name="is_lowercase_characters_required" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isLowercaseCharactersRequired"></a>

```python
is_lowercase_characters_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_numeric_characters_required`<sup>Required</sup> <a name="is_numeric_characters_required" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isNumericCharactersRequired"></a>

```python
is_numeric_characters_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_special_characters_required`<sup>Required</sup> <a name="is_special_characters_required" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isSpecialCharactersRequired"></a>

```python
is_special_characters_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_uppercase_characters_required`<sup>Required</sup> <a name="is_uppercase_characters_required" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUppercaseCharactersRequired"></a>

```python
is_uppercase_characters_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_username_containment_allowed`<sup>Required</sup> <a name="is_username_containment_allowed" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUsernameContainmentAllowed"></a>

```python
is_username_containment_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `minimum_password_length`<sup>Required</sup> <a name="minimum_password_length" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.minimumPasswordLength"></a>

```python
minimum_password_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IdentityAuthenticationPolicyPasswordPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a>

---


### IdentityAuthenticationPolicyTimeoutsOutputReference <a name="IdentityAuthenticationPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import identity_authentication_policy

identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IdentityAuthenticationPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a>]

---



