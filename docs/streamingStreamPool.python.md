# `streamingStreamPool` Submodule <a name="`streamingStreamPool` Submodule" id="rhizo-co-terraform-provider-oci.streamingStreamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamingStreamPool <a name="StreamingStreamPool" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool oci_streaming_stream_pool}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import streaming_stream_pool

streamingStreamPool.StreamingStreamPool(
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
  name: str,
  custom_encryption_key: StreamingStreamPoolCustomEncryptionKey = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  kafka_settings: StreamingStreamPoolKafkaSettings = None,
  private_endpoint_settings: StreamingStreamPoolPrivateEndpointSettings = None,
  timeouts: StreamingStreamPoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#compartment_id StreamingStreamPool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#name StreamingStreamPool#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.customEncryptionKey">custom_encryption_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a></code> | custom_encryption_key block. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#defined_tags StreamingStreamPool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#freeform_tags StreamingStreamPool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#id StreamingStreamPool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.kafkaSettings">kafka_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a></code> | kafka_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.privateEndpointSettings">private_endpoint_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a></code> | private_endpoint_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#compartment_id StreamingStreamPool#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#name StreamingStreamPool#name}.

---

##### `custom_encryption_key`<sup>Optional</sup> <a name="custom_encryption_key" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.customEncryptionKey"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a>

custom_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#custom_encryption_key StreamingStreamPool#custom_encryption_key}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#defined_tags StreamingStreamPool#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#freeform_tags StreamingStreamPool#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#id StreamingStreamPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kafka_settings`<sup>Optional</sup> <a name="kafka_settings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.kafkaSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a>

kafka_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#kafka_settings StreamingStreamPool#kafka_settings}

---

##### `private_endpoint_settings`<sup>Optional</sup> <a name="private_endpoint_settings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.privateEndpointSettings"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a>

private_endpoint_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#private_endpoint_settings StreamingStreamPool#private_endpoint_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#timeouts StreamingStreamPool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putCustomEncryptionKey">put_custom_encryption_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putKafkaSettings">put_kafka_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putPrivateEndpointSettings">put_private_endpoint_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetCustomEncryptionKey">reset_custom_encryption_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetKafkaSettings">reset_kafka_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetPrivateEndpointSettings">reset_private_endpoint_settings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_custom_encryption_key` <a name="put_custom_encryption_key" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putCustomEncryptionKey"></a>

```python
def put_custom_encryption_key(
  kms_key_id: str
) -> None
```

###### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putCustomEncryptionKey.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#kms_key_id StreamingStreamPool#kms_key_id}.

---

##### `put_kafka_settings` <a name="put_kafka_settings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putKafkaSettings"></a>

```python
def put_kafka_settings(
  auto_create_topics_enable: typing.Union[bool, IResolvable] = None,
  log_retention_hours: typing.Union[int, float] = None,
  num_partitions: typing.Union[int, float] = None
) -> None
```

###### `auto_create_topics_enable`<sup>Optional</sup> <a name="auto_create_topics_enable" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putKafkaSettings.parameter.autoCreateTopicsEnable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#auto_create_topics_enable StreamingStreamPool#auto_create_topics_enable}.

---

###### `log_retention_hours`<sup>Optional</sup> <a name="log_retention_hours" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putKafkaSettings.parameter.logRetentionHours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#log_retention_hours StreamingStreamPool#log_retention_hours}.

---

###### `num_partitions`<sup>Optional</sup> <a name="num_partitions" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putKafkaSettings.parameter.numPartitions"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#num_partitions StreamingStreamPool#num_partitions}.

---

##### `put_private_endpoint_settings` <a name="put_private_endpoint_settings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putPrivateEndpointSettings"></a>

```python
def put_private_endpoint_settings(
  nsg_ids: typing.List[str] = None,
  private_endpoint_ip: str = None,
  subnet_id: str = None
) -> None
```

###### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putPrivateEndpointSettings.parameter.nsgIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#nsg_ids StreamingStreamPool#nsg_ids}.

---

###### `private_endpoint_ip`<sup>Optional</sup> <a name="private_endpoint_ip" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putPrivateEndpointSettings.parameter.privateEndpointIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#private_endpoint_ip StreamingStreamPool#private_endpoint_ip}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putPrivateEndpointSettings.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#subnet_id StreamingStreamPool#subnet_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#create StreamingStreamPool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#delete StreamingStreamPool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#update StreamingStreamPool#update}.

---

##### `reset_custom_encryption_key` <a name="reset_custom_encryption_key" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetCustomEncryptionKey"></a>

```python
def reset_custom_encryption_key() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kafka_settings` <a name="reset_kafka_settings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetKafkaSettings"></a>

```python
def reset_kafka_settings() -> None
```

##### `reset_private_endpoint_settings` <a name="reset_private_endpoint_settings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetPrivateEndpointSettings"></a>

```python
def reset_private_endpoint_settings() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StreamingStreamPool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import streaming_stream_pool

streamingStreamPool.StreamingStreamPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import streaming_stream_pool

streamingStreamPool.StreamingStreamPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import streaming_stream_pool

streamingStreamPool.StreamingStreamPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import streaming_stream_pool

streamingStreamPool.StreamingStreamPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StreamingStreamPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StreamingStreamPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StreamingStreamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamingStreamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.customEncryptionKey">custom_encryption_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference">StreamingStreamPoolCustomEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.endpointFqdn">endpoint_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.isPrivate">is_private</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.kafkaSettings">kafka_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference">StreamingStreamPoolKafkaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.lifecycleStateDetails">lifecycle_state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.privateEndpointSettings">private_endpoint_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference">StreamingStreamPoolPrivateEndpointSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference">StreamingStreamPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.customEncryptionKeyInput">custom_encryption_key_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.kafkaSettingsInput">kafka_settings_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.privateEndpointSettingsInput">private_endpoint_settings_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_encryption_key`<sup>Required</sup> <a name="custom_encryption_key" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.customEncryptionKey"></a>

```python
custom_encryption_key: StreamingStreamPoolCustomEncryptionKeyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference">StreamingStreamPoolCustomEncryptionKeyOutputReference</a>

---

##### `endpoint_fqdn`<sup>Required</sup> <a name="endpoint_fqdn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.endpointFqdn"></a>

```python
endpoint_fqdn: str
```

- *Type:* str

---

##### `is_private`<sup>Required</sup> <a name="is_private" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.isPrivate"></a>

```python
is_private: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kafka_settings`<sup>Required</sup> <a name="kafka_settings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.kafkaSettings"></a>

```python
kafka_settings: StreamingStreamPoolKafkaSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference">StreamingStreamPoolKafkaSettingsOutputReference</a>

---

##### `lifecycle_state_details`<sup>Required</sup> <a name="lifecycle_state_details" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.lifecycleStateDetails"></a>

```python
lifecycle_state_details: str
```

- *Type:* str

---

##### `private_endpoint_settings`<sup>Required</sup> <a name="private_endpoint_settings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.privateEndpointSettings"></a>

```python
private_endpoint_settings: StreamingStreamPoolPrivateEndpointSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference">StreamingStreamPoolPrivateEndpointSettingsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.timeouts"></a>

```python
timeouts: StreamingStreamPoolTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference">StreamingStreamPoolTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `custom_encryption_key_input`<sup>Optional</sup> <a name="custom_encryption_key_input" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.customEncryptionKeyInput"></a>

```python
custom_encryption_key_input: StreamingStreamPoolCustomEncryptionKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a>

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kafka_settings_input`<sup>Optional</sup> <a name="kafka_settings_input" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.kafkaSettingsInput"></a>

```python
kafka_settings_input: StreamingStreamPoolKafkaSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `private_endpoint_settings_input`<sup>Optional</sup> <a name="private_endpoint_settings_input" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.privateEndpointSettingsInput"></a>

```python
private_endpoint_settings_input: StreamingStreamPoolPrivateEndpointSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StreamingStreamPoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StreamingStreamPoolConfig <a name="StreamingStreamPoolConfig" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import streaming_stream_pool

streamingStreamPool.StreamingStreamPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  name: str,
  custom_encryption_key: StreamingStreamPoolCustomEncryptionKey = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  kafka_settings: StreamingStreamPoolKafkaSettings = None,
  private_endpoint_settings: StreamingStreamPoolPrivateEndpointSettings = None,
  timeouts: StreamingStreamPoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#compartment_id StreamingStreamPool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#name StreamingStreamPool#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.customEncryptionKey">custom_encryption_key</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a></code> | custom_encryption_key block. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#defined_tags StreamingStreamPool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#freeform_tags StreamingStreamPool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#id StreamingStreamPool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.kafkaSettings">kafka_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a></code> | kafka_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.privateEndpointSettings">private_endpoint_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a></code> | private_endpoint_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#compartment_id StreamingStreamPool#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#name StreamingStreamPool#name}.

---

##### `custom_encryption_key`<sup>Optional</sup> <a name="custom_encryption_key" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.customEncryptionKey"></a>

```python
custom_encryption_key: StreamingStreamPoolCustomEncryptionKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a>

custom_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#custom_encryption_key StreamingStreamPool#custom_encryption_key}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#defined_tags StreamingStreamPool#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#freeform_tags StreamingStreamPool#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#id StreamingStreamPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kafka_settings`<sup>Optional</sup> <a name="kafka_settings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.kafkaSettings"></a>

```python
kafka_settings: StreamingStreamPoolKafkaSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a>

kafka_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#kafka_settings StreamingStreamPool#kafka_settings}

---

##### `private_endpoint_settings`<sup>Optional</sup> <a name="private_endpoint_settings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.privateEndpointSettings"></a>

```python
private_endpoint_settings: StreamingStreamPoolPrivateEndpointSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a>

private_endpoint_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#private_endpoint_settings StreamingStreamPool#private_endpoint_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolConfig.property.timeouts"></a>

```python
timeouts: StreamingStreamPoolTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#timeouts StreamingStreamPool#timeouts}

---

### StreamingStreamPoolCustomEncryptionKey <a name="StreamingStreamPoolCustomEncryptionKey" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import streaming_stream_pool

streamingStreamPool.StreamingStreamPoolCustomEncryptionKey(
  kms_key_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#kms_key_id StreamingStreamPool#kms_key_id}. |

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#kms_key_id StreamingStreamPool#kms_key_id}.

---

### StreamingStreamPoolKafkaSettings <a name="StreamingStreamPoolKafkaSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import streaming_stream_pool

streamingStreamPool.StreamingStreamPoolKafkaSettings(
  auto_create_topics_enable: typing.Union[bool, IResolvable] = None,
  log_retention_hours: typing.Union[int, float] = None,
  num_partitions: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings.property.autoCreateTopicsEnable">auto_create_topics_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#auto_create_topics_enable StreamingStreamPool#auto_create_topics_enable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings.property.logRetentionHours">log_retention_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#log_retention_hours StreamingStreamPool#log_retention_hours}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings.property.numPartitions">num_partitions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#num_partitions StreamingStreamPool#num_partitions}. |

---

##### `auto_create_topics_enable`<sup>Optional</sup> <a name="auto_create_topics_enable" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings.property.autoCreateTopicsEnable"></a>

```python
auto_create_topics_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#auto_create_topics_enable StreamingStreamPool#auto_create_topics_enable}.

---

##### `log_retention_hours`<sup>Optional</sup> <a name="log_retention_hours" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings.property.logRetentionHours"></a>

```python
log_retention_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#log_retention_hours StreamingStreamPool#log_retention_hours}.

---

##### `num_partitions`<sup>Optional</sup> <a name="num_partitions" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings.property.numPartitions"></a>

```python
num_partitions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#num_partitions StreamingStreamPool#num_partitions}.

---

### StreamingStreamPoolPrivateEndpointSettings <a name="StreamingStreamPoolPrivateEndpointSettings" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import streaming_stream_pool

streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings(
  nsg_ids: typing.List[str] = None,
  private_endpoint_ip: str = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#nsg_ids StreamingStreamPool#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings.property.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#private_endpoint_ip StreamingStreamPool#private_endpoint_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#subnet_id StreamingStreamPool#subnet_id}. |

---

##### `nsg_ids`<sup>Optional</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#nsg_ids StreamingStreamPool#nsg_ids}.

---

##### `private_endpoint_ip`<sup>Optional</sup> <a name="private_endpoint_ip" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings.property.privateEndpointIp"></a>

```python
private_endpoint_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#private_endpoint_ip StreamingStreamPool#private_endpoint_ip}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#subnet_id StreamingStreamPool#subnet_id}.

---

### StreamingStreamPoolTimeouts <a name="StreamingStreamPoolTimeouts" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import streaming_stream_pool

streamingStreamPool.StreamingStreamPoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#create StreamingStreamPool#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#delete StreamingStreamPool#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#update StreamingStreamPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#create StreamingStreamPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#delete StreamingStreamPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/streaming_stream_pool#update StreamingStreamPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamingStreamPoolCustomEncryptionKeyOutputReference <a name="StreamingStreamPoolCustomEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import streaming_stream_pool

streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.keyState">key_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_state`<sup>Required</sup> <a name="key_state" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.keyState"></a>

```python
key_state: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: StreamingStreamPoolCustomEncryptionKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolCustomEncryptionKey">StreamingStreamPoolCustomEncryptionKey</a>

---


### StreamingStreamPoolKafkaSettingsOutputReference <a name="StreamingStreamPoolKafkaSettingsOutputReference" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import streaming_stream_pool

streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resetAutoCreateTopicsEnable">reset_auto_create_topics_enable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resetLogRetentionHours">reset_log_retention_hours</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resetNumPartitions">reset_num_partitions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_create_topics_enable` <a name="reset_auto_create_topics_enable" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resetAutoCreateTopicsEnable"></a>

```python
def reset_auto_create_topics_enable() -> None
```

##### `reset_log_retention_hours` <a name="reset_log_retention_hours" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resetLogRetentionHours"></a>

```python
def reset_log_retention_hours() -> None
```

##### `reset_num_partitions` <a name="reset_num_partitions" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.resetNumPartitions"></a>

```python
def reset_num_partitions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.bootstrapServers">bootstrap_servers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.autoCreateTopicsEnableInput">auto_create_topics_enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.logRetentionHoursInput">log_retention_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.numPartitionsInput">num_partitions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.autoCreateTopicsEnable">auto_create_topics_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.logRetentionHours">log_retention_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.numPartitions">num_partitions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bootstrap_servers`<sup>Required</sup> <a name="bootstrap_servers" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.bootstrapServers"></a>

```python
bootstrap_servers: str
```

- *Type:* str

---

##### `auto_create_topics_enable_input`<sup>Optional</sup> <a name="auto_create_topics_enable_input" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.autoCreateTopicsEnableInput"></a>

```python
auto_create_topics_enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_retention_hours_input`<sup>Optional</sup> <a name="log_retention_hours_input" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.logRetentionHoursInput"></a>

```python
log_retention_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_partitions_input`<sup>Optional</sup> <a name="num_partitions_input" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.numPartitionsInput"></a>

```python
num_partitions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_create_topics_enable`<sup>Required</sup> <a name="auto_create_topics_enable" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.autoCreateTopicsEnable"></a>

```python
auto_create_topics_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_retention_hours`<sup>Required</sup> <a name="log_retention_hours" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.logRetentionHours"></a>

```python
log_retention_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_partitions`<sup>Required</sup> <a name="num_partitions" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.numPartitions"></a>

```python
num_partitions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettingsOutputReference.property.internalValue"></a>

```python
internal_value: StreamingStreamPoolKafkaSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolKafkaSettings">StreamingStreamPoolKafkaSettings</a>

---


### StreamingStreamPoolPrivateEndpointSettingsOutputReference <a name="StreamingStreamPoolPrivateEndpointSettingsOutputReference" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import streaming_stream_pool

streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resetNsgIds">reset_nsg_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resetPrivateEndpointIp">reset_private_endpoint_ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_nsg_ids` <a name="reset_nsg_ids" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resetNsgIds"></a>

```python
def reset_nsg_ids() -> None
```

##### `reset_private_endpoint_ip` <a name="reset_private_endpoint_ip" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resetPrivateEndpointIp"></a>

```python
def reset_private_endpoint_ip() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.nsgIdsInput">nsg_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.privateEndpointIpInput">private_endpoint_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nsg_ids_input`<sup>Optional</sup> <a name="nsg_ids_input" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.nsgIdsInput"></a>

```python
nsg_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_endpoint_ip_input`<sup>Optional</sup> <a name="private_endpoint_ip_input" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.privateEndpointIpInput"></a>

```python
private_endpoint_ip_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_endpoint_ip`<sup>Required</sup> <a name="private_endpoint_ip" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.privateEndpointIp"></a>

```python
private_endpoint_ip: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettingsOutputReference.property.internalValue"></a>

```python
internal_value: StreamingStreamPoolPrivateEndpointSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolPrivateEndpointSettings">StreamingStreamPoolPrivateEndpointSettings</a>

---


### StreamingStreamPoolTimeoutsOutputReference <a name="StreamingStreamPoolTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import streaming_stream_pool

streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StreamingStreamPoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.streamingStreamPool.StreamingStreamPoolTimeouts">StreamingStreamPoolTimeouts</a>]

---



