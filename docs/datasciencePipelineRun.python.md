# `datasciencePipelineRun` Submodule <a name="`datasciencePipelineRun` Submodule" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasciencePipelineRun <a name="DatasciencePipelineRun" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run oci_datascience_pipeline_run}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRun(
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
  pipeline_id: str,
  project_id: str,
  configuration_override_details: DatasciencePipelineRunConfigurationOverrideDetails = None,
  defined_tags: typing.Mapping[str] = None,
  delete_related_job_runs: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  log_configuration_override_details: DatasciencePipelineRunLogConfigurationOverrideDetails = None,
  opc_parent_rpt_url: str = None,
  step_override_details: typing.Union[IResolvable, typing.List[DatasciencePipelineRunStepOverrideDetails]] = None,
  system_tags: typing.Mapping[str] = None,
  timeouts: DatasciencePipelineRunTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#compartment_id DatasciencePipelineRun#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.pipelineId">pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#pipeline_id DatasciencePipelineRun#pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#project_id DatasciencePipelineRun#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.configurationOverrideDetails">configuration_override_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a></code> | configuration_override_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#defined_tags DatasciencePipelineRun#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.deleteRelatedJobRuns">delete_related_job_runs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#delete_related_job_runs DatasciencePipelineRun#delete_related_job_runs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#display_name DatasciencePipelineRun#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#freeform_tags DatasciencePipelineRun#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#id DatasciencePipelineRun#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.logConfigurationOverrideDetails">log_configuration_override_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a></code> | log_configuration_override_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.opcParentRptUrl">opc_parent_rpt_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#opc_parent_rpt_url DatasciencePipelineRun#opc_parent_rpt_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.stepOverrideDetails">step_override_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails">DatasciencePipelineRunStepOverrideDetails</a>]]</code> | step_override_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.systemTags">system_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#system_tags DatasciencePipelineRun#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts">DatasciencePipelineRunTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#compartment_id DatasciencePipelineRun#compartment_id}.

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.pipelineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#pipeline_id DatasciencePipelineRun#pipeline_id}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#project_id DatasciencePipelineRun#project_id}.

---

##### `configuration_override_details`<sup>Optional</sup> <a name="configuration_override_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.configurationOverrideDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a>

configuration_override_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#configuration_override_details DatasciencePipelineRun#configuration_override_details}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#defined_tags DatasciencePipelineRun#defined_tags}.

---

##### `delete_related_job_runs`<sup>Optional</sup> <a name="delete_related_job_runs" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.deleteRelatedJobRuns"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#delete_related_job_runs DatasciencePipelineRun#delete_related_job_runs}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#display_name DatasciencePipelineRun#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#freeform_tags DatasciencePipelineRun#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#id DatasciencePipelineRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_configuration_override_details`<sup>Optional</sup> <a name="log_configuration_override_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.logConfigurationOverrideDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a>

log_configuration_override_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#log_configuration_override_details DatasciencePipelineRun#log_configuration_override_details}

---

##### `opc_parent_rpt_url`<sup>Optional</sup> <a name="opc_parent_rpt_url" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.opcParentRptUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#opc_parent_rpt_url DatasciencePipelineRun#opc_parent_rpt_url}.

---

##### `step_override_details`<sup>Optional</sup> <a name="step_override_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.stepOverrideDetails"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails">DatasciencePipelineRunStepOverrideDetails</a>]]

step_override_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#step_override_details DatasciencePipelineRun#step_override_details}

---

##### `system_tags`<sup>Optional</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.systemTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#system_tags DatasciencePipelineRun#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts">DatasciencePipelineRunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#timeouts DatasciencePipelineRun#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putConfigurationOverrideDetails">put_configuration_override_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putLogConfigurationOverrideDetails">put_log_configuration_override_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putStepOverrideDetails">put_step_override_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetConfigurationOverrideDetails">reset_configuration_override_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetDeleteRelatedJobRuns">reset_delete_related_job_runs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetLogConfigurationOverrideDetails">reset_log_configuration_override_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetOpcParentRptUrl">reset_opc_parent_rpt_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetStepOverrideDetails">reset_step_override_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetSystemTags">reset_system_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration_override_details` <a name="put_configuration_override_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putConfigurationOverrideDetails"></a>

```python
def put_configuration_override_details(
  type: str,
  command_line_arguments: str = None,
  environment_variables: typing.Mapping[str] = None,
  maximum_runtime_in_minutes: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putConfigurationOverrideDetails.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#type DatasciencePipelineRun#type}.

---

###### `command_line_arguments`<sup>Optional</sup> <a name="command_line_arguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putConfigurationOverrideDetails.parameter.commandLineArguments"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#command_line_arguments DatasciencePipelineRun#command_line_arguments}.

---

###### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putConfigurationOverrideDetails.parameter.environmentVariables"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#environment_variables DatasciencePipelineRun#environment_variables}.

---

###### `maximum_runtime_in_minutes`<sup>Optional</sup> <a name="maximum_runtime_in_minutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putConfigurationOverrideDetails.parameter.maximumRuntimeInMinutes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#maximum_runtime_in_minutes DatasciencePipelineRun#maximum_runtime_in_minutes}.

---

##### `put_log_configuration_override_details` <a name="put_log_configuration_override_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putLogConfigurationOverrideDetails"></a>

```python
def put_log_configuration_override_details(
  enable_auto_log_creation: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  log_group_id: str = None,
  log_id: str = None
) -> None
```

###### `enable_auto_log_creation`<sup>Optional</sup> <a name="enable_auto_log_creation" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putLogConfigurationOverrideDetails.parameter.enableAutoLogCreation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#enable_auto_log_creation DatasciencePipelineRun#enable_auto_log_creation}.

---

###### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putLogConfigurationOverrideDetails.parameter.enableLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#enable_logging DatasciencePipelineRun#enable_logging}.

---

###### `log_group_id`<sup>Optional</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putLogConfigurationOverrideDetails.parameter.logGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#log_group_id DatasciencePipelineRun#log_group_id}.

---

###### `log_id`<sup>Optional</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putLogConfigurationOverrideDetails.parameter.logId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#log_id DatasciencePipelineRun#log_id}.

---

##### `put_step_override_details` <a name="put_step_override_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putStepOverrideDetails"></a>

```python
def put_step_override_details(
  value: typing.Union[IResolvable, typing.List[DatasciencePipelineRunStepOverrideDetails]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putStepOverrideDetails.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails">DatasciencePipelineRunStepOverrideDetails</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#create DatasciencePipelineRun#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#delete DatasciencePipelineRun#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#update DatasciencePipelineRun#update}.

---

##### `reset_configuration_override_details` <a name="reset_configuration_override_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetConfigurationOverrideDetails"></a>

```python
def reset_configuration_override_details() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_delete_related_job_runs` <a name="reset_delete_related_job_runs" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetDeleteRelatedJobRuns"></a>

```python
def reset_delete_related_job_runs() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_configuration_override_details` <a name="reset_log_configuration_override_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetLogConfigurationOverrideDetails"></a>

```python
def reset_log_configuration_override_details() -> None
```

##### `reset_opc_parent_rpt_url` <a name="reset_opc_parent_rpt_url" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetOpcParentRptUrl"></a>

```python
def reset_opc_parent_rpt_url() -> None
```

##### `reset_step_override_details` <a name="reset_step_override_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetStepOverrideDetails"></a>

```python
def reset_step_override_details() -> None
```

##### `reset_system_tags` <a name="reset_system_tags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetSystemTags"></a>

```python
def reset_system_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatasciencePipelineRun resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRun.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRun.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRun.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRun.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatasciencePipelineRun resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatasciencePipelineRun to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatasciencePipelineRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatasciencePipelineRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.configurationDetails">configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList">DatasciencePipelineRunConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.configurationOverrideDetails">configuration_override_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference">DatasciencePipelineRunConfigurationOverrideDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.logConfigurationOverrideDetails">log_configuration_override_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference">DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.logDetails">log_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList">DatasciencePipelineRunLogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.stepOverrideDetails">step_override_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList">DatasciencePipelineRunStepOverrideDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.stepRuns">step_runs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList">DatasciencePipelineRunStepRunsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeAccepted">time_accepted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference">DatasciencePipelineRunTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.configurationOverrideDetailsInput">configuration_override_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.deleteRelatedJobRunsInput">delete_related_job_runs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.logConfigurationOverrideDetailsInput">log_configuration_override_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.opcParentRptUrlInput">opc_parent_rpt_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.pipelineIdInput">pipeline_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.stepOverrideDetailsInput">step_override_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails">DatasciencePipelineRunStepOverrideDetails</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.systemTagsInput">system_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts">DatasciencePipelineRunTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.deleteRelatedJobRuns">delete_related_job_runs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.opcParentRptUrl">opc_parent_rpt_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.systemTags">system_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration_details`<sup>Required</sup> <a name="configuration_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.configurationDetails"></a>

```python
configuration_details: DatasciencePipelineRunConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList">DatasciencePipelineRunConfigurationDetailsList</a>

---

##### `configuration_override_details`<sup>Required</sup> <a name="configuration_override_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.configurationOverrideDetails"></a>

```python
configuration_override_details: DatasciencePipelineRunConfigurationOverrideDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference">DatasciencePipelineRunConfigurationOverrideDetailsOutputReference</a>

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `log_configuration_override_details`<sup>Required</sup> <a name="log_configuration_override_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.logConfigurationOverrideDetails"></a>

```python
log_configuration_override_details: DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference">DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference</a>

---

##### `log_details`<sup>Required</sup> <a name="log_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.logDetails"></a>

```python
log_details: DatasciencePipelineRunLogDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList">DatasciencePipelineRunLogDetailsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `step_override_details`<sup>Required</sup> <a name="step_override_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.stepOverrideDetails"></a>

```python
step_override_details: DatasciencePipelineRunStepOverrideDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList">DatasciencePipelineRunStepOverrideDetailsList</a>

---

##### `step_runs`<sup>Required</sup> <a name="step_runs" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.stepRuns"></a>

```python
step_runs: DatasciencePipelineRunStepRunsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList">DatasciencePipelineRunStepRunsList</a>

---

##### `time_accepted`<sup>Required</sup> <a name="time_accepted" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeAccepted"></a>

```python
time_accepted: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeouts"></a>

```python
timeouts: DatasciencePipelineRunTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference">DatasciencePipelineRunTimeoutsOutputReference</a>

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `configuration_override_details_input`<sup>Optional</sup> <a name="configuration_override_details_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.configurationOverrideDetailsInput"></a>

```python
configuration_override_details_input: DatasciencePipelineRunConfigurationOverrideDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a>

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `delete_related_job_runs_input`<sup>Optional</sup> <a name="delete_related_job_runs_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.deleteRelatedJobRunsInput"></a>

```python
delete_related_job_runs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_configuration_override_details_input`<sup>Optional</sup> <a name="log_configuration_override_details_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.logConfigurationOverrideDetailsInput"></a>

```python
log_configuration_override_details_input: DatasciencePipelineRunLogConfigurationOverrideDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a>

---

##### `opc_parent_rpt_url_input`<sup>Optional</sup> <a name="opc_parent_rpt_url_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.opcParentRptUrlInput"></a>

```python
opc_parent_rpt_url_input: str
```

- *Type:* str

---

##### `pipeline_id_input`<sup>Optional</sup> <a name="pipeline_id_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.pipelineIdInput"></a>

```python
pipeline_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `step_override_details_input`<sup>Optional</sup> <a name="step_override_details_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.stepOverrideDetailsInput"></a>

```python
step_override_details_input: typing.Union[IResolvable, typing.List[DatasciencePipelineRunStepOverrideDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails">DatasciencePipelineRunStepOverrideDetails</a>]]

---

##### `system_tags_input`<sup>Optional</sup> <a name="system_tags_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.systemTagsInput"></a>

```python
system_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatasciencePipelineRunTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts">DatasciencePipelineRunTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `delete_related_job_runs`<sup>Required</sup> <a name="delete_related_job_runs" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.deleteRelatedJobRuns"></a>

```python
delete_related_job_runs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `opc_parent_rpt_url`<sup>Required</sup> <a name="opc_parent_rpt_url" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.opcParentRptUrl"></a>

```python
opc_parent_rpt_url: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.systemTags"></a>

```python
system_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRun.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatasciencePipelineRunConfig <a name="DatasciencePipelineRunConfig" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  pipeline_id: str,
  project_id: str,
  configuration_override_details: DatasciencePipelineRunConfigurationOverrideDetails = None,
  defined_tags: typing.Mapping[str] = None,
  delete_related_job_runs: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  log_configuration_override_details: DatasciencePipelineRunLogConfigurationOverrideDetails = None,
  opc_parent_rpt_url: str = None,
  step_override_details: typing.Union[IResolvable, typing.List[DatasciencePipelineRunStepOverrideDetails]] = None,
  system_tags: typing.Mapping[str] = None,
  timeouts: DatasciencePipelineRunTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#compartment_id DatasciencePipelineRun#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.pipelineId">pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#pipeline_id DatasciencePipelineRun#pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#project_id DatasciencePipelineRun#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.configurationOverrideDetails">configuration_override_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a></code> | configuration_override_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#defined_tags DatasciencePipelineRun#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.deleteRelatedJobRuns">delete_related_job_runs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#delete_related_job_runs DatasciencePipelineRun#delete_related_job_runs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#display_name DatasciencePipelineRun#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#freeform_tags DatasciencePipelineRun#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#id DatasciencePipelineRun#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.logConfigurationOverrideDetails">log_configuration_override_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a></code> | log_configuration_override_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.opcParentRptUrl">opc_parent_rpt_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#opc_parent_rpt_url DatasciencePipelineRun#opc_parent_rpt_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.stepOverrideDetails">step_override_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails">DatasciencePipelineRunStepOverrideDetails</a>]]</code> | step_override_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.systemTags">system_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#system_tags DatasciencePipelineRun#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts">DatasciencePipelineRunTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#compartment_id DatasciencePipelineRun#compartment_id}.

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#pipeline_id DatasciencePipelineRun#pipeline_id}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#project_id DatasciencePipelineRun#project_id}.

---

##### `configuration_override_details`<sup>Optional</sup> <a name="configuration_override_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.configurationOverrideDetails"></a>

```python
configuration_override_details: DatasciencePipelineRunConfigurationOverrideDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a>

configuration_override_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#configuration_override_details DatasciencePipelineRun#configuration_override_details}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#defined_tags DatasciencePipelineRun#defined_tags}.

---

##### `delete_related_job_runs`<sup>Optional</sup> <a name="delete_related_job_runs" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.deleteRelatedJobRuns"></a>

```python
delete_related_job_runs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#delete_related_job_runs DatasciencePipelineRun#delete_related_job_runs}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#display_name DatasciencePipelineRun#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#freeform_tags DatasciencePipelineRun#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#id DatasciencePipelineRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_configuration_override_details`<sup>Optional</sup> <a name="log_configuration_override_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.logConfigurationOverrideDetails"></a>

```python
log_configuration_override_details: DatasciencePipelineRunLogConfigurationOverrideDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a>

log_configuration_override_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#log_configuration_override_details DatasciencePipelineRun#log_configuration_override_details}

---

##### `opc_parent_rpt_url`<sup>Optional</sup> <a name="opc_parent_rpt_url" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.opcParentRptUrl"></a>

```python
opc_parent_rpt_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#opc_parent_rpt_url DatasciencePipelineRun#opc_parent_rpt_url}.

---

##### `step_override_details`<sup>Optional</sup> <a name="step_override_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.stepOverrideDetails"></a>

```python
step_override_details: typing.Union[IResolvable, typing.List[DatasciencePipelineRunStepOverrideDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails">DatasciencePipelineRunStepOverrideDetails</a>]]

step_override_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#step_override_details DatasciencePipelineRun#step_override_details}

---

##### `system_tags`<sup>Optional</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.systemTags"></a>

```python
system_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#system_tags DatasciencePipelineRun#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfig.property.timeouts"></a>

```python
timeouts: DatasciencePipelineRunTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts">DatasciencePipelineRunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#timeouts DatasciencePipelineRun#timeouts}

---

### DatasciencePipelineRunConfigurationDetails <a name="DatasciencePipelineRunConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunConfigurationDetails()
```


### DatasciencePipelineRunConfigurationOverrideDetails <a name="DatasciencePipelineRunConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails(
  type: str,
  command_line_arguments: str = None,
  environment_variables: typing.Mapping[str] = None,
  maximum_runtime_in_minutes: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#type DatasciencePipelineRun#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.commandLineArguments">command_line_arguments</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#command_line_arguments DatasciencePipelineRun#command_line_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#environment_variables DatasciencePipelineRun#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.maximumRuntimeInMinutes">maximum_runtime_in_minutes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#maximum_runtime_in_minutes DatasciencePipelineRun#maximum_runtime_in_minutes}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#type DatasciencePipelineRun#type}.

---

##### `command_line_arguments`<sup>Optional</sup> <a name="command_line_arguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.commandLineArguments"></a>

```python
command_line_arguments: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#command_line_arguments DatasciencePipelineRun#command_line_arguments}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#environment_variables DatasciencePipelineRun#environment_variables}.

---

##### `maximum_runtime_in_minutes`<sup>Optional</sup> <a name="maximum_runtime_in_minutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails.property.maximumRuntimeInMinutes"></a>

```python
maximum_runtime_in_minutes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#maximum_runtime_in_minutes DatasciencePipelineRun#maximum_runtime_in_minutes}.

---

### DatasciencePipelineRunLogConfigurationOverrideDetails <a name="DatasciencePipelineRunLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails(
  enable_auto_log_creation: typing.Union[bool, IResolvable] = None,
  enable_logging: typing.Union[bool, IResolvable] = None,
  log_group_id: str = None,
  log_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.enableAutoLogCreation">enable_auto_log_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#enable_auto_log_creation DatasciencePipelineRun#enable_auto_log_creation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#enable_logging DatasciencePipelineRun#enable_logging}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.logGroupId">log_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#log_group_id DatasciencePipelineRun#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.logId">log_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#log_id DatasciencePipelineRun#log_id}. |

---

##### `enable_auto_log_creation`<sup>Optional</sup> <a name="enable_auto_log_creation" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.enableAutoLogCreation"></a>

```python
enable_auto_log_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#enable_auto_log_creation DatasciencePipelineRun#enable_auto_log_creation}.

---

##### `enable_logging`<sup>Optional</sup> <a name="enable_logging" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#enable_logging DatasciencePipelineRun#enable_logging}.

---

##### `log_group_id`<sup>Optional</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#log_group_id DatasciencePipelineRun#log_group_id}.

---

##### `log_id`<sup>Optional</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails.property.logId"></a>

```python
log_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#log_id DatasciencePipelineRun#log_id}.

---

### DatasciencePipelineRunLogDetails <a name="DatasciencePipelineRunLogDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunLogDetails()
```


### DatasciencePipelineRunStepOverrideDetails <a name="DatasciencePipelineRunStepOverrideDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails(
  step_configuration_details: DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails,
  step_name: str,
  step_container_configuration_details: DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails.property.stepConfigurationDetails">step_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails</a></code> | step_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails.property.stepName">step_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#step_name DatasciencePipelineRun#step_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails.property.stepContainerConfigurationDetails">step_container_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails</a></code> | step_container_configuration_details block. |

---

##### `step_configuration_details`<sup>Required</sup> <a name="step_configuration_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails.property.stepConfigurationDetails"></a>

```python
step_configuration_details: DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails</a>

step_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#step_configuration_details DatasciencePipelineRun#step_configuration_details}

---

##### `step_name`<sup>Required</sup> <a name="step_name" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails.property.stepName"></a>

```python
step_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#step_name DatasciencePipelineRun#step_name}.

---

##### `step_container_configuration_details`<sup>Optional</sup> <a name="step_container_configuration_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails.property.stepContainerConfigurationDetails"></a>

```python
step_container_configuration_details: DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails</a>

step_container_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#step_container_configuration_details DatasciencePipelineRun#step_container_configuration_details}

---

### DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails <a name="DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails(
  command_line_arguments: str = None,
  environment_variables: typing.Mapping[str] = None,
  maximum_runtime_in_minutes: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails.property.commandLineArguments">command_line_arguments</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#command_line_arguments DatasciencePipelineRun#command_line_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#environment_variables DatasciencePipelineRun#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails.property.maximumRuntimeInMinutes">maximum_runtime_in_minutes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#maximum_runtime_in_minutes DatasciencePipelineRun#maximum_runtime_in_minutes}. |

---

##### `command_line_arguments`<sup>Optional</sup> <a name="command_line_arguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails.property.commandLineArguments"></a>

```python
command_line_arguments: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#command_line_arguments DatasciencePipelineRun#command_line_arguments}.

---

##### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#environment_variables DatasciencePipelineRun#environment_variables}.

---

##### `maximum_runtime_in_minutes`<sup>Optional</sup> <a name="maximum_runtime_in_minutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails.property.maximumRuntimeInMinutes"></a>

```python
maximum_runtime_in_minutes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#maximum_runtime_in_minutes DatasciencePipelineRun#maximum_runtime_in_minutes}.

---

### DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails <a name="DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails(
  container_type: str,
  image: str,
  cmd: typing.List[str] = None,
  entrypoint: typing.List[str] = None,
  image_digest: str = None,
  image_signature_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.containerType">container_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#container_type DatasciencePipelineRun#container_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#image DatasciencePipelineRun#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.cmd">cmd</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#cmd DatasciencePipelineRun#cmd}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.entrypoint">entrypoint</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#entrypoint DatasciencePipelineRun#entrypoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.imageDigest">image_digest</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#image_digest DatasciencePipelineRun#image_digest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.imageSignatureId">image_signature_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#image_signature_id DatasciencePipelineRun#image_signature_id}. |

---

##### `container_type`<sup>Required</sup> <a name="container_type" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.containerType"></a>

```python
container_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#container_type DatasciencePipelineRun#container_type}.

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.image"></a>

```python
image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#image DatasciencePipelineRun#image}.

---

##### `cmd`<sup>Optional</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.cmd"></a>

```python
cmd: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#cmd DatasciencePipelineRun#cmd}.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.entrypoint"></a>

```python
entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#entrypoint DatasciencePipelineRun#entrypoint}.

---

##### `image_digest`<sup>Optional</sup> <a name="image_digest" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.imageDigest"></a>

```python
image_digest: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#image_digest DatasciencePipelineRun#image_digest}.

---

##### `image_signature_id`<sup>Optional</sup> <a name="image_signature_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails.property.imageSignatureId"></a>

```python
image_signature_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#image_signature_id DatasciencePipelineRun#image_signature_id}.

---

### DatasciencePipelineRunStepRuns <a name="DatasciencePipelineRunStepRuns" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRuns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRuns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunStepRuns()
```


### DatasciencePipelineRunTimeouts <a name="DatasciencePipelineRunTimeouts" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#create DatasciencePipelineRun#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#delete DatasciencePipelineRun#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#update DatasciencePipelineRun#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#create DatasciencePipelineRun#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#delete DatasciencePipelineRun#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#update DatasciencePipelineRun#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasciencePipelineRunConfigurationDetailsList <a name="DatasciencePipelineRunConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatasciencePipelineRunConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatasciencePipelineRunConfigurationDetailsOutputReference <a name="DatasciencePipelineRunConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.commandLineArguments">command_line_arguments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.environmentVariables">environment_variables</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">maximum_runtime_in_minutes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetails">DatasciencePipelineRunConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_line_arguments`<sup>Required</sup> <a name="command_line_arguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```python
command_line_arguments: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.environmentVariables"></a>

```python
environment_variables: StringMap
```

- *Type:* cdktf.StringMap

---

##### `maximum_runtime_in_minutes`<sup>Required</sup> <a name="maximum_runtime_in_minutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```python
maximum_runtime_in_minutes: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatasciencePipelineRunConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationDetails">DatasciencePipelineRunConfigurationDetails</a>

---


### DatasciencePipelineRunConfigurationOverrideDetailsOutputReference <a name="DatasciencePipelineRunConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resetCommandLineArguments">reset_command_line_arguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resetMaximumRuntimeInMinutes">reset_maximum_runtime_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_command_line_arguments` <a name="reset_command_line_arguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resetCommandLineArguments"></a>

```python
def reset_command_line_arguments() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_maximum_runtime_in_minutes` <a name="reset_maximum_runtime_in_minutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.resetMaximumRuntimeInMinutes"></a>

```python
def reset_maximum_runtime_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.commandLineArgumentsInput">command_line_arguments_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutesInput">maximum_runtime_in_minutes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.commandLineArguments">command_line_arguments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes">maximum_runtime_in_minutes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_line_arguments_input`<sup>Optional</sup> <a name="command_line_arguments_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.commandLineArgumentsInput"></a>

```python
command_line_arguments_input: str
```

- *Type:* str

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `maximum_runtime_in_minutes_input`<sup>Optional</sup> <a name="maximum_runtime_in_minutes_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutesInput"></a>

```python
maximum_runtime_in_minutes_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `command_line_arguments`<sup>Required</sup> <a name="command_line_arguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.commandLineArguments"></a>

```python
command_line_arguments: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `maximum_runtime_in_minutes`<sup>Required</sup> <a name="maximum_runtime_in_minutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```python
maximum_runtime_in_minutes: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatasciencePipelineRunConfigurationOverrideDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunConfigurationOverrideDetails">DatasciencePipelineRunConfigurationOverrideDetails</a>

---


### DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference <a name="DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetEnableAutoLogCreation">reset_enable_auto_log_creation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetEnableLogging">reset_enable_logging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetLogGroupId">reset_log_group_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetLogId">reset_log_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_auto_log_creation` <a name="reset_enable_auto_log_creation" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetEnableAutoLogCreation"></a>

```python
def reset_enable_auto_log_creation() -> None
```

##### `reset_enable_logging` <a name="reset_enable_logging" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetEnableLogging"></a>

```python
def reset_enable_logging() -> None
```

##### `reset_log_group_id` <a name="reset_log_group_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetLogGroupId"></a>

```python
def reset_log_group_id() -> None
```

##### `reset_log_id` <a name="reset_log_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.resetLogId"></a>

```python
def reset_log_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreationInput">enable_auto_log_creation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableLoggingInput">enable_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logGroupIdInput">log_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logIdInput">log_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation">enable_auto_log_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableLogging">enable_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logId">log_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_auto_log_creation_input`<sup>Optional</sup> <a name="enable_auto_log_creation_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreationInput"></a>

```python
enable_auto_log_creation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging_input`<sup>Optional</sup> <a name="enable_logging_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableLoggingInput"></a>

```python
enable_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_group_id_input`<sup>Optional</sup> <a name="log_group_id_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logGroupIdInput"></a>

```python
log_group_id_input: str
```

- *Type:* str

---

##### `log_id_input`<sup>Optional</sup> <a name="log_id_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logIdInput"></a>

```python
log_id_input: str
```

- *Type:* str

---

##### `enable_auto_log_creation`<sup>Required</sup> <a name="enable_auto_log_creation" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation"></a>

```python
enable_auto_log_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.enableLogging"></a>

```python
enable_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_id`<sup>Required</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.logId"></a>

```python
log_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatasciencePipelineRunLogConfigurationOverrideDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogConfigurationOverrideDetails">DatasciencePipelineRunLogConfigurationOverrideDetails</a>

---


### DatasciencePipelineRunLogDetailsList <a name="DatasciencePipelineRunLogDetailsList" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunLogDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatasciencePipelineRunLogDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatasciencePipelineRunLogDetailsOutputReference <a name="DatasciencePipelineRunLogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.logId">log_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetails">DatasciencePipelineRunLogDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_id`<sup>Required</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.logId"></a>

```python
log_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatasciencePipelineRunLogDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunLogDetails">DatasciencePipelineRunLogDetails</a>

---


### DatasciencePipelineRunStepOverrideDetailsList <a name="DatasciencePipelineRunStepOverrideDetailsList" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatasciencePipelineRunStepOverrideDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails">DatasciencePipelineRunStepOverrideDetails</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatasciencePipelineRunStepOverrideDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails">DatasciencePipelineRunStepOverrideDetails</a>]]

---


### DatasciencePipelineRunStepOverrideDetailsOutputReference <a name="DatasciencePipelineRunStepOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepConfigurationDetails">put_step_configuration_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepContainerConfigurationDetails">put_step_container_configuration_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.resetStepContainerConfigurationDetails">reset_step_container_configuration_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_step_configuration_details` <a name="put_step_configuration_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepConfigurationDetails"></a>

```python
def put_step_configuration_details(
  command_line_arguments: str = None,
  environment_variables: typing.Mapping[str] = None,
  maximum_runtime_in_minutes: str = None
) -> None
```

###### `command_line_arguments`<sup>Optional</sup> <a name="command_line_arguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepConfigurationDetails.parameter.commandLineArguments"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#command_line_arguments DatasciencePipelineRun#command_line_arguments}.

---

###### `environment_variables`<sup>Optional</sup> <a name="environment_variables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepConfigurationDetails.parameter.environmentVariables"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#environment_variables DatasciencePipelineRun#environment_variables}.

---

###### `maximum_runtime_in_minutes`<sup>Optional</sup> <a name="maximum_runtime_in_minutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepConfigurationDetails.parameter.maximumRuntimeInMinutes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#maximum_runtime_in_minutes DatasciencePipelineRun#maximum_runtime_in_minutes}.

---

##### `put_step_container_configuration_details` <a name="put_step_container_configuration_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepContainerConfigurationDetails"></a>

```python
def put_step_container_configuration_details(
  container_type: str,
  image: str,
  cmd: typing.List[str] = None,
  entrypoint: typing.List[str] = None,
  image_digest: str = None,
  image_signature_id: str = None
) -> None
```

###### `container_type`<sup>Required</sup> <a name="container_type" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepContainerConfigurationDetails.parameter.containerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#container_type DatasciencePipelineRun#container_type}.

---

###### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepContainerConfigurationDetails.parameter.image"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#image DatasciencePipelineRun#image}.

---

###### `cmd`<sup>Optional</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepContainerConfigurationDetails.parameter.cmd"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#cmd DatasciencePipelineRun#cmd}.

---

###### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepContainerConfigurationDetails.parameter.entrypoint"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#entrypoint DatasciencePipelineRun#entrypoint}.

---

###### `image_digest`<sup>Optional</sup> <a name="image_digest" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepContainerConfigurationDetails.parameter.imageDigest"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#image_digest DatasciencePipelineRun#image_digest}.

---

###### `image_signature_id`<sup>Optional</sup> <a name="image_signature_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.putStepContainerConfigurationDetails.parameter.imageSignatureId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline_run#image_signature_id DatasciencePipelineRun#image_signature_id}.

---

##### `reset_step_container_configuration_details` <a name="reset_step_container_configuration_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.resetStepContainerConfigurationDetails"></a>

```python
def reset_step_container_configuration_details() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepConfigurationDetails">step_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepContainerConfigurationDetails">step_container_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepConfigurationDetailsInput">step_configuration_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepContainerConfigurationDetailsInput">step_container_configuration_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepNameInput">step_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepName">step_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails">DatasciencePipelineRunStepOverrideDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `step_configuration_details`<sup>Required</sup> <a name="step_configuration_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepConfigurationDetails"></a>

```python
step_configuration_details: DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference</a>

---

##### `step_container_configuration_details`<sup>Required</sup> <a name="step_container_configuration_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepContainerConfigurationDetails"></a>

```python
step_container_configuration_details: DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference</a>

---

##### `step_configuration_details_input`<sup>Optional</sup> <a name="step_configuration_details_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepConfigurationDetailsInput"></a>

```python
step_configuration_details_input: DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails</a>

---

##### `step_container_configuration_details_input`<sup>Optional</sup> <a name="step_container_configuration_details_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepContainerConfigurationDetailsInput"></a>

```python
step_container_configuration_details_input: DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails</a>

---

##### `step_name_input`<sup>Optional</sup> <a name="step_name_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepNameInput"></a>

```python
step_name_input: str
```

- *Type:* str

---

##### `step_name`<sup>Required</sup> <a name="step_name" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.stepName"></a>

```python
step_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatasciencePipelineRunStepOverrideDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetails">DatasciencePipelineRunStepOverrideDetails</a>]

---


### DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference <a name="DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resetCommandLineArguments">reset_command_line_arguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resetEnvironmentVariables">reset_environment_variables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes">reset_maximum_runtime_in_minutes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_command_line_arguments` <a name="reset_command_line_arguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resetCommandLineArguments"></a>

```python
def reset_command_line_arguments() -> None
```

##### `reset_environment_variables` <a name="reset_environment_variables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resetEnvironmentVariables"></a>

```python
def reset_environment_variables() -> None
```

##### `reset_maximum_runtime_in_minutes` <a name="reset_maximum_runtime_in_minutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes"></a>

```python
def reset_maximum_runtime_in_minutes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.commandLineArgumentsInput">command_line_arguments_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.environmentVariablesInput">environment_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput">maximum_runtime_in_minutes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.commandLineArguments">command_line_arguments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.environmentVariables">environment_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">maximum_runtime_in_minutes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_line_arguments_input`<sup>Optional</sup> <a name="command_line_arguments_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.commandLineArgumentsInput"></a>

```python
command_line_arguments_input: str
```

- *Type:* str

---

##### `environment_variables_input`<sup>Optional</sup> <a name="environment_variables_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.environmentVariablesInput"></a>

```python
environment_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `maximum_runtime_in_minutes_input`<sup>Optional</sup> <a name="maximum_runtime_in_minutes_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput"></a>

```python
maximum_runtime_in_minutes_input: str
```

- *Type:* str

---

##### `command_line_arguments`<sup>Required</sup> <a name="command_line_arguments" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```python
command_line_arguments: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.environmentVariables"></a>

```python
environment_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `maximum_runtime_in_minutes`<sup>Required</sup> <a name="maximum_runtime_in_minutes" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```python
maximum_runtime_in_minutes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepConfigurationDetails</a>

---


### DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference <a name="DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetCmd">reset_cmd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetEntrypoint">reset_entrypoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetImageDigest">reset_image_digest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetImageSignatureId">reset_image_signature_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cmd` <a name="reset_cmd" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetCmd"></a>

```python
def reset_cmd() -> None
```

##### `reset_entrypoint` <a name="reset_entrypoint" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetEntrypoint"></a>

```python
def reset_entrypoint() -> None
```

##### `reset_image_digest` <a name="reset_image_digest" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetImageDigest"></a>

```python
def reset_image_digest() -> None
```

##### `reset_image_signature_id` <a name="reset_image_signature_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resetImageSignatureId"></a>

```python
def reset_image_signature_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.cmdInput">cmd_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.containerTypeInput">container_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.entrypointInput">entrypoint_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigestInput">image_digest_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureIdInput">image_signature_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.cmd">cmd</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.containerType">container_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.entrypoint">entrypoint</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigest">image_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureId">image_signature_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cmd_input`<sup>Optional</sup> <a name="cmd_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.cmdInput"></a>

```python
cmd_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_type_input`<sup>Optional</sup> <a name="container_type_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.containerTypeInput"></a>

```python
container_type_input: str
```

- *Type:* str

---

##### `entrypoint_input`<sup>Optional</sup> <a name="entrypoint_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.entrypointInput"></a>

```python
entrypoint_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image_digest_input`<sup>Optional</sup> <a name="image_digest_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigestInput"></a>

```python
image_digest_input: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `image_signature_id_input`<sup>Optional</sup> <a name="image_signature_id_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureIdInput"></a>

```python
image_signature_id_input: str
```

- *Type:* str

---

##### `cmd`<sup>Required</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.cmd"></a>

```python
cmd: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_type`<sup>Required</sup> <a name="container_type" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.containerType"></a>

```python
container_type: str
```

- *Type:* str

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.entrypoint"></a>

```python
entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `image_digest`<sup>Required</sup> <a name="image_digest" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigest"></a>

```python
image_digest: str
```

- *Type:* str

---

##### `image_signature_id`<sup>Required</sup> <a name="image_signature_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureId"></a>

```python
image_signature_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails">DatasciencePipelineRunStepOverrideDetailsStepContainerConfigurationDetails</a>

---


### DatasciencePipelineRunStepRunsList <a name="DatasciencePipelineRunStepRunsList" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunStepRunsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatasciencePipelineRunStepRunsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatasciencePipelineRunStepRunsOutputReference <a name="DatasciencePipelineRunStepRunsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.jobRunId">job_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.stepName">step_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.stepType">step_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRuns">DatasciencePipelineRunStepRuns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `job_run_id`<sup>Required</sup> <a name="job_run_id" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.jobRunId"></a>

```python
job_run_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `step_name`<sup>Required</sup> <a name="step_name" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.stepName"></a>

```python
step_name: str
```

- *Type:* str

---

##### `step_type`<sup>Required</sup> <a name="step_type" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.stepType"></a>

```python
step_type: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRunsOutputReference.property.internalValue"></a>

```python
internal_value: DatasciencePipelineRunStepRuns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunStepRuns">DatasciencePipelineRunStepRuns</a>

---


### DatasciencePipelineRunTimeoutsOutputReference <a name="DatasciencePipelineRunTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import datascience_pipeline_run

datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts">DatasciencePipelineRunTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatasciencePipelineRunTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.datasciencePipelineRun.DatasciencePipelineRunTimeouts">DatasciencePipelineRunTimeouts</a>]

---



