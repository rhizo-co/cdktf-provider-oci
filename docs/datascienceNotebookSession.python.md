# `datascienceNotebookSession` Submodule <a name="`datascienceNotebookSession` Submodule" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatascienceNotebookSession <a name="DatascienceNotebookSession" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session oci_datascience_notebook_session}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSession(
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
  project_id: str,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  notebook_session_config_details: DatascienceNotebookSessionNotebookSessionConfigDetails = None,
  notebook_session_configuration_details: DatascienceNotebookSessionNotebookSessionConfigurationDetails = None,
  notebook_session_runtime_config_details: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails = None,
  notebook_session_storage_mount_configuration_details_list: typing.Union[IResolvable, typing.List[DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct]] = None,
  state: str = None,
  timeouts: DatascienceNotebookSessionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#compartment_id DatascienceNotebookSession#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#project_id DatascienceNotebookSession#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#defined_tags DatascienceNotebookSession#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#display_name DatascienceNotebookSession#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#freeform_tags DatascienceNotebookSession#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#id DatascienceNotebookSession#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.notebookSessionConfigDetails">notebook_session_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetails</a></code> | notebook_session_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.notebookSessionConfigurationDetails">notebook_session_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetails</a></code> | notebook_session_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.notebookSessionRuntimeConfigDetails">notebook_session_runtime_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails</a></code> | notebook_session_runtime_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.notebookSessionStorageMountConfigurationDetailsList">notebook_session_storage_mount_configuration_details_list</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct">DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct</a>]]</code> | notebook_session_storage_mount_configuration_details_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#state DatascienceNotebookSession#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts">DatascienceNotebookSessionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#compartment_id DatascienceNotebookSession#compartment_id}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#project_id DatascienceNotebookSession#project_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#defined_tags DatascienceNotebookSession#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#display_name DatascienceNotebookSession#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#freeform_tags DatascienceNotebookSession#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#id DatascienceNotebookSession#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notebook_session_config_details`<sup>Optional</sup> <a name="notebook_session_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.notebookSessionConfigDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetails</a>

notebook_session_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_config_details DatascienceNotebookSession#notebook_session_config_details}

---

##### `notebook_session_configuration_details`<sup>Optional</sup> <a name="notebook_session_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.notebookSessionConfigurationDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetails</a>

notebook_session_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_configuration_details DatascienceNotebookSession#notebook_session_configuration_details}

---

##### `notebook_session_runtime_config_details`<sup>Optional</sup> <a name="notebook_session_runtime_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.notebookSessionRuntimeConfigDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails</a>

notebook_session_runtime_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_runtime_config_details DatascienceNotebookSession#notebook_session_runtime_config_details}

---

##### `notebook_session_storage_mount_configuration_details_list`<sup>Optional</sup> <a name="notebook_session_storage_mount_configuration_details_list" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.notebookSessionStorageMountConfigurationDetailsList"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct">DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct</a>]]

notebook_session_storage_mount_configuration_details_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_storage_mount_configuration_details_list DatascienceNotebookSession#notebook_session_storage_mount_configuration_details_list}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#state DatascienceNotebookSession#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts">DatascienceNotebookSessionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#timeouts DatascienceNotebookSession#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionConfigDetails">put_notebook_session_config_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionConfigurationDetails">put_notebook_session_configuration_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionRuntimeConfigDetails">put_notebook_session_runtime_config_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionStorageMountConfigurationDetailsList">put_notebook_session_storage_mount_configuration_details_list</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetNotebookSessionConfigDetails">reset_notebook_session_config_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetNotebookSessionConfigurationDetails">reset_notebook_session_configuration_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetNotebookSessionRuntimeConfigDetails">reset_notebook_session_runtime_config_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetNotebookSessionStorageMountConfigurationDetailsList">reset_notebook_session_storage_mount_configuration_details_list</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_notebook_session_config_details` <a name="put_notebook_session_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionConfigDetails"></a>

```python
def put_notebook_session_config_details(
  shape: str,
  block_storage_size_in_gbs: typing.Union[int, float] = None,
  notebook_session_shape_config_details: DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails = None,
  private_endpoint_id: str = None,
  subnet_id: str = None
) -> None
```

###### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionConfigDetails.parameter.shape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#shape DatascienceNotebookSession#shape}.

---

###### `block_storage_size_in_gbs`<sup>Optional</sup> <a name="block_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionConfigDetails.parameter.blockStorageSizeInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#block_storage_size_in_gbs DatascienceNotebookSession#block_storage_size_in_gbs}.

---

###### `notebook_session_shape_config_details`<sup>Optional</sup> <a name="notebook_session_shape_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionConfigDetails.parameter.notebookSessionShapeConfigDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a>

notebook_session_shape_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_shape_config_details DatascienceNotebookSession#notebook_session_shape_config_details}

---

###### `private_endpoint_id`<sup>Optional</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionConfigDetails.parameter.privateEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#private_endpoint_id DatascienceNotebookSession#private_endpoint_id}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionConfigDetails.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#subnet_id DatascienceNotebookSession#subnet_id}.

---

##### `put_notebook_session_configuration_details` <a name="put_notebook_session_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionConfigurationDetails"></a>

```python
def put_notebook_session_configuration_details(
  shape: str,
  subnet_id: str,
  block_storage_size_in_gbs: typing.Union[int, float] = None,
  notebook_session_shape_config_details: DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails = None,
  private_endpoint_id: str = None
) -> None
```

###### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionConfigurationDetails.parameter.shape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#shape DatascienceNotebookSession#shape}.

---

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionConfigurationDetails.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#subnet_id DatascienceNotebookSession#subnet_id}.

---

###### `block_storage_size_in_gbs`<sup>Optional</sup> <a name="block_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionConfigurationDetails.parameter.blockStorageSizeInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#block_storage_size_in_gbs DatascienceNotebookSession#block_storage_size_in_gbs}.

---

###### `notebook_session_shape_config_details`<sup>Optional</sup> <a name="notebook_session_shape_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionConfigurationDetails.parameter.notebookSessionShapeConfigDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a>

notebook_session_shape_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_shape_config_details DatascienceNotebookSession#notebook_session_shape_config_details}

---

###### `private_endpoint_id`<sup>Optional</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionConfigurationDetails.parameter.privateEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#private_endpoint_id DatascienceNotebookSession#private_endpoint_id}.

---

##### `put_notebook_session_runtime_config_details` <a name="put_notebook_session_runtime_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionRuntimeConfigDetails"></a>

```python
def put_notebook_session_runtime_config_details(
  custom_environment_variables: typing.Mapping[str] = None,
  notebook_session_git_config_details: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails = None
) -> None
```

###### `custom_environment_variables`<sup>Optional</sup> <a name="custom_environment_variables" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionRuntimeConfigDetails.parameter.customEnvironmentVariables"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#custom_environment_variables DatascienceNotebookSession#custom_environment_variables}.

---

###### `notebook_session_git_config_details`<sup>Optional</sup> <a name="notebook_session_git_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionRuntimeConfigDetails.parameter.notebookSessionGitConfigDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a>

notebook_session_git_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_git_config_details DatascienceNotebookSession#notebook_session_git_config_details}

---

##### `put_notebook_session_storage_mount_configuration_details_list` <a name="put_notebook_session_storage_mount_configuration_details_list" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionStorageMountConfigurationDetailsList"></a>

```python
def put_notebook_session_storage_mount_configuration_details_list(
  value: typing.Union[IResolvable, typing.List[DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putNotebookSessionStorageMountConfigurationDetailsList.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct">DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#create DatascienceNotebookSession#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#delete DatascienceNotebookSession#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#update DatascienceNotebookSession#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_notebook_session_config_details` <a name="reset_notebook_session_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetNotebookSessionConfigDetails"></a>

```python
def reset_notebook_session_config_details() -> None
```

##### `reset_notebook_session_configuration_details` <a name="reset_notebook_session_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetNotebookSessionConfigurationDetails"></a>

```python
def reset_notebook_session_configuration_details() -> None
```

##### `reset_notebook_session_runtime_config_details` <a name="reset_notebook_session_runtime_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetNotebookSessionRuntimeConfigDetails"></a>

```python
def reset_notebook_session_runtime_config_details() -> None
```

##### `reset_notebook_session_storage_mount_configuration_details_list` <a name="reset_notebook_session_storage_mount_configuration_details_list" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetNotebookSessionStorageMountConfigurationDetailsList"></a>

```python
def reset_notebook_session_storage_mount_configuration_details_list() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatascienceNotebookSession resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSession.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSession.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSession.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSession.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatascienceNotebookSession resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatascienceNotebookSession to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatascienceNotebookSession that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatascienceNotebookSession to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionConfigDetails">notebook_session_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference">DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionConfigurationDetails">notebook_session_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference">DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionRuntimeConfigDetails">notebook_session_runtime_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionStorageMountConfigurationDetailsList">notebook_session_storage_mount_configuration_details_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList">DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionUrl">notebook_session_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference">DatascienceNotebookSessionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionConfigDetailsInput">notebook_session_config_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionConfigurationDetailsInput">notebook_session_configuration_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionRuntimeConfigDetailsInput">notebook_session_runtime_config_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionStorageMountConfigurationDetailsListInput">notebook_session_storage_mount_configuration_details_list_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct">DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts">DatascienceNotebookSessionTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `notebook_session_config_details`<sup>Required</sup> <a name="notebook_session_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionConfigDetails"></a>

```python
notebook_session_config_details: DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference">DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference</a>

---

##### `notebook_session_configuration_details`<sup>Required</sup> <a name="notebook_session_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionConfigurationDetails"></a>

```python
notebook_session_configuration_details: DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference">DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference</a>

---

##### `notebook_session_runtime_config_details`<sup>Required</sup> <a name="notebook_session_runtime_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionRuntimeConfigDetails"></a>

```python
notebook_session_runtime_config_details: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference</a>

---

##### `notebook_session_storage_mount_configuration_details_list`<sup>Required</sup> <a name="notebook_session_storage_mount_configuration_details_list" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionStorageMountConfigurationDetailsList"></a>

```python
notebook_session_storage_mount_configuration_details_list: DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList">DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList</a>

---

##### `notebook_session_url`<sup>Required</sup> <a name="notebook_session_url" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionUrl"></a>

```python
notebook_session_url: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.timeouts"></a>

```python
timeouts: DatascienceNotebookSessionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference">DatascienceNotebookSessionTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `notebook_session_config_details_input`<sup>Optional</sup> <a name="notebook_session_config_details_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionConfigDetailsInput"></a>

```python
notebook_session_config_details_input: DatascienceNotebookSessionNotebookSessionConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetails</a>

---

##### `notebook_session_configuration_details_input`<sup>Optional</sup> <a name="notebook_session_configuration_details_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionConfigurationDetailsInput"></a>

```python
notebook_session_configuration_details_input: DatascienceNotebookSessionNotebookSessionConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetails</a>

---

##### `notebook_session_runtime_config_details_input`<sup>Optional</sup> <a name="notebook_session_runtime_config_details_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionRuntimeConfigDetailsInput"></a>

```python
notebook_session_runtime_config_details_input: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails</a>

---

##### `notebook_session_storage_mount_configuration_details_list_input`<sup>Optional</sup> <a name="notebook_session_storage_mount_configuration_details_list_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.notebookSessionStorageMountConfigurationDetailsListInput"></a>

```python
notebook_session_storage_mount_configuration_details_list_input: typing.Union[IResolvable, typing.List[DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct">DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct</a>]]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatascienceNotebookSessionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts">DatascienceNotebookSessionTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSession.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatascienceNotebookSessionConfig <a name="DatascienceNotebookSessionConfig" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSessionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  project_id: str,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  notebook_session_config_details: DatascienceNotebookSessionNotebookSessionConfigDetails = None,
  notebook_session_configuration_details: DatascienceNotebookSessionNotebookSessionConfigurationDetails = None,
  notebook_session_runtime_config_details: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails = None,
  notebook_session_storage_mount_configuration_details_list: typing.Union[IResolvable, typing.List[DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct]] = None,
  state: str = None,
  timeouts: DatascienceNotebookSessionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#compartment_id DatascienceNotebookSession#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#project_id DatascienceNotebookSession#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#defined_tags DatascienceNotebookSession#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#display_name DatascienceNotebookSession#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#freeform_tags DatascienceNotebookSession#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#id DatascienceNotebookSession#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.notebookSessionConfigDetails">notebook_session_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetails</a></code> | notebook_session_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.notebookSessionConfigurationDetails">notebook_session_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetails</a></code> | notebook_session_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.notebookSessionRuntimeConfigDetails">notebook_session_runtime_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails</a></code> | notebook_session_runtime_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.notebookSessionStorageMountConfigurationDetailsList">notebook_session_storage_mount_configuration_details_list</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct">DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct</a>]]</code> | notebook_session_storage_mount_configuration_details_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#state DatascienceNotebookSession#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts">DatascienceNotebookSessionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#compartment_id DatascienceNotebookSession#compartment_id}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#project_id DatascienceNotebookSession#project_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#defined_tags DatascienceNotebookSession#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#display_name DatascienceNotebookSession#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#freeform_tags DatascienceNotebookSession#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#id DatascienceNotebookSession#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notebook_session_config_details`<sup>Optional</sup> <a name="notebook_session_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.notebookSessionConfigDetails"></a>

```python
notebook_session_config_details: DatascienceNotebookSessionNotebookSessionConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetails</a>

notebook_session_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_config_details DatascienceNotebookSession#notebook_session_config_details}

---

##### `notebook_session_configuration_details`<sup>Optional</sup> <a name="notebook_session_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.notebookSessionConfigurationDetails"></a>

```python
notebook_session_configuration_details: DatascienceNotebookSessionNotebookSessionConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetails</a>

notebook_session_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_configuration_details DatascienceNotebookSession#notebook_session_configuration_details}

---

##### `notebook_session_runtime_config_details`<sup>Optional</sup> <a name="notebook_session_runtime_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.notebookSessionRuntimeConfigDetails"></a>

```python
notebook_session_runtime_config_details: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails</a>

notebook_session_runtime_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_runtime_config_details DatascienceNotebookSession#notebook_session_runtime_config_details}

---

##### `notebook_session_storage_mount_configuration_details_list`<sup>Optional</sup> <a name="notebook_session_storage_mount_configuration_details_list" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.notebookSessionStorageMountConfigurationDetailsList"></a>

```python
notebook_session_storage_mount_configuration_details_list: typing.Union[IResolvable, typing.List[DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct">DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct</a>]]

notebook_session_storage_mount_configuration_details_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_storage_mount_configuration_details_list DatascienceNotebookSession#notebook_session_storage_mount_configuration_details_list}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#state DatascienceNotebookSession#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionConfig.property.timeouts"></a>

```python
timeouts: DatascienceNotebookSessionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts">DatascienceNotebookSessionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#timeouts DatascienceNotebookSession#timeouts}

---

### DatascienceNotebookSessionNotebookSessionConfigDetails <a name="DatascienceNotebookSessionNotebookSessionConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails(
  shape: str,
  block_storage_size_in_gbs: typing.Union[int, float] = None,
  notebook_session_shape_config_details: DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails = None,
  private_endpoint_id: str = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#shape DatascienceNotebookSession#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.property.blockStorageSizeInGbs">block_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#block_storage_size_in_gbs DatascienceNotebookSession#block_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.property.notebookSessionShapeConfigDetails">notebook_session_shape_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a></code> | notebook_session_shape_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#private_endpoint_id DatascienceNotebookSession#private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#subnet_id DatascienceNotebookSession#subnet_id}. |

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#shape DatascienceNotebookSession#shape}.

---

##### `block_storage_size_in_gbs`<sup>Optional</sup> <a name="block_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.property.blockStorageSizeInGbs"></a>

```python
block_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#block_storage_size_in_gbs DatascienceNotebookSession#block_storage_size_in_gbs}.

---

##### `notebook_session_shape_config_details`<sup>Optional</sup> <a name="notebook_session_shape_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.property.notebookSessionShapeConfigDetails"></a>

```python
notebook_session_shape_config_details: DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a>

notebook_session_shape_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_shape_config_details DatascienceNotebookSession#notebook_session_shape_config_details}

---

##### `private_endpoint_id`<sup>Optional</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#private_endpoint_id DatascienceNotebookSession#private_endpoint_id}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#subnet_id DatascienceNotebookSession#subnet_id}.

---

### DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails <a name="DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails(
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#memory_in_gbs DatascienceNotebookSession#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#ocpus DatascienceNotebookSession#ocpus}. |

---

##### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#memory_in_gbs DatascienceNotebookSession#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#ocpus DatascienceNotebookSession#ocpus}.

---

### DatascienceNotebookSessionNotebookSessionConfigurationDetails <a name="DatascienceNotebookSessionNotebookSessionConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails(
  shape: str,
  subnet_id: str,
  block_storage_size_in_gbs: typing.Union[int, float] = None,
  notebook_session_shape_config_details: DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails = None,
  private_endpoint_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#shape DatascienceNotebookSession#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#subnet_id DatascienceNotebookSession#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.property.blockStorageSizeInGbs">block_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#block_storage_size_in_gbs DatascienceNotebookSession#block_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.property.notebookSessionShapeConfigDetails">notebook_session_shape_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a></code> | notebook_session_shape_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#private_endpoint_id DatascienceNotebookSession#private_endpoint_id}. |

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#shape DatascienceNotebookSession#shape}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#subnet_id DatascienceNotebookSession#subnet_id}.

---

##### `block_storage_size_in_gbs`<sup>Optional</sup> <a name="block_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.property.blockStorageSizeInGbs"></a>

```python
block_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#block_storage_size_in_gbs DatascienceNotebookSession#block_storage_size_in_gbs}.

---

##### `notebook_session_shape_config_details`<sup>Optional</sup> <a name="notebook_session_shape_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.property.notebookSessionShapeConfigDetails"></a>

```python
notebook_session_shape_config_details: DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a>

notebook_session_shape_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_shape_config_details DatascienceNotebookSession#notebook_session_shape_config_details}

---

##### `private_endpoint_id`<sup>Optional</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#private_endpoint_id DatascienceNotebookSession#private_endpoint_id}.

---

### DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails <a name="DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails(
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#memory_in_gbs DatascienceNotebookSession#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#ocpus DatascienceNotebookSession#ocpus}. |

---

##### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#memory_in_gbs DatascienceNotebookSession#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#ocpus DatascienceNotebookSession#ocpus}.

---

### DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails <a name="DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails(
  custom_environment_variables: typing.Mapping[str] = None,
  notebook_session_git_config_details: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails.property.customEnvironmentVariables">custom_environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#custom_environment_variables DatascienceNotebookSession#custom_environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails.property.notebookSessionGitConfigDetails">notebook_session_git_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a></code> | notebook_session_git_config_details block. |

---

##### `custom_environment_variables`<sup>Optional</sup> <a name="custom_environment_variables" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails.property.customEnvironmentVariables"></a>

```python
custom_environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#custom_environment_variables DatascienceNotebookSession#custom_environment_variables}.

---

##### `notebook_session_git_config_details`<sup>Optional</sup> <a name="notebook_session_git_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails.property.notebookSessionGitConfigDetails"></a>

```python
notebook_session_git_config_details: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a>

notebook_session_git_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_git_config_details DatascienceNotebookSession#notebook_session_git_config_details}

---

### DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails <a name="DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails(
  notebook_session_git_repo_config_collection: typing.Union[IResolvable, typing.List[DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails.property.notebookSessionGitRepoConfigCollection">notebook_session_git_repo_config_collection</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection</a>]]</code> | notebook_session_git_repo_config_collection block. |

---

##### `notebook_session_git_repo_config_collection`<sup>Optional</sup> <a name="notebook_session_git_repo_config_collection" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails.property.notebookSessionGitRepoConfigCollection"></a>

```python
notebook_session_git_repo_config_collection: typing.Union[IResolvable, typing.List[DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection</a>]]

notebook_session_git_repo_config_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_git_repo_config_collection DatascienceNotebookSession#notebook_session_git_repo_config_collection}

---

### DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection <a name="DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection(
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#url DatascienceNotebookSession#url}. |

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#url DatascienceNotebookSession#url}.

---

### DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct <a name="DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct(
  destination_directory_name: str,
  storage_type: str,
  bucket: str = None,
  destination_path: str = None,
  export_id: str = None,
  mount_target_id: str = None,
  namespace: str = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.destinationDirectoryName">destination_directory_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#destination_directory_name DatascienceNotebookSession#destination_directory_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.storageType">storage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#storage_type DatascienceNotebookSession#storage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#bucket DatascienceNotebookSession#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.destinationPath">destination_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#destination_path DatascienceNotebookSession#destination_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.exportId">export_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#export_id DatascienceNotebookSession#export_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.mountTargetId">mount_target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#mount_target_id DatascienceNotebookSession#mount_target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#namespace DatascienceNotebookSession#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#prefix DatascienceNotebookSession#prefix}. |

---

##### `destination_directory_name`<sup>Required</sup> <a name="destination_directory_name" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.destinationDirectoryName"></a>

```python
destination_directory_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#destination_directory_name DatascienceNotebookSession#destination_directory_name}.

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#storage_type DatascienceNotebookSession#storage_type}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#bucket DatascienceNotebookSession#bucket}.

---

##### `destination_path`<sup>Optional</sup> <a name="destination_path" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.destinationPath"></a>

```python
destination_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#destination_path DatascienceNotebookSession#destination_path}.

---

##### `export_id`<sup>Optional</sup> <a name="export_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.exportId"></a>

```python
export_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#export_id DatascienceNotebookSession#export_id}.

---

##### `mount_target_id`<sup>Optional</sup> <a name="mount_target_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.mountTargetId"></a>

```python
mount_target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#mount_target_id DatascienceNotebookSession#mount_target_id}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#namespace DatascienceNotebookSession#namespace}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#prefix DatascienceNotebookSession#prefix}.

---

### DatascienceNotebookSessionTimeouts <a name="DatascienceNotebookSessionTimeouts" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSessionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#create DatascienceNotebookSession#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#delete DatascienceNotebookSession#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#update DatascienceNotebookSession#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#create DatascienceNotebookSession#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#delete DatascienceNotebookSession#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#update DatascienceNotebookSession#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference <a name="DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resetMemoryInGbs">reset_memory_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resetOcpus">reset_ocpus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_memory_in_gbs` <a name="reset_memory_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resetMemoryInGbs"></a>

```python
def reset_memory_in_gbs() -> None
```

##### `reset_ocpus` <a name="reset_ocpus" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resetOcpus"></a>

```python
def reset_ocpus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbsInput">memory_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpusInput">ocpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs_input`<sup>Optional</sup> <a name="memory_in_gbs_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbsInput"></a>

```python
memory_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_input`<sup>Optional</sup> <a name="ocpus_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpusInput"></a>

```python
ocpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a>

---


### DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference <a name="DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.putNotebookSessionShapeConfigDetails">put_notebook_session_shape_config_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resetBlockStorageSizeInGbs">reset_block_storage_size_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resetNotebookSessionShapeConfigDetails">reset_notebook_session_shape_config_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resetPrivateEndpointId">reset_private_endpoint_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_notebook_session_shape_config_details` <a name="put_notebook_session_shape_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.putNotebookSessionShapeConfigDetails"></a>

```python
def put_notebook_session_shape_config_details(
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
) -> None
```

###### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.putNotebookSessionShapeConfigDetails.parameter.memoryInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#memory_in_gbs DatascienceNotebookSession#memory_in_gbs}.

---

###### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.putNotebookSessionShapeConfigDetails.parameter.ocpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#ocpus DatascienceNotebookSession#ocpus}.

---

##### `reset_block_storage_size_in_gbs` <a name="reset_block_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resetBlockStorageSizeInGbs"></a>

```python
def reset_block_storage_size_in_gbs() -> None
```

##### `reset_notebook_session_shape_config_details` <a name="reset_notebook_session_shape_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resetNotebookSessionShapeConfigDetails"></a>

```python
def reset_notebook_session_shape_config_details() -> None
```

##### `reset_private_endpoint_id` <a name="reset_private_endpoint_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resetPrivateEndpointId"></a>

```python
def reset_private_endpoint_id() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.notebookSessionShapeConfigDetails">notebook_session_shape_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference">DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.blockStorageSizeInGbsInput">block_storage_size_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.notebookSessionShapeConfigDetailsInput">notebook_session_shape_config_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.privateEndpointIdInput">private_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.blockStorageSizeInGbs">block_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notebook_session_shape_config_details`<sup>Required</sup> <a name="notebook_session_shape_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.notebookSessionShapeConfigDetails"></a>

```python
notebook_session_shape_config_details: DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference">DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference</a>

---

##### `block_storage_size_in_gbs_input`<sup>Optional</sup> <a name="block_storage_size_in_gbs_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.blockStorageSizeInGbsInput"></a>

```python
block_storage_size_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `notebook_session_shape_config_details_input`<sup>Optional</sup> <a name="notebook_session_shape_config_details_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.notebookSessionShapeConfigDetailsInput"></a>

```python
notebook_session_shape_config_details_input: DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a>

---

##### `private_endpoint_id_input`<sup>Optional</sup> <a name="private_endpoint_id_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.privateEndpointIdInput"></a>

```python
private_endpoint_id_input: str
```

- *Type:* str

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `block_storage_size_in_gbs`<sup>Required</sup> <a name="block_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```python
block_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatascienceNotebookSessionNotebookSessionConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigDetails">DatascienceNotebookSessionNotebookSessionConfigDetails</a>

---


### DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference <a name="DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resetMemoryInGbs">reset_memory_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resetOcpus">reset_ocpus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_memory_in_gbs` <a name="reset_memory_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resetMemoryInGbs"></a>

```python
def reset_memory_in_gbs() -> None
```

##### `reset_ocpus` <a name="reset_ocpus" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resetOcpus"></a>

```python
def reset_ocpus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbsInput">memory_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpusInput">ocpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs_input`<sup>Optional</sup> <a name="memory_in_gbs_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbsInput"></a>

```python
memory_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_input`<sup>Optional</sup> <a name="ocpus_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpusInput"></a>

```python
ocpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a>

---


### DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference <a name="DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.putNotebookSessionShapeConfigDetails">put_notebook_session_shape_config_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.resetBlockStorageSizeInGbs">reset_block_storage_size_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.resetNotebookSessionShapeConfigDetails">reset_notebook_session_shape_config_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.resetPrivateEndpointId">reset_private_endpoint_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_notebook_session_shape_config_details` <a name="put_notebook_session_shape_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.putNotebookSessionShapeConfigDetails"></a>

```python
def put_notebook_session_shape_config_details(
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
) -> None
```

###### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.putNotebookSessionShapeConfigDetails.parameter.memoryInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#memory_in_gbs DatascienceNotebookSession#memory_in_gbs}.

---

###### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.putNotebookSessionShapeConfigDetails.parameter.ocpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#ocpus DatascienceNotebookSession#ocpus}.

---

##### `reset_block_storage_size_in_gbs` <a name="reset_block_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.resetBlockStorageSizeInGbs"></a>

```python
def reset_block_storage_size_in_gbs() -> None
```

##### `reset_notebook_session_shape_config_details` <a name="reset_notebook_session_shape_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.resetNotebookSessionShapeConfigDetails"></a>

```python
def reset_notebook_session_shape_config_details() -> None
```

##### `reset_private_endpoint_id` <a name="reset_private_endpoint_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.resetPrivateEndpointId"></a>

```python
def reset_private_endpoint_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.notebookSessionShapeConfigDetails">notebook_session_shape_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference">DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput">block_storage_size_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.notebookSessionShapeConfigDetailsInput">notebook_session_shape_config_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.privateEndpointIdInput">private_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.blockStorageSizeInGbs">block_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notebook_session_shape_config_details`<sup>Required</sup> <a name="notebook_session_shape_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.notebookSessionShapeConfigDetails"></a>

```python
notebook_session_shape_config_details: DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference">DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference</a>

---

##### `block_storage_size_in_gbs_input`<sup>Optional</sup> <a name="block_storage_size_in_gbs_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput"></a>

```python
block_storage_size_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `notebook_session_shape_config_details_input`<sup>Optional</sup> <a name="notebook_session_shape_config_details_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.notebookSessionShapeConfigDetailsInput"></a>

```python
notebook_session_shape_config_details_input: DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a>

---

##### `private_endpoint_id_input`<sup>Optional</sup> <a name="private_endpoint_id_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.privateEndpointIdInput"></a>

```python
private_endpoint_id_input: str
```

- *Type:* str

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `block_storage_size_in_gbs`<sup>Required</sup> <a name="block_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```python
block_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatascienceNotebookSessionNotebookSessionConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionConfigurationDetails">DatascienceNotebookSessionNotebookSessionConfigurationDetails</a>

---


### DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList <a name="DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection</a>]]

---


### DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference <a name="DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection</a>]

---


### DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference <a name="DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.putNotebookSessionGitRepoConfigCollection">put_notebook_session_git_repo_config_collection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resetNotebookSessionGitRepoConfigCollection">reset_notebook_session_git_repo_config_collection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_notebook_session_git_repo_config_collection` <a name="put_notebook_session_git_repo_config_collection" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.putNotebookSessionGitRepoConfigCollection"></a>

```python
def put_notebook_session_git_repo_config_collection(
  value: typing.Union[IResolvable, typing.List[DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.putNotebookSessionGitRepoConfigCollection.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection</a>]]

---

##### `reset_notebook_session_git_repo_config_collection` <a name="reset_notebook_session_git_repo_config_collection" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resetNotebookSessionGitRepoConfigCollection"></a>

```python
def reset_notebook_session_git_repo_config_collection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.notebookSessionGitRepoConfigCollection">notebook_session_git_repo_config_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.notebookSessionGitRepoConfigCollectionInput">notebook_session_git_repo_config_collection_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notebook_session_git_repo_config_collection`<sup>Required</sup> <a name="notebook_session_git_repo_config_collection" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.notebookSessionGitRepoConfigCollection"></a>

```python
notebook_session_git_repo_config_collection: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList</a>

---

##### `notebook_session_git_repo_config_collection_input`<sup>Optional</sup> <a name="notebook_session_git_repo_config_collection_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.notebookSessionGitRepoConfigCollectionInput"></a>

```python
notebook_session_git_repo_config_collection_input: typing.Union[IResolvable, typing.List[DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a>

---


### DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference <a name="DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.putNotebookSessionGitConfigDetails">put_notebook_session_git_config_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.resetCustomEnvironmentVariables">reset_custom_environment_variables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.resetNotebookSessionGitConfigDetails">reset_notebook_session_git_config_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_notebook_session_git_config_details` <a name="put_notebook_session_git_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.putNotebookSessionGitConfigDetails"></a>

```python
def put_notebook_session_git_config_details(
  notebook_session_git_repo_config_collection: typing.Union[IResolvable, typing.List[DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection]] = None
) -> None
```

###### `notebook_session_git_repo_config_collection`<sup>Optional</sup> <a name="notebook_session_git_repo_config_collection" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.putNotebookSessionGitConfigDetails.parameter.notebookSessionGitRepoConfigCollection"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection</a>]]

notebook_session_git_repo_config_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_notebook_session#notebook_session_git_repo_config_collection DatascienceNotebookSession#notebook_session_git_repo_config_collection}

---

##### `reset_custom_environment_variables` <a name="reset_custom_environment_variables" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.resetCustomEnvironmentVariables"></a>

```python
def reset_custom_environment_variables() -> None
```

##### `reset_notebook_session_git_config_details` <a name="reset_notebook_session_git_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.resetNotebookSessionGitConfigDetails"></a>

```python
def reset_notebook_session_git_config_details() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.notebookSessionGitConfigDetails">notebook_session_git_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.customEnvironmentVariablesInput">custom_environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.notebookSessionGitConfigDetailsInput">notebook_session_git_config_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.customEnvironmentVariables">custom_environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notebook_session_git_config_details`<sup>Required</sup> <a name="notebook_session_git_config_details" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.notebookSessionGitConfigDetails"></a>

```python
notebook_session_git_config_details: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference</a>

---

##### `custom_environment_variables_input`<sup>Optional</sup> <a name="custom_environment_variables_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.customEnvironmentVariablesInput"></a>

```python
custom_environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `notebook_session_git_config_details_input`<sup>Optional</sup> <a name="notebook_session_git_config_details_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.notebookSessionGitConfigDetailsInput"></a>

```python
notebook_session_git_config_details_input: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a>

---

##### `custom_environment_variables`<sup>Required</sup> <a name="custom_environment_variables" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.customEnvironmentVariables"></a>

```python
custom_environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails">DatascienceNotebookSessionNotebookSessionRuntimeConfigDetails</a>

---


### DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList <a name="DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct">DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct">DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct</a>]]

---


### DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference <a name="DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetDestinationPath">reset_destination_path</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetExportId">reset_export_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetMountTargetId">reset_mount_target_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_destination_path` <a name="reset_destination_path" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetDestinationPath"></a>

```python
def reset_destination_path() -> None
```

##### `reset_export_id` <a name="reset_export_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetExportId"></a>

```python
def reset_export_id() -> None
```

##### `reset_mount_target_id` <a name="reset_mount_target_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetMountTargetId"></a>

```python
def reset_mount_target_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryNameInput">destination_directory_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationPathInput">destination_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.exportIdInput">export_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetIdInput">mount_target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName">destination_directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath">destination_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.exportId">export_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId">mount_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct">DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `destination_directory_name_input`<sup>Optional</sup> <a name="destination_directory_name_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryNameInput"></a>

```python
destination_directory_name_input: str
```

- *Type:* str

---

##### `destination_path_input`<sup>Optional</sup> <a name="destination_path_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationPathInput"></a>

```python
destination_path_input: str
```

- *Type:* str

---

##### `export_id_input`<sup>Optional</sup> <a name="export_id_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.exportIdInput"></a>

```python
export_id_input: str
```

- *Type:* str

---

##### `mount_target_id_input`<sup>Optional</sup> <a name="mount_target_id_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetIdInput"></a>

```python
mount_target_id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `destination_directory_name`<sup>Required</sup> <a name="destination_directory_name" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName"></a>

```python
destination_directory_name: str
```

- *Type:* str

---

##### `destination_path`<sup>Required</sup> <a name="destination_path" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath"></a>

```python
destination_path: str
```

- *Type:* str

---

##### `export_id`<sup>Required</sup> <a name="export_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.exportId"></a>

```python
export_id: str
```

- *Type:* str

---

##### `mount_target_id`<sup>Required</sup> <a name="mount_target_id" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId"></a>

```python
mount_target_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct">DatascienceNotebookSessionNotebookSessionStorageMountConfigurationDetailsListStruct</a>]

---


### DatascienceNotebookSessionTimeoutsOutputReference <a name="DatascienceNotebookSessionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_notebook_session

datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts">DatascienceNotebookSessionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatascienceNotebookSessionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceNotebookSession.DatascienceNotebookSessionTimeouts">DatascienceNotebookSessionTimeouts</a>]

---



