# `apmSyntheticsOnPremiseVantagePointWorker` Submodule <a name="`apmSyntheticsOnPremiseVantagePointWorker` Submodule" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApmSyntheticsOnPremiseVantagePointWorker <a name="ApmSyntheticsOnPremiseVantagePointWorker" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker oci_apm_synthetics_on_premise_vantage_point_worker}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_on_premise_vantage_point_worker

apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  apm_domain_id: str,
  name: str,
  on_premise_vantage_point_id: str,
  resource_principal_token_public_key: str,
  version: str,
  configuration_details: str = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  priority: typing.Union[int, float] = None,
  status: str = None,
  timeouts: ApmSyntheticsOnPremiseVantagePointWorkerTimeouts = None,
  worker_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#apm_domain_id ApmSyntheticsOnPremiseVantagePointWorker#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#name ApmSyntheticsOnPremiseVantagePointWorker#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.onPremiseVantagePointId">on_premise_vantage_point_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#on_premise_vantage_point_id ApmSyntheticsOnPremiseVantagePointWorker#on_premise_vantage_point_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.resourcePrincipalTokenPublicKey">resource_principal_token_public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#resource_principal_token_public_key ApmSyntheticsOnPremiseVantagePointWorker#resource_principal_token_public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#version ApmSyntheticsOnPremiseVantagePointWorker#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.configurationDetails">configuration_details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#configuration_details ApmSyntheticsOnPremiseVantagePointWorker#configuration_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#defined_tags ApmSyntheticsOnPremiseVantagePointWorker#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#freeform_tags ApmSyntheticsOnPremiseVantagePointWorker#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#id ApmSyntheticsOnPremiseVantagePointWorker#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#priority ApmSyntheticsOnPremiseVantagePointWorker#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#status ApmSyntheticsOnPremiseVantagePointWorker#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.workerType">worker_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#worker_type ApmSyntheticsOnPremiseVantagePointWorker#worker_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.apmDomainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#apm_domain_id ApmSyntheticsOnPremiseVantagePointWorker#apm_domain_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#name ApmSyntheticsOnPremiseVantagePointWorker#name}.

---

##### `on_premise_vantage_point_id`<sup>Required</sup> <a name="on_premise_vantage_point_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.onPremiseVantagePointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#on_premise_vantage_point_id ApmSyntheticsOnPremiseVantagePointWorker#on_premise_vantage_point_id}.

---

##### `resource_principal_token_public_key`<sup>Required</sup> <a name="resource_principal_token_public_key" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.resourcePrincipalTokenPublicKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#resource_principal_token_public_key ApmSyntheticsOnPremiseVantagePointWorker#resource_principal_token_public_key}.

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#version ApmSyntheticsOnPremiseVantagePointWorker#version}.

---

##### `configuration_details`<sup>Optional</sup> <a name="configuration_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.configurationDetails"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#configuration_details ApmSyntheticsOnPremiseVantagePointWorker#configuration_details}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#defined_tags ApmSyntheticsOnPremiseVantagePointWorker#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#freeform_tags ApmSyntheticsOnPremiseVantagePointWorker#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#id ApmSyntheticsOnPremiseVantagePointWorker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#priority ApmSyntheticsOnPremiseVantagePointWorker#priority}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#status ApmSyntheticsOnPremiseVantagePointWorker#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#timeouts ApmSyntheticsOnPremiseVantagePointWorker#timeouts}

---

##### `worker_type`<sup>Optional</sup> <a name="worker_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.workerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#worker_type ApmSyntheticsOnPremiseVantagePointWorker#worker_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetConfigurationDetails">reset_configuration_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetWorkerType">reset_worker_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#create ApmSyntheticsOnPremiseVantagePointWorker#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#delete ApmSyntheticsOnPremiseVantagePointWorker#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#update ApmSyntheticsOnPremiseVantagePointWorker#update}.

---

##### `reset_configuration_details` <a name="reset_configuration_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetConfigurationDetails"></a>

```python
def reset_configuration_details() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_priority` <a name="reset_priority" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_worker_type` <a name="reset_worker_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetWorkerType"></a>

```python
def reset_worker_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApmSyntheticsOnPremiseVantagePointWorker resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_on_premise_vantage_point_worker

apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_on_premise_vantage_point_worker

apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_on_premise_vantage_point_worker

apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_on_premise_vantage_point_worker

apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApmSyntheticsOnPremiseVantagePointWorker resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApmSyntheticsOnPremiseVantagePointWorker to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApmSyntheticsOnPremiseVantagePointWorker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApmSyntheticsOnPremiseVantagePointWorker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.geoInfo">geo_info</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.identityInfo">identity_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList">ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.monitorList">monitor_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList">ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.opvpId">opvp_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.opvpName">opvp_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.runtimeId">runtime_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeLastSyncUp">time_last_sync_up</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference">ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.versionDetails">version_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList">ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.apmDomainIdInput">apm_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.configurationDetailsInput">configuration_details_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.onPremiseVantagePointIdInput">on_premise_vantage_point_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.resourcePrincipalTokenPublicKeyInput">resource_principal_token_public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.workerTypeInput">worker_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.configurationDetails">configuration_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.onPremiseVantagePointId">on_premise_vantage_point_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.resourcePrincipalTokenPublicKey">resource_principal_token_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.workerType">worker_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `geo_info`<sup>Required</sup> <a name="geo_info" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.geoInfo"></a>

```python
geo_info: str
```

- *Type:* str

---

##### `identity_info`<sup>Required</sup> <a name="identity_info" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.identityInfo"></a>

```python
identity_info: ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList">ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList</a>

---

##### `monitor_list`<sup>Required</sup> <a name="monitor_list" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.monitorList"></a>

```python
monitor_list: ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList">ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList</a>

---

##### `opvp_id`<sup>Required</sup> <a name="opvp_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.opvpId"></a>

```python
opvp_id: str
```

- *Type:* str

---

##### `opvp_name`<sup>Required</sup> <a name="opvp_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.opvpName"></a>

```python
opvp_name: str
```

- *Type:* str

---

##### `runtime_id`<sup>Required</sup> <a name="runtime_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.runtimeId"></a>

```python
runtime_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_sync_up`<sup>Required</sup> <a name="time_last_sync_up" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeLastSyncUp"></a>

```python
time_last_sync_up: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeouts"></a>

```python
timeouts: ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference">ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `version_details`<sup>Required</sup> <a name="version_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.versionDetails"></a>

```python
version_details: ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList">ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList</a>

---

##### `apm_domain_id_input`<sup>Optional</sup> <a name="apm_domain_id_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.apmDomainIdInput"></a>

```python
apm_domain_id_input: str
```

- *Type:* str

---

##### `configuration_details_input`<sup>Optional</sup> <a name="configuration_details_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.configurationDetailsInput"></a>

```python
configuration_details_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `on_premise_vantage_point_id_input`<sup>Optional</sup> <a name="on_premise_vantage_point_id_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.onPremiseVantagePointIdInput"></a>

```python
on_premise_vantage_point_id_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_principal_token_public_key_input`<sup>Optional</sup> <a name="resource_principal_token_public_key_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.resourcePrincipalTokenPublicKeyInput"></a>

```python
resource_principal_token_public_key_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApmSyntheticsOnPremiseVantagePointWorkerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `worker_type_input`<sup>Optional</sup> <a name="worker_type_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.workerTypeInput"></a>

```python
worker_type_input: str
```

- *Type:* str

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

---

##### `configuration_details`<sup>Required</sup> <a name="configuration_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.configurationDetails"></a>

```python
configuration_details: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `on_premise_vantage_point_id`<sup>Required</sup> <a name="on_premise_vantage_point_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.onPremiseVantagePointId"></a>

```python
on_premise_vantage_point_id: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_principal_token_public_key`<sup>Required</sup> <a name="resource_principal_token_public_key" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.resourcePrincipalTokenPublicKey"></a>

```python
resource_principal_token_public_key: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `worker_type`<sup>Required</sup> <a name="worker_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.workerType"></a>

```python
worker_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApmSyntheticsOnPremiseVantagePointWorkerConfig <a name="ApmSyntheticsOnPremiseVantagePointWorkerConfig" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_on_premise_vantage_point_worker

apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  apm_domain_id: str,
  name: str,
  on_premise_vantage_point_id: str,
  resource_principal_token_public_key: str,
  version: str,
  configuration_details: str = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  priority: typing.Union[int, float] = None,
  status: str = None,
  timeouts: ApmSyntheticsOnPremiseVantagePointWorkerTimeouts = None,
  worker_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#apm_domain_id ApmSyntheticsOnPremiseVantagePointWorker#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#name ApmSyntheticsOnPremiseVantagePointWorker#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.onPremiseVantagePointId">on_premise_vantage_point_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#on_premise_vantage_point_id ApmSyntheticsOnPremiseVantagePointWorker#on_premise_vantage_point_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.resourcePrincipalTokenPublicKey">resource_principal_token_public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#resource_principal_token_public_key ApmSyntheticsOnPremiseVantagePointWorker#resource_principal_token_public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#version ApmSyntheticsOnPremiseVantagePointWorker#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.configurationDetails">configuration_details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#configuration_details ApmSyntheticsOnPremiseVantagePointWorker#configuration_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#defined_tags ApmSyntheticsOnPremiseVantagePointWorker#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#freeform_tags ApmSyntheticsOnPremiseVantagePointWorker#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#id ApmSyntheticsOnPremiseVantagePointWorker#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#priority ApmSyntheticsOnPremiseVantagePointWorker#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#status ApmSyntheticsOnPremiseVantagePointWorker#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.workerType">worker_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#worker_type ApmSyntheticsOnPremiseVantagePointWorker#worker_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#apm_domain_id ApmSyntheticsOnPremiseVantagePointWorker#apm_domain_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#name ApmSyntheticsOnPremiseVantagePointWorker#name}.

---

##### `on_premise_vantage_point_id`<sup>Required</sup> <a name="on_premise_vantage_point_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.onPremiseVantagePointId"></a>

```python
on_premise_vantage_point_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#on_premise_vantage_point_id ApmSyntheticsOnPremiseVantagePointWorker#on_premise_vantage_point_id}.

---

##### `resource_principal_token_public_key`<sup>Required</sup> <a name="resource_principal_token_public_key" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.resourcePrincipalTokenPublicKey"></a>

```python
resource_principal_token_public_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#resource_principal_token_public_key ApmSyntheticsOnPremiseVantagePointWorker#resource_principal_token_public_key}.

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#version ApmSyntheticsOnPremiseVantagePointWorker#version}.

---

##### `configuration_details`<sup>Optional</sup> <a name="configuration_details" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.configurationDetails"></a>

```python
configuration_details: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#configuration_details ApmSyntheticsOnPremiseVantagePointWorker#configuration_details}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#defined_tags ApmSyntheticsOnPremiseVantagePointWorker#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#freeform_tags ApmSyntheticsOnPremiseVantagePointWorker#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#id ApmSyntheticsOnPremiseVantagePointWorker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#priority ApmSyntheticsOnPremiseVantagePointWorker#priority}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#status ApmSyntheticsOnPremiseVantagePointWorker#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.timeouts"></a>

```python
timeouts: ApmSyntheticsOnPremiseVantagePointWorkerTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#timeouts ApmSyntheticsOnPremiseVantagePointWorker#timeouts}

---

##### `worker_type`<sup>Optional</sup> <a name="worker_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.workerType"></a>

```python
worker_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#worker_type ApmSyntheticsOnPremiseVantagePointWorker#worker_type}.

---

### ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo <a name="ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_on_premise_vantage_point_worker

apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo()
```


### ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct <a name="ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_on_premise_vantage_point_worker

apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct()
```


### ApmSyntheticsOnPremiseVantagePointWorkerTimeouts <a name="ApmSyntheticsOnPremiseVantagePointWorkerTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_on_premise_vantage_point_worker

apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#create ApmSyntheticsOnPremiseVantagePointWorker#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#delete ApmSyntheticsOnPremiseVantagePointWorker#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#update ApmSyntheticsOnPremiseVantagePointWorker#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#create ApmSyntheticsOnPremiseVantagePointWorker#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#delete ApmSyntheticsOnPremiseVantagePointWorker#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#update ApmSyntheticsOnPremiseVantagePointWorker#update}.

---

### ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails <a name="ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_on_premise_vantage_point_worker

apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList <a name="ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_on_premise_vantage_point_worker

apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference <a name="ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_on_premise_vantage_point_worker

apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.apmShortId">apm_short_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.collectorEndPoint">collector_end_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo">ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apm_short_id`<sup>Required</sup> <a name="apm_short_id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.apmShortId"></a>

```python
apm_short_id: str
```

- *Type:* str

---

##### `collector_end_point`<sup>Required</sup> <a name="collector_end_point" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.collectorEndPoint"></a>

```python
collector_end_point: str
```

- *Type:* str

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.internalValue"></a>

```python
internal_value: ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo">ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo</a>

---


### ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList <a name="ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_on_premise_vantage_point_worker

apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference <a name="ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_on_premise_vantage_point_worker

apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.isRunNow">is_run_now</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.monitorType">monitor_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.timeAssigned">time_assigned</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct">ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_run_now`<sup>Required</sup> <a name="is_run_now" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.isRunNow"></a>

```python
is_run_now: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `monitor_type`<sup>Required</sup> <a name="monitor_type" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.monitorType"></a>

```python
monitor_type: str
```

- *Type:* str

---

##### `time_assigned`<sup>Required</sup> <a name="time_assigned" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.timeAssigned"></a>

```python
time_assigned: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.internalValue"></a>

```python
internal_value: ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct">ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct</a>

---


### ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference <a name="ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_on_premise_vantage_point_worker

apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApmSyntheticsOnPremiseVantagePointWorkerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a>]

---


### ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList <a name="ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_on_premise_vantage_point_worker

apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference <a name="ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import apm_synthetics_on_premise_vantage_point_worker

apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.latestVersion">latest_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.minSupportedVersion">min_supported_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails">ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `latest_version`<sup>Required</sup> <a name="latest_version" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.latestVersion"></a>

```python
latest_version: str
```

- *Type:* str

---

##### `min_supported_version`<sup>Required</sup> <a name="min_supported_version" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.minSupportedVersion"></a>

```python
min_supported_version: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails">ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails</a>

---



