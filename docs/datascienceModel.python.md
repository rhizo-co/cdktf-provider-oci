# `datascienceModel` Submodule <a name="`datascienceModel` Submodule" id="rhizo-co-terraform-provider-oci.datascienceModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatascienceModel <a name="DatascienceModel" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model oci_datascience_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  artifact_content_length: str,
  compartment_id: str,
  model_artifact: str,
  project_id: str,
  artifact_content_disposition: str = None,
  backup_setting: DatascienceModelBackupSetting = None,
  custom_metadata_list: typing.Union[IResolvable, typing.List[DatascienceModelCustomMetadataListStruct]] = None,
  defined_metadata_list: typing.Union[IResolvable, typing.List[DatascienceModelDefinedMetadataListStruct]] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  input_schema: str = None,
  model_version_set_id: str = None,
  model_version_set_name: str = None,
  output_schema: str = None,
  retention_setting: DatascienceModelRetentionSetting = None,
  state: str = None,
  timeouts: DatascienceModelTimeouts = None,
  version_label: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.artifactContentLength">artifact_content_length</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#artifact_content_length DatascienceModel#artifact_content_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#compartment_id DatascienceModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.modelArtifact">model_artifact</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#model_artifact DatascienceModel#model_artifact}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#project_id DatascienceModel#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.artifactContentDisposition">artifact_content_disposition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#artifact_content_disposition DatascienceModel#artifact_content_disposition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.backupSetting">backup_setting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting">DatascienceModelBackupSetting</a></code> | backup_setting block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.customMetadataList">custom_metadata_list</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct">DatascienceModelCustomMetadataListStruct</a>]]</code> | custom_metadata_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.definedMetadataList">defined_metadata_list</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct">DatascienceModelDefinedMetadataListStruct</a>]]</code> | defined_metadata_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#defined_tags DatascienceModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#description DatascienceModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#display_name DatascienceModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#freeform_tags DatascienceModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#id DatascienceModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.inputSchema">input_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#input_schema DatascienceModel#input_schema}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.modelVersionSetId">model_version_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#model_version_set_id DatascienceModel#model_version_set_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.modelVersionSetName">model_version_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#model_version_set_name DatascienceModel#model_version_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.outputSchema">output_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#output_schema DatascienceModel#output_schema}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.retentionSetting">retention_setting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting">DatascienceModelRetentionSetting</a></code> | retention_setting block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#state DatascienceModel#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts">DatascienceModelTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.versionLabel">version_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#version_label DatascienceModel#version_label}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `artifact_content_length`<sup>Required</sup> <a name="artifact_content_length" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.artifactContentLength"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#artifact_content_length DatascienceModel#artifact_content_length}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#compartment_id DatascienceModel#compartment_id}.

---

##### `model_artifact`<sup>Required</sup> <a name="model_artifact" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.modelArtifact"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#model_artifact DatascienceModel#model_artifact}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#project_id DatascienceModel#project_id}.

---

##### `artifact_content_disposition`<sup>Optional</sup> <a name="artifact_content_disposition" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.artifactContentDisposition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#artifact_content_disposition DatascienceModel#artifact_content_disposition}.

---

##### `backup_setting`<sup>Optional</sup> <a name="backup_setting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.backupSetting"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting">DatascienceModelBackupSetting</a>

backup_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#backup_setting DatascienceModel#backup_setting}

---

##### `custom_metadata_list`<sup>Optional</sup> <a name="custom_metadata_list" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.customMetadataList"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct">DatascienceModelCustomMetadataListStruct</a>]]

custom_metadata_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#custom_metadata_list DatascienceModel#custom_metadata_list}

---

##### `defined_metadata_list`<sup>Optional</sup> <a name="defined_metadata_list" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.definedMetadataList"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct">DatascienceModelDefinedMetadataListStruct</a>]]

defined_metadata_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#defined_metadata_list DatascienceModel#defined_metadata_list}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#defined_tags DatascienceModel#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#description DatascienceModel#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#display_name DatascienceModel#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#freeform_tags DatascienceModel#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#id DatascienceModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_schema`<sup>Optional</sup> <a name="input_schema" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.inputSchema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#input_schema DatascienceModel#input_schema}.

---

##### `model_version_set_id`<sup>Optional</sup> <a name="model_version_set_id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.modelVersionSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#model_version_set_id DatascienceModel#model_version_set_id}.

---

##### `model_version_set_name`<sup>Optional</sup> <a name="model_version_set_name" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.modelVersionSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#model_version_set_name DatascienceModel#model_version_set_name}.

---

##### `output_schema`<sup>Optional</sup> <a name="output_schema" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.outputSchema"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#output_schema DatascienceModel#output_schema}.

---

##### `retention_setting`<sup>Optional</sup> <a name="retention_setting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.retentionSetting"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting">DatascienceModelRetentionSetting</a>

retention_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#retention_setting DatascienceModel#retention_setting}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#state DatascienceModel#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts">DatascienceModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#timeouts DatascienceModel#timeouts}

---

##### `version_label`<sup>Optional</sup> <a name="version_label" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.Initializer.parameter.versionLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#version_label DatascienceModel#version_label}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putBackupSetting">put_backup_setting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putCustomMetadataList">put_custom_metadata_list</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putDefinedMetadataList">put_defined_metadata_list</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putRetentionSetting">put_retention_setting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetArtifactContentDisposition">reset_artifact_content_disposition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetBackupSetting">reset_backup_setting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetCustomMetadataList">reset_custom_metadata_list</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetDefinedMetadataList">reset_defined_metadata_list</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetInputSchema">reset_input_schema</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetModelVersionSetId">reset_model_version_set_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetModelVersionSetName">reset_model_version_set_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetOutputSchema">reset_output_schema</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetRetentionSetting">reset_retention_setting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetVersionLabel">reset_version_label</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backup_setting` <a name="put_backup_setting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putBackupSetting"></a>

```python
def put_backup_setting(
  backup_region: str,
  is_backup_enabled: typing.Union[bool, IResolvable],
  customer_notification_type: str = None
) -> None
```

###### `backup_region`<sup>Required</sup> <a name="backup_region" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putBackupSetting.parameter.backupRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#backup_region DatascienceModel#backup_region}.

---

###### `is_backup_enabled`<sup>Required</sup> <a name="is_backup_enabled" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putBackupSetting.parameter.isBackupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#is_backup_enabled DatascienceModel#is_backup_enabled}.

---

###### `customer_notification_type`<sup>Optional</sup> <a name="customer_notification_type" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putBackupSetting.parameter.customerNotificationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#customer_notification_type DatascienceModel#customer_notification_type}.

---

##### `put_custom_metadata_list` <a name="put_custom_metadata_list" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putCustomMetadataList"></a>

```python
def put_custom_metadata_list(
  value: typing.Union[IResolvable, typing.List[DatascienceModelCustomMetadataListStruct]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putCustomMetadataList.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct">DatascienceModelCustomMetadataListStruct</a>]]

---

##### `put_defined_metadata_list` <a name="put_defined_metadata_list" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putDefinedMetadataList"></a>

```python
def put_defined_metadata_list(
  value: typing.Union[IResolvable, typing.List[DatascienceModelDefinedMetadataListStruct]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putDefinedMetadataList.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct">DatascienceModelDefinedMetadataListStruct</a>]]

---

##### `put_retention_setting` <a name="put_retention_setting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putRetentionSetting"></a>

```python
def put_retention_setting(
  archive_after_days: typing.Union[int, float],
  customer_notification_type: str = None,
  delete_after_days: typing.Union[int, float] = None
) -> None
```

###### `archive_after_days`<sup>Required</sup> <a name="archive_after_days" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putRetentionSetting.parameter.archiveAfterDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#archive_after_days DatascienceModel#archive_after_days}.

---

###### `customer_notification_type`<sup>Optional</sup> <a name="customer_notification_type" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putRetentionSetting.parameter.customerNotificationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#customer_notification_type DatascienceModel#customer_notification_type}.

---

###### `delete_after_days`<sup>Optional</sup> <a name="delete_after_days" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putRetentionSetting.parameter.deleteAfterDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#delete_after_days DatascienceModel#delete_after_days}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#create DatascienceModel#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#delete DatascienceModel#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#update DatascienceModel#update}.

---

##### `reset_artifact_content_disposition` <a name="reset_artifact_content_disposition" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetArtifactContentDisposition"></a>

```python
def reset_artifact_content_disposition() -> None
```

##### `reset_backup_setting` <a name="reset_backup_setting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetBackupSetting"></a>

```python
def reset_backup_setting() -> None
```

##### `reset_custom_metadata_list` <a name="reset_custom_metadata_list" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetCustomMetadataList"></a>

```python
def reset_custom_metadata_list() -> None
```

##### `reset_defined_metadata_list` <a name="reset_defined_metadata_list" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetDefinedMetadataList"></a>

```python
def reset_defined_metadata_list() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input_schema` <a name="reset_input_schema" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetInputSchema"></a>

```python
def reset_input_schema() -> None
```

##### `reset_model_version_set_id` <a name="reset_model_version_set_id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetModelVersionSetId"></a>

```python
def reset_model_version_set_id() -> None
```

##### `reset_model_version_set_name` <a name="reset_model_version_set_name" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetModelVersionSetName"></a>

```python
def reset_model_version_set_name() -> None
```

##### `reset_output_schema` <a name="reset_output_schema" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetOutputSchema"></a>

```python
def reset_output_schema() -> None
```

##### `reset_retention_setting` <a name="reset_retention_setting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetRetentionSetting"></a>

```python
def reset_retention_setting() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version_label` <a name="reset_version_label" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.resetVersionLabel"></a>

```python
def reset_version_label() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatascienceModel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatascienceModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatascienceModel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatascienceModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatascienceModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactContentMd5">artifact_content_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactLastModified">artifact_last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.backupOperationDetails">backup_operation_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList">DatascienceModelBackupOperationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.backupSetting">backup_setting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference">DatascienceModelBackupSettingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.customMetadataList">custom_metadata_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList">DatascienceModelCustomMetadataListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.definedMetadataList">defined_metadata_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList">DatascienceModelDefinedMetadataListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.emptyModel">empty_model</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.retentionOperationDetails">retention_operation_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList">DatascienceModelRetentionOperationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.retentionSetting">retention_setting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference">DatascienceModelRetentionSettingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference">DatascienceModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactContentDispositionInput">artifact_content_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactContentLengthInput">artifact_content_length_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.backupSettingInput">backup_setting_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting">DatascienceModelBackupSetting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.customMetadataListInput">custom_metadata_list_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct">DatascienceModelCustomMetadataListStruct</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.definedMetadataListInput">defined_metadata_list_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct">DatascienceModelDefinedMetadataListStruct</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.inputSchemaInput">input_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelArtifactInput">model_artifact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelVersionSetIdInput">model_version_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelVersionSetNameInput">model_version_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.outputSchemaInput">output_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.retentionSettingInput">retention_setting_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting">DatascienceModelRetentionSetting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts">DatascienceModelTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.versionLabelInput">version_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactContentDisposition">artifact_content_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactContentLength">artifact_content_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.inputSchema">input_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelArtifact">model_artifact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelVersionSetId">model_version_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelVersionSetName">model_version_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.outputSchema">output_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.versionLabel">version_label</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `artifact_content_md5`<sup>Required</sup> <a name="artifact_content_md5" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactContentMd5"></a>

```python
artifact_content_md5: str
```

- *Type:* str

---

##### `artifact_last_modified`<sup>Required</sup> <a name="artifact_last_modified" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactLastModified"></a>

```python
artifact_last_modified: str
```

- *Type:* str

---

##### `backup_operation_details`<sup>Required</sup> <a name="backup_operation_details" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.backupOperationDetails"></a>

```python
backup_operation_details: DatascienceModelBackupOperationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList">DatascienceModelBackupOperationDetailsList</a>

---

##### `backup_setting`<sup>Required</sup> <a name="backup_setting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.backupSetting"></a>

```python
backup_setting: DatascienceModelBackupSettingOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference">DatascienceModelBackupSettingOutputReference</a>

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `custom_metadata_list`<sup>Required</sup> <a name="custom_metadata_list" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.customMetadataList"></a>

```python
custom_metadata_list: DatascienceModelCustomMetadataListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList">DatascienceModelCustomMetadataListStructList</a>

---

##### `defined_metadata_list`<sup>Required</sup> <a name="defined_metadata_list" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.definedMetadataList"></a>

```python
defined_metadata_list: DatascienceModelDefinedMetadataListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList">DatascienceModelDefinedMetadataListStructList</a>

---

##### `empty_model`<sup>Required</sup> <a name="empty_model" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.emptyModel"></a>

```python
empty_model: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `retention_operation_details`<sup>Required</sup> <a name="retention_operation_details" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.retentionOperationDetails"></a>

```python
retention_operation_details: DatascienceModelRetentionOperationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList">DatascienceModelRetentionOperationDetailsList</a>

---

##### `retention_setting`<sup>Required</sup> <a name="retention_setting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.retentionSetting"></a>

```python
retention_setting: DatascienceModelRetentionSettingOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference">DatascienceModelRetentionSettingOutputReference</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.timeouts"></a>

```python
timeouts: DatascienceModelTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference">DatascienceModelTimeoutsOutputReference</a>

---

##### `artifact_content_disposition_input`<sup>Optional</sup> <a name="artifact_content_disposition_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactContentDispositionInput"></a>

```python
artifact_content_disposition_input: str
```

- *Type:* str

---

##### `artifact_content_length_input`<sup>Optional</sup> <a name="artifact_content_length_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactContentLengthInput"></a>

```python
artifact_content_length_input: str
```

- *Type:* str

---

##### `backup_setting_input`<sup>Optional</sup> <a name="backup_setting_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.backupSettingInput"></a>

```python
backup_setting_input: DatascienceModelBackupSetting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting">DatascienceModelBackupSetting</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `custom_metadata_list_input`<sup>Optional</sup> <a name="custom_metadata_list_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.customMetadataListInput"></a>

```python
custom_metadata_list_input: typing.Union[IResolvable, typing.List[DatascienceModelCustomMetadataListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct">DatascienceModelCustomMetadataListStruct</a>]]

---

##### `defined_metadata_list_input`<sup>Optional</sup> <a name="defined_metadata_list_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.definedMetadataListInput"></a>

```python
defined_metadata_list_input: typing.Union[IResolvable, typing.List[DatascienceModelDefinedMetadataListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct">DatascienceModelDefinedMetadataListStruct</a>]]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_schema_input`<sup>Optional</sup> <a name="input_schema_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.inputSchemaInput"></a>

```python
input_schema_input: str
```

- *Type:* str

---

##### `model_artifact_input`<sup>Optional</sup> <a name="model_artifact_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelArtifactInput"></a>

```python
model_artifact_input: str
```

- *Type:* str

---

##### `model_version_set_id_input`<sup>Optional</sup> <a name="model_version_set_id_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelVersionSetIdInput"></a>

```python
model_version_set_id_input: str
```

- *Type:* str

---

##### `model_version_set_name_input`<sup>Optional</sup> <a name="model_version_set_name_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelVersionSetNameInput"></a>

```python
model_version_set_name_input: str
```

- *Type:* str

---

##### `output_schema_input`<sup>Optional</sup> <a name="output_schema_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.outputSchemaInput"></a>

```python
output_schema_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `retention_setting_input`<sup>Optional</sup> <a name="retention_setting_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.retentionSettingInput"></a>

```python
retention_setting_input: DatascienceModelRetentionSetting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting">DatascienceModelRetentionSetting</a>

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatascienceModelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts">DatascienceModelTimeouts</a>]

---

##### `version_label_input`<sup>Optional</sup> <a name="version_label_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.versionLabelInput"></a>

```python
version_label_input: str
```

- *Type:* str

---

##### `artifact_content_disposition`<sup>Required</sup> <a name="artifact_content_disposition" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactContentDisposition"></a>

```python
artifact_content_disposition: str
```

- *Type:* str

---

##### `artifact_content_length`<sup>Required</sup> <a name="artifact_content_length" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.artifactContentLength"></a>

```python
artifact_content_length: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_schema`<sup>Required</sup> <a name="input_schema" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.inputSchema"></a>

```python
input_schema: str
```

- *Type:* str

---

##### `model_artifact`<sup>Required</sup> <a name="model_artifact" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelArtifact"></a>

```python
model_artifact: str
```

- *Type:* str

---

##### `model_version_set_id`<sup>Required</sup> <a name="model_version_set_id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelVersionSetId"></a>

```python
model_version_set_id: str
```

- *Type:* str

---

##### `model_version_set_name`<sup>Required</sup> <a name="model_version_set_name" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.modelVersionSetName"></a>

```python
model_version_set_name: str
```

- *Type:* str

---

##### `output_schema`<sup>Required</sup> <a name="output_schema" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.outputSchema"></a>

```python
output_schema: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `version_label`<sup>Required</sup> <a name="version_label" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.versionLabel"></a>

```python
version_label: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatascienceModelBackupOperationDetails <a name="DatascienceModelBackupOperationDetails" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModelBackupOperationDetails()
```


### DatascienceModelBackupSetting <a name="DatascienceModelBackupSetting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModelBackupSetting(
  backup_region: str,
  is_backup_enabled: typing.Union[bool, IResolvable],
  customer_notification_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting.property.backupRegion">backup_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#backup_region DatascienceModel#backup_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting.property.isBackupEnabled">is_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#is_backup_enabled DatascienceModel#is_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting.property.customerNotificationType">customer_notification_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#customer_notification_type DatascienceModel#customer_notification_type}. |

---

##### `backup_region`<sup>Required</sup> <a name="backup_region" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting.property.backupRegion"></a>

```python
backup_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#backup_region DatascienceModel#backup_region}.

---

##### `is_backup_enabled`<sup>Required</sup> <a name="is_backup_enabled" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting.property.isBackupEnabled"></a>

```python
is_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#is_backup_enabled DatascienceModel#is_backup_enabled}.

---

##### `customer_notification_type`<sup>Optional</sup> <a name="customer_notification_type" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting.property.customerNotificationType"></a>

```python
customer_notification_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#customer_notification_type DatascienceModel#customer_notification_type}.

---

### DatascienceModelConfig <a name="DatascienceModelConfig" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  artifact_content_length: str,
  compartment_id: str,
  model_artifact: str,
  project_id: str,
  artifact_content_disposition: str = None,
  backup_setting: DatascienceModelBackupSetting = None,
  custom_metadata_list: typing.Union[IResolvable, typing.List[DatascienceModelCustomMetadataListStruct]] = None,
  defined_metadata_list: typing.Union[IResolvable, typing.List[DatascienceModelDefinedMetadataListStruct]] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  input_schema: str = None,
  model_version_set_id: str = None,
  model_version_set_name: str = None,
  output_schema: str = None,
  retention_setting: DatascienceModelRetentionSetting = None,
  state: str = None,
  timeouts: DatascienceModelTimeouts = None,
  version_label: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.artifactContentLength">artifact_content_length</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#artifact_content_length DatascienceModel#artifact_content_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#compartment_id DatascienceModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.modelArtifact">model_artifact</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#model_artifact DatascienceModel#model_artifact}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#project_id DatascienceModel#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.artifactContentDisposition">artifact_content_disposition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#artifact_content_disposition DatascienceModel#artifact_content_disposition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.backupSetting">backup_setting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting">DatascienceModelBackupSetting</a></code> | backup_setting block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.customMetadataList">custom_metadata_list</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct">DatascienceModelCustomMetadataListStruct</a>]]</code> | custom_metadata_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.definedMetadataList">defined_metadata_list</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct">DatascienceModelDefinedMetadataListStruct</a>]]</code> | defined_metadata_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#defined_tags DatascienceModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#description DatascienceModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#display_name DatascienceModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#freeform_tags DatascienceModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#id DatascienceModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.inputSchema">input_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#input_schema DatascienceModel#input_schema}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.modelVersionSetId">model_version_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#model_version_set_id DatascienceModel#model_version_set_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.modelVersionSetName">model_version_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#model_version_set_name DatascienceModel#model_version_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.outputSchema">output_schema</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#output_schema DatascienceModel#output_schema}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.retentionSetting">retention_setting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting">DatascienceModelRetentionSetting</a></code> | retention_setting block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#state DatascienceModel#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts">DatascienceModelTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.versionLabel">version_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#version_label DatascienceModel#version_label}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `artifact_content_length`<sup>Required</sup> <a name="artifact_content_length" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.artifactContentLength"></a>

```python
artifact_content_length: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#artifact_content_length DatascienceModel#artifact_content_length}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#compartment_id DatascienceModel#compartment_id}.

---

##### `model_artifact`<sup>Required</sup> <a name="model_artifact" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.modelArtifact"></a>

```python
model_artifact: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#model_artifact DatascienceModel#model_artifact}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#project_id DatascienceModel#project_id}.

---

##### `artifact_content_disposition`<sup>Optional</sup> <a name="artifact_content_disposition" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.artifactContentDisposition"></a>

```python
artifact_content_disposition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#artifact_content_disposition DatascienceModel#artifact_content_disposition}.

---

##### `backup_setting`<sup>Optional</sup> <a name="backup_setting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.backupSetting"></a>

```python
backup_setting: DatascienceModelBackupSetting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting">DatascienceModelBackupSetting</a>

backup_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#backup_setting DatascienceModel#backup_setting}

---

##### `custom_metadata_list`<sup>Optional</sup> <a name="custom_metadata_list" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.customMetadataList"></a>

```python
custom_metadata_list: typing.Union[IResolvable, typing.List[DatascienceModelCustomMetadataListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct">DatascienceModelCustomMetadataListStruct</a>]]

custom_metadata_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#custom_metadata_list DatascienceModel#custom_metadata_list}

---

##### `defined_metadata_list`<sup>Optional</sup> <a name="defined_metadata_list" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.definedMetadataList"></a>

```python
defined_metadata_list: typing.Union[IResolvable, typing.List[DatascienceModelDefinedMetadataListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct">DatascienceModelDefinedMetadataListStruct</a>]]

defined_metadata_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#defined_metadata_list DatascienceModel#defined_metadata_list}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#defined_tags DatascienceModel#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#description DatascienceModel#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#display_name DatascienceModel#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#freeform_tags DatascienceModel#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#id DatascienceModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_schema`<sup>Optional</sup> <a name="input_schema" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.inputSchema"></a>

```python
input_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#input_schema DatascienceModel#input_schema}.

---

##### `model_version_set_id`<sup>Optional</sup> <a name="model_version_set_id" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.modelVersionSetId"></a>

```python
model_version_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#model_version_set_id DatascienceModel#model_version_set_id}.

---

##### `model_version_set_name`<sup>Optional</sup> <a name="model_version_set_name" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.modelVersionSetName"></a>

```python
model_version_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#model_version_set_name DatascienceModel#model_version_set_name}.

---

##### `output_schema`<sup>Optional</sup> <a name="output_schema" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.outputSchema"></a>

```python
output_schema: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#output_schema DatascienceModel#output_schema}.

---

##### `retention_setting`<sup>Optional</sup> <a name="retention_setting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.retentionSetting"></a>

```python
retention_setting: DatascienceModelRetentionSetting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting">DatascienceModelRetentionSetting</a>

retention_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#retention_setting DatascienceModel#retention_setting}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#state DatascienceModel#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.timeouts"></a>

```python
timeouts: DatascienceModelTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts">DatascienceModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#timeouts DatascienceModel#timeouts}

---

##### `version_label`<sup>Optional</sup> <a name="version_label" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelConfig.property.versionLabel"></a>

```python
version_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#version_label DatascienceModel#version_label}.

---

### DatascienceModelCustomMetadataListStruct <a name="DatascienceModelCustomMetadataListStruct" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModelCustomMetadataListStruct(
  category: str = None,
  description: str = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct.property.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#category DatascienceModel#category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#description DatascienceModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#key DatascienceModel#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#value DatascienceModel#value}. |

---

##### `category`<sup>Optional</sup> <a name="category" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct.property.category"></a>

```python
category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#category DatascienceModel#category}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#description DatascienceModel#description}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#key DatascienceModel#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#value DatascienceModel#value}.

---

### DatascienceModelDefinedMetadataListStruct <a name="DatascienceModelDefinedMetadataListStruct" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModelDefinedMetadataListStruct(
  category: str = None,
  description: str = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct.property.category">category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#category DatascienceModel#category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#description DatascienceModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#key DatascienceModel#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#value DatascienceModel#value}. |

---

##### `category`<sup>Optional</sup> <a name="category" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct.property.category"></a>

```python
category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#category DatascienceModel#category}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#description DatascienceModel#description}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#key DatascienceModel#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#value DatascienceModel#value}.

---

### DatascienceModelRetentionOperationDetails <a name="DatascienceModelRetentionOperationDetails" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModelRetentionOperationDetails()
```


### DatascienceModelRetentionSetting <a name="DatascienceModelRetentionSetting" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModelRetentionSetting(
  archive_after_days: typing.Union[int, float],
  customer_notification_type: str = None,
  delete_after_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting.property.archiveAfterDays">archive_after_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#archive_after_days DatascienceModel#archive_after_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting.property.customerNotificationType">customer_notification_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#customer_notification_type DatascienceModel#customer_notification_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting.property.deleteAfterDays">delete_after_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#delete_after_days DatascienceModel#delete_after_days}. |

---

##### `archive_after_days`<sup>Required</sup> <a name="archive_after_days" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting.property.archiveAfterDays"></a>

```python
archive_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#archive_after_days DatascienceModel#archive_after_days}.

---

##### `customer_notification_type`<sup>Optional</sup> <a name="customer_notification_type" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting.property.customerNotificationType"></a>

```python
customer_notification_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#customer_notification_type DatascienceModel#customer_notification_type}.

---

##### `delete_after_days`<sup>Optional</sup> <a name="delete_after_days" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting.property.deleteAfterDays"></a>

```python
delete_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#delete_after_days DatascienceModel#delete_after_days}.

---

### DatascienceModelTimeouts <a name="DatascienceModelTimeouts" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModelTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#create DatascienceModel#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#delete DatascienceModel#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#update DatascienceModel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#create DatascienceModel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#delete DatascienceModel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_model#update DatascienceModel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatascienceModelBackupOperationDetailsList <a name="DatascienceModelBackupOperationDetailsList" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModelBackupOperationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatascienceModelBackupOperationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatascienceModelBackupOperationDetailsOutputReference <a name="DatascienceModelBackupOperationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModelBackupOperationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.backupState">backup_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.backupStateDetails">backup_state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.timeLastBackup">time_last_backup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetails">DatascienceModelBackupOperationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_state`<sup>Required</sup> <a name="backup_state" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.backupState"></a>

```python
backup_state: str
```

- *Type:* str

---

##### `backup_state_details`<sup>Required</sup> <a name="backup_state_details" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.backupStateDetails"></a>

```python
backup_state_details: str
```

- *Type:* str

---

##### `time_last_backup`<sup>Required</sup> <a name="time_last_backup" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.timeLastBackup"></a>

```python
time_last_backup: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatascienceModelBackupOperationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupOperationDetails">DatascienceModelBackupOperationDetails</a>

---


### DatascienceModelBackupSettingOutputReference <a name="DatascienceModelBackupSettingOutputReference" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModelBackupSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.resetCustomerNotificationType">reset_customer_notification_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_customer_notification_type` <a name="reset_customer_notification_type" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.resetCustomerNotificationType"></a>

```python
def reset_customer_notification_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.backupRegionInput">backup_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.customerNotificationTypeInput">customer_notification_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.isBackupEnabledInput">is_backup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.backupRegion">backup_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.customerNotificationType">customer_notification_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.isBackupEnabled">is_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting">DatascienceModelBackupSetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_region_input`<sup>Optional</sup> <a name="backup_region_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.backupRegionInput"></a>

```python
backup_region_input: str
```

- *Type:* str

---

##### `customer_notification_type_input`<sup>Optional</sup> <a name="customer_notification_type_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.customerNotificationTypeInput"></a>

```python
customer_notification_type_input: str
```

- *Type:* str

---

##### `is_backup_enabled_input`<sup>Optional</sup> <a name="is_backup_enabled_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.isBackupEnabledInput"></a>

```python
is_backup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backup_region`<sup>Required</sup> <a name="backup_region" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.backupRegion"></a>

```python
backup_region: str
```

- *Type:* str

---

##### `customer_notification_type`<sup>Required</sup> <a name="customer_notification_type" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.customerNotificationType"></a>

```python
customer_notification_type: str
```

- *Type:* str

---

##### `is_backup_enabled`<sup>Required</sup> <a name="is_backup_enabled" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.isBackupEnabled"></a>

```python
is_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSettingOutputReference.property.internalValue"></a>

```python
internal_value: DatascienceModelBackupSetting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelBackupSetting">DatascienceModelBackupSetting</a>

---


### DatascienceModelCustomMetadataListStructList <a name="DatascienceModelCustomMetadataListStructList" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModelCustomMetadataListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatascienceModelCustomMetadataListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct">DatascienceModelCustomMetadataListStruct</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatascienceModelCustomMetadataListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct">DatascienceModelCustomMetadataListStruct</a>]]

---


### DatascienceModelCustomMetadataListStructOutputReference <a name="DatascienceModelCustomMetadataListStructOutputReference" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModelCustomMetadataListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resetCategory">reset_category</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_category` <a name="reset_category" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resetCategory"></a>

```python
def reset_category() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_key` <a name="reset_key" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct">DatascienceModelCustomMetadataListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStructOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatascienceModelCustomMetadataListStruct]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelCustomMetadataListStruct">DatascienceModelCustomMetadataListStruct</a>]

---


### DatascienceModelDefinedMetadataListStructList <a name="DatascienceModelDefinedMetadataListStructList" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModelDefinedMetadataListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatascienceModelDefinedMetadataListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct">DatascienceModelDefinedMetadataListStruct</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatascienceModelDefinedMetadataListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct">DatascienceModelDefinedMetadataListStruct</a>]]

---


### DatascienceModelDefinedMetadataListStructOutputReference <a name="DatascienceModelDefinedMetadataListStructOutputReference" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resetCategory">reset_category</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_category` <a name="reset_category" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resetCategory"></a>

```python
def reset_category() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_key` <a name="reset_key" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct">DatascienceModelDefinedMetadataListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStructOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatascienceModelDefinedMetadataListStruct]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelDefinedMetadataListStruct">DatascienceModelDefinedMetadataListStruct</a>]

---


### DatascienceModelRetentionOperationDetailsList <a name="DatascienceModelRetentionOperationDetailsList" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModelRetentionOperationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatascienceModelRetentionOperationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatascienceModelRetentionOperationDetailsOutputReference <a name="DatascienceModelRetentionOperationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.archiveState">archive_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.archiveStateDetails">archive_state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.deleteState">delete_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.deleteStateDetails">delete_state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.timeArchivalScheduled">time_archival_scheduled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.timeDeletionScheduled">time_deletion_scheduled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetails">DatascienceModelRetentionOperationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archive_state`<sup>Required</sup> <a name="archive_state" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.archiveState"></a>

```python
archive_state: str
```

- *Type:* str

---

##### `archive_state_details`<sup>Required</sup> <a name="archive_state_details" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.archiveStateDetails"></a>

```python
archive_state_details: str
```

- *Type:* str

---

##### `delete_state`<sup>Required</sup> <a name="delete_state" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.deleteState"></a>

```python
delete_state: str
```

- *Type:* str

---

##### `delete_state_details`<sup>Required</sup> <a name="delete_state_details" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.deleteStateDetails"></a>

```python
delete_state_details: str
```

- *Type:* str

---

##### `time_archival_scheduled`<sup>Required</sup> <a name="time_archival_scheduled" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.timeArchivalScheduled"></a>

```python
time_archival_scheduled: str
```

- *Type:* str

---

##### `time_deletion_scheduled`<sup>Required</sup> <a name="time_deletion_scheduled" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.timeDeletionScheduled"></a>

```python
time_deletion_scheduled: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatascienceModelRetentionOperationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionOperationDetails">DatascienceModelRetentionOperationDetails</a>

---


### DatascienceModelRetentionSettingOutputReference <a name="DatascienceModelRetentionSettingOutputReference" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModelRetentionSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.resetCustomerNotificationType">reset_customer_notification_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.resetDeleteAfterDays">reset_delete_after_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_customer_notification_type` <a name="reset_customer_notification_type" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.resetCustomerNotificationType"></a>

```python
def reset_customer_notification_type() -> None
```

##### `reset_delete_after_days` <a name="reset_delete_after_days" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.resetDeleteAfterDays"></a>

```python
def reset_delete_after_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.archiveAfterDaysInput">archive_after_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.customerNotificationTypeInput">customer_notification_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.deleteAfterDaysInput">delete_after_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.archiveAfterDays">archive_after_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.customerNotificationType">customer_notification_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.deleteAfterDays">delete_after_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting">DatascienceModelRetentionSetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archive_after_days_input`<sup>Optional</sup> <a name="archive_after_days_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.archiveAfterDaysInput"></a>

```python
archive_after_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_notification_type_input`<sup>Optional</sup> <a name="customer_notification_type_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.customerNotificationTypeInput"></a>

```python
customer_notification_type_input: str
```

- *Type:* str

---

##### `delete_after_days_input`<sup>Optional</sup> <a name="delete_after_days_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.deleteAfterDaysInput"></a>

```python
delete_after_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `archive_after_days`<sup>Required</sup> <a name="archive_after_days" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.archiveAfterDays"></a>

```python
archive_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_notification_type`<sup>Required</sup> <a name="customer_notification_type" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.customerNotificationType"></a>

```python
customer_notification_type: str
```

- *Type:* str

---

##### `delete_after_days`<sup>Required</sup> <a name="delete_after_days" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.deleteAfterDays"></a>

```python
delete_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSettingOutputReference.property.internalValue"></a>

```python
internal_value: DatascienceModelRetentionSetting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelRetentionSetting">DatascienceModelRetentionSetting</a>

---


### DatascienceModelTimeoutsOutputReference <a name="DatascienceModelTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_model

datascienceModel.DatascienceModelTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts">DatascienceModelTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatascienceModelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceModel.DatascienceModelTimeouts">DatascienceModelTimeouts</a>]

---



