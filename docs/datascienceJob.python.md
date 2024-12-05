# `datascienceJob` Submodule <a name="`datascienceJob` Submodule" id="rhizo-co-terraform-provider-oci.datascienceJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatascienceJob <a name="DatascienceJob" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job oci_datascience_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_job

datascienceJob.DatascienceJob(
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
  job_configuration_details: DatascienceJobJobConfigurationDetails,
  job_infrastructure_configuration_details: DatascienceJobJobInfrastructureConfigurationDetails,
  project_id: str,
  artifact_content_disposition: str = None,
  artifact_content_length: str = None,
  defined_tags: typing.Mapping[str] = None,
  delete_related_job_runs: typing.Union[bool, IResolvable] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  job_artifact: str = None,
  job_environment_configuration_details: DatascienceJobJobEnvironmentConfigurationDetails = None,
  job_log_configuration_details: DatascienceJobJobLogConfigurationDetails = None,
  job_storage_mount_configuration_details_list: typing.Union[IResolvable, typing.List[DatascienceJobJobStorageMountConfigurationDetailsListStruct]] = None,
  timeouts: DatascienceJobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#compartment_id DatascienceJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.jobConfigurationDetails">job_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a></code> | job_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.jobInfrastructureConfigurationDetails">job_infrastructure_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a></code> | job_infrastructure_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#project_id DatascienceJob#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.artifactContentDisposition">artifact_content_disposition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#artifact_content_disposition DatascienceJob#artifact_content_disposition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.artifactContentLength">artifact_content_length</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#artifact_content_length DatascienceJob#artifact_content_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#defined_tags DatascienceJob#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.deleteRelatedJobRuns">delete_related_job_runs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#delete_related_job_runs DatascienceJob#delete_related_job_runs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#description DatascienceJob#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#display_name DatascienceJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#freeform_tags DatascienceJob#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#id DatascienceJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.jobArtifact">job_artifact</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_artifact DatascienceJob#job_artifact}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.jobEnvironmentConfigurationDetails">job_environment_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a></code> | job_environment_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.jobLogConfigurationDetails">job_log_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a></code> | job_log_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.jobStorageMountConfigurationDetailsList">job_storage_mount_configuration_details_list</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct">DatascienceJobJobStorageMountConfigurationDetailsListStruct</a>]]</code> | job_storage_mount_configuration_details_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts">DatascienceJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#compartment_id DatascienceJob#compartment_id}.

---

##### `job_configuration_details`<sup>Required</sup> <a name="job_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.jobConfigurationDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a>

job_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_configuration_details DatascienceJob#job_configuration_details}

---

##### `job_infrastructure_configuration_details`<sup>Required</sup> <a name="job_infrastructure_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.jobInfrastructureConfigurationDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a>

job_infrastructure_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_infrastructure_configuration_details DatascienceJob#job_infrastructure_configuration_details}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#project_id DatascienceJob#project_id}.

---

##### `artifact_content_disposition`<sup>Optional</sup> <a name="artifact_content_disposition" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.artifactContentDisposition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#artifact_content_disposition DatascienceJob#artifact_content_disposition}.

---

##### `artifact_content_length`<sup>Optional</sup> <a name="artifact_content_length" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.artifactContentLength"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#artifact_content_length DatascienceJob#artifact_content_length}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#defined_tags DatascienceJob#defined_tags}.

---

##### `delete_related_job_runs`<sup>Optional</sup> <a name="delete_related_job_runs" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.deleteRelatedJobRuns"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#delete_related_job_runs DatascienceJob#delete_related_job_runs}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#description DatascienceJob#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#display_name DatascienceJob#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#freeform_tags DatascienceJob#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#id DatascienceJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_artifact`<sup>Optional</sup> <a name="job_artifact" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.jobArtifact"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_artifact DatascienceJob#job_artifact}.

---

##### `job_environment_configuration_details`<sup>Optional</sup> <a name="job_environment_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.jobEnvironmentConfigurationDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a>

job_environment_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_environment_configuration_details DatascienceJob#job_environment_configuration_details}

---

##### `job_log_configuration_details`<sup>Optional</sup> <a name="job_log_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.jobLogConfigurationDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a>

job_log_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_log_configuration_details DatascienceJob#job_log_configuration_details}

---

##### `job_storage_mount_configuration_details_list`<sup>Optional</sup> <a name="job_storage_mount_configuration_details_list" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.jobStorageMountConfigurationDetailsList"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct">DatascienceJobJobStorageMountConfigurationDetailsListStruct</a>]]

job_storage_mount_configuration_details_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_storage_mount_configuration_details_list DatascienceJob#job_storage_mount_configuration_details_list}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts">DatascienceJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#timeouts DatascienceJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobConfigurationDetails">put_job_configuration_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobEnvironmentConfigurationDetails">put_job_environment_configuration_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobInfrastructureConfigurationDetails">put_job_infrastructure_configuration_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobLogConfigurationDetails">put_job_log_configuration_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobStorageMountConfigurationDetailsList">put_job_storage_mount_configuration_details_list</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetArtifactContentDisposition">reset_artifact_content_disposition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetArtifactContentLength">reset_artifact_content_length</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDeleteRelatedJobRuns">reset_delete_related_job_runs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobArtifact">reset_job_artifact</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobEnvironmentConfigurationDetails">reset_job_environment_configuration_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobLogConfigurationDetails">reset_job_log_configuration_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobStorageMountConfigurationDetailsList">reset_job_storage_mount_configuration_details_list</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_job_configuration_details` <a name="put_job_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobConfigurationDetails"></a>

```python
def put_job_configuration_details(
  job_type: str,
  command_line_arguments: str = None,
  environment_variables: typing.Mapping[str] = None,
  maximum_runtime_in_minutes: str = None
) -> None
```

###### `job_type`<sup>Required</sup> <a name="job_type" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobConfigurationDetails.parameter.jobType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_type DatascienceJob#job_type}.

---

###### `command_line_arguments`<sup>Optional</sup> <a name="command_line_arguments" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobConfigurationDetails.parameter.commandLineArguments"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#command_line_arguments DatascienceJob#command_line_arguments}.

---

###### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobConfigurationDetails.parameter.environmentVariables"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#environment_variables DatascienceJob#environment_variables}.

---

###### `maximum_runtime_in_minutes`<sup>Optional</sup> <a name="maximum_runtime_in_minutes" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobConfigurationDetails.parameter.maximumRuntimeInMinutes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#maximum_runtime_in_minutes DatascienceJob#maximum_runtime_in_minutes}.

---

##### `put_job_environment_configuration_details` <a name="put_job_environment_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobEnvironmentConfigurationDetails"></a>

```python
def put_job_environment_configuration_details(
  image: str,
  job_environment_type: str,
  cmd: typing.List[str] = None,
  entrypoint: typing.List[str] = None,
  image_digest: str = None,
  image_signature_id: str = None
) -> None
```

###### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobEnvironmentConfigurationDetails.parameter.image"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#image DatascienceJob#image}.

---

###### `job_environment_type`<sup>Required</sup> <a name="job_environment_type" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobEnvironmentConfigurationDetails.parameter.jobEnvironmentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_environment_type DatascienceJob#job_environment_type}.

---

###### `cmd`<sup>Optional</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobEnvironmentConfigurationDetails.parameter.cmd"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#cmd DatascienceJob#cmd}.

---

###### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobEnvironmentConfigurationDetails.parameter.entrypoint"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#entrypoint DatascienceJob#entrypoint}.

---

###### `image_digest`<sup>Optional</sup> <a name="image_digest" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobEnvironmentConfigurationDetails.parameter.imageDigest"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#image_digest DatascienceJob#image_digest}.

---

###### `image_signature_id`<sup>Optional</sup> <a name="image_signature_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobEnvironmentConfigurationDetails.parameter.imageSignatureId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#image_signature_id DatascienceJob#image_signature_id}.

---

##### `put_job_infrastructure_configuration_details` <a name="put_job_infrastructure_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobInfrastructureConfigurationDetails"></a>

```python
def put_job_infrastructure_configuration_details(
  block_storage_size_in_gbs: typing.Union[int, float],
  job_infrastructure_type: str,
  shape_name: str,
  job_shape_config_details: DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails = None,
  subnet_id: str = None
) -> None
```

###### `block_storage_size_in_gbs`<sup>Required</sup> <a name="block_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobInfrastructureConfigurationDetails.parameter.blockStorageSizeInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#block_storage_size_in_gbs DatascienceJob#block_storage_size_in_gbs}.

---

###### `job_infrastructure_type`<sup>Required</sup> <a name="job_infrastructure_type" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobInfrastructureConfigurationDetails.parameter.jobInfrastructureType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_infrastructure_type DatascienceJob#job_infrastructure_type}.

---

###### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobInfrastructureConfigurationDetails.parameter.shapeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#shape_name DatascienceJob#shape_name}.

---

###### `job_shape_config_details`<sup>Optional</sup> <a name="job_shape_config_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobInfrastructureConfigurationDetails.parameter.jobShapeConfigDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a>

job_shape_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_shape_config_details DatascienceJob#job_shape_config_details}

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobInfrastructureConfigurationDetails.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#subnet_id DatascienceJob#subnet_id}.

---

##### `put_job_log_configuration_details` <a name="put_job_log_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobLogConfigurationDetails"></a>

```python
def put_job_log_configuration_details(
  enable_auto_log_creation: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  log_group_id: str = None,
  log_id: str = None
) -> None
```

###### `enable_auto_log_creation`<sup>Optional</sup> <a name="enable_auto_log_creation" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobLogConfigurationDetails.parameter.enableAutoLogCreation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#enable_auto_log_creation DatascienceJob#enable_auto_log_creation}.

---

###### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobLogConfigurationDetails.parameter.enableLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#enable_logging DatascienceJob#enable_logging}.

---

###### `log_group_id`<sup>Optional</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobLogConfigurationDetails.parameter.logGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#log_group_id DatascienceJob#log_group_id}.

---

###### `log_id`<sup>Optional</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobLogConfigurationDetails.parameter.logId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#log_id DatascienceJob#log_id}.

---

##### `put_job_storage_mount_configuration_details_list` <a name="put_job_storage_mount_configuration_details_list" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobStorageMountConfigurationDetailsList"></a>

```python
def put_job_storage_mount_configuration_details_list(
  value: typing.Union[IResolvable, typing.List[DatascienceJobJobStorageMountConfigurationDetailsListStruct]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putJobStorageMountConfigurationDetailsList.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct">DatascienceJobJobStorageMountConfigurationDetailsListStruct</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#create DatascienceJob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#delete DatascienceJob#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#update DatascienceJob#update}.

---

##### `reset_artifact_content_disposition` <a name="reset_artifact_content_disposition" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetArtifactContentDisposition"></a>

```python
def reset_artifact_content_disposition() -> None
```

##### `reset_artifact_content_length` <a name="reset_artifact_content_length" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetArtifactContentLength"></a>

```python
def reset_artifact_content_length() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_delete_related_job_runs` <a name="reset_delete_related_job_runs" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDeleteRelatedJobRuns"></a>

```python
def reset_delete_related_job_runs() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_job_artifact` <a name="reset_job_artifact" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobArtifact"></a>

```python
def reset_job_artifact() -> None
```

##### `reset_job_environment_configuration_details` <a name="reset_job_environment_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobEnvironmentConfigurationDetails"></a>

```python
def reset_job_environment_configuration_details() -> None
```

##### `reset_job_log_configuration_details` <a name="reset_job_log_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobLogConfigurationDetails"></a>

```python
def reset_job_log_configuration_details() -> None
```

##### `reset_job_storage_mount_configuration_details_list` <a name="reset_job_storage_mount_configuration_details_list" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetJobStorageMountConfigurationDetailsList"></a>

```python
def reset_job_storage_mount_configuration_details_list() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatascienceJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_job

datascienceJob.DatascienceJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_job

datascienceJob.DatascienceJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_job

datascienceJob.DatascienceJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_job

datascienceJob.DatascienceJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatascienceJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatascienceJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatascienceJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatascienceJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentMd5">artifact_content_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactLastModified">artifact_last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.emptyArtifact">empty_artifact</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobConfigurationDetails">job_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference">DatascienceJobJobConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobEnvironmentConfigurationDetails">job_environment_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference">DatascienceJobJobEnvironmentConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobInfrastructureConfigurationDetails">job_infrastructure_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference">DatascienceJobJobInfrastructureConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobLogConfigurationDetails">job_log_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference">DatascienceJobJobLogConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobStorageMountConfigurationDetailsList">job_storage_mount_configuration_details_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList">DatascienceJobJobStorageMountConfigurationDetailsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference">DatascienceJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentDispositionInput">artifact_content_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentLengthInput">artifact_content_length_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.deleteRelatedJobRunsInput">delete_related_job_runs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobArtifactInput">job_artifact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobConfigurationDetailsInput">job_configuration_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobEnvironmentConfigurationDetailsInput">job_environment_configuration_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobInfrastructureConfigurationDetailsInput">job_infrastructure_configuration_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobLogConfigurationDetailsInput">job_log_configuration_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobStorageMountConfigurationDetailsListInput">job_storage_mount_configuration_details_list_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct">DatascienceJobJobStorageMountConfigurationDetailsListStruct</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts">DatascienceJobTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentDisposition">artifact_content_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentLength">artifact_content_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.deleteRelatedJobRuns">delete_related_job_runs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobArtifact">job_artifact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `artifact_content_md5`<sup>Required</sup> <a name="artifact_content_md5" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentMd5"></a>

```python
artifact_content_md5: str
```

- *Type:* str

---

##### `artifact_last_modified`<sup>Required</sup> <a name="artifact_last_modified" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactLastModified"></a>

```python
artifact_last_modified: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `empty_artifact`<sup>Required</sup> <a name="empty_artifact" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.emptyArtifact"></a>

```python
empty_artifact: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `job_configuration_details`<sup>Required</sup> <a name="job_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobConfigurationDetails"></a>

```python
job_configuration_details: DatascienceJobJobConfigurationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference">DatascienceJobJobConfigurationDetailsOutputReference</a>

---

##### `job_environment_configuration_details`<sup>Required</sup> <a name="job_environment_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobEnvironmentConfigurationDetails"></a>

```python
job_environment_configuration_details: DatascienceJobJobEnvironmentConfigurationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference">DatascienceJobJobEnvironmentConfigurationDetailsOutputReference</a>

---

##### `job_infrastructure_configuration_details`<sup>Required</sup> <a name="job_infrastructure_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobInfrastructureConfigurationDetails"></a>

```python
job_infrastructure_configuration_details: DatascienceJobJobInfrastructureConfigurationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference">DatascienceJobJobInfrastructureConfigurationDetailsOutputReference</a>

---

##### `job_log_configuration_details`<sup>Required</sup> <a name="job_log_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobLogConfigurationDetails"></a>

```python
job_log_configuration_details: DatascienceJobJobLogConfigurationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference">DatascienceJobJobLogConfigurationDetailsOutputReference</a>

---

##### `job_storage_mount_configuration_details_list`<sup>Required</sup> <a name="job_storage_mount_configuration_details_list" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobStorageMountConfigurationDetailsList"></a>

```python
job_storage_mount_configuration_details_list: DatascienceJobJobStorageMountConfigurationDetailsListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList">DatascienceJobJobStorageMountConfigurationDetailsListStructList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.timeouts"></a>

```python
timeouts: DatascienceJobTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference">DatascienceJobTimeoutsOutputReference</a>

---

##### `artifact_content_disposition_input`<sup>Optional</sup> <a name="artifact_content_disposition_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentDispositionInput"></a>

```python
artifact_content_disposition_input: str
```

- *Type:* str

---

##### `artifact_content_length_input`<sup>Optional</sup> <a name="artifact_content_length_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentLengthInput"></a>

```python
artifact_content_length_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `delete_related_job_runs_input`<sup>Optional</sup> <a name="delete_related_job_runs_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.deleteRelatedJobRunsInput"></a>

```python
delete_related_job_runs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `job_artifact_input`<sup>Optional</sup> <a name="job_artifact_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobArtifactInput"></a>

```python
job_artifact_input: str
```

- *Type:* str

---

##### `job_configuration_details_input`<sup>Optional</sup> <a name="job_configuration_details_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobConfigurationDetailsInput"></a>

```python
job_configuration_details_input: DatascienceJobJobConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a>

---

##### `job_environment_configuration_details_input`<sup>Optional</sup> <a name="job_environment_configuration_details_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobEnvironmentConfigurationDetailsInput"></a>

```python
job_environment_configuration_details_input: DatascienceJobJobEnvironmentConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a>

---

##### `job_infrastructure_configuration_details_input`<sup>Optional</sup> <a name="job_infrastructure_configuration_details_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobInfrastructureConfigurationDetailsInput"></a>

```python
job_infrastructure_configuration_details_input: DatascienceJobJobInfrastructureConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a>

---

##### `job_log_configuration_details_input`<sup>Optional</sup> <a name="job_log_configuration_details_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobLogConfigurationDetailsInput"></a>

```python
job_log_configuration_details_input: DatascienceJobJobLogConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a>

---

##### `job_storage_mount_configuration_details_list_input`<sup>Optional</sup> <a name="job_storage_mount_configuration_details_list_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobStorageMountConfigurationDetailsListInput"></a>

```python
job_storage_mount_configuration_details_list_input: typing.Union[IResolvable, typing.List[DatascienceJobJobStorageMountConfigurationDetailsListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct">DatascienceJobJobStorageMountConfigurationDetailsListStruct</a>]]

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatascienceJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts">DatascienceJobTimeouts</a>]

---

##### `artifact_content_disposition`<sup>Required</sup> <a name="artifact_content_disposition" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentDisposition"></a>

```python
artifact_content_disposition: str
```

- *Type:* str

---

##### `artifact_content_length`<sup>Required</sup> <a name="artifact_content_length" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.artifactContentLength"></a>

```python
artifact_content_length: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `delete_related_job_runs`<sup>Required</sup> <a name="delete_related_job_runs" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.deleteRelatedJobRuns"></a>

```python
delete_related_job_runs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_artifact`<sup>Required</sup> <a name="job_artifact" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.jobArtifact"></a>

```python
job_artifact: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatascienceJobConfig <a name="DatascienceJobConfig" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_job

datascienceJob.DatascienceJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  job_configuration_details: DatascienceJobJobConfigurationDetails,
  job_infrastructure_configuration_details: DatascienceJobJobInfrastructureConfigurationDetails,
  project_id: str,
  artifact_content_disposition: str = None,
  artifact_content_length: str = None,
  defined_tags: typing.Mapping[str] = None,
  delete_related_job_runs: typing.Union[bool, IResolvable] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  job_artifact: str = None,
  job_environment_configuration_details: DatascienceJobJobEnvironmentConfigurationDetails = None,
  job_log_configuration_details: DatascienceJobJobLogConfigurationDetails = None,
  job_storage_mount_configuration_details_list: typing.Union[IResolvable, typing.List[DatascienceJobJobStorageMountConfigurationDetailsListStruct]] = None,
  timeouts: DatascienceJobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#compartment_id DatascienceJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobConfigurationDetails">job_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a></code> | job_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobInfrastructureConfigurationDetails">job_infrastructure_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a></code> | job_infrastructure_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#project_id DatascienceJob#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.artifactContentDisposition">artifact_content_disposition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#artifact_content_disposition DatascienceJob#artifact_content_disposition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.artifactContentLength">artifact_content_length</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#artifact_content_length DatascienceJob#artifact_content_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#defined_tags DatascienceJob#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.deleteRelatedJobRuns">delete_related_job_runs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#delete_related_job_runs DatascienceJob#delete_related_job_runs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#description DatascienceJob#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#display_name DatascienceJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#freeform_tags DatascienceJob#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#id DatascienceJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobArtifact">job_artifact</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_artifact DatascienceJob#job_artifact}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobEnvironmentConfigurationDetails">job_environment_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a></code> | job_environment_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobLogConfigurationDetails">job_log_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a></code> | job_log_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobStorageMountConfigurationDetailsList">job_storage_mount_configuration_details_list</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct">DatascienceJobJobStorageMountConfigurationDetailsListStruct</a>]]</code> | job_storage_mount_configuration_details_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts">DatascienceJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#compartment_id DatascienceJob#compartment_id}.

---

##### `job_configuration_details`<sup>Required</sup> <a name="job_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobConfigurationDetails"></a>

```python
job_configuration_details: DatascienceJobJobConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a>

job_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_configuration_details DatascienceJob#job_configuration_details}

---

##### `job_infrastructure_configuration_details`<sup>Required</sup> <a name="job_infrastructure_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobInfrastructureConfigurationDetails"></a>

```python
job_infrastructure_configuration_details: DatascienceJobJobInfrastructureConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a>

job_infrastructure_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_infrastructure_configuration_details DatascienceJob#job_infrastructure_configuration_details}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#project_id DatascienceJob#project_id}.

---

##### `artifact_content_disposition`<sup>Optional</sup> <a name="artifact_content_disposition" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.artifactContentDisposition"></a>

```python
artifact_content_disposition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#artifact_content_disposition DatascienceJob#artifact_content_disposition}.

---

##### `artifact_content_length`<sup>Optional</sup> <a name="artifact_content_length" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.artifactContentLength"></a>

```python
artifact_content_length: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#artifact_content_length DatascienceJob#artifact_content_length}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#defined_tags DatascienceJob#defined_tags}.

---

##### `delete_related_job_runs`<sup>Optional</sup> <a name="delete_related_job_runs" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.deleteRelatedJobRuns"></a>

```python
delete_related_job_runs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#delete_related_job_runs DatascienceJob#delete_related_job_runs}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#description DatascienceJob#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#display_name DatascienceJob#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#freeform_tags DatascienceJob#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#id DatascienceJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_artifact`<sup>Optional</sup> <a name="job_artifact" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobArtifact"></a>

```python
job_artifact: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_artifact DatascienceJob#job_artifact}.

---

##### `job_environment_configuration_details`<sup>Optional</sup> <a name="job_environment_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobEnvironmentConfigurationDetails"></a>

```python
job_environment_configuration_details: DatascienceJobJobEnvironmentConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a>

job_environment_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_environment_configuration_details DatascienceJob#job_environment_configuration_details}

---

##### `job_log_configuration_details`<sup>Optional</sup> <a name="job_log_configuration_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobLogConfigurationDetails"></a>

```python
job_log_configuration_details: DatascienceJobJobLogConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a>

job_log_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_log_configuration_details DatascienceJob#job_log_configuration_details}

---

##### `job_storage_mount_configuration_details_list`<sup>Optional</sup> <a name="job_storage_mount_configuration_details_list" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.jobStorageMountConfigurationDetailsList"></a>

```python
job_storage_mount_configuration_details_list: typing.Union[IResolvable, typing.List[DatascienceJobJobStorageMountConfigurationDetailsListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct">DatascienceJobJobStorageMountConfigurationDetailsListStruct</a>]]

job_storage_mount_configuration_details_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_storage_mount_configuration_details_list DatascienceJob#job_storage_mount_configuration_details_list}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobConfig.property.timeouts"></a>

```python
timeouts: DatascienceJobTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts">DatascienceJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#timeouts DatascienceJob#timeouts}

---

### DatascienceJobJobConfigurationDetails <a name="DatascienceJobJobConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_job

datascienceJob.DatascienceJobJobConfigurationDetails(
  job_type: str,
  command_line_arguments: str = None,
  environment_variables: typing.Mapping[str] = None,
  maximum_runtime_in_minutes: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.jobType">job_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_type DatascienceJob#job_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.commandLineArguments">command_line_arguments</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#command_line_arguments DatascienceJob#command_line_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#environment_variables DatascienceJob#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.maximumRuntimeInMinutes">maximum_runtime_in_minutes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#maximum_runtime_in_minutes DatascienceJob#maximum_runtime_in_minutes}. |

---

##### `job_type`<sup>Required</sup> <a name="job_type" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.jobType"></a>

```python
job_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_type DatascienceJob#job_type}.

---

##### `command_line_arguments`<sup>Optional</sup> <a name="command_line_arguments" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.commandLineArguments"></a>

```python
command_line_arguments: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#command_line_arguments DatascienceJob#command_line_arguments}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#environment_variables DatascienceJob#environment_variables}.

---

##### `maximum_runtime_in_minutes`<sup>Optional</sup> <a name="maximum_runtime_in_minutes" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails.property.maximumRuntimeInMinutes"></a>

```python
maximum_runtime_in_minutes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#maximum_runtime_in_minutes DatascienceJob#maximum_runtime_in_minutes}.

---

### DatascienceJobJobEnvironmentConfigurationDetails <a name="DatascienceJobJobEnvironmentConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_job

datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails(
  image: str,
  job_environment_type: str,
  cmd: typing.List[str] = None,
  entrypoint: typing.List[str] = None,
  image_digest: str = None,
  image_signature_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#image DatascienceJob#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.jobEnvironmentType">job_environment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_environment_type DatascienceJob#job_environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.cmd">cmd</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#cmd DatascienceJob#cmd}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.entrypoint">entrypoint</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#entrypoint DatascienceJob#entrypoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.imageDigest">image_digest</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#image_digest DatascienceJob#image_digest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.imageSignatureId">image_signature_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#image_signature_id DatascienceJob#image_signature_id}. |

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.image"></a>

```python
image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#image DatascienceJob#image}.

---

##### `job_environment_type`<sup>Required</sup> <a name="job_environment_type" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.jobEnvironmentType"></a>

```python
job_environment_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_environment_type DatascienceJob#job_environment_type}.

---

##### `cmd`<sup>Optional</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.cmd"></a>

```python
cmd: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#cmd DatascienceJob#cmd}.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.entrypoint"></a>

```python
entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#entrypoint DatascienceJob#entrypoint}.

---

##### `image_digest`<sup>Optional</sup> <a name="image_digest" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.imageDigest"></a>

```python
image_digest: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#image_digest DatascienceJob#image_digest}.

---

##### `image_signature_id`<sup>Optional</sup> <a name="image_signature_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails.property.imageSignatureId"></a>

```python
image_signature_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#image_signature_id DatascienceJob#image_signature_id}.

---

### DatascienceJobJobInfrastructureConfigurationDetails <a name="DatascienceJobJobInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_job

datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails(
  block_storage_size_in_gbs: typing.Union[int, float],
  job_infrastructure_type: str,
  shape_name: str,
  job_shape_config_details: DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.blockStorageSizeInGbs">block_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#block_storage_size_in_gbs DatascienceJob#block_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.jobInfrastructureType">job_infrastructure_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_infrastructure_type DatascienceJob#job_infrastructure_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.shapeName">shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#shape_name DatascienceJob#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.jobShapeConfigDetails">job_shape_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a></code> | job_shape_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#subnet_id DatascienceJob#subnet_id}. |

---

##### `block_storage_size_in_gbs`<sup>Required</sup> <a name="block_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.blockStorageSizeInGbs"></a>

```python
block_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#block_storage_size_in_gbs DatascienceJob#block_storage_size_in_gbs}.

---

##### `job_infrastructure_type`<sup>Required</sup> <a name="job_infrastructure_type" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.jobInfrastructureType"></a>

```python
job_infrastructure_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_infrastructure_type DatascienceJob#job_infrastructure_type}.

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#shape_name DatascienceJob#shape_name}.

---

##### `job_shape_config_details`<sup>Optional</sup> <a name="job_shape_config_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.jobShapeConfigDetails"></a>

```python
job_shape_config_details: DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a>

job_shape_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#job_shape_config_details DatascienceJob#job_shape_config_details}

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#subnet_id DatascienceJob#subnet_id}.

---

### DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails <a name="DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_job

datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails(
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#memory_in_gbs DatascienceJob#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#ocpus DatascienceJob#ocpus}. |

---

##### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#memory_in_gbs DatascienceJob#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#ocpus DatascienceJob#ocpus}.

---

### DatascienceJobJobLogConfigurationDetails <a name="DatascienceJobJobLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_job

datascienceJob.DatascienceJobJobLogConfigurationDetails(
  enable_auto_log_creation: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  log_group_id: str = None,
  log_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.enableAutoLogCreation">enable_auto_log_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#enable_auto_log_creation DatascienceJob#enable_auto_log_creation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#enable_logging DatascienceJob#enable_logging}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.logGroupId">log_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#log_group_id DatascienceJob#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.logId">log_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#log_id DatascienceJob#log_id}. |

---

##### `enable_auto_log_creation`<sup>Optional</sup> <a name="enable_auto_log_creation" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.enableAutoLogCreation"></a>

```python
enable_auto_log_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#enable_auto_log_creation DatascienceJob#enable_auto_log_creation}.

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#enable_logging DatascienceJob#enable_logging}.

---

##### `log_group_id`<sup>Optional</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#log_group_id DatascienceJob#log_group_id}.

---

##### `log_id`<sup>Optional</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails.property.logId"></a>

```python
log_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#log_id DatascienceJob#log_id}.

---

### DatascienceJobJobStorageMountConfigurationDetailsListStruct <a name="DatascienceJobJobStorageMountConfigurationDetailsListStruct" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_job

datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct(
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
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.destinationDirectoryName">destination_directory_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#destination_directory_name DatascienceJob#destination_directory_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.storageType">storage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#storage_type DatascienceJob#storage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#bucket DatascienceJob#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.destinationPath">destination_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#destination_path DatascienceJob#destination_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.exportId">export_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#export_id DatascienceJob#export_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.mountTargetId">mount_target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#mount_target_id DatascienceJob#mount_target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#namespace DatascienceJob#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#prefix DatascienceJob#prefix}. |

---

##### `destination_directory_name`<sup>Required</sup> <a name="destination_directory_name" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.destinationDirectoryName"></a>

```python
destination_directory_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#destination_directory_name DatascienceJob#destination_directory_name}.

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#storage_type DatascienceJob#storage_type}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#bucket DatascienceJob#bucket}.

---

##### `destination_path`<sup>Optional</sup> <a name="destination_path" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.destinationPath"></a>

```python
destination_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#destination_path DatascienceJob#destination_path}.

---

##### `export_id`<sup>Optional</sup> <a name="export_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.exportId"></a>

```python
export_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#export_id DatascienceJob#export_id}.

---

##### `mount_target_id`<sup>Optional</sup> <a name="mount_target_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.mountTargetId"></a>

```python
mount_target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#mount_target_id DatascienceJob#mount_target_id}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#namespace DatascienceJob#namespace}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#prefix DatascienceJob#prefix}.

---

### DatascienceJobTimeouts <a name="DatascienceJobTimeouts" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_job

datascienceJob.DatascienceJobTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#create DatascienceJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#delete DatascienceJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#update DatascienceJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#create DatascienceJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#delete DatascienceJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#update DatascienceJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatascienceJobJobConfigurationDetailsOutputReference <a name="DatascienceJobJobConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_job

datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resetCommandLineArguments">reset_command_line_arguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes">reset_maximum_runtime_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_command_line_arguments` <a name="reset_command_line_arguments" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resetCommandLineArguments"></a>

```python
def reset_command_line_arguments() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_maximum_runtime_in_minutes` <a name="reset_maximum_runtime_in_minutes" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes"></a>

```python
def reset_maximum_runtime_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.commandLineArgumentsInput">command_line_arguments_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.jobTypeInput">job_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput">maximum_runtime_in_minutes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.commandLineArguments">command_line_arguments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.jobType">job_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">maximum_runtime_in_minutes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_line_arguments_input`<sup>Optional</sup> <a name="command_line_arguments_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.commandLineArgumentsInput"></a>

```python
command_line_arguments_input: str
```

- *Type:* str

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `job_type_input`<sup>Optional</sup> <a name="job_type_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.jobTypeInput"></a>

```python
job_type_input: str
```

- *Type:* str

---

##### `maximum_runtime_in_minutes_input`<sup>Optional</sup> <a name="maximum_runtime_in_minutes_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput"></a>

```python
maximum_runtime_in_minutes_input: str
```

- *Type:* str

---

##### `command_line_arguments`<sup>Required</sup> <a name="command_line_arguments" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```python
command_line_arguments: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `job_type`<sup>Required</sup> <a name="job_type" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.jobType"></a>

```python
job_type: str
```

- *Type:* str

---

##### `maximum_runtime_in_minutes`<sup>Required</sup> <a name="maximum_runtime_in_minutes" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```python
maximum_runtime_in_minutes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatascienceJobJobConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobConfigurationDetails">DatascienceJobJobConfigurationDetails</a>

---


### DatascienceJobJobEnvironmentConfigurationDetailsOutputReference <a name="DatascienceJobJobEnvironmentConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_job

datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetCmd">reset_cmd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetEntrypoint">reset_entrypoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetImageDigest">reset_image_digest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetImageSignatureId">reset_image_signature_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cmd` <a name="reset_cmd" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetCmd"></a>

```python
def reset_cmd() -> None
```

##### `reset_entrypoint` <a name="reset_entrypoint" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetEntrypoint"></a>

```python
def reset_entrypoint() -> None
```

##### `reset_image_digest` <a name="reset_image_digest" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetImageDigest"></a>

```python
def reset_image_digest() -> None
```

##### `reset_image_signature_id` <a name="reset_image_signature_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.resetImageSignatureId"></a>

```python
def reset_image_signature_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.cmdInput">cmd_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.entrypointInput">entrypoint_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageDigestInput">image_digest_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageSignatureIdInput">image_signature_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.jobEnvironmentTypeInput">job_environment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.cmd">cmd</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.entrypoint">entrypoint</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageDigest">image_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageSignatureId">image_signature_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.jobEnvironmentType">job_environment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cmd_input`<sup>Optional</sup> <a name="cmd_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.cmdInput"></a>

```python
cmd_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entrypoint_input`<sup>Optional</sup> <a name="entrypoint_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.entrypointInput"></a>

```python
entrypoint_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image_digest_input`<sup>Optional</sup> <a name="image_digest_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageDigestInput"></a>

```python
image_digest_input: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `image_signature_id_input`<sup>Optional</sup> <a name="image_signature_id_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageSignatureIdInput"></a>

```python
image_signature_id_input: str
```

- *Type:* str

---

##### `job_environment_type_input`<sup>Optional</sup> <a name="job_environment_type_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.jobEnvironmentTypeInput"></a>

```python
job_environment_type_input: str
```

- *Type:* str

---

##### `cmd`<sup>Required</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.cmd"></a>

```python
cmd: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.entrypoint"></a>

```python
entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `image_digest`<sup>Required</sup> <a name="image_digest" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageDigest"></a>

```python
image_digest: str
```

- *Type:* str

---

##### `image_signature_id`<sup>Required</sup> <a name="image_signature_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.imageSignatureId"></a>

```python
image_signature_id: str
```

- *Type:* str

---

##### `job_environment_type`<sup>Required</sup> <a name="job_environment_type" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.jobEnvironmentType"></a>

```python
job_environment_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatascienceJobJobEnvironmentConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobEnvironmentConfigurationDetails">DatascienceJobJobEnvironmentConfigurationDetails</a>

---


### DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference <a name="DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_job

datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resetMemoryInGbs">reset_memory_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resetOcpus">reset_ocpus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_memory_in_gbs` <a name="reset_memory_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resetMemoryInGbs"></a>

```python
def reset_memory_in_gbs() -> None
```

##### `reset_ocpus` <a name="reset_ocpus" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resetOcpus"></a>

```python
def reset_ocpus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbsInput">memory_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpusInput">ocpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs_input`<sup>Optional</sup> <a name="memory_in_gbs_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbsInput"></a>

```python
memory_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_input`<sup>Optional</sup> <a name="ocpus_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpusInput"></a>

```python
ocpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a>

---


### DatascienceJobJobInfrastructureConfigurationDetailsOutputReference <a name="DatascienceJobJobInfrastructureConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_job

datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.putJobShapeConfigDetails">put_job_shape_config_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resetJobShapeConfigDetails">reset_job_shape_config_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_job_shape_config_details` <a name="put_job_shape_config_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.putJobShapeConfigDetails"></a>

```python
def put_job_shape_config_details(
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
) -> None
```

###### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.putJobShapeConfigDetails.parameter.memoryInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#memory_in_gbs DatascienceJob#memory_in_gbs}.

---

###### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.putJobShapeConfigDetails.parameter.ocpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_job#ocpus DatascienceJob#ocpus}.

---

##### `reset_job_shape_config_details` <a name="reset_job_shape_config_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resetJobShapeConfigDetails"></a>

```python
def reset_job_shape_config_details() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetails">job_shape_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput">block_storage_size_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureTypeInput">job_infrastructure_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetailsInput">job_shape_config_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.shapeNameInput">shape_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs">block_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureType">job_infrastructure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `job_shape_config_details`<sup>Required</sup> <a name="job_shape_config_details" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetails"></a>

```python
job_shape_config_details: DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference</a>

---

##### `block_storage_size_in_gbs_input`<sup>Optional</sup> <a name="block_storage_size_in_gbs_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput"></a>

```python
block_storage_size_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `job_infrastructure_type_input`<sup>Optional</sup> <a name="job_infrastructure_type_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureTypeInput"></a>

```python
job_infrastructure_type_input: str
```

- *Type:* str

---

##### `job_shape_config_details_input`<sup>Optional</sup> <a name="job_shape_config_details_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetailsInput"></a>

```python
job_shape_config_details_input: DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DatascienceJobJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a>

---

##### `shape_name_input`<sup>Optional</sup> <a name="shape_name_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.shapeNameInput"></a>

```python
shape_name_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `block_storage_size_in_gbs`<sup>Required</sup> <a name="block_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```python
block_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `job_infrastructure_type`<sup>Required</sup> <a name="job_infrastructure_type" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureType"></a>

```python
job_infrastructure_type: str
```

- *Type:* str

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatascienceJobJobInfrastructureConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobInfrastructureConfigurationDetails">DatascienceJobJobInfrastructureConfigurationDetails</a>

---


### DatascienceJobJobLogConfigurationDetailsOutputReference <a name="DatascienceJobJobLogConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_job

datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetEnableAutoLogCreation">reset_enable_auto_log_creation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetEnableLogging">reset_enable_logging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetLogGroupId">reset_log_group_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetLogId">reset_log_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_auto_log_creation` <a name="reset_enable_auto_log_creation" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetEnableAutoLogCreation"></a>

```python
def reset_enable_auto_log_creation() -> None
```

##### `reset_enable_logging` <a name="reset_enable_logging" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetEnableLogging"></a>

```python
def reset_enable_logging() -> None
```

##### `reset_log_group_id` <a name="reset_log_group_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetLogGroupId"></a>

```python
def reset_log_group_id() -> None
```

##### `reset_log_id` <a name="reset_log_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.resetLogId"></a>

```python
def reset_log_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableAutoLogCreationInput">enable_auto_log_creation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableLoggingInput">enable_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logGroupIdInput">log_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logIdInput">log_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableAutoLogCreation">enable_auto_log_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logId">log_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_auto_log_creation_input`<sup>Optional</sup> <a name="enable_auto_log_creation_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableAutoLogCreationInput"></a>

```python
enable_auto_log_creation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging_input`<sup>Optional</sup> <a name="enable_logging_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableLoggingInput"></a>

```python
enable_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_group_id_input`<sup>Optional</sup> <a name="log_group_id_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logGroupIdInput"></a>

```python
log_group_id_input: str
```

- *Type:* str

---

##### `log_id_input`<sup>Optional</sup> <a name="log_id_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logIdInput"></a>

```python
log_id_input: str
```

- *Type:* str

---

##### `enable_auto_log_creation`<sup>Required</sup> <a name="enable_auto_log_creation" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableAutoLogCreation"></a>

```python
enable_auto_log_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_id`<sup>Required</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.logId"></a>

```python
log_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatascienceJobJobLogConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobLogConfigurationDetails">DatascienceJobJobLogConfigurationDetails</a>

---


### DatascienceJobJobStorageMountConfigurationDetailsListStructList <a name="DatascienceJobJobStorageMountConfigurationDetailsListStructList" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_job

datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct">DatascienceJobJobStorageMountConfigurationDetailsListStruct</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatascienceJobJobStorageMountConfigurationDetailsListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct">DatascienceJobJobStorageMountConfigurationDetailsListStruct</a>]]

---


### DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference <a name="DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_job

datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetDestinationPath">reset_destination_path</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetExportId">reset_export_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetMountTargetId">reset_mount_target_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_destination_path` <a name="reset_destination_path" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetDestinationPath"></a>

```python
def reset_destination_path() -> None
```

##### `reset_export_id` <a name="reset_export_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetExportId"></a>

```python
def reset_export_id() -> None
```

##### `reset_mount_target_id` <a name="reset_mount_target_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetMountTargetId"></a>

```python
def reset_mount_target_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryNameInput">destination_directory_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPathInput">destination_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.exportIdInput">export_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetIdInput">mount_target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName">destination_directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath">destination_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.exportId">export_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId">mount_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct">DatascienceJobJobStorageMountConfigurationDetailsListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `destination_directory_name_input`<sup>Optional</sup> <a name="destination_directory_name_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryNameInput"></a>

```python
destination_directory_name_input: str
```

- *Type:* str

---

##### `destination_path_input`<sup>Optional</sup> <a name="destination_path_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPathInput"></a>

```python
destination_path_input: str
```

- *Type:* str

---

##### `export_id_input`<sup>Optional</sup> <a name="export_id_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.exportIdInput"></a>

```python
export_id_input: str
```

- *Type:* str

---

##### `mount_target_id_input`<sup>Optional</sup> <a name="mount_target_id_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetIdInput"></a>

```python
mount_target_id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `destination_directory_name`<sup>Required</sup> <a name="destination_directory_name" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName"></a>

```python
destination_directory_name: str
```

- *Type:* str

---

##### `destination_path`<sup>Required</sup> <a name="destination_path" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath"></a>

```python
destination_path: str
```

- *Type:* str

---

##### `export_id`<sup>Required</sup> <a name="export_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.exportId"></a>

```python
export_id: str
```

- *Type:* str

---

##### `mount_target_id`<sup>Required</sup> <a name="mount_target_id" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId"></a>

```python
mount_target_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStructOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatascienceJobJobStorageMountConfigurationDetailsListStruct]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobJobStorageMountConfigurationDetailsListStruct">DatascienceJobJobStorageMountConfigurationDetailsListStruct</a>]

---


### DatascienceJobTimeoutsOutputReference <a name="DatascienceJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_job

datascienceJob.DatascienceJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts">DatascienceJobTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatascienceJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datascienceJob.DatascienceJobTimeouts">DatascienceJobTimeouts</a>]

---



