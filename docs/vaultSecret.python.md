# `vaultSecret` Submodule <a name="`vaultSecret` Submodule" id="rhizo-co-terraform-provider-oci.vaultSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecret <a name="VaultSecret" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret oci_vault_secret}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vault_secret

vaultSecret.VaultSecret(
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
  key_id: str,
  secret_name: str,
  vault_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  rotation_config: VaultSecretRotationConfig = None,
  secret_content: VaultSecretSecretContent = None,
  secret_rules: typing.Union[IResolvable, typing.List[VaultSecretSecretRules]] = None,
  timeouts: VaultSecretTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#compartment_id VaultSecret#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#key_id VaultSecret#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_name VaultSecret#secret_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#vault_id VaultSecret#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#defined_tags VaultSecret#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#description VaultSecret#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#freeform_tags VaultSecret#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#id VaultSecret#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#metadata VaultSecret#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.rotationConfig">rotation_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a></code> | rotation_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.secretContent">secret_content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a></code> | secret_content block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.secretRules">secret_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules">VaultSecretSecretRules</a>]]</code> | secret_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts">VaultSecretTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#compartment_id VaultSecret#compartment_id}.

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.keyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#key_id VaultSecret#key_id}.

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.secretName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_name VaultSecret#secret_name}.

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.vaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#vault_id VaultSecret#vault_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#defined_tags VaultSecret#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#description VaultSecret#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#freeform_tags VaultSecret#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#id VaultSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#metadata VaultSecret#metadata}.

---

##### `rotation_config`<sup>Optional</sup> <a name="rotation_config" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.rotationConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a>

rotation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rotation_config VaultSecret#rotation_config}

---

##### `secret_content`<sup>Optional</sup> <a name="secret_content" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.secretContent"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a>

secret_content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_content VaultSecret#secret_content}

---

##### `secret_rules`<sup>Optional</sup> <a name="secret_rules" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.secretRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules">VaultSecretSecretRules</a>]]

secret_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_rules VaultSecret#secret_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts">VaultSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#timeouts VaultSecret#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putRotationConfig">put_rotation_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretContent">put_secret_content</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretRules">put_secret_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetRotationConfig">reset_rotation_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetSecretContent">reset_secret_content</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetSecretRules">reset_secret_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rotation_config` <a name="put_rotation_config" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putRotationConfig"></a>

```python
def put_rotation_config(
  target_system_details: VaultSecretRotationConfigTargetSystemDetails,
  is_scheduled_rotation_enabled: typing.Union[bool, IResolvable] = None,
  rotation_interval: str = None
) -> None
```

###### `target_system_details`<sup>Required</sup> <a name="target_system_details" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putRotationConfig.parameter.targetSystemDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a>

target_system_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#target_system_details VaultSecret#target_system_details}

---

###### `is_scheduled_rotation_enabled`<sup>Optional</sup> <a name="is_scheduled_rotation_enabled" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putRotationConfig.parameter.isScheduledRotationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_scheduled_rotation_enabled VaultSecret#is_scheduled_rotation_enabled}.

---

###### `rotation_interval`<sup>Optional</sup> <a name="rotation_interval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putRotationConfig.parameter.rotationInterval"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rotation_interval VaultSecret#rotation_interval}.

---

##### `put_secret_content` <a name="put_secret_content" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretContent"></a>

```python
def put_secret_content(
  content_type: str,
  content: str = None,
  name: str = None,
  stage: str = None
) -> None
```

###### `content_type`<sup>Required</sup> <a name="content_type" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretContent.parameter.contentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#content_type VaultSecret#content_type}.

---

###### `content`<sup>Optional</sup> <a name="content" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretContent.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#content VaultSecret#content}.

---

###### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretContent.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#name VaultSecret#name}.

---

###### `stage`<sup>Optional</sup> <a name="stage" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretContent.parameter.stage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#stage VaultSecret#stage}.

---

##### `put_secret_rules` <a name="put_secret_rules" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretRules"></a>

```python
def put_secret_rules(
  value: typing.Union[IResolvable, typing.List[VaultSecretSecretRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules">VaultSecretSecretRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#create VaultSecret#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#delete VaultSecret#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#update VaultSecret#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_rotation_config` <a name="reset_rotation_config" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetRotationConfig"></a>

```python
def reset_rotation_config() -> None
```

##### `reset_secret_content` <a name="reset_secret_content" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetSecretContent"></a>

```python
def reset_secret_content() -> None
```

##### `reset_secret_rules` <a name="reset_secret_rules" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetSecretRules"></a>

```python
def reset_secret_rules() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VaultSecret resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import vault_secret

vaultSecret.VaultSecret.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import vault_secret

vaultSecret.VaultSecret.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import vault_secret

vaultSecret.VaultSecret.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import vault_secret

vaultSecret.VaultSecret.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VaultSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VaultSecret to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VaultSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.currentVersionNumber">current_version_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lastRotationTime">last_rotation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.nextRotationTime">next_rotation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationConfig">rotation_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference">VaultSecretRotationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationStatus">rotation_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretContent">secret_content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference">VaultSecretSecretContentOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretRules">secret_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList">VaultSecretSecretRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeOfCurrentVersionExpiry">time_of_current_version_expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeOfDeletion">time_of_deletion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference">VaultSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationConfigInput">rotation_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretContentInput">secret_content_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretRulesInput">secret_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules">VaultSecretSecretRules</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts">VaultSecretTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.vaultIdInput">vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `current_version_number`<sup>Required</sup> <a name="current_version_number" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.currentVersionNumber"></a>

```python
current_version_number: str
```

- *Type:* str

---

##### `last_rotation_time`<sup>Required</sup> <a name="last_rotation_time" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lastRotationTime"></a>

```python
last_rotation_time: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `next_rotation_time`<sup>Required</sup> <a name="next_rotation_time" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.nextRotationTime"></a>

```python
next_rotation_time: str
```

- *Type:* str

---

##### `rotation_config`<sup>Required</sup> <a name="rotation_config" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationConfig"></a>

```python
rotation_config: VaultSecretRotationConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference">VaultSecretRotationConfigOutputReference</a>

---

##### `rotation_status`<sup>Required</sup> <a name="rotation_status" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationStatus"></a>

```python
rotation_status: str
```

- *Type:* str

---

##### `secret_content`<sup>Required</sup> <a name="secret_content" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretContent"></a>

```python
secret_content: VaultSecretSecretContentOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference">VaultSecretSecretContentOutputReference</a>

---

##### `secret_rules`<sup>Required</sup> <a name="secret_rules" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretRules"></a>

```python
secret_rules: VaultSecretSecretRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList">VaultSecretSecretRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_of_current_version_expiry`<sup>Required</sup> <a name="time_of_current_version_expiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeOfCurrentVersionExpiry"></a>

```python
time_of_current_version_expiry: str
```

- *Type:* str

---

##### `time_of_deletion`<sup>Required</sup> <a name="time_of_deletion" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeOfDeletion"></a>

```python
time_of_deletion: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeouts"></a>

```python
timeouts: VaultSecretTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference">VaultSecretTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `rotation_config_input`<sup>Optional</sup> <a name="rotation_config_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationConfigInput"></a>

```python
rotation_config_input: VaultSecretRotationConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a>

---

##### `secret_content_input`<sup>Optional</sup> <a name="secret_content_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretContentInput"></a>

```python
secret_content_input: VaultSecretSecretContent
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a>

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `secret_rules_input`<sup>Optional</sup> <a name="secret_rules_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretRulesInput"></a>

```python
secret_rules_input: typing.Union[IResolvable, typing.List[VaultSecretSecretRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules">VaultSecretSecretRules</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VaultSecretTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts">VaultSecretTimeouts</a>]

---

##### `vault_id_input`<sup>Optional</sup> <a name="vault_id_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.vaultIdInput"></a>

```python
vault_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretConfig <a name="VaultSecretConfig" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vault_secret

vaultSecret.VaultSecretConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  key_id: str,
  secret_name: str,
  vault_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  rotation_config: VaultSecretRotationConfig = None,
  secret_content: VaultSecretSecretContent = None,
  secret_rules: typing.Union[IResolvable, typing.List[VaultSecretSecretRules]] = None,
  timeouts: VaultSecretTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#compartment_id VaultSecret#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#key_id VaultSecret#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_name VaultSecret#secret_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#vault_id VaultSecret#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#defined_tags VaultSecret#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#description VaultSecret#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#freeform_tags VaultSecret#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#id VaultSecret#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#metadata VaultSecret#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.rotationConfig">rotation_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a></code> | rotation_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretContent">secret_content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a></code> | secret_content block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretRules">secret_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules">VaultSecretSecretRules</a>]]</code> | secret_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts">VaultSecretTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#compartment_id VaultSecret#compartment_id}.

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#key_id VaultSecret#key_id}.

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_name VaultSecret#secret_name}.

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#vault_id VaultSecret#vault_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#defined_tags VaultSecret#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#description VaultSecret#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#freeform_tags VaultSecret#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#id VaultSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#metadata VaultSecret#metadata}.

---

##### `rotation_config`<sup>Optional</sup> <a name="rotation_config" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.rotationConfig"></a>

```python
rotation_config: VaultSecretRotationConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a>

rotation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rotation_config VaultSecret#rotation_config}

---

##### `secret_content`<sup>Optional</sup> <a name="secret_content" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretContent"></a>

```python
secret_content: VaultSecretSecretContent
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a>

secret_content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_content VaultSecret#secret_content}

---

##### `secret_rules`<sup>Optional</sup> <a name="secret_rules" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretRules"></a>

```python
secret_rules: typing.Union[IResolvable, typing.List[VaultSecretSecretRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules">VaultSecretSecretRules</a>]]

secret_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_rules VaultSecret#secret_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.timeouts"></a>

```python
timeouts: VaultSecretTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts">VaultSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#timeouts VaultSecret#timeouts}

---

### VaultSecretRotationConfig <a name="VaultSecretRotationConfig" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vault_secret

vaultSecret.VaultSecretRotationConfig(
  target_system_details: VaultSecretRotationConfigTargetSystemDetails,
  is_scheduled_rotation_enabled: typing.Union[bool, IResolvable] = None,
  rotation_interval: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.targetSystemDetails">target_system_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a></code> | target_system_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.isScheduledRotationEnabled">is_scheduled_rotation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_scheduled_rotation_enabled VaultSecret#is_scheduled_rotation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.rotationInterval">rotation_interval</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rotation_interval VaultSecret#rotation_interval}. |

---

##### `target_system_details`<sup>Required</sup> <a name="target_system_details" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.targetSystemDetails"></a>

```python
target_system_details: VaultSecretRotationConfigTargetSystemDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a>

target_system_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#target_system_details VaultSecret#target_system_details}

---

##### `is_scheduled_rotation_enabled`<sup>Optional</sup> <a name="is_scheduled_rotation_enabled" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.isScheduledRotationEnabled"></a>

```python
is_scheduled_rotation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_scheduled_rotation_enabled VaultSecret#is_scheduled_rotation_enabled}.

---

##### `rotation_interval`<sup>Optional</sup> <a name="rotation_interval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.rotationInterval"></a>

```python
rotation_interval: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rotation_interval VaultSecret#rotation_interval}.

---

### VaultSecretRotationConfigTargetSystemDetails <a name="VaultSecretRotationConfigTargetSystemDetails" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vault_secret

vaultSecret.VaultSecretRotationConfigTargetSystemDetails(
  target_system_type: str,
  adb_id: str = None,
  function_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.targetSystemType">target_system_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#target_system_type VaultSecret#target_system_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.adbId">adb_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#adb_id VaultSecret#adb_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.functionId">function_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#function_id VaultSecret#function_id}. |

---

##### `target_system_type`<sup>Required</sup> <a name="target_system_type" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.targetSystemType"></a>

```python
target_system_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#target_system_type VaultSecret#target_system_type}.

---

##### `adb_id`<sup>Optional</sup> <a name="adb_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.adbId"></a>

```python
adb_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#adb_id VaultSecret#adb_id}.

---

##### `function_id`<sup>Optional</sup> <a name="function_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#function_id VaultSecret#function_id}.

---

### VaultSecretSecretContent <a name="VaultSecretSecretContent" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vault_secret

vaultSecret.VaultSecretSecretContent(
  content_type: str,
  content: str = None,
  name: str = None,
  stage: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#content_type VaultSecret#content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#content VaultSecret#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#name VaultSecret#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.stage">stage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#stage VaultSecret#stage}. |

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#content_type VaultSecret#content_type}.

---

##### `content`<sup>Optional</sup> <a name="content" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#content VaultSecret#content}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#name VaultSecret#name}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.stage"></a>

```python
stage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#stage VaultSecret#stage}.

---

### VaultSecretSecretRules <a name="VaultSecretSecretRules" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vault_secret

vaultSecret.VaultSecretSecretRules(
  rule_type: str,
  is_enforced_on_deleted_secret_versions: typing.Union[bool, IResolvable] = None,
  is_secret_content_retrieval_blocked_on_expiry: typing.Union[bool, IResolvable] = None,
  secret_version_expiry_interval: str = None,
  time_of_absolute_expiry: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.ruleType">rule_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rule_type VaultSecret#rule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.isEnforcedOnDeletedSecretVersions">is_enforced_on_deleted_secret_versions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_enforced_on_deleted_secret_versions VaultSecret#is_enforced_on_deleted_secret_versions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.isSecretContentRetrievalBlockedOnExpiry">is_secret_content_retrieval_blocked_on_expiry</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_secret_content_retrieval_blocked_on_expiry VaultSecret#is_secret_content_retrieval_blocked_on_expiry}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.secretVersionExpiryInterval">secret_version_expiry_interval</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_version_expiry_interval VaultSecret#secret_version_expiry_interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.timeOfAbsoluteExpiry">time_of_absolute_expiry</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#time_of_absolute_expiry VaultSecret#time_of_absolute_expiry}. |

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.ruleType"></a>

```python
rule_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rule_type VaultSecret#rule_type}.

---

##### `is_enforced_on_deleted_secret_versions`<sup>Optional</sup> <a name="is_enforced_on_deleted_secret_versions" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.isEnforcedOnDeletedSecretVersions"></a>

```python
is_enforced_on_deleted_secret_versions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_enforced_on_deleted_secret_versions VaultSecret#is_enforced_on_deleted_secret_versions}.

---

##### `is_secret_content_retrieval_blocked_on_expiry`<sup>Optional</sup> <a name="is_secret_content_retrieval_blocked_on_expiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.isSecretContentRetrievalBlockedOnExpiry"></a>

```python
is_secret_content_retrieval_blocked_on_expiry: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_secret_content_retrieval_blocked_on_expiry VaultSecret#is_secret_content_retrieval_blocked_on_expiry}.

---

##### `secret_version_expiry_interval`<sup>Optional</sup> <a name="secret_version_expiry_interval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.secretVersionExpiryInterval"></a>

```python
secret_version_expiry_interval: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_version_expiry_interval VaultSecret#secret_version_expiry_interval}.

---

##### `time_of_absolute_expiry`<sup>Optional</sup> <a name="time_of_absolute_expiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.timeOfAbsoluteExpiry"></a>

```python
time_of_absolute_expiry: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#time_of_absolute_expiry VaultSecret#time_of_absolute_expiry}.

---

### VaultSecretTimeouts <a name="VaultSecretTimeouts" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vault_secret

vaultSecret.VaultSecretTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#create VaultSecret#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#delete VaultSecret#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#update VaultSecret#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#create VaultSecret#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#delete VaultSecret#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#update VaultSecret#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretRotationConfigOutputReference <a name="VaultSecretRotationConfigOutputReference" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vault_secret

vaultSecret.VaultSecretRotationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.putTargetSystemDetails">put_target_system_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resetIsScheduledRotationEnabled">reset_is_scheduled_rotation_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resetRotationInterval">reset_rotation_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_system_details` <a name="put_target_system_details" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.putTargetSystemDetails"></a>

```python
def put_target_system_details(
  target_system_type: str,
  adb_id: str = None,
  function_id: str = None
) -> None
```

###### `target_system_type`<sup>Required</sup> <a name="target_system_type" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.putTargetSystemDetails.parameter.targetSystemType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#target_system_type VaultSecret#target_system_type}.

---

###### `adb_id`<sup>Optional</sup> <a name="adb_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.putTargetSystemDetails.parameter.adbId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#adb_id VaultSecret#adb_id}.

---

###### `function_id`<sup>Optional</sup> <a name="function_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.putTargetSystemDetails.parameter.functionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#function_id VaultSecret#function_id}.

---

##### `reset_is_scheduled_rotation_enabled` <a name="reset_is_scheduled_rotation_enabled" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resetIsScheduledRotationEnabled"></a>

```python
def reset_is_scheduled_rotation_enabled() -> None
```

##### `reset_rotation_interval` <a name="reset_rotation_interval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resetRotationInterval"></a>

```python
def reset_rotation_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.targetSystemDetails">target_system_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference">VaultSecretRotationConfigTargetSystemDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.isScheduledRotationEnabledInput">is_scheduled_rotation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.rotationIntervalInput">rotation_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.targetSystemDetailsInput">target_system_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.isScheduledRotationEnabled">is_scheduled_rotation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.rotationInterval">rotation_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_system_details`<sup>Required</sup> <a name="target_system_details" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.targetSystemDetails"></a>

```python
target_system_details: VaultSecretRotationConfigTargetSystemDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference">VaultSecretRotationConfigTargetSystemDetailsOutputReference</a>

---

##### `is_scheduled_rotation_enabled_input`<sup>Optional</sup> <a name="is_scheduled_rotation_enabled_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.isScheduledRotationEnabledInput"></a>

```python
is_scheduled_rotation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rotation_interval_input`<sup>Optional</sup> <a name="rotation_interval_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.rotationIntervalInput"></a>

```python
rotation_interval_input: str
```

- *Type:* str

---

##### `target_system_details_input`<sup>Optional</sup> <a name="target_system_details_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.targetSystemDetailsInput"></a>

```python
target_system_details_input: VaultSecretRotationConfigTargetSystemDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a>

---

##### `is_scheduled_rotation_enabled`<sup>Required</sup> <a name="is_scheduled_rotation_enabled" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.isScheduledRotationEnabled"></a>

```python
is_scheduled_rotation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rotation_interval`<sup>Required</sup> <a name="rotation_interval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.rotationInterval"></a>

```python
rotation_interval: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.internalValue"></a>

```python
internal_value: VaultSecretRotationConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a>

---


### VaultSecretRotationConfigTargetSystemDetailsOutputReference <a name="VaultSecretRotationConfigTargetSystemDetailsOutputReference" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vault_secret

vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resetAdbId">reset_adb_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resetFunctionId">reset_function_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_adb_id` <a name="reset_adb_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resetAdbId"></a>

```python
def reset_adb_id() -> None
```

##### `reset_function_id` <a name="reset_function_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resetFunctionId"></a>

```python
def reset_function_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.adbIdInput">adb_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.functionIdInput">function_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.targetSystemTypeInput">target_system_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.adbId">adb_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.functionId">function_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.targetSystemType">target_system_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `adb_id_input`<sup>Optional</sup> <a name="adb_id_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.adbIdInput"></a>

```python
adb_id_input: str
```

- *Type:* str

---

##### `function_id_input`<sup>Optional</sup> <a name="function_id_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.functionIdInput"></a>

```python
function_id_input: str
```

- *Type:* str

---

##### `target_system_type_input`<sup>Optional</sup> <a name="target_system_type_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.targetSystemTypeInput"></a>

```python
target_system_type_input: str
```

- *Type:* str

---

##### `adb_id`<sup>Required</sup> <a name="adb_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.adbId"></a>

```python
adb_id: str
```

- *Type:* str

---

##### `function_id`<sup>Required</sup> <a name="function_id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

---

##### `target_system_type`<sup>Required</sup> <a name="target_system_type" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.targetSystemType"></a>

```python
target_system_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.internalValue"></a>

```python
internal_value: VaultSecretRotationConfigTargetSystemDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a>

---


### VaultSecretSecretContentOutputReference <a name="VaultSecretSecretContentOutputReference" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vault_secret

vaultSecret.VaultSecretSecretContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetStage">reset_stage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content` <a name="reset_content" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_stage` <a name="reset_stage" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetStage"></a>

```python
def reset_stage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.stageInput">stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.stage">stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `stage_input`<sup>Optional</sup> <a name="stage_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.stageInput"></a>

```python
stage_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `stage`<sup>Required</sup> <a name="stage" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.stage"></a>

```python
stage: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.internalValue"></a>

```python
internal_value: VaultSecretSecretContent
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a>

---


### VaultSecretSecretRulesList <a name="VaultSecretSecretRulesList" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vault_secret

vaultSecret.VaultSecretSecretRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VaultSecretSecretRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules">VaultSecretSecretRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VaultSecretSecretRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules">VaultSecretSecretRules</a>]]

---


### VaultSecretSecretRulesOutputReference <a name="VaultSecretSecretRulesOutputReference" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vault_secret

vaultSecret.VaultSecretSecretRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetIsEnforcedOnDeletedSecretVersions">reset_is_enforced_on_deleted_secret_versions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetIsSecretContentRetrievalBlockedOnExpiry">reset_is_secret_content_retrieval_blocked_on_expiry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetSecretVersionExpiryInterval">reset_secret_version_expiry_interval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetTimeOfAbsoluteExpiry">reset_time_of_absolute_expiry</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_enforced_on_deleted_secret_versions` <a name="reset_is_enforced_on_deleted_secret_versions" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetIsEnforcedOnDeletedSecretVersions"></a>

```python
def reset_is_enforced_on_deleted_secret_versions() -> None
```

##### `reset_is_secret_content_retrieval_blocked_on_expiry` <a name="reset_is_secret_content_retrieval_blocked_on_expiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetIsSecretContentRetrievalBlockedOnExpiry"></a>

```python
def reset_is_secret_content_retrieval_blocked_on_expiry() -> None
```

##### `reset_secret_version_expiry_interval` <a name="reset_secret_version_expiry_interval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetSecretVersionExpiryInterval"></a>

```python
def reset_secret_version_expiry_interval() -> None
```

##### `reset_time_of_absolute_expiry` <a name="reset_time_of_absolute_expiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetTimeOfAbsoluteExpiry"></a>

```python
def reset_time_of_absolute_expiry() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isEnforcedOnDeletedSecretVersionsInput">is_enforced_on_deleted_secret_versions_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isSecretContentRetrievalBlockedOnExpiryInput">is_secret_content_retrieval_blocked_on_expiry_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.ruleTypeInput">rule_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.secretVersionExpiryIntervalInput">secret_version_expiry_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.timeOfAbsoluteExpiryInput">time_of_absolute_expiry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isEnforcedOnDeletedSecretVersions">is_enforced_on_deleted_secret_versions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isSecretContentRetrievalBlockedOnExpiry">is_secret_content_retrieval_blocked_on_expiry</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.ruleType">rule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.secretVersionExpiryInterval">secret_version_expiry_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.timeOfAbsoluteExpiry">time_of_absolute_expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules">VaultSecretSecretRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enforced_on_deleted_secret_versions_input`<sup>Optional</sup> <a name="is_enforced_on_deleted_secret_versions_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isEnforcedOnDeletedSecretVersionsInput"></a>

```python
is_enforced_on_deleted_secret_versions_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_secret_content_retrieval_blocked_on_expiry_input`<sup>Optional</sup> <a name="is_secret_content_retrieval_blocked_on_expiry_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isSecretContentRetrievalBlockedOnExpiryInput"></a>

```python
is_secret_content_retrieval_blocked_on_expiry_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rule_type_input`<sup>Optional</sup> <a name="rule_type_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.ruleTypeInput"></a>

```python
rule_type_input: str
```

- *Type:* str

---

##### `secret_version_expiry_interval_input`<sup>Optional</sup> <a name="secret_version_expiry_interval_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.secretVersionExpiryIntervalInput"></a>

```python
secret_version_expiry_interval_input: str
```

- *Type:* str

---

##### `time_of_absolute_expiry_input`<sup>Optional</sup> <a name="time_of_absolute_expiry_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.timeOfAbsoluteExpiryInput"></a>

```python
time_of_absolute_expiry_input: str
```

- *Type:* str

---

##### `is_enforced_on_deleted_secret_versions`<sup>Required</sup> <a name="is_enforced_on_deleted_secret_versions" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isEnforcedOnDeletedSecretVersions"></a>

```python
is_enforced_on_deleted_secret_versions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_secret_content_retrieval_blocked_on_expiry`<sup>Required</sup> <a name="is_secret_content_retrieval_blocked_on_expiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isSecretContentRetrievalBlockedOnExpiry"></a>

```python
is_secret_content_retrieval_blocked_on_expiry: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.ruleType"></a>

```python
rule_type: str
```

- *Type:* str

---

##### `secret_version_expiry_interval`<sup>Required</sup> <a name="secret_version_expiry_interval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.secretVersionExpiryInterval"></a>

```python
secret_version_expiry_interval: str
```

- *Type:* str

---

##### `time_of_absolute_expiry`<sup>Required</sup> <a name="time_of_absolute_expiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.timeOfAbsoluteExpiry"></a>

```python
time_of_absolute_expiry: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VaultSecretSecretRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules">VaultSecretSecretRules</a>]

---


### VaultSecretTimeoutsOutputReference <a name="VaultSecretTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import vault_secret

vaultSecret.VaultSecretTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts">VaultSecretTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VaultSecretTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts">VaultSecretTimeouts</a>]

---



