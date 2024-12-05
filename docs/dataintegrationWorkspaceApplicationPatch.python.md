# `dataintegrationWorkspaceApplicationPatch` Submodule <a name="`dataintegrationWorkspaceApplicationPatch` Submodule" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataintegrationWorkspaceApplicationPatch <a name="DataintegrationWorkspaceApplicationPatch" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch oci_dataintegration_workspace_application_patch}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_key: str,
  name: str,
  patch_type: str,
  workspace_id: str,
  description: str = None,
  id: str = None,
  identifier: str = None,
  key: str = None,
  model_version: str = None,
  object_keys: typing.List[str] = None,
  object_status: typing.Union[int, float] = None,
  registry_metadata: DataintegrationWorkspaceApplicationPatchRegistryMetadata = None,
  timeouts: DataintegrationWorkspaceApplicationPatchTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.applicationKey">application_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#application_key DataintegrationWorkspaceApplicationPatch#application_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#name DataintegrationWorkspaceApplicationPatch#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.patchType">patch_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#patch_type DataintegrationWorkspaceApplicationPatch#patch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#workspace_id DataintegrationWorkspaceApplicationPatch#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#description DataintegrationWorkspaceApplicationPatch#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#id DataintegrationWorkspaceApplicationPatch#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#identifier DataintegrationWorkspaceApplicationPatch#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#key DataintegrationWorkspaceApplicationPatch#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.modelVersion">model_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#model_version DataintegrationWorkspaceApplicationPatch#model_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.objectKeys">object_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#object_keys DataintegrationWorkspaceApplicationPatch#object_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.objectStatus">object_status</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#object_status DataintegrationWorkspaceApplicationPatch#object_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.registryMetadata">registry_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata">DataintegrationWorkspaceApplicationPatchRegistryMetadata</a></code> | registry_metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts">DataintegrationWorkspaceApplicationPatchTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_key`<sup>Required</sup> <a name="application_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.applicationKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#application_key DataintegrationWorkspaceApplicationPatch#application_key}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#name DataintegrationWorkspaceApplicationPatch#name}.

---

##### `patch_type`<sup>Required</sup> <a name="patch_type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.patchType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#patch_type DataintegrationWorkspaceApplicationPatch#patch_type}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#workspace_id DataintegrationWorkspaceApplicationPatch#workspace_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#description DataintegrationWorkspaceApplicationPatch#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#id DataintegrationWorkspaceApplicationPatch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#identifier DataintegrationWorkspaceApplicationPatch#identifier}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#key DataintegrationWorkspaceApplicationPatch#key}.

---

##### `model_version`<sup>Optional</sup> <a name="model_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.modelVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#model_version DataintegrationWorkspaceApplicationPatch#model_version}.

---

##### `object_keys`<sup>Optional</sup> <a name="object_keys" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.objectKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#object_keys DataintegrationWorkspaceApplicationPatch#object_keys}.

---

##### `object_status`<sup>Optional</sup> <a name="object_status" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.objectStatus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#object_status DataintegrationWorkspaceApplicationPatch#object_status}.

---

##### `registry_metadata`<sup>Optional</sup> <a name="registry_metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.registryMetadata"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata">DataintegrationWorkspaceApplicationPatchRegistryMetadata</a>

registry_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#registry_metadata DataintegrationWorkspaceApplicationPatch#registry_metadata}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts">DataintegrationWorkspaceApplicationPatchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#timeouts DataintegrationWorkspaceApplicationPatch#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.putRegistryMetadata">put_registry_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetIdentifier">reset_identifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetModelVersion">reset_model_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetObjectKeys">reset_object_keys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetObjectStatus">reset_object_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetRegistryMetadata">reset_registry_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_registry_metadata` <a name="put_registry_metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.putRegistryMetadata"></a>

```python
def put_registry_metadata(
  aggregator_key: str = None,
  is_favorite: typing.Union[bool, IResolvable] = None,
  key: str = None,
  labels: typing.List[str] = None,
  registry_version: typing.Union[int, float] = None
) -> None
```

###### `aggregator_key`<sup>Optional</sup> <a name="aggregator_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.putRegistryMetadata.parameter.aggregatorKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#aggregator_key DataintegrationWorkspaceApplicationPatch#aggregator_key}.

---

###### `is_favorite`<sup>Optional</sup> <a name="is_favorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.putRegistryMetadata.parameter.isFavorite"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#is_favorite DataintegrationWorkspaceApplicationPatch#is_favorite}.

---

###### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.putRegistryMetadata.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#key DataintegrationWorkspaceApplicationPatch#key}.

---

###### `labels`<sup>Optional</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.putRegistryMetadata.parameter.labels"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#labels DataintegrationWorkspaceApplicationPatch#labels}.

---

###### `registry_version`<sup>Optional</sup> <a name="registry_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.putRegistryMetadata.parameter.registryVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#registry_version DataintegrationWorkspaceApplicationPatch#registry_version}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#create DataintegrationWorkspaceApplicationPatch#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#delete DataintegrationWorkspaceApplicationPatch#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#update DataintegrationWorkspaceApplicationPatch#update}.

---

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identifier` <a name="reset_identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetIdentifier"></a>

```python
def reset_identifier() -> None
```

##### `reset_key` <a name="reset_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_model_version` <a name="reset_model_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetModelVersion"></a>

```python
def reset_model_version() -> None
```

##### `reset_object_keys` <a name="reset_object_keys" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetObjectKeys"></a>

```python
def reset_object_keys() -> None
```

##### `reset_object_status` <a name="reset_object_status" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetObjectStatus"></a>

```python
def reset_object_status() -> None
```

##### `reset_registry_metadata` <a name="reset_registry_metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetRegistryMetadata"></a>

```python
def reset_registry_metadata() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataintegrationWorkspaceApplicationPatch resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataintegrationWorkspaceApplicationPatch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataintegrationWorkspaceApplicationPatch to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataintegrationWorkspaceApplicationPatch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataintegrationWorkspaceApplicationPatch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.applicationVersion">application_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.dependentObjectMetadata">dependent_object_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList">DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.errorMessages">error_messages</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.keyMap">key_map</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList">DataintegrationWorkspaceApplicationPatchMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.modelType">model_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.objectVersion">object_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.parentRef">parent_ref</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList">DataintegrationWorkspaceApplicationPatchParentRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.patchObjectMetadata">patch_object_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList">DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.patchStatus">patch_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.registryMetadata">registry_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference">DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference">DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.timePatched">time_patched</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.applicationKeyInput">application_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.modelVersionInput">model_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.objectKeysInput">object_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.objectStatusInput">object_status_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.patchTypeInput">patch_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.registryMetadataInput">registry_metadata_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata">DataintegrationWorkspaceApplicationPatchRegistryMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts">DataintegrationWorkspaceApplicationPatchTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.applicationKey">application_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.modelVersion">model_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.objectKeys">object_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.objectStatus">object_status</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.patchType">patch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_version`<sup>Required</sup> <a name="application_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.applicationVersion"></a>

```python
application_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dependent_object_metadata`<sup>Required</sup> <a name="dependent_object_metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.dependentObjectMetadata"></a>

```python
dependent_object_metadata: DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList">DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList</a>

---

##### `error_messages`<sup>Required</sup> <a name="error_messages" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.errorMessages"></a>

```python
error_messages: StringMap
```

- *Type:* cdktf.StringMap

---

##### `key_map`<sup>Required</sup> <a name="key_map" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.keyMap"></a>

```python
key_map: StringMap
```

- *Type:* cdktf.StringMap

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.metadata"></a>

```python
metadata: DataintegrationWorkspaceApplicationPatchMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList">DataintegrationWorkspaceApplicationPatchMetadataList</a>

---

##### `model_type`<sup>Required</sup> <a name="model_type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.modelType"></a>

```python
model_type: str
```

- *Type:* str

---

##### `object_version`<sup>Required</sup> <a name="object_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.objectVersion"></a>

```python
object_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_ref`<sup>Required</sup> <a name="parent_ref" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.parentRef"></a>

```python
parent_ref: DataintegrationWorkspaceApplicationPatchParentRefList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList">DataintegrationWorkspaceApplicationPatchParentRefList</a>

---

##### `patch_object_metadata`<sup>Required</sup> <a name="patch_object_metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.patchObjectMetadata"></a>

```python
patch_object_metadata: DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList">DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList</a>

---

##### `patch_status`<sup>Required</sup> <a name="patch_status" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.patchStatus"></a>

```python
patch_status: str
```

- *Type:* str

---

##### `registry_metadata`<sup>Required</sup> <a name="registry_metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.registryMetadata"></a>

```python
registry_metadata: DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference">DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.timeouts"></a>

```python
timeouts: DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference">DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference</a>

---

##### `time_patched`<sup>Required</sup> <a name="time_patched" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.timePatched"></a>

```python
time_patched: str
```

- *Type:* str

---

##### `application_key_input`<sup>Optional</sup> <a name="application_key_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.applicationKeyInput"></a>

```python
application_key_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `model_version_input`<sup>Optional</sup> <a name="model_version_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.modelVersionInput"></a>

```python
model_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `object_keys_input`<sup>Optional</sup> <a name="object_keys_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.objectKeysInput"></a>

```python
object_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_status_input`<sup>Optional</sup> <a name="object_status_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.objectStatusInput"></a>

```python
object_status_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `patch_type_input`<sup>Optional</sup> <a name="patch_type_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.patchTypeInput"></a>

```python
patch_type_input: str
```

- *Type:* str

---

##### `registry_metadata_input`<sup>Optional</sup> <a name="registry_metadata_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.registryMetadataInput"></a>

```python
registry_metadata_input: DataintegrationWorkspaceApplicationPatchRegistryMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata">DataintegrationWorkspaceApplicationPatchRegistryMetadata</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataintegrationWorkspaceApplicationPatchTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts">DataintegrationWorkspaceApplicationPatchTimeouts</a>]

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `application_key`<sup>Required</sup> <a name="application_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.applicationKey"></a>

```python
application_key: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `model_version`<sup>Required</sup> <a name="model_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.modelVersion"></a>

```python
model_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `object_keys`<sup>Required</sup> <a name="object_keys" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.objectKeys"></a>

```python
object_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_status`<sup>Required</sup> <a name="object_status" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.objectStatus"></a>

```python
object_status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `patch_type`<sup>Required</sup> <a name="patch_type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.patchType"></a>

```python
patch_type: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatch.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataintegrationWorkspaceApplicationPatchConfig <a name="DataintegrationWorkspaceApplicationPatchConfig" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_key: str,
  name: str,
  patch_type: str,
  workspace_id: str,
  description: str = None,
  id: str = None,
  identifier: str = None,
  key: str = None,
  model_version: str = None,
  object_keys: typing.List[str] = None,
  object_status: typing.Union[int, float] = None,
  registry_metadata: DataintegrationWorkspaceApplicationPatchRegistryMetadata = None,
  timeouts: DataintegrationWorkspaceApplicationPatchTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.applicationKey">application_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#application_key DataintegrationWorkspaceApplicationPatch#application_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#name DataintegrationWorkspaceApplicationPatch#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.patchType">patch_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#patch_type DataintegrationWorkspaceApplicationPatch#patch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#workspace_id DataintegrationWorkspaceApplicationPatch#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#description DataintegrationWorkspaceApplicationPatch#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#id DataintegrationWorkspaceApplicationPatch#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#identifier DataintegrationWorkspaceApplicationPatch#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#key DataintegrationWorkspaceApplicationPatch#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.modelVersion">model_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#model_version DataintegrationWorkspaceApplicationPatch#model_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.objectKeys">object_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#object_keys DataintegrationWorkspaceApplicationPatch#object_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.objectStatus">object_status</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#object_status DataintegrationWorkspaceApplicationPatch#object_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.registryMetadata">registry_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata">DataintegrationWorkspaceApplicationPatchRegistryMetadata</a></code> | registry_metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts">DataintegrationWorkspaceApplicationPatchTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_key`<sup>Required</sup> <a name="application_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.applicationKey"></a>

```python
application_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#application_key DataintegrationWorkspaceApplicationPatch#application_key}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#name DataintegrationWorkspaceApplicationPatch#name}.

---

##### `patch_type`<sup>Required</sup> <a name="patch_type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.patchType"></a>

```python
patch_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#patch_type DataintegrationWorkspaceApplicationPatch#patch_type}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#workspace_id DataintegrationWorkspaceApplicationPatch#workspace_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#description DataintegrationWorkspaceApplicationPatch#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#id DataintegrationWorkspaceApplicationPatch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#identifier DataintegrationWorkspaceApplicationPatch#identifier}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#key DataintegrationWorkspaceApplicationPatch#key}.

---

##### `model_version`<sup>Optional</sup> <a name="model_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.modelVersion"></a>

```python
model_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#model_version DataintegrationWorkspaceApplicationPatch#model_version}.

---

##### `object_keys`<sup>Optional</sup> <a name="object_keys" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.objectKeys"></a>

```python
object_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#object_keys DataintegrationWorkspaceApplicationPatch#object_keys}.

---

##### `object_status`<sup>Optional</sup> <a name="object_status" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.objectStatus"></a>

```python
object_status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#object_status DataintegrationWorkspaceApplicationPatch#object_status}.

---

##### `registry_metadata`<sup>Optional</sup> <a name="registry_metadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.registryMetadata"></a>

```python
registry_metadata: DataintegrationWorkspaceApplicationPatchRegistryMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata">DataintegrationWorkspaceApplicationPatchRegistryMetadata</a>

registry_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#registry_metadata DataintegrationWorkspaceApplicationPatch#registry_metadata}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchConfig.property.timeouts"></a>

```python
timeouts: DataintegrationWorkspaceApplicationPatchTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts">DataintegrationWorkspaceApplicationPatchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#timeouts DataintegrationWorkspaceApplicationPatch#timeouts}

---

### DataintegrationWorkspaceApplicationPatchDependentObjectMetadata <a name="DataintegrationWorkspaceApplicationPatchDependentObjectMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadata()
```


### DataintegrationWorkspaceApplicationPatchMetadata <a name="DataintegrationWorkspaceApplicationPatchMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadata()
```


### DataintegrationWorkspaceApplicationPatchMetadataAggregator <a name="DataintegrationWorkspaceApplicationPatchMetadataAggregator" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregator.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregator()
```


### DataintegrationWorkspaceApplicationPatchMetadataCountStatistics <a name="DataintegrationWorkspaceApplicationPatchMetadataCountStatistics" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatistics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatistics()
```


### DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct <a name="DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct()
```


### DataintegrationWorkspaceApplicationPatchParentRef <a name="DataintegrationWorkspaceApplicationPatchParentRef" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRef.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRef()
```


### DataintegrationWorkspaceApplicationPatchPatchObjectMetadata <a name="DataintegrationWorkspaceApplicationPatchPatchObjectMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadata()
```


### DataintegrationWorkspaceApplicationPatchRegistryMetadata <a name="DataintegrationWorkspaceApplicationPatchRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata(
  aggregator_key: str = None,
  is_favorite: typing.Union[bool, IResolvable] = None,
  key: str = None,
  labels: typing.List[str] = None,
  registry_version: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.property.aggregatorKey">aggregator_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#aggregator_key DataintegrationWorkspaceApplicationPatch#aggregator_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.property.isFavorite">is_favorite</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#is_favorite DataintegrationWorkspaceApplicationPatch#is_favorite}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#key DataintegrationWorkspaceApplicationPatch#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.property.labels">labels</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#labels DataintegrationWorkspaceApplicationPatch#labels}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.property.registryVersion">registry_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#registry_version DataintegrationWorkspaceApplicationPatch#registry_version}. |

---

##### `aggregator_key`<sup>Optional</sup> <a name="aggregator_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.property.aggregatorKey"></a>

```python
aggregator_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#aggregator_key DataintegrationWorkspaceApplicationPatch#aggregator_key}.

---

##### `is_favorite`<sup>Optional</sup> <a name="is_favorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.property.isFavorite"></a>

```python
is_favorite: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#is_favorite DataintegrationWorkspaceApplicationPatch#is_favorite}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#key DataintegrationWorkspaceApplicationPatch#key}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#labels DataintegrationWorkspaceApplicationPatch#labels}.

---

##### `registry_version`<sup>Optional</sup> <a name="registry_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata.property.registryVersion"></a>

```python
registry_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#registry_version DataintegrationWorkspaceApplicationPatch#registry_version}.

---

### DataintegrationWorkspaceApplicationPatchTimeouts <a name="DataintegrationWorkspaceApplicationPatchTimeouts" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#create DataintegrationWorkspaceApplicationPatch#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#delete DataintegrationWorkspaceApplicationPatch#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#update DataintegrationWorkspaceApplicationPatch#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#create DataintegrationWorkspaceApplicationPatch#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#delete DataintegrationWorkspaceApplicationPatch#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataintegration_workspace_application_patch#update DataintegrationWorkspaceApplicationPatch#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList <a name="DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference <a name="DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.namePath">name_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.objectVersion">object_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadata">DataintegrationWorkspaceApplicationPatchDependentObjectMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_path`<sup>Required</sup> <a name="name_path" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.namePath"></a>

```python
name_path: str
```

- *Type:* str

---

##### `object_version`<sup>Required</sup> <a name="object_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.objectVersion"></a>

```python
object_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataintegrationWorkspaceApplicationPatchDependentObjectMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchDependentObjectMetadata">DataintegrationWorkspaceApplicationPatchDependentObjectMetadata</a>

---


### DataintegrationWorkspaceApplicationPatchMetadataAggregatorList <a name="DataintegrationWorkspaceApplicationPatchMetadataAggregatorList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference <a name="DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregator">DataintegrationWorkspaceApplicationPatchMetadataAggregator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference.property.internalValue"></a>

```python
internal_value: DataintegrationWorkspaceApplicationPatchMetadataAggregator
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregator">DataintegrationWorkspaceApplicationPatchMetadataAggregator</a>

---


### DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList <a name="DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList <a name="DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference <a name="DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount">object_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct">DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_count`<sup>Required</sup> <a name="object_count" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount"></a>

```python
object_count: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct">DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct</a>

---


### DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference <a name="DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.property.objectTypeCountList">object_type_count_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList">DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatistics">DataintegrationWorkspaceApplicationPatchMetadataCountStatistics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_type_count_list`<sup>Required</sup> <a name="object_type_count_list" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.property.objectTypeCountList"></a>

```python
object_type_count_list: DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList">DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference.property.internalValue"></a>

```python
internal_value: DataintegrationWorkspaceApplicationPatchMetadataCountStatistics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatistics">DataintegrationWorkspaceApplicationPatchMetadataCountStatistics</a>

---


### DataintegrationWorkspaceApplicationPatchMetadataList <a name="DataintegrationWorkspaceApplicationPatchMetadataList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataintegrationWorkspaceApplicationPatchMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataintegrationWorkspaceApplicationPatchMetadataOutputReference <a name="DataintegrationWorkspaceApplicationPatchMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.aggregator">aggregator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList">DataintegrationWorkspaceApplicationPatchMetadataAggregatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.aggregatorKey">aggregator_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.countStatistics">count_statistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList">DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.createdByName">created_by_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.identifierPath">identifier_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.infoFields">info_fields</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.isFavorite">is_favorite</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.registryVersion">registry_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.updatedByName">updated_by_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadata">DataintegrationWorkspaceApplicationPatchMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregator`<sup>Required</sup> <a name="aggregator" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.aggregator"></a>

```python
aggregator: DataintegrationWorkspaceApplicationPatchMetadataAggregatorList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataAggregatorList">DataintegrationWorkspaceApplicationPatchMetadataAggregatorList</a>

---

##### `aggregator_key`<sup>Required</sup> <a name="aggregator_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.aggregatorKey"></a>

```python
aggregator_key: str
```

- *Type:* str

---

##### `count_statistics`<sup>Required</sup> <a name="count_statistics" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.countStatistics"></a>

```python
count_statistics: DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList">DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList</a>

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `created_by_name`<sup>Required</sup> <a name="created_by_name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.createdByName"></a>

```python
created_by_name: str
```

- *Type:* str

---

##### `identifier_path`<sup>Required</sup> <a name="identifier_path" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.identifierPath"></a>

```python
identifier_path: str
```

- *Type:* str

---

##### `info_fields`<sup>Required</sup> <a name="info_fields" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.infoFields"></a>

```python
info_fields: StringMap
```

- *Type:* cdktf.StringMap

---

##### `is_favorite`<sup>Required</sup> <a name="is_favorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.isFavorite"></a>

```python
is_favorite: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `registry_version`<sup>Required</sup> <a name="registry_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.registryVersion"></a>

```python
registry_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `updated_by_name`<sup>Required</sup> <a name="updated_by_name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.updatedByName"></a>

```python
updated_by_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataintegrationWorkspaceApplicationPatchMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchMetadata">DataintegrationWorkspaceApplicationPatchMetadata</a>

---


### DataintegrationWorkspaceApplicationPatchParentRefList <a name="DataintegrationWorkspaceApplicationPatchParentRefList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataintegrationWorkspaceApplicationPatchParentRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataintegrationWorkspaceApplicationPatchParentRefOutputReference <a name="DataintegrationWorkspaceApplicationPatchParentRefOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.property.rootDocId">root_doc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRef">DataintegrationWorkspaceApplicationPatchParentRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `root_doc_id`<sup>Required</sup> <a name="root_doc_id" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.property.rootDocId"></a>

```python
root_doc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRefOutputReference.property.internalValue"></a>

```python
internal_value: DataintegrationWorkspaceApplicationPatchParentRef
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchParentRef">DataintegrationWorkspaceApplicationPatchParentRef</a>

---


### DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList <a name="DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference <a name="DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.namePath">name_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.objectVersion">object_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadata">DataintegrationWorkspaceApplicationPatchPatchObjectMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_path`<sup>Required</sup> <a name="name_path" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.namePath"></a>

```python
name_path: str
```

- *Type:* str

---

##### `object_version`<sup>Required</sup> <a name="object_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.objectVersion"></a>

```python
object_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataintegrationWorkspaceApplicationPatchPatchObjectMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchPatchObjectMetadata">DataintegrationWorkspaceApplicationPatchPatchObjectMetadata</a>

---


### DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference <a name="DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resetAggregatorKey">reset_aggregator_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resetIsFavorite">reset_is_favorite</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resetRegistryVersion">reset_registry_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aggregator_key` <a name="reset_aggregator_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resetAggregatorKey"></a>

```python
def reset_aggregator_key() -> None
```

##### `reset_is_favorite` <a name="reset_is_favorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resetIsFavorite"></a>

```python
def reset_is_favorite() -> None
```

##### `reset_key` <a name="reset_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_labels` <a name="reset_labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_registry_version` <a name="reset_registry_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.resetRegistryVersion"></a>

```python
def reset_registry_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.aggregatorKeyInput">aggregator_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.isFavoriteInput">is_favorite_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.registryVersionInput">registry_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.aggregatorKey">aggregator_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.isFavorite">is_favorite</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.registryVersion">registry_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata">DataintegrationWorkspaceApplicationPatchRegistryMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregator_key_input`<sup>Optional</sup> <a name="aggregator_key_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.aggregatorKeyInput"></a>

```python
aggregator_key_input: str
```

- *Type:* str

---

##### `is_favorite_input`<sup>Optional</sup> <a name="is_favorite_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.isFavoriteInput"></a>

```python
is_favorite_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `registry_version_input`<sup>Optional</sup> <a name="registry_version_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.registryVersionInput"></a>

```python
registry_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aggregator_key`<sup>Required</sup> <a name="aggregator_key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.aggregatorKey"></a>

```python
aggregator_key: str
```

- *Type:* str

---

##### `is_favorite`<sup>Required</sup> <a name="is_favorite" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.isFavorite"></a>

```python
is_favorite: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `registry_version`<sup>Required</sup> <a name="registry_version" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.registryVersion"></a>

```python
registry_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataintegrationWorkspaceApplicationPatchRegistryMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchRegistryMetadata">DataintegrationWorkspaceApplicationPatchRegistryMetadata</a>

---


### DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference <a name="DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataintegration_workspace_application_patch

dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts">DataintegrationWorkspaceApplicationPatchTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataintegrationWorkspaceApplicationPatchTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataintegrationWorkspaceApplicationPatch.DataintegrationWorkspaceApplicationPatchTimeouts">DataintegrationWorkspaceApplicationPatchTimeouts</a>]

---



