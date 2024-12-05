# `artifactsContainerImageSignature` Submodule <a name="`artifactsContainerImageSignature` Submodule" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactsContainerImageSignature <a name="ArtifactsContainerImageSignature" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature oci_artifacts_container_image_signature}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import artifacts_container_image_signature

artifactsContainerImageSignature.ArtifactsContainerImageSignature(
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
  image_id: str,
  kms_key_id: str,
  kms_key_version_id: str,
  message: str,
  signature: str,
  signing_algorithm: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: ArtifactsContainerImageSignatureTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#compartment_id ArtifactsContainerImageSignature#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#image_id ArtifactsContainerImageSignature#image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#kms_key_id ArtifactsContainerImageSignature#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#kms_key_version_id ArtifactsContainerImageSignature#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#message ArtifactsContainerImageSignature#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.signature">signature</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#signature ArtifactsContainerImageSignature#signature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#signing_algorithm ArtifactsContainerImageSignature#signing_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#defined_tags ArtifactsContainerImageSignature#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#freeform_tags ArtifactsContainerImageSignature#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#id ArtifactsContainerImageSignature#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts">ArtifactsContainerImageSignatureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#compartment_id ArtifactsContainerImageSignature#compartment_id}.

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.imageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#image_id ArtifactsContainerImageSignature#image_id}.

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#kms_key_id ArtifactsContainerImageSignature#kms_key_id}.

---

##### `kms_key_version_id`<sup>Required</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.kmsKeyVersionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#kms_key_version_id ArtifactsContainerImageSignature#kms_key_version_id}.

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.message"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#message ArtifactsContainerImageSignature#message}.

---

##### `signature`<sup>Required</sup> <a name="signature" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.signature"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#signature ArtifactsContainerImageSignature#signature}.

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.signingAlgorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#signing_algorithm ArtifactsContainerImageSignature#signing_algorithm}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#defined_tags ArtifactsContainerImageSignature#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#freeform_tags ArtifactsContainerImageSignature#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#id ArtifactsContainerImageSignature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts">ArtifactsContainerImageSignatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#timeouts ArtifactsContainerImageSignature#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#create ArtifactsContainerImageSignature#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#delete ArtifactsContainerImageSignature#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#update ArtifactsContainerImageSignature#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ArtifactsContainerImageSignature resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import artifacts_container_image_signature

artifactsContainerImageSignature.ArtifactsContainerImageSignature.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import artifacts_container_image_signature

artifactsContainerImageSignature.ArtifactsContainerImageSignature.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import artifacts_container_image_signature

artifactsContainerImageSignature.ArtifactsContainerImageSignature.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import artifacts_container_image_signature

artifactsContainerImageSignature.ArtifactsContainerImageSignature.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ArtifactsContainerImageSignature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ArtifactsContainerImageSignature to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ArtifactsContainerImageSignature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ArtifactsContainerImageSignature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference">ArtifactsContainerImageSignatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.kmsKeyVersionIdInput">kms_key_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.signatureInput">signature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.signingAlgorithmInput">signing_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts">ArtifactsContainerImageSignatureTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.signature">signature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.timeouts"></a>

```python
timeouts: ArtifactsContainerImageSignatureTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference">ArtifactsContainerImageSignatureTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `kms_key_version_id_input`<sup>Optional</sup> <a name="kms_key_version_id_input" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.kmsKeyVersionIdInput"></a>

```python
kms_key_version_id_input: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `signature_input`<sup>Optional</sup> <a name="signature_input" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.signatureInput"></a>

```python
signature_input: str
```

- *Type:* str

---

##### `signing_algorithm_input`<sup>Optional</sup> <a name="signing_algorithm_input" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.signingAlgorithmInput"></a>

```python
signing_algorithm_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ArtifactsContainerImageSignatureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts">ArtifactsContainerImageSignatureTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `kms_key_version_id`<sup>Required</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `signature`<sup>Required</sup> <a name="signature" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.signature"></a>

```python
signature: str
```

- *Type:* str

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignature.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactsContainerImageSignatureConfig <a name="ArtifactsContainerImageSignatureConfig" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import artifacts_container_image_signature

artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  image_id: str,
  kms_key_id: str,
  kms_key_version_id: str,
  message: str,
  signature: str,
  signing_algorithm: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: ArtifactsContainerImageSignatureTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#compartment_id ArtifactsContainerImageSignature#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#image_id ArtifactsContainerImageSignature#image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#kms_key_id ArtifactsContainerImageSignature#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#kms_key_version_id ArtifactsContainerImageSignature#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#message ArtifactsContainerImageSignature#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.signature">signature</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#signature ArtifactsContainerImageSignature#signature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#signing_algorithm ArtifactsContainerImageSignature#signing_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#defined_tags ArtifactsContainerImageSignature#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#freeform_tags ArtifactsContainerImageSignature#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#id ArtifactsContainerImageSignature#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts">ArtifactsContainerImageSignatureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#compartment_id ArtifactsContainerImageSignature#compartment_id}.

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#image_id ArtifactsContainerImageSignature#image_id}.

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#kms_key_id ArtifactsContainerImageSignature#kms_key_id}.

---

##### `kms_key_version_id`<sup>Required</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#kms_key_version_id ArtifactsContainerImageSignature#kms_key_version_id}.

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#message ArtifactsContainerImageSignature#message}.

---

##### `signature`<sup>Required</sup> <a name="signature" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.signature"></a>

```python
signature: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#signature ArtifactsContainerImageSignature#signature}.

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#signing_algorithm ArtifactsContainerImageSignature#signing_algorithm}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#defined_tags ArtifactsContainerImageSignature#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#freeform_tags ArtifactsContainerImageSignature#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#id ArtifactsContainerImageSignature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureConfig.property.timeouts"></a>

```python
timeouts: ArtifactsContainerImageSignatureTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts">ArtifactsContainerImageSignatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#timeouts ArtifactsContainerImageSignature#timeouts}

---

### ArtifactsContainerImageSignatureTimeouts <a name="ArtifactsContainerImageSignatureTimeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import artifacts_container_image_signature

artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#create ArtifactsContainerImageSignature#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#delete ArtifactsContainerImageSignature#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#update ArtifactsContainerImageSignature#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#create ArtifactsContainerImageSignature#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#delete ArtifactsContainerImageSignature#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_image_signature#update ArtifactsContainerImageSignature#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactsContainerImageSignatureTimeoutsOutputReference <a name="ArtifactsContainerImageSignatureTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import artifacts_container_image_signature

artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts">ArtifactsContainerImageSignatureTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ArtifactsContainerImageSignatureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.artifactsContainerImageSignature.ArtifactsContainerImageSignatureTimeouts">ArtifactsContainerImageSignatureTimeouts</a>]

---



