# `kmsGeneratedKey` Submodule <a name="`kmsGeneratedKey` Submodule" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsGeneratedKey <a name="KmsGeneratedKey" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key oci_kms_generated_key}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_generated_key

kmsGeneratedKey.KmsGeneratedKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  crypto_endpoint: str,
  include_plaintext_key: typing.Union[bool, IResolvable],
  key_id: str,
  key_shape: KmsGeneratedKeyKeyShape,
  associated_data: typing.Mapping[str] = None,
  id: str = None,
  logging_context: typing.Mapping[str] = None,
  timeouts: KmsGeneratedKeyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.cryptoEndpoint">crypto_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#crypto_endpoint KmsGeneratedKey#crypto_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.includePlaintextKey">include_plaintext_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#include_plaintext_key KmsGeneratedKey#include_plaintext_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#key_id KmsGeneratedKey#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.keyShape">key_shape</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a></code> | key_shape block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.associatedData">associated_data</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#associated_data KmsGeneratedKey#associated_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#id KmsGeneratedKey#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.loggingContext">logging_context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#logging_context KmsGeneratedKey#logging_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `crypto_endpoint`<sup>Required</sup> <a name="crypto_endpoint" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.cryptoEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#crypto_endpoint KmsGeneratedKey#crypto_endpoint}.

---

##### `include_plaintext_key`<sup>Required</sup> <a name="include_plaintext_key" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.includePlaintextKey"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#include_plaintext_key KmsGeneratedKey#include_plaintext_key}.

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.keyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#key_id KmsGeneratedKey#key_id}.

---

##### `key_shape`<sup>Required</sup> <a name="key_shape" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.keyShape"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a>

key_shape block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#key_shape KmsGeneratedKey#key_shape}

---

##### `associated_data`<sup>Optional</sup> <a name="associated_data" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.associatedData"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#associated_data KmsGeneratedKey#associated_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#id KmsGeneratedKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_context`<sup>Optional</sup> <a name="logging_context" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.loggingContext"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#logging_context KmsGeneratedKey#logging_context}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#timeouts KmsGeneratedKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putKeyShape">put_key_shape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetAssociatedData">reset_associated_data</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetLoggingContext">reset_logging_context</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_key_shape` <a name="put_key_shape" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putKeyShape"></a>

```python
def put_key_shape(
  algorithm: str,
  length: typing.Union[int, float],
  curve_id: str = None
) -> None
```

###### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putKeyShape.parameter.algorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#algorithm KmsGeneratedKey#algorithm}.

---

###### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putKeyShape.parameter.length"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#length KmsGeneratedKey#length}.

---

###### `curve_id`<sup>Optional</sup> <a name="curve_id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putKeyShape.parameter.curveId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#curve_id KmsGeneratedKey#curve_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#create KmsGeneratedKey#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#delete KmsGeneratedKey#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#update KmsGeneratedKey#update}.

---

##### `reset_associated_data` <a name="reset_associated_data" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetAssociatedData"></a>

```python
def reset_associated_data() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logging_context` <a name="reset_logging_context" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetLoggingContext"></a>

```python
def reset_logging_context() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KmsGeneratedKey resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_generated_key

kmsGeneratedKey.KmsGeneratedKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_generated_key

kmsGeneratedKey.KmsGeneratedKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_generated_key

kmsGeneratedKey.KmsGeneratedKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_generated_key

kmsGeneratedKey.KmsGeneratedKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KmsGeneratedKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KmsGeneratedKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KmsGeneratedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KmsGeneratedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.ciphertext">ciphertext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyShape">key_shape</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference">KmsGeneratedKeyKeyShapeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.plaintext">plaintext</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.plaintextChecksum">plaintext_checksum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference">KmsGeneratedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.associatedDataInput">associated_data_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cryptoEndpointInput">crypto_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.includePlaintextKeyInput">include_plaintext_key_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyShapeInput">key_shape_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.loggingContextInput">logging_context_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.associatedData">associated_data</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cryptoEndpoint">crypto_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.includePlaintextKey">include_plaintext_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.loggingContext">logging_context</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.ciphertext"></a>

```python
ciphertext: str
```

- *Type:* str

---

##### `key_shape`<sup>Required</sup> <a name="key_shape" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyShape"></a>

```python
key_shape: KmsGeneratedKeyKeyShapeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference">KmsGeneratedKeyKeyShapeOutputReference</a>

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.plaintext"></a>

```python
plaintext: str
```

- *Type:* str

---

##### `plaintext_checksum`<sup>Required</sup> <a name="plaintext_checksum" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.plaintextChecksum"></a>

```python
plaintext_checksum: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.timeouts"></a>

```python
timeouts: KmsGeneratedKeyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference">KmsGeneratedKeyTimeoutsOutputReference</a>

---

##### `associated_data_input`<sup>Optional</sup> <a name="associated_data_input" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.associatedDataInput"></a>

```python
associated_data_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `crypto_endpoint_input`<sup>Optional</sup> <a name="crypto_endpoint_input" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cryptoEndpointInput"></a>

```python
crypto_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_plaintext_key_input`<sup>Optional</sup> <a name="include_plaintext_key_input" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.includePlaintextKeyInput"></a>

```python
include_plaintext_key_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `key_shape_input`<sup>Optional</sup> <a name="key_shape_input" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyShapeInput"></a>

```python
key_shape_input: KmsGeneratedKeyKeyShape
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a>

---

##### `logging_context_input`<sup>Optional</sup> <a name="logging_context_input" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.loggingContextInput"></a>

```python
logging_context_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KmsGeneratedKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a>]

---

##### `associated_data`<sup>Required</sup> <a name="associated_data" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.associatedData"></a>

```python
associated_data: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `crypto_endpoint`<sup>Required</sup> <a name="crypto_endpoint" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.cryptoEndpoint"></a>

```python
crypto_endpoint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_plaintext_key`<sup>Required</sup> <a name="include_plaintext_key" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.includePlaintextKey"></a>

```python
include_plaintext_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `logging_context`<sup>Required</sup> <a name="logging_context" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.loggingContext"></a>

```python
logging_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KmsGeneratedKeyConfig <a name="KmsGeneratedKeyConfig" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_generated_key

kmsGeneratedKey.KmsGeneratedKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  crypto_endpoint: str,
  include_plaintext_key: typing.Union[bool, IResolvable],
  key_id: str,
  key_shape: KmsGeneratedKeyKeyShape,
  associated_data: typing.Mapping[str] = None,
  id: str = None,
  logging_context: typing.Mapping[str] = None,
  timeouts: KmsGeneratedKeyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.cryptoEndpoint">crypto_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#crypto_endpoint KmsGeneratedKey#crypto_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.includePlaintextKey">include_plaintext_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#include_plaintext_key KmsGeneratedKey#include_plaintext_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.keyId">key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#key_id KmsGeneratedKey#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.keyShape">key_shape</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a></code> | key_shape block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.associatedData">associated_data</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#associated_data KmsGeneratedKey#associated_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#id KmsGeneratedKey#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.loggingContext">logging_context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#logging_context KmsGeneratedKey#logging_context}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `crypto_endpoint`<sup>Required</sup> <a name="crypto_endpoint" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.cryptoEndpoint"></a>

```python
crypto_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#crypto_endpoint KmsGeneratedKey#crypto_endpoint}.

---

##### `include_plaintext_key`<sup>Required</sup> <a name="include_plaintext_key" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.includePlaintextKey"></a>

```python
include_plaintext_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#include_plaintext_key KmsGeneratedKey#include_plaintext_key}.

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#key_id KmsGeneratedKey#key_id}.

---

##### `key_shape`<sup>Required</sup> <a name="key_shape" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.keyShape"></a>

```python
key_shape: KmsGeneratedKeyKeyShape
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a>

key_shape block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#key_shape KmsGeneratedKey#key_shape}

---

##### `associated_data`<sup>Optional</sup> <a name="associated_data" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.associatedData"></a>

```python
associated_data: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#associated_data KmsGeneratedKey#associated_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#id KmsGeneratedKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_context`<sup>Optional</sup> <a name="logging_context" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.loggingContext"></a>

```python
logging_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#logging_context KmsGeneratedKey#logging_context}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyConfig.property.timeouts"></a>

```python
timeouts: KmsGeneratedKeyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#timeouts KmsGeneratedKey#timeouts}

---

### KmsGeneratedKeyKeyShape <a name="KmsGeneratedKeyKeyShape" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_generated_key

kmsGeneratedKey.KmsGeneratedKeyKeyShape(
  algorithm: str,
  length: typing.Union[int, float],
  curve_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.algorithm">algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#algorithm KmsGeneratedKey#algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.length">length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#length KmsGeneratedKey#length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.curveId">curve_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#curve_id KmsGeneratedKey#curve_id}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#algorithm KmsGeneratedKey#algorithm}.

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#length KmsGeneratedKey#length}.

---

##### `curve_id`<sup>Optional</sup> <a name="curve_id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape.property.curveId"></a>

```python
curve_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#curve_id KmsGeneratedKey#curve_id}.

---

### KmsGeneratedKeyTimeouts <a name="KmsGeneratedKeyTimeouts" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_generated_key

kmsGeneratedKey.KmsGeneratedKeyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#create KmsGeneratedKey#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#delete KmsGeneratedKey#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#update KmsGeneratedKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#create KmsGeneratedKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#delete KmsGeneratedKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_generated_key#update KmsGeneratedKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsGeneratedKeyKeyShapeOutputReference <a name="KmsGeneratedKeyKeyShapeOutputReference" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_generated_key

kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.resetCurveId">reset_curve_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_curve_id` <a name="reset_curve_id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.resetCurveId"></a>

```python
def reset_curve_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.curveIdInput">curve_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.lengthInput">length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.curveId">curve_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.length">length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `curve_id_input`<sup>Optional</sup> <a name="curve_id_input" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.curveIdInput"></a>

```python
curve_id_input: str
```

- *Type:* str

---

##### `length_input`<sup>Optional</sup> <a name="length_input" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.lengthInput"></a>

```python
length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `curve_id`<sup>Required</sup> <a name="curve_id" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.curveId"></a>

```python
curve_id: str
```

- *Type:* str

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShapeOutputReference.property.internalValue"></a>

```python
internal_value: KmsGeneratedKeyKeyShape
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyKeyShape">KmsGeneratedKeyKeyShape</a>

---


### KmsGeneratedKeyTimeoutsOutputReference <a name="KmsGeneratedKeyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_generated_key

kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KmsGeneratedKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.kmsGeneratedKey.KmsGeneratedKeyTimeouts">KmsGeneratedKeyTimeouts</a>]

---



