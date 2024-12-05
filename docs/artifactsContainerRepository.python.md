# `artifactsContainerRepository` Submodule <a name="`artifactsContainerRepository` Submodule" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ArtifactsContainerRepository <a name="ArtifactsContainerRepository" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository oci_artifacts_container_repository}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import artifacts_container_repository

artifactsContainerRepository.ArtifactsContainerRepository(
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
  display_name: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_immutable: typing.Union[bool, IResolvable] = None,
  is_public: typing.Union[bool, IResolvable] = None,
  readme: ArtifactsContainerRepositoryReadme = None,
  timeouts: ArtifactsContainerRepositoryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#compartment_id ArtifactsContainerRepository#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#display_name ArtifactsContainerRepository#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#defined_tags ArtifactsContainerRepository#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#freeform_tags ArtifactsContainerRepository#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#id ArtifactsContainerRepository#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.isImmutable">is_immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#is_immutable ArtifactsContainerRepository#is_immutable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#is_public ArtifactsContainerRepository#is_public}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.readme">readme</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a></code> | readme block. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts">ArtifactsContainerRepositoryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#compartment_id ArtifactsContainerRepository#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#display_name ArtifactsContainerRepository#display_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#defined_tags ArtifactsContainerRepository#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#freeform_tags ArtifactsContainerRepository#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#id ArtifactsContainerRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_immutable`<sup>Optional</sup> <a name="is_immutable" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.isImmutable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#is_immutable ArtifactsContainerRepository#is_immutable}.

---

##### `is_public`<sup>Optional</sup> <a name="is_public" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.isPublic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#is_public ArtifactsContainerRepository#is_public}.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.readme"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a>

readme block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#readme ArtifactsContainerRepository#readme}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts">ArtifactsContainerRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#timeouts ArtifactsContainerRepository#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.putReadme">put_readme</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetIsImmutable">reset_is_immutable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetIsPublic">reset_is_public</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetReadme">reset_readme</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_readme` <a name="put_readme" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.putReadme"></a>

```python
def put_readme(
  content: str,
  format: str
) -> None
```

###### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.putReadme.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#content ArtifactsContainerRepository#content}.

---

###### `format`<sup>Required</sup> <a name="format" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.putReadme.parameter.format"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#format ArtifactsContainerRepository#format}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#create ArtifactsContainerRepository#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#delete ArtifactsContainerRepository#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#update ArtifactsContainerRepository#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_immutable` <a name="reset_is_immutable" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetIsImmutable"></a>

```python
def reset_is_immutable() -> None
```

##### `reset_is_public` <a name="reset_is_public" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetIsPublic"></a>

```python
def reset_is_public() -> None
```

##### `reset_readme` <a name="reset_readme" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetReadme"></a>

```python
def reset_readme() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ArtifactsContainerRepository resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import artifacts_container_repository

artifactsContainerRepository.ArtifactsContainerRepository.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import artifacts_container_repository

artifactsContainerRepository.ArtifactsContainerRepository.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import artifacts_container_repository

artifactsContainerRepository.ArtifactsContainerRepository.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import artifacts_container_repository

artifactsContainerRepository.ArtifactsContainerRepository.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ArtifactsContainerRepository resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ArtifactsContainerRepository to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ArtifactsContainerRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ArtifactsContainerRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.billableSizeInGbs">billable_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.imageCount">image_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.layerCount">layer_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.layersSizeInBytes">layers_size_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.readme">readme</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference">ArtifactsContainerRepositoryReadmeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeLastPushed">time_last_pushed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference">ArtifactsContainerRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isImmutableInput">is_immutable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isPublicInput">is_public_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.readmeInput">readme_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts">ArtifactsContainerRepositoryTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isImmutable">is_immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `billable_size_in_gbs`<sup>Required</sup> <a name="billable_size_in_gbs" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.billableSizeInGbs"></a>

```python
billable_size_in_gbs: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `image_count`<sup>Required</sup> <a name="image_count" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.imageCount"></a>

```python
image_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `layer_count`<sup>Required</sup> <a name="layer_count" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.layerCount"></a>

```python
layer_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `layers_size_in_bytes`<sup>Required</sup> <a name="layers_size_in_bytes" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.layersSizeInBytes"></a>

```python
layers_size_in_bytes: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `readme`<sup>Required</sup> <a name="readme" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.readme"></a>

```python
readme: ArtifactsContainerRepositoryReadmeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference">ArtifactsContainerRepositoryReadmeOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_pushed`<sup>Required</sup> <a name="time_last_pushed" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeLastPushed"></a>

```python
time_last_pushed: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeouts"></a>

```python
timeouts: ArtifactsContainerRepositoryTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference">ArtifactsContainerRepositoryTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_immutable_input`<sup>Optional</sup> <a name="is_immutable_input" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isImmutableInput"></a>

```python
is_immutable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_public_input`<sup>Optional</sup> <a name="is_public_input" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isPublicInput"></a>

```python
is_public_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `readme_input`<sup>Optional</sup> <a name="readme_input" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.readmeInput"></a>

```python
readme_input: ArtifactsContainerRepositoryReadme
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ArtifactsContainerRepositoryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts">ArtifactsContainerRepositoryTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_immutable`<sup>Required</sup> <a name="is_immutable" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isImmutable"></a>

```python
is_immutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_public`<sup>Required</sup> <a name="is_public" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.isPublic"></a>

```python
is_public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepository.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ArtifactsContainerRepositoryConfig <a name="ArtifactsContainerRepositoryConfig" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import artifacts_container_repository

artifactsContainerRepository.ArtifactsContainerRepositoryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_immutable: typing.Union[bool, IResolvable] = None,
  is_public: typing.Union[bool, IResolvable] = None,
  readme: ArtifactsContainerRepositoryReadme = None,
  timeouts: ArtifactsContainerRepositoryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#compartment_id ArtifactsContainerRepository#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#display_name ArtifactsContainerRepository#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#defined_tags ArtifactsContainerRepository#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#freeform_tags ArtifactsContainerRepository#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#id ArtifactsContainerRepository#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.isImmutable">is_immutable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#is_immutable ArtifactsContainerRepository#is_immutable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#is_public ArtifactsContainerRepository#is_public}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.readme">readme</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a></code> | readme block. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts">ArtifactsContainerRepositoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#compartment_id ArtifactsContainerRepository#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#display_name ArtifactsContainerRepository#display_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#defined_tags ArtifactsContainerRepository#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#freeform_tags ArtifactsContainerRepository#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#id ArtifactsContainerRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_immutable`<sup>Optional</sup> <a name="is_immutable" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.isImmutable"></a>

```python
is_immutable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#is_immutable ArtifactsContainerRepository#is_immutable}.

---

##### `is_public`<sup>Optional</sup> <a name="is_public" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.isPublic"></a>

```python
is_public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#is_public ArtifactsContainerRepository#is_public}.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.readme"></a>

```python
readme: ArtifactsContainerRepositoryReadme
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a>

readme block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#readme ArtifactsContainerRepository#readme}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryConfig.property.timeouts"></a>

```python
timeouts: ArtifactsContainerRepositoryTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts">ArtifactsContainerRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#timeouts ArtifactsContainerRepository#timeouts}

---

### ArtifactsContainerRepositoryReadme <a name="ArtifactsContainerRepositoryReadme" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import artifacts_container_repository

artifactsContainerRepository.ArtifactsContainerRepositoryReadme(
  content: str,
  format: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#content ArtifactsContainerRepository#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#format ArtifactsContainerRepository#format}. |

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#content ArtifactsContainerRepository#content}.

---

##### `format`<sup>Required</sup> <a name="format" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#format ArtifactsContainerRepository#format}.

---

### ArtifactsContainerRepositoryTimeouts <a name="ArtifactsContainerRepositoryTimeouts" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import artifacts_container_repository

artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#create ArtifactsContainerRepository#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#delete ArtifactsContainerRepository#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#update ArtifactsContainerRepository#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#create ArtifactsContainerRepository#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#delete ArtifactsContainerRepository#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/artifacts_container_repository#update ArtifactsContainerRepository#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactsContainerRepositoryReadmeOutputReference <a name="ArtifactsContainerRepositoryReadmeOutputReference" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import artifacts_container_repository

artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadmeOutputReference.property.internalValue"></a>

```python
internal_value: ArtifactsContainerRepositoryReadme
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryReadme">ArtifactsContainerRepositoryReadme</a>

---


### ArtifactsContainerRepositoryTimeoutsOutputReference <a name="ArtifactsContainerRepositoryTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import artifacts_container_repository

artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts">ArtifactsContainerRepositoryTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ArtifactsContainerRepositoryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.artifactsContainerRepository.ArtifactsContainerRepositoryTimeouts">ArtifactsContainerRepositoryTimeouts</a>]

---



