# `datascienceModelArtifactExport` Submodule <a name="`datascienceModelArtifactExport` Submodule" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatascienceModelArtifactExport <a name="DatascienceModelArtifactExport" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export oci_datascience_model_artifact_export}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model_artifact_export

datascienceModelArtifactExport.DatascienceModelArtifactExport(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  artifact_source_type: str,
  model_id: str,
  namespace: str,
  source_bucket: str,
  source_object_name: str,
  source_region: str,
  id: str = None,
  timeouts: DatascienceModelArtifactExportTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.artifactSourceType">artifact_source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#artifact_source_type DatascienceModelArtifactExport#artifact_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.modelId">model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#model_id DatascienceModelArtifactExport#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#namespace DatascienceModelArtifactExport#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.sourceBucket">source_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_bucket DatascienceModelArtifactExport#source_bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.sourceObjectName">source_object_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_object_name DatascienceModelArtifactExport#source_object_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.sourceRegion">source_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_region DatascienceModelArtifactExport#source_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#id DatascienceModelArtifactExport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts">DatascienceModelArtifactExportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `artifact_source_type`<sup>Required</sup> <a name="artifact_source_type" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.artifactSourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#artifact_source_type DatascienceModelArtifactExport#artifact_source_type}.

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.modelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#model_id DatascienceModelArtifactExport#model_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#namespace DatascienceModelArtifactExport#namespace}.

---

##### `source_bucket`<sup>Required</sup> <a name="source_bucket" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.sourceBucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_bucket DatascienceModelArtifactExport#source_bucket}.

---

##### `source_object_name`<sup>Required</sup> <a name="source_object_name" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.sourceObjectName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_object_name DatascienceModelArtifactExport#source_object_name}.

---

##### `source_region`<sup>Required</sup> <a name="source_region" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.sourceRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_region DatascienceModelArtifactExport#source_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#id DatascienceModelArtifactExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts">DatascienceModelArtifactExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#timeouts DatascienceModelArtifactExport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#create DatascienceModelArtifactExport#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#delete DatascienceModelArtifactExport#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#update DatascienceModelArtifactExport#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatascienceModelArtifactExport resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model_artifact_export

datascienceModelArtifactExport.DatascienceModelArtifactExport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model_artifact_export

datascienceModelArtifactExport.DatascienceModelArtifactExport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model_artifact_export

datascienceModelArtifactExport.DatascienceModelArtifactExport.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model_artifact_export

datascienceModelArtifactExport.DatascienceModelArtifactExport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatascienceModelArtifactExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatascienceModelArtifactExport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatascienceModelArtifactExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatascienceModelArtifactExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference">DatascienceModelArtifactExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.artifactSourceTypeInput">artifact_source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.modelIdInput">model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceBucketInput">source_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceObjectNameInput">source_object_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceRegionInput">source_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts">DatascienceModelArtifactExportTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.artifactSourceType">artifact_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceBucket">source_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceObjectName">source_object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceRegion">source_region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.timeouts"></a>

```python
timeouts: DatascienceModelArtifactExportTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference">DatascienceModelArtifactExportTimeoutsOutputReference</a>

---

##### `artifact_source_type_input`<sup>Optional</sup> <a name="artifact_source_type_input" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.artifactSourceTypeInput"></a>

```python
artifact_source_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `model_id_input`<sup>Optional</sup> <a name="model_id_input" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.modelIdInput"></a>

```python
model_id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `source_bucket_input`<sup>Optional</sup> <a name="source_bucket_input" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceBucketInput"></a>

```python
source_bucket_input: str
```

- *Type:* str

---

##### `source_object_name_input`<sup>Optional</sup> <a name="source_object_name_input" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceObjectNameInput"></a>

```python
source_object_name_input: str
```

- *Type:* str

---

##### `source_region_input`<sup>Optional</sup> <a name="source_region_input" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceRegionInput"></a>

```python
source_region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatascienceModelArtifactExportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts">DatascienceModelArtifactExportTimeouts</a>]

---

##### `artifact_source_type`<sup>Required</sup> <a name="artifact_source_type" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.artifactSourceType"></a>

```python
artifact_source_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `source_bucket`<sup>Required</sup> <a name="source_bucket" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceBucket"></a>

```python
source_bucket: str
```

- *Type:* str

---

##### `source_object_name`<sup>Required</sup> <a name="source_object_name" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceObjectName"></a>

```python
source_object_name: str
```

- *Type:* str

---

##### `source_region`<sup>Required</sup> <a name="source_region" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.sourceRegion"></a>

```python
source_region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatascienceModelArtifactExportConfig <a name="DatascienceModelArtifactExportConfig" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model_artifact_export

datascienceModelArtifactExport.DatascienceModelArtifactExportConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  artifact_source_type: str,
  model_id: str,
  namespace: str,
  source_bucket: str,
  source_object_name: str,
  source_region: str,
  id: str = None,
  timeouts: DatascienceModelArtifactExportTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.artifactSourceType">artifact_source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#artifact_source_type DatascienceModelArtifactExport#artifact_source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.modelId">model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#model_id DatascienceModelArtifactExport#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#namespace DatascienceModelArtifactExport#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.sourceBucket">source_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_bucket DatascienceModelArtifactExport#source_bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.sourceObjectName">source_object_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_object_name DatascienceModelArtifactExport#source_object_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.sourceRegion">source_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_region DatascienceModelArtifactExport#source_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#id DatascienceModelArtifactExport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts">DatascienceModelArtifactExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `artifact_source_type`<sup>Required</sup> <a name="artifact_source_type" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.artifactSourceType"></a>

```python
artifact_source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#artifact_source_type DatascienceModelArtifactExport#artifact_source_type}.

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#model_id DatascienceModelArtifactExport#model_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#namespace DatascienceModelArtifactExport#namespace}.

---

##### `source_bucket`<sup>Required</sup> <a name="source_bucket" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.sourceBucket"></a>

```python
source_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_bucket DatascienceModelArtifactExport#source_bucket}.

---

##### `source_object_name`<sup>Required</sup> <a name="source_object_name" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.sourceObjectName"></a>

```python
source_object_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_object_name DatascienceModelArtifactExport#source_object_name}.

---

##### `source_region`<sup>Required</sup> <a name="source_region" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.sourceRegion"></a>

```python
source_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#source_region DatascienceModelArtifactExport#source_region}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#id DatascienceModelArtifactExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportConfig.property.timeouts"></a>

```python
timeouts: DatascienceModelArtifactExportTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts">DatascienceModelArtifactExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#timeouts DatascienceModelArtifactExport#timeouts}

---

### DatascienceModelArtifactExportTimeouts <a name="DatascienceModelArtifactExportTimeouts" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model_artifact_export

datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#create DatascienceModelArtifactExport#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#delete DatascienceModelArtifactExport#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#update DatascienceModelArtifactExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#create DatascienceModelArtifactExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#delete DatascienceModelArtifactExport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model_artifact_export#update DatascienceModelArtifactExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatascienceModelArtifactExportTimeoutsOutputReference <a name="DatascienceModelArtifactExportTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model_artifact_export

datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts">DatascienceModelArtifactExportTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatascienceModelArtifactExportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceModelArtifactExport.DatascienceModelArtifactExportTimeouts">DatascienceModelArtifactExportTimeouts</a>]

---



